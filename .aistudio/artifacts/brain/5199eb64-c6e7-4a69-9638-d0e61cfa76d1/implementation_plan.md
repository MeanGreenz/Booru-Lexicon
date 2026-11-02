# Illustrious Lexicon — Phase 3: Interactive Negative Prompt Builder & Modular Negative Library

## 1. Overview
Upgrade the **Negatives** tab from a static preset viewer into a full **Interactive Negative Prompt Builder & Modular Tag Studio** tailored for **SDXL Illustrious** checkpoints. Users will be able to assemble, toggle, and copy an active negative prompt token-by-token, mix and match modular negative tag packs, send any tag from the main lexicon directly into the negative prompt, save custom negative presets, and automatically detect accidental overlap between their positive and negative prompts.

---

## 2. Planned Features & Workflow Enhancements

### A. Interactive Negative Prompt Builder (`Negatives` Tab)
- **Active Negative Prompt Output Box**:
  - Live comma-separated negative prompt preview formatted with canonical underscores (respecting the user's `Escape Tag Parentheses` and `Append Trailing Comma` display settings).
  - One-click **Copy Negative Prompt** button (`Copied!`), **Clear Negative** button, and manual negative tag input bar (`e.g. glasses, extra_digits, 3d`) to quickly type or paste custom negative tokens.
  - Interactive token list where clicking any active negative tag removes it, or clicking a **Move to Positive** action shifts it to the positive prompt.

### B. Send Any Main Lexicon Tag to Negative Prompt
- **Main Lexicon Table & Grid Views**:
  - Add a quick **Exclude / Negative (`-` / Ban icon)** button to every tag row/card and inside the **Tag Inspector**.
  - Clicking this button toggles the tag inside the **Active Negative Prompt** (highlighting excluded tags with a subtle rose/red indicator so you can see at a glance which tags are currently negated).

### C. Positive vs. Negative Prompt Overlap Detection
- **Automatic Contradiction Alert**:
  - Continuously checks whether any tag (or its direct rating/censorship counterpart, e.g., having identical tags in both `selectedPromptTags` and `selectedNegativeTags`, or having explicit tags in Positive while `SFW Guard` tags like `nsfw`/`nude` are active in Negative).
  - Surfaces an amber/rose **Positive ↔ Negative Overlap Warning** banner in both the **Prompt** and **Negatives** tabs with one-click resolution buttons (`Remove from Negative` or `Remove from Positive`).

### D. Modular Negative Tag Categories & One-Click Packs
Organize a dedicated library of ~65 canonical SDXL Illustrious negative tags into **6 toggleable modular categories** (each with an **Add Pack** / **Remove Pack** button plus individual clickable tag chips):
1. **Quality, Era & Baseline Degradation**:
   - `worst_quality`, `low_quality`, `normal_quality`, `lowres`, `early`, `oldest`, `bad_id`, `poorly_drawn`, `amateur_drawing`, `sketch`, `unfinished`, `blurry`, `chromatic_aberration_abuse`
2. **Anatomy, Hands, Digits & Limb Distortion Fixes**:
   - `bad_anatomy`, `bad_hands`, `mutated_hands`, `missing_fingers`, `extra_fingers`, `extra_digit`, `fewer_digits`, `fused_fingers`, `six_fingers`, `bad_feet`, `extra_limbs`, `missing_limbs`, `extra_arms`, `extra_legs`, `malformed_limbs`, `disfigured`, `bad_proportions`, `gross_proportions`, `long_neck`, `asymmetrical_eyes`, `cross-eyed`
3. **Anti-Censorship, Mosaic & Bar Censor Removal**:
   - `censored`, `mosaic_censoring`, `bar_censor`, `light_censor`, `steam_censor`, `hair_censor`, `convenient_censoring`, `novelty_censor`, `heart_censor`, `silhouette_censor`, `out_of_frame_censoring`, `pointless_censoring`
4. **Anti-3D, Photorealistic & CGI Style Blockers**:
   - `3d`, `realistic`, `photorealistic`, `photo_(medium)`, `cgi`, `3d_custom_girl`, `mmd`, `blender_(medium)`, `source_filmmaker`, `unreal_engine`, `doll`, `figurine`, `cosplay`, `real_life`, `semi-realistic`, `uncanny_valley`
5. **Watermark, Text, UI, Border & Frame Blockers**:
   - `watermark`, `signature`, `username`, `artist_name`, `patreon_username`, `patreon_logo`, `twitter_username`, `weibo_username`, `text`, `english_text`, `speech_bubble`, `sound_effects`, `subtitles`, `date_watermark`, `page_number`, `border`, `white_border`, `black_border`, `split_screen`, `comic`, `4koma`, `multiple_views`, `cropped`, `out_of_frame`, `jpeg_artifacts`, `compression_artifacts`, `scan_artifacts`, `error`, `ui`
6. **SFW Guard (Block Explicit / NSFW Elements)**:
   - `nsfw`, `explicit`, `questionable`, `nude`, `completely_nude`, `nipples`, `pussy`, `penis`, `sex`, `underwear`, `panties`, `bra`, `bikini`, `cameltoe`, `cleavage`, `sideboob`, `underboob`, `ass_visible_through_thighs`, `ahegao`, `blush_stickers`

### E. Built-In & Custom Negative Presets Manager
- **Built-In Negative Presets** (with **Replace Active Negative** and **Merge into Negative** actions):
  - *Standard Illustrious v1.0 Negative*
  - *Uncensored / Anti-Mosaic Illustrious Negative*
  - *Pure 2D Anime (Anti-3D & Anti-Realistic)*
  - *Strict Hand & Anatomy Guard*
  - *Clean Safe-for-Work (SFW) Guard*
- **Custom Negative Presets (`localStorage`)**:
  - Save your currently active negative prompt under a custom name, load or merge it anytime, or delete saved custom negative presets.
