// ── Scroll Reveal Animation ──
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal, .reveal-left");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "-100px" }
  );

  revealElements.forEach((el) => observer.observe(el));

  // ── Smooth scroll for CTA buttons ──
  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll-to"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ── Form submission ──
  const form = document.getElementById("application-form");
  const formSection = document.getElementById("form-section");
  const formSuccess = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formSection.style.display = "none";
      formSuccess.style.display = "block";
      formSuccess.scrollIntoView({ behavior: "smooth" });
    });
  }
});
