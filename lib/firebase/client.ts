import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
// import 'firebase/storage';
// import 'firebase/analytics';
// import 'firebase/performance';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
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
