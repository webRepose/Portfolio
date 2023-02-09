const staticCacheName = 'v1';
const allCache = [
    '/Portfolio/index.html',
    '/Portfolio/js/index.js',
    '/Portfolio/js/lang.js',
    '/Portfolio/styles/style.css',
    '/Portfolio/styles/adapt.css',
    'https://unpkg.com/swiper@8/swiper-bundle.min.css',
    'https://unpkg.com/swiper@8/swiper-bundle.min.js',
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
    '/Portfolio/img/starG.webp',
    '/Portfolio/img/StarWhite.webp',
    '/Portfolio/img/telegram-logo-png-png-file-svg-980.webp',
    '/Portfolio/img/up3.webp',
    '/Portfolio/img/vk.webp',
    '/Portfolio/icons/android-launchericon-48-48.png',
    '/Portfolio/icons/android-launchericon-72-72.png',
    '/Portfolio/icons/android-launchericon-96-96.png',
    '/Portfolio/icons/android-launchericon-128-128.png',
    '/Portfolio/icons/android-launchericon-144-144.png',
    '/Portfolio/icons/android-launchericon-152-152.png',
    '/Portfolio/icons/android-launchericon-192-192.png',
    '/Portfolio/icons/android-launchericon-252-252.png',
    '/Portfolio/icons/android-launchericon-384-384.png',
    '/Portfolio/icons/android-launchericon-512-512.png',
]

self.addEventListener('install', async (event) => {
    const resCache = await caches.open(staticCacheName);
    await resCache.addAll(allCache);
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