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
    { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));

  document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.getAttribute("data-scroll-to"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const form = document.getElementById("application-form");
  const success = document.getElementById("form-success");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const params = new URLSearchParams(data);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzgvtYhQBFkVcbDwmNJ89VY01EIL7X5yVQSwDdjJOcSB7jwQiTi5U26HZ-KJULyh-v-/exec",
        { method: "POST", body: params }
      );
      form.style.display = "none";
      success.style.display = "block";
    } catch (err) {
      alert("Error submitting. Please try again.");
      console.error(err);
    }
  });
});