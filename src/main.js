import lightLogo from './assets/svg/logo.svg';
import darkLogo from './assets/svg/logo-dark.svg';

const themeButtons = document.querySelectorAll('.switch-theme__button');
const logo = document.querySelector('.logo img');
const savedTheme = localStorage.getItem('theme') || 'light';

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  if (logo) {
    logo.src = theme === 'dark' ? darkLogo : lightLogo;
  }

  themeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
};

setTheme(savedTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.theme));
});