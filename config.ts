import { IsSSR } from 'utils/common';

export default {
  nodeEnv: process.env.NODE_ENV || '',
  env: process.env.NEXT_PUBLIC_ENV || '',
  firebase: {
    clientEmail: IsSSR ? process.env.FIREBASE_CLIENT_EMAIL : '',
    publicApiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    privateKey: IsSSR ? process.env.FIREBASE_PRIVATE_KEY : '',
    location: process.env.NEXT_PUBLIC_STRIPE_LOCATION || '',
    stripePortal: process.env.NEXT_PUBLIC_FIREBASE_STRIPE_PORTAL || '',
  },
  cookie: {
    secret: {
      current: IsSSR ? process.env.COOKIE_SECRET_CURRENT : '',
      previous: IsSSR ? process.env.COOKIE_SECRET_PREVIOUS : '',
    },
    secure: process.env.NEXT_PUBLIC_COOKIE_SECURE || '',
  },
  stripe: {
    secretKey: IsSSR ? process.env.STRIPE_SECRET_KEY : '',
    location: process.env.NEXT_PUBLIC_STRIPE_LOCATION || '',
    webhookSecret: IsSSR ? process.env.STRIPE_WEBHOOK_SECRET : '',
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  },
};
