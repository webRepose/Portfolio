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

window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 500) {
        document.getElementById('upbutton').style.display = 'block';
    } else {
        document.getElementById('upbutton').style.display = 'none';
    }
}


const showPortfolio = document.querySelector('.portfolio-dropDown');
const disabledPortfolio = document.querySelector('._disabledPortfolio');
const activeDropDown = document.querySelector('._activeDropDown');
const changeText = document.querySelector('.portfolio-more');
const changeTextShow = document.querySelector('.portfolio-more_hide');

if (showPortfolio) {
    showPortfolio.addEventListener("click", function (y) {
        disabledPortfolio.classList.toggle('_activePortfolio');
        showPortfolio.classList.toggle('_activeDropDown');
        changeText.classList.toggle('_disabledPortfolio');
        changeTextShow.classList.toggle('_activePortfolio');
    }
    )
}

// const attrEn = document.getElementById('e-lang-en')
// const attrRu = document.getElementById('e-lang-ru')
// const attr = document.querySelector('#home')

// if(attrRu) {
//     attrRu.addEventListener('click', function(){
//         attr.setAttribute('title', 'Домой')
//     })
// } if(attrEn) {
//     attrEn.addEventListener('click', function(){
//         attr.setAttribute('title', 'Home')
//     })
// }

// if(window.localStorage.getItem('lang') == 'en') {
//     attr.setAttribute('title', 'Home')
// }
// else if (window.localStorage.getItem('lang') == 'ru') {
//     attr.setAttribute('title', 'Домой')
// }