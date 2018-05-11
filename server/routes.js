const routes = require('next-routes')();

routes
  .add('index', '/index')
  .add('about', '/about')
  .add('settings', '/settings')
  .add('addset', '/addset')
  .add('set', '/set/:id', 'cardset')
  .add('/set/:id/learn', 'cardset');

module.exports = routes;
