

function showDetails(product) {
  const detailsDiv = document.getElementById('product-details');
  detailsDiv.innerHTML = `<h3>${product} Details</h3><p>More information about ${product} will go here.</p>`;
}

// Cover image slideshow

let currentSlide = 0;
let slides = [];
let indicators = [];
let lastSlide = null;

function showSlide(n) {
  if (!slides.length) return;
  lastSlide = currentSlide;
  currentSlide = n;
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev');
    if (i === n) {
      slide.classList.add('active');
      slide.style.display = 'block';
    } else if (i === lastSlide) {
      slide.classList.add('prev');
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === n);
  });
  // Hide previous slide after animation
  if (lastSlide !== currentSlide) {
    setTimeout(() => {
      if (slides[lastSlide]) slides[lastSlide].style.display = 'none';
    }, 700);
  }
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

document.addEventListener('DOMContentLoaded', () => {
  slides = document.querySelectorAll('.cover-img.slide');
  indicators = document.querySelectorAll('.indicator');
  slides.forEach((slide, i) => {
    slide.style.display = i === 0 ? 'block' : 'none';
  });
  showSlide(0);
  setInterval(() => {
    nextSlide();
  }, 4000);
});
