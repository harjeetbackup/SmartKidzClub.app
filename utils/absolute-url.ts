/* globals window */

import { IncomingMessage } from 'http';
import { NextApiRequest } from 'next';

const getAbsoluteURL = (
  url: string,
  req?: NextApiRequest | IncomingMessage
) => {
  let host;
  if (req) {
    host = req.headers.host;
  } else {
    if (typeof window === 'undefined') {
      throw new Error(
        'The "req" parameter must be provided if on the server side.'
      );
    }
    host = window.location.host;
  }
  const isLocalhost = host?.indexOf('localhost') === 0;
  const protocol = isLocalhost ? 'http' : 'https';
  return `${protocol}://${host}${url}`;
};

export default getAbsoluteURL;
