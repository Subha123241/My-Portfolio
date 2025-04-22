// Add smooth scrolling to all links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for navbar height
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll to top when clicking the logo
  document.querySelector('.navbar-brand').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  

  // Add scroll animations
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-up');
    const windowHeight = window.innerHeight;
  
    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
  
      if (position < windowHeight - 100) {
        el.classList.add('is-visible');
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS
    emailjs.init("LOEcSRh6auDevWeU_"); // Replace with your EmailJS user ID
  
    // Form submission event listener
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Send email via EmailJS
      emailjs.send("service_dl5s18z", "template_65lqpn9", {
        from_name: name,
        from_email: email,
        message: message
      })
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('statusMessage').innerText = "Your message has been sent successfully!";
      }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('statusMessage').innerText = "Failed to send the message. Please try again.";
      });
  
      // Reset the form after submission
      document.getElementById('contact-form').reset();
    });
  });
  
