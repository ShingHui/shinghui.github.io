---
layout: post
title: "Spending 6 hours to Hike Huangshan Mountain Alone"
date: 2026-03-11 00:00:00 +0800
categories: [Destination, China]
tags: [Solo Trip, Huangshan, Hiking, Travel, China]
toc: true
description: Curious how I hiked Huangshan alone? How to buy the entrance tickets?
---


<style>
:root {
  --ink: #5c3b14;
  --fog: #e8e2d9;
  --mist: #f2ede6;
  --pine: #2d4a2d;
  --pine-light: #3d6b3d;
  --cloud: #c8d4c0;
  --stone: #7a7060;
  --gold: #b8860b;
  --gold-light: #d4a017;
  --red: #8b2e2e;
  --muted: #5c5448;
  --border: #c8bfae;
  --paper: #f5f0e8;
}

/* ── HIDE ANCHOR HASH LINKS ── */
h2 a[href^="#"],
h3 a[href^="#"],
h4 a[href^="#"],
.anchor,
.header-anchor,
.anchor-heading { display: none !important; }

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

/* ── CURSOR ── */
.cursor {
  width: 10px; height: 10px;
  background: var(--pine-light);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: multiply;
}
.cursor-ring {
  width: 32px; height: 32px;
  border: 1px solid var(--pine-light);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none;
  z-index: 9998;
  transition: width 0.3s, height 0.3s, border-color 0.3s;
}
.cursor-ring.hovered {
  width: 52px; height: 52px;
  border-color: var(--gold);
}

/* ── PROGRESS ── */
.progress-bar {
  position: fixed; top: 0; left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--pine), var(--gold));
  z-index: 999;
  width: 0%;
  transition: width 0.1s linear;
}

/* ── HERO ── */
.hero {
  min-height: 60vh;
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background: var(--pine);
}

.hero-bg {
  position: absolute; inset: 0;
  background: url('https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1600&q=80') center/cover no-repeat;
  opacity: 0.35;
  transform: scale(1.1);
  transition: opacity 2s ease, transform 8s cubic-bezier(0.25,1,0.5,1);
}
.hero-bg.loaded { opacity: 0.35; transform: scale(1); }

.hero-mist {
  position: absolute; inset: 0;
  background:
    linear-gradient(to top, rgba(26,18,8,0.95) 0%, rgba(26,18,8,0.4) 40%, rgba(45,74,45,0.3) 70%, rgba(45,74,45,0.6) 100%);
}

/* Floating mist layers */
.mist-layer {
  position: absolute;
  left: -20%; right: -20%;
  height: 120px;
  background: rgba(232,226,217,0.07);
  border-radius: 50%;
  animation: driftMist 12s ease-in-out infinite;
}
.mist-layer:nth-child(1) { top: 35%; animation-delay: 0s; animation-duration: 14s; }
.mist-layer:nth-child(2) { top: 50%; animation-delay: -5s; animation-duration: 18s; opacity: 0.6; }
.mist-layer:nth-child(3) { top: 65%; animation-delay: -9s; animation-duration: 11s; opacity: 0.4; }

@keyframes driftMist {
  0%, 100% { transform: translateX(0) scaleY(1); }
  33%       { transform: translateX(3%) scaleY(1.3); }
  66%       { transform: translateX(-2%) scaleY(0.8); }
}

.hero-content {
  position: relative; z-index: 2;
  text-align: center;
  padding: 4rem 2rem;
  max-width: 900px;
}

.hero-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--cloud);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeUp 0.8s ease 0.4s forwards;
}

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.02em;
  opacity: 0;
  animation: fadeUp 1s ease 0.6s forwards;
}

.hero-title em {
  display: block;
  font-style: italic;
  color: var(--cloud);
  font-size: 0.75em;
}

.hero-meta-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeUp 0.8s ease 1s forwards;
}

.hero-stat {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  text-align: center;
}
.hero-stat strong {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: var(--cloud);
  letter-spacing: -0.01em;
  margin-bottom: 0.2rem;
  font-weight: 900;
}

