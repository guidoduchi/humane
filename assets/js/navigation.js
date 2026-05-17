const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('#primary-navigation');
const submenuToggles = document.querySelectorAll('.submenu-toggle');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('is-open');
  });
}

submenuToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const navItem = toggle.closest('.nav-item');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!expanded));
    navItem?.classList.toggle('submenu-open', !expanded);
  });
});
