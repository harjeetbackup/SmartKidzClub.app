import { ICoupon } from 'models';
import { IsCSR } from 'utils/common';

const RewardFul = () => IsCSR && (window as any).Rewardful;

export function CreateRewardfulClientRefId() {
  const createRefId = () =>
    RewardFul()?.referral || 'checkout_' + new Date().getTime();
  const clientReferenceId = createRefId();
  return {
    clientReferenceId,
    client_reference_id: clientReferenceId,
  };
}

export function CreateCouponId() {
  const { id } = (GetCouponInfo() || {}) as ICoupon;

  return {
    couponId: id || null,
    coupon_id: id || null,
  };
}

export function GetCouponInfo(): ICoupon | undefined {
  const _coupon = () => RewardFul()?.coupon;
  const coupon = _coupon() as ICoupon;
  if (coupon) {
    const amount = coupon.percent_off
      ? coupon.percent_off + '%'
      : '$' + coupon.amount_off;
    return {
      ...coupon,
      formatted: {
        amount,
      },
    };
  }
  return undefined;
}
