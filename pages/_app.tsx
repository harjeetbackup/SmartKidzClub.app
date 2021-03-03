import Header from 'components/header';
import GlobalProvider from 'context/global';
import { useLoader } from 'hooks/loader';
import firebaseInit from 'lib/firebase/auth';
import { db } from 'lib/firebase/client';
import { IProduct } from 'models';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import 'nprogress/css/nprogress.css';
import { useEffect, useState } from 'react';
import GlobalStyle from 'styles';
import { ProductsWithPrices } from 'utils/product';

firebaseInit();

function App({ Component, pageProps }: AppPropsType) {
  const [products, setProducts] = useState([] as IProduct[]);

  console.log({
    nodeEnv: process.env.NODE_ENV,
    env: process.env.NEXT_PUBLIC_ENV,
  });

  useLoader();

  useEffect(() => {
    (async () => {
      const data = await ProductsWithPrices(db);
      setProducts(data);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>SmarkKidzClub Premium App</title>
      </Head>
      <GlobalStyle />
      <GlobalProvider products={products}>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default App;
