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

  const form = document.getElementById("application-form");
const success = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page reload

  const data = new FormData(form);
  const params = new URLSearchParams(data);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbzgvtYhQBFkVcbDwmNJ89VY01EIL7X5yVQSwDdjJOcSB7jwQiTi5U26HZ-KJULyh-v-/exec", { method: "POST", body: params });
    form.style.display = "none";
    success.style.display = "block";
  } catch (err) {
    alert("Error submitting. Please try again.");
    console.error(err);
  }
});
});


