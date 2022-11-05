const staticCacheName = 'v1';

self.addEventListener('install', async (event) => {
    const resCache = await caches.open(staticCacheName);
    await resCache.addAll([
        'p.html',
        'js/index.js',
        'js/lang.js',
        'styles/style.css',
        'styles/adapt.css',
        'img',
        'icons',
    ]);
})
self.addEventListener('activate', async (event) => {
   const cacheVers = await caches.keys()
   await Promise.all(
    cacheVers
    .filter(version => version !== staticCacheName)
    .map(version => caches.delete(version))
   )
})

async function cacheFirst(request) {
    const cached = await caches.match(request);
    return cached ?? await fetch(request);
}

self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request));
})