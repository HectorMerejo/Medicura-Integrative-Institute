document.addEventListener("DOMContentLoaded", () => {
  // Grab just the filename from the URL (e.g., "index.html" or "newYork.html")
  const currentFile = window.location.pathname.split('/').pop();

  // Determine path based on whether we're in a subfolder (like html/)
  const pathToRoot = currentFile === 'index.html' || currentFile === '' ? './' : '../';

  fetch(`${pathToRoot}js-html/navbar.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    })
    .catch(err => console.error('Navbar load error:', err));
});
