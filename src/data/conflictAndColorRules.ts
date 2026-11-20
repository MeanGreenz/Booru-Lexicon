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

const COMPOUND_COLOR_PREFIXES = [
  'light_blue',
  'dark_blue',
  'light_brown',
  'dark_brown',
  'light_green',
  'dark_green',
  'light_purple',
  'dark_purple'
];

const COLOR_PREFIX_SET = new Set(
  CANONICAL_BOORU_COLORS.map((c) => c.prefix).concat([
    'blonde',
    'grey',
    'orange',
    'amber',
    'dark',
    'pale',
    ...COMPOUND_COLOR_PREFIXES
  ])
);

const SINGLE_COLOR_PREFIX_SET = new Set(
  CANONICAL_BOORU_COLORS.map((c) => c.prefix).concat(['blonde', 'grey', 'orange', 'amber'])
);

/**
 * Set of canonical base tags or suffixes that support Danbooru color prefixes
 * e.g. bikini -> black_bikini, thighhighs -> white_thighhighs, dress -> red_dress
 */
const COLORABLE_BASE_TAGS = new Set([
  'bikini',
  'bikini_top',
  'bikini_bottom',
  'micro_bikini',
  'string_bikini',
  'side-tie_bikini',
  'o-ring_bikini',
  'one-piece_swimsuit',
  'swimsuit',
  'leotard',
  'highleg_leotard',
  'bodysuit',
  'plugsuit',
  'bodystocking',
  'lingerie',
  'bra',
  'sports_bra',
  'strapless_bra',
  'frilled_bra',
  'panties',
  'striped_panties',
  'side-tie_panties',
  'crotchless_panties',
  'thong',
  'babydoll',
  'chemise',
  'negligee',
  'nightgown',
  'pajamas',
  'garter_belt',
  'garter_straps',
  'thigh_strap',
  'corset',
  'dress',
  'sundress',
  'china_dress',
  'sailor_dress',
  'evening_gown',
  'wedding_dress',
  'kimono',
  'furisode',
  'yukata',
  'hanfu',
  'dirndl',
  'hakama',
  'haori',
  'obi',
  'robe',
  'apron',
  'maid_apron',
  'lab_coat',
  'coat',
  'cloak',
  'jacket',
  'veil',
  'skirt',
  'pleated_skirt',
  'miniskirt',
  'microskirt',
  'pencil_skirt',
  'plaid_skirt',
  'shirt',
  'blouse',
  'dress_shirt',
  'collared_shirt',
  't-shirt',
  'tank_top',
  'camisole',
  'tube_top',
  'blazer',
  'hoodie',
  'cardigan',
  'sweater',
  'ribbed_sweater',
  'turtleneck',
  'turtleneck_sweater',
  'sleeveless_turtleneck',
  'crop_top',
  'track_jacket',
  'track_suit',
  'tuxedo',
  'jeans',
  'dolphin_shorts',
  'short_shorts',
  'denim_shorts',
  'bike_shorts',
  'buruma',
  'cape',
  'capelet',
  'thighhighs',
  'kneehighs',
  'pantyhose',
  'socks',
  'bobby_socks',
  'loose_socks',
  'leggings',
  'fishnets',
  'shoes',
  'loafers',
  'mary_janes',
  'high_heels',
  'boots',
  'thigh_boots',
  'sandals',
  'sneakers',
  'glasses',
  'sunglasses',
  'mask',
  'bow',
  'ribbon',
  'hair_ribbon',
  'hair_bow',
  'hairband',
  'hairclip',
  'hair_flower',
  'hair_ornament',
  'hair_tubes',
  'hair_bobbles',
  'scrunchie',
  'hair_scrunchie',
  'hat',
  'baseball_cap',
  'beret',
  'peaked_cap',
  'straw_hat',
  'witch_hat',
  'choker',
  'collar',
  'leash',
  'blindfold',
  'bandages',
  'necktie',
  'bowtie',
  'neckerchief',
  'scarf',
  'gloves',
  'fingerless_gloves',
  'elbow_gloves',
  'wrist_cuffs',
  'headphones',
  'wings',
  'feathered_wings',
  'bat_wings',
  'horns',
  'halo',
  'tail',
  'cat_tail',
  'fox_tail',
  'dragon_tail',
  'cat_ears',
  'fox_ears',
  'rabbit_ears',
  'dog_ears',
  'horse_ears',
  'wolf_ears',
  'mouse_ears',
  'sheep_ears',
  'tiger_ears',
  'lion_ears',
  'bear_ears',
  'deer_ears',
  'cow_ears',
  'wolf_tail',
  'dog_tail',
  'rabbit_tail',
  'horse_tail',
  'cow_tail',
  'demon_tail',
  'shark_tail',
  'snake_tail',
  'fish_tail',
  'demon_wings',
  'dragon_wings',
  'fairy_wings',
  'butterfly_wings',
  'insect_wings',
  'demon_horns',
  'dragon_horns',
  'oni_horns',
  'curled_horns',
  'fur',
  'skin',
  'sclera',
  'scales',
  'beard',
  'background',
  'umbrella',
  'parasol',
  'eyeshadow',
  'eyeliner',
  'lipstick',
  'nail_polish',
  'suit',
  'vest',
  'sweater_vest',
  'sleeveless_shirt',
  'sleeveless_dress',
  'pants',
  'overalls',
  'frilled_bikini',
  'front-tie_bikini',
  'bandeau',
  'sarong',
  'thigh_ribbon'
]);

