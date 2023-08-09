const menuButtonOpen = document.querySelector('.menu_button-open');
const menuButtonClose = document.querySelector('.menu_button-close');
const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile_container');

const openMenu = e => {
  e.preventDefault();
  mobileMenu.classList.add('is-open');
  body.classList.add('stop-scroll');
};
const closeMenu = e => {
  e.preventDefault();
  mobileMenu.classList.remove('is-open');
  body.classList.remove('stop-scroll');
};
menuButtonOpen.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closeMenu);
