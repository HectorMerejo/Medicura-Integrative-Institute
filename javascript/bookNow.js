document.addEventListener("DOMContentLoaded", function () {
  const bookNowHTML = `
    <div class="book-now-container">
      <button class="book-now-btn">Book Now</button>
    </div>
  `;

  const placeholder = document.getElementById("book-now-placeholder");
  if (placeholder) {
    placeholder.innerHTML = bookNowHTML;
  }
});