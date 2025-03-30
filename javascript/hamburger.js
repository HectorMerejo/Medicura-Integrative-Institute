document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.querySelector(".nav-container");

  hamburger.addEventListener("click", () => {
    navContainer.classList.toggle("show");
  });
});