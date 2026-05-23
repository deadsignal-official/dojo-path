const CACHE = 'dojo-path-v1';
const FILES = [
  '/dojo-path/',
    '/dojo-path/index.html',
      '/dojo-path/style.css',
        '/dojo-path/app.js',
          '/dojo-path/manifest.json'
          ];

          self.addEventListener('install', e => {
            e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
            });

            self.addEventListener('fetch', e => {
              e.respondWith(
                  caches.match(e.request).then(r => r || fetch(e.request))
                    );
                    });