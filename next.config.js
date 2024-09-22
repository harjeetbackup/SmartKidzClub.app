const redirected = (source, destination) => [
  {
    source: `${source}.html`,
    destination,
    permanent: true,
  },
  {
    source,
    destination,
    permanent: true,
  },
];

module.exports = {
  trailingSlash: false,
  async redirects() {
    return [
      ...redirected('/landing', '/?landing=1'),
      ...redirected('/signup', '/sign-up'),
      ...redirected('/addaccess', '/add-access'),
      ...redirected('/termsofuse', '/terms-of-use'),
      ...redirected('/privacy', '/privacy-policy'),
      ...redirected('/readingclubs/skc_reading_circle', '/reading-circle'),
    ];
  },
  async rewrites() {
    return [
      {
        source: '/delete_account.html',
        destination: '/html/delete_account.html',
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: '/api/.well-known/android'
      },
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/api/.well-known/apple'
      },
    ]
  },
};
