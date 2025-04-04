document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");  // animate hamburger into X
      navContainer.classList.toggle("show");  // show/hide the nav menu
    });
  }

  // Dropdown links (only on mobile)
  const dropdownParents = document.querySelectorAll('.nav-links > ul > li');

  dropdownParents.forEach(parent => {
    const link = parent.querySelector('a');  // The top-level "LOCATIONS", "ABOUT US", etc.
    const submenu = parent.querySelector('.dropdown');

    if (submenu) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {   // Only do this on mobile
          e.preventDefault();             // Prevent the # from jumping
          submenu.classList.toggle('show'); // Toggle the dropdown
        }
      });
    }
  });
});
