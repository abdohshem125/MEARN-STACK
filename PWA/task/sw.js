const cachePages = "Pages";

const filesToCache = ["./index.html", "./css/main.css", "./pages/offline.html"];

//install happen for first time and cache static file
self.addEventListener("install", (event) => {
  console.log("Service Worker installing…");
  event.waitUntil(
    caches
      .open(cachePages)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
      .catch((err) => console.error("Cache add failed", err))
  );
});

//activate happen after install success
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating…");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== cachePages)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse.status === 404) {
          console.warn("Page not found:", event.request.url);
          return caches.match("./pages/page1.html");
        }
        return caches.open(cachePages).then((cache) => {
          cache.put(event.request, networkResponse.clone()) ;
          return networkResponse;
        });
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match("./pages/offline.html");
        });
      })
  );
});
