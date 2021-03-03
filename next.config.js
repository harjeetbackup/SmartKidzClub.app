module.exports = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/landing.html',
        destination: '/?landing=1',
        permanent: true,
      },
      {
        source: '/landing',
        destination: '/?landing=1',
        permanent: true,
      },
    ];
  },
};
