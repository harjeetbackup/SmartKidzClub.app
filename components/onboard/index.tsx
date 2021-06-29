import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect, useState } from 'react';
import Login from './style';

// next-firebase-auth inits Firebase automatically

const firebaseAuthConfig: firebaseui.auth.Config = {
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
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
    setRenderAuth(true);
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
