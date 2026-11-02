import { BooruTag } from '../types/lexicon';

export const CHARACTER_TAGS: BooruTag[] = [
  // Subject Count & Demographics
  {
    tag: '1girl',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Single female subject in the frame. Essential subject-count anchor tag for SDXL Illustrious.',
    aliases: ['solo_girl', 'single_female', 'one_girl'],
    relatedTags: ['solo', '1boy', '2girls'],
    popularity: 'Core',
    postCountEst: '5.4M',
    illustriousNote: 'Always place subject count tags right after quality/meta tags in Illustrious prompts.'
  },
  {
    tag: 'solo',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Only one character appears in the entire image with no background crowd or secondary characters.',
    aliases: ['alone', 'single_subject', '1person'],
    relatedTags: ['1girl', '1boy', 'solo_focus'],
    popularity: 'Core',
    postCountEst: '4.6M',
    illustriousNote: 'Prevents Illustrious from hallucinating bystander characters in complex scenes.'
  },
  {
    tag: 'solo_focus',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Multiple characters may exist in the scene, but camera and depth-of-field focus on a single main character.',
    aliases: ['main_character_focus', 'single_focus'],
    relatedTags: ['solo', 'depth_of_field', 'crowd'],
    popularity: 'Common',
    postCountEst: '185K'
  },
  {
    tag: '1boy',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Single male subject in the frame. Core subject-count anchor tag.',
    aliases: ['solo_boy', 'single_male', 'one_boy'],
    relatedTags: ['solo', '1girl', '2boys', 'male_focus'],
    popularity: 'Core',
    postCountEst: '1.3M'
  },
  {
    tag: 'male_focus',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Centers compositional focus on a male subject, reinforcing masculine facial and body proportions.',
    aliases: ['boy_focus', 'male_protagonist'],
    relatedTags: ['1boy', 'solo', 'ikemen'],
    popularity: 'Core',
    postCountEst: '740K',
    illustriousNote: 'Helpful in SDXL Illustrious when generating solo male characters to avoid default female bias.'
  },
  {
    tag: '2girls',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Two female characters in the same frame.',
    aliases: ['two_girls', 'female_duo', 'pair'],
    relatedTags: ['multiple_girls', '1girl', 'yuri', 'back-to-back'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'multiple_girls',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Two or more female subjects appearing together.',
    aliases: ['group_of_girls', 'many_girls'],
    relatedTags: ['2girls', '3girls', 'group_shot'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: '2boys',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Two male characters in the same frame.',
    aliases: ['two_boys', 'male_duo'],
    relatedTags: ['1boy', 'multiple_boys'],
    popularity: 'Common',
    postCountEst: '320K'
  },
  {
    tag: 'chibi',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Super-deformed miniature character proportions with a large head and small body.',
    aliases: ['super_deformed', 'sd_character', 'mini_character'],
    relatedTags: ['big_eyes', 'simple_background', 'full_body'],
    popularity: 'Core',
    postCountEst: '410K'
  },

  // Hair Length & Structure
  {
    tag: 'long_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair reaching past the shoulders down to the mid-back.',
    aliases: ['shoulder-length_plus', 'flowing_hair'],
    relatedTags: ['very_long_hair', 'floating_hair', 'hair_over_shoulder'],
    popularity: 'Core',
    postCountEst: '4.1M'
  },
  {
    tag: 'very_long_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair extending to the waist, hips, or past the thighs.',
    aliases: ['waist_length_hair', 'hip_length_hair', 'rapunzel_hair'],
    relatedTags: ['long_hair', 'absurdly_long_hair', 'floating_hair'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'absurdly_long_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair longer than the character’s entire body height, trailing on the ground or swirling around.',
    aliases: ['floor_length_hair', 'extremely_long_hair'],
    relatedTags: ['very_long_hair', 'floating_hair'],
    popularity: 'Common',
    postCountEst: '115K'
  },
  {
    tag: 'short_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair cropped above the chin or nape of the neck without long extensions.',
    aliases: ['cropped_hair', 'pixie_cut', 'boyish_hair'],
    relatedTags: ['bob_cut', 'pixie_cut', 'short_hair_with_long_locks'],
    popularity: 'Core',
    postCountEst: '2.2M'
  },
  {
    tag: 'medium_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair falling between the chin and the tops of the shoulders.',
    aliases: ['shoulder_length_hair', 'mid_length_hair'],
    relatedTags: ['bob_cut', 'flipped_hair', 'short_hair'],
    popularity: 'Core',
    postCountEst: '980K'
  },
  {
    tag: 'bob_cut',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Evenly cut chin-to-jaw length hair that curves inward around the face.',
    aliases: ['bob_hair', 'pageboy_cut'],
    relatedTags: ['short_hair', 'medium_hair', 'blunt_bangs'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'hime_cut',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Traditional Japanese aristocratic hairstyle featuring straight blunt bangs, cheek-length sidelocks, and long straight back hair.',
    aliases: ['princess_cut', 'hime_hair'],
    relatedTags: ['blunt_bangs', 'sidelocks', 'straight_hair', 'long_hair'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'twintails',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair divided into two symmetrical tails bound on either side of the head.',
    aliases: ['pigtails', 'double_ponytail', 'twin_tails'],
    relatedTags: ['low_twintails', 'short_twintails', 'two_side_up', 'hair_ribbon'],
    popularity: 'Core',
    postCountEst: '960K'
  },
  {
    tag: 'low_twintails',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Two symmetrical tails tied low near the nape of the neck or behind the ears.',
    aliases: ['low_pigtails'],
    relatedTags: ['twintails', 'braided_twintails'],
    popularity: 'Common',
    postCountEst: '210K'
  },
  {
    tag: 'two_side_up',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Part of the hair is tied into twin tails on the sides while the rest hangs loose down the back.',
    aliases: ['half_twintails', 'half_up_twintails'],
    relatedTags: ['twintails', 'half_updo', 'long_hair'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'ponytail',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair gathered and tied into a single tail at the back of the head.',
    aliases: ['single_ponytail', 'high_ponytail'],
    relatedTags: ['high_ponytail', 'low_ponytail', 'side_ponytail', 'hair_tie'],
    popularity: 'Core',
    postCountEst: '990K'
  },
  {
    tag: 'high_ponytail',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Ponytail tied high near the crown of the head for an energetic silhouette.',
    aliases: ['tall_ponytail', 'sporty_ponytail'],
    relatedTags: ['ponytail', 'hair_ribbon'],
    popularity: 'Common',
    postCountEst: '140K'
  },
  {
    tag: 'side_ponytail',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'A single ponytail gathered asymmetrically on the left or right side of the head.',
    aliases: ['asymmetric_ponytail'],
    relatedTags: ['ponytail', 'one_side_up'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'braid',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Interwoven strands of hair forming a plait.',
    aliases: ['plait', 'braided_hair'],
    relatedTags: ['single_braid', 'twin_braids', 'crown_braid', 'french_braid'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'twin_braids',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Two symmetrical braids worn on either side of the head.',
    aliases: ['double_braids', 'braided_pigtails'],
    relatedTags: ['braid', 'low_twin_braids'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'hair_bun',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair coiled into a spherical or rounded bun on the back or top of the head.',
    aliases: ['bun', 'chignon', 'odango'],
    relatedTags: ['single_hair_bun', 'double_bun', 'cone_hair_bun', 'bun_cover'],
    popularity: 'Core',
    postCountEst: '370K'
  },
  {
    tag: 'double_bun',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Two symmetrical hair buns worn on the upper sides of the head (odango style).',
    aliases: ['odango_hair', 'twin_buns', 'space_buns'],
    relatedTags: ['hair_bun', 'bun_cover', 'china_dress'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'drill_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Tightly coiled spiral ringlets resembling drills, classic ojou-sama aesthetic.',
    aliases: ['ringlets', 'corkscrew_curls', 'ojou_curls'],
    relatedTags: ['twin_drills', 'wavy_hair', 'curly_hair'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'wavy_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair with soft, flowing S-shaped undulations.',
    aliases: ['undulating_hair', 'soft_curls'],
    relatedTags: ['curly_hair', 'long_hair', 'floating_hair'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'straight_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Sleek, uncurled hair falling in smooth straight lines.',
    aliases: ['sleek_hair', 'silky_straight_hair'],
    relatedTags: ['hime_cut', 'long_hair', 'blunt_bangs'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'messy_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Tousled, unkempt, or windblown hair strands.',
    aliases: ['bedhead', 'tousled_hair', 'disheveled_hair'],
    relatedTags: ['spiky_hair', 'floating_hair', 'wind'],
    popularity: 'Core',
    postCountEst: '245K'
  },
  {
    tag: 'floating_hair',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair drifting weightlessly in the air as if suspended in wind, water, or magic.',
    aliases: ['billowing_hair', 'weightless_hair'],
    relatedTags: ['long_hair', 'wind', 'dynamic_pose'],
    popularity: 'Core',
    postCountEst: '360K',
    illustriousNote: 'Dramatically boosts composition dynamism in SDXL Illustrious.'
  },

  // Bangs, Sidelocks & Hair Features
  {
    tag: 'blunt_bangs',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Forehead bangs cut straight and horizontally across the brow.',
    aliases: ['straight_bangs', 'fringe_cut', 'hime_bangs'],
    relatedTags: ['hime_cut', 'bob_cut', 'parted_bangs'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'swept_bangs',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Bangs brushed diagonally across the forehead to one side.',
    aliases: ['side-swept_bangs', 'diagonal_bangs'],
    relatedTags: ['hair_over_one_eye', 'parted_bangs'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'parted_bangs',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Bangs separated in the center or off-center, exposing part of the forehead.',
    aliases: ['curtain_bangs', 'center_parted_bangs'],
    relatedTags: ['forehead', 'swept_bangs'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'crossed_bangs',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Locks of bangs that overlap and cross over each other in the center of the forehead.',
    aliases: ['overlapping_bangs'],
    relatedTags: ['hair_between_eyes', 'blunt_bangs'],
    popularity: 'Common',
    postCountEst: '270K'
  },
  {
    tag: 'hair_between_eyes',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'One or more distinct strands of bangs falling vertically down the bridge of the nose between the eyes.',
    aliases: ['center_strand', 'middle_bangs'],
    relatedTags: ['crossed_bangs', 'parted_bangs'],
    popularity: 'Core',
    postCountEst: '810K'
  },
  {
    tag: 'hair_over_one_eye',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Bangs or sidelocks completely obscuring one of the character’s eyes.',
    aliases: ['peekaboo_bangs', 'covered_eye_hair'],
    relatedTags: ['one_eye_covered', 'swept_bangs', 'asymmetric_hair'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'sidelocks',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Distinct locks of hair hanging down in front of the ears framing the cheeks.',
    aliases: ['face-framing_locks', 'side_locks'],
    relatedTags: ['hime_cut', 'hair_intakes', 'long_hair'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'ahoge',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'A single expressive cowlick or lock of hair sticking up from the top of the head.',
    aliases: ['cowlick', 'antenna_hair', 'idiot_hair'],
    relatedTags: ['antenna_hair', 'heart_ahoge', 'short_hair'],
    popularity: 'Core',
    postCountEst: '780K'
  },
  {
    tag: 'hair_intakes',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Peaked M-shaped bangs framing the temples that resemble air vents on anime mechs.',
    aliases: ['hair_vents', 'm-bangs'],
    relatedTags: ['sidelocks', 'ahoge'],
    popularity: 'Common',
    postCountEst: '185K'
  },
  {
    tag: 'multicolored_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Hair containing two or more distinct colors via streaks, gradients, or colored inner layers.',
    aliases: ['two-tone_hair', 'dyed_hair'],
    relatedTags: ['streaked_hair', 'gradient_hair', 'colored_inner_hair', 'split-color_hair'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'colored_inner_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'The underside or interior layer of hair is a contrasting color from the outer hair.',
    aliases: ['inner_hair_color', 'underlayer_hair_dye', 'peekaboo_highlights'],
    relatedTags: ['multicolored_hair', 'gradient_hair', 'streaked_hair'],
    popularity: 'Core',
    postCountEst: '145K',
    illustriousNote: 'Pair with a specific color tag such as pink_inner_hair or blue_inner_hair.'
  },
  {
    tag: 'gradient_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Hair that smoothly transitions from one color at the roots to another color at the tips.',
    aliases: ['ombre_hair', 'fade_hair'],
    relatedTags: ['multicolored_hair', 'colored_tips'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'streaked_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Distinct vertical strands or highlights of a secondary color running through the hair.',
    aliases: ['hair_highlights', 'striped_hair'],
    relatedTags: ['multicolored_hair', 'colored_inner_hair'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'white_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Pure snow-white hair color.',
    aliases: ['albino_hair', 'snow_white_hair'],
    relatedTags: ['silver_hair', 'red_eyes', 'blue_eyes'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'silver_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Metallic or cool light-grey silver hair.',
    aliases: ['platinum_hair', 'ash_grey_hair'],
    relatedTags: ['white_hair', 'grey_hair'],
    popularity: 'Core',
    postCountEst: '950K'
  },
  {
    tag: 'blonde_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Yellow or golden hair color.',
    aliases: ['yellow_hair', 'golden_hair', 'blond_hair'],
    relatedTags: ['blue_eyes', 'green_eyes', 'drill_hair'],
    popularity: 'Core',
    postCountEst: '1.9M'
  },
  {
    tag: 'black_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Deep jet-black hair, often rendered with blue or purple specular highlights.',
    aliases: ['dark_hair', 'raven_hair', 'ebony_hair'],
    relatedTags: ['hime_cut', 'long_hair', 'red_eyes'],
    popularity: 'Core',
    postCountEst: '2.1M'
  },
  {
    tag: 'pink_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Pastel rose, sakura, or vibrant magenta-pink hair.',
    aliases: ['sakura_hair', 'rose_hair'],
    relatedTags: ['twintails', 'blue_eyes'],
    popularity: 'Core',
    postCountEst: '1.0M'
  },
  {
    tag: 'blue_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Cobalt, sky, or navy blue hair.',
    aliases: ['azure_hair', 'navy_hair', 'cyan_hair'],
    relatedTags: ['aqua_hair', 'blue_eyes'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },

  // Eyes, Pupils & Gaze
  {
    tag: 'big_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Large, expressive anime eyes with prominent iris detail and catchlights.',
    aliases: ['large_eyes', 'doe_eyes', 'expressive_eyes'],
    relatedTags: ['detailed_eyes', 'sparkling_eyes', 'chibi'],
    popularity: 'Core',
    postCountEst: '110K',
    illustriousNote: 'Canonical underscore tag big_eyes emphasizes classic moe/expressive eye proportions.'
  },
  {
    tag: 'tareme',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Droopy outer eye corners that slope gently downward, giving a soft, kind, or gentle expression.',
    aliases: ['droopy_eyes', 'gentle_eyes', 'downward-slanted_eyes'],
    relatedTags: ['tsurime', 'big_eyes', 'smile'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'tsurime',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Sharp outer eye corners slanted upward, conveying confidence, intensity, or tsundere attitude.',
    aliases: ['sharp_eyes', 'upward-slanted_eyes', 'cat_eyes'],
    relatedTags: ['tareme', 'jitome', 'glaring'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'jitome',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Flat, heavy half-lowered upper eyelids expressing deadpan skepticism, boredom, or dry irritation.',
    aliases: ['deadpan_eyes', 'unamused_eyes', 'flat_upper_eyelids'],
    relatedTags: ['half-closed_eyes', 'expressionless', 'annoyed'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'sanpaku',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Small irises where the white sclera is visible beneath (or above) the iris, giving an intense or unhinged gaze.',
    aliases: ['small_iris', 'sclera_visible_below_iris'],
    relatedTags: ['wide-eyed', 'crazy_eyes', 'constricted_pupils'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'heterochromia',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Left and right eyes have two different iris colors.',
    aliases: ['odd_eyes', 'different_colored_eyes', 'dichromia'],
    relatedTags: ['multicolored_eyes', 'red_eyes', 'blue_eyes'],
    popularity: 'Core',
    postCountEst: '240K',
    illustriousNote: 'Combine with two color tags (e.g. blue_eyes, yellow_eyes, heterochromia).'
  },
  {
    tag: 'slit_pupils',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Vertical feline, reptilian, or draconic pupils instead of round human pupils.',
    aliases: ['cat_pupils', 'vertical_pupils', 'snake_eyes'],
    relatedTags: ['yellow_eyes', 'dragon_girl', 'cat_ears'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'symbol-shaped_pupils',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Pupils shaped like stars, hearts, crosses, or diamonds.',
    aliases: ['patterned_pupils', 'shaped_pupils'],
    relatedTags: ['heart-shaped_pupils', 'star-shaped_pupils', 'cross-shaped_pupils'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'star-shaped_pupils',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Bright star emblems inside the pupils or irises (iconic idol eye motif).',
    aliases: ['star_eyes', 'starry_pupils'],
    relatedTags: ['symbol-shaped_pupils', 'sparkling_eyes', 'idol'],
    popularity: 'Core',
    postCountEst: '92K'
  },
  {
    tag: 'heart-shaped_pupils',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Heart symbols inside the pupils indicating infatuation or excitement.',
    aliases: ['heart_eyes', 'love_pupils'],
    relatedTags: ['symbol-shaped_pupils', 'blush'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'glowing_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Irises emitting luminous light or energy trails.',
    aliases: ['luminous_eyes', 'shining_eyes'],
    relatedTags: ['glowing', 'magic', 'darkness'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'empty_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyes rendered without specular highlights or catchlights, conveying despair, trance, or yandere detachment.',
    aliases: ['dead_eyes', 'highlightless_eyes', 'soulless_eyes'],
    relatedTags: ['expressionless', 'yandere', 'dark_persona'],
    popularity: 'Core',
    postCountEst: '205K'
  },
  {
    tag: 'half-closed_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyelids lowered halfway over the iris, creating a sleepy, alluring, or relaxed look.',
    aliases: ['bedroom_eyes', 'heavy_eyelids', 'lidded_eyes'],
    relatedTags: ['jitome', 'sleepy', 'smug'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'closed_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Both eyes completely shut, either peacefully, smiling, or sleeping.',
    aliases: ['eyes_shut', 'blinking'],
    relatedTags: ['one_eye_closed', 'sleeping', 'smile'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'one_eye_closed',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'A playful wink or squint with one eye open and the other shut.',
    aliases: ['wink', 'winking'],
    relatedTags: ['closed_eyes', 'v_sign', 'smile'],
    popularity: 'Core',
    postCountEst: '720K'
  },
  {
    tag: 'looking_at_viewer',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Character makes direct eye contact with the camera/viewer.',
    aliases: ['eye_contact', 'direct_gaze'],
    relatedTags: ['looking_away', 'looking_back', 'sideways_glance'],
    popularity: 'Core',
    postCountEst: '3.9M'
  },
  {
    tag: 'looking_back',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Character turns their head over their shoulder to look behind them.',
    aliases: ['over_the_shoulder_glance', 'head_turned_back'],
    relatedTags: ['from_behind', 'looking_at_viewer', 'back'],
    popularity: 'Core',
    postCountEst: '530K'
  },
  {
    tag: 'looking_away',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Character directs their gaze off-camera rather than at the viewer.',
    aliases: ['averted_gaze', 'looking_offscreen'],
    relatedTags: ['looking_to_the_side', 'embarrassed', 'profile'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'sideways_glance',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyes shifted sharply toward the corner of the eye sockets without turning the head fully.',
    aliases: ['side_eye', 'glancing_sideways'],
    relatedTags: ['looking_at_viewer', 'looking_to_the_side'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'red_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Crimson, ruby, or scarlet irises.',
    aliases: ['crimson_eyes', 'ruby_eyes'],
    relatedTags: ['white_hair', 'black_hair', 'vampire'],
    popularity: 'Core',
    postCountEst: '1.5M'
  },
  {
    tag: 'blue_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Sapphire, azure, or ice-blue irises.',
    aliases: ['azure_eyes', 'sapphire_eyes'],
    relatedTags: ['blonde_hair', 'white_hair', 'aqua_eyes'],
    popularity: 'Core',
    postCountEst: '1.8M'
  },
  {
    tag: 'yellow_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Golden or amber-yellow irises.',
    aliases: ['golden_eyes', 'amber_eyes'],
    relatedTags: ['slit_pupils', 'purple_eyes'],
    popularity: 'Core',
    postCountEst: '980K'
  },
  {
    tag: 'purple_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Violet, amethyst, or lavender irises.',
    aliases: ['violet_eyes', 'amethyst_eyes'],
    relatedTags: ['silver_hair', 'black_hair'],
    popularity: 'Core',
    postCountEst: '910K'
  },
  {
    tag: 'green_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Emerald, jade, or lime-green irises.',
    aliases: ['emerald_eyes', 'jade_eyes'],
    relatedTags: ['blonde_hair', 'brown_hair'],
    popularity: 'Core',
    postCountEst: '890K'
  },

  // Facial Expressions & Emotion
  {
    tag: 'smile',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Upward-curved mouth showing happiness, warmth, or friendliness.',
    aliases: ['smiling', 'happy_expression'],
    relatedTags: ['grin', 'light_smile', 'open_mouth', 'closed_eyes'],
    popularity: 'Core',
    postCountEst: '3.2M'
  },
  {
    tag: 'light_smile',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Subtle, gentle closed-mouth smile.',
    aliases: ['soft_smile', 'faint_smile', 'gentle_smile'],
    relatedTags: ['smile', 'closed_mouth', 'tareme'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'grin',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Wide, confident, or mischievous toothy smile.',
    aliases: ['wide_smile', 'toothy_grin', 'smirk'],
    relatedTags: ['smug', 'fang', 'teeth', 'evil_smile'],
    popularity: 'Core',
    postCountEst: '460K'
  },
  {
    tag: 'smug',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Self-satisfied, teasing, or superior expression with a knowing smirk and half-lidded eyes.',
    aliases: ['smirk', 'doyagao', 'teasing_face'],
    relatedTags: ['grin', 'half-closed_eyes', 'v-shaped_eyebrows'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'expressionless',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Stoic, neutral kuudere facial expression with flat mouth and calm brow.',
    aliases: ['stoic', 'deadpan', 'neutral_face', 'kuudere'],
    relatedTags: ['closed_mouth', 'jitome', 'parted_lips'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'blush',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Pink or red flushing across the cheeks from shyness, warmth, or affection.',
    aliases: ['blushing', 'rosy_cheeks', 'flushed_cheeks'],
    relatedTags: ['full-face_blush', 'embarrassed', 'nose_blush'],
    popularity: 'Core',
    postCountEst: '2.8M'
  },
  {
    tag: 'embarrassed',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Flustered, bashful expression with furrowed brows and blushing cheeks.',
    aliases: ['flustered', 'shy_expression', 'bashful'],
    relatedTags: ['blush', 'wavy_mouth', 'looking_away', 'sweatdrop'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'pout',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Puffed cheeks or protruding lower lip showing cute displeasure or sulking.',
    aliases: ['pouting', 'sulking', 'puffed_cheeks'],
    relatedTags: ['annoyed', 'blush', 'v-shaped_eyebrows'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'angry',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Furrowed brows and tense mouth showing anger or fierce determination.',
    aliases: ['mad', 'furious', 'scowl'],
    relatedTags: ['v-shaped_eyebrows', 'glaring', 'clenched_teeth', 'anger_vein'],
    popularity: 'Core',
    postCountEst: '370K'
  },
  {
    tag: 'glaring',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Sharp, piercing stare directed with hostility or intense focus.',
    aliases: ['scowling_gaze', 'fierce_stare'],
    relatedTags: ['angry', 'tsurime', 'v-shaped_eyebrows'],
    popularity: 'Common',
    postCountEst: '140K'
  },
  {
    tag: 'crying',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Shedding tears from sadness, relief, or intense emotion.',
    aliases: ['weeping', 'sobbing'],
    relatedTags: ['tears', 'tearing_up', 'streaming_tears', ' wiping_tears'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'tearing_up',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Glistening droplets pooling at the corners of the eyes without streaming down the cheeks yet.',
    aliases: ['watery_eyes', 'misty_eyes', 'glassy_eyes'],
    relatedTags: ['tears', 'crying', 'blush'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'surprised',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Wide eyes, raised eyebrows, and small open mouth reacting in shock or amazement.',
    aliases: ['shocked', 'startled', 'astonished'],
    relatedTags: ['wide-eyed', 'open_mouth', 'spoken_exclamation_mark'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'open_mouth',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Lips parted wide in speech, laughter, singing, or surprise.',
    aliases: ['mouth_open', 'parted_mouth'],
    relatedTags: ['parted_lips', 'smile', 'fang', 'tongue'],
    popularity: 'Core',
    postCountEst: '2.5M'
  },
  {
    tag: 'parted_lips',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Slightly separated lips with a soft, natural, or editorial poise.',
    aliases: ['slightly_open_mouth'],
    relatedTags: ['closed_mouth', 'lipstick', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'fang',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'A single cute pointed canine tooth (yaeba) peeking from the corner of the upper lip.',
    aliases: ['yaeba', 'cute_fang', 'snaggletooth'],
    relatedTags: ['skin_fang', 'fangs', 'grin', 'open_mouth'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'tongue_out',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Playfully sticking out the tip of the tongue (tehepero or mischievous pose).',
    aliases: ['blep', 'sticking_tongue_out'],
    relatedTags: ['one_eye_closed', 'grin', 'tongue'],
    popularity: 'Core',
    postCountEst: '240K'
  },

  // Ears, Horns, Wings & Body Features
  {
    tag: 'animal_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Kemonomimi animal ears atop the head (cat, fox, wolf, or rabbit).',
    aliases: ['kemonomimi', 'beast_ears'],
    relatedTags: ['cat_ears', 'fox_ears', 'rabbit_ears', 'wolf_ears', 'tail'],
    popularity: 'Core',
    postCountEst: '1.3M'
  },
  {
    tag: 'cat_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Triangular feline nekomimi ears on top of the head.',
    aliases: ['nekomimi', 'feline_ears'],
    relatedTags: ['animal_ears', 'cat_tail', 'slit_pupils', 'fang'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'fox_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Tall, pointed kitsune ears with fluffy inner fur.',
    aliases: ['kitsunemimi', 'kitsune_ears'],
    relatedTags: ['animal_ears', 'fox_tail', 'multiple_tails', 'miko'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'rabbit_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Long upright or lop bunny ears (usagimimi).',
    aliases: ['bunny_ears', 'usagimimi'],
    relatedTags: ['animal_ears', 'rabbit_tail', 'fake_rabbit_ears'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'pointy_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Elven, fairy, or vampire tapered ears extending outward from the sides of the head.',
    aliases: ['elf_ears', 'pointed_ears', 'elven_ears'],
    relatedTags: ['long_pointy_ears', 'elf', 'fantasy'],
    popularity: 'Core',
    postCountEst: '790K'
  },
  {
    tag: 'horns',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Demon, dragon, or oni horns growing from the forehead or temples.',
    aliases: ['demon_horns', 'dragon_horns'],
    relatedTags: ['oni_horns', 'curved_horns', 'single_horn', 'demon_girl'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'halo',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Luminous or geometric ring floating above the head (angelic or Blue Archive style mechanical halo).',
    aliases: ['angel_halo', 'floating_ring'],
    relatedTags: ['angel_wings', 'wings', 'glowing'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'wings',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Feathered, bat, or fairy wings sprouting from the back or head.',
    aliases: ['winged'],
    relatedTags: ['feathered_wings', 'bat_wings', 'head_wings', 'halo'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'feathered_wings',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Bird-like or angelic wings covered in layered feathers.',
    aliases: ['angel_wings', 'bird_wings'],
    relatedTags: ['wings', 'white_wings', 'black_wings', 'halo'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'mechanical_parts',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Cybernetic limbs, robotic joints, or mecha headgear integrated with a human character.',
    aliases: ['cyborg', 'mecha_musume', 'bionic_parts'],
    relatedTags: ['mechanical_arms', 'mechanical_halo', 'headset', 'sci-fi'],
    popularity: 'Common',
    postCountEst: '125K'
  },
  {
    tag: 'dark_skin',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Rich brown, bronze, or dark complexion.',
    aliases: ['brown_skin', 'ebony_skin'],
    relatedTags: ['tan', 'tanlines', 'white_hair'],
    popularity: 'Core',
    postCountEst: '580K'
  },
  {
    tag: 'tan',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Sun-kissed warm tanned skin tone.',
    aliases: ['tanned_skin', 'suntan'],
    relatedTags: ['dark_skin', 'tanlines', 'gyaru'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'pale_skin',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Porcelain, fair, or alabaster skin tone.',
    aliases: ['fair_skin', 'porcelain_skin'],
    relatedTags: ['white_hair', 'gothic_lolita', 'vampire'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'freckles',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Small natural pigmentation spots dusted across the bridge of the nose and cheeks.',
    aliases: ['facial_freckles'],
    relatedTags: ['mole_under_eye', 'blush'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'mole_under_eye',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'A distinct beauty mark positioned just below the lower eyelid.',
    aliases: ['tear_mole', 'beauty_mark_under_eye'],
    relatedTags: ['mole', 'mole_under_mouth', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '185K'
  }
];
