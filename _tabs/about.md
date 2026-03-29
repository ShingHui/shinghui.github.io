---
# the default layout is 'page'
icon: fas fa-info-circle
order: 5
---
<style>
/* ── Fonts ── */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

/* ── CSS Variables ── */
:root {
  --gold: #b07d4a;
  --gold-light: rgba(176,125,74,0.12);
  --gold-border: rgba(176,125,74,0.22);
  --gold-border-hover: rgba(176,125,74,0.55);
  --card-bg: rgba(255,255,255,0.72);
  --section-bg-from: #fdf8f2;
  --section-bg-to: #f5ede0;
  --text-muted: rgba(0,0,0,0.45);
}
[data-mode="dark"] {
  --card-bg: rgba(255,255,255,0.06);
  --section-bg-from: #1e1a16;
  --section-bg-to: #261f16;
  --text-muted: rgba(255,255,255,0.42);
  --gold-border: rgba(176,125,74,0.28);
}

/* ── Fade-in on scroll ── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.75s cubic-bezier(.4,0,.2,1),
              transform 0.75s cubic-bezier(.4,0,.2,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

/* ── Hero greeting ── */
.about-hero {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin: 0.2rem 0 1.4rem;
}
.about-hero em {
  font-style: italic;
  color: var(--gold);
}

/* ── Tagline under hero ── */
.about-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold);
  opacity: 0.75;
  margin: -0.8rem 0 1.6rem;
}

/* ── Body prose ── */
.about-prose {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.08rem;
  line-height: 1.85;
  color: inherit;
  max-width: 660px;
}
.about-prose p { margin-bottom: 1.1rem; }
.about-prose strong { font-weight: 500; color: var(--gold); }

/* ── Hero image caption ── */
.img-caption {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.88rem;
  font-style: italic;
  opacity: 0.5;
  text-align: center;
  margin-top: -0.6rem;
  margin-bottom: 1.6rem;
}

/* ── Photo strip ── */
.photo-strip {
  display: flex;
  gap: 10px;
  margin: 2rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.photo-strip::-webkit-scrollbar { display: none; }
.photo-strip img {
  height: 260px;
  width: auto;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.photo-strip img:hover {
  transform: scale(1.03) translateY(-4px);
  box-shadow: 0 14px 36px rgba(0,0,0,0.18);
}
.photo-strip-hint {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.38;
  margin-top: -1.2rem;
  margin-bottom: 1.4rem;
}

/* ── Inline pull-quote ── */
.pull-quote {
  border-left: 2.5px solid var(--gold);
  padding: 0.5rem 1.2rem;
  margin: 1.8rem 0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.3rem;
  font-style: italic;
  line-height: 1.55;
  opacity: 0.82;
  max-width: 580px;
}

/* ── Divider ── */
.about-divider {
  border: none;
  border-top: 1px solid rgba(128,128,128,0.18);
  margin: 3rem 0;
}

/* ── Global Footprint ── */
.footprint-section {
  background: linear-gradient(135deg, var(--section-bg-from) 0%, var(--section-bg-to) 100%);
  border-radius: 14px;
  padding: 2.4rem 2.4rem 2rem;
  margin: 2.4rem 0;
  border: 1px solid var(--gold-border);
}
.footprint-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.5rem;
}
.footprint-headline {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 0.3rem;
}
.footprint-stats {
  display: flex;
  gap: 2.4rem;
  margin-top: 0.2rem;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
}
.stat-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  opacity: 0.55;
  margin-top: 0.15rem;
}
.fp-group-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.45;
  margin: 1.4rem 0 0.7rem;
}
.fp-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.fp-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: var(--card-bg);
  border: 1px solid var(--gold-border);
  border-radius: 9px;
  padding: 10px 14px 8px;
  min-width: 76px;
  cursor: default;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  text-decoration: none !important;
  white-space: nowrap;
}
.fp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(176,125,74,0.16);
  border-color: var(--gold-border-hover);
}
.fp-card.lived { border-color: rgba(176,125,74,0.5); }
.fp-card.lived::after {
  content: '★';
  position: absolute;
  top: -7px; right: -7px;
  width: 16px; height: 16px;
  background: var(--gold);
  color: #fff;
  font-size: 7px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  text-align: center;
}
.fp-flag   { font-size: 1.6rem; line-height: 1; }
.fp-country {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.68;
}
.fp-city {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.6rem;
  opacity: 0.42;
}

