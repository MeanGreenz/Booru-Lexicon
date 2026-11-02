import {
  NegativeModularPack,
  NegativePreset,
  PositiveNegativeOverlap
} from '../types/lexicon';

export const MODULAR_NEGATIVE_PACKS: NegativeModularPack[] = [
  {
    id: 'quality_baseline',
    name: 'Quality, Era & Baseline Degradation',
    shortLabel: 'Baseline Quality',
    description:
      'Blocks low-scoring training buckets, blurry outputs, unfinished sketches, and early-2000s degradation in SDXL Illustrious.',
    tags: [
      { tag: 'worst_quality', description: 'Lowest percentile aesthetic bucket in Illustrious training.' },
      { tag: 'low_quality', description: 'Below-average rendering quality bucket.' },
      { tag: 'normal_quality', description: 'Average quality bucket; excluding pushes toward best_quality.' },
      { tag: 'lowres', description: 'Low-resolution upscaled or pixelated source images.' },
      { tag: 'early', description: 'Pre-2012 Danbooru era tag with dated proportions and flat shading.' },
      { tag: 'oldest', description: 'Oldest archival Danbooru era bucket.' },
      { tag: 'bad_id', description: 'Corrupted or mismatched metadata/ID training artifacts.' },
      { tag: 'poorly_drawn', description: 'Amateur or rough anatomical lineart.' },
      { tag: 'amateur_drawing', description: 'Unpolished beginner fanart look.' },
      { tag: 'sketch', description: 'Unfinished pencil/line sketch without clean ink.' },
      { tag: 'unfinished', description: 'Work-in-progress or uncolored regions.' },
      { tag: 'blurry', description: 'Unintended motion blur or out-of-focus subject.' },
      { tag: 'chromatic_aberration_abuse', description: 'Excessive RGB color fringing across lineart.' }
    ]
  },
  {
    id: 'anatomy_hands',
    name: 'Anatomy, Hands, Digits & Limb Distortion Fixes',
    shortLabel: 'Anatomy & Hands',
    description:
      'Prevents extra fingers, fused digits, mutated hands, extra limbs, and facial/eye asymmetry.',
    tags: [
      { tag: 'bad_anatomy', description: 'General anatomical distortion or impossible joint bends.' },
      { tag: 'bad_hands', description: 'Malformed hand structure or broken knuckles.' },
      { tag: 'mutated_hands', description: 'Severely warped or merged hand geometry.' },
      { tag: 'missing_fingers', description: 'Hands rendered with fewer than five digits.' },
      { tag: 'extra_fingers', description: 'Hands rendered with six or more fingers.' },
      { tag: 'extra_digit', description: 'Additional thumb, finger, or toe.' },
      { tag: 'fewer_digits', description: 'Missing fingers or toes.' },
      { tag: 'fused_fingers', description: 'Adjacent fingers melted together without separation.' },
      { tag: 'six_fingers', description: 'Classic six-finger diffusion artifact.' },
      { tag: 'bad_feet', description: 'Malformed feet, ankles, or toes.' },
      { tag: 'extra_limbs', description: 'Third arm or third leg sprouting from torso.' },
      { tag: 'missing_limbs', description: 'Unintended amputated or vanishing arms/legs.' },
      { tag: 'extra_arms', description: 'Duplicate arm rendering during dynamic poses.' },
      { tag: 'extra_legs', description: 'Duplicate leg rendering in sitting or crossed-leg poses.' },
      { tag: 'malformed_limbs', description: 'Bent or rubbery forearms, thighs, or calves.' },
      { tag: 'disfigured', description: 'Warped torso or facial proportions.' },
      { tag: 'bad_proportions', description: 'Incorrect head-to-body or torso-to-leg ratio.' },
      { tag: 'gross_proportions', description: 'Extreme unintended anatomical exaggeration.' },
      { tag: 'long_neck', description: 'Elongated neck artifact.' },
      { tag: 'asymmetrical_eyes', description: 'Mismatched iris size or vertical eye alignment.' },
      { tag: 'cross-eyed', description: 'Unintended inward pupil convergence.' }
    ]
  },
  {
    id: 'anti_censorship',
    name: 'Anti-Censorship, Mosaic & Bar Censor Removal',
    shortLabel: 'Anti-Censorship',
    description:
      'Eliminates Japanese pixel mosaic, black censor bars, white light beams, and convenient steam/hair censoring.',
    tags: [
      { tag: 'censored', description: 'Master tag for any censored artwork.' },
      { tag: 'mosaic_censoring', description: 'Pixelated mosaic grid over intimate anatomy.' },
      { tag: 'bar_censor', description: 'Black or white rectangular censor bars.' },
      { tag: 'light_censor', description: 'Glowing white anime light beams obscuring anatomy.' },
      { tag: 'steam_censor', description: 'Convenient bath steam clouds blocking view.' },
      { tag: 'hair_censor', description: 'Strands of hair artificially placed to cover nipples/groin.' },
      { tag: 'convenient_censoring', description: 'Foreground objects blocking intimate areas.' },
      { tag: 'novelty_censor', description: 'Stickers, emojis, or icons placed over anatomy.' },
      { tag: 'heart_censor', description: 'Heart shapes obscuring nipples or genitals.' },
      { tag: 'silhouette_censor', description: 'Darkened shadow silhouette hiding details.' },
      { tag: 'out_of_frame_censoring', description: 'Camera cropping right before explicit details.' },
      { tag: 'pointless_censoring', description: 'Censor bars placed over non-explicit areas.' }
    ]
  },
  {
    id: 'anti_3d_realistic',
    name: 'Anti-3D, Photorealistic & CGI Style Blockers',
    shortLabel: 'Anti-3D / Realistic',
    description:
      'Forces crisp 2D anime illustration by blocking 3D renders, MMD models, figurines, cosplay photos, and semi-realism.',
    tags: [
      { tag: '3d', description: '3D polygonal or CGI rendering.' },
      { tag: 'realistic', description: 'Photorealistic skin shading and facial structure.' },
      { tag: 'photorealistic', description: 'Camera-like realism instead of 2D anime lineart.' },
      { tag: 'photo_(medium)', description: 'Real-world photography medium.' },
      { tag: 'cgi', description: 'Computer-generated 3D imagery.' },
      { tag: '3d_custom_girl', description: 'Dated 3D character creator model aesthetic.' },
      { tag: 'mmd', description: 'MikuMikuDance 3D shader look.' },
      { tag: 'blender_(medium)', description: '3D Blender viewport or Cycles render look.' },
      { tag: 'source_filmmaker', description: 'SFM 3D lighting and model textures.' },
      { tag: 'unreal_engine', description: 'Game engine 3D shader specular highlights.' },
      { tag: 'doll', description: 'Ball-jointed doll or plastic mannequin look.' },
      { tag: 'figurine', description: 'PVC anime scale figure photography.' },
      { tag: 'cosplay', description: 'Live-action cosplayer photography.' },
      { tag: 'real_life', description: 'Real-world photograph elements.' },
      { tag: 'semi-realistic', description: 'Western painted semi-realism instead of clean anime cel/soft shading.' },
      { tag: 'uncanny_valley', description: 'Unnatural hybrid between 2D anime eyes and 3D skin.' }
    ]
  },
  {
    id: 'watermark_text_ui',
    name: 'Watermark, Text, UI, Border & Frame Blockers',
    shortLabel: 'Watermarks & UI',
    description:
      'Strips artist signatures, Patreon/Twitter banners, speech bubbles, comic panels, borders, and JPEG compression.',
    tags: [
      { tag: 'watermark', description: 'Translucent overlay logos or site watermarks.' },
      { tag: 'signature', description: 'Handwritten artist signature in corners.' },
      { tag: 'username', description: 'Printed handle or social media account text.' },
      { tag: 'artist_name', description: 'Credit block or title stamp.' },
      { tag: 'patreon_username', description: 'Patreon handle banner at bottom of image.' },
      { tag: 'patreon_logo', description: 'Orange/black Patreon badge overlay.' },
      { tag: 'twitter_username', description: 'Twitter/X @handle text.' },
      { tag: 'weibo_username', description: 'Weibo footer watermark strip.' },
      { tag: 'text', description: 'Floating typography or titles in background.' },
      { tag: 'english_text', description: 'Roman alphabet captions or labels.' },
      { tag: 'speech_bubble', description: 'Manga/doujin dialogue balloons.' },
      { tag: 'sound_effects', description: 'Floating katakana/hiragana SFX lettering.' },
      { tag: 'subtitles', description: 'Anime screenshot caption bar at bottom.' },
      { tag: 'date_watermark', description: 'Camera timestamp or creation date text.' },
      { tag: 'page_number', description: 'Doujinshi corner page numbers.' },
      { tag: 'border', description: 'Decorative frame around canvas.' },
      { tag: 'white_border', description: 'White padding margin around illustration.' },
      { tag: 'black_border', description: 'Letterbox or black frame around canvas.' },
      { tag: 'split_screen', description: 'Canvas divided into multiple sub-panels.' },
      { tag: 'comic', description: 'Multi-panel comic layout.' },
      { tag: '4koma', description: 'Vertical 4-panel strip layout.' },
      { tag: 'multiple_views', description: 'Character reference sheet with multiple angles.' },
      { tag: 'cropped', description: 'Awkwardly cut off limbs or head at canvas edge.' },
      { tag: 'out_of_frame', description: 'Important subject features clipped outside border.' },
      { tag: 'jpeg_artifacts', description: 'Blocky 8x8 macroblock compression noise.' },
      { tag: 'compression_artifacts', description: 'Banding and lossy image noise.' },
      { tag: 'scan_artifacts', description: 'Magazine print halftone dots or paper crease lines.' },
      { tag: 'error', description: 'Broken generation or corrupted region.' },
      { tag: 'ui', description: 'Visual novel dialogue box or game HUD elements.' }
    ]
  },
  {
    id: 'sfw_guard',
    name: 'SFW Guard (Block Explicit / NSFW Elements)',
    shortLabel: 'SFW Guard',
    description:
      'Keeps generations strictly Safe-for-Work by negating nudity, explicit ratings, underwear exposure, and sexual acts.',
    tags: [
      { tag: 'nsfw', description: 'General Not-Safe-For-Work content.' },
      { tag: 'explicit', description: 'Danbooru explicit rating bucket.' },
      { tag: 'questionable', description: 'Danbooru ecchi/suggestive rating bucket.' },
      { tag: 'nude', description: 'Unclothed figure.' },
      { tag: 'completely_nude', description: 'Zero clothing or accessories.' },
      { tag: 'nipples', description: 'Visible nipple anatomy.' },
      { tag: 'pussy', description: 'Explicit female genitalia.' },
      { tag: 'penis', description: 'Explicit male genitalia.' },
      { tag: 'sex', description: 'Sexual intercourse.' },
      { tag: 'underwear', description: 'Exposed bra and panties.' },
      { tag: 'panties', description: 'Visible panties or upskirt.' },
      { tag: 'bra', description: 'Exposed brassiere.' },
      { tag: 'bikini', description: 'Two-piece swimwear.' },
      { tag: 'cameltoe', description: 'Crotch seam contour.' },
      { tag: 'cleavage', description: 'Exposed bust cleavage.' },
      { tag: 'sideboob', description: 'Lateral breast exposure.' },
      { tag: 'underboob', description: 'Lower breast curve exposure.' },
      { tag: 'ass_visible_through_thighs', description: 'Rear visible between legs from front.' },
      { tag: 'ahegao', description: 'Ecstatic explicit facial expression.' },
      { tag: 'blush_stickers', description: 'Overly suggestive pink cheek stickers.' }
    ]
  },
  {
    id: 'nsfw_guard',
    name: 'NSFW Guard (Block Safe, Clothed & Covered Elements)',
    shortLabel: 'NSFW Guard',
    description:
      'Inverse of SFW Guard: prevents the model from adding unwanted clothes, bras, panties, pasties, safe ratings, or censorship during explicit/nude generations.',
    tags: [
      { tag: 'safe', description: 'Blocks the safe/all-ages rating bucket.' },
      { tag: 'general', description: 'Blocks Illustrious general (SFW) rating token.' },
      { tag: 'sensitive', description: 'Blocks mild sensitive rating bucket in favor of explicit.' },
      { tag: 'fully_clothed', description: 'Prevents character from being rendered in full outfit.' },
      { tag: 'clothes', description: 'Blocks generic clothing layers when generating nude scenes.' },
      { tag: 'shirt', description: 'Prevents unwanted tops or shirts.' },
      { tag: 'skirt', description: 'Prevents unwanted skirts covering lower body.' },
      { tag: 'dress', description: 'Prevents unwanted dresses.' },
      { tag: 'pants', description: 'Prevents trousers or jeans.' },
      { tag: 'shorts', description: 'Prevents shorts covering hips/groin.' },
      { tag: 'swimsuit', description: 'Prevents one-piece swimsuits when generating nude.' },
      { tag: 'bikini', description: 'Prevents bikini tops/bottoms covering anatomy.' },
      { tag: 'underwear', description: 'Prevents lingering underwear in nude prompts.' },
      { tag: 'bra', description: 'Prevents brassiere covering chest.' },
      { tag: 'panties', description: 'Prevents panties covering groin.' },
      { tag: 'pasties', description: 'Prevents adhesive nipple covers.' },
      { tag: 'bandages', description: 'Prevents bandage wraps covering chest/groin.' },
      { tag: 'covered_nipples', description: 'Prevents fabric or hair obscuring nipples.' },
      { tag: 'covered_navel', description: 'Prevents high-waisted fabric covering midriff.' },
      { tag: 'censored', description: 'Blocks all forms of censorship.' },
      { tag: 'mosaic_censoring', description: 'Blocks pixelation.' },
      { tag: 'bar_censor', description: 'Blocks censor bars.' },
      { tag: 'light_censor', description: 'Blocks white light beams.' },
      { tag: 'convenient_censoring', description: 'Blocks objects/limbs conveniently hiding anatomy.' }
    ]
  }
];

