self.__precacheManifest = [{"url":"\\_next\\198709d5-d0be-4678-b36e-d3b2d1e97cda\\page\\cardset.js","revision":"198709d5-d0be-4678-b36e-d3b2d1e97cda"},{"url":"\\_next\\198709d5-d0be-4678-b36e-d3b2d1e97cda\\page\\index.js","revision":"198709d5-d0be-4678-b36e-d3b2d1e97cda"},{"url":"\\_next\\198709d5-d0be-4678-b36e-d3b2d1e97cda\\page\\settings.js","revision":"198709d5-d0be-4678-b36e-d3b2d1e97cda"},{"url":"\\_next\\198709d5-d0be-4678-b36e-d3b2d1e97cda\\page\\_document.js","revision":"198709d5-d0be-4678-b36e-d3b2d1e97cda"},{"url":"\\_next\\198709d5-d0be-4678-b36e-d3b2d1e97cda\\page\\_error.js","revision":"198709d5-d0be-4678-b36e-d3b2d1e97cda"}]
/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\//, workbox.strategies.networkFirst({ cacheName: "main", plugins: [] }), 'GET');
workbox.routing.registerRoute(/api/, workbox.strategies.networkFirst({ cacheName: "api", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200],"headers":{"x-test":"true"}})] }), 'GET');
workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, workbox.strategies.cacheFirst({ cacheName: "images", plugins: [new workbox.expiration.Plugin({"maxEntries":60,"maxAgeSeconds":2592000})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/unpkg.com\/bootstrap-material-design@4.1.1\/dist\/css\/bootstrap-material-design.min.css/, workbox.strategies.cacheFirst({ cacheName: "bootstrap", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.staleWhileRevalidate({ cacheName: "googleapis", plugins: [new workbox.expiration.Plugin({"maxEntries":30})] }), 'GET');
