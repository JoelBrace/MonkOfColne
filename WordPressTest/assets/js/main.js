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

document.addEventListener('DOMContentLoaded', function() {
  var fader = document.getElementById('fader');
  if (window.AnimationEvent) {
    fader.classList.add('fade-out');
  }

  function handleFadeNavigation(event, callback) {
    if (window.AnimationEvent) {
      event.preventDefault();
      fader.classList.add('fade-in');
      var listener = function() {
        fader.removeEventListener('animationend', listener);
        callback();
      };
      fader.addEventListener('animationend', listener);
    } else {
      callback();
    }
  }

  var navContactUs = document.getElementById('nav-contact-us');
  navContactUs.addEventListener('click', function(event) {
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
      document.getElementById('quotes-carousel').scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      handleFadeNavigation(event, function() {
        window.location.href = 'index.html#contact-us';
      });
    }
  });

  var anchors = document.getElementsByTagName('a');
  for (var idx = 0; idx < anchors.length; idx++) {
    if (anchors[idx].id === "nav-contact-us") {
      continue;
    }
    
    if (anchors[idx].hostname === window.location.hostname &&
       (anchors[idx].pathname !== window.location.pathname || anchors[idx].hash)) {
      anchors[idx].addEventListener('click', function(event) {
        var anchor = event.currentTarget;
        handleFadeNavigation(event, function() {
          window.location = anchor.href;
        });
      });
    }
  }
});


window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});