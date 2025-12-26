/**
 * Onboarding Trust Formula - Landing Page Scripts
 */

document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll('.animate-fade-up');
  animatedElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Button hover effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = this.classList.contains('btn-hero') ? 'scale(1.05)' : 'scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Optional: Update spots remaining dynamically
  // You can connect this to a backend to show real-time availability
  function updateSpotsRemaining(count) {
    const spotsText = document.querySelector('.spots-text');
    const spotsDotsContainer = document.querySelector('.spots-dots');
    const pricingSpots = document.querySelector('.pricing-box:last-child .pricing-value');
    
    if (spotsText) {
      spotsText.textContent = `${count} spots remaining`;
    }
    
    if (pricingSpots) {
      pricingSpots.textContent = count;
    }
    
    // Update dots visual
    if (spotsDotsContainer) {
      const dots = spotsDotsContainer.querySelectorAll('.spot-dot');
      dots.forEach((dot, index) => {
        if (index >= count) {
          dot.style.backgroundColor = 'var(--muted)';
          dot.style.opacity = '0.3';
        }
      });
    }
  }

  // Example: Call this function when spots change
  // updateSpotsRemaining(5);

  console.log('Onboarding Trust Formula landing page loaded successfully.');
});