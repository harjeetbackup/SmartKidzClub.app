import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
import { IsCSR } from 'utils/common';
import Login from './style';

// next-firebase-auth inits Firebase automatically

const firebaseAuthConfig = {
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
  tosUrl: '/terms-of-use',
  privacyPolicyUrl: '/privacy-policy',
  signInFlow: 'popup',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const FirebaseAuth = () => {
  const [renderAuth, setRenderAuth] = useState(false);
  useEffect(() => {
    if (IsCSR) {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {renderAuth ? (
        <Login uiConfig={firebaseAuthConfig} firebaseAuth={firebase.auth()} />
      ) : null}
    </div>
  );
};

export default FirebaseAuth;
