document.addEventListener('DOMContentLoaded', (event) => {
    const photoContainers = document.querySelectorAll('.photo-container');
    let currentIndex = 0;
  
    function showPhoto(index) {
      // Hide all images and text overlays
      photoContainers.forEach(container => {
        container.querySelector('img').classList.remove('visible');
        container.querySelector('img').classList.add('hidden');
        container.querySelector('.text-overlay-retreat').classList.remove('visible');
        container.querySelector('.text-overlay-retreat').classList.add('hidden');
      });
      
      // Show the current image and text overlay
      const currentImage = photoContainers[index].querySelector('img');
      const currentText = photoContainers[index].querySelector('.text-overlay-retreat');
      currentImage.classList.add('visible');
      currentImage.classList.remove('hidden');
      currentText.classList.add('visible');
      currentText.classList.remove('hidden');
    }
  
    // Initial display
    showPhoto(currentIndex);
  
    function nextPhoto() {
      currentIndex = (currentIndex + 1) % photoContainers.length;
      showPhoto(currentIndex);
    }
  
    // Start the slideshow
    const startDelay = 3000; // Time in milliseconds before the slideshow starts
    const slideDuration = 7000; // Time in milliseconds each slide is shown
  
    setTimeout(() => {
      setInterval(nextPhoto, slideDuration);
    }, startDelay);
  });
  