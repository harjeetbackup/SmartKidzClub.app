import { IncomingMessage } from 'http';
import { IProduct } from 'models';
import { NextApiRequest } from 'next';
import getAbsoluteURL from 'utils/absolute-url';

const URL = '/api/product';

export default {
  get: async (req?: NextApiRequest | IncomingMessage) => {
    const url = getAbsoluteURL(URL, req);
    const res = await fetch(url, {
      method: 'GET',
    });
    return (await res.json()) as Promise<IProduct[]>;
  },
};
