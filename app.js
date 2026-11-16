const button = document.getElementById('language');
let language = 'vi';
button.addEventListener('click', () => {
  language = language === 'vi' ? 'en' : 'vi';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-vi][data-en]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  button.innerHTML = language === 'vi' ? 'EN <span>↗</span>' : 'VI <span>↗</span>';
  button.setAttribute('aria-label', language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
});
