const routes = require('next-routes')();

routes
  // main routes
  .add('index', '/')
  .add('about', '/about')
  .add('settings', '/settings')
  .add('addset', '/addset')
  .add('set', '/set/:id', 'cardset')
  .add('/set/:id/learn', 'cardset')
  // auth
  .add('login-google', '/auth/google')
  .add('logout', '/api/logout')
  // external
  .add('github-ext', 'https://github.com/neone35/rearn')
  .add('facebook-ext', 'https://www.facebook.com/artur.maslov');

module.exports = routes;
