const menuButtonOpen = document.querySelector('.menu_button-open');
const menuButtonClose = document.querySelector('.menu_button-close');
const body = document.querySelector('.body');
const mobileMenu = document.querySelector('.mobile_container');
const mobileLink = document.querySelectorAll('.mobile-nav');
const hero = document.querySelector('.hero-container');
// const heroStyles = hero.computedStyleMap();
// const styles = window.getComputedStyle(hero, '::before')
const openMenu = e => {
  e.preventDefault();
  mobileMenu.classList.add('is-open');
  body.classList.add('stop-scroll');
};
const closeMenu = e => {
  console.log('close menu');
  e.preventDefault();
  mobileMenu.classList.remove('is-open');
  body.classList.remove('stop-scroll');
};
menuButtonOpen.addEventListener('click', openMenu);
menuButtonClose.addEventListener('click', closeMenu);
mobileLink.forEach(el => {
  el.addEventListener('click', closeMenu);
});

const screen = {
  sMobile: window.matchMedia('(min-width: 350px)'),
  mobile: window.matchMedia(`(min-width: 480px)`),
  tablet: window.matchMedia(`(min-width: 1024px)`),
  desktop: window.matchMedia(`(min-width: 1440px`),
};

console.log(screen.mobile);
for (let [scr, mq] of Object.entries(screen)) {
  if (mq) mq.addEventListener('change', mqHandler);
}
export function mqHandler() {
  let size = null;
  let prevSize = null;

  for (let [scr, mq] of Object.entries(screen)) {
    if (mq.matches) {
      switch (scr) {
        case 'sMobile':
          hero.style.setProperty('--hero-bg-height', '100%');

          break;

        case 'mobile':
          hero.style.setProperty('--hero-bg-height', '150%');
          break;

        default:
          break;
      }
      //   currentScreen.screen = scr;
      console.log('scr, mq', scr, mq);
      //   isFirstLoad && moveThemeSwitcher(scr);
    }
    if (!mq || mq.matches) {
      size = scr;
      //   screenWidthHandler(size);
      //   paginate();
    } else if (scr !== size) {
    }
  }
}
window.onload = mqHandler();

// console.log('heroStyles', heroStyles)
// console.log('styles', styles.backgroundPosition)
