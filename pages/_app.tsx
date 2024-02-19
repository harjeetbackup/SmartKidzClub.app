import Header from 'components/header';
import config from 'config';
import GlobalProvider from 'context/global';
import { useLoader } from 'hooks/loader';
import firebaseInit from 'lib/firebase/auth';
import { db } from 'lib/firebase/client';
import { IProduct } from 'models';
//import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Head from 'next/head';
import 'nprogress/css/nprogress.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toast';
import GlobalStyle from 'styles';
import { ProductsWithPrices } from 'utils/product';

firebaseInit();

function App({ Component, pageProps }: any) {
  const [products, setProducts] = useState([] as IProduct[]);

  console.log({
    env: config.env,
    nodeEnv: config.nodeEnv,
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
        <title>SmartKidzClub Premium App</title>
      </Head>
      <GlobalStyle />
      <ToastContainer position='bottom-center' delay={4000} />
      <GlobalProvider products={products}>
        <Header {...pageProps} />
        <Component {...pageProps} />
      </GlobalProvider>
    </>
  );
}

export default App;
