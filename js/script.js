// Sidebar close button logic
document.addEventListener('DOMContentLoaded', function() {
  var closeSidebar = document.getElementById('closeSidebar');
  var sidebarMenu = document.getElementById('sidebarMenu');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  if (closeSidebar && sidebarMenu && sidebarOverlay) {
    closeSidebar.addEventListener('click', function() {
      sidebarMenu.style.transform = 'translateX(100%)';
      setTimeout(function() { sidebarMenu.style.display = 'none'; }, 300);
      sidebarOverlay.style.display = 'none';
    });
  }
});
// Sidebar menu toggle logic
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menuToggle');
  var sidebarMenu = document.getElementById('sidebarMenu');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  if (menuToggle && sidebarMenu && sidebarOverlay) {
    menuToggle.addEventListener('click', function() {
      sidebarMenu.style.transform = 'translateX(0)';
      sidebarMenu.style.display = 'block';
      sidebarOverlay.style.display = 'block';
    });
    sidebarOverlay.addEventListener('click', function() {
      sidebarMenu.style.transform = 'translateX(100%)';
      setTimeout(function() { sidebarMenu.style.display = 'none'; }, 300);
      sidebarOverlay.style.display = 'none';
    });
    // Close sidebar on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        sidebarMenu.style.transform = 'translateX(100%)';
        setTimeout(function() { sidebarMenu.style.display = 'none'; }, 300);
        sidebarOverlay.style.display = 'none';
      }
    });
  }
});


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

  // Gallery slider drag logic
  const gallerySlider = document.getElementById('gallerySlider');
  let isDown = false;
  let startX;
  let scrollLeft;
  if (gallerySlider) {
    gallerySlider.addEventListener('mousedown', (e) => {
      isDown = true;
      gallerySlider.classList.add('dragging');
      startX = e.pageX - gallerySlider.offsetLeft;
      scrollLeft = gallerySlider.scrollLeft;
    });
    gallerySlider.addEventListener('mouseleave', () => {
      isDown = false;
      gallerySlider.classList.remove('dragging');
    });
    gallerySlider.addEventListener('mouseup', () => {
      isDown = false;
      gallerySlider.classList.remove('dragging');
    });
    gallerySlider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gallerySlider.offsetLeft;
      const walk = (x - startX) * 1.2;
      gallerySlider.scrollLeft = scrollLeft - walk;
    });
    // Touch events for mobile
    gallerySlider.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - gallerySlider.offsetLeft;
      scrollLeft = gallerySlider.scrollLeft;
    });
    gallerySlider.addEventListener('touchend', () => {
      isDown = false;
    });
    gallerySlider.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - gallerySlider.offsetLeft;
      const walk = (x - startX) * 1.2;
      gallerySlider.scrollLeft = scrollLeft - walk;
    });
  }
});
