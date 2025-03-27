document.addEventListener("DOMContentLoaded", () => {
    const pathToRoot = location.pathname.includes('js-html/') ? '../' : './';
  
    fetch(`${pathToRoot}js-html/navbar.html`)
      .then(res => res.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(err => console.error('Navbar load error:', err));
  });  
