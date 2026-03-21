// Meridian Service Worker v2 — always fetch fresh, no caching
self.addEventListener('install', e => {
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  // Clear ALL old caches
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});
// Always go to network — no caching
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
