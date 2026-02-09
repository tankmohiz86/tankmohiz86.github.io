const CACHE_NAME = 'expense-splitter-v1';
const urlsToCache = [
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com'
];

// Install event - cache files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // If both cache and network fail, show offline page
        return caches.match('/index.html');
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-expenses') {
    event.waitUntil(syncExpenses());
  }
});

function syncExpenses() {
  // This would sync data when back online
  // For now, it's a placeholder for future enhancement
  return Promise.resolve();
}

// Push notifications (optional - for future enhancement)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New expense added!',
    icon: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 192 192\'><rect width=\'192\' height=\'192\' fill=\'%235c6ac4\'/><text x=\'96\' y=\'140\' font-size=\'120\' text-anchor=\'middle\' fill=\'white\'>💰</text></svg>',
    badge: 'data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 96 96\'><rect width=\'96\' height=\'96\' fill=\'%235c6ac4\'/><text x=\'48\' y=\'70\' font-size=\'60\' text-anchor=\'middle\' fill=\'white\'>💰</text></svg>',
    vibrate: [200, 100, 200],
    tag: 'expense-notification'
  };

  event.waitUntil(
    self.registration.showNotification('Expense Splitter', options)
  );
});