/**
 * Strips any existing canonical color prefix from a tag string so we can check its base noun
 * or swap its color prefix cleanly (e.g. 'black_bikini' -> 'bikini', 'light_blue_hair' -> 'hair').
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

  // Special case: colored_skin / dark_skin / pale_skin
  if (tag === 'colored_skin') return { colorPrefix: null, baseTag: 'skin' };
  if (tag === 'dark_skin') return { colorPrefix: 'dark', baseTag: 'skin' };
  if (tag === 'pale_skin') return { colorPrefix: 'pale', baseTag: 'skin' };

  // Special case: colored_sclera / colored_background
  if (tag === 'colored_sclera') return { colorPrefix: null, baseTag: 'sclera' };
  if (tag === 'colored_background') return { colorPrefix: null, baseTag: 'background' };

  // Check compound color prefixes first (e.g. light_blue_hair, dark_blue_hair, light_brown_hair)
  for (const compound of COMPOUND_COLOR_PREFIXES) {
    if (tag.startsWith(`${compound}_`)) {
      return {
        colorPrefix: compound,
        baseTag: tag.slice(compound.length + 1)
      };
    }
  }

  const firstUnderscore = tag.indexOf('_');
  if (firstUnderscore > 0) {
    const potentialColor = tag.slice(0, firstUnderscore);
    const remainder = tag.slice(firstUnderscore + 1);
    if (SINGLE_COLOR_PREFIX_SET.has(potentialColor)) {
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
  if (tag === 'colored_skin' || tag === 'colored_sclera' || tag === 'colored_background') return true;
  const { colorPrefix, baseTag } = getBaseUncoloredTag(tag);
  if (colorPrefix && (baseTag === 'hair' || baseTag === 'eyes')) {
    return true;
  }
  return COLORABLE_BASE_TAGS.has(baseTag);
}

/**
 * Applies a canonical Danbooru color prefix to a tag, honoring Danbooru's canonical color names
 * for hair, eyes, skin, beard, and backgrounds.
 */
export function applyColorPrefixToTag(tag: string, colorPrefix: string): string {
  if (tag === 'colored_inner_hair' || tag.endsWith('_inner_hair')) {
    if (colorPrefix === 'gold') return 'blonde_inner_hair';
    return `${colorPrefix}_inner_hair`;
  }

  const { baseTag } = getBaseUncoloredTag(tag);

  if (baseTag === 'hair') {
    if (colorPrefix === 'yellow' || colorPrefix === 'gold') return 'blonde_hair';
    return `${colorPrefix}_hair`;
  }

  if (baseTag === 'eyes') {
    if (colorPrefix === 'gold') return 'amber_eyes';
    if (colorPrefix === 'silver') return 'grey_eyes';
    return `${colorPrefix}_eyes`;
  }

  if (baseTag === 'skin') {
    if (colorPrefix === 'black' || colorPrefix === 'brown') return 'dark_skin';
    if (colorPrefix === 'silver') return 'grey_skin';
    return `${colorPrefix}_skin`;
  }

  if (baseTag === 'beard') {
    if (colorPrefix === 'yellow' || colorPrefix === 'gold') return 'blonde_beard';
    if (colorPrefix === 'silver') return 'grey_beard';
    return `${colorPrefix}_beard`;
  }

  if (baseTag === 'background') {
    if (colorPrefix === 'gold') return 'yellow_background';
    if (colorPrefix === 'silver') return 'grey_background';
    if (colorPrefix === 'aqua') return 'blue_background';
    return `${colorPrefix}_background`;
  }

  return `${colorPrefix}_${baseTag}`;
}