.hero-scroll {
  position: absolute;
  bottom: 2rem; left: 50%;
  transform: translateX(-50%);
  font-family: 'Space Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  z-index: 2;
  opacity: 0;
  animation: fadeUp 0.8s ease 1.4s forwards, bobDown 2s ease 2.5s infinite;
}

@keyframes bobDown {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

/* ── ALTITUDE BANNER ── */
.altitude-banner {
  background: var(--pine);
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  overflow: hidden;
}

.alt-track {
  display: flex;
  animation: ticker 22s linear infinite;
  white-space: nowrap;
}

.alt-item {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  color: var(--cloud);
  padding: 0 2rem;
  text-transform: uppercase;
  flex-shrink: 0;
}
.alt-item span { color: rgba(200,212,192,0.3); margin: 0 0.5rem; }

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── LAYOUT ── */
.section { padding: 7rem 5vw; }
.section-stone { background: #2a2620; }
.section-fog   { background: var(--fog); }
.section-paper { background: var(--paper); }

.inner { max-width: 780px; }
.inner-wide { max-width: 1000px; }

.label {
  font-family: 'Space Mono', monospace;
  font-size: 0.63rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--pine-light);
  margin-bottom: 0.7rem;
}
.label.gold   { color: var(--gold); }

h2.cp-h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 2rem;
  color: var(--ink);
}
h2.light { color: #f5f0e8; }
h2.cp-h2 em { font-style: italic; color: var(--pine-light); }
h2.light em  { color: var(--cloud); }

.cp-p {
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 1.3rem;
  font-size: 18px;
}

/* ── REVEAL ── */
.reveal {
  opacity: 0; transform: translateY(36px);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.25,1,0.5,1);
}
.reveal.visible { opacity: 1; transform: none; }
.reveal-left {
  opacity: 0; transform: translateX(-36px);
  transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.25,1,0.5,1);
}
.reveal-left.visible { opacity: 1; transform: none; }

/* ── HOTEL CARD ── */
.hotel-card {
  background: #fff;
  border: 1px solid var(--border);
  border-left: 4px solid var(--pine-light);
  padding: 2rem 2.4rem;
  margin-bottom: 3rem;
  position: relative;
}
.hotel-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--pine-light);
  margin-bottom: 0.7rem;
}
.hotel-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.3rem;
}
.hotel-sub {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  color: var(--stone);
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.hotel-note { font-size: 18px; color: var(--muted); line-height: 1.7; }
.hotel-price {
  position: absolute;
  top: 1.5rem; right: 2rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--pine-light);
}
.hotel-price span {
  display: block;
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  font-weight: 400;
  color: var(--stone);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.1rem;
}

/* ── TIPS GRID ── */
.tips-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
}

.tip-card {
  padding: 1.8rem;
  border: 1px solid var(--border);
  background: #fff;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: default;
}
.tip-card::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: var(--pine-light);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.25,1,0.5,1);
}
.tip-card:hover::after { transform: scaleX(1); }
.tip-card:hover {
  box-shadow: 0 8px 32px rgba(45,74,45,0.1);
  border-color: rgba(61,107,61,0.3);
}

.tip-icon { font-size: 1.6rem; margin-bottom: 0.8rem; }
.tip-title {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}
.tip-text { font-size: 18px; color: var(--muted); line-height: 1.65; }

/* ── GETTING THERE ── */
.transport-steps { margin-top: 2rem; }
.transport-step {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}
.step-num {
  flex: 0 0 44px; height: 44px;
  background: var(--pine);
  color: var(--cloud);
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.step-body h4 {
  font-family: 'Space Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--pine-light);
  margin-bottom: 0.4rem;
}
.step-body p { font-size: 18px; color: var(--muted); line-height: 1.7; }
.step-body strong { color: var(--ink); }

/* ── TICKET TABLE ── */
.ticket-table { margin-top: 2rem; border-collapse: collapse; width: 100%; }
.ticket-table tr {
  border-bottom: 1px solid var(--border);
  transition: background 0.2s ease;
}
.ticket-table tr:hover { background: rgba(45,74,45,0.04); }
.ticket-table td {
  padding: 0.9rem 0.5rem;
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--muted);
  vertical-align: middle;
}
.ticket-table td:first-child { color: var(--ink); }
.ticket-table td:last-child {
  text-align: right;
  font-weight: 700;
  color: var(--pine-light);
}
.ticket-table thead td {
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--stone);
  border-bottom: 2px solid var(--pine-light);
  padding-bottom: 0.6rem;
}

