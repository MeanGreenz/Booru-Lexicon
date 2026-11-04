import { BooruTag, DomainId, ExpressionPreset, FacialMixerZone } from '../types/lexicon';

/**
 * Maps existing tags previously filed under Character -> "Eyes, Pupils & Gaze"
 * or "Facial Expressions" into either the new "face_expressions" domain
 * (across its 4 specialized subcategories) or "pose_camera" -> "Facial Angles, Head Tilts & Gaze".
 */
export const FACIAL_AND_GAZE_MIGRATION_MAP: Record<
  string,
  { domain: DomainId; subcategory: string }
> = {
  // Migrated to Pose & Camera -> Facial Angles, Head Tilts & Gaze
  looking_at_viewer: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  looking_back: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  looking_away: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  sideways_glance: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  looking_up: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  looking_down: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  looking_to_the_side: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },
  head_tilt: { domain: 'pose_camera', subcategory: 'Facial Angles, Head Tilts & Gaze' },

  // Migrated to Face, Eyes & Expressions -> Eyebrows, Eye Shapes & Eyelids
  big_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  tareme: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  tsurime: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  jitome: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  sanpaku: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  glowing_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  'half-closed_eyes': { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  closed_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  one_eye_closed: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  ringed_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  long_eyelashes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  colored_eyelashes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  'wide-eyed': { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  crazy_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  rolling_eyes: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  'v-shaped_eyebrows': { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },
  glaring: { domain: 'face_expressions', subcategory: 'Eyebrows, Eye Shapes & Eyelids' },

  // Migrated to Face, Eyes & Expressions -> Pupils, Irises & Eye Colors
  heterochromia: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  slit_pupils: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  'symbol-shaped_pupils': { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  'star-shaped_pupils': { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  'heart-shaped_pupils': { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  empty_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  red_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  blue_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  yellow_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  purple_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  green_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  aqua_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  pink_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  multicolored_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  brown_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  black_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  orange_eyes: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },
  constricted_pupils: { domain: 'face_expressions', subcategory: 'Pupils, Irises & Eye Colors' },

  // Migrated to Face, Eyes & Expressions -> Mouth, Lips, Teeth & Tongue
  open_mouth: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  parted_lips: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  fang: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  tongue_out: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  wavy_mouth: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  biting_lip: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  saliva: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  closed_mouth: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  fangs: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  tongue: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  licking_lips: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },
  tongue_piercing: { domain: 'face_expressions', subcategory: 'Mouth, Lips, Teeth & Tongue' },

  // Migrated to Face, Eyes & Expressions -> Blush, Tears, Sweat & Emotion Symbols
  smile: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  light_smile: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  grin: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  smug: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  expressionless: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  blush: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  embarrassed: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  pout: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  angry: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  crying: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  tearing_up: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  surprised: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  evil_smile: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  shaded_face: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  ahegao: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  torogao: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  seductive_smile: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  heavy_breathing: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  sweat: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  annoyed: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  'full-face_blush': { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  tears: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' },
  wiping_tears: { domain: 'face_expressions', subcategory: 'Blush, Tears, Sweat & Emotion Symbols' }
};

export const FACE_AND_GAZE_TAGS: BooruTag[] = [
  // ============================================================================
  // 03. FACE, EYES & EXPRESSIONS — Eyebrows, Eye Shapes & Eyelids
  // ============================================================================
  {
    tag: 'thick_eyebrows',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Bold, expressive, thick eyebrow arches that frame the eyes prominently.',
    aliases: ['bold_eyebrows', 'bushy_eyebrows'],
    relatedTags: ['short_eyebrows', 'v-shaped_eyebrows', 'tsurime'],
    popularity: 'Core',
    postCountEst: '340K',
    illustriousNote: 'Adds distinct character personality and strong upper-face framing.'
  },
  {
    tag: 'thin_eyebrows',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Delicate, finely drawn slender eyebrow lines typical of mature or elegant characters.',
    aliases: ['slender_eyebrows', 'fine_eyebrows'],
    relatedTags: ['mature_female', 'long_eyelashes', 'tsurime'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'short_eyebrows',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Compact, oval or dot-like maromayu eyebrows positioned above the inner eyes.',
    aliases: ['maromayu', 'dot_eyebrows', 'round_eyebrows'],
    relatedTags: ['thick_eyebrows', 'miko', 'kimono'],
    popularity: 'Core',
    postCountEst: '165K',
    illustriousNote: 'Classic anime and traditional noble (hikimayu) facial trait.'
  },
  {
    tag: 'raised_eyebrows',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Both eyebrows arched high in surprise, curiosity, or playful eagerness.',
    aliases: ['high_eyebrows', 'arched_eyebrows'],
    relatedTags: ['surprised', 'wide-eyed', 'open_mouth'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'raised_eyebrow',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Single eyebrow arched higher than the other in skepticism, teasing, or smug confidence.',
    aliases: ['cocked_eyebrow', 'one_eyebrow_raised', 'skeptical_brow'],
    relatedTags: ['smug', 'half-closed_eyes', 'jitome'],
    popularity: 'Core',
    postCountEst: '140K',
    illustriousNote: 'Pairs naturally with smug for a teasing expression.'
  },
  {
    tag: 'eyebrows_visible_through_hair',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Anime stylistic rendering where eyebrow lines remain clearly visible through bangs and forelocks.',
    aliases: ['eyebrows_through_hair', 'visible_eyebrows'],
    relatedTags: ['blunt_bangs', 'swept_bangs', 'hair_between_eyes', 'thick_eyebrows'],
    popularity: 'Core',
    postCountEst: '3.1M',
    illustriousNote: 'One of the top 15 tags on Danbooru; ensures expressive eyebrow shapes remain readable under bangs.'
  },
  {
    tag: 'narrowed_eyes',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Eyes narrowed into sharp, focused slits conveying suspicion, intensity, or seduction.',
    aliases: ['squinting_eyes', 'sharp_gaze'],
    relatedTags: ['jitome', 'half-closed_eyes', 'glaring', 'tsurime'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'squinting',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Eyelids squeezed partially shut from bright light, laughter, pain, or wincing.',
    aliases: ['wincing', 'squeezed_eyes'],
    relatedTags: ['one_eye_closed', 'closed_eyes', 'laughing'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'bags_under_eyes',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Dark circles or exhausted lower-eyelid creases from sleeplessness, gloom, or obsession.',
    aliases: ['dark_circles', 'tired_eyes', 'eye_bags'],
    relatedTags: ['sanpaku', 'jitome', 'sleepy', 'yandere', 'gloom_(expression)'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'eyeshadow',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Cosmetic pigment shading applied across the upper eyelids and outer eye corners.',
    aliases: ['eye_makeup', 'red_eyeshadow'],
    relatedTags: ['eyeliner', 'lipstick', 'makeup', 'long_eyelashes', 'gyaru'],
    popularity: 'Core',
    postCountEst: '280K',
    illustriousNote: 'Enhances glamorous, gyaru, mature, or traditional kabuki/kitsune eye styling.'
  },
  {
    tag: 'eyeliner',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Sharp winged eyeliner defining the upper lash line and outer corner of the eyes.',
    aliases: ['winged_eyeliner', 'cat_eyeliner'],
    relatedTags: ['eyeshadow', 'long_eyelashes', 'tsurime', 'makeup'],
    popularity: 'Common',
    postCountEst: '115K'
  },
  {
    tag: 'makeup',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Visible cosmetic styling including eyeshadow, eyeliner, blush, and lip gloss.',
    aliases: ['cosmetics', 'facial_makeup'],
    relatedTags: ['eyeshadow', 'lipstick', 'lip_gloss', 'gyaru'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'shaded_eyes',
    domain: 'face_expressions',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    description: 'Upper face and eyes cast in dark dramatic shadow while the lower face remains lit.',
    aliases: ['hidden_eyes_shadow', 'shadow_over_eyes'],
    relatedTags: ['shaded_face', 'yandere', 'evil_smile', 'gloom_(expression)'],
    popularity: 'Core',
    postCountEst: '175K'
  },

  // ============================================================================
  // 03. FACE, EYES & EXPRESSIONS — Pupils, Irises & Eye Colors
  // ============================================================================
  {
    tag: 'dilated_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Large, expanded dark pupils conveying deep attraction, excitement, or trance.',
    aliases: ['expanded_pupils', 'large_pupils'],
    relatedTags: ['sparkling_eyes', 'heart-shaped_pupils', 'big_eyes', 'blush'],
    popularity: 'Common',
    postCountEst: '90K'
  },
  {
    tag: 'no_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Solid or gradient irises rendered without a dark central pupil.',
    aliases: ['blank_irises', 'pupilless_eyes'],
    relatedTags: ['empty_eyes', 'glowing_eyes', 'white_pupils'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'white_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Light or white pupils set inside darker colored irises, a popular modern anime eye style.',
    aliases: ['light_pupils', 'inverted_pupils'],
    relatedTags: ['bright_pupils', 'ringed_eyes', 'symbol-shaped_pupils'],
    popularity: 'Core',
    postCountEst: '410K',
    illustriousNote: 'Produces crisp, modern graphic iris detailing in SDXL Illustrious.'
  },
  {
    tag: 'bright_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Luminous, high-saturation pupils that glow brighter than the surrounding iris.',
    aliases: ['luminous_pupils'],
    relatedTags: ['white_pupils', 'glowing_eyes', 'sparkling_eyes'],
    popularity: 'Core',
    postCountEst: '350K'
  },
  {
    tag: 'sparkling_eyes',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Irises filled with glittering star-like catchlights and excited shimmer.',
    aliases: ['glittering_eyes', 'starry_eyes', 'shining_eyes'],
    relatedTags: ['star-shaped_pupils', 'big_eyes', 'smile', 'raised_eyebrows'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'amber_eyes',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Warm golden-honey amber irises bridging yellow and light brown.',
    aliases: ['honey_eyes', 'golden-brown_eyes'],
    relatedTags: ['yellow_eyes', 'orange_eyes', 'brown_eyes'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'silver_eyes',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Cool metallic silver or platinum-grey irises.',
    aliases: ['grey_eyes', 'platinum_eyes'],
    relatedTags: ['silver_hair', 'white_hair', 'white_pupils'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'gradient_eyes',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Irises that smoothly transition between two distinct hues from top to bottom.',
    aliases: ['two-tone_irises', 'ombre_eyes'],
    relatedTags: ['multicolored_eyes', 'heterochromia', 'bright_pupils'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'horizontal_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Rectangular horizontal goat/sheep-style pupils.',
    aliases: ['goat_pupils', 'rectangular_pupils'],
    relatedTags: ['symbol-shaped_pupils', 'horns', 'demon_girl'],
    popularity: 'Specialized',
    postCountEst: '45K'
  },
  {
    tag: 'cross-shaped_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Pupils shaped like four-pointed crosses or plus signs.',
    aliases: ['plus_pupils', 'cross_pupils'],
    relatedTags: ['symbol-shaped_pupils', 'star-shaped_pupils', 'glowing_eyes'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'diamond-shaped_pupils',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Rhombus or diamond-shaped pupils inside the iris.',
    aliases: ['rhombus_pupils', 'diamond_pupils'],
    relatedTags: ['symbol-shaped_pupils', 'slit_pupils', 'ringed_eyes'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'spiral_eyes',
    domain: 'face_expressions',
    subcategory: 'Pupils, Irises & Eye Colors',
    description: 'Concentric swirl or dizzy spiral patterns replacing the irises.',
    aliases: ['dizzy_eyes', 'swirl_eyes', 'hypnotized_eyes'],
    relatedTags: ['ringed_eyes', 'crazy_eyes', 'panicking', 'drunk'],
    popularity: 'Common',
    postCountEst: '110K'
  },

  // ============================================================================
  // 03. FACE, EYES & EXPRESSIONS — Mouth, Lips, Teeth & Tongue
  // ============================================================================
  {
    tag: 'puckered_lips',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Lips rounded and pushed forward for a kiss or playful whistling.',
    aliases: ['kissy_lips', 'pursed_lips'],
    relatedTags: ['imminent_kiss', 'kissing', 'lip_gloss', 'parted_lips'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'lip_gloss',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Shiny specular highlight on moist, glossy lips.',
    aliases: ['glossy_lips', 'shiny_lips'],
    relatedTags: ['lipstick', 'parted_lips', 'thick_lips', 'makeup'],
    popularity: 'Core',
    postCountEst: '270K',
    illustriousNote: 'Adds a wet specular catchlight to the lower lip.'
  },
  {
    tag: 'lipstick',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Tinted red, pink, or dark cosmetic lipstick coloring the lips.',
    aliases: ['red_lips', 'painted_lips'],
    relatedTags: ['lip_gloss', 'makeup', 'eyeshadow', 'mature_female'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'thick_lips',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Plump, clearly contoured upper and lower lips.',
    aliases: ['plump_lips', 'full_lips'],
    relatedTags: ['lip_gloss', 'lipstick', 'parted_lips', 'seductive_smile'],
    popularity: 'Common',
    postCountEst: '130K'
  },
  {
    tag: 'dot_mouth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Tiny circular dot mouth conveying blank surprise or deadpan cuteness.',
    aliases: ['small_open_mouth', 'tiny_mouth'],
    relatedTags: ['expressionless', 'surprised', 'blank_stare'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'chestnut_mouth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Rounded triangular mouth shape resembling a chestnut (kurimao).',
    aliases: ['kuri_mouth', 'rounded_triangle_mouth'],
    relatedTags: ['open_mouth', 'surprised', 'wavy_mouth'],
    popularity: 'Common',
    postCountEst: '125K'
  },
  {
    tag: 'triangle_mouth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Sharp geometric delta-shaped open mouth used in shouting or comedic expressions.',
    aliases: ['delta_mouth'],
    relatedTags: ['open_mouth', 'angry', 'surprised', 'chestnut_mouth'],
    popularity: 'Common',
    postCountEst: '110K'
  },
  {
    tag: ':3',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Playful W-shaped feline mouth curve (canonical Danbooru emoticon tag for cat mouth).',
    aliases: ['cat_mouth', 'nyan_mouth', 'w_mouth'],
    relatedTags: ['smug', 'fang', 'cat_ears', 'wavy_mouth'],
    popularity: 'Core',
    postCountEst: '580K',
    illustriousNote: 'Canonical Danbooru tag for the cat-like W mouth shape (searchable via :3 or cat_mouth).'
  },
  {
    tag: 'shark_teeth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Full row of sharp, serrated triangular teeth visible in a fierce or mischievous grin.',
    aliases: ['sharp_teeth', 'pointed_teeth', 'serrated_teeth'],
    relatedTags: ['grin', 'evil_smile', 'fangs', 'clenched_teeth'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'clenched_teeth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Teeth gritted tightly together in anger, exertion, pleasure, or pain.',
    aliases: ['gritted_teeth', 'bared_teeth'],
    relatedTags: ['angry', 'glaring', 'grimace', 'shark_teeth'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'round_teeth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Stylized rounded or scalloped tooth line visible when smiling or shouting.',
    aliases: ['scalloped_teeth'],
    relatedTags: ['grin', 'open_mouth', 'smile'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'buck_teeth',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Prominent front upper incisors resting slightly over the lower lip.',
    aliases: ['front_teeth'],
    relatedTags: ['open_mouth', 'round_teeth', 'dot_mouth'],
    popularity: 'Specialized',
    postCountEst: '48K'
  },
  {
    tag: 'skin_fang',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Small cute fang drawn as an extension of the upper lip line rather than white enamel.',
    aliases: ['flesh_fang', 'lip_fang'],
    relatedTags: ['fang', ':3', 'smug'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'long_tongue',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Unusually long, extended tongue reaching well past the chin.',
    aliases: ['extended_tongue'],
    relatedTags: ['tongue_out', 'ahegao', 'saliva', 'succubus'],
    popularity: 'Core',
    postCountEst: '150K'
  },
  {
    tag: 'forked_tongue',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Serpentine or demonic tongue split into two pointed tips.',
    aliases: ['split_tongue', 'snake_tongue'],
    relatedTags: ['tongue_out', 'long_tongue', 'slit_pupils', 'demon_girl'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'uvula',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Visible back of the throat and uvula inside a wide-open mouth.',
    aliases: ['visible_throat'],
    relatedTags: ['open_mouth', 'tongue_out', 'ahegao', 'saliva'],
    popularity: 'Common',
    postCountEst: '115K'
  },
  {
    tag: 'saliva_trail',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Thin glistening strand of saliva bridging the lips, tongue, or after a kiss.',
    aliases: ['string_of_saliva', 'saliva_bridge'],
    relatedTags: ['saliva', 'french_kiss', 'tongue_out', 'ahegao', 'drooling'],
    popularity: 'Core',
    postCountEst: '290K',
    illustriousNote: 'Strong detail trigger for intimate kisses and expressive open-mouth shots.'
  },
  {
    tag: 'drooling',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Saliva trickling down the corner of the mouth or chin from hunger, sleep, or ecstasy.',
    aliases: ['drool'],
    relatedTags: ['saliva', 'saliva_trail', 'ahegao', 'torogao', 'sleepy'],
    popularity: 'Core',
    postCountEst: '330K'
  },

  // ============================================================================
  // 03. FACE, EYES & EXPRESSIONS — Blush, Tears, Sweat & Emotion Symbols
  // ============================================================================
  {
    tag: 'light_blush',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Soft, delicate pink tint across the cheeks without overwhelming the face.',
    aliases: ['subtle_blush', 'soft_blush', 'faint_blush'],
    relatedTags: ['blush', 'light_smile', 'nose_blush'],
    popularity: 'Core',
    postCountEst: '640K',
    illustriousNote: 'Ideal when standard "blush" or "full-face_blush" is too intense.'
  },
  {
    tag: 'nose_blush',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Warm pink or reddish blush concentrated across the bridge and tip of the nose.',
    aliases: ['blushing_nose'],
    relatedTags: ['blush', 'full-face_blush', 'drunk'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'blush_stickers',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Stylized oval or hash-mark blush stickers on the cheeks.',
    aliases: ['oval_blush', 'anime_blush_lines'],
    relatedTags: ['blush', 'light_blush', 'smile'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'streaming_tears',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Continuous streams of tears flowing down both cheeks.',
    aliases: ['waterfall_tears', 'flowing_tears'],
    relatedTags: ['crying', 'tears', 'tearing_up', 'wiping_tears'],
    popularity: 'Core',
    postCountEst: '370K'
  },
  {
    tag: 'crying_with_eyes_open',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Tears spilling from wide or unblinking open eyes.',
    aliases: ['open-eyed_crying'],
    relatedTags: ['crying', 'tears', 'streaming_tears', 'wide-eyed'],
    popularity: 'Core',
    postCountEst: '285K'
  },
  {
    tag: 'happy_tears',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Warm smile paired with tears of joy or emotional relief.',
    aliases: ['tears_of_joy', 'smiling_with_tears'],
    relatedTags: ['smile', 'tears', 'tearing_up', 'blush'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'sweatdrop',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Single anime-style sweat drop on the temple or cheek indicating awkwardness or nervousness.',
    aliases: ['single_sweatdrop', 'nervous_sweatdrop'],
    relatedTags: ['sweat', 'flying_sweatdrops', 'embarrassed', 'wavy_mouth'],
    popularity: 'Core',
    postCountEst: '820K'
  },
  {
    tag: 'flying_sweatdrops',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Multiple droplets of sweat splashing outward from the head in panic, fluster, or exertion.',
    aliases: ['splashing_sweat', 'pleading_sweatdrops'],
    relatedTags: ['sweatdrop', 'panicking', 'embarrassed', 'heavy_breathing'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'anger_vein',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Cross-shaped popping vein symbol on the forehead or temple indicating irritation or rage.',
    aliases: ['cross-popping_vein', 'annoyed_vein'],
    relatedTags: ['angry', 'annoyed', 'v-shaped_eyebrows', 'clenched_teeth'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'gloom_(expression)',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Vertical dark gloom lines or heavy shadow hanging over a depressed or mortified face.',
    aliases: ['gloom_lines', 'depressed_lines'],
    relatedTags: ['shaded_face', 'shaded_eyes', 'bags_under_eyes', 'empty_eyes'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'spoken_heart',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Floating heart symbol near the mouth or cheek indicating affection, teasing, or arousal.',
    aliases: ['heart_symbol', 'floating_heart'],
    relatedTags: ['heart-shaped_pupils', 'seductive_smile', 'blush', 'ahegao'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'spoken_question_mark',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Floating question mark next to the head conveying confusion or innocent curiosity.',
    aliases: ['question_mark', 'confused_symbol'],
    relatedTags: ['head_tilt', 'dot_mouth', 'raised_eyebrows'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'spoken_exclamation_mark',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Floating exclamation mark near the head indicating sudden realization, shock, or alertness.',
    aliases: ['exclamation_mark', 'startled_symbol'],
    relatedTags: ['surprised', 'wide-eyed', 'raised_eyebrows'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'naughty_face',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Playfully lewd, teasing, or lascivious expression with bedroom eyes and a knowing grin.',
    aliases: ['lewd_expression', 'mischievous_smile'],
    relatedTags: ['seductive_smile', 'smug', 'half-closed_eyes', 'licking_lips', 'spoken_heart'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'forced_smile',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Strained, awkward, or nervous smile paired with worried brows or a sweatdrop.',
    aliases: ['awkward_smile', 'nervous_smile'],
    relatedTags: ['worried', 'sweatdrop', 'smile', 'clenched_teeth'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'sad_smile',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Bittersweet, wistful smile paired with gentle, sorrowful eyes.',
    aliases: ['bittersweet_smile', 'melancholic_smile'],
    relatedTags: ['sad', 'light_smile', 'tearing_up'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'laughing',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Open-mouthed joyful or boisterous laughter.',
    aliases: ['laughter', 'giggling'],
    relatedTags: ['grin', 'open_mouth', 'closed_eyes', 'smile'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'scowl',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Hostile, displeased frown with lowered brows and downturned mouth corners.',
    aliases: ['displeased_scowl'],
    relatedTags: ['angry', 'glaring', 'frown', 'v-shaped_eyebrows'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'grimace',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Twisted or pained facial expression with gritted teeth and tensed brows.',
    aliases: ['wince', 'pained_expression'],
    relatedTags: ['clenched_teeth', 'squinting', 'v-shaped_eyebrows', 'sweat'],
    popularity: 'Common',
    postCountEst: '115K'
  },
  {
    tag: 'disgust',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Contemptuous, repulsed expression looking down on the viewer.',
    aliases: ['contempt', 'disgusted_look', 'gesugao'],
    relatedTags: ['jitome', 'looking_down', 'v-shaped_eyebrows', 'shaded_eyes'],
    popularity: 'Core',
    postCountEst: '190K',
    illustriousNote: 'Combines powerfully with "looking_down" and "from_below" for haughty contempt shots.'
  },
  {
    tag: 'scared',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Fearful expression with wide eyes, constricted pupils, and trembling lips.',
    aliases: ['afraid', 'terrified', 'fearful'],
    relatedTags: ['wide-eyed', 'constricted_pupils', 'sweat', 'tearing_up'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'panicking',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Flustered, frantic panic with flying sweatdrops and wide or wavy mouth.',
    aliases: ['flustered_panic', 'frantic'],
    relatedTags: ['flying_sweatdrops', 'wavy_mouth', 'wide-eyed', 'full-face_blush'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'sleepy',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Drowsy, heavy-lidded expression on the verge of falling asleep.',
    aliases: ['drowsy', 'half-asleep'],
    relatedTags: ['half-closed_eyes', 'yawn', 'rubbing_eyes', 'bags_under_eyes'],
    popularity: 'Core',
    postCountEst: '205K'
  },
  {
    tag: 'yawn',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Mouth stretched open in a sleepy yawn, often accompanied by a teardrop at the eye corner.',
    aliases: ['yawning'],
    relatedTags: ['sleepy', 'open_mouth', 'stretching', 'covering_mouth'],
    popularity: 'Common',
    postCountEst: '90K'
  },
  {
    tag: 'drunk',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Tipsy, flushed expression with heavy cheek/nose blush and relaxed half-lidded eyes.',
    aliases: ['tipsy', 'intoxicated'],
    relatedTags: ['full-face_blush', 'nose_blush', 'half-closed_eyes', 'torogao'],
    popularity: 'Core',
    postCountEst: '175K'
  },

  // ============================================================================
  // 05. POSE & CAMERA — Facial Angles, Head Tilts & Gaze
  // ============================================================================
  {
    tag: 'head_tilt',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Head inclined playfully, curiously, or seductively to one side.',
    aliases: ['tilted_head', 'neck_tilt'],
    relatedTags: ['looking_at_viewer', 'spoken_question_mark', 'smile', 'portrait'],
    popularity: 'Core',
    postCountEst: '960K',
    illustriousNote: 'Adds natural asymmetry and dynamic charm to portrait compositions.'
  },
  {
    tag: 'eye_contact',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Direct, locked gaze between the subject and viewer (or between two characters).',
    aliases: ['direct_gaze', 'mutual_gaze'],
    relatedTags: ['looking_at_viewer', 'looking_at_another', 'close-up'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'looking_at_another',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Character directing their gaze toward another character in the scene rather than the camera.',
    aliases: ['gazing_at_partner'],
    relatedTags: ['2girls', 'hetero', 'yuri', 'eye_contact', 'profile'],
    popularity: 'Core',
    postCountEst: '780K'
  },
  {
    tag: 'profile',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Strict 90-degree side view of the head and face.',
    aliases: ['side_profile', 'face_in_profile'],
    relatedTags: ['from_side', 'looking_to_the_side', 'portrait'],
    popularity: 'Core',
    postCountEst: '590K',
    illustriousNote: 'Highlights nose bridge, eyelashes, and lip silhouette from the side.'
  },
  {
    tag: 'straight-on',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Head and torso squared directly toward the camera lens.',
    aliases: ['facing_viewer', 'front_view', 'facing_front'],
    relatedTags: ['looking_at_viewer', 'eye_contact', 'portrait'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'facing_away',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Subject turned completely away from the camera, often combined with looking_back.',
    aliases: ['turned_away', 'back_turned'],
    relatedTags: ['from_behind', 'looking_back', 'back_focus'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'head_back',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Head tilted far backward exposing the throat and jawline.',
    aliases: ['tilted_head_back', 'thrown_back_head'],
    relatedTags: ['arched_back', 'looking_up', 'ahegao', 'ecstasy'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'head_down',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Chin lowered toward the chest in shyness, gloom, or peering through bangs.',
    aliases: ['lowered_head', 'bowed_head'],
    relatedTags: ['looking_up', 'shaded_eyes', 'embarrassed', 'hair_between_eyes'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'chin_rest',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Chin resting on one or both hands, a table surface, or knees.',
    aliases: ['resting_chin_on_hand', 'head_rest'],
    relatedTags: ['hand_on_own_cheek', 'sitting', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '330K'
  },
  {
    tag: 'hand_on_own_cheek',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'One or both palms pressed gently against the character’s own cheek.',
    aliases: ['touching_own_cheek', 'hands_on_cheeks'],
    relatedTags: ['chin_rest', 'head_tilt', 'blush', 'yandere'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'hand_under_chin',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Fingers or back of the hand poised beneath the chin in a thoughtful or haughty pose.',
    aliases: ['finger_under_chin', 'chin_touch'],
    relatedTags: ['smug', 'ojou', 'looking_at_viewer', 'chin_rest'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'looking_over_eyewear',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Peering directly at the viewer over the lowered rims of glasses or sunglasses.',
    aliases: ['peering_over_glasses'],
    relatedTags: ['glasses', 'semi-rimless_eyewear', 'sunglasses', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'looking_through_legs',
    domain: 'pose_camera',
    subcategory: 'Facial Angles, Head Tilts & Gaze',
    description: 'Bending forward and looking back at the viewer between one’s own legs.',
    aliases: ['peering_between_legs'],
    relatedTags: ['bent_over', 'from_behind', 'looking_back', 'ass_focus'],
    popularity: 'Common',
    postCountEst: '95K'
  }
];

export const BUILT_IN_EXPRESSION_PRESETS: ExpressionPreset[] = [
  {
    id: 'expr_smug_tease',
    name: 'Smug Tease',
    archetype: 'Playful & Superior',
    description: 'Half-lidded eyes, cocked eyebrow, cat-like :3 smile, and subtle cheek blush.',
    tags: ['half-closed_eyes', 'raised_eyebrow', 'smug', ':3', 'light_blush'],
    isBuiltIn: true
  },
  {
    id: 'expr_tsundere_pout',
    name: 'Tsundere Pout',
    archetype: 'Flustered & Defiant',
    description: 'Sharp V-shaped brows, puffed-cheek pout, heavy blush, and averted sideways glance.',
    tags: ['v-shaped_eyebrows', 'tsurime', 'pout', 'closed_mouth', 'blush', 'sideways_glance'],
    isBuiltIn: true
  },
  {
    id: 'expr_shy_flustered',
    name: 'Shy & Flustered',
    archetype: 'Bashful & Innocent',
    description: 'Worried expression, droopy tareme eyes, full-face blush, and nervous sweatdrop.',
    tags: ['worried', 'tareme', 'full-face_blush', 'embarrassed', 'wavy_mouth', 'sweatdrop'],
    isBuiltIn: true
  },
  {
    id: 'expr_sultry_bedroom',
    name: 'Sultry Bedroom Gaze',
    archetype: 'Seductive & Alluring',
    description: 'Heavy-lidded eyes, glossy parted lips, light blush, and a slow seductive smile.',
    tags: ['half-closed_eyes', 'long_eyelashes', 'seductive_smile', 'parted_lips', 'lip_gloss', 'light_blush'],
    isBuiltIn: true
  },
  {
    id: 'expr_torogao_ecstasy',
    name: 'Torogao Melting Ecstasy',
    archetype: 'Sensual & Dazed',
    description: 'Soft dazed half-closed eyes with heart pupils, heavy blush, parted lips, and heavy breathing.',
    tags: ['torogao', 'half-closed_eyes', 'heart-shaped_pupils', 'full-face_blush', 'parted_lips', 'heavy_breathing', 'sweat'],
    isBuiltIn: true
  },
  {
    id: 'expr_heavy_ahegao',
    name: 'Heavy Ahegao Climax',
    archetype: 'Extreme & Explicit',
    description: 'Rolling eyes, full-face blush, protruding tongue, saliva trail, and streaming tears of pleasure.',
    tags: ['ahegao', 'rolling_eyes', 'heart-shaped_pupils', 'full-face_blush', 'open_mouth', 'tongue_out', 'saliva_trail', 'tears'],
    isBuiltIn: true
  },
  {
    id: 'expr_yandere_trance',
    name: 'Yandere Obsession',
    archetype: 'Dark & Unhinged',
    description: 'Shaded upper face with wide empty eyes, constricted pupils, and an unsettling smile.',
    tags: ['yandere', 'wide-eyed', 'empty_eyes', 'constricted_pupils', 'shaded_eyes', 'evil_smile', 'blush'],
    isBuiltIn: true
  },
  {
    id: 'expr_crying_heartbroken',
    name: 'Heartbroken Tears',
    archetype: 'Emotional & Vulnerable',
    description: 'Sorrowful expression, glistening open eyes spilling streaming tears, and trembling parted lips.',
    tags: ['sad', 'crying_with_eyes_open', 'streaming_tears', 'tears', 'parted_lips', 'nose_blush'],
    isBuiltIn: true
  },
  {
    id: 'expr_haughty_contempt',
    name: 'Haughty Contempt (Gesugao)',
    archetype: 'Cold & Dominant',
    description: 'V-shaped brows, narrowed jitome eyes looking down in disgust with a cold scowl.',
    tags: ['v-shaped_eyebrows', 'jitome', 'narrowed_eyes', 'disgust', 'scowl', 'looking_down'],
    isBuiltIn: true
  },
  {
    id: 'expr_comedic_panic',
    name: 'Comedic Shock & Panic',
    archetype: 'Expressive & Dynamic',
    description: 'Wide eyes with spiral pupils, chestnut open mouth, and flying sweatdrops.',
    tags: ['wide-eyed', 'spiral_eyes', 'raised_eyebrows', 'surprised', 'chestnut_mouth', 'flying_sweatdrops'],
    isBuiltIn: true
  }
];

export const FACIAL_MIXER_ZONES: FacialMixerZone[] = [
  {
    id: 'zone_brows_eyes',
    label: '1. Brows & Eyelids',
    subcategory: 'Eyebrows, Eye Shapes & Eyelids',
    quickTags: [
      'tareme',
      'tsurime',
      'jitome',
      'sanpaku',
      'half-closed_eyes',
      'wide-eyed',
      'closed_eyes',
      'one_eye_closed',
      'rolling_eyes',
      'v-shaped_eyebrows',
      'raised_eyebrows',
      'raised_eyebrow',
      'eyebrows_visible_through_hair',
      'long_eyelashes',
      'eyeshadow'
    ]
  },
  {
    id: 'zone_pupils_irises',
    label: '2. Pupils & Irises',
    subcategory: 'Pupils, Irises & Eye Colors',
    quickTags: [
      'sparkling_eyes',
      'heart-shaped_pupils',
      'star-shaped_pupils',
      'slit_pupils',
      'empty_eyes',
      'constricted_pupils',
      'white_pupils',
      'heterochromia',
      'red_eyes',
      'blue_eyes',
      'purple_eyes',
      'yellow_eyes',
      'green_eyes',
      'pink_eyes',
      'silver_eyes'
    ]
  },
  {
    id: 'zone_mouth_tongue',
    label: '3. Mouth, Teeth & Tongue',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    quickTags: [
      'parted_lips',
      'open_mouth',
      'closed_mouth',
      ':3',
      ':d',
      'wavy_mouth',
      'dot_mouth',
      'puckered_lips',
      'biting_lip',
      'licking_lips',
      'lip_gloss',
      'fang',
      'shark_teeth',
      'clenched_teeth',
      'tongue_out',
      'saliva_trail',
      'drooling'
    ]
  },
  {
    id: 'zone_blush_fx',
    label: '4. Blush, Tears & Mood',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    quickTags: [
      'light_smile',
      'smile',
      'happy',
      'grin',
      'smug',
      'seductive_smile',
      'pout',
      'frown',
      'sad',
      'worried',
      'ahegao',
      'torogao',
      'light_blush',
      'blush',
      'full-face_blush',
      'tearing_up',
      'streaming_tears',
      'sweatdrop',
      'heavy_breathing',
      'spoken_heart'
    ]
  }
];
