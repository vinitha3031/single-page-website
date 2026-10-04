document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });

  const links = document.querySelectorAll(".nav-links li a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const contactBtn = document.getElementById("get-in-touch-btn");
  const contactSection = document.getElementById("contact");

  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const mockup = document.querySelector(".mockup-window");
  const container = mockup.parentElement;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    mockup.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  container.addEventListener("mouseleave", () => {
    mockup.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";

    mockup.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  container.addEventListener("mouseenter", () => {
    mockup.style.transition = "transform 0.1s ease-out";
  });
});
