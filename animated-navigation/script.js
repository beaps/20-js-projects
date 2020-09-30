const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav li');

function moveNav(from, to) {
  overlay.classList.replace(`overlay-slide-${from}`, `overlay-slide-${to}`);
  navItems.forEach((item, index) => {
    item.classList.replace(
      `slide-${from}-${index + 1}`,
      `slide-${to}-${index + 1}`
    );
  });
}

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');

  overlay.classList.contains('overlay-active')
    ? moveNav('out', 'in')
    : moveNav('in', 'out');
}

menuBars.addEventListener('click', toggleNav);
nav.addEventListener('click', toggleNav);

toggleNav();
