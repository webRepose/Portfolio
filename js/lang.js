'use strict';
const txt = {
    en: {
        'title':'Daniel Agalakov',
        'home':'Home',
        'about':'About me',
        'contacts':'Contacts ',
        'portfolio': 'Portfolio',
        'skills': 'Skills',
        'myspecial':'Frontend programmer',
        'myname':'Daniel Agalakov',
        'AboutMe': 'About me',
        'about-text': "Hi, I'm Daniel – Frontend developer. I'm interested in programming and everything connected with it.",
        'about-text2': 'I graduated from college "(KVPTK) Karaganda Higher Polytechnic College" with a specialty "Applied Bachelor of Information Networks" in 2024.',
        'about-text3': 'Ready for great projects with wonderful people.',
        'Skills': 'Skills',
        'skills-text': 'I work in such languages and tools as:',
        'Portfolio': 'Portfolio',
        'contacts2': 'Contacts',
        'like': 'Like me on Telegram, Vk, GitHub',
        'contacts-text': 'Want to know more or just chat?',
        'contacts-text2': 'You are welcome!',
        'contacts-message': 'Send message',
        'portfolio-more': 'More',
        'portfolio-more2': 'Hide',
    },
    ru: {
        'title':'Даниэль Агалаков',
        'home':'Домой',
        'about':'Обо мне',
        'contacts':'Контакты',
        'portfolio': 'Портфолио',
        'skills': 'Навыки',
        'myspecial':'Фронтенд программист',
        'myname': 'Даниэль Агалаков',
        'AboutMe': 'Обо мне',
        'about-text': 'Привет, Меня зовут Даниэль – я Frontend разработчик. Меня интересует программирование и все что связанно с ним.',
        'about-text2': 'Я закончил колледж "(КВПТК) Карагандинский высший политехнический колледж" со специальностю "Прикладной бакалавр информационных сетей" в 2024.',
        'about-text3': 'Готов для отличных проектов с прекрасными людьми.',
        'Skills': 'Навыки',
        'skills-text': 'Я работаю с такими языками и инструментами как:',
        'Portfolio': 'Портфолио',
        'contacts2': 'Контакты',
        'like': 'Мой Telegram, Vk, GitHub',
        'contacts-text': 'Хотите узнать больше или просто по общаться?',
        'contacts-text2': ' Добро пожаловать!',
        'contacts-message': 'Отправьте сообщение',
        'portfolio-more': 'Еще',
        'portfolio-more2': 'Скрыть',
    },
  };

// change lang fun
document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null,'ru'));

function setLang(lang){
  var p;
  if(!txt.hasOwnProperty(lang)) return;
  if(window.hasOwnProperty('localStorage'))
     window.localStorage.setItem('lang', lang);
  for(p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

// lang auto
if (navigator.language == 'ru-RU') window.localStorage.setItem('lang', 'ru');
else window.localStorage.setItem('lang', 'en');

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);

// Ie to Edge
const ua = window.navigator.userAgent;
if (ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident") > 0) {
    window.location.href = "microsoft-edge:" + window.location.href;

    setTimeout(function () {
        window.location.href = "https://support.microsoft.com/en-us/microsoft-edge/this-website-doesn-t-work-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554";
    }, 0);
}

// change attr fun
function ruTitle() {
  document.querySelector('#home').setAttribute('title', 'Домой');
  document.querySelector('#about').setAttribute('title', 'Обо мне');
  document.querySelector('#skills').setAttribute('title', 'Навыки');
  document.querySelector('#portfolio').setAttribute('title', 'Портфолио');
  document.querySelector('#contacts').setAttribute('title', 'Контакты');
  document.querySelector('#HTML5').setAttribute('href', 'https://ru.wikipedia.org/wiki/HTML5');
  document.querySelector('#CSS3').setAttribute('href', 'https://ru.wikipedia.org/wiki/CSS');
  document.querySelector('#SCSS').setAttribute('href', 'https://ru.wikipedia.org/wiki/Sass');
  document.querySelector('#GIT').setAttribute('href', 'https://ru.wikipedia.org/wiki/GitLab');
  document.querySelector('#JS').setAttribute('href', 'https://ru.wikipedia.org/wiki/JavaScript');
  document.querySelector('#XD').setAttribute('href', 'https://ru.wikipedia.org/wiki/Adobe_XD');
  document.querySelector('#React').setAttribute('href', 'https://ru.wikipedia.org/wiki/React');
  document.querySelector('#contacts-message').setAttribute('title', 'Отправить сообщение');
  document.querySelector('html').setAttribute('lang', 'ru');
  document.querySelector('#upbutton').setAttribute('title', 'вверх');
}
function enTitle() {
  document.querySelector('#home').setAttribute('title', 'Home');
  document.querySelector('#about').setAttribute('title', 'About me');
  document.querySelector('#skills').setAttribute('title', 'Skills');
  document.querySelector('#portfolio').setAttribute('title', 'Portfolio');
  document.querySelector('#contacts').setAttribute('title', 'Contacts');
  document.querySelector('#HTML5').setAttribute('href', 'https://en.wikipedia.org/wiki/HTML5');
  document.querySelector('#CSS3').setAttribute('href', 'https://en.wikipedia.org/wiki/CSS');
  document.querySelector('#SCSS').setAttribute('href', 'https://en.wikipedia.org/wiki/Sass');
  document.querySelector('#GIT').setAttribute('href', 'https://en.wikipedia.org/wiki/GitLab');
  document.querySelector('#JS').setAttribute('href', 'https://en.wikipedia.org/wiki/JavaScript');
  document.querySelector('#XD').setAttribute('href', 'https://en.wikipedia.org/wiki/Adobe_XD');
  document.querySelector('#React').setAttribute('href', 'https://en.wikipedia.org/wiki/React_(JavaScript_library)');
  document.querySelector('#contacts-message').setAttribute('title', 'Send message');
  document.querySelector('html').setAttribute('lang', 'en');
  document.querySelector('#upbutton').setAttribute('title', 'up');
}

 // document.querySelector('.portfolio-dropDown').setAttribute('title', 'View more!');
 // document.querySelector('.portfolio-dropDown').setAttribute('title', 'Посмотреть еще!');

if(lang == 'en') enTitle();
else ruTitle();


const ruClick = document.getElementById('e-lang-ru');
const enClick = document.getElementById('e-lang-en');

enClick.addEventListener('click', ()=> {
  enTitle();
  removeBurger();
})
ruClick.addEventListener('click', ()=> {
  ruTitle();
  removeBurger();
})

