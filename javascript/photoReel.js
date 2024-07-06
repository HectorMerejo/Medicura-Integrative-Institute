// JavaScript for Photo Reel
document.addEventListener('DOMContentLoaded', (event) => {
  const slides = document.querySelectorAll('.photo-reel img');
  let currentSlide = 0;

  // Customize these values
  const startDelay = 3000; // Time in milliseconds before the slideshow starts
  const slideDuration = 7000; // Time in milliseconds each slide is shown

  const showNextSlide = () => {
    slides[currentSlide].classList.remove('visible');
    slides[currentSlide].classList.add('hidden');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.remove('hidden');
    slides[currentSlide].classList.add('visible');
  };

  // Start the slideshow after the startDelay
  setTimeout(() => {
    showNextSlide();
    setInterval(showNextSlide, slideDuration);
  }, startDelay);
});
