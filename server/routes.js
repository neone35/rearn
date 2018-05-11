const routes = require('next-routes')();

routes
  .add('index', '/index')
  .add('about', '/about')
  .add('settings', '/settings')
  .add('addset', '/addset')
  .add('cardset', '/cardset')
  .add('set', '/set/:id', 'cardset');

module.exports = routes;
