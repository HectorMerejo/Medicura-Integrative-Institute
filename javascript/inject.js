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
        const bookingForm = document.getElementById('booking-form');

        if (bookNowBtn && popup && closeBtn && bookingForm) {
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

          // 📝 Formspree submission handling
          bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Prevent normal page reload

            const formData = new FormData(bookingForm);

            try {
              const response = await fetch(bookingForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                  'Accept': 'application/json'
                }
              });

              if (response.ok) {
                bookingForm.innerHTML = `
                  <h2 style="text-align: center;">Thank you!</h2>
                  <p style="text-align: center;">Your request has been sent successfully.</p>
                `;
              } else {
                bookingForm.innerHTML = `
                  <h2 style="text-align: center; color: red;">Oops!</h2>
                  <p style="text-align: center;">Something went wrong. Please try again later.</p>
                `;
              }
            } catch (error) {
              bookingForm.innerHTML = `
                <h2 style="text-align: center; color: red;">Oops!</h2>
                <p style="text-align: center;">Something went wrong. Please try again later.</p>
              `;
            }
          });
        } else {
          console.warn('Book Now button, popup, or form not found.');
        }
      } else {
        console.warn('Navbar placeholder not found.');
      }
    })


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

  // Inject Booking Popup
  const bookingPopupPlaceholder = document.getElementById('booking-popup-placeholder');
  if (bookingPopupPlaceholder) {
    bookingPopupPlaceholder.innerHTML = `
      <div id="booking-popup" class="booking-popup" style="display: none;">
        <div class="booking-popup-content">
          <span id="close-popup" class="close-btn">&times;</span>
          <h2>Book a Consultation</h2>
          <form id="booking-form" action="https://formspree.io/f/mjkypvnv" method="POST">
            <input type="hidden" name="_subject" value="New Booking Request!" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Tell us about your inquiry..." required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    `;
  }

});
