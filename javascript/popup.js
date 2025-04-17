document.addEventListener("DOMContentLoaded", () => {
  // ======== OPEN/CLOSE THE POPUP ========
  const bookNowBtn = document.querySelector('.book-now-btn');
  const bookingPopup = document.getElementById('booking-popup');
  const closeBtn = document.getElementById('close-popup');

  if (bookNowBtn && bookingPopup && closeBtn) {
    bookNowBtn.addEventListener('click', () => {
      bookingPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      bookingPopup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === bookingPopup) {
        bookingPopup.style.display = 'none';
      }
    });
  } else {
    console.warn('Popup elements not found.');
  }

  // ======== FORM LOGIC ========
  const bookingForm = document.getElementById('booking-form');
  const questionnaire = document.getElementById('questionnaire');

  if (bookingForm && questionnaire) {
    let userData = {}; // Store user name, email, etc.

    bookingForm.addEventListener('submit', async (e) => {
      e.preventDefault();

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
          // Save user's name and email after submitting formspree
          userData = {
            name: bookingForm.elements["name"].value,
            email: bookingForm.elements["email"].value
          };

          // Hide the booking form
          bookingForm.style.display = 'none';

          // Show the questionnaire
          questionnaire.style.display = 'block';

          // Set up dynamic questionnaire logic
          setupQuestionnaire(userData);
        } else {
          bookingForm.innerHTML = `<h2 style="text-align: center; color: red;">Oops!</h2><p style="text-align: center;">Something went wrong. Please try again later.</p>`;
        }
      } catch (error) {
        bookingForm.innerHTML = `<h2 style="text-align: center; color: red;">Oops!</h2><p style="text-align: center;">Something went wrong. Please try again later.</p>`;
      }
    });
  }
});

// ======== QUESTIONNAIRE LOGIC ========
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
}
