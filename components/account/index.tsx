import Button from 'components/core/button';
import Overlay, { Rotate } from 'components/core/overlay';
import { app } from 'lib/firebase/client';
import { CreateCouponId, CreateRewardfulClientRefId } from 'lib/rewardful';
import { IAuth, ISubscription } from 'models';
import Router from 'next/router';
import { useState } from 'react';
import v from 'styles/variables';
import Wrapper, { Paying, SplitSection, Welcome } from './style';

export default function Account(s: ISubscription & { auth?: IAuth }) {
  const [overlay, setOverlay] = useState(false);

  async function manageAccount() {
    setOverlay(true);
    try {
      const func = app.functions('us-central1');
      const functionRef = func.httpsCallable(
        'ext-firestore-stripe-subscriptions-createPortalLink'
      );
      const { data } = await functionRef({
        returnUrl: location.origin + '/account',
        ...CreateCouponId(),
        ...CreateRewardfulClientRefId(),
      });
      Router.push(data.url);
    } catch (error) {
      setOverlay(false);
    }
  }

  return (
    <>
      {overlay && (
        <Overlay>
          Please wait...
          <Rotate>⌛</Rotate>
        </Overlay>
      )}

      <Wrapper
        areas={{
          xs: ['welcome/4', 'paying/4', 'status/4', 'trial/4', 'subs/4'],
          m: [
            './2 welcome/4 ./2',
            './2 paying/4 ./2',
            './2 status/4 ./2',
            './2 trial/4 ./2',
            './2 subs/4 ./2',
          ],
        }}
      >
        <Welcome area='welcome'>
          <h1>{s.auth?.email}</h1>
          <Button
            flipColor
            colorProfile='primary'
            onClick={manageAccount}
            style={{ color: v.color.black, opacity: 1 }}
          >
            My Subscription
          </Button>
        </Welcome>

        <Paying area='paying'>
          You have an active plan of{' '}
          <b>
            {s.price.formatted.price}/{s.price.interval}
          </b>
        </Paying>

        <SplitSection area='status'>
          <b>Status</b>
          <div>
            <span>{s.formatted.status}</span>
            <span>Created on: {s.formatted.created}</span>
          </div>
        </SplitSection>

        <SplitSection area='trial'>
          <b>Trial Period</b>
          <div>
            <span>{s.price.trial_period_days} Days</span>
            <span>Start: {s.formatted.trial_start}</span>
            <span>End: {s.formatted.trial_end}</span>
          </div>
        </SplitSection>

        <SplitSection area='subs'>
          <b>Subscription Period</b>
          <div>
            <span>
              {s.price.interval_count} {s.price.interval} ({s.price.type})
            </span>
            <span>Start: {s.formatted.current_period_start}</span>
            <span>End: {s.formatted.current_period_end}</span>
          </div>
        </SplitSection>
      </Wrapper>
    </>
  );
}
