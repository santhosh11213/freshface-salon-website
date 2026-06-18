(function () {
  const theme = {
    green: '#8DC455',
    greenDark: '#658D3D',
    black: '#0D0D0D',
    charcoal: '#1F1F1F',
    surface: '#161616',
    cream: '#F5F5F0',
    gray: '#A8B5A0',
    line: 'rgba(168,181,160,0.22)'
  };

  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    const cssName = '--' + key.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
    root.style.setProperty(cssName, value);
  });

  if (document.getElementById('freshface-theme-styles')) return;

  const style = document.createElement('style');
  style.id = 'freshface-theme-styles';
  style.textContent = `
    .nav-links a:not(.btn),
    .nav-links a:not(.btn).active,
    .nav-links a:not(.btn).is-active {
      color: var(--cream) !important;
    }

    .nav-links a:not(.btn)::after,
    .nav-links a:not(.btn).active::after,
    .nav-links a:not(.btn).is-active::after {
      width: 0 !important;
    }
  `;
  document.head.appendChild(style);
})();
