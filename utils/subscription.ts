import { ISubscription } from 'models';
import { FormattedPrice } from './price';
const asDate = (dt: any) => (dt ? new Date(dt.toDate()).toLocaleString() : ' ');

export function SubscriptionWithPrices(s: ISubscription) {
  let status = s.status || '';
  const act = s.price.active ? 'Active' : 'Inactive';
  status =
    act.toLowerCase() === status.toLowerCase()
      ? act
      : status
      ? `${act} (${status})`
      : act;
  const created = asDate(s.created);
  const trial_start = asDate(s.trial_start);
  const trial_end = asDate(s.trial_end);
  const current_period_end = asDate(s.current_period_end);
  const current_period_start = asDate(s.current_period_start);
  const formatted = {
    status,
    created,
    trial_start,
    trial_end,
    current_period_end,
    current_period_start,
  };
  return {
    ...s,
    formatted,
    price: { ...s.price, formatted: FormattedPrice(s.price) },
  } as ISubscription;
}
