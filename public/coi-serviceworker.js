/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
/* Enhanced for iLoveMP4 with offline PWA caching + COOP/COEP headers for GitHub Pages */
let coepCredentialless = false;
if (typeof window === 'undefined') {
  const CACHE_NAME = 'ilovemp4-offline-v1';
  const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/manifest.webmanifest',
    '/favicon.svg',
    '/og-preview.svg',
  ];

  self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS).catch(() => {}))
    );
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(
      caches
        .keys()
        .then((keys) =>
          Promise.all(
            keys.map((key) => {
              if (key !== CACHE_NAME) return caches.delete(key);
            })
          )
        )
        .then(() => self.clients.claim())
    );
  });

  self.addEventListener('message', (ev) => {
    if (!ev.data) {
      return;
    } else if (ev.data.type === 'deregister') {
      self.registration
        .unregister()
        .then(() => {
          return self.clients.matchAll();
        })
        .then((clients) => {
          clients.forEach((client) => client.navigate(client.url));
        });
    } else if (ev.data.type === 'coepCredentialless') {
      coepCredentialless = ev.data.value;
    }
  });

  function addCoopCoepHeaders(response) {
    if (!response || response.status === 0) {
      return response;
    }
    const newHeaders = new Headers(response.headers);
    newHeaders.set(
      'Cross-Origin-Embedder-Policy',
      coepCredentialless ? 'credentialless' : 'require-corp'
    );
    if (!coepCredentialless) {
      newHeaders.set('Cross-Origin-Resource-Policy', 'cross-origin');
    }
    newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }

  self.addEventListener('fetch', function (event) {
    const r = event.request;
    if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') {
      return;
    }
    if (r.method !== 'GET') {
      return;
    }

    const request =
      coepCredentialless && r.mode === 'no-cors'
        ? new Request(r, {
            credentials: 'omit',
          })
        : r;

    event.respondWith(
      fetch(request)
        .then((response) => {
          if (
            response &&
            response.status === 200 &&
            (request.url.startsWith(self.location.origin) ||
              request.url.includes('@ffmpeg') ||
              request.url.includes('unpkg.com'))
          ) {
            const cloned = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, cloned).catch(() => {});
            });
          }
          return addCoopCoepHeaders(response);
        })
        .catch(() =>
          caches.match(request).then((cached) => {
            if (cached) {
              return addCoopCoepHeaders(cached);
            }
            return caches.match('/');
          })
        )
    );
  });
} else {
  (() => {
    const reloadedBySelf = window.sessionStorage.getItem('coiReloadedBySelf');
    window.sessionStorage.removeItem('coiReloadedBySelf');
    const coepDegrading = reloadedBySelf === 'coepdegrade';

    const n = navigator;
    if (n.serviceWorker && n.serviceWorker.controller) {
      n.serviceWorker.controller.postMessage({
        type: 'coepCredentialless',
        value: !(coepDegrading || window.crossOriginIsolated),
      });
    }

    if (window.crossOriginIsolated !== false || reloadedBySelf) {
      return;
    }

    if (!window.isSecureContext) {
      return;
    }

    if (n.serviceWorker) {
      n.serviceWorker.register(window.document.currentScript.src).then(
        (registration) => {
          registration.addEventListener('updatefound', () => {
            if (
              registration.installing &&
              !n.serviceWorker.controller
            ) {
              registration.installing.addEventListener('statechange', function () {
                if (this.state === 'activated') {
                  window.sessionStorage.setItem('coiReloadedBySelf', 'true');
                  window.location.reload();
                }
              });
            }
          });
          if (registration.active && !n.serviceWorker.controller) {
            window.sessionStorage.setItem('coiReloadedBySelf', 'true');
            window.location.reload();
          }
        },
        (err) => {
          console.error('COI Service Worker failed to register:', err);
        }
      );
    }
  })();
}
