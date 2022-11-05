const staticCacheName = 'v1';
const ass = [
    '/Portfolio/p.html',
    '/Portfolio/js/index.js',
    '/Portfolio/js/lang.js',
    '/Portfolio/styles/style.css',
    '/Portfolio/styles/adapt.css',
    '/Portfolio/img/1.webp',
    '/Portfolio/img/2.1.webp',
    '/Portfolio/img/3.1.webp',
    '/Portfolio/img/css-3-logo.webp',
    '/Portfolio/img/down.webp',
    '/Portfolio/img/github.webp',
    '/Portfolio/img/gitlab.webp',
    '/Portfolio/img/html5.webp',
    '/Portfolio/img/MoonCoach.webp',
    '/Portfolio/img/nerdify.webp',
    '/Portfolio/img/neurolink.webp',
    '/Portfolio/img/SCSS.webp',
    '/Portfolio/img/Star.webp',
    '/Portfolio/img/StarG.webp',
    '/Portfolio/img/StarWhite.webp',
    '/Portfolio/img/telegram-logo-png-png-file-svg-980.webp',
    '/Portfolio/img/up3.webp',
    '/Portfolio/img/vk.webp',
    '/Portfolio/icons/icon-48x48.png',
    '/Portfolio/icons/icon-72x72.png',
    '/Portfolio/icons/icon-96x96.png',
    '/Portfolio/icons/icon-128x128.png',
    '/Portfolio/icons/icon-144x144.png',
    '/Portfolio/icons/icon-152x152.png',
    '/Portfolio/icons/icon-192x192.png',
    '/Portfolio/icons/icon-384x384.png',
    '/Portfolio/icons/icon-512x512.png',
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