/**
 * Returns the canonical uncolored base tag when resetting a color-prefixed tag,
 * or null if resetting would produce an invalid bare noun (e.g. 'hair' or 'eyes')
 * or if the tag has no removable color prefix.
 */
export function getResetColorTarget(tag: string): string | null {
  const { colorPrefix, baseTag } = getBaseUncoloredTag(tag);
  if (!colorPrefix) return null;
  if (baseTag === 'hair' || baseTag === 'eyes') return null;
  if (baseTag === 'skin') return 'colored_skin';
  if (baseTag === 'sclera') return 'colored_sclera';
  if (baseTag === 'background') return 'colored_background';
  return baseTag;
}

interface ConflictGroupRule {
  id: string;
  categoryLabel: string;
  mode: 'mutually_exclusive' | 'group_vs_group';
  tagsA: string[];
  tagsB?: string[];
  reason: string;
  /** Match color-prefixed variants (e.g. black_bikini -> bikini) against rule tags */
  matchColorVariants?: boolean;
  /** Skip rule when multi-character subject tags (e.g. 2girls, 1girl+1boy) are present */
  soloCharacterOnly?: boolean;
}

const MULTI_CHARACTER_TAGS = new Set([
  '2girls',
  '3girls',
  '4girls',
  '5girls',
  '6+girls',
  'multiple_girls',
  '2boys',
  '3boys',
  '4boys',
  '6+boys',
  'multiple_boys',
  'threesome',
  'group_sex',
  'gangbang',
  'spitroast'
]);

const FEMALE_SUBJECT_COUNT_TAGS = ['1girl', '2girls', '3girls', '4girls', '5girls', '6+girls', 'multiple_girls'];
const MALE_SUBJECT_COUNT_TAGS = ['1boy', '2boys', '3boys', '4boys', '6+boys', 'multiple_boys'];

