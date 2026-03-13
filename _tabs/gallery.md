---
# the default layout is 'page'
icon: fas fa-camera
order: 7
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,300;1,300&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --accent: #b07d4a;
  --muted: #888;
  --border: rgba(0,0,0,0.1);
  --card-r: 6px;
  --ease: cubic-bezier(.4,0,.2,1);
}
[data-mode="dark"] { --border: rgba(255,255,255,0.1); }

/* Header */
.gal-header { margin-bottom: 2rem; }
.gal-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--accent);
}
.gal-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.8rem, 8vw, 4.5rem);
  line-height: 0.9; letter-spacing: 0.02em;
  margin: 0.2rem 0 0.5rem;
}
.gal-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem; color: var(--muted);
}

/* Filter bar */
.filter-bar {
  position: sticky; top: 56px; z-index: 20;
  background: var(--bs-body-bg, #fff);
  padding: 0.8rem 0 0.9rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.6rem;
  display: flex; flex-direction: column; gap: 0.5rem;
}
[data-mode="dark"] .filter-bar { background: #1a1a1e; }

.filter-row { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.filter-lbl {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.62rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--muted);
  width: 52px; flex-shrink: 0;
}

.pill {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.73rem; padding: 4px 13px;
  border-radius: 99px; border: 1px solid var(--border);
  cursor: pointer; background: transparent;
  color: inherit; white-space: nowrap;
  transition: all 0.2s var(--ease);
}
.pill:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }
.pill.city-active { background: #111; color: #fff; border-color: #111; }
[data-mode="dark"] .pill.city-active { background: #ede8e0; color: #111; border-color: #ede8e0; }
.pill.tag-active { background: var(--accent); color: #fff; border-color: var(--accent); }

/* Masonry */
.masonry { columns: 3; column-gap: 10px; }
@media (max-width: 860px) { .masonry { columns: 2; } }
@media (max-width: 480px) { .masonry { columns: 1; } }

.photo-card {
  break-inside: avoid; margin-bottom: 10px;
  position: relative; overflow: hidden;
  border-radius: var(--card-r); cursor: pointer;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.5s var(--ease), transform 0.5s var(--ease), box-shadow 0.3s;
}
.photo-card.vis { opacity: 1; transform: none; }

.photo-card img {
  width: 100%; display: block;
  transition: transform 0.5s var(--ease);
}
.photo-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.2); }
.photo-card:hover img { transform: scale(1.04); }

.card-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
  opacity: 0; border-radius: var(--card-r);
  display: flex; flex-direction: column;
  justify-content: flex-end; padding: 14px;
  transition: opacity 0.3s var(--ease);
}
.photo-card:hover .card-overlay { opacity: 1; }
.card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem; color: #fff; margin-bottom: 2px;
}
.card-meta {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.62rem; color: rgba(255,255,255,0.6);
}

/* Empty state */
.gal-empty {
  text-align: center; padding: 4rem 1rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem; color: var(--muted);
  display: none;
}
.gal-empty.show { display: block; }

/* Modal */
.gal-modal {
  display: none; position: fixed; inset: 0; z-index: 9999;
  background: rgba(6,6,6,0.95); overflow-y: auto;
  align-items: center; justify-content: center;
}
.gal-modal.open { display: flex; }

.modal-inner {
  display: grid; grid-template-columns: 1fr 290px;
  max-width: 960px; width: 94vw;
  background: #0e0e0e; border-radius: 10px;
  overflow: hidden; position: relative;
  animation: mIn 0.3s var(--ease);
}
@keyframes mIn { from { opacity:0; transform:scale(.95) translateY(10px); } to { opacity:1; transform:none; } }
@media (max-width: 640px) {
  .modal-inner { grid-template-columns: 1fr; }
  .modal-info { border-left: none; border-top: 1px solid rgba(255,255,255,0.07); }
}

.modal-img-wrap {
  background: #040404; display: flex;
  align-items: center; justify-content: center;
  padding: 20px; min-height: 380px;
}
.modal-img-wrap img { max-height: 82vh; max-width: 100%; object-fit: contain; border-radius: 3px; }

