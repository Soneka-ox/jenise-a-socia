'use strict';

const themeControls = document.querySelector('.theme-switch');
const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
  });
  themeMeta.content = theme === 'light' ? '#f8f6f1' : '#34362f';
}

applyTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.themeChoice;
    applyTheme(theme);
    try {
      localStorage.setItem('jenise-links-theme', theme);
    } catch (_) {
      // A troca continua funcionando quando o navegador restringe o armazenamento.
    }
  });
});
themeControls.hidden = false;