export const CONFLICT_RULES: ConflictGroupRule[] = [
  {
    id: 'rating_conflict',
    categoryLabel: 'Rating Bucket Contradiction',
    mode: 'mutually_exclusive',
    tagsA: ['rating_general', 'rating_sensitive', 'rating_questionable', 'rating_explicit'],
    reason: 'Multiple SDXL Illustrious rating buckets compete for the global content rating conditioning.'
  },
  {
    id: 'rating_general_vs_explicit',
    categoryLabel: 'SFW Rating vs. Explicit Content Clash',
    mode: 'group_vs_group',
    tagsA: ['rating_general'],
    tagsB: [
      'nsfw',
      'nude',
      'completely_nude',
      'topless',
      'bottomless',
      'nipples',
      'pussy',
      'penis',
      'erection',
      'anus',
      'sex',
      'cowgirl_position',
      'reverse_cowgirl_position',
      'doggystyle',
      'sex_from_behind',
      'missionary',
      'mating_press',
      'standing_sex',
      'fellatio',
      'cunnilingus',
      'paizuri',
      'handjob',
      'footjob',
      'masturbation',
      'fingering',
      'cum',
      'cum_in_pussy',
      'bukkake',
      'irrumatio',
      'anal',
      'ahegao',
      'spreading_own_pussy',
      'pussy_focus'
    ],
    reason: '"rating_general" enforces strictly all-ages content, directly conflicting with nude or explicit tags.'
  },
  {
    id: 'uncensored_vs_censored',
    categoryLabel: 'Censoring Contradiction',
    mode: 'group_vs_group',
    tagsA: ['uncensored'],
    tagsB: ['censored', 'mosaic_censoring', 'bar_censor', 'heart_censor', 'convenient_censoring'],
    reason: '"uncensored" conflicts with censorship tags like mosaic_censoring or bar_censor.'
  },
  {
    id: 'bust_size_conflict',
    categoryLabel: 'Bust Size Contradiction',
    mode: 'mutually_exclusive',
    soloCharacterOnly: true,
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
    soloCharacterOnly: true,
    tagsA: ['very_short_hair', 'short_hair', 'medium_hair', 'long_hair', 'very_long_hair', 'absurdly_long_hair'],
    reason: 'Combining short and long hair length tags causes inconsistent hair strand rendering.'
  },
  {
    id: 'no_humans_vs_subjects',
    categoryLabel: 'No-Humans vs. Character Subject Clash',
    mode: 'group_vs_group',
    tagsA: ['no_humans'],
    tagsB: [
      'solo',
      'solo_focus',
      '1girl',
      '2girls',
      '3girls',
      '4girls',
      '5girls',
      '6+girls',
      'multiple_girls',
      '1boy',
      '2boys',
      '3boys',
      '4boys',
      '6+boys',
      'multiple_boys',
      'male_focus'
    ],
    reason: '"no_humans" specifies a scenery/object-only image without human subjects.'
  },
  {
    id: 'solo_vs_multi_subject',
    categoryLabel: 'Subject Count Clash',
    mode: 'group_vs_group',
    tagsA: ['solo'],
    tagsB: [
      '2girls',
      '3girls',
      '4girls',
      '5girls',
      '6+girls',
      'multiple_girls',
      '2boys',
      '3boys',
      '4boys',
      '6+boys',
      'multiple_boys',
      'threesome',
      'group_sex',
      'gangbang',
      'double_penetration',
      'spitroast',
      'yuri',
      'hetero',
      'hugging',
      'hug_from_behind',
      'kissing',
      'french_kiss',
      'imminent_kiss',
      'holding_hands',
      'lap_pillow',
      'breast_to_breast',
      'cheek_to_cheek',
      'cooperative_paizuri',
      'tribadism',
      'back-to-back',
      'princess_carry',
      'piggyback',
      'leg_lock'
    ],
    reason: '"solo" specifies a single character alone in the frame, clashing with multi-character or couple tags.'
  },
  {
    id: 'completely_nude_vs_attire',
    categoryLabel: 'Nudity vs. Clothing Clash',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['completely_nude'],
    tagsB: [
      'school_uniform',
      'serafuku',
      'blazer',
      'maid',
      'military_uniform',
      'police_uniform',
      'nurse_uniform',
      'waitress_uniform',
      'business_suit',
      'suit',
      'tuxedo',
      'track_suit',
      'gym_uniform',
      'lab_coat',
      'kimono',
      'furisode',
      'yukata',
      'hanfu',
      'dirndl',
      'miko',
      'china_dress',
      'sailor_dress',
      'evening_gown',
      'wedding_dress',
      'gothic_lolita',
      'armor',
      'plate_armor',
      'chainmail',
      'robe',
      'dress',
      'white_dress',
      'black_dress',
      'sleeveless_dress',
      'sundress',
      'skirt',
      'pleated_skirt',
      'miniskirt',
      'microskirt',
      'pencil_skirt',
      'plaid_skirt',
      'high-waist_skirt',
      'pants',
      'jeans',
      'overalls',
      'short_shorts',
      'dolphin_shorts',
      'denim_shorts',
      'bike_shorts',
      'buruma',
      'hoodie',
      'sweater',
      'ribbed_sweater',
      'turtleneck',
      'turtleneck_sweater',
      'sleeveless_turtleneck',
      'cardigan',
      'jacket',
      'coat',
      'cloak',
      'shirt',
      'white_shirt',
      'blouse',
      'dress_shirt',
      'collared_shirt',
      't-shirt',
      'tank_top',
      'camisole',
      'tube_top',
      'crop_top',
      'vest',
      'sweater_vest',
      'swimsuit',
      'bikini',
      'bikini_top',
      'bikini_bottom',
      'micro_bikini',
      'string_bikini',
      'side-tie_bikini',
      'o-ring_bikini',
      'frilled_bikini',
      'front-tie_bikini',
      'slingshot_swimsuit',
      'one-piece_swimsuit',
      'school_swimsuit',
      'competition_swimsuit',
      'highleg_swimsuit',
      'leotard',
      'highleg_leotard',
      'bodysuit',
      'plugsuit',
      'bodystocking',
      'playboy_bunny',
      'reverse_bunny_suit',
      'virgin_killer_sweater',
      'lingerie',
      'underwear',
      'bra',
      'sports_bra',
      'strapless_bra',
      'frilled_bra',
      'bandeau',
      'panties',
      'striped_panties',
      'side-tie_panties',
      'crotchless_panties',
      'thong',
      'babydoll',
      'chemise',
      'negligee',
      'nightgown',
      'pajamas',
      'sarong',
      'thighhighs',
      'kneehighs',
      'pantyhose',
      'black_pantyhose',
      'white_pantyhose',
      'fishnets',
      'leggings',
      'socks',
      'bobby_socks',
      'loose_socks',
      'shoes',
      'boots',
      'thigh_boots',
      'high_heels',
      'loafers',
      'mary_janes',
      'sandals',
      'sneakers'
    ],
    reason: '"completely_nude" instructs the model to remove all garments, conflicting with specific clothing tags.'
  },
  {
    id: 'topless_vs_upper_attire',
    categoryLabel: 'Topless vs. Upper Garment Clash',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['topless'],
    tagsB: [
      'shirt',
      'white_shirt',
      'blouse',
      'dress_shirt',
      'collared_shirt',
      'sleeveless_shirt',
      't-shirt',
      'tank_top',
      'camisole',
      'tube_top',
      'crop_top',
      'blazer',
      'hoodie',
      'cardigan',
      'sweater',
      'ribbed_sweater',
      'turtleneck',
      'turtleneck_sweater',
      'sleeveless_turtleneck',
      'vest',
      'sweater_vest',
      'bra',
      'sports_bra',
      'strapless_bra',
      'frilled_bra',
      'bandeau',
      'bikini',
      'bikini_top',
      'micro_bikini',
      'string_bikini',
      'side-tie_bikini',
      'o-ring_bikini',
      'frilled_bikini',
      'front-tie_bikini',
      'swimsuit',
      'one-piece_swimsuit',
      'school_swimsuit',
      'competition_swimsuit',
      'highleg_swimsuit',
      'slingshot_swimsuit',
      'leotard',
      'highleg_leotard',
      'bodysuit',
      'plugsuit',
      'bodystocking',
      'playboy_bunny',
      'virgin_killer_sweater',
      'dress',
      'white_dress',
      'black_dress',
      'sundress',
      'sailor_dress',
      'evening_gown',
      'wedding_dress',
      'serafuku',
      'school_uniform',
      'babydoll',
      'chemise',
      'negligee',
      'nightgown',
      'pajamas'
    ],
    reason: '"topless" conflicts with upper-body shirts, sweaters, bras, dresses, or one-piece garments.'
  },
  {
    id: 'bottomless_vs_lower_attire',
    categoryLabel: 'Bottomless vs. Lower Garment Clash',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['bottomless'],
    tagsB: [
      'skirt',
      'pleated_skirt',
      'miniskirt',
      'microskirt',
      'pencil_skirt',
      'plaid_skirt',
      'high-waist_skirt',
      'short_shorts',
      'dolphin_shorts',
      'denim_shorts',
      'bike_shorts',
      'buruma',
      'pants',
      'jeans',
      'overalls',
      'panties',
      'striped_panties',
      'side-tie_panties',
      'crotchless_panties',
      'thong',
      'bikini_bottom',
      'pantyhose',
      'black_pantyhose',
      'white_pantyhose',
      'leggings',
      'bodystocking',
      'one-piece_swimsuit',
      'school_swimsuit',
      'competition_swimsuit',
      'highleg_swimsuit',
      'leotard',
      'highleg_leotard',
      'bodysuit',
      'plugsuit',
      'playboy_bunny'
    ],
    reason: '"bottomless" conflicts with skirts, shorts, pants, panties, or one-piece lower garments.'
  },
  {
    id: 'no_bra_vs_bra',
    categoryLabel: 'Underwear State Contradiction',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['no_bra'],
    tagsB: ['bra', 'frilled_bra', 'sports_bra', 'strapless_bra', 'bandeau'],
    reason: '"no_bra" directly contradicts wearing a bra.'
  },
  {
    id: 'no_panties_vs_panties',
    categoryLabel: 'Underwear State Contradiction',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['no_panties'],
    tagsB: ['panties', 'striped_panties', 'side-tie_panties', 'crotchless_panties', 'thong', 'pantyshot'],
    reason: '"no_panties" contradicts visible panty tags.'
  },
  {
    id: 'bare_legs_vs_legwear',
    categoryLabel: 'Legwear Contradiction',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['bare_legs'],
    tagsB: [
      'thighhighs',
      'kneehighs',
      'pantyhose',
      'black_pantyhose',
      'white_pantyhose',
      'fishnets',
      'bodystocking',
      'leggings',
      'pants',
      'jeans'
    ],
    reason: '"bare_legs" conflicts with stockings, thighhighs, pantyhose, leggings, or full-length trousers.'
  },
  {
    id: 'barefoot_vs_footwear',
    categoryLabel: 'Footwear Contradiction',
    mode: 'group_vs_group',
    matchColorVariants: true,
    soloCharacterOnly: true,
    tagsA: ['barefoot'],
    tagsB: [
      'shoes',
      'loafers',
      'mary_janes',
      'high_heels',
      'boots',
      'thigh_boots',
      'sandals',
      'sneakers',
      'socks',
      'bobby_socks',
      'loose_socks',
      'pantyhose',
      'black_pantyhose',
      'white_pantyhose'
    ],
    reason: '"barefoot" conflicts with shoes, boots, sandals, socks, or footed pantyhose.'
  },
  {
    id: 'eye_state_conflict',
    categoryLabel: 'Eye State Contradiction',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['closed_eyes', '>_<', '^_^'],
    tagsB: [
      'one_eye_closed',
      'looking_at_viewer',
      'eye_contact',
      'sideways_glance',
      'looking_away',
      'looking_up',
      'looking_down',
      'looking_to_the_side',
      'half-closed_eyes',
      'wide-eyed',
      'crazy_eyes',
      'rolling_eyes',
      'narrowed_eyes',
      'squinting',
      'sparkling_eyes',
      'jitome',
      'sanpaku',
      'glaring'
    ],
    reason: '"closed_eyes", ">_<", or "^_^" shuts both eyelids, preventing iris visibility or active gaze direction.'
  },
  {
    id: 'eyebrow_state_conflict',
    categoryLabel: 'Eyebrow Shape Contradiction',
    mode: 'mutually_exclusive',
    soloCharacterOnly: true,
    tagsA: ['v-shaped_eyebrows', 'raised_eyebrows'],
    reason: 'V-shaped (scowling) and raised (surprised) eyebrows pull the brow in opposite directions.'
  },
  {
    id: 'mouth_state_conflict',
    categoryLabel: 'Mouth State Contradiction',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['closed_mouth'],
    tagsB: [
      'open_mouth',
      ':d',
      ':p',
      ':o',
      ';d',
      'parted_lips',
      'tongue_out',
      'long_tongue',
      'clenched_teeth',
      'shark_teeth',
      'fangs',
      'grin',
      'laughing',
      'yawn',
      'uvula',
      'saliva',
      'saliva_trail',
      'drooling',
      'licking_lips'
    ],
    reason: '"closed_mouth" conflicts with open-mouthed or visible-tooth/tongue expressions.'
  },
  {
    id: 'expressionless_vs_emotive_conflict',
    categoryLabel: 'Expression Contradiction',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['expressionless'],
    tagsB: [
      'happy',
      'grin',
      ':d',
      'laughing',
      'ahegao',
      'torogao',
      'crying',
      'angry',
      'scowl',
      'panicking',
      'surprised'
    ],
    reason: '"expressionless" specifies a deadpan, stoic face that conflicts with high-intensity emotional expressions.'
  },
  {
    id: 'gaze_direction_conflict',
    categoryLabel: 'Gaze Direction Clash',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['looking_at_viewer', 'eye_contact'],
    tagsB: ['looking_away', 'looking_at_another', 'looking_to_the_side', 'facing_away'],
    reason: 'Direct viewer eye contact conflicts with looking away or facing away from the camera.'
  },
  {
    id: 'head_orientation_conflict',
    categoryLabel: 'Head Orientation Clash',
    mode: 'mutually_exclusive',
    soloCharacterOnly: true,
    tagsA: ['straight-on', 'facing_viewer', 'profile', 'facing_away'],
    reason: 'Front-facing, 90-degree side profile, and facing-away orientations are mutually exclusive.'
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
    id: 'shot_scale_conflict',
    categoryLabel: 'Framing / Shot Scale Clash',
    mode: 'group_vs_group',
    tagsA: ['close-up', 'portrait', 'cropped_shoulders'],
    tagsB: ['full_body', 'wide_shot', 'very_wide_shot'],
    reason: 'Tight face/portrait framing conflicts with full-body or wide establishing shots.'
  },
  {
    id: 'posture_conflict',
    categoryLabel: 'Body Posture Clash',
    mode: 'mutually_exclusive',
    soloCharacterOnly: true,
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
    id: 'lineart_vs_no_lineart',
    categoryLabel: 'Lineart Rendering Clash',
    mode: 'group_vs_group',
    tagsA: ['no_lineart'],
    tagsB: ['lineart', 'thick_outline'],
    reason: '"no_lineart" specifies lineless painting, conflicting with explicit contour lineart tags.'
  },
  {
    id: 'indoors_vs_outdoors',
    categoryLabel: 'Indoor vs. Outdoor Setting Clash',
    mode: 'group_vs_group',
    tagsA: ['indoors'],
    tagsB: ['outdoors', 'blue_sky', 'cloudy_sky', 'night_sky', 'starry_sky', 'beach', 'ocean', 'forest', 'flower_field'],
    reason: '"indoors" conflicts with open outdoor environments and sky backdrops.'
  },
  {
    id: 'sky_time_conflict',
    categoryLabel: 'Time of Day / Sky Clash',
    mode: 'mutually_exclusive',
    tagsA: ['blue_sky', 'sunset', 'sunrise', 'night_sky', 'night'],
    reason: 'Daytime blue_sky, sunset/sunrise, and night/night_sky compete for global scene lighting.'
  },
  {
    id: 'day_vs_night_conflict',
    categoryLabel: 'Day vs. Night Lighting Clash',
    mode: 'group_vs_group',
    tagsA: ['day', 'sun', 'sunlight'],
    tagsB: ['night', 'night_sky', 'starry_sky', 'full_moon', 'moonlight'],
    reason: 'Daylight illumination tags conflict with nocturnal night sky and moonlight tags.'
  },
  {
    id: 'studio_background_color_conflict',
    categoryLabel: 'Studio Background Color Clash',
    mode: 'mutually_exclusive',
    tagsA: [
      'white_background',
      'black_background',
      'grey_background',
      'blue_background',
      'pink_background',
      'red_background',
      'yellow_background',
      'purple_background',
      'green_background',
      'orange_background',
      'brown_background',
      'transparent_background'
    ],
    reason: 'Multiple solid studio background color tags compete unless using two-tone_background or gradient_background.'
  },
  {
    id: 'color_palette_conflict',
    categoryLabel: 'Color Palette Clash',
    mode: 'group_vs_group',
    tagsA: ['monochrome', 'greyscale'],
    tagsB: ['colorful', 'pastel_colors'],
    reason: 'Monochrome/greyscale conflicts with full-color palette tags (unless using spot_color).'
  },
  {
    id: 'kemonomimi_vs_furry_conflict',
    categoryLabel: 'Kemonomimi vs. Full Anthro Furry Clash',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['kemonomimi_mode'],
    tagsB: ['furry', 'furry_female', 'furry_male', 'anthro', 'feral', 'snout'],
    reason: '"kemonomimi_mode" specifies human skin/face with animal ears & tail, which conflicts with full-fur/snout "furry" / "anthro" tags.'
  },
  {
    id: 'bipedal_vs_feral_conflict',
    categoryLabel: 'Anthro vs. Feral Body Plan Clash',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['anthro', 'semi-anthro'],
    tagsB: ['feral'],
    reason: '"anthro" (bipedal upright anatomy) conflicts with "feral" (quadrupedal non-bipedal beast anatomy).'
  },
  {
    id: 'real_vs_fake_animal_ears_conflict',
    categoryLabel: 'Real vs. Fake Animal Ears Clash',
    mode: 'group_vs_group',
    soloCharacterOnly: true,
    tagsA: ['kemonomimi_mode', 'animal_ear_fluff'],
    tagsB: ['fake_animal_ears', 'fake_rabbit_ears'],
    reason: 'Biological kemonomimi ears conflict with cosplay headband "fake_animal_ears" / "fake_rabbit_ears".'
  },
  {
    id: 'fantasy_skin_color_conflict',
    categoryLabel: 'Skin Color Contradiction',
    mode: 'mutually_exclusive',
    soloCharacterOnly: true,
    tagsA: [
      'pale_skin',
      'dark_skin',
      'blue_skin',
      'green_skin',
      'red_skin',
      'purple_skin',
      'grey_skin',
      'white_skin',
      'pink_skin'
    ],
    reason: 'Multiple primary skin tone tags compete unless depicting multiple characters.'
  }
];