/* ── WHAT I PAID ── */
.paid-card {
  background: var(--pine);
  padding: 2.5rem;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;
}
.paid-card::before {
  content: '';
  position: absolute;
  top: -30px; right: -30px;
  width: 120px; height: 120px;
  border-radius: 50%;
  border: 1px solid rgba(200,212,192,0.1);
}
.paid-card::after {
  content: '';
  position: absolute;
  top: -60px; right: -60px;
  width: 200px; height: 200px;
  border-radius: 50%;
  border: 1px solid rgba(200,212,192,0.06);
}
.paid-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--cloud);
  opacity: 0.6;
  margin-bottom: 1.2rem;
}
.paid-line {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(200,212,192,0.12);
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  color: rgba(200,212,192,0.7);
}
.paid-line:last-of-type { border-bottom: none; }
.paid-line strong { color: var(--cloud); }
.paid-total {
  margin-top: 1.2rem;
  padding-top: 1.2rem;
  border-top: 1px solid rgba(200,212,192,0.25);
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.paid-total span {
  font-family: 'Space Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--cloud);
  opacity: 0.6;
}
.paid-total strong {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--cloud);
  letter-spacing: -0.02em;
}
.paid-note {
  margin-top: 1.2rem;
  font-size: 18px;
  color: rgba(200,212,192,0.55);
  line-height: 1.7;
}

/* ── STORY CALLOUT ── */
.story-callout {
  border-left: 4px solid var(--gold);
  background: rgba(184,134,11,0.04);
  padding: 2rem 2.5rem;
  margin: 3rem 0;
}
.story-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}
.story-body {
  font-size: 18px;
  color: var(--ink);
  line-height: 1.85;
}
.story-body em { font-style: italic; color: var(--stone); }

.warning-callout {
  border-left: 4px solid var(--red);
  background: rgba(139,46,46,0.04);
  padding: 2rem 2.5rem;
  margin: 3rem 0;
}
.warning-eyebrow {
  font-family: 'Space Mono', monospace;
  font-size: 0.9em;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 1rem;
}

/* ── ELEVATION VIZ ── */
.elevation-viz {
  margin: 3rem 0;
  background: #fff;
  border: 1px solid var(--border);
  padding: 2rem;
}
.elev-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--stone);
  margin-bottom: 1.5rem;
}
.peaks { display: flex; gap: 1rem; align-items: flex-end; height: 120px; }
.peak-bar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}
.peak-fill {
  width: 100%;
  background: var(--pine);
  border-radius: 2px 2px 0 0;
  opacity: 0;
  animation: cp-barGrow2 1.2s cubic-bezier(0.25,1,0.5,1) var(--d, 0.2s) forwards;
  position: relative;
  overflow: hidden;
}
.peak-fill::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 30%;
  background: rgba(200,212,192,0.15);
}
@keyframes cp-barGrow2 {
  from { height: 0 !important; opacity: 0; }
  to   { opacity: 1; }
}
.peak-name {
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.06em;
  text-align: center;
  color: var(--stone);
  text-transform: uppercase;
  line-height: 1.4;
}
.peak-height {
  font-family: 'Playfair Display', serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pine);
}

/* ── MOUNTAIN SVG VIZ ── */
.peak-svg-row {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin-top: 1.5rem;
}

.peak-svg-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.mountain-svg {
  width: 100%;
  max-width: 140px;
}

.mtn-path {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  animation: drawMtn 1.8s cubic-bezier(0.25,1,0.5,1) var(--d, 0.3s) forwards;
}

.mtn-snow {
  opacity: 0;
  animation: fadeSnow 0.6s ease var(--d2, 1.8s) forwards;
}

.mtn-mist {
  opacity: 0;
  animation: fadeSnow 1s ease var(--d2, 2s) forwards;
}

