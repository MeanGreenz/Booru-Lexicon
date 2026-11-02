import { BooruTag } from '../types/lexicon';

export const EXPLICIT_ACTION_TAGS: BooruTag[] = [
  // Intimate & Explicit Positions / Acts
  {
    tag: 'sex',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'General canonical Danbooru tag for sexual intercourse.',
    aliases: ['intercourse', 'coitus', 'vaginal_sex'],
    relatedTags: ['rating_explicit', 'uncensored', 'hetero', 'yuri', 'after_sex'],
    popularity: 'Core',
    postCountEst: '980K'
  },
  {
    tag: 'cowgirl_position',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Partner straddling on top facing the viewer or supine partner.',
    aliases: ['woman_on_top', 'riding_position'],
    relatedTags: ['straddling', 'reverse_cowgirl_position', 'sex', 'pov', 'looking_down'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'reverse_cowgirl_position',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Partner straddling on top while facing away, showcasing the back and buttocks.',
    aliases: ['reverse_riding'],
    relatedTags: ['cowgirl_position', 'from_behind', 'ass_focus', 'looking_back', 'arched_back'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'doggystyle',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Intercourse from behind while on all fours or bent over.',
    aliases: ['rear_entry', 'doggy_style'],
    relatedTags: ['sex_from_behind', 'all_fours', 'top-down_bottom-up', 'arched_back', 'looking_back'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'sex_from_behind',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Rear-entry intercourse in standing, kneeling, or prone positions.',
    aliases: ['from_behind_sex'],
    relatedTags: ['doggystyle', 'standing_sex', 'grabbing_from_behind', 'looking_back'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'missionary',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Face-to-face intercourse with the receiving partner lying on their back.',
    aliases: ['missionary_position'],
    relatedTags: ['on_back', 'spread_legs', 'legs_up', 'mating_press', 'pov'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'mating_press',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Intense missionary variation with the receiving partner’s legs folded high back toward their shoulders.',
    aliases: ['folded_missionary', 'deep_press'],
    relatedTags: ['missionary', 'legs_up', 'on_back', 'soles', 'ahegao'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'standing_sex',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Intercourse performed while one or both partners are standing upright (against a wall, window, or lifted).',
    aliases: ['upright_sex', 'against_wall_sex'],
    relatedTags: ['standing', 'sex_from_behind', 'one_leg_up', 'breast_press'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'fellatio',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Oral stimulation of a penis.',
    aliases: ['blowjob', 'bj', 'oral_sex'],
    relatedTags: ['irrumatio', 'licking_penis', 'pov', 'looking_up', 'saliva'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'cunnilingus',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Oral stimulation of the vulva/clitoris.',
    aliases: ['pussy_licking', 'oral_on_female'],
    relatedTags: ['yuri', 'spread_legs', 'pussy', 'tongue_out'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'paizuri',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'pressing the breasts together around a shaft (titjob / mammary intercourse).',
    aliases: ['titjob', 'boobjob', 'mammary_intercourse'],
    relatedTags: ['large_breasts', 'huge_breasts', 'breast_hold', 'cleavage', 'cooperative_paizuri'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'handjob',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Manual stimulation with one or both hands.',
    aliases: ['hj', 'manual_stimulation'],
    relatedTags: ['double_handjob', 'gloves', 'pov', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'footjob',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Stimulation using the soles or toes of the feet (barefoot, in stockings, or pantyhose).',
    aliases: ['fj', 'pedal_stimulation'],
    relatedTags: ['soles', 'barefoot', 'foot_focus', 'pantyhose', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'thigh_sex',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Intercrural stimulation pressed between thick thighs.',
    aliases: ['thighjob', 'intercrural_sex'],
    relatedTags: ['thick_thighs', 'thighhighs', 'zettai_ryouiki', 'skindentation'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'masturbation',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Solo erotic self-stimulation.',
    aliases: ['female_masturbation', 'solo_erotic'],
    relatedTags: ['fingering', 'hand_between_legs', 'solo', 'heavy_breathing', 'blush'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'fingering',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Digital stimulation or penetration using the fingers.',
    aliases: ['digital_penetration'],
    relatedTags: ['masturbation', 'hand_between_legs', 'pussy_juice', 'spread_legs'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'after_sex',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Post-coital scene featuring disheveled clothing, sweat, heavy breathing, or exhaustion.',
    aliases: ['afterglow', 'post-coital'],
    relatedTags: ['sweat', 'heavy_breathing', 'messy_hair', 'cum', 'on_bed'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'x-ray',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Anatomical cross-section inset or cutaway showing internal penetration.',
    aliases: ['cross-section', 'internal_view_inset'],
    relatedTags: ['sex', 'cum_in_pussy', 'stomach_bulge'],
    popularity: 'Core',
    postCountEst: '185K'
  },

  // Fluids, Anatomy & Fetish / Bondage Attire
  {
    tag: 'penis',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Explicit male or futanari phallus.',
    aliases: ['cock', 'dick', 'phallus', 'erection'],
    relatedTags: ['erection', 'testicles', '1boy', 'futanari', 'uncensored'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },
  {
    tag: 'futanari',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Female character possessing both breasts and male genitalia.',
    aliases: ['futa', 'hermaphrodite_character'],
    relatedTags: ['penis', 'breasts', '1girl', 'rating_explicit'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'cum',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible seminal fluid in an explicit scene.',
    aliases: ['semen', 'ejaculation', 'bukkake'],
    relatedTags: ['cum_on_body', 'cum_in_pussy', 'facial', 'cum_on_breasts', 'after_sex'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'cum_in_pussy',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Internal ejaculation or creampie overflowing from the vulva.',
    aliases: ['creampie', 'nakadashi', 'cum_drip'],
    relatedTags: ['cum', 'pussy', 'after_sex', 'x-ray'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'cum_on_body',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Seminal fluid across the stomach, chest, or thighs.',
    aliases: ['cum_on_stomach', 'cum_on_breasts'],
    relatedTags: ['cum', 'facial', 'shiny_skin'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'facial',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Seminal fluid on the character’s face, cheeks, or tongue.',
    aliases: ['cum_on_face'],
    relatedTags: ['cum', 'fellatio', 'tongue_out', 'ahegao'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'pussy_juice',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Glistening arousal fluid on the vulva, inner thighs, or staining panties.',
    aliases: ['arousal_fluid', 'wet_panties', 'girl_cum'],
    relatedTags: ['pussy', 'fingering', 'panties_aside', 'sweat'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'lactation',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Breast milk droplets or streams expressed from the nipples.',
    aliases: ['breast_milk', 'lactating'],
    relatedTags: ['large_breasts', 'huge_breasts', 'nipples', 'breast_press'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'bondage',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Restraint motifs including ropes, cuffs, chains, or leather straps.',
    aliases: ['bdsm', 'restrained', 'tied_up'],
    relatedTags: ['shibari', 'bound_wrists', 'collar', 'gag', 'chains'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'shibari',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Traditional Japanese decorative rope bondage (kinbaku) framing the bust and hips.',
    aliases: ['kinbaku', 'rope_bondage', 'red_rope'],
    relatedTags: ['bondage', 'skindentation', 'large_breasts', 'nude'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'collar',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Leather, metal, or pet-style collar worn around the neck, often with an O-ring or leash.',
    aliases: ['neck_collar', 'o-ring_collar', 'pet_collar'],
    relatedTags: ['leash', 'choker', 'chains', 'bondage'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'leash',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Chain or leather lead attached to a neck collar.',
    aliases: ['collar_and_leash', 'chain_leash'],
    relatedTags: ['collar', 'all_fours', 'pov'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'fishnets',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Open diamond-mesh fishnet stockings, thighhighs, or bodysuits.',
    aliases: ['fishnet_stockings', 'fishnet_thighhighs', 'fishnet_pantyhose'],
    relatedTags: ['thighhighs', 'pantyhose', 'bodystocking', 'garter_belt'],
    popularity: 'Core',
    postCountEst: '240K'
  }
];
