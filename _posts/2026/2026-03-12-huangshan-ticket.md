---
layout: post
title: "How to Buy Huangshan Tickets — WeChat Mini Program Guide"
date: 2026-03-12 00:00:00 +0800
categories: [Destination, China]
tags: [Huangshan, Tickets, WeChat, Travel Tips, China]
description: Step-by-step guide to buying Huangshan scenic area tickets via WeChat Mini Program, with real screenshots and paid prices.
---

<style>
.cp-post {
  --ink:        #1a1208;
  --fog:        #e8e2d9;
  --pine:       #2d4a2d;
  --pine-light: #3d6b3d;
  --cloud:      #c8d4c0;
  --stone:      #7a7060;
  --gold:       #b8860b;
  --red:        #8b2e2e;
  --muted:      #5c5448;
  --border:     #c8bfae;
  --paper:      #f5f0e8;
}

/* ── CURSOR ── */
.cp-cursor {
  width: 10px; height: 10px;
  background: var(--pine-light); border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 8000;
}
.cp-cursor-ring {
  width: 32px; height: 32px;
  border: 1px solid var(--pine-light); border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 7999;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}
.cp-cursor-ring.hovered { width: 52px; height: 52px; border-color: var(--gold); }

/* ── PROGRESS ── */
.cp-progress {
  position: fixed; top: 0; left: 0; height: 3px;
  background: linear-gradient(90deg, var(--pine), var(--gold));
  z-index: 7998; width: 0%; transition: width 0.1s linear;
}

/* ── HERO ── */
.cp-post .hero {
  min-height: 100vh; position: relative;
  display: grid; place-items: center;
  overflow: hidden; background: var(--pine);
}
.cp-post .hero-bg {
  position: absolute; inset: 0;
  background: url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80') center/cover no-repeat;
  opacity: 0; transform: scale(1.1);
  transition: opacity 2s ease, transform 8s cubic-bezier(0.25,1,0.5,1);
}
.cp-post .hero-bg.loaded { opacity: 0.35; transform: scale(1); }
.cp-post .hero-mist {
  position: absolute; inset: 0;
  background: linear-gradient(to top,
    rgba(26,18,8,0.95) 0%, rgba(26,18,8,0.4) 40%,
    rgba(45,74,45,0.3) 70%, rgba(45,74,45,0.6) 100%);
}
.cp-post .mist-layer {
  position: absolute; left: -20%; right: -20%; height: 120px;
  background: rgba(232,226,217,0.07); border-radius: 50%;
  animation: cp-driftMist 12s ease-in-out infinite;
}
.cp-post .mist-layer:nth-child(1) { top: 35%; animation-duration: 14s; }
.cp-post .mist-layer:nth-child(2) { top: 50%; animation-delay: -5s; animation-duration: 18s; opacity: 0.6; }
.cp-post .mist-layer:nth-child(3) { top: 65%; animation-delay: -9s; animation-duration: 11s; opacity: 0.4; }
@keyframes cp-driftMist {
  0%,100% { transform: translateX(0) scaleY(1); }
  33%     { transform: translateX(3%) scaleY(1.3); }
  66%     { transform: translateX(-2%) scaleY(0.8); }
}
.cp-post .hero-content {
  position: relative; z-index: 2;
  text-align: center; padding: 4rem 2rem; max-width: 900px;
}
.cp-post .hero-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--cloud); margin-bottom: 2rem;
  opacity: 0; animation: cp-fadeUp 0.8s ease 0.4s forwards;
}
.cp-post .hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 7rem); font-weight: 900; color: #fff;
  line-height: 1.05; letter-spacing: -0.02em; margin: 0;
  opacity: 0; animation: cp-fadeUp 1s ease 0.6s forwards;
}
.cp-post .hero-title em { display: block; font-style: italic; color: var(--cloud); font-size: 0.75em; }
.cp-post .hero-meta-row {
  display: flex; justify-content: center;
  gap: 3rem; margin-top: 3rem; flex-wrap: wrap;
  opacity: 0; animation: cp-fadeUp 0.8s ease 1s forwards;
}
.cp-post .hero-stat {
  font-family: 'Space Mono', monospace; font-size: 0.62rem;
  color: rgba(255,255,255,0.5); text-transform: uppercase;
  letter-spacing: 0.12em; text-align: center;
}
.cp-post .hero-stat strong {
  display: block; font-family: 'Playfair Display', serif;
  font-size: 2rem; color: var(--cloud);
  letter-spacing: -0.01em; margin-bottom: 0.2rem; font-weight: 900;
}
.cp-post .hero-scroll {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  font-family: 'Space Mono', monospace; font-size: 0.58rem;
  letter-spacing: 0.2em; color: rgba(255,255,255,0.35);
  text-transform: uppercase; z-index: 2; opacity: 0;
  animation: cp-fadeUp 0.8s ease 1.4s forwards, cp-bobDown 2s ease 2.5s infinite;
}
@keyframes cp-bobDown {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50%     { transform: translateX(-50%) translateY(6px); }
}

