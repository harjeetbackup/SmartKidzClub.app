import confetti from 'canvas-confetti';
import { DownloadApp } from 'components/account/style';
import { Subscribed } from 'components/product/style';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Link from 'next/link';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    confetti({
      spread: 70,
      particleCount: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <>
      <Subscribed>
        <h1>Congratulations!</h1>
        <p>Welcome to Smart Kidz Club. You've made the right choice</p>
        <p>
          Download the app on your device and sign in using the same email and
          password that was used to create this account
        </p>
        <p>
          Use the app every day for 10-20 minutes with your child and see an
          improvement in their knowledge and reading skills in as little as 3
          months
        </p>
        <p>
          Click on the Profile menu and visit your{' '}
          <Link href='/account' as='/account'>
            <a>account</a>
          </Link>{' '}
          page to view details
        </p>

        <DownloadApp>
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
        </DownloadApp>
      </Subscribed>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
