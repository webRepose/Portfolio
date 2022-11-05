const staticCacheName = 'v1';
const ass = [
    '/Portfolio/p.html',
    '/Portfolio/js/index.js',
    '/Portfolio/js/lang.js',
    '/Portfolio/styles/style.css',
    '/Portfolio/styles/adapt.css',
    '/Portfolio/img',
    '/Portfolio/icons',
]

self.addEventListener('install', async (event) => {
    const resCache = await caches.open(staticCacheName);
    await resCache.addAll(ass);
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