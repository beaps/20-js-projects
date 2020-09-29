const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav = document.querySelector('nav');
const navItems = Array.from(document.querySelectorAll('nav li'));
console.log(navItems);

function toggleNav(e) {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');

  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.add('overlay-slide-right-in');
    overlay.classList.remove('overlay-slide-left-out');

    navItems.forEach((item, index) => {
      item.classList.replace(`slide-out-${index + 1}`, `slide-in-${index + 1}`);
    });
  } else {
    overlay.classList.add('overlay-slide-left-out');
    overlay.classList.remove('overlay-slide-right-in');
    navItems.forEach((item, index) => {
      item.classList.replace(`slide-in-${index + 1}`, `slide-out-${index + 1}`);
    });
  }
}

// Event listeners
menuBars.addEventListener('click', toggleNav);

nav.addEventListener('click', (event) => {
  // There are 2 possible elements when you click <nav>:
  if (event.target.nodeName === 'LI' || event.target.nodeName === 'A') {
    toggleNav();
  }
});

toggleNav();
