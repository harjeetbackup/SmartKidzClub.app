import NProgress from 'nprogress';
import { IsCSR } from './common';

let counter = 0;

export default {
  show: () => {
    if (IsCSR) {
      counter++;
      IsCSR && NProgress.start();
    }
  },
  hide: () => {
    if (IsCSR) {
      counter--;
      if (!counter) {
        NProgress.done();
      }
    }
  },
};
