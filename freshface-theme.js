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
  root.style.setProperty('--bg', theme.black);
  root.style.setProperty('--bg-card', theme.surface);
  root.style.setProperty('--bg-input', theme.charcoal);
  root.style.setProperty('--green-lite', theme.green);
  root.style.setProperty('--white', theme.cream);
  root.style.setProperty('--muted', theme.gray);
  root.style.setProperty('--border', theme.line);
  root.style.setProperty('--display', "'Fraunces', serif");
  root.style.setProperty('--body', "'Manrope', sans-serif");
  root.style.setProperty('--logo', "'Nunito', sans-serif");
  root.style.setProperty('--font', "'Manrope', sans-serif");
  root.style.setProperty('--serif', "'Fraunces', serif");

  if (!document.getElementById('freshface-fonts')) {
    const fonts = document.createElement('link');
    fonts.id = 'freshface-fonts';
    fonts.rel = 'stylesheet';
    fonts.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Manrope:wght@400;500;600;700;800&family=Nunito:wght@700;800&display=swap';
    document.head.appendChild(fonts);
  }

  if (!document.getElementById('freshface-theme-styles')) {
    const style = document.createElement('style');
    style.id = 'freshface-theme-styles';
    style.textContent = `
    body {
      font-family: var(--body) !important;
      background: var(--black);
      color: var(--cream);
      -webkit-font-smoothing: antialiased;
    }

    p,
    li,
    a,
    button,
    input,
    select,
    textarea,
    label {
      font-family: var(--body) !important;
    }

    h1,
    h2,
    h3,
    h4,
    .card-title,
    .section-title,
    .outlet-branch-label {
      font-family: var(--display) !important;
    }

    header nav {
      min-height: 97px;
    }

    .nav-links {
      align-items: center !important;
      gap: 38px !important;
    }

    .nav-toggle {
      display: none;
      width: 42px;
      height: 42px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: rgba(141,196,85,.1);
      color: var(--cream);
      font-size: 1.45rem;
      line-height: 1;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }

    .nav-links .btn,
    .nav-links .btn-book {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 16px 36px !important;
      border: 2px solid transparent;
      border-radius: 999px;
      background: var(--green) !important;
      color: var(--cream) !important;
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

    .ff-common-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(13,13,13,.94) !important;
      border-bottom: 1px solid var(--line) !important;
      backdrop-filter: blur(12px);
    }

    .ff-common-header nav {
      min-height: 97px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 8vw;
      position: relative;
    }

    .ff-common-logo,
    .ff-common-footer-logo {
      color: var(--cream);
      font-family: var(--display, 'Fraunces', serif);
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      letter-spacing: -.01em;
    }

    .ff-common-logo {
      font-size: 1.65rem !important;
    }

    .ff-common-footer-logo {
      display: inline-flex;
      align-items: baseline;
      font-size: 1.8rem !important;
      margin-bottom: 14px;
    }

    .ff-common-logo .fresh,
    .ff-common-footer-logo .fresh {
      color: var(--green);
      font: inherit !important;
      font-size: inherit !important;
    }

    .ff-common-logo .face,
    .ff-common-footer-logo .face {
      color: var(--cream);
      font: inherit !important;
      font-size: inherit !important;
    }

    .ff-common-footer {
      background: var(--black) !important;
      color: var(--cream) !important;
      padding: 70px 8vw 30px !important;
      border-top: 1px solid var(--line) !important;
    }

    .ff-common-footer-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1.25fr;
      gap: 50px;
      margin-bottom: 50px;
    }

    .ff-common-footer p,
    .ff-common-footer a,
    .ff-common-footer li,
    .ff-common-footer span {
      color: var(--gray);
      font-size: .92rem;
      text-decoration: none !important;
    }

    .ff-common-footer a:hover {
      color: var(--green);
      text-decoration: none !important;
    }

    .ff-common-footer h4 {
      color: var(--green);
      font-size: .85rem;
      letter-spacing: .12em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .ff-common-footer ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0;
      margin: 0;
    }

    .ff-common-social {
      display: flex;
      gap: 12px;
      margin-top: 18px;
    }

    .ff-common-social a {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 1.5px solid rgba(141,196,85,.35);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--green);
      background: rgba(141,196,85,.08);
      font-weight: 800;
      text-decoration: none !important;
    }

    .ff-common-social svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
      display: block;
    }

    .ff-common-footer-bottom {
      border-top: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 16px;
      padding-top: 24px;
    }

    @media (max-width: 860px) {
      .ff-common-header nav {
        min-height: 0;
        align-items: center;
        flex-direction: row;
        gap: 16px;
        padding: 18px 6vw;
      }

      .ff-common-header .nav-toggle {
        display: inline-flex;
        margin-left: auto;
      }

      .ff-common-header .nav-links {
        position: absolute;
        top: calc(100% + 1px);
        left: 0;
        right: 0;
        display: none !important;
        flex-direction: column;
        align-items: stretch !important;
        gap: 0 !important;
        padding: 12px 6vw 18px;
        background: var(--black);
        border-bottom: 1px solid var(--line);
        box-shadow: 0 18px 38px rgba(0,0,0,.34);
      }

      .ff-common-header .nav-links.open {
        display: flex !important;
      }

      .ff-common-header .nav-links a:not(.btn):not(.btn-book) {
        padding: 13px 0;
        border-bottom: 1px solid rgba(168,181,160,.14);
      }

      .ff-common-header .nav-links .btn-book,
      .ff-common-header .nav-links .btn {
        width: 100%;
        margin-top: 14px;
      }

      .ff-common-footer-grid {
        grid-template-columns: 1fr;
      }

      .ff-common-footer-bottom {
        flex-direction: column;
      }
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

      header:not(.ff-common-header) nav {
        position: relative;
      }

      header:not(.ff-common-header) .nav-toggle {
        display: inline-flex !important;
        margin-left: auto;
      }

      header:not(.ff-common-header) .nav-links {
        position: absolute !important;
        top: calc(100% + 1px) !important;
        left: 0 !important;
        right: 0 !important;
        display: none !important;
        flex-direction: column !important;
        align-items: stretch !important;
        gap: 0 !important;
        padding: 12px 6vw 18px !important;
        background: var(--black) !important;
        border-bottom: 1px solid var(--line);
        box-shadow: 0 18px 38px rgba(0,0,0,.34);
      }

      header:not(.ff-common-header) .nav-links.open {
        display: flex !important;
      }

      header:not(.ff-common-header) .nav-links a:not(.btn):not(.btn-book) {
        padding: 13px 0;
        border-bottom: 1px solid rgba(168,181,160,.14);
      }

      header:not(.ff-common-header) .nav-links .btn,
      header:not(.ff-common-header) .nav-links .btn-book {
        width: 100%;
        margin-top: 14px;
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

  function isHomePage() {
    return window.location.pathname.replace(/\\/g, '/').endsWith('/home/index.html');
  }

  function commonHeader() {
    return `
      <header class="ff-common-header">
        <nav>
          <a href="/home/index.html" class="ff-common-logo"><span class="fresh">Fresh</span><span class="face">Face</span></a>
          <div class="nav-links">
            <a href="/home/index.html">Home</a>
            <a href="/services/index.html">Services</a>
            <a href="/about-us/index.html">About Us</a>
            <a href="/gallery/index.html">Gallery</a>
            <a href="/contact-us/index.html">Contact</a>
            <a href="/home/index.html#booking-section" class="btn-book">Book Now</a>
          </div>
          <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">&#9776;</button>
        </nav>
      </header>
    `;
  }

  function commonFooter() {
    return `
      <footer class="ff-common-footer">
        <div class="ff-common-footer-grid">
          <div>
            <div class="ff-common-footer-logo"><span class="fresh">Fresh</span><span class="face">Face</span></div>
            <p>FreshFace Unisex Salon - where everyone gets the care, style, and confidence they deserve.</p>
            <div class="ff-common-social">
              <a href="https://www.instagram.com/freshface_kumbakonam?igsh=enl0ajhyMTdsOWU1&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100095534824375" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com/@freshfaceunisexsalon?si=aawKs8U1ShjKmrVN" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/home/index.html">Home</a></li>
              <li><a href="/services/index.html">Services</a></li>
              <li><a href="/about-us/index.html">About Us</a></li>
              <li><a href="/gallery/index.html">Gallery</a></li>
              <li><a href="/contact-us/index.html">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/services/hair/index.html">Hair & Styling</a></li>
              <li><a href="/services/skin-facial/index.html">Skin & Facial</a></li>
              <li><a href="/services/others/index.html">Nails</a></li>
              <li><a href="/services/others/index.html">Grooming</a></li>
              <li><a href="/services/makeup/index.html">Bridal & Makeup</a></li>
            </ul>
          </div>
          <div>
            <h4>Our Outlets</h4>
            <ul>
              <li><strong style="color:var(--cream);">Kumbakonam</strong> - TSR Big Street</li>
              <li><a href="tel:+917380478047">+91 73804 78047</a></li>
              <li><strong style="color:var(--cream);">Karikulam</strong> - Near Axis Bank</li>
              <li><a href="tel:+916380453804">+91 63804 53804</a></li>
              <li><a href="mailto:freshfacekumbakonam@gmail.com">freshfacekumbakonam@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="ff-common-footer-bottom">
          <span>(c) 2026 FreshFace Unisex Salon. All rights reserved.</span>
          <span>Designed with care.</span>
        </div>
      </footer>
    `;
  }

  function applyCommonShell() {
    if (isHomePage()) return;

    const header = document.querySelector('header');
    const standaloneNav = !header ? document.querySelector('body > nav') : null;
    if (header) {
      header.outerHTML = commonHeader();
    } else if (standaloneNav) {
      standaloneNav.outerHTML = commonHeader();
    } else {
      document.body.insertAdjacentHTML('afterbegin', commonHeader());
    }

    const footer = document.querySelector('footer');
    if (footer) {
      footer.outerHTML = commonFooter();
    } else {
      document.body.insertAdjacentHTML('beforeend', commonFooter());
    }
  }

  function initCommonNav() {
    document.querySelectorAll('.ff-common-header').forEach(header => {
      const toggle = header.querySelector('.nav-toggle');
      const links = header.querySelector('.nav-links');
      if (!toggle || !links || toggle.dataset.ffReady === 'true') return;
      toggle.dataset.ffReady = 'true';
      toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
      links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          links.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    });
  }

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
    document.addEventListener('DOMContentLoaded', () => {
      applyCommonShell();
      initCommonNav();
      initFreshFaceAnimations(document);
    }, { once: true });
  } else {
    applyCommonShell();
    initCommonNav();
    initFreshFaceAnimations(document);
  }
})();
