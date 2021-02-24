import Router from 'next/router';

export default function withVia(url: string) {
  return url + (Router.query.via ? `?via=${Router.query.via}` : '');
}
