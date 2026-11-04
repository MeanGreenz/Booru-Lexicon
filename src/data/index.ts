import { BooruTag, DomainId, DomainMetadata, PromptPreset } from '../types/lexicon';
import { CHARACTER_TAGS } from './tagsCharacter';
import { CLOTHING_TAGS } from './tagsClothing';
import { POSE_CAMERA_TAGS } from './tagsPoseCamera';
import { ART_META_TAGS } from './tagsArtMeta';
import { ENVIRONMENT_TAGS } from './tagsEnvironment';
import { EXTENDED_TAGS } from './tagsExtended';
import { RISQUE_TAGS } from './tagsRisque';
import { EXPLICIT_ACTION_TAGS } from './tagsExplicitActions';
import { ARCHETYPES_FEATURES_TAGS } from './tagsArchetypesFeatures';
import { INTERACTIONS_MATERIALS_TAGS } from './tagsInteractionsMaterials';
import { COMPREHENSIVE_POLISH_TAGS } from './tagsComprehensivePolish';
import { CANONICAL_EXPANSION_TAGS } from './tagsCanonicalExpansion';
import {
  FACE_AND_GAZE_TAGS,
  FACIAL_AND_GAZE_MIGRATION_MAP,
  BUILT_IN_EXPRESSION_PRESETS,
  FACIAL_MIXER_ZONES
} from './tagsFaceExpressions';
import {
  SPECIES_AND_TRAITS_TAGS,
  SPECIES_AND_TRAITS_MIGRATION_MAP,
  BUILT_IN_SPECIES_PRESETS,
  SPECIES_MIXER_ZONES
} from './tagsSpeciesRaces';

export {
  BUILT_IN_EXPRESSION_PRESETS,
  FACIAL_MIXER_ZONES,
  BUILT_IN_SPECIES_PRESETS,
  SPECIES_MIXER_ZONES
};

export const DOMAINS: DomainMetadata[] = [
  {
    id: 'art_meta',
    indexNumber: '01',
    label: 'Art Styles, Mediums & Meta Quality',
    shortLabel: 'Art & Meta',
    description: 'SDXL Illustrious quality score triggers, rating tokens, era tags, shading styles, mediums, and color palettes.',
    promptOrderPriority: 1,
    subcategories: [
      'Illustrious Quality & Era',
      'Shading, Lineart & Mediums',
      'Color, Tone & Visual Effects'
    ]
  },
  {
    id: 'character',
    indexNumber: '02',
    label: 'Character Traits, Archetypes, Body & Hair',
    shortLabel: 'Character',
    description: 'Subject counts, social archetypes/occupations, body proportions, skin/tanlines/tattoos, hairstyles, bangs, and hair colors.',
    promptOrderPriority: 2,
    subcategories: [
      'Subject & Count',
      'Archetypes & Occupations',
      'Body Proportions & Anatomy',
      'Skin, Tanlines, Tattoos & Piercings',
      'Hair Length & Style',
      'Bangs & Hair Color'
    ]
  },
  {
    id: 'species_traits',
    indexNumber: '03',
    label: 'Species, Fantasy Races, Beastkin, Monster Girls & Anthro',
    shortLabel: 'Species & Races',
    description: 'Kemonomimi, beastkin, fantasy races (elf, dark elf, dwarf, orc, goblin, oni, succubus), monster girls, anthro/furry/scalie, ears, horns, wings, tails, and exotic racial anatomy.',
    promptOrderPriority: 3,
    subcategories: [
      'Kemonomimi & Beastkin',
      'Fantasy Races & Demihumans',
      'Monster Girls & Exotic Hybrids',
      'Anthro, Furry & Scalie',
      'Ears, Horns, Wings & Tails',
      'Exotic Skin, Scales & Racial Anatomy'
    ]
  },
  {
    id: 'face_expressions',
    indexNumber: '04',
    label: 'Face, Eyes & Expressions',
    shortLabel: 'Face & Expressions',
    description: 'Eyebrow shapes, eyelid states, pupil geometry, iris colors, mouth/teeth/tongue shapes, blush levels, tears, sweat drops, and composite expressions.',
    promptOrderPriority: 4,
    subcategories: [
      'Eyebrows, Eye Shapes & Eyelids',
      'Pupils, Irises & Eye Colors',
      'Mouth, Lips, Teeth & Tongue',
      'Blush, Tears, Sweat & Emotion Symbols'
    ]
  },
  {
    id: 'clothing',
    indexNumber: '05',
    label: 'Clothing, Lingerie, Materials & Fashion States',
    shortLabel: 'Clothing',
    description: 'School uniforms, traditional wafuku, dresses, swimwear, lingerie, latex/fetish materials, suggestive/disheveled states, and legwear.',
    promptOrderPriority: 5,
    subcategories: [
      'Uniforms & Formal',
      'Traditional & Fantasy',
      'Tops, Jackets & Sleeves',
      'Dresses, Skirts & Bottoms',
      'Swimwear, Lingerie & Bodysuits',
      'Materials, Latex & Fetish Gear',
      'Suggestive & Disheveled State',
      'Legwear & Footwear',
      'Headwear, Eyewear & Accessories'
    ]
  },
  {
    id: 'pose_camera',
    indexNumber: '06',
    label: 'Poses, Camera Angles, Gaze, Couple Interactions & Acts',
    shortLabel: 'Pose & Camera',
    description: 'Framing shots, Dutch angles, facial angles/head tilts/gaze direction, stances, couple interactions, sensual poses, intimate acts, and lighting.',
    promptOrderPriority: 6,
    subcategories: [
      'Framing & Shot Size',
      'Camera Angles & Perspective',
      'Facial Angles, Head Tilts & Gaze',
      'Body Poses & Stances',
      'Multi-Character & Couple Interactions',
      'Sensual & Suggestive Poses',
      'Intimate & Explicit Acts',
      'Hands & Arm Gestures',
      'Lighting & Optical Effects'
    ]
  },
  {
    id: 'environment',
    indexNumber: '07',
    label: 'Backgrounds, Environments & Props',
    shortLabel: 'Environment',
    description: 'Minimal studio backdrops, Shinkai skies, weather, indoor rooms, urban architecture, and handheld weapons/props.',
    promptOrderPriority: 7,
    subcategories: [
      'Studio & Minimal Backgrounds',
      'Nature, Sky & Weather',
      'Indoor & Urban Architecture',
      'Props, Weapons & Objects'
    ]
  }
];