.peak-svg-item:nth-child(1) .mtn-path { --d: 0.3s; }
.peak-svg-item:nth-child(2) .mtn-path { --d: 0.6s; }
.peak-svg-item:nth-child(3) .mtn-path { --d: 0.9s; }
.peak-svg-item:nth-child(1) .mtn-snow,
.peak-svg-item:nth-child(1) .mtn-mist { --d2: 1.8s; }
.peak-svg-item:nth-child(2) .mtn-snow,
.peak-svg-item:nth-child(2) .mtn-mist { --d2: 2.1s; }
.peak-svg-item:nth-child(3) .mtn-snow,
.peak-svg-item:nth-child(3) .mtn-mist { --d2: 2.4s; }

@keyframes drawMtn {
  to { stroke-dashoffset: 0; }
}
@keyframes fadeSnow {
  to { opacity: 1; }
}

.peak-data {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-top: 0.3rem;
}

.peak-num {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--pine);
}

.peak-unit {
  font-family: 'Space Mono', monospace;
  font-size: 0.65rem;
  color: var(--stone);
}

.peak-name-label {
  font-family: 'Space Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: var(--stone);
  line-height: 1.5;
}

.peak-name-label span {
  font-size: 0.65rem;
  letter-spacing: 0;
  text-transform: none;
  color: var(--stone);
  opacity: 0.7;
}

/* ── DIVIDER ── */
.cp-divider {
  display: flex; align-items: center; gap: 1.5rem;
  margin: 4rem 0;
}
.cp-divider::before, .cp-divider::after {
  content: ''; flex: 1; height: 1px; background: var(--border);
}
.cp-divider span {
  font-family: 'Space Mono', monospace;
  font-size: 0.6rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--stone);
  white-space: nowrap;
}


/* ── KEYFRAMES ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── RESPONSIVE ── */
@media (max-width: 640px) {
  .tips-grid { grid-template-columns: 1fr; }
  .hero-meta-row { gap: 1.5rem; }
  body { cursor: auto; }
  .cursor, .cursor-ring { display: none; }
  .hotel-price { position: static; margin-bottom: 1rem; }
}
</style>


<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>
<div class="progress-bar" id="progressBar"></div>

<!-- HERO -->
<section class="hero">
  <div class="hero-bg" id="heroBg"></div>
  <div class="hero-mist"></div>
  <div class="mist-layer"></div>
  <div class="mist-layer"></div>
  <div class="mist-layer"></div>

  <div class="hero-content">
    <div class="hero-eyebrow">Solo Hiking · September 2025 · Anhui, China</div>
    <h1 class="hero-title">
      6 Hours<br/>
      on Huangshan<br/>
      <em>Mountain — Alone</em>
    </h1>
    <div class="hero-meta-row">
      <div class="hero-stat"><strong>1,864m</strong>Highest Peak</div>
      <div class="hero-stat"><strong>6 hrs</strong>On The Mountain</div>
      <div class="hero-stat"><strong>70%</strong>Route Covered</div>
      <div class="hero-stat"><strong>213</strong>RMB Total</div>
    </div>
  </div>
  <div class="hero-scroll">↓ Scroll</div>
</section>

<!-- ALTITUDE BANNER -->
<div class="altitude-banner">
  <div class="alt-track">
    <div class="alt-item">Lotus Peak <span>·</span> 1,864m <span>·</span> Bright Summit <span>·</span> 1,860m <span>·</span> Celestial Capital Peak <span>·</span> 1,829m <span>·</span> West Sea Canyon <span>·</span> Yungu Cable Car <span>·</span> 黄山 <span>·</span></div>
    <div class="alt-item">Lotus Peak <span>·</span> 1,864m <span>·</span> Bright Summit <span>·</span> 1,860m <span>·</span> Celestial Capital Peak <span>·</span> 1,829m <span>·</span> West Sea Canyon <span>·</span> Yungu Cable Car <span>·</span> 黄山 <span>·</span></div>
    <div class="alt-item">Lotus Peak <span>·</span> 1,864m <span>·</span> Bright Summit <span>·</span> 1,860m <span>·</span> Celestial Capital Peak <span>·</span> 1,829m <span>·</span> West Sea Canyon <span>·</span> Yungu Cable Car <span>·</span> 黄山 <span>·</span></div>
  </div>
</div>

