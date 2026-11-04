# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

![Version](https://img.shields.io/badge/version-2.0.0-4f46e5)
![Tags](https://img.shields.io/badge/canonical_tags-1089-06b6d4)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Web-0f172a)
![Syntax](https://img.shields.io/badge/booru_syntax-canonical__underscores-10b981)

**Illustrious Lexicon** is a fast, offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. It indexes **1,089 canonical Booru tags** across 7 domains and 38 subcategories using strict Danbooru underscore formatting (`big_eyes`, `long_hair`, `cat_ears`, `fox_tail`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated positive and negative prompts without unwanted weight clutter.

---

## Key Features

### 1. Comprehensive 7-Domain SDXL Illustrious Taxonomy (1,089 Canonical Tags)
Organized in the exact canonical prompt ordering recommended for SDXL Illustrious models:
1. **01. Art Styles, Mediums & Meta Quality** (57 tags) — Quality & aesthetic triggers (`masterpiece`, `best_quality`, `very_awa`, `absurdres`, `newest`), source/medium styles (`official_art`, `anime_screencap`, `game_cg`, `cel_shading`, `impasto`, `watercolor_(medium)`), and color/visual effects (`chromatic_aber…169 tags) — Subject counts (`1girl`, `solo`, `2girls`, `3girls`, `multiple_girls`), archetypes (`gyaru`, `succubus`, `nun`, `nurse`, `office_lady`, `kunoichi`, `miko`, `maid`), body proportions & anatomy (`huge_breasts`, `wide_hips`, `thick_thighs`, `narrow_waist`, `curvy`, `muscular_female`), skin & surface marks (`tanlines`, `wet_skin`, `oily_skin`, `womb_tattoo`, `navel_piercing`, `hickey`, `beauty_mark`), and hair cuts/bangs/colors.
3. **03. Species, Races & Demihuman Traits** (233 tags) —

### 2. Smart Prompt Composer & Workflow Studios
- **One-Click Comma-Separated Output**: Click any row or card to toggle a tag in your active prompt, then copy the assembled prompt in one click.
- **Auto-Sort by Illustrious Order**: Automatically orders your selected tags from Meta/Quality → Character → Species & Races → Face & Expressions → Clothing → Poses/Camera/Gaze → Environment.
- **Dedicated Species, Race & Trait Studio**: Includes **12 Composite Lineage Presets** (*Silver-Haired High Elf*…xicon-tags.csv` and `release/illustrious-lexicon-tags.csv`.
- **Favorites & Adjustable History Cap**: Star your go-to tags into a persistent Favorites list and configure a custom cap (`1`–`200`) for recently used tags and copied prompts.
- **Customizable Display & Output Settings**: Adjust tag text size (`Small`, `Default`, `Large`, `X-Large`), global UI font scale (`85%`–`130%`), row/card density, grid column count, WebUI parenthesis escaping (`\(` and `\)`), and trailing comma formatting.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `/` | Focus the instant search bar from anywhere |
| `Esc` | Clear and unfocus the search bar |
| `Click Row / Card` | Add or remove tag from the active positive prompt |
| `Click ⊘ Button` | Add or remove tag from the active negative prompt |

---

## Deploying on GitHub (Web & PC Desktop Releases)

This repository includes pre-configured **GitHub Actions workflows** for both live web hosting (**GitHub Pages**) and automated Windows desktop executable releases (**GitHub Releases**).

### 1. Live Web Deployment via GitHub Pages
A complete workflow is configured in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
1. Push this repository to GitHub (`main` or `master` branch).
2. In your GitHub repository, open **Set…ectron Builder, and automatically publishes a GitHub Release containing:
- `Illustrious-Lexicon-Portable-2.0.0.exe` — Single-file portable Windows executable (no installation required)
- `Illustrious-Lexicon-Setup-2.0.0.exe` — Standard Windows NSIS desktop installer with Start Menu & Desktop shortcuts
- `Illustrious-Lexicon-Standalone.html` & `Launch-Illustrious-Lexicon-PC.bat` — Zero-install lightweight offline desktop bundle
- `illustrious-lexicon-tags.csv` — Complete canonical database export

To trigger a GitHub Release:
```bash
git add .
git commit -m "Release v2.0.0"
git tag v2.0.0
git push origin main --tags
```
*(You can also trigger the build manually at any time from your repository's **Actions → Build & Publish PC Release (.exe) → Run workflow** button.)*

### Option B: Build the Windows `.exe` Locally on Your PC
1. Install Node.js (v20 or v22 LTS recommended).
2. Install project dependencies plus Electron packaging tools:
   ```bash
   npm install
   npm install --no-save electron electron-builder
   ```
3. Build the Windows Portable `.exe` and Setup Installer `.exe`:
   ```bash
   npm run dist:win
…This outputs three files into `./release/`:
- `release/Illustrious-Lexicon-Standalone.html` — All HTML, CSS, and JavaScript compiled into a single offline file.
- `release/Launch-Illustrious-Lexicon-PC.bat` — Double-click on Windows to open the lexicon in a dedicated, frameless native desktop window.
- `release/illustrious-lexicon-tags.csv` — Full database CSV export.

---

## Local Web Development

```bash
…npm run lint

# Build production bundle
npm run build
```

---

## License

Apache-2.0