export const BUILT_IN_NEGATIVE_PRESETS: NegativePreset[] = [
  {
    id: 'standard_illustrious_neg',
    name: 'Standard Illustrious v1.0 Negative',
    description:
      'Balanced everyday negative prompt for SDXL Illustrious checkpoints covering quality, anatomy, hands, and watermarks.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'normal_quality',
      'lowres',
      'bad_anatomy',
      'bad_hands',
      'mutated_hands',
      'missing_fingers',
      'extra_fingers',
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
    description:
      'Strips mosaic pixelation, black censor bars, steam/light beams, and hand/anatomy artifacts for risqué or explicit generations.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'normal_quality',
      'lowres',
      'censored',
      'mosaic_censoring',
      'bar_censor',
      'light_censor',
      'steam_censor',
      'convenient_censoring',
      'bad_anatomy',
      'bad_hands',
      'mutated_hands',
      'missing_fingers',
      'extra_digits',
      'watermark',
      'signature'
    ]
  },
  {
    id: 'nsfw_guard_neg',
    name: 'Explicit / Unclothed (NSFW) Guard',
    description:
      'Blocks safe ratings, unwanted clothing/underwear layers, pasties, and censorship so explicit or nude prompts stay completely uncovered.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'lowres',
      'safe',
      'general',
      'sensitive',
      'fully_clothed',
      'clothes',
      'underwear',
      'bra',
      'panties',
      'pasties',
      'covered_nipples',
      'censored',
      'mosaic_censoring',
      'bar_censor',
      'light_censor',
      'convenient_censoring',
      'bad_anatomy',
      'bad_hands',
      'missing_fingers',
      'extra_digits',
      'watermark',
      'signature'
    ]
  },
  {
    id: 'sfw_guard_neg',
    name: 'Clean Safe-for-Work (SFW) Guard',
    description:
      'Strictly blocks explicit ratings, nudity, cleavage/underwear exposure, and sexual elements alongside standard quality negatives.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'normal_quality',
      'lowres',
      'nsfw',
      'explicit',
      'questionable',
      'nude',
      'completely_nude',
      'nipples',
      'pussy',
      'penis',
      'sex',
      'underwear',
      'panties',
      'bra',
      'cameltoe',
      'cleavage',
      'bad_anatomy',
      'bad_hands',
      'missing_fingers',
      'extra_digit',
      'watermark',
      'signature'
    ]
  },
  {
    id: 'pure_2d_anime_neg',
    name: 'Pure 2D Anime (Anti-3D & Anti-Realistic)',
    description:
      'Prevents 3D CGI, MMD, Blender, cosplay photos, and semi-realistic skin textures for crisp 2D cel/soft anime output.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'lowres',
      '3d',
      'realistic',
      'photorealistic',
      'photo_(medium)',
      'cgi',
      'mmd',
      'blender_(medium)',
      'doll',
      'figurine',
      'cosplay',
      'semi-realistic',
      'bad_anatomy',
      'bad_hands',
      'missing_fingers',
      'extra_digit',
      'watermark',
      'signature'
    ]
  },
  {
    id: 'strict_hands_anatomy_neg',
    name: 'Strict Hand, Digit & Anatomy Guard',
    description:
      'Maximum protection against six fingers, fused digits, extra limbs, and distorted proportions during complex poses.',
    isBuiltIn: true,
    tags: [
      'worst_quality',
      'low_quality',
      'lowres',
      'bad_anatomy',
      'bad_hands',
      'mutated_hands',
      'missing_fingers',
      'extra_fingers',
      'extra_digit',
      'fewer_digits',
      'fused_fingers',
      'six_fingers',
      'bad_feet',
      'extra_limbs',
      'extra_arms',
      'extra_legs',
      'malformed_limbs',
      'bad_proportions',
      'asymmetrical_eyes',
      'watermark',
      'signature'
    ]
  }
];

