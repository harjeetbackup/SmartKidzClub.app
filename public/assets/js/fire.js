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
                requireDisplayName: false,
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
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
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
