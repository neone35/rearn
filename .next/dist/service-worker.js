self.__precacheManifest = [{"url":"\\_next\\b2e641db-dd34-42e7-8a6e-38e2c1060387\\page\\cardset.js","revision":"b2e641db-dd34-42e7-8a6e-38e2c1060387"},{"url":"\\_next\\b2e641db-dd34-42e7-8a6e-38e2c1060387\\page\\index.js","revision":"b2e641db-dd34-42e7-8a6e-38e2c1060387"},{"url":"\\_next\\b2e641db-dd34-42e7-8a6e-38e2c1060387\\page\\settings.js","revision":"b2e641db-dd34-42e7-8a6e-38e2c1060387"},{"url":"\\_next\\b2e641db-dd34-42e7-8a6e-38e2c1060387\\page\\_document.js","revision":"b2e641db-dd34-42e7-8a6e-38e2c1060387"},{"url":"\\_next\\b2e641db-dd34-42e7-8a6e-38e2c1060387\\page\\_error.js","revision":"b2e641db-dd34-42e7-8a6e-38e2c1060387"}]
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
workbox.routing.registerRoute(/https:\/\/unpkg.com\/bootstrap-material-design@4.1.1\/dist\/css\/bootstrap-material-design.min.css/, workbox.strategies.staleWhileRevalidate({ cacheName: "bootstrap", plugins: [] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.staleWhileRevalidate({ cacheName: "googleapis", plugins: [new workbox.expiration.Plugin({"maxEntries":30})] }), 'GET');
