// javascript/hamburger.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      navContainer.classList.toggle("show");
    });
  } else {
    console.warn("Hamburger menu or nav container not found.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Enable dropdown toggles on mobile
  const parentItems = document.querySelectorAll('.nav-links > ul > li');

  parentItems.forEach((item) => {
    const submenu = item.querySelector('.dropdown');

    if (submenu) {
      // Prevent hover-only dropdowns from breaking on mobile
      item.addEventListener('click', (e) => {
        e.preventDefault();
        submenu.classList.toggle('show');
      });
    }
  });
});
