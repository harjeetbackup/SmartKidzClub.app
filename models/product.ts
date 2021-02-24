export interface IPriceFormatted {
  price: string;
  type: 'Recurring' | 'One Time';
  interval?: 'Month' | 'Year';
}

export interface IPrice {
  id: string;
  trial_period_days: number;
  interval_count: number;
  interval: 'month' | 'year' | 'one-time';
  currency: string;
  type: 'recurring' | 'one_time';
  unit_amount: number;
  active: boolean;
  description: string;
  bestValue: boolean;
  seq: number;
  formatted: IPriceFormatted;
}

export interface IProduct {
  origin: string;
  id: string;
  description: string;
  active: boolean;
  images: string[];
  role?: any;
  name: string;
  prices: IPrice[];
  _host: string;
}
