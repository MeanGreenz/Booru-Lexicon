import { BooruColorOption, DetectedConflict } from '../types/lexicon';

export const CANONICAL_BOORU_COLORS: BooruColorOption[] = [
  { prefix: 'black', label: 'black_', hex: '#1E293B' },
  { prefix: 'white', label: 'white_', hex: '#F8FAFC' },
  { prefix: 'red', label: 'red_', hex: '#EF4444' },
  { prefix: 'blue', label: 'blue_', hex: '#3B82F6' },
  { prefix: 'pink', label: 'pink_', hex: '#EC4899' },
  { prefix: 'purple', label: 'purple_', hex: '#A855F7' },
  { prefix: 'yellow', label: 'yellow_', hex: '#EAB308' },
  { prefix: 'green', label: 'green_', hex: '#22C55E' },
  { prefix: 'silver', label: 'silver_', hex: '#94A3B8' },
  { prefix: 'brown', label: 'brown_', hex: '#92400E' },
  { prefix: 'aqua', label: 'aqua_', hex: '#06B6D4' },
  { prefix: 'gold', label: 'gold_', hex: '#D97706' }
];

const COLOR_PREFIX_SET = new Set(
  CANONICAL_BOORU_COLORS.map((c) => c.prefix).concat(['blonde', 'grey', 'orange'])
);

/**
 * Set of canonical base tags or suffixes that support Danbooru color prefixes
 * e.g. bikini -> black_bikini, thighhighs -> white_thighhighs, dress -> red_dress
 */
const COLORABLE_BASE_TAGS = new Set([
  'bikini',
  'micro_bikini',
  'string_bikini',
  'side-tie_bikini',
  'o-ring_bikini',
  'one-piece_swimsuit',
  'swimsuit',
  'leotard',
  'bodysuit',
  'bodystocking',
  'lingerie',
  'bra',
  'panties',
  'striped_panties',
  'side-tie_panties',
  'thong',
  'babydoll',
  'garter_belt',
  'garter_straps',
  'thigh_strap',
  'corset',
  'dress',
  'sundress',
  'china_dress',
  'kimono',
  'yukata',
  'hakama',
  'haori',
  'skirt',
  'pleated_skirt',
  'miniskirt',
  'plaid_skirt',
  'collared_shirt',
  'blazer',
  'hoodie',
  'cardigan',
  'ribbed_sweater',
  'turtleneck',
  'crop_top',
  'track_jacket',
  'cape',
  'capelet',
  'thighhighs',
  'kneehighs',
  'pantyhose',
  'bobby_socks',
  'fishnets',
  'loafers',
  'mary_janes',
  'high_heels',
  'thigh_boots',
  'sneakers',
  'glasses',
  'sunglasses',
  'hair_ribbon',
  'hair_bow',
  'hairband',
  'hairclip',
  'hair_flower',
  'beret',
  'straw_hat',
  'witch_hat',
  'choker',
  'collar',
  'necktie',
  'scarf',
  'gloves',
  'fingerless_gloves',
  'elbow_gloves',
  'headphones',
  'wings',
  'feathered_wings',
  'horns',
  'halo',
  'tail',
  'cat_ears',
  'fox_ears',
  'rabbit_ears',
  'umbrella'
]);

/**
 * Strips any existing canonical color prefix from a tag string so we can check its base noun
 * or swap its color prefix cleanly (e.g. 'black_bikini' -> 'bikini').
 */
export function getBaseUncoloredTag(tag: string): {
  colorPrefix: string | null;
  baseTag: string;
} {
  // Special case: colored_inner_hair / pink_inner_hair
  if (tag === 'colored_inner_hair' || tag.endsWith('_inner_hair')) {
    const prefix = tag.replace('_inner_hair', '');
    if (prefix === 'colored') {
      return { colorPrefix: null, baseTag: 'colored_inner_hair' };
    }
    if (COLOR_PREFIX_SET.has(prefix)) {
      return { colorPrefix: prefix, baseTag: 'colored_inner_hair' };
    }
  }

  const firstUnderscore = tag.indexOf('_');
  if (firstUnderscore > 0) {
    const potentialColor = tag.slice(0, firstUnderscore);
    const remainder = tag.slice(firstUnderscore + 1);
    if (COLOR_PREFIX_SET.has(potentialColor)) {
      return { colorPrefix: potentialColor, baseTag: remainder };
    }
  }

  return { colorPrefix: null, baseTag: tag };
}

/**
 * Determines whether a tag supports quick Danbooru color prefixing
 */
export function isTagColorable(tag: string): boolean {
  if (tag === 'colored_inner_hair' || tag.endsWith('_inner_hair')) return true;
  if (tag.endsWith('_hair') || tag.endsWith('_eyes')) {
    const { colorPrefix, baseTag } = getBaseUncoloredTag(tag);
    if (colorPrefix && (baseTag === 'hair' || baseTag === 'eyes')) {
      return true;
    }
  }
  const { baseTag } = getBaseUncoloredTag(tag);
  return COLORABLE_BASE_TAGS.has(baseTag);
}

