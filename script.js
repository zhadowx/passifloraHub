'use-strict';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const primaryNav = document.querySelector('.primary-nav');
const animatedBox = document.querySelector('.animatedBox');

const toggleMenu = function () {
  hamburgerIcon.classList.toggle('clicked');
  primaryNav.classList.toggle('open');
};
hamburgerIcon.onclick = toggleMenu;

const animate = function () {
  animatedBox.classList.toggle('run');
};

animatedBox.addEventListener('click', function (e) {
  e.preventDefault();
  animate();
});

