'use-strict';

const hamburgerIcon = document.querySelector('.hamburger-icon');
const primaryNav = document.querySelector('.primary-nav');
const animatedBox = document.querySelector('.animatedBox');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

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

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);