.modal-info {
  padding: 32px 24px; display: flex; flex-direction: column;
  gap: 0; border-left: 1px solid rgba(255,255,255,0.07);
}
.m-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem; font-weight: 300;
  color: #ede8e0; margin-bottom: 1.6rem; line-height: 1.3;
}
.m-group { margin-bottom: 1.2rem; }
.m-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.6rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: #444; margin-bottom: 3px;
}
.m-val { font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: #aaa; }

.m-tags {
  display: flex; flex-wrap: wrap; gap: 5px;
  margin-top: auto; padding-top: 1.2rem;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.m-tag {
  font-family: 'DM Sans', sans-serif; font-size: 0.62rem;
  padding: 3px 9px; border-radius: 99px;
  border: 1px solid rgba(255,255,255,0.12); color: #555;
}

.m-close {
  position: absolute; top: 12px; right: 12px;
  width: 30px; height: 30px; border: none;
  background: rgba(255,255,255,0.08); color: #888;
  border-radius: 50%; cursor: pointer; font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s; z-index: 5;
}
.m-close:hover { background: rgba(255,255,255,0.18); color: #fff; }

.m-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 34px; height: 34px; border: 1px solid rgba(255,255,255,0.13);
  background: rgba(0,0,0,0.5); color: #aaa; border-radius: 50%;
  cursor: pointer; font-size: 1rem; display: flex;
  align-items: center; justify-content: center;
  transition: background 0.2s, color 0.2s; z-index: 5;
}
.m-nav:hover { background: rgba(255,255,255,0.15); color: #fff; }
.m-prev { left: 10px; }
.m-next { right: 300px; }
@media (max-width: 640px) { .m-next { right: 10px; } }
</style>

<!-- Header -->
<div class="gal-header">
  <div class="gal-eyebrow">✦ Visual Archive</div>
  <div class="gal-title">GLOWING<br>SPACE</div>
  <div class="gal-sub" id="gal-count"></div>
</div>

<!-- Filter bar -->
<div class="filter-bar">
  <div class="filter-row">
    <span class="filter-lbl">City</span>
    <div id="city-pills"></div>
  </div>
  <div class="filter-row">
    <span class="filter-lbl">Subject</span>
    <div id="tag-pills"></div>
  </div>
</div>

<!-- Grid -->
<div class="masonry" id="grid"></div>
<div class="gal-empty" id="gal-empty">No photos match the selected filters.</div>

<!-- Modal -->
<div class="gal-modal" id="gal-modal">
  <div class="modal-inner">
    <button class="m-close" id="m-close">&#x2715;</button>
    <button class="m-nav m-prev" id="m-prev">&#x2039;</button>
    <button class="m-nav m-next" id="m-next">&#x203a;</button>
    <div class="modal-img-wrap" id="m-img-wrap"></div>
    <div class="modal-info">
      <div class="m-title" id="m-title"></div>
      <div class="m-group"><div class="m-label">Location</div><div class="m-val" id="m-loc"></div></div>
      <div class="m-group"><div class="m-label">Equipment</div><div class="m-val" id="m-eq"></div></div>
      <div class="m-group"><div class="m-label">Captured on</div><div class="m-val" id="m-date"></div></div>
      <div class="m-tags" id="m-tags"></div>
    </div>
  </div>
</div>

<script>
/* Data injected from _data/photos.yml via Liquid */
const PHOTOS = [
  {% for p in site.data.photos %}
  {
    title:      {{ p.title | jsonify }},
    image:      {{ p.image | jsonify }},
    city:       {{ p.city | jsonify }},
    location:   {{ p.location | jsonify }},
    capturedOn: {{ p.capturedOn | jsonify }},
    equipment:  {{ p.equipment | jsonify }},
    tags:       {{ p.tags | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

let filtered   = [...PHOTOS];
let activeCity = 'All';
let activeTags = new Set();
let current    = 0;

/* Build city pills */
const cities = ['All', ...new Set(PHOTOS.map(p => p.city).filter(Boolean))];
const cityEl = document.getElementById('city-pills');
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

/* Build tag pills */
const allTags = [...new Set(PHOTOS.flatMap(p => p.tags || []))];
const tagEl = document.getElementById('tag-pills');
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

function applyFilters() {
  filtered = PHOTOS.filter(p => {
    const cOk = activeCity === 'All' || p.city === activeCity;
    const tOk = activeTags.size === 0 || [...activeTags].every(t => (p.tags||[]).includes(t));
    return cOk && tOk;
  });
  renderGrid();
}

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
    card.innerHTML =
      '<img src="' + p.image + '" alt="' + (p.title || '') + '" loading="lazy">' +
      '<div class="card-overlay">' +
        '<div class="card-title">' + (p.title || '') + '</div>' +
        '<div class="card-meta">' + (p.city || '') + ' &middot; ' + ((p.capturedOn || '').slice(0,7)) + '</div>' +
      '</div>';
    card.onclick = () => openModal(i);
    grid.appendChild(card);
    requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('vis')));
  });
}

function fmt(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('en-GB', {year:'numeric',month:'long',day:'numeric'});
}

function openModal(idx) {
  current = idx;
  const p = filtered[idx];

  /* Rebuild img via JS — prevents Chirpy from wrapping static <img> tags */
  const wrap = document.getElementById('m-img-wrap');
  wrap.innerHTML = '';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.title || '';
  img.style.cssText = 'max-height:82vh;max-width:100%;object-fit:contain;border-radius:3px;display:block;';
  wrap.appendChild(img);
  document.getElementById('m-title').textContent = p.title || '—';
  document.getElementById('m-loc').textContent   = p.location || '—';
  document.getElementById('m-eq').textContent    = p.equipment || '—';
  document.getElementById('m-date').textContent  = fmt(p.capturedOn);
  document.getElementById('m-tags').innerHTML    =
    (p.tags || []).map(t => '<span class="m-tag">#' + t + '</span>').join('');
  document.getElementById('m-prev').style.display = idx > 0 ? '' : 'none';
  document.getElementById('m-next').style.display = idx < filtered.length - 1 ? '' : 'none';
  document.getElementById('gal-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('gal-modal').classList.remove('open');
  document.body.style.overflow = '';
}

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
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft'  && current > 0) openModal(current - 1);
  if (e.key === 'ArrowRight' && current < filtered.length - 1) openModal(current + 1);
});

renderGrid();
</script>