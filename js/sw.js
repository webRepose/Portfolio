const cachName = 'cachApp'
const assetURL = [
    '/portfolio/portfolio.html',
    '/portfolio/ru.html',
    '/portfolio/styles/adapt.css',
    '/portfolio/styles/style.css',
    '/portfolio/styles/components/footer.css',
    '/portfolio/styles/components/header.css',
    '/portfolio/styles/components/main.css',
    '/portfolio/js/index.js'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cachName).then(cache => cache.addAll(assetURL))
    )
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})