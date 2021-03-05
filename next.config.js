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
    ];
  },
};
