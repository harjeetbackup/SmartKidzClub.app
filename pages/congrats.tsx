import confetti from 'canvas-confetti';
import { GridCell } from 'components/core/grid';
import { Android, IOS } from 'components/download-link';
import { withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Wrapper, { Content, DownloadApp } from 'styles/pages/congrats';

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
      <Head>
        <title>SmarkKidzClub Premium App</title>
      </Head>

      <Wrapper
        areas={{
          xs: ['congrats/4', 'content/4'],
          m: ['./2 congrats/4 ./2', './2 content/4 ./2'],
        }}
      >
        <GridCell area='congrats' as='h1'>
          Congratulations!
        </GridCell>

        <Content area='content'>
          Welcome to Smart Kidz Club. You've made the right choice.
          <p>
            Download the app on your device and sign in with the same email and
            password that was used to create this account.
          </p>
          <DownloadApp>
            <IOS />
            <Android />
          </DownloadApp>
          <p>
            Use the app every day for 10-20 minutes with your child and see an
            improvement in their knowledge and reading skills in as little as 3
            months.
          </p>
          <p>
            Click on the Profile menu and visit your{' '}
            <Link href='/account' as='/account'>
              <a>account</a>
            </Link>{' '}
            page to view details.
          </p>
        </Content>
      </Wrapper>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR()();

export default withAuthUser()(Page);
