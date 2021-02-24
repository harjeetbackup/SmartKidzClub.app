import Router from 'next/router';
import { useEffect } from 'react';
import { IsCSR } from 'utils/common';
import loader from 'utils/loader';

export const useLoader = () => {
  useEffect(() => {
    if (IsCSR) {
      Router.events.on('routeChangeStart', loader.show);
      Router.events.on('routeChangeComplete', loader.hide);
      Router.events.on('routeChangeError', loader.hide);
    }
    return () => {
      if (IsCSR) {
        Router.events.off('routeChangeStart', loader.show);
        Router.events.off('routeChangeComplete', loader.hide);
        Router.events.off('routeChangeError', loader.hide);
      }
    };
  }, []);
};
