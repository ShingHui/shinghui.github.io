---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
---

<style>
/* ── Fonts ── */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

/* ── Fade-in on scroll ── */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.75s cubic-bezier(.4,0,.2,1), transform 0.75s cubic-bezier(.4,0,.2,1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
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
  color: #b07d4a;
}

/* ── Body prose ── */
.about-prose {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.02rem;
  line-height: 1.8;
  color: inherit;
  max-width: 660px;
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

/* ── Divider ── */
.about-divider {
  border: none;
  border-top: 1px solid rgba(128,128,128,0.2);
  margin: 3rem 0;
}

/* ── Global Footprint ── */
.footprint-section {
  background: linear-gradient(135deg, #fdf8f2 0%, #f5ede0 100%);
  border-radius: 14px;
  padding: 2.4rem 2.4rem 2rem;
  margin: 2.4rem 0;
  border: 1px solid rgba(176,125,74,0.15);
}

/* dark mode aware */
@media (prefers-color-scheme: dark) {
  .footprint-section {
    background: linear-gradient(135deg, #1e1a16 0%, #261f16 100%);
    border-color: rgba(176,125,74,0.25);
  }
}
[data-mode="dark"] .footprint-section {
  background: linear-gradient(135deg, #1e1a16 0%, #261f16 100%);
  border-color: rgba(176,125,74,0.25);
}

.footprint-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #b07d4a;
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
}
.stat-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 600;
  color: #b07d4a;
  line-height: 1;
}
.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  color: inherit;
  opacity: 0.6;
  margin-top: 0.15rem;
}

.fp-group-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.5;
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
  gap: 5px;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(176,125,74,0.2);
  border-radius: 9px;
  padding: 10px 14px 8px;
  min-width: 88px;
  cursor: default;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  position: relative;
  text-decoration: none !important;
}
[data-mode="dark"] .fp-card {
  background: rgba(255,255,255,0.05);
}
.fp-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(176,125,74,0.18);
  border-color: rgba(176,125,74,0.5);
}
.fp-card.lived {
  border-color: rgba(176,125,74,0.45);
}
.fp-card.lived::after {
  content: '★';
  position: absolute;
  top: -7px;
  right: -7px;
  width: 16px;
  height: 16px;
  background: #b07d4a;
  color: #fff;
  font-size: 7px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 16px;
  text-align: center;
}

.fp-flag {
  font-size: 1.6rem;
  line-height: 1;
}
.fp-country {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  opacity: 0.7;
  text-align: center;
}
.fp-city {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.6rem;
  opacity: 0.45;
  text-align: center;
}

/* ── Counter animation ── */
.count-up { display: inline-block; }

/* ── Closing note ── */
.closing-note {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.15rem;
  font-style: italic;
  opacity: 0.7;
  margin-top: 0.4rem;
}
</style>

<div class="about-hero reveal">
  <span>Hi, I'm <em>Angel</em> 👋</span>
</div>

<div class="about-prose reveal reveal-delay-1">
  <p>Welcome to my little corner of the internet, and thank you for stopping by. If you've found your way to this page, I hope you're curious to learn a bit more about the story behind this site.</p>

  <p>My name is Shing Hui, and I created this website in the winter of 2025 as a creative outlet for my love of travel, photography, and personal reflections. I realized that my personal social media accounts weren't giving me the space or reach I wanted—especially when it came to the meaningful conversations and touching stories I encountered during my travels. So I decided to create a more intentional platform, and that's how <strong>Glowing Space</strong> was born.</p>
</div>

<div class="reveal reveal-delay-2">
  <img src="/assets/img/about/IMG_1404.jpg" alt="Angel in Iceland"
       style="width:100%; max-height:420px; object-fit:cover; border-radius:10px; margin:1.6rem 0;">
</div>

<div class="about-prose reveal">
  <p>I didn't travel very far during my childhood, but I'm grateful that my family brought me to several ASEAN countries… Looking back at those albums always fills me with warmth, and I think that's how photography slowly became one of my passions.</p>

  <p>During my university life in Tainan, Taiwan, I grew up in many ways. To my surprise, I was given an exchange placement in Kraków, Poland. That long European journey truly changed my life. I always kept my camera with me to document every moment.</p>

  <p>Living in Kraków during my exchange at Jagiellonian University gave me the travel bug. With airports and transport links right at my doorstep, I had every reason to explore. In just six months, I traveled to <strong>17 countries</strong>.</p>
</div>

<div class="photo-strip reveal">
  <img src="/assets/img/about/IMG_4026.jpeg" alt="Travel memory 1">
  <img src="/assets/img/about/IMG_5246.jpeg" alt="Travel memory 2">
  <img src="/assets/img/about/IMG_6609.jpeg" alt="Travel memory 3">
</div>

<hr class="about-divider">

<!-- ── GLOBAL FOOTPRINT ── -->
<div class="footprint-section reveal">
  <div class="footprint-eyebrow">✦ Global Footprint</div>
  <div class="footprint-headline">A life shaped by<br>crossing borders.</div>

  <div class="footprint-stats">
    <div>
      <div class="stat-num"><span class="count-up" data-target="3">0</span></div>
      <div class="stat-label">Countries lived</div>
    </div>
    <div>
      <div class="stat-num"><span class="count-up" data-target="17">0</span>+</div>
      <div class="stat-label">Countries explored</div>
    </div>
  </div>

  <div class="fp-group-label">★ Lived &amp; Studied</div>
  <div class="fp-grid">
      <div class="fp-card lived">
      <span class="fp-flag">MY</span>
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
    <!-- Add more countries you've lived in below -->
  </div>

  <div class="fp-group-label">✦ Explored</div>
  <div class="fp-grid">
    <div class="fp-card"><span class="fp-flag">🇮🇸</span><span class="fp-country">Iceland</span></div>
    <div class="fp-card"><span class="fp-flag">🇹🇭</span><span class="fp-country">Thailand</span></div>
    <div class="fp-card"><span class="fp-flag">SE</span><span class="fp-country">Sweden</span></div>
    <div class="fp-card"><span class="fp-flag">🇳🇴</span><span class="fp-country">Norway</span></div>
    <div class="fp-card"><span class="fp-flag">🇩🇪</span><span class="fp-country">Germany</span></div>
    <div class="fp-card"><span class="fp-flag">🇫🇷</span><span class="fp-country">France</span></div>
    <div class="fp-card"><span class="fp-flag">🇮🇹</span><span class="fp-country">Italy</span></div>
    <div class="fp-card"><span class="fp-flag">🇦🇹</span><span class="fp-country">Austria</span></div>
    <div class="fp-card"><span class="fp-flag">🇭🇺</span><span class="fp-country">Hungary</span></div>
    <div class="fp-card"><span class="fp-flag">🇨🇿</span><span class="fp-country">Czechia</span></div>
    <div class="fp-card"><span class="fp-flag">🇸🇰</span><span class="fp-country">Slovakia</span></div>
    <div class="fp-card"><span class="fp-flag">🇩🇰</span><span class="fp-country">Denmark</span></div>
    <!-- ↑ Edit/add your actual countries here -->
  </div>
</div>

<hr class="about-divider">

<div class="about-prose reveal">
  <p>In many ways, this site serves as my digital journal, and I'm grateful to have a space to share all the ups and downs.</p>

  <p>Feel free to explore—there are already plenty of destinations here, with more on the way.</p>
</div>

<div class="closing-note reveal">
  So that's a little about me. I hope you enjoy my photographs and stories. 🌿<br>
  Feel free to share your thoughts.
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
  }, { threshold: 0.12 });
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