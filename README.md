<div align="center">

# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

[![Latest Release](https://img.shields.io/badge/release-v3.0.0-4f46e5?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![Canonical Tags](https://img.shields.io/badge/canonical_tags-1%2C267-06b6d4?style=for-the-badge)](./illustrious-lexicon-tags.csv)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Web%20%7C%20Standalone_HTML-0f172a?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![License](https://img.shields.io/badge/license-Apache_2.0-10b981?style=for-the-badge)](./LICENSE)

[**⬇ Download Windows `.exe` / Standalone Release**](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest) · [**📊 Browse 1,267-Tag CSV**](./illustrious-lexicon-tags.csv) · [**🗂 7-Domain Taxonomy**](#1-comprehensive-7-domain-sdxl-illustrious-taxonomy) · [**✨ Features**](#2-smart-prompt-composer--workflow-studios) · [**🛠 Build & Deploy**](#deploying-on-github-web--pc-desktop-releases)

</div>

---

**Illustrious Lexicon** is a fast, offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. It indexes **1,267 canonical Booru tags** across **7 domains** and **44 subcategories** using strict Danbooru underscore formatting (`big_eyes`, `long_hair`, `cat_ears`, `fox_tail`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated positive and negative prompts without unwanted weight clutter.

---

## 1. Comprehensive 7-Domain SDXL Illustrious Taxonomy

The database is structured in the exact canonical prompt ordering recommended for SDXL Illustrious models:

| # | Domain | Subcategories | Tags | Focus & Scope |
| :---: | :--- | :---: | :---: | :--- |
| **01** | **Art Styles, Mediums & Meta Quality** | 4 | **63** | Quality triggers (`masterpiece`, `best_quality`, `very_awa`, `absurdres`, `newest`), lineart, mediums, page layouts (`comic`, `4koma`), censor modes, and visual effects |
| **02** | **Character Traits, Archetypes, Body & Hair** | 6 | **201** | Subject counts (`1girl`, `solo`, `multiple_girls`), archetypes & professions, body proportions & anatomy, skin/tanlines/tattoos, hairstyles, bangs, and hair colors |
| **03** | **Species, Races & Demihuman Traits** | 6 | **233** | Kemonomimi/beastkin, fantasy races (elf, dark elf, dwarf, oni, succubus, vampire), monster girls, anthro/furry/scalie, ears, horns, wings, tails, and racial features |
| **04** | **Face, Eyes & Expressions** | 5 | **166** | Brows, eye shapes, eyelids, pupil geometry, iris colors, mouth & tongue shapes, blush, tears, emoticons (`^_^`, `>_<`, `:o`, `;d`), emotion symbols, and facial hair |
| **05** | **Clothing, Lingerie, Materials & Fashion States** | 10 | **290** | Uniforms, traditional/fantasy attire, tops, outerwear, dresses, skirts, swimwear, lingerie, prints & patterns, suggestive states, footwear, and accessories |
| **06** | **Poses, Camera Angles, Gaze & Interactions** | 9 | **213** | Framing & shot sizes, camera perspective & Dutch angles, gaze direction, body postures, couple interactions, sensual stances, gestures, and cinematic lighting |
| **07** | **Backgrounds, Environments & Props** | 4 | **101** | Studio & minimal backdrops, sky & weather, indoor/urban architecture, and handheld objects, weapons, and accessories |
| | **Total Indexed Lexicon** | **44** | **1,267** | **Complete database export available in [illustrious-lexicon-tags.csv](./illustrious-lexicon-tags.csv)** |

---

## 2. Smart Prompt Composer & Workflow Studios

- **Decluttered Collapsible Workspace**: Toggle the Left Taxonomy Sidebar with `PanelLeft`, expand/collapse the **Filters & A–Z** drawer, and keep high-footprint studios, modular negative packs, conflict alerts, and the tag inspector collapsed by default to keep the main tag table above the fold.
- **Unified Prompt Workspace (Interactive Chips | Raw Text)**: Seamlessly toggle between clickable interactive tag chips and a clean, raw comma-separated prompt string for both Positive and Negative prompts.
- **Auto-Sort by Illustrious Order**: Automatically arranges selected tags following the model's optimal domain hierarchy: Meta/Quality → Character → Species & Races → Face & Expressions → Clothing → Poses/Camera/Gaze → Environment.
- **Dedicated Species, Race & Trait Studio**: Includes **12 Composite Lineage Presets** (*Silver-Haired High Elf*, *Kitsune Shrine Maiden*, *Dragon Demihuman Warrior*, *Dark Elf Infiltrator*, *Catgirl Maid*, *Vampire Aristocrat*, *Succubus Temptress*, *Deep-Sea Siren*, *Demon Oni Berserker*, *Wolfkin Huntress*, *Anthro Snow Leopard*, *Slime-Kin Alchemist*) plus a **4-Zone Species Trait Mixer**.
- **Interactive Face & Expression Studio**: Features **10 Built-In Composite Expression Presets** (*Smug Tease*, *Tsundere Pout*, *Shy & Flustered*, *Sultry Bedroom Gaze*, *Torogao Melting Ecstasy*, *Heavy Ahegao Climax*, *Yandere Obsession*, *Heartbroken Tears*, *Haughty Contempt*, *Comedic Shock & Panic*) with one-click **+ Add Combo** / **Swap Face** and a **4-Zone Facial Mixer**.
- **Tag Conflict & Contradiction Warnings**: Live contradiction detection for mutually exclusive tags (e.g., `solo` + multi-character counts, opposite camera angles, conflicting eye states like `closed_eyes` vs gaze tags, closed vs open mouths) with one-click resolution (`Keep X only`).
- **Quick Color Modifier Prefixer**: Apply any of 12 canonical Booru color prefixes directly to compatible garments, hair, eyes, wings, tails, and cosmetics.
- **Modular Negative Packs & Overlap Guard**:
  - **7 Modular Negative Packs**: *Baseline Quality*, *Anatomy & Hands*, *Anti-Censorship*, *Anti-3D / Realistic*, *Watermarks & UI*, *SFW Guard*, and *NSFW Guard*.
  - Live detection for positive/negative prompt collisions with one-click resolution.
- **Complete Database CSV Export**:
  - 1-click **Export CSV (1,267)** download button built into the application.
  - Pre-built offline CSV exports included in root and release directories (`illustrious-lexicon-tags.csv`).
- **Favorites & Configurable History**: Pin frequent tags to Favorites and set custom history limits (`1`–`200`) for recent tags and copied prompt bundles.
- **Display & Formatting Preferences**: Adjustable font scaling (`85%`–`130%`), row/card density presets, table/grid column layouts, WebUI parenthesis escaping (`\(` and `\)`), and trailing comma formatting.

---

## 3. Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `/` | Focus instant search from anywhere in the app |
| `Esc` | Clear and unfocus search |
| `Click Row / Card` | Add or remove tag from the active positive prompt |
| `Click ⊘ Button` | Add or remove tag from the active negative prompt |

---

## 4. Deploying on GitHub (Web & PC Desktop Releases)

### 1. Live Web Deployment via GitHub Pages
A pre-configured workflow is provided in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
1. Push this repository to GitHub on `main`.
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Pushes to `main` will build and publish the live web app automatically.

### 2. Automated Windows `.exe` Release via GitHub Actions
A pre-configured release workflow is provided in [`.github/workflows/release.yml`](.github/workflows/release.yml).

Pushing a version tag (`v3.0.0`) automatically packages the app with Electron Builder and creates a GitHub Release containing:
- `Illustrious-Lexicon-Portable-3.0.0.exe` — Single-file portable executable (no install required)
- `Illustrious-Lexicon-Setup-3.0.0.exe` — Windows desktop installer
- `Illustrious-Lexicon-Standalone.html` & `Launch-Illustrious-Lexicon-PC.bat` — Zero-install offline desktop bundle
- `illustrious-lexicon-tags.csv` — Full 1,267 canonical tag database export

---

## 5. Local Build & Development

### Local Web Development
```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Export database CSV
npm run export:csv

# Type-check with TypeScript
npm run lint

# Build web production bundle
npm run build
```

### Local Windows Release Build
```bash
# Build standalone offline bundle + CSV
npm run build:standalone

# Build Windows Portable & Setup Executables (.exe)
npm run dist:win
```

---

## License

[Apache-2.0](./LICENSE)
