---
---

/* gallery.js — loaded by _tabs/gallery.md */

let PHOTOS     = [];
let filtered   = [];
let activeCity = 'All';
let activeTags = new Set();
let current    = 0;

/* ── Auto-scroll state ── */
let scrollRAF    = null;
let scrollPaused = false;
let scrollY      = 0;
const SCROLL_SPEED = 0.6; // px per frame — increase to scroll faster

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  /* Pause/resume on hover & touch */
  const wrap = document.getElementById('grid-wrap');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => { scrollPaused = true; });
    wrap.addEventListener('mouseleave', () => { scrollPaused = false; });
    wrap.addEventListener('touchstart', () => { scrollPaused = true; }, { passive: true });
    wrap.addEventListener('touchend',   () => {
      setTimeout(() => { scrollPaused = false; }, 2000);
    }, { passive: true });
  }

  /* Modal button listeners */
  document.getElementById('m-close').onclick = closeModal;
  document.getElementById('gal-modal').onclick = e => {
    if (e.target === document.getElementById('gal-modal')) closeModal();
  };
  document.getElementById('m-prev').onclick = e => {
    e.stopPropagation();
    if (current > 0) openModal(current - 1);
  };
  document.getElementById('m-next').onclick = e => {
    e.stopPropagation();
    if (current < filtered.length - 1) openModal(current + 1);
  };
  document.addEventListener('keydown', e => {
    if (!document.getElementById('gal-modal').classList.contains('open')) return;
    if (e.key === 'Escape')      closeModal();
    if (e.key === 'ArrowLeft'  && current > 0)                   openModal(current - 1);
    if (e.key === 'ArrowRight' && current < filtered.length - 1) openModal(current + 1);
  });

  /* Load photos */
  fetch('/assets/data/photos.json')
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(data => {
      PHOTOS   = data;
      filtered = [...PHOTOS];
      document.getElementById('gal-loading').style.display = 'none';
      buildPills();
      renderGrid();
    })
    .catch(err => {
      document.getElementById('gal-loading').textContent = 'Could not load photos.';
      console.error('Gallery fetch error:', err);
    });
});

/* ── Build filter pills ── */
function buildPills() {
  const cities = ['All', ...new Set(PHOTOS.map(p => p.city).filter(Boolean))];
  const cityEl = document.getElementById('city-pills');
  cityEl.innerHTML = '';
  cities.forEach(c => {
    const b = document.createElement('button');
    b.className = 'pill' + (c === 'All' ? ' city-active' : '');
    b.textContent = c;
    b.onclick = () => {
      activeCity = c;
      cityEl.querySelectorAll('.pill').forEach(x =>
        x.classList.toggle('city-active', x.textContent === c));
      applyFilters();
    };
    cityEl.appendChild(b);
  });

  const allTags = [...new Set(PHOTOS.flatMap(p => p.tags || []))];
  const tagEl = document.getElementById('tag-pills');
  tagEl.innerHTML = '';
  allTags.forEach(t => {
    const b = document.createElement('button');
    b.className = 'pill';
    b.textContent = '#' + t;
    b.onclick = () => {
      activeTags.has(t) ? activeTags.delete(t) : activeTags.add(t);
      b.classList.toggle('tag-active', activeTags.has(t));
      applyFilters();
    };
    tagEl.appendChild(b);
  });
}

/* ── Filter logic ── */
function applyFilters() {
  filtered = PHOTOS.filter(p => {
    const cOk = activeCity === 'All' || p.city === activeCity;
    const tOk = activeTags.size === 0 || [...activeTags].every(t => (p.tags || []).includes(t));
    return cOk && tOk;
  });
  renderGrid();
}

/* ── Render grid ── */
function renderGrid() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  document.getElementById('gal-count').textContent =
    filtered.length + ' photo' + (filtered.length !== 1 ? 's' : '');
  document.getElementById('gal-empty').classList.toggle('show', filtered.length === 0);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.style.transitionDelay = Math.min(i * 45, 360) + 'ms';

    const img = document.createElement('img');
    img.src     = p.image;
    img.alt     = p.title || '';
    img.loading = 'lazy';

    const overlay = document.createElement('div');
    overlay.className = 'card-overlay';
    overlay.innerHTML =
      '<div class="card-title">' + (p.title || '') + '</div>' +
      '<div class="card-meta">' + (p.city || '') + ' &middot; ' + ((p.capturedOn || '').slice(0, 7)) + '</div>';

    card.appendChild(img);
    card.appendChild(overlay);
    card.addEventListener('click', () => openModal(i));
    grid.appendChild(card);

    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('vis')));
  });

  resetScroll();
  setTimeout(startAutoScroll, 600);
}

/* ── Auto-scroll ── */
function startAutoScroll() {
  cancelAnimationFrame(scrollRAF);
  const wrap = document.getElementById('grid-wrap');
  if (!wrap) return;

  function tick() {
    if (!scrollPaused) {
      scrollY += SCROLL_SPEED;
      const max = wrap.scrollHeight - wrap.clientHeight;
      if (scrollY >= max) {
        wrap.style.transition = 'opacity 0.4s';
        wrap.style.opacity = '0';
        setTimeout(() => {
          scrollY = 0;
          wrap.scrollTop = 0;
          wrap.style.opacity = '1';
        }, 400);
      } else {
        wrap.scrollTop = scrollY;
      }
    }
    scrollRAF = requestAnimationFrame(tick);
  }
  scrollRAF = requestAnimationFrame(tick);
}

function resetScroll() {
  scrollY = 0;
  const wrap = document.getElementById('grid-wrap');
  if (wrap) wrap.scrollTop = 0;
}

/* ── Modal ── */
function fmt(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function openModal(idx) {
  current = idx;
  const p = filtered[idx];

  const wrap = document.getElementById('m-img-wrap');
  wrap.innerHTML = '';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.title || '';
  wrap.appendChild(img);

  document.getElementById('m-title').textContent = p.title     || '—';
  document.getElementById('m-loc').textContent   = p.location  || '—';
  document.getElementById('m-eq').textContent    = p.equipment || '—';
  document.getElementById('m-date').textContent  = fmt(p.capturedOn);
  document.getElementById('m-tags').innerHTML    =
    (p.tags || []).map(t => '<span class="m-tag">#' + t + '</span>').join('');

  document.getElementById('m-prev').style.display = idx > 0                   ? '' : 'none';
  document.getElementById('m-next').style.display = idx < filtered.length - 1 ? '' : 'none';
  document.getElementById('gal-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
  scrollPaused = true;
}

function closeModal() {
  document.getElementById('gal-modal').classList.remove('open');
  document.body.style.overflow = '';
  scrollPaused = false;
}