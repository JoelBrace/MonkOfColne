/* aboutus.js */
/* Minimal, page-specific motion: IntersectionObserver reveals */
/* No changes to main.js; this script is standalone and safe */

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-in');
        io.unobserve(e.target);
      }
    }
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.2 });

  els.forEach(el => io.observe(el));
})();
