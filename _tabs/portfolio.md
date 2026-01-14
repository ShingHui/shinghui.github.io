---
layout: page
title: Portfolio
icon: fas fa-palette
order: 6
---

Hi there, I'm Angel

A psychology graduate from National Cheng Kung University (NCKU), Taiwan, with a passion for photography and visual storytelling. I enjoy capturing moments through travel and transforming ideas into meaningful visual experiences.

Explore a curated selection of my recent projects—each card reveals the inspiration, process, and story behind the work.

---


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
        <h3>
          <a href="{{ post.url | relative_url }}" class="card-link">{{ post.title }}</a>
        </h3>
        <p>{{ post.content | strip_html | truncate: 80 }}</p>
        <span class="read-more">View Project <i class="fas fa-arrow-right"></i></span>
      </div>

    </div>
  {% endfor %}
</div>

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.portfolio-card {
  position: relative; 
  background: var(--card-bg);
  border: 1px solid var(--card-border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.card-link::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card-img-container {
  height: 200px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.card-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content h3 {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
}

.card-link {
  text-decoration: none !important;
  color: inherit !important;
}

.read-more {
  margin-top: auto;
  color: var(--link-color);
  font-weight: bold;
  font-size: 0.9rem;
}
</style>