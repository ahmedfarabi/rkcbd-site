

function showDetails(product) {
  const detailsDiv = document.getElementById('product-details');
  detailsDiv.innerHTML = `<h3>${product} Details</h3><p>More information about ${product} will go here.</p>`;
}

// Cover image slideshow

let currentSlide = 0;
let slides = [];
let indicators = [];

function showSlide(n) {
  if (!slides.length) return;
  currentSlide = n;
  slides.forEach((slide, i) => {
    slide.style.display = i === n ? 'block' : 'none';
    slide.style.opacity = i === n ? '1' : '0';
  });
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === n);
  });
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
  showSlide(0);
  setInterval(() => {
    nextSlide();
  }, 4000);
});
