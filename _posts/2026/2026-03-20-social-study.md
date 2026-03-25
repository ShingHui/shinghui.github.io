---
layout: post
title: "The Psychology of Near-Expired Food"
date: 2026-03-20 00:00:00 +0800
categories: [Portfolio]
tags: [Consumer Behavior, Social Psychology, Market Research, ESG]
toc: false
image:
  path: /assets/img/portfolio/near-expiry-products.jpeg
  alt: Social Psychology Case Study x NCKU x 2024.02-2024.06
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;0,900;1,300;1,700&family=DM+Sans:opsz,wght@9..40,400;500;600&display=swap');

  :root {
    --fi-moss:    #3a5a40;
    --fi-sage:    #6a9b74;
    --fi-cream:   #f7f3ec;
    --fi-amber:   #c8873a;
    --fi-red:     #b84040;
    --fi-slate:   #2c3e35;
    --fi-border:  rgba(58,90,64,0.15);
    --fi-serif:   'Fraunces', Georgia, serif;
    --fi-sans:    'DM Sans', system-ui, sans-serif;
  }

  .fi-body { font-family: var(--fi-sans); }

  /* ══ HERO ══ */
  .fi-hero {
    background: var(--fi-slate);
    border-radius: 16px;
    padding: 56px 48px 48px;
    margin-bottom: 0;
    position: relative;
    overflow: hidden;
  }
  .fi-hero::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 320px; height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(106,155,116,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .fi-hero-tag {
    font-family: var(--fi-sans);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--fi-sage);
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .fi-hero-tag::before {
    content: '';
    width: 24px; height: 2px;
    background: var(--fi-sage);
    display: inline-block;
  }
  .fi-hero h1 {
    font-family: var(--fi-serif);
    font-size: 3rem;
    font-weight: 900;
    color: #f0ede6 !important;
    line-height: 1.1;
    margin: 0 0 8px;
    border-bottom: none !important;
  }
  .fi-hero h1 em {
    font-style: italic;
    color: #a8c9a0 !important;
  }
  .fi-hero-sub {
    font-family: var(--fi-sans);
    font-size: 1rem;
    color: rgba(240,237,230,0.65);
    margin-bottom: 32px;
    line-height: 1.5;
  }
  .fi-hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .fi-meta-pill {
    font-family: var(--fi-sans);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    border: 1px solid rgba(240,237,230,0.2);
    color: rgba(240,237,230,0.75);
    background: rgba(255,255,255,0.06);
    letter-spacing: 0.04em;
  }

  /* ══ WIDE DIVIDER BANDS ══ */
  .fi-band {
    margin: 0 -0px;
    padding: 14px 0;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .fi-band-label {
    font-family: var(--fi-sans);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .fi-band-line {
    flex: 1;
    height: 1px;
    background: var(--fi-border);
  }
  .fi-band-num {
    font-family: var(--fi-serif);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--fi-moss);
    flex-shrink: 0;
  }

  /* ══ BIG STATS ROW ══ */
  .fi-stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--fi-border);
    border: 1px solid var(--fi-border);
    border-radius: 12px;
    overflow: hidden;
    margin: 20px 0;
  }
  .fi-stat-cell {
    padding: 28px 24px;
    background: rgba(58,90,64,0.04);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .fi-stat-num {
    font-family: var(--fi-serif);
    font-size: 2.8rem;
    font-weight: 900;
    color: var(--fi-moss);
    line-height: 1;
  }
  .fi-stat-unit {
    font-family: var(--fi-serif);
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--fi-sage);
  }
  .fi-stat-label {
    font-family: var(--fi-sans);
    font-size: 0.78rem;
    line-height: 1.5;
    opacity: 0.65;
  }
  .fi-stat-source {
    font-family: var(--fi-sans);
    font-size: 0.65rem;
    opacity: 0.4;
    margin-top: 4px;
  }

  /* ══ CONTEXT PARAGRAPH ══ */
  .fi-context {
    font-size: 1.0rem;
    line-height: 1.8;
    border-left: 3px solid var(--fi-moss);
    padding-left: 20px;
    margin: 20px 0;
  }

  /* ══ INSIGHT OVERVIEW BOX ══ */
  .fi-overview {
    background: var(--fi-moss);
    border-radius: 14px;
    padding: 32px 36px;
    margin: 24px 0;
    color: #f0ede6;
  }
  .fi-overview-label {
    font-family: var(--fi-sans);
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a8c9a0;
    margin-bottom: 14px;
  }
  .fi-overview p {
    font-family: var(--fi-sans);
    font-size: 0.95rem;
    line-height: 1.75;
    color: rgba(240,237,230,0.88);
    margin: 0;
  }
  .fi-overview strong { color: #f0ede6; }

  /* ══ DRIVERS vs BARRIERS ══ */
  .fi-db-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin: 20px 0;
  }
  .fi-db-col {
    border-radius: 12px;
    padding: 24px;
    border: 1px solid var(--fi-border);
  }
  .fi-db-col.drivers { background: rgba(58,90,64,0.05); border-top: 4px solid var(--fi-moss); }
  .fi-db-col.barriers { background: rgba(184,64,64,0.04); border-top: 4px solid var(--fi-red); }

  .fi-db-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 18px;
  }
  .fi-db-icon { font-size: 1.3rem; }
  .fi-db-title {
    font-family: var(--fi-serif);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .fi-db-col.drivers .fi-db-title { color: var(--fi-moss); }
  .fi-db-col.barriers .fi-db-title { color: var(--fi-red); }

  .fi-db-item {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    font-size: 0.88rem;
    line-height: 1.6;
    align-items: flex-start;
  }
  .fi-db-item:last-child { margin-bottom: 0; }
  .fi-db-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 7px;
  }
  .drivers .fi-db-dot { background: var(--fi-moss); }
  .barriers .fi-db-dot { background: var(--fi-red); }
  .fi-db-item strong { display: block; font-weight: 600; margin-bottom: 2px; }

  /* ══ THEORY FRAMEWORK CARDS ══ */
  .fi-theory-stack {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 0;
  }
  .fi-theory-card {
    border: 1px solid var(--fi-border);
    border-radius: 12px;
    padding: 22px 26px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 0 32px;
    align-items: start;
    background: rgba(58,90,64,0.03);
  }
  .fi-theory-left {}
  .fi-theory-abbr {
    font-family: var(--fi-serif);
    font-size: 2rem;
    font-weight: 900;
    color: var(--fi-moss);
    line-height: 1;
    margin-bottom: 4px;
  }
  .fi-theory-name {
    font-family: var(--fi-sans);
    font-size: 0.88rem;
    font-weight: 600;
    opacity: 0.6;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  .fi-theory-tag {
    font-family: var(--fi-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 4px;
    background: rgba(58,90,64,0.12);
    color: var(--fi-moss);
    display: inline-block;
  }
  .fi-theory-right {}
  .fi-theory-mechanism {
    font-family: var(--fi-sans);
    font-size: 0.92rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.5;
    margin-bottom: 6px;
  }
  .fi-theory-explain {
    font-size: 1.0rem;
    line-height: 1.7;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px dashed var(--fi-border);
  }
  .fi-theory-market {
    font-size: 0.95rem;
    line-height: 1.65;
  }
  .fi-theory-market .market-label {
    font-family: var(--fi-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--fi-amber);
    margin-right: 6px;
  }

  /* ══ BRAND CASE STUDY ══ */
  .fi-brand-box {
    border: 1px solid var(--fi-border);
    border-top: 4px solid var(--fi-amber);
    border-radius: 0 0 12px 12px;
    padding: 28px 32px;
    margin: 24px 0;
    background: rgba(200,135,58,0.04);
  }
  .fi-brand-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 8px;
  }
  .fi-brand-label {
    font-family: var(--fi-sans);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--fi-amber);
  }
  .fi-brand-title {
    font-family: var(--fi-serif);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 6px 0 16px;
  }
  .fi-brand-cases {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }
  .fi-brand-case {
    background: rgba(255,255,255,0.5);
    border: 1px solid var(--fi-border);
    border-radius: 8px;
    padding: 16px 18px;
  }
  .fi-brand-case-name {
    font-family: var(--fi-sans);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fi-amber);
    margin-bottom: 6px;
  }
  .fi-brand-case-title {
    font-size: 1.0rem;
    font-weight: 600;
    margin-bottom: 6px;
  }
  .fi-brand-case-desc {
    font-size: 0.92rem;
    line-height: 1.6;
    opacity: 0.72;
  }
  .fi-brand-impact {
    margin-top: 16px;
    background: rgba(58,90,64,0.07);
    border-radius: 8px;
    padding: 14px 18px;
    font-size: 0.98rem;
    line-height: 1.6;
    border-left: 3px solid var(--fi-moss);
  }
  .fi-brand-impact strong { color: var(--fi-moss); }

  /* ══ STRATEGY RECS ══ */
  .fi-recs-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin: 20px 0;
  }
  .fi-rec-row {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 0 20px;
    align-items: start;
    padding: 18px 20px;
    border: 1px solid var(--fi-border);
    border-radius: 10px;
    background: rgba(58,90,64,0.03);
  }
  .fi-rec-num {
    font-family: var(--fi-serif);
    font-size: 2rem;
    font-weight: 900;
    color: var(--fi-moss);
    opacity: 0.3;
    line-height: 1;
  }
  .fi-rec-content {}
  .fi-rec-title {
    font-family: var(--fi-sans);
    font-size: 1.0rem;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .fi-rec-theory {
    font-family: var(--fi-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--fi-sage);
    margin-bottom: 8px;
  }
  .fi-rec-desc {
    font-size: 0.95rem;
    line-height: 1.65;
    opacity: 0.75;
  }

  /* ══ PROPOSED RESEARCH ══ */
  .fi-research-block {
    background: var(--fi-slate);
    border-radius: 14px;
    padding: 36px 40px;
    color: #f0ede6;
    margin: 24px 0;
  }
  .fi-research-label {
    font-family: var(--fi-sans);
    font-size: 0.78rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #a8c9a0;
    margin-bottom: 12px;
  }
  .fi-research-title {
    font-family: var(--fi-serif);
    font-size: 1.5rem;
    font-weight: 700;
    color: #f0ede6;
    margin: 0 0 20px;
    line-height: 1.25;
  }
  .fi-research-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-top: 20px;
  }
  .fi-research-cell {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 16px 18px;
  }
  .fi-research-cell-label {
    font-family: var(--fi-sans);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a8c9a0;
    margin-bottom: 6px;
  }
  .fi-research-cell-val {
    font-family: var(--fi-sans);
    font-size: 0.95rem;
    color: rgba(240,237,230,0.85);
    line-height: 1.55;
  }
  .fi-research-method {
    display: flex;
    gap: 10px;
    margin-top: 16px;
    flex-wrap: wrap;
  }
  .fi-method-pill {
    font-family: var(--fi-sans);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 999px;
    background: rgba(168,201,160,0.15);
    color: #a8c9a0;
    border: 1px solid rgba(168,201,160,0.25);
  }

  /* ══ CONCLUSION ══ */
  .fi-conclusion {
    border: 1px solid var(--fi-border);
    border-left: 4px solid var(--fi-moss);
    border-radius: 0 12px 12px 0;
    padding: 28px 32px;
    margin-top: 8px;
    font-size: 1.0rem;
    line-height: 1.8;
  }
  .fi-conclusion-label {
    font-family: var(--fi-sans);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--fi-moss);
    margin-bottom: 12px;
  }
  .fi-conclusion-quote {
    font-family: var(--fi-serif);
    font-size: 1.0rem;
    font-weight: 700;
    font-style: italic;
    line-height: 1.45;
    margin-bottom: 16px;
    color: var(--fi-moss);
  }

  /* ══ RESPONSIVE ══ */
  @media (max-width: 768px) {
    .fi-hero { padding: 36px 24px 32px; }
    .fi-hero h1 { font-size: 2.1rem; }
    .fi-stats-row { grid-template-columns: 1fr; }
    .fi-db-grid { grid-template-columns: 1fr; }
    .fi-theory-card { grid-template-columns: 1fr; gap: 12px 0; }
    .fi-brand-cases { grid-template-columns: 1fr; }
    .fi-research-grid { grid-template-columns: 1fr; }
    .fi-rec-row { grid-template-columns: 1fr; }
    .fi-rec-num { font-size: 1.2rem; }
  }