<!-- OVERVIEW -->
<section class="section">
  <div class="inner">
    <div class="label reveal">Huangshan · Deep Dive</div>
    <h2 id="everything-you-need" class="cp-h2 reveal">Everything You Need<br/>to <em>Know</em></h2>

    <!-- HOTEL CARD -->
    <div class="hotel-card reveal">
      <div class="hotel-price"><span>Where I Stayed</span>RM 223.34</div>
      <div class="hotel-eyebrow">11–13 September 2025 · 2 Nights</div>
      <div class="hotel-name">Huangshan Dexin Culture Boutique Hotel</div>
      <div class="hotel-sub">Tangkou Town, Anhui · Booked via Trip.com</div>
      <p class="hotel-note">Tangkou Town sits at the foot of the mountain and is the most practical base — close to the shuttle bus transfer centre and well-connected to the scenic area entrances. I'd recommend staying here over booking accommodation on the mountain itself, unless you're specifically chasing sunrise.</p>
    </div>

   <div class="elevation-viz reveal">
  <div class="elev-label">The Three Iconic Peaks — Elevation Comparison</div>

  <div class="peak-svg-row">

    <div class="peak-svg-item">
      <svg class="mountain-svg" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="mtn-path" d="M10 85 L35 45 L42 52 L55 28 L68 48 L75 40 L110 85 Z"
          stroke="var(--pine)" stroke-width="1.5" fill="rgba(45,74,45,0.08)"
          stroke-linejoin="round" stroke-linecap="round"/>
        <path class="mtn-snow" d="M55 28 L48 38 L55 35 L62 38 Z"
          fill="rgba(200,212,192,0.5)" stroke="none"/>
        <!-- Mist line -->
        <line class="mtn-mist" x1="15" y1="62" x2="105" y2="62"
          stroke="rgba(200,212,192,0.3)" stroke-width="8" stroke-linecap="round"/>
      </svg>
      <div class="peak-data">
        <div class="peak-num" data-target="1864">1864</div>
        <div class="peak-unit">m</div>
      </div>
      <div class="peak-name-label">Lotus Peak<br/><span>莲花峰</span></div>
    </div>

    <div class="peak-svg-item">
      <svg class="mountain-svg" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="mtn-path" d="M5 85 L30 55 L50 30 L60 42 L70 30 L90 55 L115 85 Z"
          stroke="var(--pine)" stroke-width="1.5" fill="rgba(45,74,45,0.08)"
          stroke-linejoin="round" stroke-linecap="round"/>
        <path class="mtn-snow" d="M50 30 L57 40 L63 40 L70 30 L60 22 Z"
          fill="rgba(200,212,192,0.5)" stroke="none"/>
        <line class="mtn-mist" x1="15" y1="64" x2="105" y2="64"
          stroke="rgba(200,212,192,0.3)" stroke-width="8" stroke-linecap="round"/>
      </svg>
      <div class="peak-data">
        <div class="peak-num" data-target="1860">1860</div>
        <div class="peak-unit">m</div>
      </div>
      <div class="peak-name-label">Bright Summit<br/><span>光明顶</span></div>
    </div>

    <div class="peak-svg-item">
      <svg class="mountain-svg" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="mtn-path" d="M8 85 L25 60 L45 35 L55 45 L60 32 L65 45 L75 35 L95 60 L112 85 Z"
          stroke="var(--stone)" stroke-width="1.5" fill="rgba(122,112,96,0.07)"
          stroke-linejoin="round" stroke-linecap="round"/>
        <path class="mtn-snow" d="M60 32 L55 42 L60 39 L65 42 Z"
          fill="rgba(200,212,192,0.4)" stroke="none"/>
        <line class="mtn-mist" x1="15" y1="66" x2="105" y2="66"
          stroke="rgba(200,212,192,0.25)" stroke-width="8" stroke-linecap="round"/>
      </svg>
      <div class="peak-data">
        <div class="peak-num" data-target="1829">1829</div>
        <div class="peak-unit">m</div>
      </div>
      <div class="peak-name-label">Celestial Capital<br/><span>天都峰</span></div>
    </div>

  </div>
