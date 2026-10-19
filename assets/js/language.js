(function () {
  const storageKey = 'preferred-language';
  const supportedLanguages = ['en', 'zh-CN'];

  function setLanguage(language) {
    const selectedLanguage = supportedLanguages.includes(language) ? language : 'en';

    document.documentElement.dataset.lang = selectedLanguage;
    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll('[data-lang-switch]').forEach(function (button) {
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.langSwitch === selectedLanguage)
      );
    });

    try {
      localStorage.setItem(storageKey, selectedLanguage);
    } catch (error) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    const initialLanguage = document.documentElement.dataset.lang || 'en';
    setLanguage(initialLanguage);

    document.querySelectorAll('[data-lang-switch]').forEach(function (button) {
      button.addEventListener('click', function () {
        setLanguage(button.dataset.langSwitch);
      });
    });
  });
})();