/* ── TICKER ── */
.cp-post .altitude-banner {
  background: var(--pine); padding: 1.2rem 2rem;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}
.cp-post .alt-track { display: flex; animation: cp-ticker 22s linear infinite; white-space: nowrap; }
.cp-post .alt-item {
  font-family: 'Space Mono', monospace; font-size: 0.68rem;
  letter-spacing: 0.15em; color: var(--cloud);
  padding: 0 2rem; text-transform: uppercase; flex-shrink: 0;
}
.cp-post .alt-item span { color: rgba(200,212,192,0.3); margin: 0 0.5rem; }
@keyframes cp-ticker {
  0%  { transform: translateX(0); }
  100%{ transform: translateX(-50%); }
}

/* ── LAYOUT ── */
.cp-post .section     { padding: 7rem 5vw; }
.cp-post .section-stone { background: #2a2620; }
.cp-post .section-fog   { background: var(--fog); }
.cp-post .section-paper { background: var(--paper); }
.cp-post .inner { max-width: 780px; }

.cp-post .label {
  font-family: 'Space Mono', monospace; font-size: 0.63rem;
  letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--pine-light); margin-bottom: 0.7rem; display: block;
}
.cp-post .label.light { color: var(--cloud); }
.cp-post .label.gold  { color: var(--gold); }

.cp-post h2.cp-h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 4.5vw, 3rem); font-weight: 700;
  line-height: 1.15; margin-bottom: 2rem;
  color: var(--ink); border: none; padding: 0;
}
.cp-post h2.light { color: #f5f0e8; }
.cp-post h2.cp-h2 em { font-style: italic; color: var(--pine-light); }
.cp-post h2.light em  { color: var(--cloud); }

.cp-post .cp-p { color: var(--muted); line-height: 1.9; margin-bottom: 1.3rem; font-size: 1.02rem; }

/* ── REVEAL ── */
.cp-post .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.25,1,0.5,1); }
.cp-post .reveal.visible { opacity: 1; transform: none; }

/* ── NOTICE CARD ── */
.cp-post .notice-card {
  background: #fff; border: 1px solid var(--border);
  border-left: 4px solid var(--pine-light);
  padding: 1.8rem 2.2rem; margin-bottom: 2.5rem;
  font-size: 0.9rem; color: var(--muted); line-height: 1.8;
}
.cp-post .notice-card strong { color: var(--ink); }
.cp-post .notice-card a { color: var(--pine-light); text-decoration: underline; }

/* ── TICKET TABLE ── */
.cp-post .ticket-table { margin-top: 2rem; border-collapse: collapse; width: 100%; }
.cp-post .ticket-table tr { border-bottom: 1px solid var(--border); transition: background 0.2s ease; }
.cp-post .ticket-table tr:hover { background: rgba(45,74,45,0.04); }
.cp-post .ticket-table td {
  padding: 0.9rem 0.5rem; font-family: 'Space Mono', monospace;
  font-size: 0.7rem; letter-spacing: 0.04em; color: var(--muted); vertical-align: middle;
}
.cp-post .ticket-table td:first-child { color: var(--ink); }
.cp-post .ticket-table td:last-child { text-align: right; font-weight: 700; color: var(--pine-light); }
.cp-post .ticket-table thead td {
  font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase;
  color: var(--stone); border-bottom: 2px solid var(--pine-light); padding-bottom: 0.6rem;
}

