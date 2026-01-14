---
layout: post
title: "The Resilience Shield: Stress & Depression Survey" 
date: 2026-01-03 00:00:00 +0800
categories: [Portfolio]
tags: [Depression, Resilience, Life Stress, ]
toc: false
image:
  path: /assets/img/portfolio/statistic-project.jpg
  alt: Psychology Statistics (Freshman Group Project) x NCKU x 2022 (Feb-Jun)
---

<style>
  /* --- Comic Style Core CSS --- */
  :root {
    --comic-bg: #fdfdfd;
    --comic-border: #2d3748; 
    --comic-accent: #81c784; 
    --comic-shadow: 6px 6px 0px #2d3748; 
  }

  .comic-wrapper {
    font-family: "Courier New", Courier, monospace, sans-serif; 
    max-width: 100%;
    margin: 2rem 0;
  }

  /* Grid Layout */
  .comic-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px; 
    margin-bottom: 20px; 
  }

  /* Generic Panel */
  .comic-panel {
    background: #fff;
    border: 3px solid var(--comic-border);
    box-shadow: var(--comic-shadow);
    padding: 25px; 
    position: relative;
    transition: transform 0.2s;
    border-radius: 0; 
  }
  
  .comic-panel:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0px var(--comic-border);
  }

  /* Full Width Panel */
  .panel-full {
    grid-column: span 2; 
  }
  
  .panel-title {
    background: var(--comic-accent);
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }
  
  /* Stats Panel Background */
  .panel-stats {
    background: #f1f8e9;
    border-style: dashed; 
  }

  /* Speech Bubble */
  .speech-bubble {
    background: #fff;
    border: 3px solid var(--comic-border);
    border-radius: 50% / 10%;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
    position: relative;
    margin-top: 15px;
    display: block;
  }
  .speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 30px;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: var(--comic-border) transparent;
    display: block;
    width: 0;
  }

  /* Typography */
  .comic-h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
    text-shadow: 3px 3px 0px #e8e8e8;
  }
  
  .comic-label {
    background: #000;
    color: #fff;
    padding: 2px 8px;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: uppercase;
    position: absolute;
    top: -15px;
    left: 10px;
    transform: rotate(-2deg);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .comic-grid { grid-template-columns: 1fr; }
    .panel-full { grid-column: span 1; } 
  }
</style>