export const DOMAIN_MAP: Record<DomainId, DomainMetadata> = DOMAINS.reduce(
  (acc, domain) => {
    acc[domain.id] = domain;
    return acc;
  },
  {} as Record<DomainId, DomainMetadata>
);

// Combine all tags, apply facial/gaze & species/traits domain migrations, and deduplicate by canonical tag string
const rawTags: BooruTag[] = [
  ...ART_META_TAGS,
  ...CHARACTER_TAGS,
  ...ARCHETYPES_FEATURES_TAGS,
  ...SPECIES_AND_TRAITS_TAGS,
  ...FACE_AND_GAZE_TAGS,
  ...CLOTHING_TAGS,
  ...POSE_CAMERA_TAGS,
  ...INTERACTIONS_MATERIALS_TAGS,
  ...ENVIRONMENT_TAGS,
  ...EXTENDED_TAGS,
  ...RISQUE_TAGS,
  ...EXPLICIT_ACTION_TAGS,
  ...COMPREHENSIVE_POLISH_TAGS,
  ...CANONICAL_EXPANSION_TAGS
];

const seen = new Set<string>();
const uniqueRawTags = rawTags.filter((item) => {
  if (seen.has(item.tag)) return false;
  seen.add(item.tag);
  return true;
});

export const ALL_BOORU_TAGS: BooruTag[] = uniqueRawTags.map((item) => {
  const migrated =
    FACIAL_AND_GAZE_MIGRATION_MAP[item.tag] || SPECIES_AND_TRAITS_MIGRATION_MAP[item.tag];
  // Ensure no alias collides with an existing standalone canonical tag in the lexicon;
  // if an alias is itself a canonical tag entry, promote it to relatedTags instead.
  const collidingAliases = item.aliases.filter((a) => a !== item.tag && seen.has(a));
  const cleanAliases = item.aliases.filter((a) => !seen.has(a));
  const mergedRelated = Array.from(
    new Set([...item.relatedTags, ...collidingAliases].filter((r) => r !== item.tag))
  );

  return {
    ...item,
    ...(migrated ? { domain: migrated.domain, subcategory: migrated.subcategory } : {}),
    aliases: cleanAliases,
    relatedTags: mergedRelated
  };
});

export const ILLUSTRIOUS_NEGATIVE_PRESETS = [
  {
    id: 'standard_illustrious_neg',
    name: 'Standard Illustrious Negative',
    description: 'Clean baseline negative prompt for SDXL Illustrious v0.1–v1.1 checkpoints.',
    tags: [
      'worst_quality',
      'low_quality',
      'normal_quality',
      'lowres',
      'bad_anatomy',
      'bad_hands',
      'missing_fingers',
      'extra_digit',
      'fewer_digits',
      'jpeg_artifacts',
      'signature',
      'watermark',
      'username',
      'blurry'
    ]
  },
  {
    id: 'uncensored_nsfw_neg',
    name: 'Uncensored / Anti-Mosaic Negative',
    description: 'Prevents mosaic pixelation, black censor bars, and anatomical artifacts in risqué or explicit generations.',
    tags: [
      'worst_quality',
      'low_quality',
      'normal_quality',
      'lowres',
      'censored',
      'mosaic_censoring',
      'bar_censor',
      'light_censor',
      'bad_anatomy',
      'bad_hands',
      'missing_fingers',
      'extra_digits',
      'mutated_hands',
      'watermark',
      'signature'
    ]
  },
  {
    id: 'modern_clean_neg',
    name: 'Modern Sharp & Anti-Retro Negative',
    description: 'Suppresses older 2000s flat shading and anatomical distortion.',
    tags: [
      'worst_quality',
      'low_quality',
      'early',
      'lowres',
      'bad_anatomy',
      'bad_hands',
      'mutated_hands',
      'extra_limbs',
      'text',
      'error',
      'watermark',
      'cropped',
      'jpeg_artifacts'
    ]
  }
];

