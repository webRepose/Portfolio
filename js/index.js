const burger = document.querySelector('.menu-burger');
const menuMobile = document.querySelector('.menu-mobile');
const scroll = document.querySelector('html,body');
const select = document.querySelector('.info-select');
if (burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle('_activeBtn');
        menuMobile.classList.toggle('_active');
        select.classList.toggle('_select');
        scroll.classList.toggle('_lock');
    })
}

function Links() {
    burger.classList.remove('_activeBtn');
    menuMobile.classList.remove('_active');
    scroll.classList.remove('_lock');
    select.classList.remove('_select');
}

const link = document.querySelector(".link");
link.addEventListener("click", () => {
    Links()
});

const link1 = document.querySelector(".link1");
link1.addEventListener("click", () => {
    Links()
});

const link2 = document.querySelector(".link2");
link2.addEventListener("click", () => {
    Links()
});

const link3 = document.querySelector(".link3");
link3.addEventListener("click", () => {
    Links()
});

const link4 = document.querySelector(".link4");
link4.addEventListener("click", () => {
    Links()
});

new Swiper('.swiper-container__png', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el:'.swiper-pagination',
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

window.onscroll = function() {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
  } else {
      document.getElementById('upbutton').style.display = 'none';
  }
}

window.addEventListener('load', async() => {
    if (navigator.serviceWorker) {
        try {
            const reg = await navigator.serviceWorker.register('/portfolio/js/sw.js');
            console.log("sevice worker register success", reg)
        } catch(e) {
            console.log("sevice worker register fail")
        }
    }

    await LoadPosts()
})