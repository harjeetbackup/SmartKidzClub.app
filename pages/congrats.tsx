import confetti from 'canvas-confetti';
import { DownloadApp } from 'components/account/style';
import { Subscribed } from 'components/product/style';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
// import useGotoRoute from 'hooks/goto-route';
import Link from 'next/link';
// import Router from 'next/router';
import { useEffect } from 'react';

const Page = () => {
  // const gotoUrl = useGotoRoute();

  useEffect(() => {
    confetti({
      spread: 70,
      particleCount: 100,
      origin: { y: 0.6 },
    });
  }, []);

  // useEffect(() => {
  //   console.log(gotoUrl);

  //   if (gotoUrl && ['/login', '/subscribe'].some(s => gotoUrl.startsWith(s))) {
  //     Router.push(gotoUrl);
  //   }
  // }, [gotoUrl]);

  return (
    <>
      <Subscribed>
        <h1>Congratulations</h1>
        <h2>You are now a proud user of SmartKidzClub premium app!</h2>
        <h3>🎉 🥳 🎉 🥳 🎉</h3>
        <p>
          You can visit{' '}
          <Link href='/account' as='/account'>
            <a>your account</a>
          </Link>{' '}
          page to view further details
        </p>

        <DownloadApp>
          <div>
            <p>
              Download the app on your device and sign in using the same email
              and password that was used to create this account
            </p>
            <div>
              <a
                title='Download iOS App'
                target='_blank'
                rel='noopener noreferrer'
                className='ios'
                href='https://apps.apple.com/us/app/smart-kidz-club-premium-app/id532545204?ls=1'
              />
              <a
                title='Download Android App'
                target='_blank'
                rel='noopener noreferrer'
                className='android'
                href='https://play.google.com/store/apps/details?id=com.skc.smartkidzclub'
              />
            </div>
          </div>
        </DownloadApp>
      </Subscribed>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
