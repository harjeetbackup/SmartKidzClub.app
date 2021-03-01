import confetti from 'canvas-confetti';
import { DownloadApp } from 'components/account/style';
import { GridCell } from 'components/core/grid';
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
    <Subscribed
      areas={{
        xs: [
          'congrats/4',
          'welcome/4',
          'download/4',
          'useapp/4',
          'click/4',
          'apps/4',
        ],
        m: [
          './2 congrats/4 ./2',
          './2 welcome/4 ./2',
          './2 download/4 ./2',
          './2 useapp/4 ./2',
          './2 click/4 ./2',
          './2 apps/4 ./2',
        ],
      }}
    >
      <GridCell area='congrats' as='h1'>
        Congratulations!
      </GridCell>

      <GridCell area='welcome' as='p'>
        Welcome to Smart Kidz Club. You've made the right choice
      </GridCell>

      <GridCell area='download' as='p'>
        Download the app on your device and sign in using the same email and
        password that was used to create this account
      </GridCell>

      <GridCell area='useapp' as='p'>
        Use the app every day for 10-20 minutes with your child and see an
        improvement in their knowledge and reading skills in as little as 3
        months
      </GridCell>

      <GridCell area='click' as='p'>
        Click on the Profile menu and visit your{' '}
        <Link href='/account' as='/account'>
          <a>account</a>
        </Link>{' '}
        page to view details
      </GridCell>

      <DownloadApp area='apps'>
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
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
