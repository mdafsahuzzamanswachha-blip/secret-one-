/**
 * Scroll Reveal & Intersection Observer Animations Module
 * @module animations
 */

"use strict";

/**
 * Initializes IntersectionObserver for scroll-triggered reveal animations
 * @param {string} selector - Target element selector
 */
export function initScrollAnimations(selector = '.story-card, .timeline-item, .polaroid-card, .letter-card') {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        obs.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  elements.forEach((el) => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });
}
