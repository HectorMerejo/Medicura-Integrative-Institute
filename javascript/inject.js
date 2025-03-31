document.addEventListener("DOMContentLoaded", () => {
  const pathname = window.location.pathname;
  const currentFile = pathname.substring(pathname.lastIndexOf('/') + 1);
  const pathToRoot = currentFile === '' || currentFile === 'index.html'
    ? './'
    : '../';

  // Inject Navbar
  fetch(`${pathToRoot}js-html/navbar.html`)
    .then(res => res.text())
    .then(data => {
      const navTarget = document.getElementById('navbar-placeholder');
      if (navTarget) {
        const adjustedNav = data.replace(/\$\{path\}/g, pathToRoot);
        navTarget.innerHTML = adjustedNav;

        // ✅ Add hamburger toggle script AFTER navbar is injected
        const hamburger = document.getElementById('hamburger');
        const navContainer = document.getElementById('nav-container');

        if (hamburger && navContainer) {
          hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');   // For animating lines into X
            navContainer.classList.toggle('show'); // To show nav menu
          });
        }
      } else {
        console.warn('Navbar placeholder not found.');
      }
    })
    .catch(err => console.error('Navbar load error:', err));

  // Inject Footer
  fetch(`${pathToRoot}js-html/footer.html`)
    .then(res => res.text())
    .then(data => {
      const footerTarget = document.getElementById('footer-placeholder');
      if (footerTarget) {
        footerTarget.innerHTML = data;
      } else {
        console.warn('Footer placeholder not found.');
      }
    })
    .catch(err => console.error('Footer load error:', err));

  // Inject Book Now Button if needed
  const bookNowPlaceholder = document.getElementById("book-now-placeholder");
  if (bookNowPlaceholder) {
    bookNowPlaceholder.innerHTML = `
      <div class="book-now-container">
        <button class="book-now-btn">Book Now</button>
      </div>
    `;
  }

  // Inject hamburger.js
  const hamburgerScript = document.createElement("script");
  hamburgerScript.src = `${pathToRoot}javascript/hamburger.js`;
  hamburgerScript.defer = true;
  document.body.appendChild(hamburgerScript);

  // Inject fadeIn.js
  const fadeInScript = document.createElement("script");
  fadeInScript.src = `${pathToRoot}javascript/fadeIn.js`;
  fadeInScript.defer = true;
  document.body.appendChild(fadeInScript);
});
