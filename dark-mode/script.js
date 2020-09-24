const input = document.querySelector('#switch__input');
const nav = document.querySelector('#nav');
const themeText = document.querySelector('.theme__text');
const themeIcon = document.querySelector('.theme__icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

function darkMode() {
  nav.style.backgroundColor = 'hsl(0 0% 0% / 80%)';
  textBox.style.backgroundColor = 'hsl(0 0% 100% / 65%)';
  themeText.textContent = 'Dark mode';
  themeIcon.textContent = '🌙';
  image1.src = 'img/undraw_proud_coder_dark.svg';
  image2.src = 'img/undraw_feeling_proud_dark.svg';
  image3.src = 'img/undraw_conceptual_idea_dark.svg';
}

function lightMode() {
  nav.style.backgroundColor = 'hsl(0 0% 100% / 85%)';
  textBox.style.backgroundColor = 'hsl(0 0% 0% / 45%)';
  themeText.textContent = 'Light mode';
  themeIcon.textContent = '☀️';
  image1.src = 'img/undraw_proud_coder_light.svg';
  image2.src = 'img/undraw_feeling_proud_light.svg';
  image3.src = 'img/undraw_conceptual_idea_light.svg';
}

function switchTheme() {
  if (input.checked) {
    document.body.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.body.setAttribute('data-theme', 'light');
    lightMode();
  }
}

input.addEventListener('click', switchTheme);