export const BUILT_IN_PROMPT_PRESETS: PromptPreset[] = [
  {
    id: 'preset_illustrious_quality_header',
    name: 'Illustrious Quality Header',
    description: 'Essential quality & era opener tags for SDXL Illustrious models.',
    tags: ['masterpiece', 'best_quality', 'very_awa', 'newest', 'absurdres', 'highres'],
    isBuiltIn: true
  },
  {
    id: 'preset_gravure_sunset_bikini',
    name: 'Sunset Beach Micro Bikini Pin-Up',
    description: 'Glossy golden-hour beach gravure composition with tanlines and sensual framing.',
    tags: [
      'masterpiece',
      'best_quality',
      'very_awa',
      'newest',
      'absurdres',
      'rating_questionable',
      '1girl',
      'solo',
      'gyaru',
      'tan',
      'tanlines',
      'long_hair',
      'blonde_hair',
      'blue_eyes',
      'half-closed_eyes',
      'seductive_smile',
      'blush',
      'large_breasts',
      'cleavage',
      'wide_hips',
      'thick_thighs',
      'narrow_waist',
      'shiny_skin',
      'wet_skin',
      'micro_bikini',
      'side-tie_bikini',
      'cowboy_shot',
      'arched_back',
      'arm_under_breasts',
      'backlighting',
      'beach',
      'ocean',
      'sunset'
    ],
    isBuiltIn: true
  },
  {
    id: 'preset_succubus_latex',
    name: 'Gothic Succubus in Glossy Latex',
    description: 'Seductive demoness with horns, bat wings, womb tattoo, and high-gloss latex bodysuit.',
    tags: [
      'masterpiece',
      'best_quality',
      'very_awa',
      'newest',
      'absurdres',
      'rating_questionable',
      '1girl',
      'solo',
      'succubus',
      'demon_girl',
      'horns',
      'demon_tail',
      'silver_hair',
      'twintails',
      'red_eyes',
      'heart-shaped_pupils',
      'seductive_smile',
      'tongue_out',
      'large_breasts',
      'cleavage',
      'wide_hips',
      'womb_tattoo',
      'bodysuit',
      'latex',
      'shiny_clothes',
      'skintight',
      'cleavage_cutout',
      'from_below',
      'looking_down',
      'dramatic_shadows',
      'stained_glass'
    ],
    isBuiltIn: true
  },
  {
    id: 'preset_bedroom_lingerie',
    name: 'Boudoir Lace Lingerie & Garter Straps',
    description: 'Moody indoor bedroom composition with sheer babydoll, garter belt, and thighhighs.',
    tags: [
      'masterpiece',
      'best_quality',
      'very_awa',
      'newest',
      'absurdres',
      'rating_questionable',
      '1girl',
      'solo',
      'silver_hair',
      'very_long_hair',
      'purple_eyes',
      'tareme',
      'parted_lips',
      'blush',
      'looking_at_viewer',
      'large_breasts',
      'cleavage',
      'thick_thighs',
      'lingerie',
      'babydoll',
      'see-through',
      'garter_belt',
      'garter_straps',
      'thighhighs',
      'skindentation',
      'on_bed',
      'kneeling',
      'all_fours',
      'dramatic_shadows',
      'bedroom'
    ],
    isBuiltIn: true
  },
  {
    id: 'preset_golden_hour_schoolgirl',
    name: 'Golden Hour Rooftop Serafuku',
    description: 'Cinematic backlit school rooftop portrait with windblown hair.',
    tags: [
      'masterpiece',
      'best_quality',
      'very_awa',
      'newest',
      'absurdres',
      '1girl',
      'solo',
      'long_hair',
      'floating_hair',
      'black_hair',
      'blunt_bangs',
      'big_eyes',
      'blue_eyes',
      'light_smile',
      'looking_at_viewer',
      'serafuku',
      'sailor_collar',
      'pleated_skirt',
      'cowboy_shot',
      'dutch_angle',
      'backlighting',
      'lens_flare',
      'depth_of_field',
      'rooftop',
      'sunset',
      'wind'
    ],
    isBuiltIn: true
  }
];
