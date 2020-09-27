const redirectUrl = '/subscribe.html';
const functionLocation = 'us-central1';
const containerFUI = '#firebaseui-auth-container';
const stripee = {
  js: Stripe('pk_test_IyNOaAJ4PM6enpAOYFxW6LzD'),
  portalLink: 'ext-firestore-stripe-subscriptions-createPortalLink'
};
const fullRedirectUrl = window.location.origin + redirectUrl;

let currentUser = null, fui = null;
const db = firebase.firestore();
const dq = e => document.querySelector(e);
const dg = e => document.getElementById(e);
const dqa = e => document.querySelectorAll(e);
const asDate = (dt) => dt ? new Date(dt.toDate()).toLocaleString() : ' ';
const createUIToggle = el => ({
  el,
  hide: () => (el.style.display = 'none'),
  show: () => (el.style.display = 'block'),
})

const mainUI = createUIToggle(dq('main'));
const loaderUI = {
  ...createUIToggle(dg('loader')),
  header: createUIToggle(dg('login-header')),
};
const authUI = createUIToggle(dq(containerFUI));
const subscribeUI = createUIToggle(dq('#my-subscription'));
const productListUI = createUIToggle(dq('#productsList'));

function initFirebaseUI() {
  fui = fui || new firebaseui.auth.AuthUI(firebase.auth());
  if (fui) {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirect) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          authUI.hide();
          mainUI.hide();
          productListUI.hide();
          return authResult.additionalUserInfo.isNewUser;
        },
        uiShown: loaderUI.hide
      },
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
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
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInFlow: 'popup',
      signInSuccessUrl: redirectUrl,
      tosUrl: '/termsofuse.html',
      privacyPolicyUrl: '/privacy.html'
    }
    fui.start(containerFUI, uiConfig);
  }
}

function startDataListeners() {
  // Get all our products and render them to the page
  const products = dq('.products');
  subscribeUI.hide();
  if (!products.hasChildNodes()) {
    const template = dq('#product');
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
            const err = 'Your browser doesn’t support HTML template elements.';
            console.error(err);
            return alert(err);
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
  }

  // Get all subscriptions for the customer
  db.collection('customers')
    .doc(currentUser)
    .collection('subscriptions')
    .where('status', 'in', ['trialing', 'active'])
    .onSnapshot(async (snapshot) => {
      if (snapshot.empty) {
        // Show products
        return productListUI.show();
      }
      productListUI.hide();
      subscribeUI.show();
      dq('#my-subscription').style.display = 'block';
      // In this implementation we only expect one Subscription to exist
      const subscription = snapshot.docs[0].data();
      const priceData = (await subscription.price.get()).data();

      dq(
        '#my-subscription p.paying'
      ).textContent = `You are paying ${new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: priceData.currency,
      }).format((priceData.unit_amount / 100).toFixed(2))} per ${priceData.interval
        } 🥳`;

      dq(
        '#my-subscription div.status span.current'
      ).textContent = `${priceData.active ? 'Active' : "Inactive"} (${subscription.status})`;

      dq(
        '#my-subscription div.status span.created'
      ).textContent = `Created On: ${asDate(subscription.created)}`;

      dq(
        '#my-subscription div.trial span.interval'
      ).textContent = `${priceData.trial_period_days} Days`;

      dq(
        '#my-subscription div.trial span.from'
      ).textContent = `Start: ${asDate(subscription.trial_start)}`;

      dq(
        '#my-subscription div.trial span.to'
      ).textContent = `End: ${asDate(subscription.trial_end)}`;

      dq(
        '#my-subscription div.period span.interval'
      ).textContent = `${priceData.interval_count} ${priceData.interval} (${priceData.type})`;

      dq(
        '#my-subscription div.period span.from'
      ).textContent = `Start: ${asDate(subscription.current_period_start)}`;

      dq(
        '#my-subscription div.period span.to'
      ).textContent = `End: ${asDate(subscription.current_period_end)}`;
    });
}

function toggleButtonState(b, disabled) {
  const attrText = b.getAttribute('data-text');
  if (!attrText) {
    b.setAttribute('data-text', b.textContent);
  }
  b.disabled = disabled;
  if (b.id !== 'signout') {
    if (disabled) {
      b.textContent = 'Processing...'
    } else {
      b.textContent = attrText;
    }
  }
}

async function subscribe(event) {
  event.preventDefault();
  dqa('button').forEach(b => toggleButtonState(b, true));
  const formData = new FormData(event.target);

  const docRef = await db
    .collection('customers')
    .doc(currentUser)
    .collection('checkout_sessions')
    .add({
      price: formData.get('price'),
      success_url: fullRedirectUrl,
      cancel_url: fullRedirectUrl,
    });
  // Wait for the CheckoutSession to get attached by the extension
  docRef.onSnapshot((snap) => {
    const { error, sessionId } = snap.data();
    if (error) {
      // Show an error to your customer and then inspect your function logs.
      alert(`An error occured: ${error.message}`);
      dqa('button').forEach((b) => toggleButtonState(b, false));
    }
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      stripee.js.redirectToCheckout({ sessionId });
    }
  });
}

// Sign out
document
  .getElementById('signout')
  .addEventListener('click', () => {
    mainUI.hide();
    productListUI.hide();
    firebase.auth().signOut();
  });

// Billing portal handler
document
  .querySelector('#billing-portal-button')
  .addEventListener('click', async (event) => {
    dqa('button').forEach((b) => toggleButtonState(b, true));

    // Call billing portal function
    const functionRef = firebase
      .app()
      .functions(functionLocation)
      .httpsCallable(stripee.portalLink);
    const { data } = await functionRef({ returnUrl: fullRedirectUrl });
    window.location.assign(data.url);
  });

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    loaderUI.hide();
    authUI.hide();
    mainUI.show();
    currentUser = firebaseUser.uid;
    dq('#cu-name').textContent = `Hi, ${firebaseUser.displayName || 'User'}`;
    startDataListeners();
  } else {
    authUI.show();
    mainUI.hide();
    loaderUI.header.show();
    initFirebaseUI();
  }
});
