const button = document.getElementById('language');
let language = 'vi';
function applyLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'vi';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-vi][data-en]').forEach(element => {
    element.innerHTML = element.dataset[language];
  });
  document.querySelectorAll('[data-alt-vi][data-alt-en]').forEach(element => {
    element.alt = element.getAttribute(`data-alt-${language}`);
  });
  document.querySelectorAll('[data-aria-vi][data-aria-en]').forEach(element => {
    element.setAttribute('aria-label', element.getAttribute(`data-aria-${language}`));
  });
  const description = document.querySelector('meta[name="description"]');
  description.content = description.getAttribute(`data-meta-${language}`);
  button.textContent = language === 'vi' ? 'EN' : 'VI';
  button.setAttribute('lang', language === 'vi' ? 'en' : 'vi');
  button.setAttribute('aria-label', language === 'vi' ? 'Switch to English' : 'Chuyển sang tiếng Việt');
}
button.addEventListener('click', () => applyLanguage(language === 'vi' ? 'en' : 'vi'));
applyLanguage('vi');