</style>

<div class="fi-body">

  <!-- ══ HERO ══ -->
  <div class="fi-hero">
    <div class="fi-hero-tag"> Social Psychology · Consumer Insight</div>
    <h1>The Psychology of <em>Near-Expired</em> Food</h1>
    <p class="fi-hero-sub">
      A consumer behaviour literature review examining why shoppers hesitate at the discount shelf — and how retailers can change that.
    </p>
    <div class="fi-hero-meta">
      <span class="fi-meta-pill">Desk Research · Literature Review</span>
      <span class="fi-meta-pill">Social Psychology · NCKU 2024</span>
      <span class="fi-meta-pill">TPB · ELM · Cognitive Dissonance</span>
      <span class="fi-meta-pill">ESG · SDG 12.3</span>
    </div>
  </div>

  <!-- ══ SECTION 01: CONTEXT ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">01</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-moss);">The Problem</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-stats-row">
    <div class="fi-stat-cell">
      <div><span class="fi-stat-num">8</span><span class="fi-stat-unit">–10%</span></div>
      <div class="fi-stat-label">of global human-caused greenhouse gas emissions come from food loss & waste</div>
      <div class="fi-stat-source">State of Climate Action, WRI 2023</div>
    </div>
    <div class="fi-stat-cell">
      <div><span class="fi-stat-num">170</span><span class="fi-stat-unit">kg</span></div>
      <div class="fi-stat-label">of food wasted per person per year in Taiwan — 60% from the consumer end</div>
      <div class="fi-stat-source">Asia-Pacific Food Loss Database, 2011</div>
    </div>
    <div class="fi-stat-cell">
      <div><span class="fi-stat-num">250</span><span class="fi-stat-unit">tonnes</span></div>
      <div class="fi-stat-label">of food waste reduced monthly by FamilyMart Taiwan after launching near-expiry discounts</div>
      <div class="fi-stat-source">翻轉教育, 2021</div>
    </div>
  </div>

  <div class="fi-context">
    Food waste is not only an environmental issue — it is a market failure. Retailers produce surplus that cannot be sold at full price, and consumers walk past discounted near-expired products out of hesitation. <strong>The gap between these two realities is a psychological one.</strong> This study uses social psychology frameworks to map the consumer's decision-making process at the discount shelf, and translates those findings into actionable strategy for the retail sector.
  </div>

  <!-- ══ SECTION 02: CORE INSIGHT ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">02</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-moss);">Core Insight</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-overview">
    <div class="fi-overview-label">// The Psychological Tug-of-War</div>
    <p>
      Every consumer standing in front of a near-expiry shelf is running two simultaneous calculations: <strong>"Is this safe?"</strong> and <strong>"Is this worth it?"</strong> The discount that retailers use to solve their inventory problem can simultaneously trigger both reassurance <em>and</em> suspicion. Understanding which psychological levers tip the scales — toward purchase or avoidance — is the central challenge for any retailer building a food waste reduction strategy.
    </p>
  </div>

  <!-- Drivers vs Barriers -->
  <div class="fi-db-grid">

    <div class="fi-db-col drivers">
      <div class="fi-db-header">
        <span class="fi-db-icon">✅</span>
        <div>
          <div class="fi-db-title">Purchase Drivers</div>
          <div style="font-size:0.75rem; opacity:0.6; margin-top:2px;">What pulls consumers toward buying</div>
        </div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Price Sensitivity & Anchoring</strong>When discount percentages are fixed and visible (e.g. 30% off), consumers compare against the original price and experience a "bargain" gain — increasing purchase probability.</div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Green Identity & Moral Licence</strong>Framing the purchase as an environmental act ("save food, save the planet") reframes "bargain-hunting" into a socially admirable behaviour, resolving internal conflict.</div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Scarcity & Time Pressure</strong>Near-expiry windows create a natural urgency cue. Consumers who perceive food as scarce resources are more likely to act before the opportunity disappears.</div>
      </div>
    </div>

    <div class="fi-db-col barriers">
      <div class="fi-db-header">
        <span class="fi-db-icon">🛑</span>
        <div>
          <div class="fi-db-title">Purchase Barriers</div>
          <div style="font-size:0.75rem; opacity:0.6; margin-top:2px;">What pushes consumers away</div>
        </div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Quality Devaluation Signal</strong>Heavy discounts act as a peripheral cue triggering the thought "something must be wrong with this" — regardless of actual quality. The deeper the discount, the stronger this effect.</div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Social Stigma Pressure</strong>Consumers fear being perceived as unable to afford full-price goods, or as taking health risks. This subjective norm suppresses purchase intent even when the individual is personally willing.</div>
      </div>
      <div class="fi-db-item">
        <div class="fi-db-dot"></div>
        <div><strong>Expiry Date Misreading</strong>Most consumers conflate "best before" with "unsafe after" — treating the label as a hard cutoff rather than a quality guideline. Proximity to the date signals risk, not opportunity.</div>
      </div>
    </div>

  </div>

  <!-- ══ SECTION 03: THEORY FRAMEWORKS ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">03</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-moss);">Theoretical Frameworks</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-theory-stack">

    <div class="fi-theory-card">
      <div class="fi-theory-left">
        <div class="fi-theory-abbr">TPB</div>
        <div class="fi-theory-name">Theory of Planned Behavior<br><span style="opacity:0.5;">Ajzen, 1991</span></div>
        <span class="fi-theory-tag">Attitude · Norms · Control</span>
      </div>
      <div class="fi-theory-right">
        <div class="fi-theory-mechanism">Psychological Mechanism</div>
        <div class="fi-theory-explain">
          Purchase intention is jointly determined by three forces: the consumer's personal <em>attitude</em> toward the product, the <em>subjective norms</em> (what others think), and their <em>perceived behavioural control</em> (confidence in making the decision). For near-expired food, all three can simultaneously work against purchase.
        </div>
        <div class="fi-theory-market">
          <span class="market-label">Market Implication</span>
          When a consumer believes peers would judge them for buying discounted food (negative subjective norm), their purchase intent drops — even if they personally find the product acceptable. Retailers must address the <em>social perception</em>, not just the price.
        </div>
      </div>
    </div>

    <div class="fi-theory-card">
      <div class="fi-theory-left">
        <div class="fi-theory-abbr">ELM</div>
        <div class="fi-theory-name">Elaboration Likelihood Model<br><span style="opacity:0.5;">Petty & Cacioppo, 1986</span></div>
        <span class="fi-theory-tag">Central · Peripheral Routes</span>
      </div>
      <div class="fi-theory-right">
        <div class="fi-theory-mechanism">Psychological Mechanism</div>
        <div class="fi-theory-explain">
          Consumers processing information under low involvement take the <em>peripheral route</em> — relying on simple cues rather than careful analysis. A large discount label becomes one such peripheral cue: instead of evaluating the product's actual quality, the consumer shortcuts to "cheap = inferior."
        </div>
        <div class="fi-theory-market">
          <span class="market-label">Market Implication</span>
          Packaging and shelf design must actively counteract the peripheral cue effect. Displaying original price clearly, using quality assurance language, and reducing visual "clearance" framing can shift consumers toward the central route — where they actually evaluate the product.
        </div>
      </div>
    </div>

    <div class="fi-theory-card">
      <div class="fi-theory-left">
        <div class="fi-theory-abbr">CDT</div>
        <div class="fi-theory-name">Cognitive Dissonance Theory<br><span style="opacity:0.5;">Festinger, 1957</span></div>
        <span class="fi-theory-tag">Belief · Behaviour Conflict</span>
      </div>
      <div class="fi-theory-right">
        <div class="fi-theory-mechanism">Psychological Mechanism</div>
        <div class="fi-theory-explain">
          When a consumer who values environmental responsibility hesitates to buy near-expired food, they experience cognitive dissonance — their environmental values clash with their food safety anxiety. To resolve this tension, they either change their belief ("maybe it's fine") or their behaviour (walk away).
        </div>
        <div class="fi-theory-market">
          <span class="market-label">Market Implication</span>
          Retail messaging that explicitly frames the purchase as an <em>environmental act</em> gives consumers a ready-made justification to resolve their dissonance in favour of buying. "Saving food" becomes a moral achievement, not a compromise.
        </div>
      </div>
    </div>

  </div>

  <!-- ══ SECTION 04: BRAND CASES ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">04</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-amber);">Brand Cases in Taiwan</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-brand-box">
    <div class="fi-brand-label">Retail Case Study · Taiwan Convenience Store Chains</div>
    <div class="fi-brand-title">How Taiwan's major chains operationalised food waste reduction</div>

    <div class="fi-brand-cases">
      <div class="fi-brand-case">
        <div class="fi-brand-case-name">FamilyMart 全家</div>
        <div class="fi-brand-case-title">友善食光 · Friendly Food Hours</div>
        <div class="fi-brand-case-desc">Launched May 2019. Fresh food within 7 hours of expiry automatically discounted. Applied across ~4,000 stores nationwide. Leverages CDT: positions buying as an act of environmental responsibility.</div>
      </div>
      <div class="fi-brand-case">
        <div class="fi-brand-case-name">7-Eleven 統一</div>
        <div class="fi-brand-case-title">i珍食 · i Cherish Food</div>
        <div class="fi-brand-case-desc">Fixed-ratio discount on near-expiry fresh items. Clear price comparison labelling (original vs. discount) activates anchoring effect and reduces ELM peripheral-cue suspicion by emphasising value, not distress.</div>
      </div>
      <div class="fi-brand-case">
        <div class="fi-brand-case-name">Hi-Life 萊爾富</div>
        <div class="fi-brand-case-title">惜食食堂 · Cherish Food Canteen</div>
        <div class="fi-brand-case-desc">Combines discount with sustainability narrative in naming — "canteen" evokes community sharing rather than clearance, directly addressing the social stigma barrier identified in TPB.</div>
      </div>
      <div class="fi-brand-case">
        <div class="fi-brand-case-name">OK Mart</div>
        <div class="fi-brand-case-title">Near-Expiry Discount Programme</div>
        <div class="fi-brand-case-desc">Part of the industry-wide response to SDG 12.3. Standardised discount timing and percentage create consumer habit formation — repeated exposure reduces perceived risk over time.</div>
      </div>
    </div>

    <div class="fi-brand-impact">
      <strong>Measured Outcome:</strong> FamilyMart's programme alone reduces approximately <strong>250 tonnes of food waste per month</strong> — equivalent to 2.27 million rice ball-sized portions. This demonstrates that psychological reframing + price incentive, when applied at scale, produces measurable behavioural change without requiring a change in fundamental consumer values.
    </div>
  </div>

  <!-- ══ SECTION 05: STRATEGY RECS ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">05</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-moss);">Strategic Recommendations</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-recs-grid">
    <div class="fi-rec-row">
      <div class="fi-rec-num">01</div>
      <div class="fi-rec-content">
        <div class="fi-rec-title">Reframe the Narrative — from "Clearance" to "Mission"</div>
        <div class="fi-rec-theory">Applies: CDT + TPB (Subjective Norm)</div>
        <div class="fi-rec-desc">Replace "discounted" language with purpose-driven framing ("Rescue this meal", "Climate-friendly choice"). This shifts the social meaning of purchase from "budget constraint" to "environmental agency", resolving cognitive dissonance and improving perceived social standing.</div>
      </div>
    </div>
    <div class="fi-rec-row">
      <div class="fi-rec-num">02</div>
      <div class="fi-rec-content">
        <div class="fi-rec-title">Anchor the Price Visually — Always Show the Original</div>
        <div class="fi-rec-theory">Applies: ELM (Peripheral Cue Disruption) + Price Anchoring</div>
        <div class="fi-rec-desc">Display original price prominently alongside the discount price. Add quality assurance text ("Quality unchanged · Best before [date]"). This activates the central route of ELM and counters the automatic "cheap = bad" heuristic triggered by large discounts.</div>
      </div>
    </div>
    <div class="fi-rec-row">
      <div class="fi-rec-num">03</div>
      <div class="fi-rec-content">
        <div class="fi-rec-title">Educate on Expiry Date Literacy at Point of Purchase</div>
        <div class="fi-rec-theory">Applies: Health Risk Misperception (Newsome et al., 2014)</div>
        <div class="fi-rec-desc">Brief shelf-level messaging distinguishing "best before" (quality peak) from "use by" (safety limit) can significantly reduce health anxiety as a purchase barrier. App-based explanations at checkout can reinforce this habit formation over repeated visits.</div>
      </div>
    </div>
    <div class="fi-rec-row">
      <div class="fi-rec-num">04</div>
      <div class="fi-rec-content">
        <div class="fi-rec-title">Standardise Discount Timing to Build Predictable Consumer Habits</div>
        <div class="fi-rec-theory">Applies: Behavioural Conditioning + Price Sensitivity (Liu, 2018)</div>
        <div class="fi-rec-desc">Fixed discount windows (e.g. last 7 hours before expiry, always at the same percentage) allow price-sensitive consumers to plan around them. Predictability reduces perceived risk and builds routine — the most durable form of behavioural change.</div>
      </div>
    </div>
  </div>

  <!-- ══ SECTION 06: PROPOSED RESEARCH ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <span class="fi-band-num">06</span>
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-sage);">Proposed Primary Research</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-research-block">
    <div class="fi-research-label">// From Literature Review → Research Design</div>
    <div class="fi-research-title">What this desk research cannot answer — and how I would answer it next</div>

    <p style="font-size:1.0rem; color:rgba(240,237,230,0.75); line-height:1.7; margin:0 0 20px;">
      This literature review surfaces the psychological mechanisms behind near-expired food purchase behaviour — but it cannot tell us <em>which mechanism dominates</em> for specific consumer segments in Taiwan's convenience store context. A primary research study is needed to quantify decision weights and identify the highest-leverage intervention points.
    </p>

    <div class="fi-research-grid">
      <div class="fi-research-cell">
        <div class="fi-research-cell-label">Target Segments</div>
        <div class="fi-research-cell-val">University students & working adults who rely on convenience stores for weekday meals (highest near-expiry exposure frequency)</div>
      </div>
      <div class="fi-research-cell">
        <div class="fi-research-cell-label">Key Research Questions</div>
        <div class="fi-research-cell-val">At peak discount hours (e.g. after 8pm), what weight do consumers assign to: price vs. remaining shelf life vs. flavour preference vs. brand?</div>
      </div>
      <div class="fi-research-cell">
        <div class="fi-research-cell-label">Strategic Output</div>
        <div class="fi-research-cell-val">Help retailers predict optimal discount timing, percentage thresholds, and messaging copy that maximises sell-through without eroding brand quality perception</div>
      </div>
    </div>

    <div class="fi-research-method">
      <span class="fi-method-pill">Quantitative Survey (n ≥ 100)</span>
      <span class="fi-method-pill">Qualitative In-depth Interviews</span>
      <span class="fi-method-pill">Mixed-Methods Design</span>
      <span class="fi-method-pill">Conjoint Analysis</span>
      <span class="fi-method-pill">Segment Profiling</span>
    </div>
  </div>

  <!-- ══ CONCLUSION ══ -->
  <div class="fi-band" style="margin-top:32px;">
    <div class="fi-band-line"></div>
    <span class="fi-band-label" style="color:var(--fi-moss);">Takeaway</span>
    <div class="fi-band-line"></div>
  </div>

  <div class="fi-conclusion">
    <div class="fi-conclusion-label">// So What</div>
    <div class="fi-conclusion-quote">"The problem is not that consumers don't care about food waste. The problem is that retailers have been solving it with price alone — and price is only one of three psychological levers."</div>
    This study shows that attitude, social norm, and perceived behavioural control (TPB) must all be addressed simultaneously for near-expiry programmes to reach their potential. Taiwan's convenience store chains have made strong progress — but the next frontier is <strong>personalisation</strong>: understanding which consumer segments respond to economic framing vs. environmental framing vs. social identity framing, and designing communications accordingly. That is the question a well-designed primary study can answer.
  </div>

</div>