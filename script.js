document.addEventListener('DOMContentLoaded', function () {


  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
  });

  const links = document.querySelectorAll('.nav-links li a');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const contactBtn = document.getElementById('get-in-touch-btn');
  const contactSection = document.getElementById('contact');

  if (contactBtn) {
    contactBtn.addEventListener('click', function () {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

});
