const CACHE_NAME = 'guvera-barber-v2';
const STATIC_CACHE = 'guvera-static-v2';
const DYNAMIC_CACHE = 'guvera-dynamic-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
  'https://cdn-icons-png.flaticon.com/192/2103/2103633.png',
  'https://cdn-icons-png.flaticon.com/128/2103/2103633.png'
];

// Install event
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== STATIC_CACHE && cache !== DYNAMIC_CACHE) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  if (event.request.url.indexOf('http') === 0) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Return cached version or fetch from network
          return response || fetch(event.request)
            .then(fetchRes => {
              // Check if we received a valid response
              if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic') {
                return fetchRes;
              }

              // Clone the response
              const responseToCache = fetchRes.clone();

              // Add to cache
              caches.open(DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });

              return fetchRes;
            })
            .catch(() => {
              // Fallback for offline
              if (event.request.destination === 'document') {
                return caches.match('/');
              }
            });
        })
    );
  }
});

// Background sync
self.addEventListener('sync', event => {
  console.log('Service Worker: Background sync', event.tag);
});

// Push notifications (if needed in future)
self.addEventListener('push', event => {
  console.log('Service Worker: Push received');
});