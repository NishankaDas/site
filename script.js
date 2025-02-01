// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    // You can add code here to send the form data to a server
  });

  // Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Animate Hamburger Icon
  hamburger.classList.toggle('open');
});