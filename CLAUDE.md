# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static website for **Brewzy (브루지)**, a drip coffee café in Seoul (서초구 강남대로8길 65-8 1층). No build system or dependencies — open HTML files directly in a browser.

## Previewing

```bash
open index.html        # macOS — opens in default browser
python3 -m http.server # serve locally if relative paths matter
```

## File structure

- `index.html` — the current live version with scroll animations
- `brewzy.html` — earlier/simpler version without animations (no `active` class fade-in, no Cafe24Surround font)
- `coffee.png`, `top_logo.png`, `top_logo_2.png` — brand assets
- `icon_instagram.png`, `icon_location.png`, `icon_email.png` — nav icon assets (not committed; fall back to icons8 CDN URLs via `onerror`)

## Architecture

Both pages are self-contained single-file HTML with inline CSS and JS. The layout is mobile-first, capped at **600px width**, centered.

**`index.html` additions over `brewzy.html`:**
- `Cafe24Surround` webfont applied to `.menu-name` elements
- `fadeInUp` CSS animation on `.poster-coffee-img` (opacity 0 → 1, delayed 0.5s)
- `IntersectionObserver` in `<script>` that adds `.active` class to `.menu-category` cards as they scroll into view, triggering a CSS `opacity`/`translateY` entrance transition

## Design tokens (CSS custom properties)

```css
--point-orange: #ff6600
--bg-cream:     #fbf7eb
--text-dark:    #3a2212
--text-muted:   #7a685a
```

## Menu data

All menu items and prices are hardcoded in HTML. To update prices or add items, edit the `<ul class="menu-list">` blocks inside each `<section class="menu-category">` in `index.html`.
