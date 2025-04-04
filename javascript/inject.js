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

        // 🛎️ NEW: Add Book Now button popup logic here
        const bookNowBtn = document.querySelector('.book-now-btn');
        const popup = document.getElementById('booking-popup');
        const closeBtn = document.getElementById('close-popup');

        if (bookNowBtn && popup && closeBtn) {
          bookNowBtn.addEventListener('click', () => {
            popup.style.display = 'flex'; // Show popup
          });

          closeBtn.addEventListener('click', () => {
            popup.style.display = 'none'; // Hide popup
          });

          window.addEventListener('click', (e) => {
            if (e.target === popup) {
              popup.style.display = 'none'; // Clicking outside closes it
            }
          });
        } else {
          console.warn('Book Now button or popup not found.');
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