/* ── Note card (for admin-y notes) ── */
.note-card {
  border-left: 3px solid var(--gold-border-hover);
  padding: 1rem 1.4rem;
  background: var(--gold-light);
  border-radius: 0 8px 8px 0;
  margin: 1.6rem 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.78;
}
.note-card-label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.4rem;
}
.note-card p { margin: 0.4rem 0 0; }

/* ── Count-up ── */
.count-up { display: inline-block; }

/* ── Closing note ── */
.closing-note {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.18rem;
  font-style: italic;
  opacity: 0.68;
  margin-top: 0.4rem;
  line-height: 1.7;
}
</style>


<div class="about-hero reveal">
  <span>Hi, I'm <em>Angel</em> 👋</span>
</div>
<div class="about-tagline reveal reveal-delay-1">
  Traveller · Photographer · Storyteller
</div>

<div class="about-prose reveal reveal-delay-2">
  <p>Welcome to my little corner of the internet, and thank you for stopping by. If you've found your way here, I hope you're curious to learn a bit more about the story behind this site.</p>
  <p>My name is Shing Hui — Angel to most people — and I created this website in the winter of 2025 as a creative outlet for my love of travel, photography, and personal reflections. I realised my personal social media accounts weren't giving me the space or reach I wanted, especially for the meaningful conversations and touching stories I encountered on the road. So I built something more intentional, and that's how <strong>Glowing Space</strong> was born.</p>
</div>

<div class="reveal reveal-delay-3">
  <img src="/assets/img/about/IMG_1404.jpg" alt="Angel in Iceland"
       style="width:100%; max-height:420px; object-fit:cover; border-radius:10px; margin:1.6rem 0 0.6rem;">
  <p class="img-caption">Somewhere in Iceland — the trip that started everything.</p>
</div>

<div class="about-prose reveal">
  <p>I didn't travel very far during my childhood, but I'm grateful that my family brought me to several ASEAN countries when I was young. Looking back at those old albums always fills me with warmth — and I think that's how photography quietly became one of my deepest passions.</p>
  <p>During my university years in Tainan, Taiwan, I grew up in more ways than one. Then, to my surprise, I was offered an exchange placement in Kraków, Poland. That long journey to Eastern Europe truly changed my life. I kept my camera with me every single day.</p>
</div>

<div class="pull-quote reveal">
  "Living in Kraków gave me the travel bug — and with airports right at my doorstep, I had every reason to explore."
</div>

<div class="about-prose reveal">
  <p>In just six months at Jagiellonian University, I crossed into <strong>17 countries</strong>. Each border felt like a page turning, each city a new chapter I hadn't expected to write.</p>
</div>

<div class="photo-strip reveal">
  <img src="/assets/img/about/IMG_4026.jpeg" alt="Travel memory 1">
  <img src="/assets/img/about/IMG_5246.jpeg" alt="Travel memory 2">
  <img src="/assets/img/about/IMG_6609.jpeg" alt="Travel memory 3">
</div>
<div class="photo-strip-hint reveal">← scroll to explore →</div>

<hr class="about-divider">