</div>

    <p class="cp-p reveal">Huangshan sits about 500 km southwest of Shanghai — roughly a 2.5-hour bullet train ride. The mountain spans a vast area with dozens of peaks and viewpoints. Plan your route in advance — it's genuinely difficult to cover everything even in two days.</p>

    <!-- TIPS GRID -->
    <div class="tips-grid">
      <div class="tip-card reveal">
        <div class="tip-icon">🚡</div>
        <div class="tip-title">Take the Cable Car Up</div>
        <p class="tip-text">Three cableways: Yungu, Taiping, and Yuping. Hiking from the base is possible but brutal — thousands of steps and up to 3 hours of climbing. Save your energy for the top, where the real scenery begins.</p>
      </div>
      <div class="tip-card reveal">
        <div class="tip-icon">🏞️</div>
        <div class="tip-title">West Sea Canyon</div>
        <p class="tip-text">One of the best hikes on the mountain. Full loop: ~5 hours. Half-loop: ~2.5 hours. A monorail runs from the valley back to the top (100 RMB). Cloud Dispersing Pavilion offers a great panoramic view.</p>
      </div>
      <div class="tip-card reveal">
        <div class="tip-icon">🌅</div>
        <div class="tip-title">Staying for Sunrise</div>
        <p class="tip-text">You'll need to sleep on the mountain. Accommodation up top is expensive — around RM 800 per night as of 2025. Book well in advance during peak season and leave large luggage in town.</p>
      </div>
      <div class="tip-card reveal">
        <div class="tip-icon">⏰</div>
        <div class="tip-title">Watch the Cable Car Schedule</div>
        <p class="tip-text">Miss the last cable car and you're walking 2–3 hours down the mountain. The mountain also closes trails during storms — conditions change fast. Build your entire day around the schedule.</p>
      </div>
      <div class="tip-card reveal">
        <div class="tip-icon">🍫</div>
        <div class="tip-title">What to Bring</div>
        <p class="tip-text">Energy bars and chocolate are essential. There are stalls on the mountain, but oily snacks won't carry you far. Comfortable hiking shoes are a must — this means paved paths and endless stairs.</p>
      </div>
      <div class="tip-card reveal">
        <div class="tip-icon">🚶</div>
        <div class="tip-title">Keep Moving, Rest Short</div>
        <p class="tip-text">Resting too long is counterproductive — your legs stiffen and swell. Aim for 10–20 minute stops to take photos, then keep your pace steady. Maintain momentum, don't sprint.</p>
      </div>
    </div>
  </div>
</section>

<!-- GETTING THERE -->
<section class="section section-fog">
  <div class="inner">
    <div class="label reveal">How to Get There</div>
    <h2 id="the-route" class="cp-h2 reveal">The Route <em>In</em></h2>

    <div class="transport-steps">
      <div class="transport-step reveal">
        <div class="step-num">01</div>
        <div class="step-body">
          <h4>High-Speed Rail to Huangshan North</h4>
          <p>Take a bullet train to <strong>Huangshan North Station (黄山北站)</strong>. From Suzhou, I paid <strong>270 RMB</strong> for the direct train. The journey takes roughly 2.5 hours.</p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">02</div>
        <div class="step-body">
          <h4>Station → Tangkou Town (2 Hours)</h4>
          <p>This part catches many travellers off guard — the station is about a <strong>2-hour drive</strong> from Tangkou Town at the mountain base. Take the city bus, or arrange a <strong>shared ride (拼车)</strong> through your hotel. I booked the 拼车 service in advance while still in Suzhou — highly recommended.Shared Ride Service × 2 (single trip each)<strong>60 RMB</strong></p>
        </div>
      </div>
      <div class="transport-step reveal">
        <div class="step-num">03</div>
        <div class="step-body">
          <h4>Tangkou → Scenic Area Entrance</h4>
          <p>Private cars cannot enter the scenic area. Take the <strong>shuttle bus from Zhaixi transfer centre</strong> to either the Ciguangge (Front Mountain) or Yungu (Back Mountain) ticket offices. Choose based on which entrance suits your planned route.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TICKET PRICES -->
