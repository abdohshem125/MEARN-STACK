const APP2_CACHE = "app2-cache-v1";

const APP2_FILES = [
  "/",
  "/home_app2.html",
  "/css/app2_main.css",
  "/pages/pageA.html",
  "/css/app2_pageA.css",
  "/pages/offline_app2.html",
  "/css/app2_offline.css",
  "/pages/notfound_app2.html",
  "/css/app2_notfound.css",
  "/manifest_and_icons/manifest_app2.json",
];

// ✅ Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(APP2_CACHE).then((cache) => cache.addAll(APP2_FILES))
  );
});

// ✅ Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== APP2_CACHE)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// ✅ Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;

      return fetch(event.request)
        .then((netRes) => {
          if (netRes.status === 404) {
            return caches.match("/pages/notfound_app2.html");
          }
          return netRes;
        })
        .catch(() => caches.match("/pages/offline_app2.html"));
    })
  );
});