/* ── WHAT I PAID ── */
.cp-post .paid-card {
  background: var(--pine); padding: 2.5rem; margin-top: 2rem;
  position: relative; overflow: hidden;
}
.cp-post .paid-card::before {
  content: ''; position: absolute; top: -30px; right: -30px;
  width: 120px; height: 120px; border-radius: 50%;
  border: 1px solid rgba(200,212,192,0.1);
}
.cp-post .paid-card::after {
  content: ''; position: absolute; top: -60px; right: -60px;
  width: 200px; height: 200px; border-radius: 50%;
  border: 1px solid rgba(200,212,192,0.06);
}
.cp-post .paid-eyebrow {
  font-family: 'Space Mono', monospace; font-size: 0.62rem;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--cloud); opacity: 0.6; margin-bottom: 1.2rem;
}
.cp-post .paid-line {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 0.5rem 0; border-bottom: 1px solid rgba(200,212,192,0.12);
  font-family: 'Space Mono', monospace; font-size: 0.72rem; color: rgba(200,212,192,0.7);
}
.cp-post .paid-line:last-of-type { border-bottom: none; }
.cp-post .paid-line strong { color: var(--cloud); }
.cp-post .paid-total {
  margin-top: 1.2rem; padding-top: 1.2rem;
  border-top: 1px solid rgba(200,212,192,0.25);
  display: flex; justify-content: space-between; align-items: baseline;
}
.cp-post .paid-total span {
  font-family: 'Space Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.15em; text-transform: uppercase; color: var(--cloud); opacity: 0.6;
}
.cp-post .paid-total strong {
  font-family: 'Playfair Display', serif; font-size: 2.5rem;
  font-weight: 900; color: var(--cloud); letter-spacing: -0.02em;
}
.cp-post .paid-note { margin-top: 1.2rem; font-size: 0.78rem; color: rgba(200,212,192,0.55); line-height: 1.7; }

/* ── STEPS ── */
.cp-post .transport-steps { margin-top: 2rem; }
.cp-post .transport-step { display: flex; gap: 1.5rem; margin-bottom: 2rem; align-items: flex-start; }
.cp-post .step-num {
  flex: 0 0 44px; height: 44px; background: var(--pine); color: var(--cloud);
  font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 900;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.1rem;
}
.cp-post .step-body h4 {
  font-family: 'Space Mono', monospace; font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--pine-light); margin-bottom: 0.4rem; border: none; padding: 0;
}
.cp-post .step-body p { font-size: 0.88rem; color: var(--muted); line-height: 1.7; }
.cp-post .step-body strong { color: var(--ink); }

/* ── CALLOUTS ── */
.cp-post .story-callout { border-left: 4px solid var(--gold); background: rgba(184,134,11,0.04); padding: 2rem 2.5rem; margin: 3rem 0; }
.cp-post .story-eyebrow { font-family: 'Space Mono', monospace; font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; display: block; }
.cp-post .story-body { font-size: 0.92rem; color: var(--ink); line-height: 1.85; }
.cp-post .story-body em { font-style: italic; color: var(--stone); }
.cp-post .warning-callout { border-left: 4px solid var(--red); background: rgba(139,46,46,0.04); padding: 2rem 2.5rem; margin: 3rem 0; }
.cp-post .warning-eyebrow { font-family: 'Space Mono', monospace; font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; display: block; }

/* ── TIPS GRID ── */
.cp-post .tips-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.5rem; }
.cp-post .tip-card {
  padding: 1.8rem; border: 1px solid var(--border); background: #fff;
  position: relative; overflow: hidden;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}
