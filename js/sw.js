const cachName = 'cachApp'
const assetURL = [
    '/portfolio.html',
    '/ru.html',
    '/styles/adapt.css',
    '/styles/style.css',
    '/styles/components/footer.css',
    '/styles/components/header.css',
    '/styles/components/main.css',
    '/js/index.js'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cachName).then(cache => cache.addAll(assetURL))
    )
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})