# Illustrious Lexicon — Phase 2 Expansion Plan (Conflict Detector, Color Prefixer & Extended Taxonomies)

This update expands **Illustrious Lexicon** with two interactive prompt engineering tools—a **Tag Conflict & Contradiction Detector** and a **Quick Color Modifier Prefixer**—alongside three new canonical Danbooru tag categories: **Archetypes & Occupations**, **Multi-Character & Couple Interactions**, and **Fetish, Material & Surface Detail Tags**.

## User Review & Critical Decisions

> [!IMPORTANT]
> Review the planned features and taxonomy additions below and click **Proceed** to build them into the workspace.

- **Confirmed Interactive Composer Tools**:
  1. **Tag Conflict & Contradiction Warnings**: Real-time rule engine that flags mutually exclusive or contradictory tags inside the active prompt (e.g., `solo` + `2girls`, `flat_chest` + `huge_breasts`, `short_hair` + `very_long_hair`, `completely_nude` + `serafuku`, `no_panties` + `striped_panties`, `blue_sky` + `night_sky`) with one-click resolution buttons.
  2. **Quick Color Modifier Prefixer**: Interactive color palette bar (`black_`, `white_`, `red_`, `blue_`, `pink_`, `purple_`, `yellow_`, `green_`, `silver_`, `brown_`, `aqua_`, `gold_`) in the Tag Inspector and Active Prompt Composer that prefixes colorable garments, legwear, accessories, hair, and eyes (e.g., `bikini` → `black_bikini`, `thighhighs` → `white_thighhighs`, `dress` → `red_dress`).
- **Confirmed New Booru Tag Categories**:
  1. **Archetypes, Tropes & Occupations** (`gyaru`, `ojou-sama`, `succubus`, `vampire`, `nun`, `nurse`, `office_lady`, `cheerleader`, `kunoichi`, `magical_girl`, `race_queen`, `idol`, `cow_girl`, `dark_elf`, `slime_girl`, `bride`, `dominatrix`, etc.)
  2. **Multi-Character & Couple Interactions** (`hugging`, `hug_from_behind`, `kissing`, `french_kiss`, `imminent_kiss`, `holding_hands`, `kabedon`, `lap_pillow`, `breast_to_breast`, `cheek_to_cheek`, `chin_grab`, `headpat`, `feeding`, `yuri`, `hetero`, `threesome`, `cooperative_paizuri`, `69`, `tribadism`, etc.)
  3. **Fetish, Material & Surface Detail Tags** (`latex`, `shiny_clothes`, `vacuum-packed_clothes`, `wet_hair`, `wet_skin`, `dripping`, `tanlines`, `sunburn`, `glasses_off`, `womb_tattoo`, `body_writing`, `tally_marks`, `navel_piercing`, `nipple_piercing`, `torn_pantyhose`, `single_thighhigh`, `blindfold`, `ball_gag`, `handcuffs`, `tentacles`, etc.)

---

## 1. Overview & Core Concept

