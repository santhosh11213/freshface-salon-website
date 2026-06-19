const page = window.FF_SERVICE_PAGE;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderTicker(items) {
  const values = [...items, 'Expert Care for Everyone', ...items, 'Expert Care for Everyone'];
  document.getElementById('tickerInner').innerHTML = values.map(item => `<span>${escapeHtml(item)}</span>`).join('');
}

function renderFilters(groups) {
  const filters = document.getElementById('filterBar');
  filters.innerHTML = [
    '<button class="filter-btn active" type="button" data-filter="all">All</button>',
    ...groups.map(group => `<button class="filter-btn" type="button" data-filter="${escapeHtml(group.title)}">${escapeHtml(group.short || group.title)}</button>`)
  ].join('');

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    filters.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.service-card').forEach(card => {
      card.style.display = filter === 'all' || card.dataset.cat === filter ? '' : 'none';
    });
  });
}

function renderCards(groups) {
  document.getElementById('cardsGrid').innerHTML = groups.map((group, index) => `
    <article class="service-card reveal-child" data-cat="${escapeHtml(group.title)}">
      <div class="card-index">${String(index + 1).padStart(2, '0')} — ${escapeHtml(group.short || group.title)}</div>
      <h2 class="card-title">${escapeHtml(group.title)}</h2>
      <p class="card-desc">${escapeHtml(group.description)}</p>
      <span class="card-tag">${escapeHtml(page.tag)}</span>
      <button class="accordion-toggle" type="button">
        View Services
        <span class="arrow" aria-hidden="true">
          <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l4 4 4-4"/></svg>
        </span>
      </button>
      <div class="accordion-body">
        ${group.services.map(service => `
          <div class="service-row">
            <span class="svc-name">${escapeHtml(service.name)}</span>
            <span class="svc-dur">${escapeHtml(service.duration)}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');

  document.getElementById('cardsGrid').addEventListener('click', (event) => {
    const button = event.target.closest('.accordion-toggle');
    if (!button) return;
    const body = button.nextElementSibling;
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    button.classList.toggle('open', !isOpen);
  });

  if (window.FreshFaceAnimations) {
    window.FreshFaceAnimations.refresh(document.getElementById('cardsGrid'));
  }
}

if (page) {
  document.title = `FreshFace - ${page.title} Services`;
  document.getElementById('categoryName').textContent = page.title;
  document.getElementById('heroTitle').innerHTML = `${escapeHtml(page.title)} <em>Services</em>`;
  document.getElementById('heroDescription').textContent = page.description;
  document.getElementById('specialismCount').textContent = page.groups.length;
  document.getElementById('serviceCount').textContent = `${page.groups.reduce((sum, group) => sum + group.services.length, 0)}+`;
  document.getElementById('forValue').textContent = page.forText || 'Men & Women';
  renderTicker(page.groups.map(group => group.title));
  renderFilters(page.groups);
  renderCards(page.groups);
  if (window.FreshFaceAnimations) {
    window.FreshFaceAnimations.refresh(document);
  }
}