/**
 * Applies a canonical Danbooru color prefix to a tag
 * e.g. applyColorPrefixToTag('bikini', 'black') => 'black_bikini'
 *      applyColorPrefixToTag('red_dress', 'white') => 'white_dress'
 *      applyColorPrefixToTag('colored_inner_hair', 'pink') => 'pink_inner_hair'
 */
export function applyColorPrefixToTag(tag: string, colorPrefix: string): string {
  if (tag === 'colored_inner_hair' || tag.endsWith('_inner_hair')) {
    return `${colorPrefix}_inner_hair`;
  }
  const { baseTag } = getBaseUncoloredTag(tag);
  if (baseTag === 'hair' && colorPrefix === 'yellow') {
    return 'blonde_hair';
  }
  return `${colorPrefix}_${baseTag}`;
}

interface ConflictGroupRule {
  id: string;
  categoryLabel: string;
  mode: 'mutually_exclusive' | 'group_vs_group';
  tagsA: string[];
  tagsB?: string[];
  reason: string;
}

export const CONFLICT_RULES: ConflictGroupRule[] = [
  {
    id: 'bust_size_conflict',
    categoryLabel: 'Bust Size Contradiction',
    mode: 'mutually_exclusive',
    tagsA: [
      'flat_chest',
      'small_breasts',
      'medium_breasts',
      'large_breasts',
      'huge_breasts',
      'gigantic_breasts'
    ],
    reason: 'Multiple competing breast size tags dilute SDXL Illustrious anatomical proportions.'
  },
  {
    id: 'hair_length_conflict',
    categoryLabel: 'Hair Length Contradiction',
    mode: 'mutually_exclusive',
    tagsA: ['short_hair', 'medium_hair', 'long_hair', 'very_long_hair', 'absurdly_long_hair'],
    reason: 'Combining short and long hair length tags causes inconsistent hair strand rendering.'
  },
  {
    id: 'solo_vs_multi_subject',
    categoryLabel: 'Subject Count Clash',
    mode: 'group_vs_group',
    tagsA: ['solo'],
    tagsB: [
      '2girls',
      'multiple_girls',
      '2boys',
      'threesome',
      'yuri',
      'hetero',
      'hugging',
      'hug_from_behind',
      'kissing',
      'french_kiss',
      'imminent_kiss',
      'breast_to_breast',
      'cheek_to_cheek',
      'cooperative_paizuri',
      'tribadism',
      'back-to-back',
      'princess_carry'
    ],
    reason: '"solo" specifies a single character alone in the frame, clashing with multi-character or couple tags.'
  },
  {
    id: 'completely_nude_vs_attire',
    categoryLabel: 'Nudity vs. Clothing Clash',
    mode: 'group_vs_group',
    tagsA: ['completely_nude'],
    tagsB: [
      'school_uniform',
      'serafuku',
      'blazer',
      'maid',
      'military_uniform',
      'business_suit',
      'kimono',
      'yukata',
      'miko',
      'china_dress',
      'gothic_lolita',
      'armor',
      'dress',
      'sundress',
      'pleated_skirt',
      'miniskirt',
      'hoodie',
      'collared_shirt',
      'bikini',
      'micro_bikini',
      'one-piece_swimsuit',
      'school_swimsuit',
      'leotard',
      'bodysuit',
      'lingerie',
      'bra',
      'panties',
      'thighhighs',
      'pantyhose'
    ],
    reason: '"completely_nude" instructs the model to remove all garments, conflicting with specific clothing tags.'
  },
  {
    id: 'topless_vs_upper_attire',
    categoryLabel: 'Topless vs. Upper Garment Clash',
    mode: 'group_vs_group',
    tagsA: ['topless'],
    tagsB: [
      'collared_shirt',
      'blazer',
      'hoodie',
      'cardigan',
      'ribbed_sweater',
      'turtleneck',
      'bra',
      'bikini',
      'one-piece_swimsuit',
      'leotard',
      'bodysuit'
    ],
    reason: '"topless" conflicts with upper-body shirts, sweaters, bras, or one-piece garments.'
  },
  {
    id: 'bottomless_vs_lower_attire',
    categoryLabel: 'Bottomless vs. Lower Garment Clash',
    mode: 'group_vs_group',
    tagsA: ['bottomless'],
    tagsB: [
      'pleated_skirt',
      'miniskirt',
      'plaid_skirt',
      'high-waist_skirt',
      'short_shorts',
      'panties',
      'striped_panties',
      'side-tie_panties',
      'thong',
      'pantyhose'
    ],
    reason: '"bottomless" conflicts with skirts, shorts, panties, or pantyhose.'
  },
  {
    id: 'no_bra_vs_bra',
    categoryLabel: 'Underwear State Contradiction',
    mode: 'group_vs_group',
    tagsA: ['no_bra'],
    tagsB: ['bra', 'lace_bra', 'sports_bra', 'strapless_bra'],
    reason: '"no_bra" directly contradicts wearing a bra.'
  },
  {
    id: 'no_panties_vs_panties',
    categoryLabel: 'Underwear State Contradiction',
    mode: 'group_vs_group',
    tagsA: ['no_panties'],
    tagsB: ['panties', 'striped_panties', 'side-tie_panties', 'thong', 'pantyshot'],
    reason: '"no_panties" contradicts visible panty tags.'
  },
  {
    id: 'bare_legs_vs_legwear',
    categoryLabel: 'Legwear Contradiction',
    mode: 'group_vs_group',
    tagsA: ['bare_legs'],
    tagsB: ['thighhighs', 'kneehighs', 'pantyhose', 'fishnets', 'bodystocking'],
    reason: '"bare_legs" conflicts with stockings, thighhighs, or pantyhose.'
  },
  {
    id: 'barefoot_vs_footwear',
    categoryLabel: 'Footwear Contradiction',
    mode: 'group_vs_group',
    tagsA: ['barefoot'],
    tagsB: ['loafers', 'mary_janes', 'high_heels', 'thigh_boots', 'sneakers', 'bobby_socks'],
    reason: '"barefoot" conflicts with shoes, boots, or socks.'
  },
  {
    id: 'eye_state_conflict',
    categoryLabel: 'Eye State Contradiction',
    mode: 'group_vs_group',
    tagsA: ['closed_eyes'],
    tagsB: [
      'one_eye_closed',
      'looking_at_viewer',
      'half-closed_eyes',
      'jitome',
      'sanpaku',
      'glaring'
    ],
    reason: '"closed_eyes" shuts both eyelids, preventing iris visibility or direct eye contact.'
  },
  {
    id: 'camera_vertical_angle_conflict',
    categoryLabel: 'Camera Angle Clash',
    mode: 'group_vs_group',
    tagsA: ['from_above'],
    tagsB: ['from_below', 'upskirt'],
    reason: 'High-angle ("from_above") and low-angle ("from_below") camera positions are opposite.'
  },
  {
    id: 'posture_conflict',
    categoryLabel: 'Body Posture Clash',
    mode: 'mutually_exclusive',
    tagsA: ['standing', 'sitting', 'lying', 'all_fours', 'jumping'],
    reason: 'Multiple primary body postures in a solo prompt can cause anatomical ambiguity.'
  },
  {
    id: 'era_tag_conflict',
    categoryLabel: 'Illustrious Era Tag Clash',
    mode: 'mutually_exclusive',
    tagsA: ['newest', 'late', 'mid', 'early'],
    reason: 'Only one Danbooru chronological era token should be active at a time in SDXL Illustrious.'
  },
  {
    id: 'sky_time_conflict',
    categoryLabel: 'Time of Day / Sky Clash',
    mode: 'mutually_exclusive',
    tagsA: ['blue_sky', 'sunset', 'night_sky'],
    reason: 'Daytime blue_sky, sunset, and night_sky compete for global scene lighting.'
  },
  {
    id: 'color_palette_conflict',
    categoryLabel: 'Color Palette Clash',
    mode: 'group_vs_group',
    tagsA: ['monochrome', 'greyscale'],
    tagsB: ['vibrant_colors', 'pastel_colors'],
    reason: 'Monochrome/greyscale conflicts with full-color palette tags (unless using spot_color).'
  }
];