const EXPLICIT_POSITIVE_SET = new Set([
  'nsfw',
  'explicit',
  'nude',
  'completely_nude',
  'nipples',
  'pussy',
  'penis',
  'sex',
  'vaginal',
  'anal',
  'fellatio',
  'paizuri',
  'cunnilingus',
  'handjob',
  'footjob',
  'cum',
  'creampie',
  'ahegao',
  'topless',
  'bottomless'
]);

const SFW_BLOCKER_NEGATIVE_SET = new Set([
  'nsfw',
  'explicit',
  'nude',
  'completely_nude',
  'nipples',
  'pussy',
  'penis',
  'sex'
]);

const CLOTHED_POSITIVE_SET = new Set([
  'safe',
  'general',
  'serafuku',
  'school_uniform',
  'blazer',
  'shirt',
  'collared_shirt',
  't-shirt',
  'sweater',
  'hoodie',
  'jacket',
  'coat',
  'dress',
  'sundress',
  'evening_gown',
  'china_dress',
  'kimono',
  'yukata',
  'miko',
  'maid',
  'nun',
  'nurse',
  'office_lady',
  'skirt',
  'pleated_skirt',
  'miniskirt',
  'pants',
  'jeans',
  'shorts',
  'bikini',
  'micro_bikini',
  'swimsuit',
  'school_swimsuit',
  'competition_swimsuit',
  'bra',
  'panties',
  'lingerie',
  'babydoll',
  'corset',
  'bodysuit',
  'bunnysuit',
  'latex_bodysuit'
]);

