<div align="center">

# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

[![Latest Release](https://img.shields.io/badge/release-v3.0.0-4f46e5?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![Canonical Tags](https://img.shields.io/badge/canonical_tags-1%2C370-06b6d4?style=for-the-badge)](./illustrious-lexicon-tags.csv)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Web%20%7C%20Standalone_HTML-0f172a?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![License](https://img.shields.io/badge/license-Apache_2.0-10b981?style=for-the-badge)](./LICENSE)

[**⬇ Download Windows `.exe` / Standalone Release**](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest) · [**📊 Browse 1,370-Tag CSV**](./illustrious-lexicon-tags.csv) · [**🗂 7-Domain Taxonomy**](#1-comprehensive-7-domain-sdxl-illustrious-taxonomy) · [**✨ Features**](#2-smart-prompt-composer--workflow-studios) · [**🛠 Build & Deploy**](#4-deploying-on-github-web--pc-desktop-releases)

</div>

---

**Illustrious Lexicon** is a fast, 100% offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. It indexes **1,370 canonical Booru tags** across **7 domains** and **44 subcategories** using strict Danbooru underscore formatting (`big_eyes`, `long_hair`, `cat_ears`, `fox_tail`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated positive and negative prompts without unwanted weight clutter or external API keys.

---

## 1. Comprehensive 7-Domain SDXL Illustrious Taxonomy

The database is structured in the canonical prompt ordering recommended for SDXL Illustrious models:

| # | Domain | Subcategories | Tags | Focus & Scope |
| :---: | :--- | :---: | :---: | :--- |
| **01** | **Art Styles, Mediums & Meta Quality** | 4 | **85** | Quality triggers (`masterpiece`, `best_quality`, `very_awa`, `absurdres`, `newest`), anime/manga styles, shading & mediums, page layouts (`comic`, `4koma`, `reference_sheet`), censor modes, and visual effects |
| **02** | **Character Traits, Archetypes, Body & Hair** | 6 | **200** | Subject counts (`1girl`, `solo`, `multiple_girls`), archetypes & professions, body proportions & anatomy, skin/tanlines/tattoos, hairstyles, bangs, and hair colors |
| **03** | **Species, Races & Demihuman Traits** | 6 | **233** | Kemonomimi/beastkin, fantasy races (elf, dark elf, dwarf, oni, succubus, vampire), monster girls, anthro/furry/scalie, ears, horns, wings, tails, and racial features |
| **04** | **Face, Eyes & Expressions** | 5 | **176** | Brows, eye shapes, eyelids, pupil geometry, iris colors, mouth & tongue shapes, blush, tears, emoticons (`^_^`, `>_<`, `:o`, `;d`), emotion symbols, and facial hair |
| **05** | **Clothing, Lingerie, Materials & Fashion States** | 10 | **319** | Uniforms, traditional/fantasy attire, tops, outerwear, dresses, skirts, swimwear, lingerie, latex/materials, prints & patterns, suggestive states, footwear, and accessories |
| **06** | **Poses, Camera Angles, Gaze & Interactions** | 9 | **240** | Framing & shot sizes, camera perspective & Dutch angles, gaze direction, body postures, couple interactions, sensual & intimate poses, gestures, and cinematic lighting |
| **07** | **Backgrounds, Environments & Props** | 4 | **117** | Studio & minimal backdrops, sky & weather, indoor/urban architecture, and handheld objects, weapons, and accessories |
| | **Total Indexed Lexicon** | **44** | **1,370** | **Complete database export available in [illustrious-lexicon-tags.csv](./illustrious-lexicon-tags.csv)** |

---

## 2. Smart Prompt Composer & Workflow Studios

- **Decluttered Collapsible Workspace**: Collapse either the Left Taxonomy Sidebar (`PanelLeft`) or Right Prompt Composer (`PanelRight`), expand/collapse the **Filters & A–Z** drawer, reveal secondary row actions on hover/focus, and keep studios, modular negative packs, conflict panels, and the **Tag Inspector** collapsed until needed.
- **Unified Settings & Workspace Tools Modal**: Consolidates **Display & Theme** (Dark Slate / Light Paper, `85%`–`130%` UI font scaling, density, grid columns, visible metadata), **Output & History** (A1111/Forge/ComfyUI parenthesis escaping `\(` `\)`, trailing commas, Auto-Sort, history caps), **Custom Tag** creation (with live canonical normalization and inline built-in duplicate/alias hints), and **CSV Export**.
- **Unified Prompt Workspace (Interactive Chips | Raw Text)**: Switch seamlessly between interactive clickable tag chips and a clean, raw comma-separated prompt string for both Positive and Negative prompts.
- **Auto-Sort by Illustrious Order**: Automatically orders selected tags (including color-prefixed variants) by optimal domain hierarchy: Meta/Quality → Character → Species & Races → Face & Expressions → Clothing → Poses/Camera/Gaze → Environment.
- **Dedicated Species, Race & Trait Studio**: Includes **12 Composite Lineage Presets** (*Silver-Haired High Elf*, *Kitsune Shrine Maiden*, *Dragon Demihuman Warrior*, *Dark Elf Infiltrator*, *Catgirl Maid*, *Vampire Aristocrat*, *Succubus Temptress*, *Deep-Sea Siren*, *Demon Oni Berserker*, *Wolfkin Huntress*, *Anthro Snow Leopard*, *Slime-Kin Alchemist*) with conflict-free **Swap Species** and a **4-Zone Species Trait Mixer**.
- **Interactive Face & Expression Studio**: Features **10 Built-In Composite Expression Presets** (*Smug Tease*, *Tsundere Pout*, *Shy & Flustered*, *Sultry Bedroom Gaze*, *Torogao Melting Ecstasy*, *Heavy Ahegao Climax*, *Yandere Obsession*, *Heartbroken Tears*, *Haughty Contempt*, *Comedic Shock & Panic*) with one-click **+ Add Combo**, conflict-free **Swap Face**, and a **4-Zone Facial Mixer**.
- **Tag Conflict & Contradiction Engine**: Multi-character-aware contradiction detection across mutually exclusive tags and color variants (e.g., `solo` + multi-character counts, `no_humans` clashes, opposing camera angles, conflicting eye/mouth/rating/censoring/time-of-day states) with one-click resolution (`Keep X only`).
- **Canonical Color Modifier Prefixer**: Apply any of 12 canonical Danbooru color prefixes (supporting compound colors like `light_blue_hair` and canonical mappings such as `blonde_hair`, `amber_eyes`, and `dark_skin`) directly to compatible garments, hair, eyes, wings, tails, backgrounds, and cosmetics.
- **Modular Negative Packs & Positive ↔ Negative Overlap Guard**:
  - **7 Modular Negative Packs**: *Baseline Quality*, *Anatomy & Hands*, *Anti-Censorship*, *Anti-3D / Realistic*, *Watermarks & UI*, *SFW Guard*, and *NSFW Guard*.
  - Live detection for exact, color-variant (`+black_bikini` vs `-bikini`), and rating/SFW-NSFW collisions with one-click resolution.
- **Custom Tags, Favorites & Configurable History**: Create and delete local custom tags, pin canonical or color-prefixed tags to Favorites, and set custom history limits (`1`–`200`) for recent tags and saved prompt snapshots.
- **Complete RFC-4180 CSV Exports**: One-click full or filtered CSV download from **Settings & Tools**, plus pre-generated offline CSVs in the repository root and `release/`.

---

## 3. Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `/` | Focus instant search from anywhere in the workspace |
| `Esc` | Clear and unfocus search (or close Settings & Tools modal) |
| `Click Row / Card` | Add or remove tag from the active positive prompt |
| `Click ⊘ Button` | Add or remove tag from the active negative prompt |
| `Click ⓘ Button` | Open the Tag Inspector drawer for definitions, color swatches & related tags |

---

## 4. Deploying on GitHub (Web & PC Desktop Releases)

### 1. Live Web Deployment via GitHub Pages
A pre-configured workflow is provided in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
1. Push this repository to GitHub on `main`.
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Every push to `main` runs `npm run audit:tags`, `npm run lint`, and `npm run build`, then publishes the live web app automatically.

### 2. Automated Windows `.exe` Release via GitHub Actions
A pre-configured release workflow is provided in [`.github/workflows/release.yml`](.github/workflows/release.yml).

Pushing a version tag (e.g., `v3.0.0`) automatically runs tag audits, compiles the app, packages it with Electron Builder, and publishes a GitHub Release containing:
- `Illustrious-Lexicon-Portable-3.0.0.exe` — Single-file portable executable (no install required)
- `Illustrious-Lexicon-Setup-3.0.0.exe` — Windows desktop installer
- `Illustrious-Lexicon-Standalone.html` & `Launch-Illustrious-Lexicon-PC.bat` — Zero-install offline desktop bundle
- `illustrious-lexicon-tags.csv` — Full 1,370 canonical tag database export

---

## 5. Local Build & Development

### Local Web Development
```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Audit canonical tag database (duplicates, Danbooru syntax, subcategories, relatedTags)
npm run audit:tags
npm run audit:tags -- --verbose

# Export database CSV
npm run export:csv

# Type-check with TypeScript
npm run lint

# Build web production bundle
npm run build
```

### Local Windows Release Build
```bash
# Install dependencies + Electron packaging tools (not required for web builds)
npm install
npm install --no-save electron@^34.0.0 electron-builder@^25.1.8

# Audit tags, export CSVs, build web bundle & single-file standalone HTML
npm run audit:tags
npm run build:standalone

# Package Windows Portable & Setup Executables (.exe) without code-signing certificates
CSC_IDENTITY_AUTO_DISCOVERY=false npx electron-builder --win portable nsis --publish never
```

---

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

[Apache-2.0](./LICENSE)
