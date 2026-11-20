# Changelog

All notable changes to **Illustrious Lexicon** are documented in this file.

## [3.0.0]

### Added
- **1,370 Audited Canonical Booru Tags** across **7 domains** and **44 subcategories**, with every subcategory populated (`16`–`85` tags each), zero duplicates, and zero placeholder post-count estimates.
- **Unified Settings & Workspace Tools Modal** consolidating **Display & Theme**, **Output & History**, **Custom Tag** (with live Danbooru normalization and inline duplicate/alias hints), and **CSV Export**.
- **Decluttered Collapsible Workspace**: collapsible Left Taxonomy Sidebar and Right Prompt Composer, collapsible Filters & A–Z drawer, hover/focus-revealed secondary row actions, and an expandable Tag Inspector drawer.
- **Custom Tag Deletion**: remove local custom tags or revert built-in overrides directly from table rows, grid cards, or the Tag Inspector.
- **CLI Tag Audit (`npm run audit:tags`)**: dev-only script checking raw source modules for duplicates, Danbooru syntax, valid domains/subcategories, metadata completeness, and non-lexicon `relatedTags` references.
- **Standalone Offline HTML & Windows `.exe` Packaging**: single-file offline HTML bundle, Windows App-Mode `.bat` launcher, Electron Portable/NSIS `.exe` packaging, and RFC-4180 UTF-8 CSV exports.

### Fixed
- **Tag Interaction & Conflict Engine**: added compound color prefixes (`light_blue_hair`, `dark_blue_hair`, `light_brown_hair`), canonical Danbooru color mappings (`blonde_hair`, `amber_eyes`, `dark_skin`), color-variant conflict & positive/negative overlap detection, multi-character conflict awareness, and conflict-free **Swap Face** / **Swap Species**.
- **Persistence & Runtime Resilience**: sanitized and deduplicated `localStorage` hydration, batched recent tag history updates, fixed color-prefixed Favorites resolution and sidebar counts, and hardened standalone HTML asset inlining.
- **GitHub Actions CI**: removed `cache: 'npm'` lockfile requirement (preventing `setup-node` failures without `package-lock.json`), added `npm run audit:tags` to CI, and included `illustrious-lexicon-tags.csv` in automated GitHub Releases.