function isMultiCharacterPrompt(activeSet: Set<string>): boolean {
  for (const t of MULTI_CHARACTER_TAGS) {
    if (activeSet.has(t)) return true;
  }
  const hasFemale = FEMALE_SUBJECT_COUNT_TAGS.some((t) => activeSet.has(t));
  const hasMale = MALE_SUBJECT_COUNT_TAGS.some((t) => activeSet.has(t));
  return hasFemale && hasMale;
}

/**
 * Evaluates the active prompt tags against all conflict rules (including color-prefixed garment variants)
 * and returns deduplicated conflicts referencing the exact active prompt tag strings.
 */
export function detectPromptConflicts(activeTags: string[]): DetectedConflict[] {
  const activeSet = new Set(activeTags);
  const multiChar = isMultiCharacterPrompt(activeSet);
  const detected: DetectedConflict[] = [];
  const emittedPairs = new Set<string>();

  const pushConflict = (
    ruleId: string,
    categoryLabel: string,
    tagA: string,
    tagB: string,
    reason: string
  ) => {
    if (tagA === tagB) return;
    const pairKey = tagA < tagB ? `${tagA}::${tagB}` : `${tagB}::${tagA}`;
    if (emittedPairs.has(pairKey)) return;
    emittedPairs.add(pairKey);
    detected.push({
      id: `${ruleId}_${tagA}_${tagB}`,
      categoryLabel,
      tagA,
      tagB,
      reason
    });
  };

  // Precompute base uncolored tag map for fast color-variant matching
  const activeWithBase = activeTags.map((tag) => ({
    tag,
    baseTag: getBaseUncoloredTag(tag).baseTag
  }));

  // Special semantic check: "solo" paired with both female and male count tags (e.g. solo + 1girl + 1boy)
  if (activeSet.has('solo')) {
    const activeFemale = FEMALE_SUBJECT_COUNT_TAGS.find((t) => activeSet.has(t));
    const activeMale = MALE_SUBJECT_COUNT_TAGS.find((t) => activeSet.has(t));
    if (activeFemale && activeMale) {
      pushConflict(
        'solo_vs_couple_counts',
        'Subject Count Clash',
        'solo',
        activeMale,
        `"solo" requires a single character, clashing with having both "${activeFemale}" and "${activeMale}" in the same scene.`
      );
    }
  }

  for (const rule of CONFLICT_RULES) {
    if (rule.soloCharacterOnly && multiChar) continue;

    const ruleSetA = new Set(rule.tagsA);
    const presentA = rule.matchColorVariants
      ? activeWithBase
          .filter((entry) => ruleSetA.has(entry.tag) || ruleSetA.has(entry.baseTag))
          .map((entry) => entry.tag)
      : rule.tagsA.filter((t) => activeSet.has(t));

    if (rule.mode === 'mutually_exclusive') {
      if (presentA.length > 1) {
        // Ignore paired straight-on + facing_viewer (synonymous front orientation, not contradictory)
        for (let i = 0; i < presentA.length; i++) {
          for (let j = i + 1; j < presentA.length; j++) {
            const a = presentA[i];
            const b = presentA[j];
            if (
              rule.id === 'head_orientation_conflict' &&
              ((a === 'straight-on' && b === 'facing_viewer') ||
                (a === 'facing_viewer' && b === 'straight-on'))
            ) {
              continue;
            }
            pushConflict(rule.id, rule.categoryLabel, a, b, rule.reason);
          }
        }
      }
    } else if (rule.mode === 'group_vs_group' && rule.tagsB) {
      if (presentA.length === 0) continue;
      const ruleSetB = new Set(rule.tagsB);
      const presentB = rule.matchColorVariants
        ? activeWithBase
            .filter((entry) => ruleSetB.has(entry.tag) || ruleSetB.has(entry.baseTag))
            .map((entry) => entry.tag)
        : rule.tagsB.filter((t) => activeSet.has(t));

      if (presentB.length > 0) {
        for (const a of presentA) {
          for (const b of presentB) {
            pushConflict(rule.id, rule.categoryLabel, a, b, rule.reason);
          }
        }
      }
    }
  }

  return detected;
}
