const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const navBtnicon = document.querySelector('.nav-button-icon');
const body = document.body;

navBtn.addEventListener('click', function () {
  mobileNav.classList.toggle('mobile-nav-active');
  navBtnicon.classList.toggle('nav-button-active');
  body.classList.toggle('no-scroll');
});