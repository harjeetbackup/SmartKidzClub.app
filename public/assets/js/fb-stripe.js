let currentUser = null;
const db = firebase.firestore();

function initFirebaseUI() {
	const ui = new firebaseui.auth.AuthUI(firebase.auth());
	if (ui) {
		const uiConfig = {
			callbacks: {
				signInSuccessWithAuthResult: function (authResult, redirectUrl) {
					// User successfully signed in.
					// Return type determines whether we continue the redirect automatically
					// or whether we leave that to developer to handle.
					return true;
				},
				uiShown: function () {
					// The widget is rendered.
					// Hide the loader.
					document.getElementById('loader').style.display = 'none';
				}
			},
			signInOptions: [
				{
					requireDisplayName: true,
					provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
					signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
				},
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				{
					provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
					recaptchaParameters: {
						type: 'image', // 'audio'
						size: 'normal', // 'invisible' or 'compact'
						badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
					},
					defaultCountry: 'US'
				}
			],
			credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
			// Will use popup for IDP Providers sign-in flow instead of the default, redirect.
			signInFlow: 'popup',
			signInSuccessUrl: '/subscribe.html',
			// Terms of service url.
			tosUrl: '/termsofuse.html',
			// Privacy policy url.
			privacyPolicyUrl: '/privacy.html'
		}
		// if (ui.isPendingRedirect()) {
		//     ui.start('#firebaseui-auth-container', uiConfig);
		// }
		// // This can also be done via:
		// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
		//     ui.start('#firebaseui-auth-container', uiConfig);
		// }
		ui.start('#firebaseui-auth-container', uiConfig);
	}
}

function startDataListeners() {
	// Get all our products and render them to the page
	const products = document.querySelector('.products');
	const template = document.querySelector('#product');
	db.collection('products')
		.where('active', '==', true)
		.get()
		.then(function (querySnapshot) {
			querySnapshot.forEach(async function (doc) {
				const priceSnap = await doc.ref
					.collection('prices')
					.orderBy('unit_amount')
					.get();
				if (!'content' in document.createElement('template')) {
					console.error('Your browser doesn’t support HTML template elements.');
					return;
				}

				const product = doc.data();
				const container = template.content.cloneNode(true);

				container.querySelector('h2').innerText = product.name;
				container.querySelector('.description').innerText =
					product.description || '';
				// Prices dropdown
				priceSnap.docs.forEach((doc) => {
					const priceId = doc.id;
					const priceData = doc.data();
					const content = document.createTextNode(
						`${new Intl.NumberFormat('en-US', {
							style: 'currency',
							currency: priceData.currency,
						}).format((priceData.unit_amount / 100).toFixed(2))} per ${priceData.interval
						}`
					);
					const option = document.createElement('option');
					option.value = priceId;
					option.appendChild(content);
					container.querySelector('#price').appendChild(option);
				});

				if (product.images.length) {
					const img = container.querySelector('img');
					img.src = product.images[0];
					img.alt = product.name;
				}

				const form = container.querySelector('form');
				form.addEventListener('submit', subscribe);

				products.appendChild(container);
			});
		});
	// Get all subscriptions for the customer
	db.collection('customers')
		.doc(currentUser)
		.collection('subscriptions')
		.where('status', 'in', ['trialing', 'active'])
		.onSnapshot(async (snapshot) => {
			if (snapshot.empty) {
				// Show products
				document.querySelector('#subscribe').style.display = 'block';
				return;
			}
			document.querySelector('#subscribe').style.display = 'none';
			document.querySelector('#my-subscription').style.display = 'block';
			// In this implementation we only expect one Subscription to exist
			const subscription = snapshot.docs[0].data();
			const priceData = (await subscription.price.get()).data();
			document.querySelector(
				'#my-subscription p'
			).textContent = `You are paying ${new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: priceData.currency,
			}).format((priceData.unit_amount / 100).toFixed(2))} per ${priceData.interval
				}, giving you the role: ${await getCustomClaimRole()}. 🥳`;
		});
}

async function subscribe(event) {
	event.preventDefault();
	document.querySelectorAll('button').forEach((b) => (b.disabled = true));
	const formData = new FormData(event.target);

	const docRef = await db
		.collection('customers')
		.doc(currentUser)
		.collection('checkout_sessions')
		.add({
			price: formData.get('price'),
			success_url: window.location.origin,
			cancel_url: window.location.origin,
		});
	// Wait for the CheckoutSession to get attached by the extension
	docRef.onSnapshot((snap) => {
		const { error, sessionId } = snap.data();
		if (error) {
			// Show an error to your customer and then inspect your function logs.
			alert(`An error occured: ${error.message}`);
			document.querySelectorAll('button').forEach((b) => (b.disabled = false));
		}
		if (sessionId) {
			// We have a session, let's redirect to Checkout
			// Init Stripe
			const stripe = Stripe('pk_test_IyNOaAJ4PM6enpAOYFxW6LzD');
			stripe.redirectToCheckout({ sessionId });
		}
	});
}

// Get custom claim role helper
async function getCustomClaimRole() {
	await firebase.auth().currentUser.getIdToken(true);
	const decodedToken = await firebase.auth().currentUser.getIdTokenResult();
	return decodedToken.claims.stripeRole;
}

// Sign out
document
	.getElementById('signout')
	.addEventListener('click', () => firebase.auth().signOut());

// Billing portal handler
document
	.querySelector('#billing-portal-button')
	.addEventListener('click', async (event) => {
		document.querySelectorAll('button').forEach((b) => (b.disabled = true));

		// Call billing portal function
		const functionRef = firebase
			.app()
			.functions(functionLocation)
			.httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
		const { data } = await functionRef({ returnUrl: window.location.origin });
		window.location.assign(data.url);
	});

firebase.auth().onAuthStateChanged((firebaseUser) => {
	if (firebaseUser) {
		document.querySelector('#loader').style.display = 'none';
		document.querySelector('main').style.display = 'block';
		currentUser = firebaseUser.uid;
		document.querySelector('#cu-name').textContent = `Hi, ${firebaseUser.displayName || 'User'}`;
		startDataListeners();
	} else {
		document.querySelector('main').style.display = 'none';
		initFirebaseUI();
	}
});
