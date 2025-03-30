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
