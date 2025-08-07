document.addEventListener('DOMContentLoaded', () => {
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => {
      alert('Hello! You clicked the button.');
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const messageEl = document.getElementById('formMessage');

      if (name === '') {
        messageEl.textContent = 'Please enter your name.';
        messageEl.style.color = 'red';
        return;
      }

      if (!validateEmail(email)) {
        messageEl.textContent = 'Please enter a valid email.';
        messageEl.style.color = 'red';
        return;
      }

      messageEl.textContent = 'Thank you for contacting us!';
      messageEl.style.color = 'green';
      form.reset();
    });
  }
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
