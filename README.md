# SaaSBlocks — Compact SaaS UI Components

[![npm version](https://img.shields.io/npm/v/saasblocks.svg?style=flat-square)](https://www.npmjs.com/package/saasblocks)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)
[![bundle size](https://img.shields.io/badge/gzip-~8KB-brightgreen.svg?style=flat-square)](#)
[![components](https://img.shields.io/badge/components-200%2B-6366f1.svg?style=flat-square)](#)

**200+ ready-to-copy HTML/CSS components for SaaS dashboards.** Build shipping, analytics, settings, and team screens in minutes — not days. Copy from the gallery or import as ES modules.

---

## Why SaaSBlocks?

You're building a SaaS product. You need billing pages, team management, analytics dashboards, settings panels, and more. Hand-coding every component from scratch is slow and inconsistent. UI kits are bloated with stuff you don't need and miss the patterns SaaS products actually use.

**SaaSBlocks is different.** Every component is:

- **Designed for SaaS** — stats, plans, invoices, API keys, user rows, logs, config panels, onboarding flows
- **Zero dependencies** — just HTML and CSS (Lucide icons, loaded once)
- **~8 KB gzipped** — the entire library is smaller than a single hero image
- **5 themes built in** — Clean, Graphite, Dracula, Davinci, and Casual
- **Copy-paste ready** — every component ships with working HTML you drop into your codebase
- **Modular or bundled** — import only what you need, or use the single IIFE bundle

---

## Quick Start

### CDN (fastest)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/saasblocks/dist/free/saasblocks.min.css">

<!-- Icons (Lucide) -->
<script src="https://unpkg.com/lucide@latest"></script>

<!-- Components (IIFE bundle, exposes window.CompactGalleryUI) -->
<script src="https://unpkg.com/saasblocks/dist/gallery.bundle.js"></script>
```

### npm

```bash
npm install saasblocks
```

```js
// Import the CSS
import 'saasblocks/dist/free/saasblocks.min.css';

// Import individual components by category
import actions from 'saasblocks/dist/free/components/actions/index.js';
import forms from 'saasblocks/dist/free/components/forms/index.js';
import data from 'saasblocks/dist/free/components/data/index.js';

// Or use the engine to render everything
import { init } from 'saasblocks/dist/free/engine/index.js';
```

---

## Usage

### Option 1: Browse & Copy

Open the [Component Gallery](https://saasblocks.dev/gallery) (or run `compact-saas-component-gallery.html` locally), find the component you need, click **Copy**, and paste it into your HTML. Every component is a self-contained HTML snippet that works immediately with the SaaSBlocks CSS loaded.

### Option 2: Import as Modules

```js
import layout from 'saasblocks/dist/free/components/layout/index.js';

// Each category exports an array of { name, group, notes, code }
console.log(layout[0].code); // HTML string for "Welcome panel"
```

### Option 3: Use the Gallery Engine

```html
<div id="gallery"></div>
<div id="filters"></div>
<input id="search" placeholder="Search components..." />
<div id="themeToggles"></div>

<script src="saasblocks/dist/gallery.bundle.js"></script>
<!-- Renders the full interactive gallery automatically -->
```

---

## Features

| Category | Count | Description |
|----------|-------|-------------|
| **Layout** | 7 | Welcome panels, stat grids, kanban columns, dashboard grids, header bars, sidebar layouts |
| **Forms** | 14 | Login forms, search inputs, invite captures, select rows, file uploads, multi-field layouts, checkbox groups, toggle switches, date inputs, step inputs, range sliders, password fields, radio groups, textarea + submit |
| **Actions** | 8 | Quick actions, grouped filters, toolbars, bulk actions, sort dropdowns, filter chips, search + filter combos, segmented controls |
| **Data** | 10 | User rows, plan cards, invoice rows, stat cards, metric panels, progress bars, timeline entries, key-value pairs, badged rows, status indicators |
| **Feedback** | 7 | Status bars, alert callouts, toast notifications, empty states, loading skeletons, progress indicators, confirmation prompts |
| **Settings** | 8 | Inline settings, toggle rows, API key fields, plan selectors, color pickers, notification prefs, theme selectors, profile fields |
| **Navigation** | 7 | Breadcrumbs, tab bars (line, pill, icon, vertical), pagination, step indicators, command palettes |
| **Primitives** | 12 | Buttons (primary, secondary, ghost, danger, icon-only), chips (all tones), toggles, switches, checkboxes, radios, avatars, status dots, dividers, code lines, soft rows |
| **Lists** | 8 | Plain lists, setting lists, member lists, log lists, notification lists, file lists, connection rows, plan rows |
| **Surfaces** | 7 | Panel cards, nested rows, metric panels, split panels, side panels, tooltip containers, bordered sections |
| **Charts** | 5 | Bar charts, donut indicators, sparklines, progress rings, stat + chart combos |
| **Calendars** | 4 | Month grids, date pickers, schedule rows, event cards |
| **Card Groups** | 5 | Team grids, plan comparisons, stat clusters, feature grids, metric dashboards |
| **Media** | 5 | File rows, image cards, video embeds, icon grids, attachment rows |
| **Overlays** | 6 | Mini menus, popover headers, tooltip samples, modal footers, dropdown rows, context menus |
| **Developer** | 7 | Code tokens, API status rows, env rows, log rows, config pairs, dependency lists, log viewers |

---

## Theming

SaaSBlocks ships with **5 production-ready themes**:

| Theme | Vibe | Best for |
|-------|------|----------|
| **Clean** | Light, airy, professional | General SaaS, productivity tools |
| **Graphite** | Dark gray, muted | Developer tools, analytics dashboards |
| **Dracula** | Purple-tinted dark | Code editors, terminal-based tools |
| **Davinci** | Warm, earthy | Creative tools, design platforms |
| **Casual** | Playful, colorful | Consumer apps, onboarding flows |

All themes are CSS custom property–driven. Switch themes with one attribute:

```html
<html data-theme="dracula">
```

Or toggle programmatically:

```js
document.documentElement.setAttribute('data-theme', 'casual');
localStorage.setItem('gallery-theme', 'casual');
```

The **Free tier** includes Clean, Graphite, and Dracula. The **Pro tier** adds Davinci and Casual.

---

## Pricing

### Free — $0

- **80 components** across all 16 categories
- **3 themes**: Clean, Graphite, Dracula
- MIT license — use in personal and commercial projects
- Community support via GitHub issues

### Pro — $149 (one-time)

- **200+ components** — every component in the library
- **All 5 themes**: Clean, Graphite, Dracula, Davinci, Casual
- **1 year of updates** — new components and themes added regularly
- Priority support via email
- Use in unlimited projects — yours, your clients', forever

[**Buy Pro on Gumroad →**](https://gumroad.com/l/saasblocks-pro)

---

## Component Categories

1. **Layout** — Welcome panels, stat grids, kanban columns, dashboard grids, sidebar patterns
2. **Forms** — Login, search, selects, uploads, checkboxes, radios, toggles, date inputs
3. **Actions** — Quick actions, toolbars, segmented controls, bulk actions, sort dropdowns
4. **Data** — User rows, plans, invoices, stats, metrics, timelines, key-value pairs
5. **Feedback** — Status bars, alerts, toasts, empty states, loading skeletons, confirmations
6. **Settings** — Toggle rows, API keys, plans, color pickers, notification preferences
7. **Navigation** — Breadcrumbs, tabs (line/pill/icon/vertical), pagination, command palettes
8. **Primitives** — Buttons, chips, switches, checkboxes, radios, avatars, status dots, dividers
9. **Lists** — Settings lists, member lists, notification feeds, file lists, connection rows
10. **Surfaces** — Panels, nested rows, metric panels, split panels, bordered sections
11. **Charts** — Bar charts, donuts, sparklines, progress rings, stat + chart combos
12. **Calendars** — Month grids, date pickers, schedule rows, event cards
13. **Card Groups** — Team grids, plan comparisons, stat clusters, feature grids
14. **Media** — File rows, image cards, embeds, icon grids, attachment rows
15. **Overlays** — Menus, popovers, tooltips, modals, dropdowns, context menus
16. **Developer** — Code tokens, API status, env config, log viewers, dependency lists

---

## Project Structure

```
saasblocks/
├── src/
│   ├── css/               # Source CSS (tokens, core, themes)
│   ├── engine/            # Gallery engine (state, renderer, interactions, etc.)
│   └── components/        # 16 category folders, each exporting its components
├── dist/
│   ├── free/              # Free tier CSS + engine + components
│   │   ├── saasblocks.css
│   │   ├── saasblocks.min.css
│   │   ├── engine/
│   │   └── components/
│   ├── pro/               # Pro tier CSS + engine + components
│   │   ├── saasblocks.css
│   │   ├── saasblocks.min.css
│   │   ├── engine/
│   │   └── components/
│   └── gallery.bundle.js  # Standalone IIFE bundle for the gallery viewer
├── scripts/
│   └── build.js           # Build pipeline
├── compact-saas-component-gallery.html  # Gallery demo page
└── compact-saas-component-gallery.css   # Gallery viewer styles
```

---

## Development

```bash
git clone https://github.com/your-org/saasblocks.git
cd saasblocks
npm install
node scripts/build.js
```

Open `compact-saas-component-gallery.html` in a browser to browse the component gallery locally.

---

## License

**Free tier**: MIT — use freely in personal and commercial projects. See [LICENSE](./LICENSE).

**Pro tier**: Commercial license included with purchase. One-time payment, use in unlimited projects.

---

**Built for SaaS teams who ship fast.** Questions? [Open an issue](https://github.com/your-org/saasblocks/issues) or email hello@saasblocks.dev.