<section class="section section-paper">
  <div class="inner">
    <div class="label gold reveal">Ticket Prices · 2025</div>
    <h2 id="what-it-costs" class="cp-h2 reveal">What It <em>Costs</em></h2>

    <table class="ticket-table reveal">
      <thead>
        <tr>
          <td>Item</td>
          <td></td>
          <td style="text-align:right;">Price</td>
        </tr>
      </thead>
      <tbody>
        <tr><td>🎫 Scenic Area Entrance</td><td style="color:var(--stone);">Jan 21 – Nov 19</td><td>190 RMB</td></tr>
        <tr><td>🎫 Scenic Area Entrance</td><td style="color:var(--stone);">Nov 20 – Jan 20</td><td>150 RMB</td></tr>
        <tr><td>🚌 Shuttle Bus</td><td style="color:var(--stone);">Round trip</td><td>19 RMB</td></tr>
        <tr><td>🚡 Yungu / Taiping Cable Car</td><td style="color:var(--stone);">Single trip · Peak season</td><td>80 RMB</td></tr>
        <tr><td>🚡 Yuping Cable Car</td><td style="color:var(--stone);">Single trip · Peak season</td><td>90 RMB</td></tr>
        <tr><td>🚞 West Sea Canyon Monorail</td><td style="color:var(--stone);">Single trip · Peak season</td><td>100 RMB</td></tr>
      </tbody>
    </table>

    <!-- WHAT I PAID -->
    <div class="paid-card reveal">
      <div class="paid-eyebrow">What I Actually Paid · September 2025</div>
      <div class="paid-line"><span>Yungu Cable Car (single trip)</span><strong>80 RMB</strong></div>
      <div class="paid-line"><span>Yungu Shuttle Bus (single trip each)</span><strong>19 RMB</strong></div>
      <div class="paid-line"><span>Ciguang Shuttle Bus (single trip)</span><strong>19 RMB</strong></div>
      <div class="paid-line"><span>Scenic Area Entrance (Yungu) — <em style="color:var(--cloud);font-style:italic;">Foreigner half-fare!</em></span><strong>95 RMB</strong></div>
      <div class="paid-total">
        <span>Total</span>
        <strong>213 RMB</strong>
      </div>
      <p class="paid-note">Tickets can be bought via WeChat Mini Program, at the counter on-site, or through Trip.com. Always bring your passport — you'll need it at the gate. As a foreign visitor, always ask about half-price entry.</p> 
      <p class="cp-p" style="color:rgba(200,212,192,0.55); margin-top:1rem;">💡 <a href="/posts/huangshan-tickets/" style="color:var(--cloud);">Step-by-step ticket buying guide with screenshots →</a></p>
    </div>
  </div>
</section>

