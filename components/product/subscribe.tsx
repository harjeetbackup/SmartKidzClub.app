import Grid from 'components/core/grid';
import Overlay, { LoadIcon } from 'components/core/overlay';
import FreeTrialLink from 'components/free-trial-button/style';
import { useGlobal } from 'context/global';
import { db } from 'lib/firebase/client';
import {
  CreateCouponId,
  CreateRewardfulClientRefId,
  GetCouponInfo,
} from 'lib/rewardful';
import stripe from 'lib/stripe';
import { IAuth, IPrice } from 'models';
import { useAuthUser } from 'next-firebase-auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import v from 'styles/variables';
import routeVia from 'utils/route-via';
import Hint from './hint';
import Price from './price';
import Wrapper, { AllPrices, Products, PromoWrapper } from './style';

export default function PriceList() {
  const coupon = GetCouponInfo();
  const auth = useAuthUser() as IAuth;
  const { products } = useGlobal() || [];
  const router = useRouter();
  const [status, setStatus] = useState('');
  const [selected, setSelected] = useState<IPrice>();

  useEffect(() => {
    if (products.length && !selected) {
      const bestPrice = products[0].prices.find(f => f.bestValue);
      setSelected(bestPrice);
    }
  }, [products, selected]);

  async function subscribe() {
    setStatus('Step 3: Creating session...');
    const ref = await addToFirebase();
    setStatus('Step 3: Checking out...');
    ref.onSnapshot(async snap => {
      const { error, sessionId } = snap.data() as any;
      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      await checkout(sessionId);
    });
  }

  async function checkout(sessionId: string) {
    if (!sessionId) return;
    const _stripe = await stripe();
    const { error } = await _stripe!.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.error('stripe checkout', error.message);
    }
  }

  async function addToFirebase() {
    const { origin } = location;
    const ref = await db!
      .collection('customers')
      .doc(auth!.id)
      .collection('checkout_sessions')
      .add({
        price: selected!.id,
        priceAmt: selected!.formatted.price,
        priceInterval: selected!.interval,
        via: router.query.via || null,
        allow_promotion_codes: !!coupon,
        cancel_url: routeVia(origin + '/subscribe'),
        success_url: routeVia(origin + '/congrats'),
        ...CreateCouponId(),
        ...CreateRewardfulClientRefId(),
      });
    return ref;
  }

  return (
    <>
      {status && (
        <Overlay>
          {status} <LoadIcon />
        </Overlay>
      )}

      <Grid
        id='pricelist'
        style={{ marginTop: v.size.px30 }}
        areas={{
          xs: ['content/4'],
          m: ['./2 content/6 ./2'],
        }}
      >
        <Wrapper area='content'>
          <>
            {products.map(p => (
              <Products key={p.name}>
                <b>{p.name}</b>
                <AllPrices>
                  {p.prices.map(m => (
                    <Price
                      {...m}
                      key={m.id}
                      selectable
                      onClick={() => !status && setSelected(m)}
                      className={selected?.id === m.id ? 'active' : ''}
                    />
                  ))}
                </AllPrices>
              </Products>
            ))}

            {coupon && (
              <PromoWrapper>
                Use promo code <b>{coupon.id}</b> on the next screen to get{' '}
                <b>{coupon.formatted.amount}</b> discount
              </PromoWrapper>
            )}

            <>
              <FreeTrialLink
                white
                onClick={subscribe}
                as={'button' as any}
                colorProfile='secondary'
                disabled={status || !selected}
              >
                {status ? (
                  <>{status}</>
                ) : (
                  <>
                    Subscribe
                    {selected ? ` for ${selected.formatted.price}` : ''}
                  </>
                )}
              </FreeTrialLink>
            </>

            <Hint />
          </>
        </Wrapper>
      </Grid>
    </>
  );
}
