/* main.js */
/* JavaScript for Navigation Bar, Body, and Footer */

const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
const navbar = document.getElementById('navbar');

burger.addEventListener('pointerdown', function(e) {
  e.stopPropagation();
  burger.classList.toggle('toggle');
  menu.classList.toggle('active');
});

document.addEventListener('pointerdown', function(e) {
  if (menu.classList.contains('active')) {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      burger.classList.remove('toggle');
      menu.classList.remove('active');
    }
  }
});

window.addEventListener('scroll', function() {
  if (window.pageYOffset < 50) {
    navbar.style.transform = 'translateY(0)';
    navbar.style.opacity = '1';
  } else {
    navbar.style.transform = 'translateY(-100%)';
    navbar.style.opacity = '0';
    burger.classList.remove('toggle');
    menu.classList.remove('active');
  }
});

document.getElementById('nav-contact-us').addEventListener('click', function() {
  if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
    document.getElementById('quotes-carousel').scrollIntoView({
      behavior: 'smooth'
    });
  } else {
    window.location.href = 'index.html#contact-us';
  }
});
