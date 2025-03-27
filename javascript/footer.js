document.addEventListener("DOMContentLoaded", () => {
    const pathToRoot = location.pathname.includes('/html/') ? '../' : './';
  
    fetch(`${pathToRoot}js-html/footer.html`)
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(err => console.error('Footer load error:', err));
  });  