- **What It Adds**:
  - Prevents subtle prompt degradation in SDXL Illustrious by catching contradictory tags before generation.
  - Eliminates cluttering the main table with 12 color variations of every single garment while giving instant one-click access to canonical colored booru tags (`red_bikini`, `black_thighhighs`, `white_dress`, `pink_panties`).
  - Expands the built-in lexicon past **400+ canonical underscore tags** with deep coverage of character archetypes, multi-character interactions, and material/fetish surface modifiers.

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Resolving Tag Contradictions**: When a user selects two conflicting tags (e.g., `1girl, solo` and then clicks `2girls` or `kissing` which implies a partner, or `small_breasts` + `huge_breasts`), a compact **Conflict Warning Banner** appears in the Prompt Composer listing the exact conflicting pair (`short_hair ↔ very_long_hair — Conflicting Hair Length`). Clicking either tag in the warning removes the unwanted one immediately.
  2. **Applying Color Modifiers**:
     - When inspecting any colorable tag (such as `bikini`, `dress`, `thighhighs`, `pantyhose`, `bra`, `panties`, `gloves`, `ribbon`, `choker`, `wings`, `inner_hair`), a **Quick Color Prefixer** strip appears in the Tag Inspector with 12 canonical Danbooru color swatches. Clicking `black_` adds `black_bikini` directly to the active prompt (or swaps `bikini` → `black_bikini` if `bikini` is already active).
     - Inside the Active Prompt Composer, clicking a colorable tag's palette trigger lets you cycle or assign its color prefix in place.
  3. **Browsing New Subcategories**:
     - **02. Character** gains `Archetypes, Occupations & Species` and `Skin, Tanlines, Tattoos & Piercings`.
     - **03. Clothing** gains `Materials, Latex & Fetish Gear`.
     - **04. Pose & Camera** gains `Multi-Character & Couple Interactions`.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Rule-Based Mutually Exclusive Group Detection**
  - *Chosen Approach*: Define curated conflict groups across Subject Count (`solo` vs. `2girls`/`multiple_girls`/`threesome`), Bust Size (`flat_chest`/`small_breasts` vs. `large_breasts`/`huge_breasts`/`gigantic_breasts`), Hair Length (`short_hair` vs. `long_hair`/`very_long_hair`/`absurdly_long_hair`), Clothing State (`completely_nude` vs. full garments; `no_bra` vs. `bra`; `no_panties` vs. `panties`), Eye State (`closed_eyes` vs. `wide-eyed`/`one_eye_closed`), Time/Sky (`blue_sky` vs. `night_sky`/`starry_sky`), and Era (`newest` vs. `early`).
  - *Why*: Gives immediate, deterministic feedback with zero latency and provides one-click buttons to keep whichever tag the user prefers.
- **Decision 2: Non-Destructive Color Modifier Prefixer**
  - *Chosen Approach*: Colorable clothing and trait tags carry a `colorable: true` flag (or pattern match) so users can either add the base tag (`thighhighs`) or click any of the 12 canonical Danbooru colors (`black_thighhighs`, `white_thighhighs`, `pink_thighhighs`, etc.) to insert or swap the colored variant directly in their prompt.
  - *Why*: Multiplies the effective vocabulary of the lexicon by over 1,000+ canonical colored garment/trait combinations without bloating the main table scroll with repetitive color rows.

---

## 4. Technical Architecture & Data Strategy

- **Architecture & Component Diagram**:
```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ SDXL Illustrious Composer & Inspector                                        │
├──────────────────────────────────────┬───────────────────────────────────────┤
│ Active Prompt Composer               │ Tag Inspector                         │
│                                      │                                       │
│ ┌──────────────────────────────────┐ │ • Canonical Tag: micro_bikini         │
│ │ ⚠ Conflict Detected (1)          │ │ • Quick Color Prefixer:               │
│ │   solo ↔ 2girls (Subject Count)  │ │   [black_] [white_] [red_] [blue_]    │
│ │   [Keep solo] [Keep 2girls]      │ │   [pink_] [purple_] [gold_] [green_]  │
│ └──────────────────────────────────┘ │   -> Inserts/Swaps black_micro_bikini │
│ ┌──────────────────────────────────┐ │                                       │
│ │ Active Tags (Click ★ / Color / ×)│ │ • Related & Sibling Tags              │
│ └──────────────────────────────────┘ │                                       │
└──────────────────────────────────────┴───────────────────────────────────────┘
```

- **Data Model Additions**:
  - `ConflictRule`: `{ id, categoryLabel, groupA: string[], groupB?: string[], mode: 'mutual_exclusion' | 'group_clash', message: string }`
  - `CANONICAL_BOORU_COLORS`: `['black', 'white', 'red', 'blue', 'pink', 'purple', 'yellow', 'green', 'silver', 'brown', 'aqua', 'gold']`
  - New Tag Modules: `tagsArchetypesFeatures.ts` and `tagsInteractionsMaterials.ts` merged into `ALL_BOORU_TAGS`.
