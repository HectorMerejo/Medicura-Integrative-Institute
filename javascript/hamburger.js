document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open"); // for hamburger animation
      navContainer.classList.toggle("show");
    });
  }

  // Handle mobile dropdown toggle
  const menuLinks = document.querySelectorAll('.nav-links > ul > li > a');

  menuLinks.forEach(link => {
    const parentLi = link.parentElement;
    const dropdown = parentLi.querySelector('.dropdown');

    if (dropdown) {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 768) {
          e.preventDefault(); // prevent link jumping to "#"
          dropdown.classList.toggle('show');
        }
      });
    }
  });
});
