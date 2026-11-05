<div align="center">

# Illustrious Lexicon

**High-Density Booru Tag Index & One-Click Prompt Composer for SDXL Illustrious Anime Diffusion Models**

[![Latest Release](https://img.shields.io/badge/release-v2.0.0-4f46e5?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![Canonical Tags](https://img.shields.io/badge/canonical_tags-1%2C267-06b6d4?style=for-the-badge)](./illustrious-lexicon-tags.csv)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Web%20%7C%20Standalone_HTML-0f172a?style=for-the-badge)](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest)
[![License](https://img.shields.io/badge/license-Apache_2.0-10b981?style=for-the-badge)](./LICENSE)

[**⬇ Download Windows `.exe` / Standalone Release**](https://github.com/MeanGreenz/Booru-Lexicon/releases/latest) · [**📊 Browse 1,267-Tag CSV**](./illustrious-lexicon-tags.csv) · [**🗂 7-Domain Taxonomy**](#1-comprehensive-7-domain-sdxl-illustrious-taxonomy-1267-canonical-tags) · [**✨ Features**](#2-smart-prompt-composer--workflow-studios) · [**🛠 Build & Deploy**](#deploying-on-github-web--pc-desktop-releases)

</div>

---

**Illustrious Lexicon** is a fast, offline-capable desktop and web reference utility built specifically for **SDXL Illustrious** and Danbooru-trained anime diffusion models. It indexes **1,267 canonical Booru tags** across **7 domains** and **44 subcategories** using strict Danbooru underscore formatting (`big_eyes`, `long_hair`, `cat_ears`, `fox_tail`, `sailor_collar`, `dutch_angle`, `best_quality`) and assembles clean, comma-separated positive and negative prompts without unwanted weight clutter.

| # | Domain | Subcategories | Canonical Tags | Prompt Order Priority |
| :---: | :--- | :---: | :---: | :--- |
| **01** | **Art Styles, Mediums & Meta Quality** | 4 | **63** | `1st` — Quality triggers, era, medium, page layout |
| **02** | **Character Traits, Archetypes, Body & Hair** | 6 | **201** | `2nd` — Subject count, occupation, body, hair, bangs |
| **03** | **Species, Races & Demihuman Traits** | 6 | **233** | `3rd` — Kemonomimi, elf/demon/monster, horns, wings, tails |
| **04** | **Face, Eyes & Expressions** | 5 | **166** | `4th` — Brows, eye shapes, pupils, mouth, blush, facial hair |
| **05** | **Clothing, Lingerie, Materials & Fashion States** | 10 | **290** | `5th` — Outfits, swimwear, lingerie, patterns, accessories |
| **06** | **Poses, Camera Angles, Gaze & Interactions** | 9 | **213** | `6th` — Framing, perspective, gaze, stances, gestures, lighting |
| **07** | **Backgrounds, Environments & Props** | 4 | **101** | `7th` — Studio backdrops, sky/weather, architecture, props |
| | **Total Indexed Lexicon** | **44** | **1,267** | **Strict Canonical Danbooru Underscore Syntax** |

---

## Key Features

### 1. Comprehensive 7-Domain SDXL Illustrious Taxonomy (1,267 Canonical Tags)
Organized in the exact canonical prompt ordering recommended for SDXL Illustrious models:
1. **01. Art Styles, Mediums & Meta Quality** (63 tags) — Quality & aesthetic triggers (`masterpiece`, `best_quality`, `very_awa`, `absurdres`, `newest`), source/medium styles (`official_art`, `anime_screencap`, `game_cg`, `cel_shading`, `impasto`, `watercolor_(medium)`), page layout (`comic`, `4koma`), censor states (`censored`, `bar_censor`, `mosaic_censoring`, `heart_censor`), and color/visual effects (`chromatic_aberration`, `monochrome`, `spot_color`, `sparkle`).
2. **02. Character Traits, Archetypes, Body & Hair** (201 tags) — Subject counts (`1girl`, `solo`, `2girls`, `3girls`, `4girls`, `5girls`, `6+girls`, `multiple_girls`, `no_humans`), archetypes (`gyaru`, `succubus`, `nun`, `nurse`, `office_lady`, `kunoichi`, `miko`, `maid`, `knight`, `princess`, `samurai`, `waitress`, `police`, `teacher`), body proportions & anatomy (`huge_breasts`, `wide_hips`, `thick_thighs`, `narrow_waist`, `curvy`, `muscular`, `muscular_female`, `fingernails`, `long_fingernails`), skin & surface marks (`tanlines`, `wet_skin`, `oily_skin`, `womb_tattoo`, `navel_piercing`, `hickey`, `beauty_mark`, `nail_polish`), and hair cuts/bangs/colors (`twin_drills`, `side_braid`, `hair_over_eyes`, `v-bangs`, `colored_tips`).
3. **03. Species, Races & Demihuman Traits** (233 tags) —
   - **Kemonomimi & Beastkin**: `cat_ears`, `cat_tail`, `fox_ears`, `fox_tail`, `wolf_ears`, `wolf_tail`, `dog_ears`, `rabbit_ears`, `bear_ears`, `cow_horns`, `horse_tail`, `mouse_ears`, `tanuki_ears`.
   - **Fantasy Races & Demihumans**: `elf`, `dark_elf`, `dwarf`, `drow`, `halfling`, `orc`, `goblin`, `oni`, `vampire`, `succubus`, `mermaid`, `harpy`, `centaur`, `slime_girl`, `arachne`, `lamia`, `dryad`.
   - **Monster Girls & Exotic Hybrids**: `dragon_girl`, `demon_girl`, `angel`, `valkyrie`, `gargoyle`, `manticore`, `chimera`, `automaton`, `cyborg`, `doll_joints`.
   - **Anthro, Furry & Scalie**: `furry`, `anthro`, `kemono`, `scalie`, `furry_female`, `furry_male`, `feral`, `snout`, `animal_hands`, `pawpads`, `digitigrade`, `plantigrade`, `claws`, `whiskers`.
   - **Ears, Horns, Wings & Tails**: `pointy_ears`, `demon_horns`, `dragon_horns`, `ram_horns`, `bat_wings`, `feathered_wings`, `dragon_wings`, `devil_tail`, `dragon_tail`, `fluffy_tail`, `multiple_tails`, `nine-tails`.
   - **Exotic Skin, Scales & Racial Anatomy**: `dark_skin`, `pale_skin`, `blue_skin`, `green_skin`, `red_skin`, `purple_skin`, `scales`, `dappled_skin`, `heterochromia`, `slit_pupils`, `sharp_teeth`.
4. **04. Face, Eyes & Expressions** (166 tags) — Eyebrow shapes, eye shapes & eyelids (`tareme`, `tsurime`, `jitome`, `sanpaku`, `v-shaped_eyebrows`, `troubled_eyebrows`, `raised_eyebrow`, `furrowed_brow`, `half-closed_eyes`, `covered_eyes`, `rolling_eyes`, `eyeshadow`, `eyeliner`), pupils & iris colors (`slit_pupils`, `heart-shaped_pupils`, `star-shaped_pupils`, `white_pupils`, `sparkling_eyes`, `heterochromia`, `grey_eyes`, `white_eyes`, `extra_eyes`), mouth, lips, teeth & tongue (`parted_lips`, `puckered_lips`, `cat_mouth`, `wavy_mouth`, `:o`, `;d`, `lip_gloss`, `fang`, `shark_teeth`, `clenched_teeth`, `long_tongue`, `saliva_trail`, `drooling`), blush, tears, sweat & emotion symbols (`^_^`, `>_<`, `light_blush`, `full-face_blush`, `nose_blush`, `nosebleed`, `streaming_tears`, `sweatdrop`, `flying_sweatdrops`, `anger_vein`, `heart`, `spoken_heart`, `musical_note`, `spoken_ellipsis`, `smug`, `smirk`, `seductive_smile`, `ahegao`, `torogao`, `afterglow`), and **Facial Hair** (`facial_hair`, `beard`, `mustache`, `stubble`, `goatee`, `sideburns`).
5. **05. Clothing, Lingerie, Materials & Fashion States** (290 tags) — Uniforms & formal wear (`serafuku`, `blazer`, `maid`, `evening_gown`, `wedding_dress`), traditional & fantasy (`kimono`, `miko`, `china_dress`, `bikini_armor`), tops & outerwear (`shirt`, `white_shirt`, `blouse`, `dress_shirt`, `camisole`, `tube_top`, `halterneck`, `strapless`, `open_shirt`, `jacket`, `open_jacket`, `coat`, `cloak`, `hood`, `hood_up`), swimwear & lingerie (`swimsuit`, `underwear`, `bikini_top`, `bikini_bottom`, `micro_bikini`, `slingshot_swimsuit`, `highleg_leotard`, `plugsuit`, `babydoll`, `chemise`, `negligee`, `nightgown`, `pajamas`, `garter_belt`, `crotchless_panties`), materials & fetish gear (`latex`, `shiny_clothes`, `vacuum-packed_clothes`, `reverse_bunnysuit`, `bondage`, `shibari`, `blindfold`, `collar`), suggestive states (`wet_clothes`, `see-through`, `clothing_aside`, `strap_slip`, `clothing_cutout`, `shoulder_cutout`, `back_cutout`, `shirt_lift`, `shirt_tug`, `one_breast_out`), **Prints & Patterns** (`plaid`, `striped`, `polka_dot`, `argyle`, `checkered`, `lace`, `animal_print`, `floral_print`), and legwear/accessories (`socks`, `leggings`, `shoes`, `thighhighs`, `pantyhose`, `torn_thighhighs`, `stirrup_legwear`, `hat`, `crown`, `tiara`, `bow`, `ribbon`, `jewelry`, `necklace`, `hair_tubes`, `scrunchie`).
6. **06. Poses, Camera Angles, Gaze, Couple Interactions & Acts** (213 tags) — Framing (`cowboy_shot`, `portrait`, `extreme_close-up`, `head_out_of_frame`, `face_focus`, `back_focus`, `hip_focus`), dynamic perspective (`from_above`, `from_below`, `dutch_angle`, `foreshortening`, `pov`), **Facial Angles, Head Tilts & Gaze** (`facing_viewer`, `head_tilt`, `looking_at_viewer`, `eye_contact`, `looking_at_another`, `looking_back`, `looking_away`, `sideways_glance`, `profile`, `three-quarter_view`, `head_back`, `chin_rest`, `looking_over_eyewear`), stances (`contrapposto`, `sitting`, `on_chair`, `against_wall`, `bent_over`, `on_side`, `all_fours`, `jack-o'_challenge`, `arched_back`, `flexing`, `shrugging`), hand gestures (`hand_on_own_hip`, `hands_on_own_hips`, `hand_up`, `arm_up`, `own_hands_together`, `hand_in_pocket`, `thumbs_up`, `double_v`), couple interactions, intimate & explicit acts, and lighting (`rim_lighting`, `tyndall_effect`, `backlighting`, `spotlight`, `blurry_background`, `emphasis_lines`).
7. **07. Backgrounds, Environments & Props** (101 tags) — Studio backdrops (`simple_background`, `white_background`, `gradient_background`), sky/time/weather (`sky`, `day`, `sun`, `sunrise`, `sunset`, `golden_hour`, `cloudy_sky`, `moon`, `snowing`, `petals`, `tree`, `grass`, `water`, `fog`, `lightning`, `cherry_blossoms`, `rain`), indoor & urban locations (`street`, `building`, `classroom`, `bedroom`, `bed`, `chair`, `couch`, `door`, `bathtub`, `showering`, `shower_(place)`, `stage`, `onsen`, `bathroom`, `swimming_pool`, `locker_room`, `cyberpunk_city`), and props (`holding`, `flower`, `weapon`, `gun`, `wand`, `bow_(weapon)`, `shield`, `microphone`, `bag`, `backpack`, `food`, `katana`, `scythe`, `handgun`, `parasol`, `mirror`, `popsicle`).

### 2. Smart Prompt Composer & Workflow Studios
- **Decluttered Collapsible Workspace**: Toggle the Left Taxonomy Sidebar (`PanelLeft`), expand/collapse the **Filters & A–Z** drawer, and keep high-footprint studios (**Species, Race & Trait Studio** and **Face & Expression Studio**), **Negative Packs**, **Conflict Alerts**, and the **Tag Inspector** collapsed by default so the main tag table stays immediately above the fold.
- **Unified Prompt Workspace (Interactive Chips | Raw Text)**: Switch seamlessly between interactive clickable tag chips and raw comma-separated prompt strings inside a single compact output box for both Positive and Negative prompts.
- **Auto-Sort by Illustrious Order**: Automatically orders your selected tags from Meta/Quality → Character → Species & Races → Face & Expressions → Clothing → Poses/Camera/Gaze → Environment.
- **Dedicated Species, Race & Trait Studio**: Includes **12 Composite Lineage Presets** (*Silver-Haired High Elf*, *Kitsune Shrine Maiden*, *Dragon Demihuman Warrior*, *Dark Elf Infiltrator*, *Catgirl Maid*, *Vampire Aristocrat*, *Succubus Temptress*, *Deep-Sea Siren / Mermaid*, *Demon Oni Berserker*, *Wolfkin Huntress*, *Anthro Snow Leopard*, *Slime-Kin Alchemist*) plus a **4-Zone Species Trait Mixer** (Lineage & Ears, Horns & Wings, Tails & Fur, Skin & Demihuman Details).
- **Interactive Face & Expression Studio**: Includes **10 Built-In Composite Expression Presets** (*Smug Tease*, *Tsundere Pout*, *Shy & Flustered*, *Sultry Bedroom Gaze*, *Torogao Melting Ecstasy*, *Heavy Ahegao Climax*, *Yandere Obsession*, *Heartbroken Tears*, *Haughty Contempt / Gesugao*, *Comedic Shock & Panic*) with one-click **+ Add Combo** or **Swap Face** controls, custom expression preset saving, and a **4-Zone Facial Feature Mixer** (Brows/Eyelids, Pupils/Irises, Mouth/Tongue, Blush/Tears/Mood).
- **Tag Conflict & Contradiction Warnings**: Automatically flags mutually exclusive tags in your active prompt (e.g., `solo` + multi-character tags, `short_hair` + `very_long_hair`, `flat_chest` + `huge_breasts`, `completely_nude` + clothing items, `from_above` + `from_below`, `closed_eyes` / `>_<` / `^_^` + gaze tags, `closed_mouth` + open-mouth tags, `facing_viewer` + `profile` + `facing_away`) with one-click resolution buttons (`Keep X only`).
- **Quick Color Modifier Prefixer**: Apply any of 12 canonical Danbooru color prefixes (`black_`, `white_`, `red_`, `blue_`, `pink_`, `purple_`, `yellow_`, `green_`, `silver_`, `brown_`, `aqua_`, `gold_`) to colorable clothing, swimwear, legwear, accessories, wings, tails, cosmetics (`eyeshadow`, `lipstick`), hair, or eyes directly in the Tag Inspector or Active Prompt Composer.
- **Interactive Negative Prompt Studio & Modular Negative Packs**:
  - Toggle individual negative tags, send any main lexicon tag directly to your negative prompt (`⊘` / `- Neg`), or save custom negative presets.
  - Automatic **Positive ↔ Negative Overlap & Guard Conflict Detection** with one-click resolution buttons.
  - **7 Modular Negative Tag Packs**: *Baseline Quality*, *Anatomy & Hands*, *Anti-Censorship*, *Anti-3D / Realistic*, *Watermarks & UI*, *SFW Guard* (blocks explicit/NSFW elements), and *NSFW Guard* (blocks safe ratings, unwanted clothing/underwear layers, pasties, and censorship).
- **Complete Database CSV Export**:
  - 1-click **Export CSV (1,267)** button in the sidebar utilities to download an RFC-4180 UTF-8 CSV with all tags, descriptions, aliases, related tags, and model notes.
  - Pre-built CSV files included in `illustrious-lexicon-tags.csv` and `release/illustrious-lexicon-tags.csv`.
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

Whenever you push a version tag (such as `v2.0.0`) to GitHub, GitHub Actions spins up a Windows runner, compiles the application with Electron Builder, and automatically publishes a GitHub Release containing:
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
   ```
   The compiled `.exe` executables will be output to the `./release/` directory:
   - `release/Illustrious-Lexicon-Portable-2.0.0.exe`
   - `release/Illustrious-Lexicon-Setup-2.0.0.exe`

### Option C: Build the Zero-Install Standalone PC Package & CSV
If you want an ultra-lightweight offline desktop bundle that runs immediately on any Windows PC without installing Electron:
```bash
npm run build:standalone
```
This outputs three files into `./release/`:
- `release/Illustrious-Lexicon-Standalone.html` — All HTML, CSS, and JavaScript compiled into a single offline file.
- `release/Launch-Illustrious-Lexicon-PC.bat` — Double-click on Windows to open the lexicon in a dedicated, frameless native desktop window.
- `release/illustrious-lexicon-tags.csv` — Full database CSV export.

---

## Local Web Development

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Export database CSV
npm run export:csv

# Type-check with TypeScript
npm run lint

# Build production bundle
npm run build
```

---

## License

Apache-2.0