<!-- MY DAY ON THE MOUNTAIN -->
<section class="section section-stone">
  <div class="inner">
    <div class="label gold reveal">Personal Experience</div>
    <h2 id="the-mountain" class="cp-h2 reveal">My Day on<br/><em>the Mountain</em></h2>

    <div class="story-callout reveal" style="border-left-color: var(--cloud); background: rgba(200,212,192,0.06);">
      <div class="story-eyebrow" style="color: var(--cloud); opacity: 0.6;">6 AM → 3 PM · September 2025</div>
      <p class="story-body" style="color: rgba(232,226,217,0.85);">I woke up at 6 AM and returned to Tangkou at around 3 PM — roughly 6 hours of hiking, covering about 70% of the main routes. The mountain was rainy and misty most of the morning, which meant fewer crowds but inconsistent visibility. Standing at Bright Summit (光明顶), watching clouds move between the peaks in silence — that moment alone was worth every step.</p>
    </div>

    <div class="warning-callout reveal" style="border-left-color: #c07a3a; background: rgba(192,122,58,0.06);">
      <div class="warning-eyebrow" style="color: #c07a3a;">⚠️ My One Regret — Book 天都峰 in Advance</div>
      <p class="story-body" style="color: rgba(232,226,217,0.75);">I didn't pre-book the Celestial Capital Peak (天都峰) timed slot. By the time I reached the entrance at around 12:40 PM, the ticket counter had already closed due to incoming thunderstorms. Weather on the mountain is unpredictable — if 天都峰 is on your list, book the slot the night before, not on the day.</p>
    </div>

    <div class="story-callout reveal" style="border-left-color: var(--stone); background: rgba(122,112,96,0.08); margin-top: 1.5rem;">
      <div class="story-eyebrow" style="color: var(--stone);">The Descent Decision</div>
      <p class="story-body" style="color: rgba(232,226,217,0.8);">Rather than taking the Yuping Cable Car down, I chose to walk the roughly 2-hour descent to Ciguangge Station — partly to challenge myself, partly to save the fare. My feet paid the price. The next day, I stayed in the hotel and skipped Hongcun Ancient Village (宏村). Zero regrets about the rest day.</p>
    </div>

    <div class="cp-divider" style="margin: 3rem 0;"><span style="color:var(--stone);">Honest Advice</span></div>

    <div class="tips-grid">
      <div class="tip-card reveal" style="background: rgba(255,255,255,0.04); border-color: rgba(200,212,192,0.15);">
        <div class="tip-icon">⚡</div>
        <div class="tip-title" style="color: var(--fog);">Keep Your Pace</div>
        <p class="tip-text" style="color: rgba(200,212,192,0.6);">If you're aiming to cover 65–80% in a single day, don't stop for too long. The longer you sit, the heavier your legs become. 10–20 minute breaks are perfect.</p>
      </div>
      <div class="tip-card reveal" style="background: rgba(255,255,255,0.04); border-color: rgba(200,212,192,0.15);">
        <div class="tip-icon">🍫</div>
        <div class="tip-title" style="color: var(--fog);">Eat Smart</div>
        <p class="tip-text" style="color: rgba(200,212,192,0.6);">Energy bars and chocolate outperform the oily sausages at mountain stalls. Your stomach and legs will thank you by hour 5.</p>
      </div>
    </div>
  </div>
</section>

<!-- CLOSING FOOTER -->
<div style="background: var(--pine); padding: 5rem 5vw; text-align: center; position: relative; overflow: hidden;">

  <!-- Decorative rings -->
  <div style="position:absolute; top:-60px; left:50%; transform:translateX(-50%); width:300px; height:300px; border-radius:50%; border:1px solid rgba(200,212,192,0.06); pointer-events:none;"></div>
  <div style="position:absolute; top:-30px; left:50%; transform:translateX(-50%); width:200px; height:200px; border-radius:50%; border:1px solid rgba(200,212,192,0.08); pointer-events:none;"></div>

  <div class="reveal" style="position:relative; z-index:1;">
    <div style="font-family:'Space Mono',monospace; font-size:0.6rem; letter-spacing:0.3em; text-transform:uppercase; color:rgba(200,212,192,0.4); margin-bottom:1.5rem;">
      Keep Going
    </div>

    <p style="font-family:'Playfair Display',serif; font-size:clamp(1.6rem,4vw,2.8rem); font-weight:700; color:#fff; line-height:1.2; margin-bottom:0.8rem;">
      More to go.<br/>
      <em style="font-style:italic; color:var(--cloud);">Stay stunned.</em>
    </p>

    <p style="font-family:'Lora',serif; font-style:italic; font-size:0.95rem; color:rgba(200,212,192,0.55); margin-bottom:3rem; line-height:1.8;">
      There are more cities, more trails, and more stories waiting.<br/>
      Explore the blog at your own pace — take your time.
    </p>

    <div style="display:flex;justify-content:center;gap:0.6rem;margin-bottom:3rem;">
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0s;display:inline-block;"></span>
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0.3s;display:inline-block;"></span>
      <span style="width:6px;height:6px;border-radius:50%;background:var(--cloud);opacity:0.4;animation:cp-dotPulse 1.8s ease infinite 0.6s;display:inline-block;"></span>
    </div>

    <div style="font-family:'Space Mono',monospace; font-size:0.62rem; letter-spacing:0.2em; text-transform:uppercase; color:rgba(200,212,192,0.25);">
      Solo Travel · Malaysia → The World
    </div>
  </div>
</div>

<script>
  window.addEventListener('load', () => {
    document.getElementById('heroBg').classList.add('loaded');
  });

  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
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

  document.querySelectorAll('.tip-card, .transport-step, a').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });

  const bar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });

  const revealEls = document.querySelectorAll('.reveal, .reveal-left');
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));
</script>
