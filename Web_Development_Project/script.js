let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('far-left', 'left', 'center', 'right', 'far-right');
    const pos = (index - currentIndex + slides.length) % slides.length;
    if (pos === 0) slide.classList.add('center');
    else if (pos === 1) slide.classList.add('right');
    else if (pos === slides.length - 1) slide.classList.add('left');
    else if (pos === 2) slide.classList.add('far-right');
    else slide.classList.add('far-left');
  });
}

function showSlides() {
  updateSlides();
  currentIndex = (currentIndex + 1) % slides.length;
  setTimeout(showSlides, 5000);
}

function changeSlide(n) {
  currentIndex = (currentIndex + n + slides.length) % slides.length;
  updateSlides();
}

updateSlides();
showSlides();

const contactForm = document.getElementById('Contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}
