import { IPrice, IPriceFormatted } from 'models';

export function FormattedPrice(p: IPrice) {
  let formatted = {} as IPriceFormatted;
  formatted.price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: p.currency,
  }).format(p.unit_amount / 100);
  if (p.interval) {
    formatted.interval = p.interval === 'month' ? 'Month' : 'Year';
  }
  if (p.type) {
    formatted.type = p.type === 'recurring' ? 'Recurring' : 'One Time';
  }
  return formatted;
}
