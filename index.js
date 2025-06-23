/* index.js */
/* JavaScript for Carousel, Quote Carousel, and Contact Section */

const carousel = document.getElementById('carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const dotsContainer = document.getElementById('carousel-dots');
let currentIndex = 0;
const totalItems = carouselItems.length;
var slideSwapTime = 6500;

function createDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('data-index', i);
    dot.addEventListener('pointerdown', function() {
      clearInterval(slideInterval);
      showSlide(parseInt(this.getAttribute('data-index')));
      slideInterval = setInterval(nextSlide, slideSwapTime);
    });
    dotsContainer.appendChild(dot);
  }
}

function showSlide(index) {
  carousel.classList.add('blur');
  setTimeout(() => {
    carouselItems[currentIndex].classList.remove('active');
    dotsContainer.children[currentIndex].classList.remove('active');
    currentIndex = index;
    carouselItems[currentIndex].classList.add('active');
    carouselItems[currentIndex].style.backgroundPositionY = getYOffset();
    dotsContainer.children[currentIndex].classList.add('active');
  }, 150);
  setTimeout(() => { carousel.classList.remove('blur'); }, 300);
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % totalItems;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (currentIndex - 1 + totalItems) % totalItems;
  showSlide(prevIndex);
}

function getYOffset() {
  let offset = window.pageYOffset;
  return (-offset * 0.3) + 'px';
}

window.addEventListener('scroll', function() {
  const activeItem = document.querySelector('.carousel-item.active');
  if(activeItem) { activeItem.style.backgroundPositionY = getYOffset(); }
});

createDots();
let slideInterval = setInterval(nextSlide, slideSwapTime);

let startX = null;
carousel.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
}, { passive: true });

carousel.addEventListener('touchend', function(e) {
  if (startX === null) return;
  let diffX = e.changedTouches[0].clientX - startX;
  if (Math.abs(diffX) > 50) {
    clearInterval(slideInterval);
    if (diffX < 0) { nextSlide(); }
    else { prevSlide(); }
    slideInterval = setInterval(nextSlide, slideSwapTime);
  }
  startX = null;
}, { passive: true });

// Quote Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
  var quotesCarousel = document.getElementById('quotes-carousel');

  quotesCarousel.addEventListener('click', function(e) {
    var nextBtn = e.target.closest('.next');
    var prevBtn = e.target.closest('.previous');
    if (nextBtn) {
      showNextQuoteClick();
    } else if (prevBtn) {
      showPreviousQuoteClick();
    }
  });

  window.carouselRunning = true;
  window.restartingCarousel = null;

  setInterval(function() {
    if (window.carouselRunning) {
      showNextQuote();
    }
  }, 4000);
});

function showNextQuoteClick() {
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showNextQuote();
  restartAutomatic();
}

function showPreviousQuoteClick() {
  window.carouselRunning = false;
  clearTimeout(window.restartingCarousel);
  showPreviousQuote();
  restartAutomatic();
}

function restartAutomatic() {
  clearTimeout(window.restartingCarousel);
  window.restartingCarousel = setTimeout(function() {
    window.carouselRunning = true;
  }, 7000);
}

function showNextQuote() {
  var allQuotes = document.querySelectorAll('#quotes-carousel .quote');
  var current = document.querySelector('#quotes-carousel .current');
  var previous = document.querySelector('#quotes-carousel .previous');
  var next = document.querySelector('#quotes-carousel .next');

  if (current) {
    current.classList.remove('current');
    current.classList.add('previous');
  }
  if (next) {
    next.classList.remove('next');
    next.classList.add('current');
  }
  if (previous) {
    previous.classList.remove('previous');
    previous.classList.add('remove-left');
    setTimeout(function() {
      previous.classList.remove('remove-left');
    }, 1000);
  }
  
  allQuotes.forEach(function(item, index) {
    if (item.classList.contains('current')) {
      if (allQuotes[index + 1]) {
        allQuotes[index + 1].classList.add('next');
        allQuotes[index + 1].classList.remove('remove-left');
      } else {
        allQuotes[0].classList.add('next');
        allQuotes[0].classList.remove('remove-left');
      }
    }
  });
}

function showPreviousQuote() {
  var allQuotes = document.querySelectorAll('#quotes-carousel .quote');
  var current = document.querySelector('#quotes-carousel .current');
  var previous = document.querySelector('#quotes-carousel .previous');
  var next = document.querySelector('#quotes-carousel .next');

  if (current) {
    current.classList.remove('current');
    current.classList.add('next');
  }
  if (previous) {
    previous.classList.remove('previous');
    previous.classList.add('current');
  }
  if (next) {
    next.classList.remove('next');
  }
  
  allQuotes.forEach(function(item, index) {
    if (item.classList.contains('current')) {
      if (allQuotes[index - 1]) {
        allQuotes[index - 1].classList.add('place-left');
        setTimeout(function() {
          allQuotes[index - 1].classList.add('previous');
          allQuotes[index - 1].classList.remove('place-left');
        }, 10);
      } else {
        allQuotes[allQuotes.length - 1].classList.add('place-left');
        setTimeout(function() {
          allQuotes[allQuotes.length - 1].classList.add('previous');
          allQuotes[allQuotes.length - 1].classList.remove('place-left');
        }, 10);
      }
    }
  });
}

document.getElementById('contactButton').addEventListener('click', function() {
  document.getElementById('quotes-carousel').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('logoBox');
  
  if (window.location.hash === '#contact-us') {
    logo.style.transition = 'none'; 
    logo.style.transform = 'scale(1)';
    document.getElementById('quotes-carousel').scrollIntoView({
      behavior: 'smooth'
    });
  }

  requestAnimationFrame(() => {
        logo.classList.remove('homepage-scale');
      });
});
