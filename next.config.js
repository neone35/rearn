const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    clientsClaim: true,
    skipWaiting: true,
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'cacheFirst',
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
      },
    ],
  },
  webpack(config) {
    // Further custom configuration here
    return config;
  },
});
