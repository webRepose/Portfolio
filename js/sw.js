const cachName = 'cachApp'
const assetURL = [
    '/',
    '/potfolio/portfolio.html',
    '/potfolio/ru.html',
    '/potfolio/styles/adapt.css',
    '/potfolio/styles/style.css',
    '/potfolio/styles/components/footer.css',
    '/potfolio/styles/components/header.css',
    '/potfolio/styles/components/main.css',
    '/potfolio/js/index.js',
    '/potfolio/img',
    '/potfolio/icons',
]

self.addEventListener('install', async event => {
    const cache = await caches.open(cachName);
    await cache.addAll(assetURL);
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})