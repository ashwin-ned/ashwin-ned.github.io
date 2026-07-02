# ashwin-ned.github.io

Personal site + research blog for Ashwin Nedungadi — hosted on **GitHub Pages**.

The main pages (`index.html`, `projects.html`, `art.html`) are hand-built
**static HTML/CSS/JS** (no build step). The **blog** under `/blog/` is still
driven by **Jekyll**, which GitHub Pages compiles automatically — so posts stay
as plain markdown files while the rest of the site is fully static.

---

## 1. Deploy to GitHub Pages

This is a **user site**, so the repo name must be exactly `ashwin-ned.github.io`.

```bash
git clone https://github.com/ashwin-ned/ashwin-ned.github.io.git
cd ashwin-ned.github.io
# copy the contents of this folder in (overwriting the old files), then:
git add -A
git commit -m "Redesign: static home/projects/art + restyled Jekyll blog"
git push origin main
```

Settings → Pages → Source: **Deploy from a branch**, `main` / `/ (root)`.
Live at <https://ashwin-ned.github.io> within a minute or two. No `.nojekyll`
file is present, so GitHub Pages runs Jekyll and builds the blog.

---

## 2. Writing a blog post

Add a file to `_posts/` named `YYYY-MM-DD-a-short-slug.md`:

```markdown
---
title: "Reading depth from a single frame"
date: 2026-02-01
tags: [depth, perception]
excerpt: "A one-line summary that appears in the blog index."
---

Write the body in plain markdown.
```

Commit and push — the post appears on `/blog/` and in the RSS feed at
`/feed.xml`. Blog pages inherit the site's design via `_includes/` + `style.css`.

---

## 3. Editing the main pages

The home, projects, and art pages are plain HTML you edit directly:

| File            | Contents                                                    |
|-----------------|-------------------------------------------------------------|
| `index.html`    | Hero, About, Skills, Research, Publications, Awards, News, Writing, Beyond research, Contact |
| `projects.html` | Past-projects portfolio (with thumbnails + lightbox)        |
| `art.html`      | Paintings gallery + CVPR AI-art submissions                 |
| `assets/css/style.css` | The whole design system (`:root` light, `[data-theme="dark"]` dark) |
| `assets/js/main.js`    | Theme toggle, mobile menu, active-nav, image lightbox |

`assets/Ashwin-Nedungadi-CV.pdf` is the downloadable CV linked in the hero.

---

## 4. Preview locally (optional)

The static pages open directly in a browser. To preview the **blog** the way
GitHub Pages builds it (requires Ruby):

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload   # http://localhost:4000
```

---

## File map

```
_config.yml            site config + plugins (feed, seo, sitemap)
Gemfile                pinned to the github-pages gem (blog build)
index.html             home — static
projects.html          past projects — static
art.html               art gallery — static
blog.html              blog index — Jekyll
404.html               not-found — Jekyll
_layouts/              default, page, post
_includes/             head, nav, footer, icon (restyled to match)
_data/                 research.yml, projects.yml, social.yml (legacy blog data)
_posts/                blog posts (markdown)
assets/css/style.css   the whole design system (static site + blog)
assets/js/main.js      theme toggle, menu, active-nav, lightbox
assets/Ashwin-Nedungadi-CV.pdf   downloadable CV
assets/img/            profile, outdoors/diving, art/, projects/, cvpr2024/, cvpr2026/
robots.txt             crawler hints + sitemap pointer
```

© Ashwin Nedungadi.
