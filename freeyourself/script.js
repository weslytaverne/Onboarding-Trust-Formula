// Free Yourself Challenge - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Scroll Animation Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all scroll sections
  const scrollSections = document.querySelectorAll('.scroll-section');
  scrollSections.forEach((section) => {
    scrollObserver.observe(section);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add parallax effect to hero glow
  const heroGlow = document.querySelector('.hero-glow');
  if (heroGlow) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      heroGlow.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
    });
  }

  // Add stagger animation to cards on scroll
  const addStaggerDelay = () => {
    document.querySelectorAll('.scroll-section.visible').forEach(section => {
      const cards = section.querySelectorAll('.card-elevated, .step-card, .audience-card, .testimonial-card');
      cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
      });
    });
  };

  // Run stagger on initial load for visible sections
  setTimeout(addStaggerDelay, 100);
  
  // Run stagger when sections become visible
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addStaggerDelay();
      }
    });
  }, { threshold: 0.1 });

  scrollSections.forEach(section => staggerObserver.observe(section));
});
