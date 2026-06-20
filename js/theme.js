function updateThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const isDark = document.body.classList.contains('dark');
  const isArabic = document.documentElement.lang === 'ar';

  themeToggle.textContent = isDark ? '☾' : '☀';
  themeToggle.setAttribute('aria-label', isArabic ? 'تبديل وضع الألوان' : 'Toggle color mode');
  themeToggle.setAttribute('title', isDark ? (isArabic ? 'تبديل إلى الوضع الفاتح' : 'Light mode') : (isArabic ? 'تبديل إلى الوضع الداكن' : 'Dark mode'));
}

function setTheme(theme, persist = true) {
  document.body.classList.toggle('dark', theme === 'dark');
  if (persist) localStorage.setItem('theme', theme);
  updateThemeToggle();
}

function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  setTheme(initialTheme, Boolean(savedTheme));

  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(nextTheme);
  });
}
