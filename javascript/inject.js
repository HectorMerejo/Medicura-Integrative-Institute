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

// ✅ HAMBURGER INIT
const hamburger = document.getElementById("hamburger");
const navContainer = document.getElementById("nav-container");

if (hamburger && navContainer) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navContainer.classList.toggle("show");
  });
}

// ✅ MOBILE DROPDOWNS
const menuLinks = document.querySelectorAll('.nav-links > ul > li > a');

menuLinks.forEach(link => {
  const parentLi = link.parentElement;
  const dropdown = parentLi.querySelector('.dropdown');

  if (dropdown) {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();

        // Toggle current dropdown
        dropdown.classList.toggle('show');

        // Close all others
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove('show');
          }
        });
      }
    });
  }
});


      }
    })
    .catch(err => console.error('Navbar load error:', err)); 

  // Inject Footer
  fetch(`${pathToRoot}js-html/footer.html`)
    .then(res => res.text())
    .then(data => {
      const footerTarget = document.getElementById('footer-placeholder');
      if (footerTarget) {
        const adjustedFooter = data.replace(/\$\{path\}/g, pathToRoot);
        footerTarget.innerHTML = adjustedFooter;
      }
    })
    .catch(err => console.error('Footer load error:', err));

  // Inject Google Translate
  const googleTranslateScript = document.createElement('script');
  googleTranslateScript.type = 'text/javascript';
  googleTranslateScript.innerHTML = `
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,es,fr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  `;
  document.head.appendChild(googleTranslateScript);

  const googleTranslateAPIScript = document.createElement('script');
  googleTranslateAPIScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  googleTranslateAPIScript.defer = true;
  document.body.appendChild(googleTranslateAPIScript);

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

          <form id="booking-form" action="https://formspree.io/f/mjkypvnv" method="POST">
            <h2 style="font-family: 'Josefin Slab', serif; text-align: center;">Join the Waitlist</h2>
            <input type="hidden" name="_subject" value="Add to the waiting list!" />
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Tell us about your inquiry..." required></textarea>
            <button type="submit">Send</button>
            <p style="margin-top: 10px; font-size: 0.9em; font-family: 'Poppins', sans-serif; text-align: center;">
              <strong>Note:</strong> After submitting, you'll be asked to complete a short questionnaire.
            </p>
          </form>

          <div id="questionnaire" style="display: none;">
            <h2 style="font-family: 'Josefin Slab', serif; text-align: center;">Questionnaire</h2>
            <form id="questionnaire-form">
              <label for="gender" style="font-family: 'Poppins', sans-serif;">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="">Select...</option>
                <option value="male_straight">Male - Straight</option>
                <option value="female_bisexual">Female - Bisexual</option>
                <option value="nonbinary_other">Non-binary / Other</option>
              </select>

              <div id="dynamic-question" style="margin-top: 20px; display: none;">
                <label id="dynamic-question-label" for="answer" style="font-family: 'Poppins', sans-serif;"></label>
                <input type="text" id="answer" name="answer" required />
              </div>

              <button type="submit" style="margin-top: 20px;">Submit Questionnaire</button>
            </form>
          </div>
        </div>
      </div>
    `;

     // ✅ Wait a tiny bit before setting up behavior
  setTimeout(() => {
    setupPopupBehavior();
  }, 200);
}

      // === SETUP FUNCTION ===
      function setupPopupBehavior() {
      const bookNowBtn = document.querySelector('.book-now-btn');
      const bookingPopup = document.getElementById('booking-popup');
      const closeBtn = document.getElementById('close-popup');
      const bookingForm = document.getElementById('booking-form');
      const questionnaire = document.getElementById('questionnaire');

      if (bookNowBtn && bookingPopup && closeBtn && bookingForm && questionnaire) {
        bookNowBtn.addEventListener('click', () => {
          bookingPopup.style.display = 'flex';
        });

        const footerBookLink = document.getElementById("footer-book-now");

      if (footerBookLink) {
        footerBookLink.addEventListener("click", (e) => {
          e.preventDefault();
          bookingPopup.style.display = "flex";
        });
      }

        closeBtn.addEventListener('click', () => {
          bookingPopup.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
          if (e.target === bookingPopup) {
            bookingPopup.style.display = 'none';
          }
        });

        // Handle Form Submit
        bookingForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(bookingForm);

          try {
            const response = await fetch(bookingForm.action, {
              method: 'POST',
              body: formData,
              headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
              const userData = {
                name: bookingForm.elements["name"].value,
                email: bookingForm.elements["email"].value
              };

              bookingForm.style.display = 'none';
              questionnaire.style.display = 'block';

              setupQuestionnaire(userData);
            } else {
              bookingForm.innerHTML = `<h2 style="text-align: center; color: red;">Oops!</h2><p style="text-align: center;">Something went wrong. Please try again later.</p>`;
            }
          } catch (error) {
            bookingForm.innerHTML = `<h2 style="text-align: center; color: red;">Oops!</h2><p style="text-align: center;">Something went wrong. Please try again later.</p>`;
          }
        });
      } else {
        console.warn('Some popup elements are missing.');
      }
      }

      function setupQuestionnaire(userData) {
      const genderSelect = document.getElementById('gender');
      const dynamicQuestionDiv = document.getElementById('dynamic-question');
      const dynamicQuestionLabel = document.getElementById('dynamic-question-label');
      const answerInput = document.getElementById('answer');
      const questionnaireForm = document.getElementById('questionnaire-form');
      const bookingPopup = document.getElementById('booking-popup');
      const questionnaire = document.getElementById('questionnaire');

      genderSelect.addEventListener('change', () => {
        const selected = genderSelect.value;
        let questionText = "";

        if (selected === "male_straight") {
          questionText = "Are you comfortable discussing sexual health?";
        } else if (selected === "female_bisexual") {
          questionText = "Have you experienced discomfort in relationships?";
        } else if (selected === "nonbinary_other") {
          questionText = "What pronouns do you prefer?";
        } else {
          questionText = "Tell us anything you'd like us to know.";
        }

        dynamicQuestionLabel.innerText = questionText;
        dynamicQuestionDiv.style.display = 'block';
      });

      questionnaireForm.addEventListener('submit', (e) => {
        e.preventDefault();
        userData.gender = genderSelect.options[genderSelect.selectedIndex].text;
        userData.dynamicAnswer = answerInput.value;

        console.log("Collected User Data:", userData);

        questionnaire.innerHTML = `
          <h2>Thank you!</h2>
          <p>We have received your information.</p>
        `;

        setTimeout(() => {
          bookingPopup.style.display = 'none';
        }, 3000);
      });
}})
