# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

![Version](https://img.shields.io/badge/version-1.0.0-4f46e5)
![Tags](https://img.shields.io/badge/canonical_tags-821-06b6d4)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux%20%7C%20Web-0f172a)
![Syntax](https://img.shields.io/badge/booru_syntax-canonical__underscores-10b981)

**Illustrious Lexicon** is a fast, offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. It indexes **821 canonical Booru tags** across 6 domains and 34 subcategories using strict underscore formatting (`big_eyes`, `long_hair`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated positive and negative prompts without unwanted weight clutter.

---

## Key Features

### 1. Comprehensive 6-Domain SDXL Illustrious Taxonomy (821 Canonical Tags)
Organized in the exact canonical prompt ordering recommended for SDXL Illustrious models:
1. **01. Art Styles, Mediums & Meta Quality** — Quality & aesthetic triggers (`masterpiece`, `best_quality`, `very_awa`, `absurdres`, `newest`), source/medium styles (`official_art`, `anime_screencap`, `game_cg`, `cel_shading`, `impasto`, `watercolor_(medium)`), and color/visual effects (`chromatic_aberration`, `monochrome`, `spot_color`).
2. **02. Character Traits, Archetypes, Body & Hair** — Subject counts (`1girl`, `solo`, `2girls`, `3girls`, `multiple_girls`), archetypes & species (`gyaru`, `succubus`, `nun`, `nurse`, `office_lady`, `kunoichi`, `bunny_girl`, `cat_girl`, `fox_girl`, `wolf_girl`, `dark_elf`, `oni`, `mermaid`, `android`), body proportions & anatomy (`huge_breasts`, `wide_hips`, `thick_thighs`, `narrow_waist`, `curvy`, `muscular_female`), skin & surface marks (`tanlines`, `wet_skin`, `oily_skin`, `womb_tattoo`, `navel_piercing`, `hickey`, `beauty_mark`), hair cuts/bangs/colors, and fantasy wings/tails/horns.
3. **03. Face, Eyes & Expressions** — Eyebrow shapes, eye shapes & eyelids (`tareme`, `tsurime`, `jitome`, `sanpaku`, `v-shaped_eyebrows`, `troubled_eyebrows`, `raised_eyebrow`, `furrowed_brow`, `half-closed_eyes`, `rolling_eyes`, `eyeshadow`, `eyeliner`), pupils & iris colors (`slit_pupils`, `heart-shaped_pupils`, `star-shaped_pupils`, `white_pupils`, `sparkling_eyes`, `heterochromia`), mouth, lips, teeth & tongue (`parted_lips`, `puckered_lips`, `cat_mouth`, `wavy_mouth`, `lip_gloss`, `fang`, `shark_teeth`, `clenched_teeth`, `long_tongue`, `saliva_trail`, `drooling`), and blush, tears, sweat & emotion symbols (`light_blush`, `full-face_blush`, `nose_blush`, `streaming_tears`, `sweatdrop`, `flying_sweatdrops`, `anger_vein`, `spoken_heart`, `smug`, `smirk`, `seductive_smile`, `ahegao`, `torogao`, `afterglow`).
4. **04. Clothing, Lingerie, Materials & Fashion States** — Uniforms & formal wear (`serafuku`, `blazer`, `maid`, `evening_gown`, `wedding_dress`), traditional & fantasy (`kimono`, `miko`, `china_dress`, `bikini_armor`), swimwear & lingerie (`micro_bikini`, `slingshot_swimsuit`, `highleg_leotard`, `plugsuit`, `babydoll`, `garter_belt`, `crotchless_panties`), materials & fetish gear (`latex`, `shiny_clothes`, `vacuum-packed_clothes`, `reverse_bunnysuit`, `bondage`, `shibari`, `blindfold`, `collar`), suggestive states (`wet_clothes`, `see-through`, `clothing_aside`, `shirt_lift`, `shirt_tug`, `one_breast_out`), and legwear/accessories (`thighhighs`, `pantyhose`, `torn_thighhighs`, `stirrup_legwear`, `glasses_off`).
5. **05. Poses, Camera Angles, Gaze, Couple Interactions & Acts** — Framing (`cowboy_shot`, `portrait`, `extreme_close-up`, `face_focus`, `back_focus`, `hip_focus`), dynamic perspective (`from_above`, `from_below`, `dutch_angle`, `foreshortening`, `pov`), **Facial Angles, Head Tilts & Gaze** (`head_tilt`, `looking_at_viewer`, `eye_contact`, `looking_at_another`, `looking_back`, `looking_away`, `sideways_glance`, `profile`, `three-quarter_view`, `head_back`, `chin_rest`, `looking_over_eyewear`), stances (`contrapposto`, `sitting`, `all_fours`, `jack-o'_challenge`, `arched_back`), couple interactions (`hugging`, `hug_from_behind`, `kissing`, `french_kiss`, `kabedon`, `lap_pillow`, `princess_carry`, `breast_grab`, `ass_grab`, `leg_lock`), intimate & explicit acts, and lighting (`rim_lighting`, `tyndall_effect`, `backlighting`).
6. **06. Backgrounds, Environments & Props** — Studio backdrops (`simple_background`, `white_background`, `gradient_background`), sky/time/weather (`golden_hour`, `sunset`, `night_sky`, `cherry_blossoms`, `rain`), indoor & urban locations (`classroom`, `bedroom`, `on_bed`, `onsen`, `bathroom`, `swimming_pool`, `locker_room`, `cyberpunk_city`), and props (`katana`, `scythe`, `handgun`, `parasol`, `mirror`, `popsicle`).

### 2. Smart Prompt Composer & Workflow Tools
- **One-Click Comma-Separated Output**: Click any row or card to toggle a tag in your active prompt, then copy the assembled prompt in one click.
- **Auto-Sort by Illustrious Order**: Automatically orders your selected tags from Meta/Quality → Character → Face & Expressions → Clothing → Poses/Camera/Gaze → Environment.
- **Interactive Face & Expression Studio**: Includes **10 Built-In Composite Expression Presets** (*Smug Tease*, *Tsundere Pout*, *Shy & Flustered*, *Sultry Bedroom Gaze*, *Torogao Melting Ecstasy*, *Heavy Ahegao Climax*, *Yandere Obsession*, *Heartbroken Tears*, *Haughty Contempt / Gesugao*, *Comedic Shock & Panic*) with one-click **+ Add Combo** or **Swap Face** controls, custom expression preset saving, and a **4-Zone Facial Feature Mixer** (Brows/Eyelids, Pupils/Irises, Mouth/Tongue, Blush/Tears/Mood).
- **Tag Conflict & Contradiction Warnings**: Automatically flags mutually exclusive tags in your active prompt (e.g., `solo` + multi-character tags, `short_hair` + `very_long_hair`, `flat_chest` + `huge_breasts`, `completely_nude` + clothing items, `from_above` + `from_below`, `closed_eyes` + gaze tags, `closed_mouth` + open-mouth tags, `v-shaped_eyebrows` + `troubled_eyebrows` + `raised_eyebrows`, `facing_viewer` + `profile` + `facing_away`) with one-click resolution buttons (`Keep X only`).
- **Quick Color Modifier Prefixer**: Apply any of 12 canonical Danbooru color prefixes (`black_`, `white_`, `red_`, `blue_`, `pink_`, `purple_`, `yellow_`, `green_`, `silver_`, `brown_`, `aqua_`, `gold_`) to colorable clothing, swimwear, legwear, accessories, wings, tails, cosmetics (`eyeshadow`, `lipstick`), hair, or eyes directly in the Tag Inspector or Active Prompt Composer.
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
| `Click Row / Card` | Add or remove tag from the active positive prompt |
| `Click ⊘ Button` | Add or remove tag from the active negative prompt |

---

## Deploying on GitHub (Web & PC Desktop Releases)

This repository includes pre-configured **GitHub Actions workflows** for both live web hosting (**GitHub Pages**) and automated Windows desktop executable releases (**GitHub Releases**).

### 1. Live Web Deployment via GitHub Pages
A complete workflow is configured in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml):
1. Push this repository to GitHub (`main` or `master` branch).
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Every push to `main` will automatically type-check, build, and publish the live web app to `https://<your-username>.github.io/<repo-name>/`.

### 2. Automated Windows `.exe` & Standalone PC Release via GitHub Actions
A complete Windows packaging workflow is configured in [`.github/workflows/release.yml`](.github/workflows/release.yml).

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
