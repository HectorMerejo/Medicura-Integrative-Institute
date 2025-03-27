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
});