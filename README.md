# Humane

Official protected wiki and lore repository for **Humane**, a scientifically realistic mythic novel project by Guido Duchi.

This repository is designed to be deployed through **GitHub Pages** as a public reading site. The material is publicly viewable for personal reading and reference only; it is not open source, not Creative Commons, and not licensed for copying, cloning, redistribution, adaptation, scraping, or machine-learning training.

See [`LICENSE.md`](./LICENSE.md) for the governing terms.

---

## Repository purpose

This repository powers the official public wiki for **Humane**.

The site is meant to preserve and organize:

- canon lore;
- character profiles;
- historical research;
- scientific research;
- civilizations and locations;
- biology notes;
- technology, tools, weapons, and artifacts;
- glossary terms;
- companion narrative material such as **The Threshold**.

The repository is a **Jekyll-based GitHub Pages site**. Most content is written in Markdown files, while shared layout, styling, navigation, and page behavior are handled through Jekyll layouts, includes, data files, CSS, and JavaScript.

---

## GitHub Pages deployment

Recommended deployment path:

1. Open **Settings > Pages** in this repository.
2. Set **Source** to `Deploy from a branch`.
3. Select branch `main`.
4. Select folder `/ (root)`.
5. Save.

Expected project-page URL:

```text
https://guidoduchi.github.io/humane/
```

The site uses this project base URL in `_config.yml`:

```yml
baseurl: "/humane"
url: "https://guidoduchi.github.io"
```

Keep that `baseurl` unless the repository name or deployment path changes.

---

## Local deployment / local preview

Use local preview before pushing larger structural changes.

### 1. Install Ruby and Jekyll

Install Ruby first. On Windows, use RubyInstaller with Devkit. After Ruby is available, install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

### 2. Clone the repository for personal editing

Only the copyright holder or authorized collaborators should clone/edit the repository.

```bash
git clone https://github.com/guidoduchi/humane.git
cd humane
```

### 3. Serve locally

Because this is a GitHub Pages project site under `/humane`, serve it with the same base URL:

```bash
jekyll serve --baseurl /humane
```

Then open:

```text
http://localhost:4000/humane/
```

### 4. Useful local commands

Serve with drafts and live reload:

```bash
jekyll serve --baseurl /humane --livereload
```

Clean the generated site:

```bash
jekyll clean
```

Build without serving:

```bash
jekyll build
```

### Local troubleshooting

If pages open but CSS or links look broken, check that you are opening:

```text
http://localhost:4000/humane/
```

not:

```text
http://localhost:4000/
```

This site uses Jekyll's `relative_url` filter so links work correctly under the `/humane` project path.

---

## Wiki structure

The site is organized into primary wiki sections:

- **History** — historical context, timelines, Bronze Age collapse research.
- **Characters** — profiles, groups, relationships, arcs, and abilities.
- **Research** — physical, chemical, biological, astronomical, and technical explanations.
- **World** — civilizations, locations, politics, rituals, economy, and geography.
- **Biology** — flora, fauna, fungi, ecology, and living systems.
- **Technology** — artifacts, tools, weapons, materials, the Singularity, and equipment.
- **Glossary** — terms, names, concepts, and quick definitions.

Current top-level folders:

```text
history/
characters/
research/
world/
biology/
technology/
glossary/
```

Shared site files:

```text
_config.yml                 Site configuration
_data/navigation.yml        Main navbar, dropdowns, and section sidebars
_layouts/                   Page templates
_includes/                  Header, footer, sidebar, breadcrumbs
assets/css/main.css         Visual styling
assets/js/navigation.js     Mobile navigation behavior
```

---

## How to add a new entry

A normal lore page is a Markdown file with Jekyll front matter.

### 1. Choose the correct section

Examples:

```text
characters/main-crew/erlen-dhalmurr.md
world/locations/vahllalhag.md
technology/singularity/the-threshold.md
research/physics/time-dilation.md
```

Use lower-case, hyphen-separated file names:

```text
good:  bronze-age-collapse.md
good:  the-entity-imaedra.md
avoid: Bronze Age Collapse.md
avoid: The Entity and iMaedra.md
```

### 2. Add front matter

Use this template for a normal entry page:

```md
---
layout: entry
title: Entry Title
section: technology
breadcrumbs:
  - title: Humane
    url: /
  - title: Technology
    url: /technology/
  - title: Singularity
    url: /technology/singularity/
  - title: Entry Title
    url: /technology/singularity/entry-title/
---

# Entry Title

Write the entry here.
```

The `section` value controls which permanent sidebar appears.

Allowed section values currently are:

```text
history
characters
research
world
biology
technology
glossary
```

### 3. Make breadcrumbs clickable

Breadcrumbs are the small location/navigation bar above each page.

Example:

```text
Humane > Characters > Main Crew > Erlen Dhalmurr
```

Each previous breadcrumb should include a `url`. The final breadcrumb may include a URL, but it appears as the current page rather than a link.

### 4. Add the page to the sidebar

To make a page appear in the section sidebar, edit:

```text
_data/navigation.yml
```

Example:

```yml
technology:
  title: Technology
  url: /technology/
  groups:
    - title: Singularity
      links:
        - title: Star Piece
          url: /technology/singularity/star-piece/
```

### 5. Add the page to an index card, if useful

Section and subset pages often use cards to highlight important entries.

Example card:

```md
<a class="card" href="{{ '/technology/singularity/star-piece/' | relative_url }}">
  <h2>Star Piece</h2>
  <p>The fragment that falls into Sharrah Pool.</p>
</a>
```

Use cards for important navigation hubs. Do not overcrowd index pages with every tiny note.

---

## How to add a new subset

A subset is a folder inside a main section, such as:

```text
characters/main-crew/
technology/singularity/
world/civilizations/
biology/fauna/
```

To add one:

1. Create a new folder.
2. Add an `index.md` inside it.
3. Use `layout: section` if the subset should behave like a navigation hub.
4. Add its breadcrumb path.
5. Add it to `_data/navigation.yml` under the correct main section.
6. Add a card to the parent section page if users should discover it easily.

Subset page template:

```md
---
layout: section
title: Subset Title
section: world
breadcrumbs:
  - title: Humane
    url: /
  - title: World
    url: /world/
  - title: Subset Title
    url: /world/subset-title/
---

# Subset Title

Short description.
```

---

## How to edit the whole web app

### Main navigation and sidebars

Edit:

```text
_data/navigation.yml
```

This file controls:

- top navbar items;
- desktop hover dropdowns;
- section-specific permanent sidebars;
- sidebar groups and links.

### Header

Edit:

```text
_includes/header.html
```

This controls:

- Humane brand link;
- desktop navbar;
- hover dropdowns;
- mobile menu button.

### Footer and license link

Edit:

```text
_includes/footer.html
```

The footer must always include:

- copyright notice;
- license mention;
- link to `LICENSE.md`.

### Breadcrumbs

Edit:

```text
_includes/breadcrumbs.html
```

Breadcrumb data itself is configured per page in the page front matter.

### Sidebar behavior

Edit:

```text
_includes/sidebar.html
```

Sidebar content comes from `_data/navigation.yml` and appears when a page uses:

```yml
show_sidebar: true
```

The `section` and `entry` layouts already enable the sidebar.

### Layouts

Edit files in:

```text
_layouts/
```

Current layouts:

```text
default.html   Base shell used by all pages
home.html      Homepage layout, no permanent sidebar
section.html   Section and subset hub layout, with sidebar
entry.html     Individual wiki entry layout, with sidebar
```

### Styling

Edit:

```text
assets/css/main.css
```

This controls:

- colors;
- spacing;
- page width;
- header/nav appearance;
- cards;
- sidebars;
- breadcrumbs;
- responsive/mobile behavior.

### JavaScript

Edit:

```text
assets/js/navigation.js
```

This currently controls the mobile navigation toggle.

---

## Design rules

- The homepage should stay clean and summary-focused.
- On wide desktop screens, the homepage uses the top navbar and does not need a permanent sidebar.
- Section pages and entry pages should show the section-specific sidebar.
- Every entry should have breadcrumbs.
- Keep content inside its correct section; do not mix unrelated categories.
- Use `relative_url` for internal links inside templates and cards.
- Keep protected lore in Markdown pages, not hardcoded into layouts.

---

## Content-writing conventions

Recommended entry structure:

```md
# Entry Title

Short opening definition.

## Canon status

State whether the page is canon, placeholder, draft, or pending final naming.

## Overview

Explain the subject clearly.

## Details

Add organized subsections.

## Open questions

List unresolved items if the entry is still being developed.
```

Use clear labels for unstable names:

```text
The Entity — placeholder name.
The Deviants — placeholder name.
```

Do not silently overwrite old canon when a contradiction matters. Add a note such as:

```text
Canon update: This replaces the older version where...
```

---

## Commit workflow

For direct edits on `main`:

```bash
git status
git add .
git commit -m "Describe the change"
git push origin main
```

For safer larger edits, use a branch:

```bash
git checkout -b update-navigation
git add .
git commit -m "Update navigation structure"
git push origin update-navigation
```

Then open a pull request into `main`.

---

## License notice

© 2026 Guido Duchi. All rights reserved. Viewing is permitted only under the Humane Repository Viewing License.

This repository is public for reading only. It is not open source and is not licensed for copying, cloning, redistribution, adaptation, scraping, or machine-learning training. See [`LICENSE.md`](./LICENSE.md).