.cp-post .tip-card::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
  background: var(--pine-light); transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.25,1,0.5,1);
}
.cp-post .tip-card:hover::after { transform: scaleX(1); }
.cp-post .tip-card:hover { box-shadow: 0 8px 32px rgba(45,74,45,0.1); border-color: rgba(61,107,61,0.3); }
.cp-post .tip-icon { font-size: 1.6rem; margin-bottom: 0.8rem; display: block; }
.cp-post .tip-title { font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: var(--ink); margin-bottom: 0.5rem; line-height: 1.3; display: block; }
.cp-post .tip-text { font-size: 0.82rem; color: var(--muted); line-height: 1.65; }

/* ── BUTTON LINKS ── */
.cp-post .btn-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 2rem; }
.cp-post .btn-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.75rem 1.4rem; background: var(--pine); color: var(--cloud) !important;
  font-family: 'Space Mono', monospace; font-size: 0.65rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  text-decoration: none !important;
  transition: background 0.25s ease, transform 0.2s ease;
}
.cp-post .btn-link:hover { background: var(--pine-light); transform: translateY(-2px); }
.cp-post .btn-link.outline { background: transparent; border: 1px solid var(--cloud); color: var(--cloud) !important; }
.cp-post .btn-link.outline:hover { background: rgba(200,212,192,0.1); }

/* ════════════════════════════════════════
   HORIZONTAL PHOTO STRIP — pure CSS scroll
   ════════════════════════════════════════ */
.cp-post .gallery-section { padding: 7rem 0; background: var(--paper); }
.cp-post .gallery-section .inner { max-width: 780px; padding: 0 5vw; }

.cp-post .photo-strip {
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding: 1.5rem 5vw;
  /* hide scrollbar but keep scroll */
  scrollbar-width: none;
}
.cp-post .photo-strip::-webkit-scrollbar { display: none; }

.cp-post .photo-strip img {
  height: 260px;
  width: auto;
  flex-shrink: 0;
  scroll-snap-align: start;
  display: block;
  object-fit: cover;
  border: 1px solid var(--border);
  transition: opacity 0.2s ease;
}
.cp-post .photo-strip img:hover { opacity: 0.88; }

/* ── KEYFRAMES ── */
@keyframes cp-fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes cp-dotPulse {
  0%,100% { opacity: 0.4; transform: scale(1); }
  50%     { opacity: 1;   transform: scale(1.4); }
}

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  .cp-post .tips-grid { grid-template-columns: 1fr; }
  .cp-post .hero-meta-row { gap: 1.5rem; }
  .cp-post .photo-strip img { height: 200px; }
  .cp-cursor, .cp-cursor-ring { display: none; }
}
</style>

<div class="cp-cursor" id="cpCursor"></div>
<div class="cp-cursor-ring" id="cpCursorRing"></div>
<div class="cp-progress" id="cpProgress"></div>

<div class="cp-post">

<!-- ═══ HERO ═══ -->
<section class="hero">
  <div class="hero-bg" id="heroBg"></div>
  <div class="hero-mist"></div>
  <div class="mist-layer"></div>
  <div class="mist-layer"></div>
  <div class="mist-layer"></div>
  <div class="hero-content">
    <div class="hero-eyebrow">Ticket Guide · Huangshan · 2025</div>
    <h1 class="hero-title">
      Buying Your<br/>
      Tickets<br/>
      <em>Step by Step</em>
    </h1>
    <div class="hero-meta-row">
      <div class="hero-stat"><strong>WeChat</strong>Mini Program</div>
      <div class="hero-stat"><strong>190</strong>RMB Entrance</div>
      <div class="hero-stat"><strong>95</strong>RMB Foreigner Rate</div>
      <div class="hero-stat"><strong>213</strong>RMB My Total</div>
    </div>
  </div>
  <div class="hero-scroll">↓ Scroll</div>
</section>