const NSFW_GUARD_CLOTHING_BLOCKERS = new Set([
  'fully_clothed',
  'clothes',
  'safe',
  'general'
]);

/**
 * Detects exact duplicates and semantic contradictions between the active Positive and Negative prompts.
 */
export function detectPositiveNegativeOverlaps(
  positiveTags: string[],
  negativeTags: string[]
): PositiveNegativeOverlap[] {
  const overlaps: PositiveNegativeOverlap[] = [];
  const negSet = new Set(negativeTags);

  // 1. Exact same tag in both Positive and Negative prompts
  for (const posTag of positiveTags) {
    if (negSet.has(posTag)) {
      overlaps.push({
        id: `exact::${posTag}`,
        type: 'exact',
        positiveTag: posTag,
        negativeTag: posTag,
        reason: `"${posTag}" is active in both your Positive and Negative prompts, cancelling out its conditioning.`
      });
    }
  }

  // 2. Semantic contradiction: Explicit/Nude tags in Positive while SFW Guard blockers are in Negative
  const firstExplicitPos = positiveTags.find((t) => EXPLICIT_POSITIVE_SET.has(t));
  const firstSfwBlockerNeg = negativeTags.find(
    (t) => SFW_BLOCKER_NEGATIVE_SET.has(t) && t !== firstExplicitPos
  );
  if (firstExplicitPos && firstSfwBlockerNeg) {
    overlaps.push({
      id: `contradiction::sfw_vs_nsfw::${firstExplicitPos}::${firstSfwBlockerNeg}`,
      type: 'contradiction',
      positiveTag: firstExplicitPos,
      negativeTag: firstSfwBlockerNeg,
      reason: `Your Positive prompt includes explicit/nude tag "${firstExplicitPos}" while your Negative prompt blocks "${firstSfwBlockerNeg}" (SFW Guard).`
    });
  }

  // 3. Semantic contradiction: Clothed/Safe tags in Positive while NSFW Guard clothing blockers are in Negative
  const firstClothedPos = positiveTags.find((t) => CLOTHED_POSITIVE_SET.has(t));
  const firstNsfwClothingBlockerNeg = negativeTags.find(
    (t) => NSFW_GUARD_CLOTHING_BLOCKERS.has(t) && t !== firstClothedPos
  );
  if (firstClothedPos && firstNsfwClothingBlockerNeg) {
    overlaps.push({
      id: `contradiction::clothed_vs_nsfw_guard::${firstClothedPos}::${firstNsfwClothingBlockerNeg}`,
      type: 'contradiction',
      positiveTag: firstClothedPos,
      negativeTag: firstNsfwClothingBlockerNeg,
      reason: `Your Positive prompt requests "${firstClothedPos}" while your Negative prompt blocks "${firstNsfwClothingBlockerNeg}" (NSFW Guard).`
    });
  }

  return overlaps;
}
