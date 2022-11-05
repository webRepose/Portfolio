// menu burger
const burger = document.querySelector('.menu-burger'),
menuMobile = document.querySelector('.menu-mobile'),
scroll = document.querySelector('html,body'),
select = document.querySelector('.info-select');
if (burger) {
    burger.addEventListener("click", function (e) {
        burger.classList.toggle('_activeBtn');
        menuMobile.classList.toggle('_active');
        select.classList.toggle('_select');
        scroll.classList.toggle('_lock');
    })
}

const links = document.querySelectorAll(".link");
for (const item of links) {
    item.addEventListener('click', function (del) {
        burger.classList.remove('_activeBtn');
        menuMobile.classList.remove('_active');
        scroll.classList.remove('_lock');
        select.classList.remove('_select');
    })
}

// swiper libary
new Swiper('.swiper-container__png', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    autoHeight: true,
    loop: true,

    autoplay: {
        delay: 5000,
    },
    speed: 400,
});

// up on click button
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 500) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
}

// drop down fun portfolio work
const showPortfolio = document.querySelector('.portfolio-dropDown'),
none = document.querySelector('._none'),
activeDropDown = document.querySelector('._activeDropDown'),
changeText = document.querySelector('.portfolio-more'),
changeTextShow = document.querySelector('.portfolio-more_hide');

if (showPortfolio) {
    showPortfolio.addEventListener("click", function (y) {
        none.classList.toggle('_activePortfolio');
        showPortfolio.classList.toggle('_activeDropDown');
        changeText.classList.toggle('_none');
        changeTextShow.classList.toggle('_activePortfolio');
    }
    )
}

// preloader

const preloader = document.querySelector('.preloader'),
preloaderLock = document.querySelector('html,body');
window.addEventListener('load', ()=> {
    preloader.remove()
    preloaderLock.classList.remove('_lock');
})

window.addEventListener('load', async () => {
    if(navigator.serviceWorker) {
        try {
            await navigator.serviceWorker.register('js/sw.js');
            console.log('ve');
        } catch (e) {
            console.log('v');
        }
    }
})

// const pass = 'sd44D7DSA736sdDP5ILd'

// const ContentSecurityPolicy = `
//     script-src 'report-sample' 'self' 'nonce-${pass}'; 
//     script-src-elem 'self' 'nonce-${pass}'; 
//     script-src-attr 'self';
//     style-src 'self' 'report-sample'; 
//     style-src-elem  'self'  'unsafe-inline'; 
//     style-src-attr 'self' 'unsafe-inline'; 
//     connect-src 'self';
//     base-uri 'none';
//     form-action 'self';
//     object-src 'none'; 
//     child-src 'none';
//     frame-src 'self';
//     img-src 'self' data: blob:;
//     manifest-src 'self';
//     prefetch-src 'self';
//     worker-src 'self';
//     font-src 'self';  
//     default-src 'self';
//     media-src 'self';
//     frame-ancestors 'self';
//     upgrade-insecure-requests;
//     report-uri https://webrepose.github.io/Portfolio/p;
// `;