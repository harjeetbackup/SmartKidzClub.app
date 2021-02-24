import { init } from 'next-firebase-auth';
import { firebaseConfig as firebaseClientInitConfig } from './client';

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const initAuth = () =>
  init({
    debug: false,
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    firebaseAdminInitConfig: {
      credential: {
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        // Using JSON to handle newline problems when storing the
        // key as a secret in Vercel. See:
        // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
          : undefined,
      },
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    },
    firebaseClientInitConfig,
    cookies: {
      name: 'SmartKidzClubPremiumApp',
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.NEXT_PUBLIC_COOKIE_SECURE === 'true',
      signed: true,
    },
  });

export default initAuth;
