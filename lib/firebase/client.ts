// import 'firebase/storage';
// import 'firebase/analytics';
// import 'firebase/performance';
import config from 'config';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: config.firebase.publicApiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Check that `window` is in scope for the analytics module!
  // if (IsCSR) {
  //   // Enable analytics. https://firebase.google.com/docs/analytics/get-started
  //   if ('measurementId' in firebaseConfig) {
  //     firebase.analytics();
  //     firebase.performance();
  //   }
  // }
}

export default firebase;

const app = firebase.app();
const auth = firebase.auth;
const db = firebase.firestore();

export { app, auth, db, firebaseConfig };
