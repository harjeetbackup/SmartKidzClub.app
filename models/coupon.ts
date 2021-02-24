export interface ICoupon {
  amount_off?: number;
  currency?: number;
  duration?: string;
  duration_in_months?: number;
  formatted: { amount: string };
  id: string;
  name: string;
  percent_off?: number;
}
