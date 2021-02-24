import Onboard from 'components/onboard';
import Steps from 'components/steps';
import useGotoRoute from 'hooks/goto-route';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Router from 'next/router';
import { useEffect } from 'react';
import v from 'styles/variables';

const Page = () => {
  const gotoUrl = useGotoRoute();

  useEffect(() => {
    if (gotoUrl && !gotoUrl.startsWith('/login')) {
      Router.push(gotoUrl);
    }
  }, [gotoUrl]);

  return (
    <>
      <Steps count={1} />

      <h1 style={{ textAlign: 'center', marginTop: v.size.px10 }}>
        Lets get you started in 3 easy steps
      </h1>

      <Onboard />
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
