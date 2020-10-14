# Test

React stock chart
    "d3-dsv": "^1.0.8",
    "d3-format": "^1.2.1",
    "d3-scale": "^1.0.7",
    "d3-time-format": "^2.1.1",
    "prop-types": "^15.6.0",
    "react-bootstrap": "^0.31.5",
    "react-stockcharts": "^0.7.8",
    "shortid": "^2.2.8"

Service Worker

var CACHE_NAME = 'my-cache_name';
var targetsToCache = [
  '/styles/myStyles.scss',
  'www.stackoverflow.com/'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(targetsToCache);
      })
  );
});

//We need to implement this for any api workings...
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {

         // This returns the previously cached response 
         // or fetch a new once if not already in the cache
            return response || fetch(event.request);
        })
    );
});