// anim
// LEFT
let observerLeft = new IntersectionObserver(
    (entries, observer)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-left', '')
            }
        })
}, {threshold: 0.7, rootMargin: '20px'})

document.querySelectorAll('.left')
.forEach((way) => observerLeft.observe(way))

// RIGHT

let observerRight = new IntersectionObserver(
    (entries, observer)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-right', '')
            }
        })
}, {threshold: 0.01, rootMargin: '20px'})

document.querySelectorAll('.right')
.forEach((way) => observerRight.observe(way))

// UP

let observerUp = new IntersectionObserver(
    (entries, observer)=> {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('data-up', '')
            }
        })
}, {threshold: 0.01, rootMargin: '20px' })

document.querySelectorAll('.up')
.forEach((way) => observerUp.observe(way))



// menu burger
const burger = document.querySelector('.menu-burger'),
menuMobile = document.querySelector('.menu-mobile'),
scroll = document.querySelector('html,body'),
select = document.querySelector('.info-select');

function addBurger() {
    burger.classList.toggle('_activeBtn');
    menuMobile.classList.toggle('_active');
    select.classList.toggle('_select');
    scroll.classList.toggle('_lock');
}

function removeBurger() {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    scroll.classList.remove('_lock');
    select.classList.remove('_select');
}

if (burger) {
    burger.addEventListener("click", addBurger)
}
const links = document.querySelectorAll(".link");
for (const item of links) {
    item.addEventListener('click', removeBurger)
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
window.onscroll = () => {
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
    showPortfolio.addEventListener("click", (y) => {
        none.classList.toggle('_activePortfolio');
        showPortfolio.classList.toggle('_activeDropDown');
        changeText.classList.toggle('_none');
        changeTextShow.classList.toggle('_activePortfolio');
    })
}

// preloader

const preloader = document.querySelector('.preloader'),
preloaderLock = document.querySelector('html,body');
window.addEventListener('load', ()=> {
    preloader.remove()
    preloaderLock.classList.remove('_lock');
})

// Service worker

window.addEventListener('load', async () => {
    if(navigator.serviceWorker) {
        try {
            await navigator.serviceWorker.register('sw.js');
        } catch (e) {
            let weQ;
        }
    }
})

// swipe menu

let x1 = null;
let y1 = null;
document.addEventListener('touchstart', (e)=> {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}, false);

document.addEventListener('touchmove', (e)=> {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDifference = x2 - x1;
    let yDifference = y2 - y1;

    if(Math.abs(xDifference) > Math.abs(yDifference)) {
        if(xDifference > 0) {
            removeBurger()
        } else {
            addBurger()
        }
    } 

    x1 = null;
    y1 = null;

}, false);