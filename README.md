# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

![Version](https://img.shields.io/badge/version-1.0.0-4f46e5)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Web-0f172a)
![Syntax](https://img.shields.io/badge/booru_syntax-canonical__underscores-10b981)

**Illustrious Lexicon** is a fast, offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. Every entry uses canonical underscore formatting (`big_eyes`, `long_hair`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated prompts without unwanted numeric weight clutter.

---

## Key Features

### 1. Comprehensive 5-Domain SDXL Illustrious Taxonomy
Organized in the exact canonical prompt ordering recommended for SDXL Illustrious models:
1. **Meta, Quality & Art Style** — Quality & aesthetic triggers (`masterpiece`, `best_quality`, `absurdres`, `newest`), anime era tokens (`year_2024`, `retro_artstyle`), rendering mediums (`cel_shading`, `impasto`, `watercolor_(medium)`), and visual effects (`chromatic_aberration`, `depth_of_field`, `lens_flare`).
2. **Character, Hair, Eyes & Expressions** — Subject count (`1girl`, `solo`, `multiple_girls`), hair lengths/cuts/bangs (`very_long_hair`, `twintails`, `hime_cut`, `blunt_bangs`, `ahoge`), eye details (`slit_pupils`, `heterochromia`, `sparkling_eyes`), facial expressions (`smug`, `tsundere`, `ahegao`, `parted_lips`, `heavy_breathing`), body proportions & anatomy (`huge_breasts`, `wide_hips`, `thick_thighs`, `toned_female`), archetypes & occupations (`gyaru`, `succubus`, `nun`, `nurse`, `office_lady`, `kunoichi`, `cow_girl`, `dark_elf`), and surface details (`tanlines`, `wet_skin`, `wet_hair`, `womb_tattoo`, `navel_piercing`, `glasses_off`).
3. **Clothing, Swimwear, Lingerie & Materials** — School & formal attire (`serafuku`, `blazer`, `maid`), traditional wear (`kimono`, `miko`, `china_dress`), swimwear & lingerie (`micro_bikini`, `slingshot_swimsuit`, `competetive_swimsuit`, `babydoll`, `garter_belt`), legwear (`thighhighs`, `pantyhose`, `torn_thighhighs`, `stirrup_legwear`), materials & fetish gear (`latex`, `shiny_clothes`, `vacuum-packed_clothes`, `reverse_bunnysuit`, `blindfold`, `handcuffs`), and suggestive clothing states (`wet_clothes`, `see-through_shirt`, `open_shirt`, `shirt_tug`, `panties_aside`).
4. **Poses, Camera Angles, Lighting & Couple Interactions** — Framing (`cowboy_shot`, `portrait`, `full_body`), dynamic perspective (`from_above`, `from_below`, `dutch_angle`, `foreshortening`), full-body stances (`contrapposto`, `sitting`, `all_fours`, `jack-o'_challenge`, `arched_back`), couple & multi-character interactions (`hugging`, `hug_from_behind`, `kissing`, `french_kiss`, `kabedon`, `lap_pillow`, `holding_hands`, `breast_to_breast`, `princess_carry`), explicit acts & positions, and atmospheric lighting (`rim_lighting`, `tyndall_effect`, `backlighting`).
5. **Backgrounds, Environments & Props** — Studio backdrops (`simple_background`, `white_background`), sky/time/weather (`golden_hour`, `starry_sky`, `cherry_blossoms`, `rain`), indoor & urban locations (`classroom`, `bedroom`, `onsen`, `cyberpunk_city`), and handheld props (`katana`, `parasol`, `teacup`).

### 2. Smart Prompt Composer & Workflow Tools
- **One-Click Comma-Separated Output**: Click any row or card to toggle a tag in your active prompt, then copy the assembled prompt in one click.
- **Auto-Sort by Illustrious Order**: Automatically orders your selected tags from Meta/Quality → Character → Clothing → Poses/Camera → Environment.
- **Tag Conflict & Contradiction Warnings**: Automatically flags mutually exclusive tags in your active prompt (e.g., `1girl` + `2girls`, `short_hair` + `very_long_hair`, `flat_chest` + `huge_breasts`, `completely_nude` + clothing items, `from_above` + `from_below`, `standing` + `sitting` + `lying`, or conflicting hair/eye colors) with one-click resolution buttons (`Keep X only`).
- **Quick Color Modifier Prefixer**: Apply any of 12 canonical Danbooru color prefixes (`black_`, `white_`, `red_`, `blue_`, `pink_`, `purple_`, `yellow_`, `green_`, `silver_`, `brown_`, `aqua_`, `gold_`) to colorable clothing, swimwear, legwear, accessories, hair, or eyes directly in the Tag Inspector or Active Prompt Composer.
- **Interactive Negative Prompt Studio & Modular Negative Packs**:
  - Toggle individual negative tags, send any main lexicon tag directly to your negative prompt (`⊘` / `- Neg`), or save custom negative presets.
  - Automatic **Positive ↔ Negative Overlap & Guard Conflict Detection** with one-click resolution buttons.
  - **7 Modular Negative Tag Packs**: *Baseline Quality*, *Anatomy & Hands*, *Anti-Censorship*, *Anti-3D / Realistic*, *Watermarks & UI*, *SFW Guard* (blocks explicit/NSFW elements), and *NSFW Guard* (blocks safe ratings, unwanted clothing/underwear layers, pasties, and censorship).
- **Favorites & Adjustable History Cap**: Star your go-to tags into a persistent Favorites list and configure a custom cap (`1`–`200`) for recently used tags and copied prompts.
- **Customizable Display & Output Settings**: Adjust tag text size (`Small`, `Default`, `Large`, `X-Large`), global UI font scale (`85%`–`130%`), row/card density, grid column count, WebUI parenthesis escaping (`\(` and `\)`), and trailing comma formatting.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `/` | Focus the instant search bar from anywhere |
| `Esc` | Clear and unfocus the search bar |
| `Click Row / Card` | Add or remove tag from the active prompt |

---

## Running & Building for PC (Windows Executable & Standalone Release)

This repository includes two ways to package and distribute **Illustrious Lexicon** as a Windows PC desktop application for your GitHub Releases:

### Option A: Automated GitHub Release (`.exe` via GitHub Actions)
A complete GitHub Actions workflow is pre-configured in [`.github/workflows/release.yml`](.github/workflows/release.yml).

Whenever you push a version tag (such as `v1.0.0`) to GitHub, GitHub Actions spins up a Windows runner, compiles the application with Electron Builder, and automatically publishes a GitHub Release containing:
- `Illustrious-Lexicon-Portable-1.0.0.exe` — Single-file portable Windows executable (no installation required)
- `Illustrious-Lexicon-Setup-1.0.0.exe` — Standard Windows NSIS desktop installer with Start Menu & Desktop shortcuts
- `Illustrious-Lexicon-Standalone.html` & `Launch-Illustrious-Lexicon-PC.bat` — Zero-install lightweight offline desktop bundle

To trigger your first GitHub Release:
```bash
git add .
git commit -m "Release v1.0.0"
git tag v1.0.0
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
   ```
   The compiled `.exe` executables will be output to the `./release/` directory:
   - `release/Illustrious-Lexicon-Portable-1.0.0.exe`
   - `release/Illustrious-Lexicon-Setup-1.0.0.exe`

### Option C: Build the Zero-Install Standalone PC Package
If you want an ultra-lightweight (~700 KB) offline desktop bundle that runs immediately on any Windows PC without installing Electron:
```bash
npm run build:standalone
```
This outputs two files into `./release/`:
- `release/Illustrious-Lexicon-Standalone.html` — All HTML, CSS, and JavaScript compiled into a single offline file.
- `release/Launch-Illustrious-Lexicon-PC.bat` — Double-click on Windows to open the lexicon in a dedicated, frameless native desktop window.

---

## Local Web Development

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Type-check with TypeScript
npm run lint

# Build production bundle
npm run build
```

---

## License

Apache-2.0