<div class="comic-wrapper">

  <div class="comic-grid">
    <div class="comic-panel panel-full panel-title">
      <div class="comic-label">Ep.04 Freshman Project</div>
      <h1 class="comic-h1">THE RESILIENCE SHIELD</h1>
      <p style="font-weight: bold; margin-top: 5px;">Does a strong mind block life stress?</p>
    </div>

    <div class="comic-panel">
      <span class="comic-label" style="background: #e53935;">The Conflict</span>
      <h3 style="margin-top: 10px;">The Pressure Cooker</h3>
      <p style="font-size: 0.9rem;">
        <strong>Scene:</strong> College Life<br>
        <strong>Enemy:</strong> Academic Stress & Future Anxiety<br>
        <br>
        We know stress leads to depression. But why do some students survive while others break?
      </p>
    </div>

    <div class="comic-panel" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: #e0f2f1; text-align: center;">
         <div style="font-size: 3rem;">🛡️</div>
         <div style="font-weight: 900; font-size: 1.2rem;">THE BUFFER</div>
         <div style="font-size: 0.8rem; margin-bottom: 5px;">(Resilience)</div>
         <p style="font-size: 0.85rem; margin: 0;">
            When stress hits, resilience helps absorb the impact and protect mental well-being
         </p>
    </div>
  </div>

  <div class="comic-grid">
    
    <div class="comic-panel" style="background: #fff5f5;">
      <span class="comic-label" style="background: #e53935;">The Correlation</span>
      <h4 style="margin-top: 5px; font-weight: 800; text-transform: uppercase;">1. STRESS & DEPRESSION</h4>
      <img src="/assets/img/portfolio/stress.jpg" alt="stress regression" class="img-fluid" style="border: 2px solid #2d3748; margin: 10px 0;">
      <ul style="font-size: 0.9rem; padding-left: 20px; margin-bottom: 0;">
       <li style="margin-top: 5px;">
         <strong>Direct Hit:</strong><br>
         Higher stress is significantly associated with higher levels of depression. (p < .05)
       </li>
      </ul>
    </div>

    <div class="comic-panel" style="background: #e0f2f1;">
      <span class="comic-label" style="background: #00897b;">The Buffer</span>
      <h4 style="margin-top: 5px; font-weight: 800; text-transform: uppercase;">2. THE SHIELD EFFECT</h4>
      <img src="/assets/img/portfolio/buffer.jpg" alt="resilience regression" class="img-fluid" style="border: 2px solid #2d3748; margin: 10px 0;">
      <ul style="font-size: 0.9rem; padding-left: 20px; margin-bottom: 0;">
       <li style="margin-top: 5px;">
         <strong>Shielding Up:</strong><br>
         Stress still exists, but its impact is <span style="background:#fff9c4; padding:0 2px;">significantly smaller</span> when resilience is high.
       </li>
      </ul>
    </div>
  </div>

  <div class="comic-grid">
    
    <div class="comic-panel panel-stats">
      <span class="comic-label" style="background: #7cb342;">The Verdict</span>
      <h4 style="margin-top: 5px; margin-bottom: 15px; font-weight: 800; text-transform: uppercase; border-bottom: 2px dashed #aaa; padding-bottom: 5px;">
        WHO IS THE REAL ENEMY?
      </h4>
      
      <div style="font-size: 0.9rem;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="background: #e53935; color: white; padding: 2px 8px; font-weight: bold; margin-right: 10px;">#1</span>
          <div><strong>Self-Identity (X3)</strong><br><span style="font-size: 0.75rem; color:#666;">Highest Impact (p<.001)</span></div>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="background: #fb8c00; color: white; padding: 2px 8px; font-weight: bold; margin-right: 10px;">#2</span>
          <div><strong>Academic (X4)</strong></div>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <span style="background: #7cb342; color: white; padding: 2px 8px; font-weight: bold; margin-right: 10px;">#3</span>
          <div><strong>Future Career (X2)</strong></div>
        </div>
      </div>

      <div style="background: #fff; border: 2px solid #2d3748; padding: 10px;">
        <strong style="font-size: 0.8rem; text-transform: uppercase; display:block; color: #546e7a;">⚡ Myth Busted:</strong>
        <p style="margin: 0; font-size: 0.8rem;">
           <strong>Relationships (X1)</strong> showed <u>NO significant correlation</u> (p=.61). Inner struggle outweighs romance.
        </p>
      </div>
    </div>

    <div class="comic-panel">
      <span class="comic-label" style="background: #ab47bc;">Plot Twist</span>
      
      <h4 style="margin-top: 5px; font-weight: 800; text-transform: uppercase;">Wait... The scores changed?</h4>
      
      <p style="font-size: 0.9rem;">
         We found something strange. Participants changed their self-evaluation scores <strong>AFTER</strong> taking the survey.
      </p>
      
      <div class="speech-bubble">
        "The act of measuring is<br>an intervention itself!"
      </div>
      
      <p style="font-size: 0.8rem; margin-top: 15px; color: #666; border-top: 1px dashed #ccc; padding-top: 10px;">
        <strong>Insight:</strong> Meta-cognition was triggered during the process.
      </p>
    </div>

  </div>

   <div class="comic-panel panel-full" style="background: #2d3748; color: #fff; margin-bottom: 0;">
    <h4 style="color: #81c784; margin-top: 0;">Epilogue: The "Silent" Stressor</h4>
    
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">
        Before the data, we thought exams or breakups were the biggest enemies.
      </p>
      
      <div style="background: rgba(255,255,255,0.1); padding: 10px; border-left: 3px solid #e53935;">
        <p style="font-size: 0.95rem; font-style: italic; margin: 0;">
          "But the regression model humbled us. <strong>Self-Identity</strong> outweighed Academic Stress."
        </p>
      </div>

      <p style="font-size: 0.9rem; opacity: 0.9; margin: 0;">
        This insight shifts the conversation: Supporting college students isn't just about tutoring; it's about helping them find <strong>who they are</strong>.
      </p>

      <p style="font-size: 0.9rem; opacity: 0.9; margin-top: 10px; border-top: 1px dashed #555; padding-top: 10px;">
        This project was my first attempt at operationalizing abstract emotions. Understanding the <strong>"Human Factor"</strong> is key to any psychological study.
      </p>
    </div>
  </div>

</div>



