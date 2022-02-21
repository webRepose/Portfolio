const cachName = 'cachApp'
const assetURL = [
    '/',
    'portfolio.html',
    'ru.html',
    '/styles/adapt.css',
    '/styles/style.css',
    '/styles/components/footer.css',
    '/styles/components/header.css',
    '/styles/components/main.css',
    '/js/index.js',
    '/img',
    '/icons',
]

self.addEventListener('install', async event => {
    const cache = await caches.open(cachName);
    await cache.addAll(assetURL);
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})