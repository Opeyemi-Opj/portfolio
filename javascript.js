document.addEventListener("DOMContentLoaded", () => {

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

  // Scroll to contact section
  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  }

  // Contact form message
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  if (form && successMessage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      successMessage.textContent = "Thank you! Your message has been sent.";
      successMessage.style.color = "green";
      successMessage.style.marginTop = "10px";

      form.reset();
    });
  }
});