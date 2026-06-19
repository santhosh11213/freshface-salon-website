(function () {
  const theme = {
    green: '#8DC455',
    greenDark: '#658D3D',
    black: '#0D0D0D',
    charcoal: '#1F1F1F',
    surface: '#161616',
    cream: '#F5F5F0',
    gray: '#A8B5A0',
    line: 'rgba(168,181,160,0.22)',
    easeOut: 'cubic-bezier(0.22, 1, 0.36, 1)'
  };

  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    const cssName = '--' + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    root.style.setProperty(cssName, value);
  });

  if (!document.getElementById('freshface-theme-styles')) {
    const style = document.createElement('style');
    style.id = 'freshface-theme-styles';
    style.textContent = `
    header nav {
      min-height: 97px;
    }

    .nav-links {
      align-items: center !important;
      gap: 38px !important;
    }

    .nav-links .btn,
    .nav-links .btn-book {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px 36px !important;
      border: 2px solid transparent;
      border-radius: 999px;
      font-size: 1rem !important;
      font-weight: 800 !important;
      line-height: 1.6;
    }

    .nav-links a:not(.btn):not(.btn-book),
    .nav-links a:not(.btn):not(.btn-book).active,
    .nav-links a:not(.btn):not(.btn-book).is-active {
      color: var(--cream) !important;
      position: relative;
      padding: 6px 0;
    }

    .nav-links a:not(.btn):not(.btn-book)::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background: var(--green);
      transition: width .25s ease;
    }

    .nav-links a:not(.btn):not(.btn-book):hover::after,
    .nav-links a:not(.btn):not(.btn-book).active::after,
    .nav-links a:not(.btn):not(.btn-book).is-active::after {
      width: 100% !important;
    }

    .hero-load {
      opacity: 0;
      transform: translate3d(0, 28px, 0);
      transition: opacity .85s var(--ease-out), transform .85s var(--ease-out);
      will-change: opacity, transform;
    }

    .hero-load.is-loaded {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .reveal {
      opacity: 0;
      transform: translate3d(0, 32px, 0);
      transition: opacity .75s var(--ease-out), transform .75s var(--ease-out);
      will-change: opacity, transform;
    }

    .reveal.is-visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .reveal-child {
      opacity: 0;
      transform: translate3d(0, 24px, 0);
      transition: opacity .6s var(--ease-out), transform .6s var(--ease-out);
      will-change: opacity, transform;
    }

    .reveal-stagger.is-visible .reveal-child {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    @media (max-width: 760px) {
      header nav {
        min-height: 0;
      }

      .nav-links {
        gap: 14px !important;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .hero-load,
      .reveal,
      .reveal-child {
        opacity: 1 !important;
        transform: none !important;
        transition-duration: .01ms !important;
      }
    }
  `;
    document.head.appendChild(style);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let revealObserver = null;

  function toArray(list) {
    return Array.prototype.slice.call(list);
  }

  function scopedElements(scope, selector) {
    const elements = [];
    if (scope.matches && scope.matches(selector)) elements.push(scope);
    if (scope.querySelectorAll) elements.push(...toArray(scope.querySelectorAll(selector)));
    return elements;
  }

  function applyStaggerDelays(container) {
    scopedElements(container, '.reveal-child').forEach((child, index) => {
      child.style.transitionDelay = (index * 90) + 'ms';
    });
  }

  function revealElement(element) {
    element.classList.add('is-visible');
  }

  function getRevealObserver() {
    if (revealObserver || prefersReducedMotion || !('IntersectionObserver' in window)) {
      return revealObserver;
    }

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    return revealObserver;
  }

  function initFreshFaceAnimations(scope) {
    const target = scope || document;

    scopedElements(target, '.hero-load').forEach(element => {
      if (element.dataset.ffLoaded === 'true') return;
      element.dataset.ffLoaded = 'true';

      if (prefersReducedMotion) {
        element.classList.add('is-loaded');
        return;
      }

      const delay = parseInt(element.dataset.delay || '0', 10);
      setTimeout(() => element.classList.add('is-loaded'), delay);
    });

    scopedElements(target, '.reveal-stagger').forEach(applyStaggerDelays);

    scopedElements(target, '.reveal, .reveal-stagger').forEach(element => {
      if (element.classList.contains('is-visible')) return;

      if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        revealElement(element);
        return;
      }

      if (element.dataset.ffObserved === 'true') return;
      element.dataset.ffObserved = 'true';
      getRevealObserver().observe(element);
    });
  }

  window.FreshFaceAnimations = {
    refresh: initFreshFaceAnimations,
    reveal: revealElement
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initFreshFaceAnimations(document), { once: true });
  } else {
    initFreshFaceAnimations(document);
  }
})();
