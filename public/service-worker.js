const CACHE_NAME = "expense-tracker-cache-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

// ติดตั้ง Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// ใช้ cache ถ้ามี มิฉะนั้นโหลดจาก network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
