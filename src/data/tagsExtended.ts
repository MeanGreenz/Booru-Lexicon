import { BooruTag } from '../types/lexicon';

export const EXTENDED_TAGS: BooruTag[] = [
  // Extended Character Traits & Body Details
  {
    tag: 'short_hair_with_long_locks',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Cropped short hair at the back paired with long front sidelocks framing the chest.',
    aliases: ['jellyfish_cut', 'long_sidelocks_short_back'],
    relatedTags: ['short_hair', 'sidelocks', 'hime_cut'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'half_updo',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Upper section of hair tied or pinned at the back while the lower half flows freely.',
    aliases: ['half_up_half_down'],
    relatedTags: ['two_side_up', 'long_hair', 'hair_ribbon'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'spiky_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Sharp, energetic pointed tufts of hair common in shonen protagonists and tomboy designs.',
    aliases: ['jagged_hair', 'spiked_hair'],
    relatedTags: ['short_hair', 'messy_hair', '1boy'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'curly_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Defined springy curls or voluminous ringlets.',
    aliases: ['curls', 'ringlet_hair'],
    relatedTags: ['wavy_hair', 'drill_hair', 'long_hair'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'hair_over_shoulder',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Long hair or a single braid draped forward over the collarbone and chest.',
    aliases: ['draped_hair_forward'],
    relatedTags: ['long_hair', 'single_braid', 'side_ponytail'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'split-color_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Hair divided symmetrically down the center into two distinct contrasting colors.',
    aliases: ['half-and-half_hair', 'two-sided_hair_color'],
    relatedTags: ['multicolored_hair', 'streaked_hair', 'heterochromia'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'purple_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Lavender, violet, or deep plum hair color.',
    aliases: ['violet_hair', 'lavender_hair'],
    relatedTags: ['purple_eyes', 'long_hair', 'red_eyes'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'red_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Crimson, scarlet, or fiery red hair.',
    aliases: ['crimson_hair', 'scarlet_hair'],
    relatedTags: ['red_eyes', 'yellow_eyes', 'twintails'],
    popularity: 'Core',
    postCountEst: '910K'
  },
  {
    tag: 'green_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Mint, emerald, or forest green hair.',
    aliases: ['emerald_hair', 'mint_hair'],
    relatedTags: ['green_eyes', 'yellow_eyes'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'brown_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Chestnut, auburn, or warm chocolate brown hair.',
    aliases: ['brunette', 'chestnut_hair'],
    relatedTags: ['brown_eyes', 'school_uniform'],
    popularity: 'Core',
    postCountEst: '1.8M'
  },
  {
    tag: 'aqua_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Bright cyan, turquoise, or seafoam-blue irises.',
    aliases: ['cyan_eyes', 'turquoise_eyes', 'teal_eyes'],
    relatedTags: ['blue_eyes', 'white_hair', 'silver_hair'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'pink_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Rose, magenta, or sakura-pink irises.',
    aliases: ['magenta_eyes', 'rose_eyes'],
    relatedTags: ['pink_hair', 'white_hair', 'heart-shaped_pupils'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'multicolored_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Irises featuring two or more blended colors or gradient rings within each eye.',
    aliases: ['gradient_eyes', 'two-tone_eyes'],
    relatedTags: ['heterochromia', 'big_eyes', 'symbol-shaped_pupils'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'ringed_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Concentric circular rings surrounding the pupil inside the iris (makima / rinnegan style).',
    aliases: ['concentric_pupils', 'spiral_eyes'],
    relatedTags: ['yellow_eyes', 'red_eyes', 'constricted_pupils'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'long_eyelashes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Prominent, delicately feathered upper and lower eyelashes.',
    aliases: ['thick_eyelashes', 'detailed_eyelashes'],
    relatedTags: ['big_eyes', 'colored_eyelashes', 'closeup'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'colored_eyelashes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyelashes tinted white, pink, or matching hair color rather than standard black.',
    aliases: ['white_eyelashes', 'tinted_eyelashes'],
    relatedTags: ['white_hair', 'long_eyelashes', 'big_eyes'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'looking_up',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Character tilts eyes or head upward toward the sky or an overhead camera.',
    aliases: ['upturned_gaze', 'uwamezukai'],
    relatedTags: ['from_above', 'big_eyes', 'blush'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'looking_down',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Character directs gaze downward toward the ground or a low-angle viewer.',
    aliases: ['downcast_eyes', 'looking_below'],
    relatedTags: ['from_below', 'smug', 'glaring'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'v-shaped_eyebrows',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Eyebrows angled sharply inward toward the bridge of the nose, expressing determination, smugness, or anger.',
    aliases: ['furrowed_brows', 'determined_eyebrows'],
    relatedTags: ['angry', 'smug', 'pout', 'grin'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'wavy_mouth',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Squiggly comedic or flustered mouth line.',
    aliases: ['squiggly_mouth'],
    relatedTags: ['embarrassed', 'pout', 'crying'],
    popularity: 'Common',
    postCountEst: '125K'
  },
  {
    tag: 'evil_smile',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Sinister, villainous, or unhinged wide grin.',
    aliases: ['wicked_grin', 'sinister_smile', 'gesugao'],
    relatedTags: ['grin', 'crazy_eyes', 'sanpaku', 'shaded_face'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'shaded_face',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Upper half of the face cast in dramatic shadow over the eyes and forehead.',
    aliases: ['shadow_over_eyes', 'darkened_face'],
    relatedTags: ['evil_smile', 'glowing_eyes', 'angry', 'chiaroscuro'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'collarbone',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Defined clavicle bones visible at the base of the neck.',
    aliases: ['clavicle'],
    relatedTags: ['bare_shoulders', 'off-shoulder', 'upper_body'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },
  {
    tag: 'bare_shoulders',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Uncovered shoulders exposed by sleeveless, strapless, or off-shoulder attire.',
    aliases: ['exposed_shoulders'],
    relatedTags: ['off-shoulder', 'detached_sleeves', 'collarbone', 'sundress'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'midriff',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Exposed stomach and waist area between a cropped top and skirt/pants.',
    aliases: ['exposed_waist', 'bare_stomach'],
    relatedTags: ['crop_top', 'navel', 'short_shorts'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Animal, demon, or dragon tail extending from the lower back.',
    aliases: ['animal_tail'],
    relatedTags: ['cat_tail', 'fox_tail', 'demon_tail', 'dragon_tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },
  {
    tag: 'demon_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Slender whip-like tail ending in a spade or heart-shaped tip.',
    aliases: ['spade_tail', 'succubus_tail'],
    relatedTags: ['tail', 'horns', 'bat_wings'],
    popularity: 'Core',
    postCountEst: '215K'
  },

  // Extended Clothing & Details
  {
    tag: 'frills',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Ruffled pleated fabric trim adorning collars, cuffs, aprons, or hemlines.',
    aliases: ['ruffles', 'frilled_trim'],
    relatedTags: ['lace_trim', 'maid', 'gothic_lolita', 'frilled_dress'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'lace_trim',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Delicate openwork lace bordering garments or stockings.',
    aliases: ['lace_edging', 'filigree_lace'],
    relatedTags: ['frills', 'gothic_lolita', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'cape',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Sleeveless outer cloak draped from the shoulders down the back.',
    aliases: ['cloak', 'mantle'],
    relatedTags: ['capelet', 'hooded_cloak', 'armor', 'wind'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'capelet',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Short shoulder-length cape covering only the upper torso and shoulders.',
    aliases: ['short_cape', 'shoulder_cape'],
    relatedTags: ['cape', 'military_uniform', 'beret'],
    popularity: 'Core',
    postCountEst: '235K'
  },
  {
    tag: 'suspenders',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Fabric or leather straps worn over the shoulders and clipped to a skirt or trousers.',
    aliases: ['braces', 'suspender_skirt'],
    relatedTags: ['high-waist_skirt', 'pleated_skirt', 'collared_shirt'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'corset',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Structured laced bodice cinching the waist, common in gothic and fantasy outfits.',
    aliases: ['underbust_corset', 'laced_bodice'],
    relatedTags: ['gothic_lolita', 'frills', 'ribbon-trimmed_clothes'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'oversized_clothes',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Baggy, loose-fitting jacket, hoodie, or shirt several sizes larger than the wearer.',
    aliases: ['baggy_clothes', 'oversized_shirt', 'boyfriend_shirt'],
    relatedTags: ['sleeves_past_wrists', 'hoodie', 'off-shoulder'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'track_jacket',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Sporty zip-up athletic jersey jacket with striped sleeves and high collar.',
    aliases: ['jersey_jacket', 'sportswear_jacket'],
    relatedTags: ['gym_uniform', 'sneakers', 'short_shorts'],
    popularity: 'Core',
    postCountEst: '155K'
  },
  {
    tag: 'garter_straps',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Vertical elastic straps connecting thighhigh stockings to a garter belt or hip band.',
    aliases: ['garters', 'stocking_straps'],
    relatedTags: ['thighhighs', 'skindentation', 'thigh_strap'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'thigh_strap',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Decorative leather, ribbon, or tactical band buckled around one or both thighs.',
    aliases: ['leg_garter', 'thigh_band', 'thigh_holster'],
    relatedTags: ['thighhighs', 'skindentation', 'short_shorts'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'eyepatch',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Black cloth or medical white patch covering one eye (chuunibyou or pirate motif).',
    aliases: ['eye_patch', 'medical_eyepatch'],
    relatedTags: ['one_eye_covered', 'military_uniform'],
    popularity: 'Core',
    postCountEst: '185K'
  },

  // Extended Pose & Composition
  {
    tag: 'dynamic_pose',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'High-energy action posture with twisting torso, airborne limbs, and sweeping lines of action.',
    aliases: ['action_pose', 'kinetic_pose'],
    relatedTags: ['dutch_angle', 'foreshortening', 'floating_hair', 'jumping'],
    popularity: 'Core',
    postCountEst: '195K',
    illustriousNote: 'Combine dynamic_pose + dutch_angle + floating_hair for splash-art energy.'
  },
  {
    tag: 'back-to-back',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Two characters standing or sitting with their backs resting against one another.',
    aliases: ['standing_back_to_back'],
    relatedTags: ['2girls', '2boys', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'princess_carry',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character cradling another horizontally in both arms.',
    aliases: ['bridal_carry', 'ohimesama_dakko'],
    relatedTags: ['2girls', '1boy', '1girl'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'chin_rest',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Resting the chin on one or both hands while elbows sit on a desk, table, or knees.',
    aliases: ['head_in_hands', 'resting_chin_on_hand'],
    relatedTags: ['sitting', 'on_desk', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'waving',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One hand raised with open palm waving hello or goodbye.',
    aliases: ['waving_hand', 'greeting_gesture'],
    relatedTags: ['smile', 'open_mouth', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'clenched_hand',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Fingers curled tightly into a fist showing resolve or combat readiness.',
    aliases: ['fist', 'clenched_fist'],
    relatedTags: ['fighting_stance', 'hand_on_own_chest', 'angry'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'interlocked_fingers',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Fingers of both hands laced together (either the character’s own hands or holding hands with another).',
    aliases: ['clasped_hands', 'laced_fingers'],
    relatedTags: ['holding_hands', 'own_hands_together', 'hand_on_own_chest'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'reflection',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Subject or sky mirrored in wet puddles, calm water, glass windows, or a mirror.',
    aliases: ['water_reflection', 'mirror_reflection'],
    relatedTags: ['water', 'puddle', 'mirror', 'window', 'rain'],
    popularity: 'Core',
    postCountEst: '240K'
  }
];
