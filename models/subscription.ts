import { IPrice } from './product';

export interface ISubscription {
  status: string;
  cancel_at_period_end: boolean;
  role?: any;
  trial_end: Duration;
  cancel_at?: Duration;
  stripeLink: string;
  created: Duration;
  price: IPrice;
  current_period_end: Duration;
  ended_at?: Duration;
  trial_start: Duration;
  metadata: any;
  current_period_start: Duration;
  canceled_at?: Duration;
  quantity: number;
  formatted: {
    status: string;
    created: string;
    trial_start: string;
    trial_end: string;
    current_period_end: string;
    current_period_start: string;
  };
}

interface Duration {
  seconds: number;
  nanoseconds: number;
}
