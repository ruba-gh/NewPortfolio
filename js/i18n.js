function getCurrentLanguage() {
  return localStorage.getItem('language') || portfolioData.defaultLanguage || 'ar';
}

function localize(value, lang = getCurrentLanguage()) {
  if (typeof value === 'string') return value;
  if (!value) return '';
  return value[lang] || value.en || value.ar || '';
}

function getDictionary(lang = getCurrentLanguage()) {
  return portfolioData.ui[lang] || portfolioData.ui.ar;
}

function applyLanguage(lang) {
  const dictionary = getDictionary(lang);
  const isArabic = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('arabic', isArabic);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) element.setAttribute('placeholder', dictionary[key]);
  });

  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.textContent = '🌐';
    languageToggle.setAttribute('aria-label', isArabic ? 'تغيير اللغة' : 'Change language');
    languageToggle.setAttribute('title', isArabic ? 'English' : 'عربي');
  }

  localStorage.setItem('language', lang);
  updateThemeToggle();
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function initLanguageToggle() {
  const languageToggle = document.getElementById('languageToggle');
  applyLanguage(getCurrentLanguage());

  if (!languageToggle) return;

  languageToggle.addEventListener('click', () => {
    const nextLanguage = getCurrentLanguage() === 'ar' ? 'en' : 'ar';
    applyLanguage(nextLanguage);
  });
}
