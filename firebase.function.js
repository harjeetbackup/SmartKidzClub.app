const { https } = require('firebase-functions');
const { default: next } = require('next');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
  dev: isDev,
  //location of .next generated after running -> yarn build
  conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.skc_app = https.onRequest(async (req, res) => {
  console.log({ isDev, req })
  await server.prepare();
  return nextjsHandle(req, res);
});
