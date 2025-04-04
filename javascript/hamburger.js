document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open"); // Animate hamburger into X
      navContainer.classList.toggle("show"); // Slide down menu
    });
  }

  // 📱 Enable mobile dropdowns
  const menuLinks = document.querySelectorAll('.nav-links > ul > li > a');

  menuLinks.forEach(link => {
    const parentLi = link.parentElement;
    const dropdown = parentLi.querySelector('.dropdown');

    if (dropdown) {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // stop regular link behavior
          dropdown.classList.toggle('show'); // show or hide submenu
        }
      });
    }
  });
});
