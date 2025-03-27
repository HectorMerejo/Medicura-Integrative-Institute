document.addEventListener("DOMContentLoaded", () => {
  // Determine the path to root based on the current file
  const currentFile = window.location.pathname.split('/').pop();
  const pathToRoot = currentFile === 'index.html' || currentFile === '' ? './' : '../';

  // Inject Navbar with dynamic path replacement for link hrefs
  fetch(`${pathToRoot}js-html/navbar.html`)
    .then(res => res.text())
    .then(data => {
      const navTarget = document.getElementById('navbar-placeholder');
      if (navTarget) {
        // Replace all ${path} in navbar HTML with the actual path
        const adjustedNav = data.replace(/\$\{path\}/g, pathToRoot);
        navTarget.innerHTML = adjustedNav;
      } else {
        console.warn('Navbar placeholder not found.');
      }
    })
    .catch(err => console.error('Navbar load error:', err));

  // Inject Footer (no path replacement needed)
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
});