const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^\//,
        handler: 'networkFirst',
        options: {
          cacheName: 'main',
        },
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheName: 'api',
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true',
            },
          },
        },
      },
      {
        urlPattern: /\.(?:png|gif|jpg|jpeg|svg)$/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
      {
        urlPattern: new RegExp('https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css'),
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'bootstrap',
        },
      },
      {
        urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'googleapis',
          maxEntries: 30,
        },
      },
    ],
  },
});
