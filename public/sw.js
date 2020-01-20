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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "elements/detail-view.js",
    "revision": "8ebf14e61f125502e3f1a8904617d4fd"
  },
  {
    "url": "elements/list-view.js",
    "revision": "ff478d863ad2dd536b42efcf59b90d09"
  },
  {
    "url": "elements/my-app.js",
    "revision": "87240b9a4e2196b818e4bc7bf11bdeca"
  },
  {
    "url": "favicon.ico",
    "revision": "25ba468ed4ce64ffbd05c18ec78a63a4"
  },
  {
    "url": "index.html",
    "revision": "4a8945011ec0cca6c44da278a8472eaf"
  },
  {
    "url": "style.css",
    "revision": "aa71de8c64c1c3bfafe683f461859d88"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));

workbox.routing.registerRoute(/\/data\/.*/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/prpl-ce-firebase\.firebaseapp\.com\/images\//, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