<!-- ═══ TICKER ═══ -->
<div class="altitude-banner">
  <div class="alt-track">
    <div class="alt-item">WeChat Mini Program <span>·</span> 黄山风景区 <span>·</span> Entrance Ticket <span>·</span> 190 RMB <span>·</span> Cable Car <span>·</span> Shuttle Bus <span>·</span> Foreigner Half-Price <span>·</span> Trip.com <span>·</span> QR Code Ticket <span>·</span></div>
    <div class="alt-item">WeChat Mini Program <span>·</span> 黄山风景区 <span>·</span> Entrance Ticket <span>·</span> 190 RMB <span>·</span> Cable Car <span>·</span> Shuttle Bus <span>·</span> Foreigner Half-Price <span>·</span> Trip.com <span>·</span> QR Code Ticket <span>·</span></div>
    <div class="alt-item">WeChat Mini Program <span>·</span> 黄山风景区 <span>·</span> Entrance Ticket <span>·</span> 190 RMB <span>·</span> Cable Car <span>·</span> Shuttle Bus <span>·</span> Foreigner Half-Price <span>·</span> Trip.com <span>·</span> QR Code Ticket <span>·</span></div>
  </div>
</div>

<!-- ═══ INTRO ═══ -->
<section class="section">
  <div class="inner">
    <div class="label reveal">Before You Start</div>
    <h2 class="cp-h2 reveal">Do You Need a<br/><em>Chinese Phone Number?</em></h2>
    <div class="notice-card reveal">
      In my experience, yes — you need one to register on the WeChat Mini Program. If you don't have one, the easiest alternatives are <strong>Trip.com</strong> (English interface, small booking fee) or buying at the counter on arrival. Both are perfectly fine outside peak season.
    </div>
    <p class="cp-p reveal">Screenshots below are from my actual purchase in September 2025 — via WeChat Mini Program, covering entrance options, ticket confirmations, and what I paid as a foreign visitor.</p>
  </div>
</section>

<!-- ═══ TICKET PRICES ═══ -->
<section class="section section-fog">
  <div class="inner">
    <div class="label gold reveal">Official Prices · 2025</div>
    <h2 class="cp-h2 reveal">What It <em>Costs</em></h2>
    <table class="ticket-table reveal">
      <thead>
        <tr><td>Item</td><td></td><td style="text-align:right;">Price</td></tr>
      </thead>
      <tbody>
        <tr><td>🎫 Scenic Area Entrance</td><td style="color:var(--stone);">Jan 21 – Nov 19</td><td>190 RMB</td></tr>
        <tr><td>🎫 Scenic Area Entrance</td><td style="color:var(--stone);">Nov 20 – Jan 20</td><td>150 RMB</td></tr>
        <tr><td>🚌 Shuttle Bus</td><td style="color:var(--stone);">Single trip</td><td>15 RMB</td></tr>
        <tr><td>🚡 Yungu / Taiping Cable Car</td><td style="color:var(--stone);">Single trip · Peak season</td><td>80 RMB</td></tr>
        <tr><td>🚡 Yuping Cable Car</td><td style="color:var(--stone);">Single trip · Peak season</td><td>90 RMB</td></tr>
        <tr><td>🚞 West Sea Canyon Monorail</td><td style="color:var(--stone);">Single trip · Peak season</td><td>100 RMB</td></tr>
      </tbody>
    </table>
    <div class="story-callout reveal">
      <span class="story-eyebrow">⚠️ Foreigner Tip</span>
      <p class="story-body">Always show your passport at the ticket counter — foreign visitors may qualify for <strong>half-price entry</strong>. I paid 95 RMB instead of 190 RMB. Always ask, even if no sign mentions it.</p>
    </div>
    <div class="paid-card reveal">
      <div class="paid-eyebrow">What I Actually Paid · September 2025</div>
      <div class="paid-line"><span>Scenic Area Entrance (Yungu) — Foreigner half-fare</span><strong>95 RMB</strong></div>
      <div class="paid-line"><span>Yungu Cable Car (single trip up)</span><strong>80 RMB</strong></div>
      <div class="paid-line"><span>Yuping Shuttle Bus (single trip)</span><strong>15 RMB</strong></div>
      <div class="paid-line"><span>Ciguangge Shuttle Bus (single trip down)</span><strong>40 RMB</strong></div>
      <div class="paid-total">
        <span>My Total</span>
        <strong>213 RMB</strong>
      </div>
      <p class="paid-note">I skipped the cable car on the way down and walked 2 hours to Ciguangge Station instead — partly to save money, partly to challenge myself. My feet regretted it the next day.</p>
    </div>
  </div>
