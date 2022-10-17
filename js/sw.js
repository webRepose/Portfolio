// window.addEventListener('load', async() => {
//     if (navigator.serviceWorker) {
//         try {
//             const reg = await navigator.serviceWorker.register('/portfolio/js/sw.js');
//             console.log("sevice worker register success", reg)
//         } catch(e) {
//             console.log("sevice worker register fail")
//         }
//     }

//     // await loadPosts()
// })

// const cachName = 'cachApp'
// const assetURL = [
//     '/',
//     'portfolio.html',
//     'ru.html',
//     '/styles/adapt.css',
//     '/styles/style.css',
//     '/styles/components/footer.css',
//     '/styles/components/header.css',
//     '/styles/components/main.css',
//     '/js/index.js',
//     '/img',
//     '/icons',
// ]

// self.addEventListener('install', async event => {
//     const cache = await caches.open(cachName);
//     await cache.addAll(assetURL);
// })

// self.addEventListener('activate', event => {
//     console.log('[SW]: activate')
// })