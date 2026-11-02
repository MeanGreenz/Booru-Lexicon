import { BooruTag } from '../types/lexicon';

export const INTERACTIONS_MATERIALS_TAGS: BooruTag[] = [
  // ============================================================================
  // 03. CLOTHING — Materials, Latex & Fetish Gear
  // ============================================================================
  {
    tag: 'latex',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'High-gloss, mirror-specular rubber or PVC garment material that molds tightly to every body contour.',
    aliases: ['rubber_clothes', 'pvc_outfit', 'liquid_latex'],
    relatedTags: ['shiny_clothes', 'skintight', 'bodysuit', 'vacuum-packed_clothes'],
    popularity: 'Core',
    postCountEst: '290K',
    illustriousNote: 'Pair latex with shiny_clothes and skintight for dramatic specular reflections.'
  },
  {
    tag: 'shiny_clothes',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Garments with pronounced glossy highlights (satin, patent leather, vinyl, wet spandex, or racing swimsuits).',
    aliases: ['glossy_clothes', 'satin_finish', 'vinyl_clothes'],
    relatedTags: ['latex', 'competition_swimsuit', 'bodysuit', 'leather'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'skintight',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Second-skin garment fit that reveals underlying muscle, navel, and anatomical relief.',
    aliases: ['form-fitting', 'skin_tight'],
    relatedTags: ['bodysuit', 'latex', 'taut_clothes', 'vacuum-packed_clothes'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'vacuum-packed_clothes',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Anime stylistic trope where clothing clings so impossibly tight that it outlines the navel hollow and individual breast curves.',
    aliases: ['impossible_clothes', 'navel_through_clothes', 'boob_socks'],
    relatedTags: ['skintight', 'taut_clothes', 'bodysuit', 'leotard'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'leather',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Black or dark grain leather jackets, corsets, straps, boots, or gloves.',
    aliases: ['leather_jacket', 'leather_gloves', 'leather_straps'],
    relatedTags: ['shiny_clothes', 'thigh_boots', 'collar', 'bondage'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'bandages',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Medical white cloth wraps wound around limbs, torso, or breasts (sarashi or injured/chuunibyou motif).',
    aliases: ['sarashi', 'chest_wrap', 'bandaged_arm'],
    relatedTags: ['covered_nipples', 'eyepatch', 'kunoichi'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'eyepatch_bikini',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Ultra-skimpy micro bikini constructed like two medical eyepatches with diagonal straps.',
    aliases: ['medical_bikini'],
    relatedTags: ['micro_bikini', 'string_bikini', 'bandages', 'underboob'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'torn_pantyhose',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Ripped, snagged, or laddered sheer nylon tights exposing patches of bare thigh or hip skin.',
    aliases: ['ripped_tights', 'torn_tights'],
    relatedTags: ['pantyhose', 'torn_clothes', 'torn_thighhighs', 'office_lady'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'torn_thighhighs',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Ripped or shredded thighhigh stockings.',
    aliases: ['ripped_stockings'],
    relatedTags: ['thighhighs', 'torn_pantyhose', 'torn_clothes'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'single_thighhigh',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Asymmetrical legwear with a thighhigh stocking worn on only one leg while the other leg is bare.',
    aliases: ['one_stocking', 'asymmetric_stockings'],
    relatedTags: ['thighhighs', 'asymmetrical_legwear', 'bare_legs'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'stirrup_legwear',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Stockings or leggings with a strap passing under the arch of the foot, leaving the heel and toes bare.',
    aliases: ['stirrup_thighhighs', 'stirrup_socks'],
    relatedTags: ['thighhighs', 'barefoot', 'soles', 'toeless_legwear'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'blindfold',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Cloth ribbon, lace band, or leather strap tied across both eyes.',
    aliases: ['covered_eyes_ribbon', 'eye_mask_blindfold'],
    relatedTags: ['bondage', 'ball_gag', 'bound_wrists'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'ball_gag',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Buckled strap gag with a spherical ball held between the teeth.',
    aliases: ['gag', 'ring_gag', 'bit_gag'],
    relatedTags: ['bondage', 'saliva', 'blindfold', 'tearing_up'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'handcuffs',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Metallic police handcuffs or linked wrist shackles.',
    aliases: ['cuffed_wrists', 'shackles', 'manacles'],
    relatedTags: ['wrist_cuffs', 'bondage', 'chains', 'arms_behind_back'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'tentacles',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Coiling organic or eldritch tentacles wrapping around the character’s limbs and torso.',
    aliases: ['tentacle_sex', 'eldritch_tentacles'],
    relatedTags: ['bondage', 'slime', 'torn_clothes', 'ahegao'],
    popularity: 'Core',
    postCountEst: '280K'
  },

  // ============================================================================
  // 04. POSE & CAMERA — Multi-Character & Couple Interactions
  // ============================================================================
  {
    tag: 'yuri',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Romantic or erotic intimacy between two or more female characters.',
    aliases: ['girls_love', 'lesbian', 'gl'],
    relatedTags: ['2girls', 'kissing', 'hugging', 'breast_to_breast', 'tribadism'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'hetero',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Romantic or erotic interaction between a male and a female character.',
    aliases: ['1boy_1girl', 'male_and_female', 'straight_couple'],
    relatedTags: ['1girl', '1boy', 'sex', 'hugging', 'kissing'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'threesome',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Intimate interaction involving three characters simultaneously (FFM or MMF).',
    aliases: ['3p', 'menage_a_trois'],
    relatedTags: ['2girls', '1boy', 'group_sex', 'cooperative_paizuri'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'hugging',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two characters embracing each other warmly or passionately.',
    aliases: ['embrace', 'hug'],
    relatedTags: ['hug_from_behind', 'arm_hug', 'breast_to_breast', '2girls'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'hug_from_behind',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character wrapping their arms around another’s waist, shoulders, or chest from behind.',
    aliases: ['back_hug', 'spooning_standing'],
    relatedTags: ['hugging', 'grabbing_from_behind', 'cheek_to_cheek'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'kissing',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Lips pressed together in a romantic or passionate kiss.',
    aliases: ['kiss', 'lip_lock'],
    relatedTags: ['french_kiss', 'imminent_kiss', 'cheek_kiss', 'closed_eyes'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'french_kiss',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Deep open-mouth kiss with intertwined tongues and saliva strands.',
    aliases: ['deep_kiss', 'tongue_kiss'],
    relatedTags: ['kissing', 'saliva', 'tongue_out', 'blush', 'half-closed_eyes'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'imminent_kiss',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Faces inches apart with parted lips and half-lidded eyes just moments before kissing.',
    aliases: ['about_to_kiss', 'close_faces'],
    relatedTags: ['kissing', 'chin_grab', 'kabedon', 'parted_lips'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'holding_hands',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two characters clasping hands together.',
    aliases: ['handholding'],
    relatedTags: ['interlocked_fingers', '2girls', 'hetero', 'pov_hands'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'kabedon',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character pinning another against a wall with one or both hands planted beside their head.',
    aliases: ['wall_pin', 'pinned_against_wall'],
    relatedTags: ['imminent_kiss', 'chin_grab', 'looking_up', 'blush'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'lap_pillow',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character resting their head peacefully on the thighs/lap of a seated character (hizamakura).',
    aliases: ['hizamakura', 'resting_on_lap'],
    relatedTags: ['sitting', 'lying', 'thighs', 'headpat', 'from_above'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'breast_to_breast',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two female characters pressing their chests closely together so their breasts flatten against each other.',
    aliases: ['boob_press_together', 'docking_breasts'],
    relatedTags: ['2girls', 'yuri', 'breast_press', 'large_breasts', 'hugging'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'cheek_to_cheek',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two characters pressing their faces affectionately side by side.',
    aliases: ['faces_together'],
    relatedTags: ['2girls', 'hugging', 'hug_from_behind', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'chin_grab',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Tilting another character’s chin upward with the fingers to compel eye contact or a kiss.',
    aliases: ['holding_chin', 'lifting_chin'],
    relatedTags: ['imminent_kiss', 'kabedon', 'looking_up'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'headpat',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Hand gently resting on and patting the top of a character’s head.',
    aliases: ['patting_head', 'hand_on_head'],
    relatedTags: ['pov_hands', 'smile', 'closed_eyes', 'cat_ears'],
    popularity: 'Core',
    postCountEst: '130K'
  },
  {
    tag: 'cooperative_paizuri',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two female characters pressing their breasts together from either side for a shared paizuri.',
    aliases: ['double_paizuri', 'tandem_titjob'],
    relatedTags: ['paizuri', '2girls', 'threesome', 'large_breasts'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'tribadism',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two female characters pressing and rubbing their vulvas directly against one another (scissoring).',
    aliases: ['scissoring', 'kai_awase'],
    relatedTags: ['yuri', '2girls', 'spread_legs', 'pussy_juice'],
    popularity: 'Core',
    postCountEst: '85K'
  }
];
