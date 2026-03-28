---
layout: post
title: "Breathing Life into the Web: A Jekyll Chirpy Customization Guide"
date: 2026-03-24 00:00:00 +0800
categories: [Blogging, Tutorial]
tags: [Jekyll, Chirpy, Web Design, Customization, HTML, CSS]
description: "Tired of the default Chirpy theme look? Here is a step-by-step customization guide on adding dynamic backgrounds and other personalized tweaks."
toc: true
---

## Intro

Initially, I wanted to create my own personal website with ideas like interactive animations and a polished layout. I noticed that the Jekyll template is widely used by bloggers and offers a clean reading experience similar to the Medium platform. More importantly, I wanted full ownership of my content and to use GitHub as a central hub, ensuring I wouldn't lose my work even if I changed computers.

After struggling to implement all these design ideas from scratch, I luckily stumbled upon the Jekyll Chirpy theme — it's exactly what I was looking for.

I forked the Chirpy starter template (you can check out their [Getting Started guide](https://chirpy.cotes.page/posts/getting-started/)) and deployed it to my personal GitHub repository. 


## Adding the Homepage Background Animation

I took the design reference from [@HuanyuShi's blog](https://huanyushi.github.io/). Thanks for his amazing contribution! Based on that, I added a dynamic background animation feature to my site.

Here is the step-by-step guide:
### 1. Modify the Default Layout (Using Shadowing)

>**Crucial tip:** Do NOT modify the theme's core gem files directly, or your changes will be lost upon updating! Instead, we use Jekyll's "Shadowing" mechanism. 
{: .prompt-warning }

Find the `_layouts` folder in your local blog directory. Then create a file named `default.html` inside it (copying the original structure from the theme), and add the following condition at the bottom:

```html
{% raw %}{% if site.background_animation %}
  {% include animated-background.html %}
{% endif %}{% endraw %}
```
{: file="_layouts/default.html"}

### 2. Create the Animation HTML 

Next, find the `_includes` folder and create a file called `animated-background.html`.  This sets up the animation structure by adding a number of animation-circle objects:

```html
{% raw %}<div id="animation">
  {% for i in (1..50) %}
    <div class="animation-circle"></div>
  {% endfor %}
</div>{% endraw %}
```
{: file="_includes/animated-background.html"}

### 3. Add the CSS Styling

Now we need to make those circles move. Open `assets/css/jekyll-theme-chirpy.scss` and append the following SCSS at the end:

```scss
/* background animation */
@use 'sass:math';

@keyframes infirot {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
  
.icon-loading1 {
  display: inline-block;
  animation: infirot 1s linear infinite;
  -webkit-animation: infirot 1s linear infinite;
}
  
@function random_range($min, $max) {
  $rand: math.random();
  $random_range: $min + math.floor($rand * (($max - $min) + 1));
  @return $random_range;
}
  
#animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }
    100% {
      transform: translateY(-1200px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  @media all and (min-width: 1200px) {
    .animation-circle {
      position: absolute;
      left: var(--circle-left);
      bottom: -300px;
      display: block;
      background: var(--circle-background);
      width: var(--circle-side-length);
      height: var(--circle-side-length);
      animation: animate 25s linear infinite;
      animation-duration: var(--circle-time);
      animation-delay: var(--circle-delay);
      pointer-events: none;

      @for $i from 0 through 50 {
        &:nth-child(#{$i}) {
          --circle-left: #{random_range(0%, 100%)};
          --circle-background: rgba(#{random_range(0, 255)}, #{random_range(0, 255)}, #{random_range(0, 255)}, 0.06);
          --circle-side-length: #{random_range(20px, 200px)};
          --circle-time: #{random_range(10s, 45s)};
          --circle-delay: #{random_range(0s, 25s)};
        }
      }
    }
  }

  @media all and (max-width: 1199px) {
    .animation-circle {
      display: none;
    }
  }
}
```
{: file="assets/css/jekyll-theme-chirpy.scss"}

### 4. Enable It in the Configuration

Finally, open `_config.yml` and set the flag to true:

```yaml
background_animation: true
```
{: file="_config.yml"}

## Adding the Mouse Particles Component

I took the design reference from [@D-Sketon's blog](https://d-sketon.github.io/mouse-firework/). Thanks for his amazing contribution! Based on that, I added a dynamic Mouse Fireworks effects to my site.

### 1. Create the Mouse Effect Component

In the `_includes` folder you used earlier, create a new file called `mouse-particles.html` and paste the following code:

```html
<canvas class="fireworks" style="position: fixed;left: 0;top: 0;z-index: 9999999;pointer-events: none;"></canvas>
<script src="https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.min.js"></script>
<script>
  (function() {
    var canvasEl = document.querySelector('.fireworks');
    if (!canvasEl) return;
    var ctx = canvasEl.getContext('2d');
    var numberOfParticules = 10;
    /* 🌸 Design Your Own Fav Color */
    var colors = [
      'rgba(255,182,185,.9)', /* blossom pink */
      'rgba(250,227,217,.9)', /* peach */
      'rgba(187,222,214,.9)', /* mint green */
      'rgba(138,198,209,.9)'  /* sky blue */
    ];
    function setParticuleDirection(p) {
      var angle = anime.random(0, 360) * Math.PI / 180;
      var value = anime.random(50, 180);
      var radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
      };
    }
    function createParticule(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(5, 10); /* adjust particle radius */
      p.endPos = setParticuleDirection(p);
      p.draw = function() {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }
    /* Ripple */
    function createCircle(x, y) {
      var p = {};
      p.x = x;
      p.y = y;
      p.color = '#FFF';
      p.radius = 20;
      p.alpha = 0.5;
      p.lineWidth = 6;
      p.draw = function() {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1.0; /* opacity */
      };
      return p;
    }
    function renderParticule(anim) {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }
    function animateParticules(x, y) {
      var circle = createCircle(x, y);
      var particules = [];
      for (var i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime.timeline().add({
        targets: particules,
        x: function(p) { return p.endPos.x; },
        y: function(p) { return p.endPos.y; },
        radius: 0.1,
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticule,
        offset: 0
      }).add({
        targets: circle,
        radius: anime.random(80, 160),
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: 'linear',
          duration: anime.random(600, 800),
        },
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticule,
        offset: 0
      });
    }
    var render = anime({
      duration: Infinity,
      update: function() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      }
    });
    document.addEventListener('mousedown', function(e) {
      if (e.target.closest('#sidebar')) return;
      render.play();
      animateParticules(e.clientX, e.clientY);
    }, false);
    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = window.innerWidth + 'px';
      canvasEl.style.height = window.innerHeight + 'px';
      canvasEl.getContext('2d').scale(2, 2);
    }
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
  })();
</script>
```
{: file="_includes/mouse-particles.html"}

### 2. Register the Component in the Layout

Open `_layouts/default.html`, scroll to the bottom, and add the include tag alongside the background animation:

```html
{% raw %}{% include mouse-particles.html %}{% endraw %}
```
{: file="_layouts/default.html"}

>**Important:** If your `_layouts/default.html` uses `layout: compress`, avoid JavaScript // single-line comments inside `mouse-particles.html`. The compress layout minifies everything into one line, which would comment out your entire script. Use /* */ block comments instead — as shown in the code above.
{: .prompt-warning }

## Adding a Sidebar Background Image
Open `assets/css/jekyll-theme-chirpy.scss`and append the following styles.
First, set the background image:

```scss
  /* Embedded Side Bar Pannel Image */
#sidebar {
  background-image: url('/assets/lib/sidebar-bg.jpg'); /* customize the path */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
```
{: file="assets/css/jekyll-theme-chirpy.scss"}

Then update the text colors to ensure readability against your new background. The example below uses white text for a dark image:

```scss
/* Sidebar text styles */
#sidebar .site-title {
    color: #ffffff; /* Modify when your bg is light */
    text-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
#sidebar .site-subtitle {
    color: #ffffff; /* Modify when your bg is light */
    text-shadow: 2px 2px 3px rgba(0,0,0, 0.7);
}
#sidebar ul li.nav-item a.nav-link span{
    font-size: 100%;
}
#sidebar ul li.nav-item a.nav-link {
    color: #ffffff; /* Modify when your bg is light */
}
```
{: file="assets/css/jekyll-theme-chirpy.scss"}

## Adding a Comment Section

Most readers today are reluctant to sign up for an account just to leave a comment. Giscus requires a GitHub account, which creates unnecessary friction for non-technical visitors. After exploring alternatives, I settled on Waline, an open-source comment system that supports anonymous commenting, nested replies, emoji reactions, and pageview tracking, all with a clean modern UI.

The overall architecture looks like this: 

Reader → Vercel (Waline server) → Supabase (database)
              ↑
        Jekyll Chirpy frontend


### Step 1: Initialise the Supabase Database

Sign up at supabase.com using your GitHub account and note down your database password. Then open your project, go to **SQL Editor → New Query**, paste the following, and click **Run**:

```sql
/* SQL Database*/
CREATE TABLE IF NOT EXISTS wl_Comment (
  id BIGSERIAL PRIMARY KEY,
  "user_id" BIGINT, "comment" TEXT, "ip" VARCHAR(100),
  "link" VARCHAR(255), "mail" VARCHAR(255), "nick" VARCHAR(255),
  "pid" BIGINT, "rid" BIGINT, "sticky" BOOLEAN,
  "status" VARCHAR(50) DEFAULT 'approved', "like" BIGINT, "ua" TEXT,
  "url" VARCHAR(255), "referrer" VARCHAR(255),
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS wl_Counter (
  id BIGSERIAL PRIMARY KEY,
  "time" BIGINT, "reaction0" BIGINT, "reaction1" BIGINT,
  "reaction2" BIGINT, "reaction3" BIGINT, "reaction4" BIGINT,
  "reaction5" BIGINT, "reaction6" BIGINT, "reaction7" BIGINT,
  "reaction8" BIGINT, "url" VARCHAR(255),
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS wl_Users (
  id BIGSERIAL PRIMARY KEY,
  "display_name" VARCHAR(255), "email" VARCHAR(255),
  "password" VARCHAR(255), "type" VARCHAR(50), "url" VARCHAR(255),
  "avatar" VARCHAR(255), "github" VARCHAR(255), "twitter" VARCHAR(255),
  "facebook" VARCHAR(255), "google" VARCHAR(255), "weibo" VARCHAR(255),
  "qq" VARCHAR(255), "2fa" VARCHAR(255), "label" VARCHAR(255),
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
Once you see Success, you're done ✅

### Step 2: Retrieve Your Connection String

Go to **Project Settings → Database → Connection string**, select **Transaction Pooler** and **URI** format. Copy the string and replace `[YOUR-PASSWORD]` with your actual database password.

>Use Transaction Pooler (port 6543), not Direct Connection (port 5432). Vercel Serverless Functions require short-lived pooled connections.
{: .prompt-warning }

### Step 3: Deploy Waline on Vercel

Sign up at [vercel.com](https://vercel.com/) your GitHub account, then click the link below to clone the Waline template:

👉 [Deploy Waline to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/walinejs/waline/tree/main/example)

Before clicking Deploy, add these environment variables:

| Key | Value |
|------|-------|
| `PG_HOST` | your Supabase pooler host |
| `PG_PORT` | `6543` |
| `PG_DB` | `postgres` |
| `PG_USER` | `postgres.your-project-ref` |
| `PG_PASSWORD` | your database password |
| `PG_SSL` | `true` |

Once deployed, Vercel will give you a URL like `https://your-waline.vercel.app` — this is your `serverURL`.

### Step 4: Integrate with Jekyll Chirpy

Create `_includes/waline.html` with the following:

```html
<div id="waline-comment" class="mt-5"></div>
<link rel="stylesheet" href="https://unpkg.com/@waline/client@v3/dist/waline.css"/>
<script type="module">
  import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
  init({
    el: '#waline-comment',
    serverURL: 'https://your-waline.vercel.app', /* replace with yours */
    lang: 'en',
    dark: 'auto',
    login: 'disable',             /* allow anonymous comments */
    pageview: true,
    comment: true,
    requiredMeta: ['nick'],       /* only name is required */
    locale: {
      placeholder: 'Leave a comment! (Add your email to get reply notifications)',
      reactionTitle: 'What do you think?',
    },
    reaction: [
      'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_heart_eyes.png',
      'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_joy.png',
      'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_dog_consider.png',
      'https://unpkg.com/@waline/emojis@1.1.0/weibo/weibo_sob.png',
    ],
    emoji: [
      'https://unpkg.com/@waline/emojis@1.2.0/weibo',
      'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
    ],
  });
</script>
```
{: file="_includes/waline.html"}

Then include it at the bottom of `_layouts/post.html`:

```html
{% raw %}{% include waline.html %}{% endraw %}
```
{: file="_layouts/post.html"}

>**Troubleshooting**: If you see `500: FUNCTION_INVOCATION_FAILED`, check your Vercel logs. The two most common causes are an incorrect connection string or a Node.js version mismatch — try setting the runtime to **Node.js 20.x** under **Settings** → **General**. (or Ask Claude for any issues)
{: .prompt-warning }

For more emoji options, refer to the [Waline Emoji documentation](https://waline.js.org/en/guide/features/emoji.html).