<div class="footprint-section reveal">
  <div class="footprint-eyebrow">✦ Global Footprint</div>
  <div class="footprint-headline">A life shaped by<br>crossing borders.</div>
  <div class="footprint-stats">
    <div>
      <div class="stat-num"><span class="count-up" data-target="3">0</span></div>
      <div class="stat-label">Countries lived</div>
    </div>
    <div>
      <div class="stat-num"><span class="count-up" data-target="21">0</span>+</div>
      <div class="stat-label">Countries explored</div>
    </div>
    <div>
      <div class="stat-num"><span class="count-up" data-target="6">0</span></div>
      <div class="stat-label">Months on exchange</div>
    </div>
  </div>

  <div class="fp-group-label">★ Lived &amp; Studied</div>
  <div class="fp-grid">
    <div class="fp-card lived">
      <span class="fp-flag">🇲🇾</span>
      <span class="fp-country">Malaysia</span>
      <span class="fp-city">Selangor</span>
    </div>
    <div class="fp-card lived">
      <span class="fp-flag">🇹🇼</span>
      <span class="fp-country">Taiwan</span>
      <span class="fp-city">Tainan</span>
    </div>
    <div class="fp-card lived">
      <span class="fp-flag">🇵🇱</span>
      <span class="fp-country">Poland</span>
      <span class="fp-city">Kraków</span>
    </div>
  </div>

  <div class="fp-group-label">✦ Explored</div>
  <div class="fp-grid">
    <div class="fp-card"><span class="fp-flag">🇮🇸</span><span class="fp-country">Iceland</span></div>
    <div class="fp-card"><span class="fp-flag">🇹🇭</span><span class="fp-country">Thailand</span></div>
    <div class="fp-card"><span class="fp-flag">🇸🇪</span><span class="fp-country">Sweden</span></div>
    <div class="fp-card"><span class="fp-flag">🇳🇴</span><span class="fp-country">Norway</span></div>
    <div class="fp-card"><span class="fp-flag">🇩🇪</span><span class="fp-country">Germany</span></div>
    <div class="fp-card"><span class="fp-flag">🇫🇷</span><span class="fp-country">France</span></div>
    <div class="fp-card"><span class="fp-flag">🇮🇹</span><span class="fp-country">Italy</span></div>
    <div class="fp-card"><span class="fp-flag">🇦🇹</span><span class="fp-country">Austria</span></div>
    <div class="fp-card"><span class="fp-flag">🇭🇺</span><span class="fp-country">Hungary</span></div>
    <div class="fp-card"><span class="fp-flag">🇨🇿</span><span class="fp-country">Czechia</span></div>
    <div class="fp-card"><span class="fp-flag">🇸🇰</span><span class="fp-country">Slovakia</span></div>
    <div class="fp-card"><span class="fp-flag">🇩🇰</span><span class="fp-country">Denmark</span></div>
  </div>
</div>

<hr class="about-divider">

<div class="about-prose reveal">
  <p>In many ways, this site is my digital journal — a place to share the ups and downs, the detours and discoveries. I've been adding travel itinerary posts covering where I went, what I did, what I ate, and what surprised me. I hope some of it genuinely helps if you're planning a similar trip.</p>
  <p>Feel free to explore — there are already plenty of destinations here, with more always on the way.</p>
</div>

<hr class="about-divider">

<div class="note-card reveal">
  <div class="note-card-label">🌐 A note on language</div>
  <p>This site is currently in English only. If you need a Chinese version, your browser's built-in translation feature works reasonably well as a workaround. I'd love to add bilingual support down the road — it's something I'm actively thinking about, just a significant undertaking for a one-person project. Hopefully someday soon.</p>
</div>

<div class="note-card reveal">
  <div class="note-card-label">📷 Photography & copyright</div>
  <p>Almost every photograph on this site was taken by me personally. You're welcome to use them — just please credit me or link back to this site when you do. It's a small ask for something that took a lot of time and care to create. Unauthorised commercial use is not permitted.</p>
</div>

<hr class="about-divider">

<div class="closing-note reveal">
  So that's a little about me. I hope you enjoy the photographs and stories. 🌿<br>
  Feel free to share your thoughts — I'd genuinely love to hear from you.
</div>

<script>
/* ── Scroll reveal ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

/* ── Count-up animation ── */
(function () {
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const counters = document.querySelectorAll('.count-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();
</script>