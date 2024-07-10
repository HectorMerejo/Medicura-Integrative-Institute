const photoContainers = document.querySelectorAll('.photo-container');
let newCurrentIndex = 0;

function showNewPhoto(index) {
    // Remove the visible class from all images and hide all text overlays
    photoContainers.forEach(container => {
        container.querySelector('img').classList.remove('visible');
        container.querySelector('img').classList.add('hidden');
        container.classList.remove('active'); // Remove active class to hide text overlay
    });
    
    // Add the visible class to the current image and show the corresponding text overlay
    const currentImage = photoContainers[index].querySelector('img');
    currentImage.classList.add('visible');
    currentImage.classList.remove('hidden');
    photoContainers[index].classList.add('active'); // Add active class to show text overlay
}

// Initial display
showNewPhoto(newCurrentIndex);

// Example function to go to the next photo
function nextNewPhoto() {
    newCurrentIndex = (newCurrentIndex + 1) % photoContainers.length;
    showNewPhoto(newCurrentIndex);
}

// Automatically move to the next photo every 3 seconds
setInterval(nextNewPhoto, 3000);
