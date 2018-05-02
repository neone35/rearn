const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass');

const sassOpts = {
  cssModules: true,
};

const workboxOpts = {
  workboxOpts: {
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: new RegExp('/api/'),
        handler: 'networkFirst',
        options: {
          cacheName: 'api',
          cacheableResponse: {
            statuses: [0, 200],
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
        handler: 'cacheFirst',
        options: {
          cacheName: 'bootstrap',
          expiration: {
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          },
        },
      },
      {
        urlPattern: new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
        handler: 'staleWhileRevalidate',
        options: {
          cacheName: 'googleapis',
          expiration: {
            maxEntries: 30,
          },
        },
      },
      {
        urlPattern: /\/?[^_next]/, // root path at / (between true or false of '/' only)
        handler: 'networkFirst',
        options: {
          cacheName: 'main',
        },
      },
    ],
  },
};

const opts = Object.assign(sassOpts, workboxOpts);
console.log(opts);

module.exports = withSass(withOffline({
  opts,
}));
