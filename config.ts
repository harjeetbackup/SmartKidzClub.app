export default {
  env: process.env.NEXT_PUBLIC_ENV,
  firebase: {
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    publicApiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    location: process.env.NEXT_PUBLIC_STRIPE_LOCATION,
    stripePortal: process.env.NEXT_PUBLIC_FIREBASE_STRIPE_PORTAL,
  },
  cookie: {
    secret: {
      current: process.env.COOKIE_SECRET_CURRENT,
      previous: process.env.COOKIE_SECRET_PREVIOUS,
    },
    secure: process.env.NEXT_PUBLIC_COOKIE_SECURE,
  },
  stripe: {
    location: process.env.NEXT_PUBLIC_STRIPE_LOCATION,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    secretKey: process.env.STRIPE_SECRET_KEY,
    publishableKey: process.env.pk_test_IyNOaAJ4PM6enpAOYFxW6LzD,
  },
};
