/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */
import { loadStripe, Stripe } from '@stripe/stripe-js';
import config from 'config';

let stripePromise: Promise<Stripe | null>;

const stripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(config.stripe.publishableKey);
  }
  return stripePromise;
};

export default stripe;
