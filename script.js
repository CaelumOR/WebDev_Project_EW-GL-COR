let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('left', 'center', 'right');
    const pos = (index - currentIndex + slides.length) % slides.length;
    if (pos === 0) slide.classList.add('center');
    else if (pos === 1) slide.classList.add('right');
    else slide.classList.add('left');
  });
}

function showSlides() {
  updateSlides();
  currentIndex = (currentIndex + 1) % slides.length;
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function changeSlide(n) {
  currentIndex = (currentIndex + n + slides.length) % slides.length;
  updateSlides();
}

updateSlides();
showSlides();
