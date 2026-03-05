---
layout: page
title: Portfolio
icon: fas fa-palette
order: 6
---

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

  .page-title, h1.post-title { display: none; }

  :root {
    --bg-warm:   #F3F1EB;
    --bg-dark:   #1C1C1C;
    --card-bg:   #FFFDF8;   /* FIX 1: was #FFFFFF, now matches edu/honours warm white */
    --card-dark: #2A2A2A;
    --text:      #1A1A1A;
    --muted:     #595959;
    --muted-lt:  #A0A0A0;
    --line:      #D8D8D8;
    --gold:      #B8935A;
    --ff-serif:  'Playfair Display', Georgia, serif;
    --ff-sans:   'DM Sans', system-ui, sans-serif;
    --ease:      cubic-bezier(0.22, 1, 0.36, 1);

    --xp-surface:   #EBE9E6;
    --xp-highlight: #D1E0E0;
    --xp-tag-bg:    rgba(255,255,255,0.5);
    --xp-tag-hover: rgba(255,255,255,0.75);
    --xp-tag-text:  #1A1A1A;
    --xp-accent:    #3F403F;
    --r-pill: 60px;
    --r-card: 20px;
  }

  /* ── Hero ── */
  .portfolio-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 0 2rem;
    flex-wrap: wrap;
  }
  .portfolio-hero-left { flex: 1; min-width: 280px; }

  .portfolio-roles {
    font-family: var(--ff-sans);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }
  .portfolio-roles span { margin: 0 6px; opacity: 0.6; }

  .portfolio-greeting {
    font-family: var(--ff-serif);
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.15;
    color: var(--text);
    margin: 0 0 0.2rem 0;
  }
  .portfolio-name {
    font-family: var(--ff-serif);
    font-size: 3rem;
    font-weight: 400;
    font-style: italic;
    color: var(--gold);
    margin: 0 0 1.5rem 0;
    line-height: 1.1;
  }
  .portfolio-bio {
    font-family: var(--ff-sans);
    font-size: 1rem;
    line-height: 1.75;
    color: var(--muted);
    max-width: 480px;
    margin-bottom: 2rem;
  }
  .portfolio-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }

  .btn-primary {
    font-family: var(--ff-sans);
    background: var(--text);
    color: #fff !important;
    padding: 0.7rem 1.6rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none !important;
    transition: background 0.2s var(--ease);
  }
  .btn-primary:hover { background: #4a3c28; }

  .btn-secondary {
    font-family: var(--ff-sans);
    background: transparent;
    color: var(--text) !important;
    padding: 0.7rem 1.6rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 2px solid var(--text);
    text-decoration: none !important;
    transition: all 0.2s var(--ease);
  }
  .btn-secondary:hover { background: var(--text); color: #fff !important; }

  .portfolio-hero-right { position: relative; flex-shrink: 0; }

  .portfolio-photo-card {
    width: 260px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
  .portfolio-photo-card img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
  }

  .portfolio-status-badge {
    background: #fff;
    border-radius: 12px;
    padding: 0.6rem 1rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--ff-sans);
    font-size: 0.82rem;
  }
  .status-dot { width: 8px; height: 8px; background: #4caf50; border-radius: 50%; flex-shrink: 0; }
  .status-text strong { display: block; color: var(--text); font-size: 0.85rem; }
  .status-text span   { color: var(--muted); font-size: 0.78rem; }

  /* ── Divider & Labels ── */
  .portfolio-divider {
    border: none;
    border-top: 1px solid #e8e0d4;
    margin: 2.5rem 0;
  }

  .cv-section-label {
    font-family: var(--ff-sans);
    font-size: .75rem;
    text-transform: uppercase;
    letter-spacing: .14em;
    font-weight: 700;
    color: var(--muted);
    text-align: center;
    display: block;
    margin: 3rem 0 1.2rem;
  }

  /* ── XP Accordion ── */
  .xp-block {
    background: var(--xp-surface);
    border-radius: var(--r-card);
    padding: 10px;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08);
    margin-bottom: 2.5rem;
    overflow: hidden;
  }
  .xp-item {
    border-radius: 14px;
    background: transparent;
    transition: background-color 0.4s var(--ease);
    margin-bottom: 4px;
    cursor: pointer;
    overflow: hidden;
    animation: xpFadeUp 0.55s var(--ease) backwards;
  }
  .xp-item:last-child { margin-bottom: 0; }
  .xp-item:nth-child(1) { animation-delay: .08s; }
  .xp-item:nth-child(2) { animation-delay: .16s; }
  .xp-item:nth-child(3) { animation-delay: .24s; }
  .xp-item:nth-child(4) { animation-delay: .32s; }
  .xp-item.active { background: var(--xp-highlight); }

  .xp-header {
    padding: 18px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  .xp-info { display: flex; flex-direction: column; gap: 3px; }
  .xp-role { font-family: var(--ff-sans); font-size: .97rem; font-weight: 700; color: var(--text); letter-spacing: .01em; }
  .xp-org  { font-family: var(--ff-serif); font-size: .9rem; font-style: italic; color: var(--muted); }

  .xp-btn {
    width: 30px; height: 30px;
    border-radius: 50%;
    background: rgba(0,0,0,0.05);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    transition: all 0.35s var(--ease);
  }
  .xp-item.active .xp-btn { background: var(--xp-accent); transform: rotate(90deg); }
  .xp-btn svg { width: 11px; height: 11px; stroke: var(--text); stroke-width: 2.5; fill: none; transition: stroke 0.3s; }
  .xp-item.active .xp-btn svg { stroke: #fff; }

  .xp-details {
    max-height: 0; opacity: 0; overflow: hidden;
    transition: max-height 0.55s var(--ease), opacity 0.4s var(--ease);
    padding: 0 22px;
  }
  .xp-item.active .xp-details { max-height: 800px; opacity: 1; padding-bottom: 22px; }

  .xp-meta {
    display: flex; align-items: center; gap: 12px;
    font-size: .72rem; text-transform: uppercase; letter-spacing: .08em; font-weight: 700;
    color: var(--muted);
    border-top: 1px solid rgba(0,0,0,0.06);
    padding-top: 14px; margin-bottom: 12px;
  }
  .xp-meta-sep { opacity: .35; }
  .xp-desc { font-family: var(--ff-sans); font-size: .88rem; line-height: 1.75; color: var(--muted); margin-bottom: 16px; }
  .xp-desc strong { color: var(--text); font-weight: 700; }
  .xp-desc em     { font-style: italic; }

  .xp-tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .xp-tag {
    font-family: var(--ff-sans); font-size: .72rem; font-weight: 600;
    padding: 5px 13px; border-radius: 999px;
    background: var(--xp-tag-bg); color: var(--xp-tag-text);
    transition: background .25s;
  }
  .xp-item.active .xp-tag { background: var(--xp-tag-hover); }

  @keyframes xpFadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Education ── */
  .edu-section { margin: 3rem 0 2.5rem; }
  .edu-section .cv-section-label { margin-bottom: 0.5rem; }
  .edu-section-title {
    font-family: var(--ff-serif); font-size: 1.9rem; font-weight: 400;
    color: var(--text); text-align: center; margin-bottom: 2rem; line-height: 1.2;
  }
  .edu-stack { display: flex; flex-direction: column; gap: 16px; }

  .edu-card-light {
    background: #FFFDF8;
    border: 1px solid #EDE8DF;
    border-left: 4px solid var(--gold);
    border-radius: 16px;
    padding: 28px 32px;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 0 32px;
    align-items: start;
    transition: box-shadow 0.3s var(--ease), transform 0.3s var(--ease);
    animation: xpFadeUp 0.55s var(--ease) backwards;
  }
  .edu-card-light:nth-child(1) { animation-delay: .08s; }
  .edu-card-light:nth-child(2) { animation-delay: .18s; }
  .edu-card-light:hover { box-shadow: 0 8px 28px rgba(184,147,90,0.12); transform: translateY(-3px); }

  .edu-left { display: flex; flex-direction: column; gap: 6px; padding-top: 4px; }
  .edu-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: var(--ff-sans); font-size: .7rem; font-weight: 700;
    letter-spacing: .1em; text-transform: uppercase;
    color: var(--gold); background: rgba(184,147,90,0.1);
    padding: 4px 10px; border-radius: 999px; width: fit-content; margin-bottom: 4px;
  }
  .edu-date { font-family: var(--ff-sans); font-size: .78rem; font-weight: 700; letter-spacing: .06em; color: var(--muted); display: block; }
  .edu-location { font-family: var(--ff-sans); font-size: .78rem; color: var(--muted-lt); display: flex; align-items: center; gap: 4px; }

  .edu-right { display: flex; flex-direction: column; gap: 6px; }
  .edu-degree-light { font-family: var(--ff-serif); font-size: 1.35rem; font-weight: 600; color: var(--text); line-height: 1.25; margin: 0; }
  .edu-school-light  { font-family: var(--ff-sans); font-size: .88rem; font-weight: 500; color: var(--muted); display: block; }
  .edu-divider-line  { border: none; border-top: 1px solid #EDE8DF; margin: 10px 0; }
  .edu-detail-light  { font-family: var(--ff-sans); font-size: .85rem; color: var(--muted); line-height: 1.75; }
  .edu-detail-light strong { color: var(--text); font-weight: 700; }

  .edu-modules { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .edu-module-tag {
    font-family: var(--ff-sans); font-size: .7rem; font-weight: 600;
    padding: 4px 11px; border-radius: 999px;
    background: rgba(184,147,90,0.10); color: #7a5c2e;
    border: 1px solid rgba(184,147,90,0.2); transition: background .2s;
  }
  .edu-card-light:hover .edu-module-tag { background: rgba(184,147,90,0.18); }

  /* ── Honours ── */
  .honours-block {
    background: #FFFDF8;
    border: 1px solid #EDE8DF;
    border-radius: var(--r-card);
    padding: 8px 12px;
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.06);
    /* FIX 7: removed margin-bottom, portfolio-divider below provides spacing */
  }
  .honours-row {
    display: flex; align-items: center; justify-content: space-between;
    gap: 16px; padding: 14px 16px; border-radius: 10px;
    transition: background 0.25s var(--ease);
    animation: xpFadeUp 0.5s var(--ease) backwards;
  }
  .honours-row:nth-child(1) { animation-delay: .06s; }
  .honours-row:nth-child(2) { animation-delay: .12s; }
  .honours-row:nth-child(3) { animation-delay: .18s; }
  .honours-row:nth-child(4) { animation-delay: .24s; }
  .honours-row:nth-child(5) { animation-delay: .30s; }
  .honours-row:hover { background: rgba(184,147,90,0.07); }
  .honours-row:not(:last-child) { border-bottom: 1px solid #EDE8DF; }

  .honours-left { display: flex; align-items: center; gap: 14px; flex: 1; min-width: 0; }
  .honours-dot  { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); flex-shrink: 0; box-shadow: 0 0 0 3px rgba(184,147,90,0.15); }
  .honours-name { font-family: var(--ff-sans); font-size: .9rem; font-weight: 600; color: var(--text); line-height: 1.4; }
  .honours-org  { font-family: var(--ff-serif); font-size: .8rem; font-style: italic; color: var(--muted); display: block; margin-top: 2px; }

  .honours-right  { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; flex-shrink: 0; }
  .honours-amount { font-family: var(--ff-sans); font-size: .82rem; font-weight: 700; color: var(--gold); white-space: nowrap; }
  .honours-year   { font-family: var(--ff-sans); font-size: .72rem; font-weight: 500; color: var(--muted-lt); white-space: nowrap; }
  .honours-badge  {
    font-family: var(--ff-sans); font-size: .65rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
    color: #7a5c2e; background: rgba(184,147,90,0.13); border: 1px solid rgba(184,147,90,0.25);
    padding: 2px 8px; border-radius: 999px; white-space: nowrap; margin-top: 2px;
  }

  /* ── Portfolio Grid ── */
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 20px;
  }
  .portfolio-card {
    position: relative;
    background: var(--card-bg);           /* now #FFFDF8 */
    border: 1px solid #EDE8DF;            /* FIX 1: consistent warm border */
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  .portfolio-card:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(184,147,90,0.1); } /* FIX 1: gold shadow */

  .card-link { text-decoration: none !important; color: inherit !important; }
  .card-link::after {
    content: "";
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 1;
  }

  .card-img-container { height: 200px; overflow: hidden; background-color: #f0ebe3; } /* FIX 5: warmer placeholder */
  .card-img-container img { width: 100%; height: 100%; object-fit: cover; display: block; }

  /* FIX 5: no-img-placeholder style */
  .no-img-placeholder {
    width: 100%; height: 100%;
    background: linear-gradient(135deg, #f0ebe3 0%, #e8dfd4 100%);
  }

  .card-content {
    padding: 20px; flex-grow: 1;
    display: flex; flex-direction: column;
  }

  /* FIX 3: explicit font-family for card text */
  .card-content h3 {
    font-family: var(--ff-serif);
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text);
    margin: 0 0 8px 0;
    line-height: 1.35;
  }
  .card-content p {
    font-family: var(--ff-sans);
    font-size: .85rem;
    color: var(--muted);
    line-height: 1.65;
    margin: 0 0 12px;
  }

  /* FIX 4: tags above title */
  .card-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-bottom: 8px;
  }
  .card-tag {
    font-family: var(--ff-sans);
    font-size: .68rem; font-weight: 700;
    letter-spacing: .09em; text-transform: uppercase;
    color: var(--gold); opacity: .85;
  }
  .card-tag:not(:last-child)::after { content: ' ·'; margin-left: 2px; }

  /* FIX 2: read-more uses gold, not Chirpy blue */
  .read-more {
    margin-top: auto;
    font-family: var(--ff-sans);
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--gold) !important;
    display: flex; align-items: center; gap: 6px;
  }
  .read-more i { font-size: .75rem; transition: transform 0.25s var(--ease); }
  .portfolio-card:hover .read-more i { transform: translateX(4px); }

  /* ── Responsive ── */
  @media (max-width: 640px) {
    .portfolio-greeting, .portfolio-name { font-size: 2.1rem; }
    .portfolio-hero { flex-direction: column-reverse; align-items: flex-start; }
    .portfolio-photo-card { width: 100%; }
    .portfolio-photo-card img { height: 220px; }
    .xp-header { padding: 16px 18px; }
    .xp-details { padding: 0 18px; }
    .xp-item.active .xp-details { padding-bottom: 18px; }

    /* FIX 6: edu cards go single-column on mobile */
    .edu-card-light {
      grid-template-columns: 1fr;
      padding: 20px;
      gap: 12px 0;
    }
    .edu-left { flex-direction: row; flex-wrap: wrap; align-items: center; gap: 8px; }

    @media (max-width: 480px) {
      .honours-row { flex-direction: column; align-items: flex-start; gap: 8px; }
      .honours-right { align-items: flex-start; flex-direction: row; gap: 10px; }
    }
  }
</style>


<div class="portfolio-hero">
  <div class="portfolio-hero-left">
    <div class="portfolio-roles">
      Psychology Graduate
      <span>·</span>
      Photographer
      <span>·</span>
      Visual Storyteller
    </div>
    <h1 class="portfolio-greeting">Hi, I'm</h1>
    <h1 class="portfolio-name">Angel.</h1>
    <p class="portfolio-bio">
      A psychology graduate from National Cheng Kung University (NCKU), Taiwan,
      with a passion for photography and visual storytelling. I enjoy capturing
      moments through travel and transforming ideas into meaningful visual experiences.
    </p>
    <div class="portfolio-buttons">
      <a href="/assets/cv/resume-wong-shing-hui.pdf" class="btn-primary">Download CV</a>
      <a href="mailto:angelwsh26@hotmail.com" class="btn-secondary">Get in touch</a>
    </div>
  </div>

  <div class="portfolio-hero-right">
    <div class="portfolio-photo-card">
      <img src="/assets/lib/DSC00850.JPG" alt="Angel">
    </div>
    <div class="portfolio-status-badge">
      <div class="status-dot"></div>
      <div class="status-text">
        <strong>Currently in Taiwan</strong>
        <span>NCKU · Psychology</span>
      </div>
    </div>
  </div>
</div>

<hr class="portfolio-divider">

<span class="cv-section-label">Work Experience</span>

<div class="xp-block">
  <div class="xp-item active" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Research Project Assistant</span>
        <span class="xp-org">Dept. of Nursing · NCKU Hospital</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>11.2021 — 08.2025</span><span class="xp-meta-sep">·</span><span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Monitored</strong> longitudinal behavioural and physiological data from <strong>108 ICU sepsis patients</strong> using wearable device <em>HEARThremo™</em>, conducting daily bedside observations to track skin surface temperature and vital signs for fever detection.<br><br>
        ● <strong>Applied</strong> time-series analysis to identify predictive trends in skin temperature elevation and clinical variables, supporting evidence-based decision-making in a real-world clinical setting.<br><br>
        ● <strong>Collaborated</strong> in multidisciplinary clinical research meetings, contributing to literature synthesis, structured data entry, and co-authoring formal research reports for an industry-academic collaboration project.<br><br>
        ● <strong>Demonstrated</strong> consistent use of R &amp; SPSS to perform advanced statistical analyses, identifying skin temperature and heart rate as significant predictors of fever onset across a <strong>2-year</strong> study period.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">R / SPSS</span>
        <span class="xp-tag">Clinical Research</span>
        <span class="xp-tag">Wearable Data</span>
        <span class="xp-tag">Longitudinal Study</span>
      </div>
    </div>
  </div>

  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Part-Time Barista</span>
        <span class="xp-org">海洋微風輕食咖啡館 · Confucius Temple District</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>06.2024 — 09.2024</span><span class="xp-meta-sep">·</span><span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Conducted</strong> individual preference assessments with customers to identify flavour profiles and recommend tailored coffee selections — applying active listening and needs-based profiling in a fast-paced, client-facing environment.<br><br>
        ● <strong>Delivered</strong> cross-cultural customer service to <strong>international visitors</strong> in English, Mandarin and Malay, demonstrating cultural sensitivity and adaptive communication across diverse client backgrounds.<br><br>
        ● <strong>Completed</strong> structured skills training <strong>3× per week</strong> in espresso technique, latte art, and single-origin pour-over — demonstrating consistency, reflective learning, and commitment to professional development.<br><br>
        ● <strong>Resolved</strong> customer concerns promptly and professionally, applying de-escalation and empathetic communication to maintain service satisfaction and a positive client experience.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Active Listening</span>
        <span class="xp-tag">Quick Learner</span>
        <span class="xp-tag">Cross-Cultural Communication</span>
      </div>
    </div>
  </div>

  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Periodicals Section Part-time</span>
        <span class="xp-org">NCKU Library</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>09.2022 — 12.2022</span><span class="xp-meta-sep">·</span><span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Managed</strong> high-volume archival workflows for B2F periodicals, ensuring <strong>100% accuracy</strong> in database maintenance and physical organisation to facilitate a seamless learning environment for university researchers.<br><br>
        ● <strong>Facilitated</strong> Nationwide Document Delivery Services (NDDS), coordinating inter-library logistics to meet diverse information needs with a <strong>95%+ user satisfaction rate</strong>.<br><br>
        ● <strong>Monitored</strong> and tracked electronic journal accessibility and subscription data, utilising systematic auditing to resolve technical discrepancies and ensure continuous resource availability.<br><br>
        ● <strong>Executed</strong> budget control and inventory evaluation for departmental subscriptions, demonstrating strong organisational skills and accountability in managing sensitive institutional resources.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Archival Management</span>
        <span class="xp-tag">Database Maintenance</span>
        <span class="xp-tag">Budget Control</span>
        <span class="xp-tag">NDDS Coordination</span>
      </div>
    </div>
  </div>

  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Finance &amp; Accounting Assistant</span>
        <span class="xp-org">SSF Sdn Bhd · Home Furnishing Retail</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>02.2020 — 03.2020</span>
        <span class="xp-meta-sep">·</span>
        <span>Malaysia</span>
        <span class="xp-meta-sep">·</span>
        <span style="color:var(--muted-lt); font-weight:400; text-transform:none; letter-spacing:0;">Contract ended due to COVID-19</span>
      </div>
      <p class="xp-desc">
        ● <strong>Maintained</strong> daily financial records including petty cash, inventory counts, staff commission calculations, and accounts reconciliation across multiple store branches.<br><br>
        ● <strong>Coordinated</strong> daily sales verification with <strong>4 store managers</strong> remotely during the COVID-19 period, demonstrating structured communication and reliability under time-sensitive conditions.<br><br>
        ● <strong>Adapted</strong> seamlessly to a full remote-working setup during the pandemic, independently managing data accuracy and reporting deadlines without direct supervision.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Attention to Detail</span>
        <span class="xp-tag">Data Accuracy</span>
        <span class="xp-tag">Remote Collaboration</span>
        <span class="xp-tag">Adaptability</span>
      </div>
    </div>
  </div>
</div>

<span class="cv-section-label">Teaching Experience</span>

<div class="xp-block">
  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Part-Time Tutor</span>
        <span class="xp-org">Self-Employed · Private One-to-One Setting</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>10.2022 — 12.2023</span><span class="xp-meta-sep">·</span><span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Delivered</strong> 90-min structured sessions weekly for a 4-year-old child, combining academic reinforcement (60 min) with sensorimotor play (30 min).<br><br>
        ● <strong>Established</strong> secure therapeutic rapport through child-led play and positive reinforcement, resulting in measurable improvements in voluntary verbal expression and task engagement within 3 months.<br><br>
        ● <strong>Designed</strong> individualised lesson plans targeting numeracy, literacy, and expressive language — achieving consistent homework completion and grade-level academic progression.<br><br>
        ● <strong>Facilitated</strong> 4+ sensorimotor activities per session (clay modelling, collage, colouring) to develop fine motor skills and hand-eye coordination aligned with early childhood developmental milestones.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Play-Based Learning</span>
        <span class="xp-tag">Attachment &amp; Rapport</span>
        <span class="xp-tag">Individualised Instruction</span>
        <span class="xp-tag">Early Childhood Development</span>
        <span class="xp-tag">Sensorimotor Activities</span>
      </div>
    </div>
  </div>
</div>


<div class="edu-section">
  <span class="cv-section-label">Education</span>
  <h2 class="edu-section-title">Academic Background</h2>
  <div class="edu-stack">

    <div class="edu-card-light">
      <div class="edu-left">
        <span class="edu-badge">✦ Degree</span>
        <span class="edu-date">02.2021 — 08.2025</span>
        <span class="edu-location">🇹🇼 Tainan, Taiwan</span>
      </div>
      <div class="edu-right">
        <h3 class="edu-degree-light">B.Sc. in Psychology</h3>
        <span class="edu-school-light">National Cheng Kung University (NCKU)</span>
        <hr class="edu-divider-line">
        <p class="edu-detail-light">
          <strong>cGPA</strong> 4.17 / 4.3 <br>
          Focused on Clinical &amp; Biological Neuroscience Subfields <br>
          Learned Spanish (A2) &amp; Thai (A2)
        </p>
        <div class="edu-modules">
          <span class="edu-module-tag">Personality Psychology</span>
          <span class="edu-module-tag">Cognitive Psychology</span>
          <span class="edu-module-tag">Abnormal Psychology</span>
          <span class="edu-module-tag">Research Methods</span>
          <span class="edu-module-tag">Data Analysis</span>
        </div>
      </div>
    </div>

    <div class="edu-card-light">
      <div class="edu-left">
        <span class="edu-badge">❖ Exchange</span>
        <span class="edu-date">09.2024 — 03.2025</span>
        <span class="edu-location">🇵🇱 Kraków, Poland</span>
      </div>
      <div class="edu-right">
        <h3 class="edu-degree-light">Exchange Student</h3>
        <span class="edu-school-light">Jagiellonian University — Faculty of Philosophy, Institute of Psychology</span>
        <hr class="edu-divider-line">
        <p class="edu-detail-light">
          <strong>MoE Transnational Study &amp; Research Scholarship</strong> — $2,400 <br>
          Focused on Social &amp; Human Neuroscience Subfields (ECTS 13)
        </p>
        <div class="edu-modules">
          <span class="edu-module-tag">Social Advertising</span>
          <span class="edu-module-tag">Neuroscience of the Self</span>
          <span class="edu-module-tag">Computer Games &amp; Social Media</span>
          <span class="edu-module-tag">Human Neuropsychology</span>
        </div>
      </div>
    </div>

  </div>
</div>


<span class="cv-section-label">Leadership</span>

<div class="xp-block">
  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Design Officer</span>
        <span class="xp-org">NCKU Malaysia Student Association</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>2021 — 2022</span><span class="xp-meta-sep">·</span><span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Co-led</strong> the SUKMAS Malaysia Games delegation, coordinating travel, insurance and competition logistics for <strong>100+ members</strong>.<br><br>
        ● <strong>Assisted</strong> in hosting ambassadors at the SATU Presidents' Forum on Sustainable Alliances &amp; Strategic Partnerships.<br><br>
        ● <strong>Managed</strong> visual branding and social media; designed posters and event graphics using Procreate &amp; Photoshop.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Event Management</span>
        <span class="xp-tag">Procreate</span>
        <span class="xp-tag">Photoshop</span>
        <span class="xp-tag">Social Media</span>
      </div>
    </div>
  </div>
</div>

<span class="cv-section-label">Volunteer Experience</span>

<div class="xp-block">
  <div class="xp-item" onclick="toggleXp(this)">
    <div class="xp-header">
      <div class="xp-info">
        <span class="xp-role">Service Learning Volunteer</span>
        <span class="xp-org">NCKU Kindergarten Program</span>
      </div>
      <div class="xp-btn"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </div>
    <div class="xp-details">
      <div class="xp-meta">
        <span>09.2022 — 11.2022</span>
        <span class="xp-meta-sep">·</span>
        <span>Tainan, Taiwan</span>
      </div>
      <p class="xp-desc">
        ● <strong>Observed</strong> and documented behavioural patterns across a group of
        <strong>15 kindergarten-aged children</strong>, identifying signs of dysregulation,
        social withdrawal, and attention difficulties to support early informal screening.<br><br>
        ● <strong>Engaged</strong> children with diverse developmental needs through
        play-based interaction and positive reinforcement techniques.<br><br>
        ● <strong>Collaborated</strong> with supervising teachers to flag individual
        developmental concerns and adapt activities to accommodate varied
        learning and sensory needs.
      </p>
      <div class="xp-tags">
        <span class="xp-tag">Behavioural Observation</span>
        <span class="xp-tag">Positive Reinforcement</span>
        <span class="xp-tag">Early Childhood Development</span>
        <span class="xp-tag">Play-Based Engagement</span>
        <span class="xp-tag">Self-Regulation Support</span>
      </div>
    </div>
  </div>
</div>


<span class="cv-section-label">Honours &amp; Awards</span>

<div class="honours-block">
  <div class="honours-row">
    <div class="honours-left">
      <div class="honours-dot"></div>
      <div>
        <span class="honours-name">OCAC Distinguished Overseas Chinese Student Scholarship</span>
        <span class="honours-org">Overseas Community Affairs Council</span>
      </div>
    </div>
    <div class="honours-right">
      <span class="honours-amount">NT$50,000</span>
      <span class="honours-year">2023</span>
      <span class="honours-badge">Top 5%</span>
    </div>
  </div>

  <div class="honours-row">
    <div class="honours-left">
      <div class="honours-dot"></div>
      <div>
        <span class="honours-name">NCKU Distinguished Overseas Chinese Student Scholarship</span>
        <span class="honours-org">National Cheng Kung University</span>
      </div>
    </div>
    <div class="honours-right">
      <span class="honours-amount">NT$10,000</span>
      <span class="honours-year">Apr 2022 &amp; Apr 2024</span>
      <span class="honours-badge">Top 5%</span>
    </div>
  </div>

  <div class="honours-row">
    <div class="honours-left">
      <div class="honours-dot"></div>
      <div>
        <span class="honours-name">Dr. Wei-Nong Wang Memorial Scholarship</span>
        <span class="honours-org">National Cheng Kung University</span>
      </div>
    </div>
    <div class="honours-right">
      <span class="honours-amount">NT$10,000</span>
      <span class="honours-year">Spring 2023 &amp; 2024</span>
    </div>
  </div>

  <div class="honours-row">
    <div class="honours-left">
      <div class="honours-dot"></div>
      <div>
        <span class="honours-name">Outstanding Student Award</span>
        <span class="honours-org">National Cheng Kung University</span>
      </div>
    </div>
    <div class="honours-right">
      <span class="honours-year">Spring 2022 &amp; 2023</span>
      <span class="honours-badge">Top 5%</span>
    </div>
  </div>

  <div class="honours-row">
    <div class="honours-left">
      <div class="honours-dot"></div>
      <div>
        <span class="honours-name">Yayasan Lee Foundation Study Grant</span>
        <span class="honours-org">Yayasan Lee Foundation</span>
      </div>
    </div>
    <div class="honours-right">
      <span class="honours-amount">$700</span>
      <span class="honours-year">2022 &amp; 2024</span>
    </div>
  </div>
</div>


<!-- FIX 4: added cv-section-label for Projects, consistent with all other sections -->
<hr class="portfolio-divider">

<span class="cv-section-label">Selected Works</span>

<p style="font-family: var(--ff-sans); color: var(--muted); font-size: .95rem; line-height: 1.75; margin-bottom: 1.5rem; text-align: center;">
  Explore a curated selection of my recent projects — each card reveals the inspiration, process, and story behind the work.
</p>

<div class="portfolio-grid">
  {% for post in site.categories.Portfolio %}
    <div class="portfolio-card">
      <div class="card-img-container">
        {% if post.image.path %}
          <img src="{{ post.image.path }}" alt="{{ post.title }}">
        {% else %}
          <div class="no-img-placeholder"></div>
        {% endif %}
      </div>
      <div class="card-content">
        {% if post.tags %}
        <div class="card-tags">
          {% for tag in post.tags limit:2 %}
            <span class="card-tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        <h3>
          <a href="{{ post.url | relative_url }}" class="card-link">{{ post.title }}</a>
        </h3>
        <p>{{ post.content | strip_html | truncate: 80 }}</p>
        <span class="read-more">View Project <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  {% endfor %}
</div>


<script>
  function toggleXp(el) {
    const block = el.closest('.xp-block');
    block.querySelectorAll('.xp-item').forEach(item => {
      if (item !== el) item.classList.remove('active');
    });
    el.classList.toggle('active');
  }
</script>