</section>

<!-- ═══ WECHAT STEPS ═══ -->
<section class="section section-paper">
  <div class="inner">
    <div class="label reveal">WeChat Mini Program</div>
    <h2 class="cp-h2 reveal">Buying via <em>WeChat</em></h2>
    <div class="transport-steps">
      <div class="transport-step reveal">
        <div class="step-num">01</div>
        <div class="step-body">
          <h4>Open the Mini Program</h4>
          <p>Open WeChat and search <strong>黄山风景区</strong> in the Mini Program search bar. Select the official Huangshan Scenic Area mini program.</p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">02</div>
        <div class="step-body">
          <h4>Choose Your Entrance Point</h4>
          <p>Select <strong>Yungu</strong> (Back Mountain, cable car side) or <strong>Yuping</strong> (Front Mountain). Pick based on your planned hiking route. I used Yungu.</p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">03</div>
        <div class="step-body">
          <h4>Select Date and Ticket Type</h4>
          <p>If you want to visit <strong>Celestial Capital Peak (天都峰)</strong>, book that timed slot here too — it sells out and closes early during bad weather.</p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">04</div>
        <div class="step-body">
          <h4>Enter Your Passport Number</h4>
          <p>Pay via Alipay or WeChat Pay. Your QR code ticket will be saved in the mini program — <strong>screenshot it just in case</strong>.</p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">05</div>
        <div class="step-body">
          <h4>At the Gate — Show Passport + QR Code</h4>
          <p>Staff will verify both. As a foreign visitor, <strong>mention you're a foreigner</strong> — you may get the half-price rate applied on the spot.</p>
        </div>
      </div>
    </div>
    <div class="warning-callout reveal">
      <span class="warning-eyebrow">📅 Book the Night Before, Not on the Day</span>
      <p class="story-body">Certain peaks (especially 天都峰) have daily capacity limits and close early if weather turns bad. I arrived at the 天都峰 entrance at 12:40 PM and the counter was already closed due to thunderstorms. Book in advance.</p>
    </div>
  </div>
</section>

<!-- ═══ PHOTO STRIP ═══ -->
<section class="gallery-section">
  <div class="inner">
    <div class="label reveal">Screenshots · In Action</div>
    <h2 class="cp-h2 reveal">What It <em>Looks Like</em></h2>
    <p class="cp-p reveal">My actual screenshots — swipe to see the full flow.</p>
  </div>
  <div class="photo-strip reveal">
    <img src="/assets/img/2025/china/Huangshan/huangshan.JPEG"                           alt="Huangshan Overview" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/ticket.jpg"                               alt="Ticket" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/Yungu-or-Ciguang.jpg"                     alt="Choose entrance point" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/shuttle-bus-cable-car-station.PNG"         alt="Shuttle Bus Station" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/Entrance-fee.jpg"                         alt="Scenic Entrance Ticket" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/Celestial Capital Peak (天都峰).JPEG"      alt="Celestial Capital Peak 天都峰" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/Ciguangge Station.JPEG"                   alt="Ciguangge Station" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/me.JPEG"                                  alt="Hooray" loading="lazy"/>
    <img src="/assets/img/2025/china/Huangshan/Huangshan-Map.jpg"                        alt="Time on each stop" loading="lazy"/>
  </div>
</section>