/**
 * Evaluates the active prompt tags against all conflict rules and returns deduplicated conflicts.
 */
export function detectPromptConflicts(activeTags: string[]): DetectedConflict[] {
  const activeSet = new Set(activeTags);
  const detected: DetectedConflict[] = [];

  for (const rule of CONFLICT_RULES) {
    if (rule.mode === 'mutually_exclusive') {
      const present = rule.tagsA.filter((t) => activeSet.has(t));
      if (present.length > 1) {
        for (let i = 0; i < present.length; i++) {
          for (let j = i + 1; j < present.length; j++) {
            detected.push({
              id: `${rule.id}_${present[i]}_${present[j]}`,
              categoryLabel: rule.categoryLabel,
              tagA: present[i],
              tagB: present[j],
              reason: rule.reason
            });
          }
        }
      }
    } else if (rule.mode === 'group_vs_group' && rule.tagsB) {
      const presentA = rule.tagsA.filter((t) => activeSet.has(t));
      const presentB = rule.tagsB.filter((t) => activeSet.has(t));
      if (presentA.length > 0 && presentB.length > 0) {
        for (const a of presentA) {
          for (const b of presentB) {
            if (a !== b) {
              detected.push({
                id: `${rule.id}_${a}_${b}`,
                categoryLabel: rule.categoryLabel,
                tagA: a,
                tagB: b,
                reason: rule.reason
              });
            }
          }
        }
      }
    }
  }

  return detected;
}
