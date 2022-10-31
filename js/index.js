// menu burger
const burger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.menu-mobile');
const scroll = document.querySelector('html,body');
const select = document.querySelector('.info-select');
if (burger) {
    burger.addEventListener("click", function (e) {
        burger.classList.toggle('_activeBtn');
        menuMobile.classList.toggle('_active');
        select.classList.toggle('_select');
        scroll.classList.toggle('_lock');
    })
}

const links = document.querySelectorAll(".link")
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
const showPortfolio = document.querySelector('.portfolio-dropDown');
const disabledPortfolio = document.querySelector('._none');
const activeDropDown = document.querySelector('._activeDropDown');
const changeText = document.querySelector('.portfolio-more');
const changeTextShow = document.querySelector('.portfolio-more_hide');

if (showPortfolio) {
    showPortfolio.addEventListener("click", function (y) {
        disabledPortfolio.classList.toggle('_activePortfolio');
        showPortfolio.classList.toggle('_activeDropDown');
        changeText.classList.toggle('_none');
        changeTextShow.classList.toggle('_activePortfolio');
    }
    )
}

// preloader

const preloader = document.querySelector('.preloader');
const preloaderLock = document.querySelector('html,body');
preloaderLock.classList.add('_lock');
window.addEventListener('load', ()=> {
    preloader.remove()
    preloaderLock.classList.remove('_lock');
})