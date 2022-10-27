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
        'about-text': "Hi, I'm Daniel – HTML/CSS/JS developer from Kazakhstan. I'm interested in programming and everything connected with it.",
        'about-text2': 'I"m studying at college "Computer Engineering" third course.',
        'about-text3': 'Ready for great projects with wonderful people.',
        'Skills': 'Skills',
        'skills-text': 'I work in such languages and tools as',
        'Portfolio': 'Portfolio',
        'portfolio-more': 'More',
        'portfolio-more2': 'Hide',
        'contacts2': 'Contacts',
        'like': 'Like me on Telegram, Vk, GitHub',
        'contacts-text': 'Want to know more or just chat?',
        'contacts-text2': 'You are welcome!',
        'contacts-message': 'Send message',
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
        'about-text': 'Привет, Меня зовут Даниэль – я HTML/CSS/JS разработчик из Казахстана. Меня интересует программирование и все что связанно с ним.',
        'about-text2': 'Я учусь в колледже на "Информационные Технологии" третий курс.',
        'about-text3': 'Готов для отличных проектов с прекрасными людьми.',
        'Skills': 'Навыки',
        'skills-text': 'Я работаю с такими языками и инструментами как',
        'Portfolio': 'Портфолио',
        'portfolio-more': 'Еще',
        'portfolio-more2': 'Скрыть',
        'contacts2': 'Контакты',
        'like': 'Мой Telegram, Vk, GitHub',
        'contacts-text': 'Хотите узнать больше или просто по общаться?',
        'contacts-text2': ' Добро пожаловать!',
        'contacts-message': 'Отправьте сообщение',
    },
  };

document.getElementById('e-lang-en').addEventListener('click', setLang.bind(null,'en'));
document.getElementById('e-lang-ru').addEventListener('click', setLang.bind(null,'ru'));

function setLang(lang){
  var p;
  if( !txt.hasOwnProperty(lang)) return;
  if( window.hasOwnProperty('localStorage'))
     window.localStorage.setItem('lang', lang);
  for(p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

var lang = (window.hasOwnProperty('localStorage') && window.localStorage.getItem('lang', lang)) || 'en';
setLang(lang);

var userLang = navigator.language || navigator.userLanguage; 