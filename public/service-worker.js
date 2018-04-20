let CACHE_NAME = 'static-cache';
let urlsToCache = [
  '/',
  '/index.html',
  '/js/app.js',
  '/css/app.css',
  '/images/touch/icon-192x192.png'
];

// Cache static assets
self.addEventListener('install', function(event){
  console.log('SW Installed');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept the fetch event
self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request).then(function(response){
      // return response or fetch a network request
      return response;
      // return response || fetch(event.request);
    })
  );
});

// Fetch & store missing files
// function fetchAndCache(url) {
//   return fetch(url).then(function(response) {
//     return caches.open(CACHE_NAME).then(function(cache) {
//       cache.put(url, response.clone());
//       return response;
//     });
//   });
// }