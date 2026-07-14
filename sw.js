// Canon — minimal service worker.
// Intentionally does no caching: this app relies on live Gemini API calls
// and local IndexedDB, so there's nothing here worth caching offline.
// It exists purely so Android's install/WebAPK packaging step is satisfied.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