<!-- ═══ ALTERNATIVE OPTIONS ═══ -->
<section class="section section-stone">
  <div class="inner">
    <div class="label light reveal">Alternative Options</div>
    <h2 class="cp-h2 light reveal">Book Online <em>or On-Site</em></h2>
    <p class="cp-p reveal" style="color: rgba(200,212,192,0.7);">If the WeChat Mini Program doesn't work for you, two reliable alternatives:</p>
    <div class="tips-grid">
      <div class="tip-card reveal" style="background: rgba(255,255,255,0.04); border-color: rgba(200,212,192,0.15);">
        <span class="tip-icon">🌐</span>
        <span class="tip-title" style="color: var(--fog);">Trip.com (English)</span>
        <p class="tip-text" style="color: rgba(200,212,192,0.6);">Small booking fee, but full English interface with reliable customer support. Ideal if you don't have a Chinese phone number. Outside peak season the fee is negligible.</p>
      </div>
      <div class="tip-card reveal" style="background: rgba(255,255,255,0.04); border-color: rgba(200,212,192,0.15);">
        <span class="tip-icon">🏷️</span>
        <span class="tip-title" style="color: var(--fog);">Buy at the Counter</span>
        <p class="tip-text" style="color: rgba(200,212,192,0.6);">No fees, no app needed — arrive early and queues are manageable. During peak season this adds risk of selling out, especially for timed-slot peaks.</p>
      </div>
    </div>
    <div class="btn-row reveal">
      <a class="btn-link" href="https://www.trip.com" target="_blank" rel="noopener">→ Trip.com (English)</a>
      <a class="btn-link outline" href="https://www.huangshan.com.cn" target="_blank" rel="noopener">→ Official Huangshan Site</a>
    </div>
  </div>
</section>

<!-- ═══ FOOTER ═══ -->
<div style="background: var(--pine); padding: 5rem 5vw; text-align: center; position: relative; overflow: hidden;">
  <div style="position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:300px;height:300px;border-radius:50%;border:1px solid rgba(200,212,192,0.06);pointer-events:none;"></div>
  <div style="position:absolute;top:-30px;left:50%;transform:translateX(-50%);width:200px;height:200px;border-radius:50%;border:1px solid rgba(200,212,192,0.08);pointer-events:none;"></div>
  <div class="reveal" style="position:relative;z-index:1;">
    <div style="font-family:'Space Mono',monospace;font-size:0.6rem;letter-spacing:0.3em;text-transform:uppercase;color:rgba(200,212,192,0.4);margin-bottom:1.5rem;">Keep Going</div>
    <p style="font-family:'Playfair Display',serif;font-size:clamp(1.6rem,4vw,2.8rem);font-weight:700;color:#fff;line-height:1.2;margin-bottom:0.8rem;">
      Ready to hike.<br/><em style="font-style:italic;color:var(--cloud);">Book your tickets.</em>
    </p>
    <p style="font-family:'Lora',serif;font-style:italic;font-size:0.95rem;color:rgba(200,212,192,0.55);margin-bottom:3rem;line-height:1.8;">
      The mountain is waiting. Tickets in hand,<br/>all that's left is to show up and climb.
    </p>
    <div style="display:flex;justify-content:center;gap:0.6rem;margin-bottom:3rem;">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0s;display:inline-block;"></span>
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0.3s;display:inline-block;"></span>
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0.6s;display:inline-block;"></span>
    </div>
    <div style="font-family:'Space Mono',monospace;font-size:0.62rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(200,212,192,0.25);">Solo Travel · Malaysia → The World</div>
  </div>
</div>

</div><!-- /cp-post -->

<script>
(function () {
  window.addEventListener('load', () => { document.getElementById('heroBg').classList.add('loaded'); });

  // Cursor
  const cursor = document.getElementById('cpCursor');
  const ring   = document.getElementById('cpCursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });
  (function animRing() {
    rx += (mx - rx - 16) * 0.12;
    ry += (my - ry - 16) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('.cp-post .tip-card, .cp-post .transport-step, .cp-post .btn-link, .cp-post a').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });

  // Progress bar
  const bar = document.getElementById('cpProgress');
  window.addEventListener('scroll', () => {
    bar.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
  });

  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.cp-post .reveal').forEach(el => io.observe(el));
})();
</script>