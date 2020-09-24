const input = document.querySelector('#switch__input');
const nav = document.querySelector('#nav');
const themeText = document.querySelector('.theme__text');
const themeIcon = document.querySelector('.theme__icon');
const textBox = document.querySelector('#text-box');
const images = document.querySelectorAll(
  '.about__container__img-container img'
);

function addTheme(theme) {
  nav.style.backgroundColor = theme.navStyle;
  textBox.style.backgroundColor = theme.textBoxStyle;
  themeText.textContent = theme.text;
  themeIcon.textContent = theme.icon;
  images.forEach((image, index) => {
    image.src = theme.imagesList[index];
  });
}

function imagesMode(mode) {
  const imagesList = [
    `img/undraw_proud_coder_${mode}.svg`,
    `img/undraw_feeling_proud_${mode}.svg`,
    `img/undraw_conceptual_idea_${mode}.svg`
  ];
  return imagesList;
}

const darkMode = {
  navStyle: 'hsl(0 0% 0% / 80%)',
  textBoxStyle: 'hsl(0 0% 100% / 65%)',
  text: 'Dark mode',
  icon: '🌛',
  imagesList: imagesMode('dark')
};
const lightMode = {
  navStyle: 'hsl(0 0% 100% / 85%)',
  textBoxStyle: 'hsl(0 0% 0% / 45%)',
  text: 'Light mode',
  icon: '🌞',
  imagesList: imagesMode('light')
};

function setTypeOfTheme() {
  if (input.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
}

function checkTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    input.checked = true;
    addTheme(darkMode);
  } else {
    addTheme(lightMode);
  }
}

function switchTheme() {
  setTypeOfTheme();
  checkTheme();
}

input.addEventListener('click', switchTheme);

checkTheme();
switchTheme();
