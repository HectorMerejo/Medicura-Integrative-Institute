document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open"); // for animation
      navContainer.classList.toggle("show");
    });
  } else {
    console.warn("Hamburger menu or nav container not found.");
  }

  // Enable dropdown toggles on mobile
  const parentItems = document.querySelectorAll('.nav-links > ul > li > a');

  parentItems.forEach((link) => {
    const parentLi = link.parentElement;
    const submenu = parentLi.querySelector('.dropdown');

    if (submenu) {
      link.addEventListener('click', (e) => {
        // Only prevent default on mobile
        if (window.innerWidth <= 768) {
          e.preventDefault();
          submenu.classList.toggle('show');
        }
      });
    }
  });
});
