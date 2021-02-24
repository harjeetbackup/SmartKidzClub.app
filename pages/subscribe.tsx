import PriceListWithSubscribe from 'components/product/subscribe';
import Steps from 'components/steps';
import useGotoRoute from 'hooks/goto-route';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Router from 'next/router';
import { useEffect } from 'react';
import v from 'styles/variables';

const Page = () => {
  const gotoUrl = useGotoRoute();

  useEffect(() => {
    if (gotoUrl) {
      Router.push(gotoUrl);
    }
  }, [gotoUrl]);

  return (
    <>
      <Steps count={2} />

      <h1 style={{ textAlign: 'center', marginTop: v.size.px10 }}>
        Choose a plan
      </h1>

      <PriceListWithSubscribe />
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
