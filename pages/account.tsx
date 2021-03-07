import Button from 'components/core/button';
import Overlay, { LoadIcon } from 'components/core/overlay';
import useUserWithSubscription from 'hooks/user-with-subscription';
import { app } from 'lib/firebase/client';
import { CreateCouponId, CreateRewardfulClientRefId } from 'lib/rewardful';
import { IAuth } from 'models';
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Wrapper, { Paying, SplitSection, Welcome } from 'styles/pages/account';

function Page() {
  const auth = useAuthUser() as IAuth;
  const { user, subscription } = useUserWithSubscription();
  const [overlay, setOverlay] = useState(true);

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

  useEffect(() => {
    if (user && subscription) {
      setOverlay(false);
    }
  }, [user, subscription]);

  return (
    <>
      <Head>
        <title>My Account | SmartKidzClub Premium App</title>
      </Head>

      {overlay && (
        <Overlay>
          Please wait...
          <LoadIcon />
        </Overlay>
      )}

      {user && subscription && (
        <>
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
              xl: [
                './3 welcome/3 ./3',
                './3 paying/3 ./3',
                './3 status/3 ./3',
                './3 trial/3 ./3',
                './3 subs/3 ./3',
              ],
            }}
          >
            <Welcome area='welcome'>
              <h1>{auth?.email}</h1>

              <Button onClick={manageAccount}>My Subscription</Button>
            </Welcome>

            <Paying area='paying'>
              You have an active plan of{' '}
              <b>
                {subscription.price.formatted.price}/
                {subscription.price.interval}
              </b>
            </Paying>

            <SplitSection area='status'>
              <b>Status</b>
              <div>
                <span>{subscription.formatted.status}</span>
                <span>Created on: {subscription.formatted.created}</span>
              </div>
            </SplitSection>

            <SplitSection area='trial'>
              <b>Trial Period</b>
              <div>
                <span>{subscription.price.trial_period_days} Days</span>
                <span>Start: {subscription.formatted.trial_start}</span>
                <span>End: {subscription.formatted.trial_end}</span>
              </div>
            </SplitSection>

            <SplitSection area='subs'>
              <b>Subscription Period</b>
              <div>
                <span>
                  {subscription.price.interval_count}{' '}
                  {subscription.price.interval} ({subscription.price.type})
                </span>
                <span>
                  Start: {subscription.formatted.current_period_start}
                </span>
                <span>End: {subscription.formatted.current_period_end}</span>
              </div>
            </SplitSection>
          </Wrapper>
        </>
      )}
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
