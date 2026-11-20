import { ALL_BOORU_TAGS, DOMAIN_MAP, DOMAINS } from '../src/data/index.ts';
import { ART_META_TAGS } from '../src/data/tagsArtMeta.ts';
import { CHARACTER_TAGS } from '../src/data/tagsCharacter.ts';
import { ARCHETYPES_FEATURES_TAGS } from '../src/data/tagsArchetypesFeatures.ts';
import { SPECIES_AND_TRAITS_TAGS } from '../src/data/tagsSpeciesRaces.ts';
import { FACE_AND_GAZE_TAGS } from '../src/data/tagsFaceExpressions.ts';
import { CLOTHING_TAGS } from '../src/data/tagsClothing.ts';
import { POSE_CAMERA_TAGS } from '../src/data/tagsPoseCamera.ts';
import { INTERACTIONS_MATERIALS_TAGS } from '../src/data/tagsInteractionsMaterials.ts';
import { ENVIRONMENT_TAGS } from '../src/data/tagsEnvironment.ts';
import { EXTENDED_TAGS } from '../src/data/tagsExtended.ts';
import { RISQUE_TAGS } from '../src/data/tagsRisque.ts';
import { EXPLICIT_ACTION_TAGS } from '../src/data/tagsExplicitActions.ts';
import { COMPREHENSIVE_POLISH_TAGS } from '../src/data/tagsComprehensivePolish.ts';
import { CANONICAL_EXPANSION_TAGS } from '../src/data/tagsCanonicalExpansion.ts';
import { MISSING_CANONICAL_TAGS } from '../src/data/tagsMissingCanonical.ts';
import { CATEGORY_COMPLETION_TAGS } from '../src/data/tagsCategoryCompletion.ts';
import type { BooruTag } from '../src/types/lexicon.ts';

const verbose = process.argv.includes('--verbose');
const ALLOWED_TAG_RE = /^[a-z0-9_()!:'+;^><.-]+$/;

const RAW_SOURCES: [string, BooruTag[]][] = [
  ['tagsArtMeta.ts', ART_META_TAGS],
  ['tagsCharacter.ts', CHARACTER_TAGS],
  ['tagsArchetypesFeatures.ts', ARCHETYPES_FEATURES_TAGS],
  ['tagsSpeciesRaces.ts', SPECIES_AND_TRAITS_TAGS],
  ['tagsFaceExpressions.ts', FACE_AND_GAZE_TAGS],
  ['tagsClothing.ts', CLOTHING_TAGS],
  ['tagsPoseCamera.ts', POSE_CAMERA_TAGS],
  ['tagsInteractionsMaterials.ts', INTERACTIONS_MATERIALS_TAGS],
  ['tagsEnvironment.ts', ENVIRONMENT_TAGS],
  ['tagsExtended.ts', EXTENDED_TAGS],
  ['tagsRisque.ts', RISQUE_TAGS],
  ['tagsExplicitActions.ts', EXPLICIT_ACTION_TAGS],
  ['tagsComprehensivePolish.ts', COMPREHENSIVE_POLISH_TAGS],
  ['tagsCanonicalExpansion.ts', CANONICAL_EXPANSION_TAGS],
  ['tagsMissingCanonical.ts', MISSING_CANONICAL_TAGS],
  ['tagsCategoryCompletion.ts', CATEGORY_COMPLETION_TAGS]
];

const errors: string[] = [];
const warnings: string[] = [];

// 1. Detect raw duplicate canonical tags across source modules
const firstSeenIn = new Map<string, string>();
for (const [fileName, list] of RAW_SOURCES) {
  for (const item of list) {
    const prev = firstSeenIn.get(item.tag);
    if (prev) {
      errors.push(`Duplicate tag "${item.tag}" in ${fileName} (already defined in ${prev})`);
    } else {
      firstSeenIn.set(item.tag, fileName);
    }
  }
}

// 2. Validate syntax, taxonomy, descriptions, post counts, and relatedTags
const canonicalSet = new Set(ALL_BOORU_TAGS.map((t) => t.tag));
const subcategoryCounts = new Map<string, number>();
const missingRelatedCounts = new Map<string, number>();

for (const item of ALL_BOORU_TAGS) {
  const { tag, domain, subcategory, description, postCountEst, relatedTags } = item;

  if (
    !tag ||
    !ALLOWED_TAG_RE.test(tag) ||
    tag.includes('__') ||
    tag.startsWith('_') ||
    tag.endsWith('_')
  ) {
    errors.push(`Malformed tag syntax: "${tag}"`);
  }

  let depth = 0;
  for (const ch of tag) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (depth < 0) break;
  }
  if (depth !== 0) {
    errors.push(`Unbalanced parentheses in tag: "${tag}"`);
  }

  const domainMeta = DOMAIN_MAP[domain];
  if (!domainMeta) {
    errors.push(`Invalid domain "${domain}" on tag "${tag}"`);
  } else if (!domainMeta.subcategories.includes(subcategory)) {
    errors.push(`Invalid subcategory "${subcategory}" for domain "${domain}" on tag "${tag}"`);
  } else {
    const key = `${domainMeta.shortLabel} :: ${subcategory}`;
    subcategoryCounts.set(key, (subcategoryCounts.get(key) ?? 0) + 1);
  }

  if (!description || !description.trim()) {
    errors.push(`Empty description on tag "${tag}"`);
  }
  if (!postCountEst || /est\./i.test(postCountEst)) {
    errors.push(`Missing or placeholder postCountEst ("${postCountEst}") on tag "${tag}"`);
  }

  for (const rel of relatedTags ?? []) {
    if (!canonicalSet.has(rel)) {
      missingRelatedCounts.set(rel, (missingRelatedCounts.get(rel) ?? 0) + 1);
    }
  }
}

// 3. Check subcategory density
for (const domain of DOMAINS) {
  for (const sub of domain.subcategories) {
    const count = subcategoryCounts.get(`${domain.shortLabel} :: ${sub}`) ?? 0;
    if (count < 10) {
      warnings.push(`Sparse subcategory (${count} tags): ${domain.shortLabel} · ${sub}`);
    }
  }
}

// Output concise report
const totalSubcategories = DOMAINS.reduce((sum, d) => sum + d.subcategories.length, 0);
console.log(
  `Audited ${ALL_BOORU_TAGS.length} canonical tags across ${DOMAINS.length} domains and ${totalSubcategories} subcategories.`
);

if (errors.length > 0) {
  console.error(`\n[FAIL] ${errors.length} error(s) found:`);
  for (const err of errors) console.error(`  - ${err}`);
} else {
  console.log('[OK] 0 hard errors (no duplicates, malformed syntax, invalid subcategories, or placeholders).');
}

if (warnings.length > 0) {
  console.warn(`\n[WARN] ${warnings.length} coverage warning(s):`);
  for (const w of warnings) console.warn(`  - ${w}`);
}

const missingSorted = [...missingRelatedCounts.entries()].sort((a, b) => b[1] - a[1]);
if (missingSorted.length > 0) {
  const shown = verbose ? missingSorted : missingSorted.slice(0, 12);
  console.log(
    `\n[INFO] ${missingSorted.length} distinct non-lexicon relatedTags referenced (top ${shown.length}):`
  );
  for (const [rel, count] of shown) {
    console.log(`  - ${rel} (${count}x)`);
  }
  if (!verbose && missingSorted.length > shown.length) {
    console.log(`  ... run with --verbose to list all ${missingSorted.length}`);
  }
}

process.exit(errors.length > 0 ? 1 : 0);
