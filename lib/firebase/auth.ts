import config from 'config';
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
        clientEmail: config.firebase.clientEmail,
        projectId: config.firebase.projectId,
        // Using JSON to handle newline problems when storing the
        // key as a secret in Vercel. See:
        // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
        privateKey: config.firebase.privateKey
          ? JSON.parse(config.firebase.privateKey)
          : undefined,
      },
      databaseURL: config.firebase.databaseURL,
    },
    firebaseClientInitConfig,
    cookies: {
      name: 'SmartKidzClubPremiumApp',
      keys: [config.cookie.secret.current, config.cookie.secret.previous],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: config.cookie.secure === 'true',
      signed: true,
    },
  });

export default initAuth;
