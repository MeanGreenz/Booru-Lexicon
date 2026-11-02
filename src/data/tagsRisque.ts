import { BooruTag } from '../types/lexicon';

export const RISQUE_TAGS: BooruTag[] = [
  // ============================================================================
  // 01. ART & META — Ratings & Censoring Control Tags (SDXL Illustrious)
  // ============================================================================
  {
    tag: 'rating_explicit',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Explicit rating meta-token recognized by SDXL Illustrious and NoobAI checkpoints to unlock uninhibited adult anatomy and explicit scenes.',
    aliases: ['explicit', 'nsfw_rating', 'r-18'],
    relatedTags: ['uncensored', 'nude', 'rating_questionable', 'nsfw'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Place near the start of the prompt when generating explicit or anatomically direct R-18 illustrations.'
  },
  {
    tag: 'rating_questionable',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Questionable / strong ecchi rating meta-token for risqué swimwear, lingerie, heavy cleavage, upskirts, and suggestive poses without full explicit exposure.',
    aliases: ['questionable', 'ecchi_rating', 'r-15'],
    relatedTags: ['rating_sensitive', 'rating_explicit', 'lingerie', 'bikini'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Ideal for sensual pin-up, gravure, and heavy ecchi compositions in Illustrious.'
  },
  {
    tag: 'rating_sensitive',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Mildly suggestive rating token covering standard swimwear, mild cleavage, thighhighs, and form-fitting outfits.',
    aliases: ['sensitive_rating', 'mild_ecchi'],
    relatedTags: ['rating_questionable', 'rating_general'],
    popularity: 'Core',
    postCountEst: 'Meta'
  },
  {
    tag: 'nsfw',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'General adult / not-safe-for-work modifier reinforcing risqué or explicit composition styling.',
    aliases: ['r18', 'adult_content', 'ecchi'],
    relatedTags: ['rating_explicit', 'rating_questionable', 'uncensored'],
    popularity: 'Core',
    postCountEst: 'Meta'
  },
  {
    tag: 'uncensored',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Instructs the model to render anatomical details cleanly without mosaic pixelation or black censor bars.',
    aliases: ['no_censorship', 'decensored'],
    relatedTags: ['rating_explicit', 'nude', 'nipples', 'pussy'],
    popularity: 'Core',
    postCountEst: '620K',
    illustriousNote: 'Also add mosaic_censoring, bar_censor to your Negative Prompt to prevent accidental censorship artifacts.'
  },
  {
    tag: 'convenient_censoring',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Diegetic anime trope where hair strands, steam wisps, light beams, or foreground objects naturally obscure intimate areas.',
    aliases: ['hair_censor', 'steam_censor', 'light_censor'],
    relatedTags: ['nude', 'long_hair', 'backlighting'],
    popularity: 'Core',
    postCountEst: '185K'
  },

  // ============================================================================
  // 02. CHARACTER — Body Proportions, Bust, Anatomy & Sensual Expressions
  // ============================================================================
  {
    tag: 'breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'General tag indicating visible female bust definition.',
    aliases: ['bust', 'chest', 'boobs'],
    relatedTags: ['medium_breasts', 'large_breasts', 'cleavage', 'small_breasts'],
    popularity: 'Core',
    postCountEst: '4.1M'
  },
  {
    tag: 'flat_chest',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Completely flat chest contour with no bust volume.',
    aliases: ['petite_chest', 'washboard_chest'],
    relatedTags: ['small_breasts', 'slender'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'small_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Modest, understated bust proportions.',
    aliases: ['small_bust', 'A-cup', 'B-cup'],
    relatedTags: ['flat_chest', 'medium_breasts', 'slender'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'medium_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Balanced, natural medium bust proportions.',
    aliases: ['average_breasts', 'C-cup'],
    relatedTags: ['breasts', 'large_breasts', 'cleavage'],
    popularity: 'Core',
    postCountEst: '1.6M'
  },
  {
    tag: 'large_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Full, prominent bust proportions.',
    aliases: ['big_breasts', 'busty', 'voluptuous_bust'],
    relatedTags: ['breasts', 'cleavage', 'huge_breasts', 'sideboob'],
    popularity: 'Core',
    postCountEst: '2.3M'
  },
  {
    tag: 'huge_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Very large, heavy bust proportions approaching the size of the character’s head.',
    aliases: ['massive_breasts', 'bakunyuu', 'very_large_breasts'],
    relatedTags: ['large_breasts', 'gigantic_breasts', 'cleavage', 'underboob'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'gigantic_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Hyper-exaggerated bust proportions exceeding the size of the character’s head.',
    aliases: ['hyper_breasts', 'enormous_breasts', 'chichinyuu'],
    relatedTags: ['huge_breasts', 'bursting_breasts'],
    popularity: 'Common',
    postCountEst: '240K'
  },
  {
    tag: 'cleavage',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible hollow and contour between the breasts exposed by a low neckline, bikini, or nudity.',
    aliases: ['bust_cleavage', 'decolletage'],
    relatedTags: ['large_breasts', 'cleavage_cutout', 'sideboob', 'underboob'],
    popularity: 'Core',
    postCountEst: '2.1M'
  },
  {
    tag: 'sideboob',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Outer lateral curve of the breast exposed from the side of a sleeveless top, open shirt, or bikini.',
    aliases: ['side_breast', 'lateral_cleavage'],
    relatedTags: ['cleavage', 'underboob', 'detached_sleeves', 'backless_outfit'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'underboob',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Lower curve of the breasts exposed beneath an ultra-cropped top, lifted shirt, or bikini.',
    aliases: ['bottom_cleavage', 'lower_breast_curve'],
    relatedTags: ['crop_top', 'shirt_lift', 'underboob_cutout', 'large_breasts'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'bouncing_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Dynamic motion lines or upward/downward inertia of the bust during movement or jumping.',
    aliases: ['breast_bounce', 'jiggling_breasts'],
    relatedTags: ['large_breasts', 'motion_lines', 'jumping'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'hanging_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Natural gravity-pulled pendulous breast contour, especially when leaning forward or on all fours.',
    aliases: ['pendulous_breasts', 'natural_sag'],
    relatedTags: ['leaning_forward', 'all_fours', 'large_breasts'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'perky_breasts',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Upturned, firm bust contour.',
    aliases: ['upturned_breasts', 'firm_breasts'],
    relatedTags: ['small_breasts', 'medium_breasts', 'nipples'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'nipples',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Explicitly visible nipples on bare breasts or through sheer fabric.',
    aliases: ['visible_nipples', 'bare_nipples'],
    relatedTags: ['areolae', 'puffy_nipples', 'nude', 'topless'],
    popularity: 'Core',
    postCountEst: '1.8M'
  },
  {
    tag: 'puffy_nipples',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Raised, dome-shaped areolae and nipples.',
    aliases: ['puffy_areolae'],
    relatedTags: ['nipples', 'areolae', 'small_breasts'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'areolae',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Distinct pigmented circular skin surrounding the nipples.',
    aliases: ['areola', 'large_areolae'],
    relatedTags: ['nipples', 'areola_slip', 'puffy_nipples'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'areola_slip',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Edge of the pigmented areola peeking out from a shifting bikini cup, bra, or low neckline.',
    aliases: ['partial_nip_slip'],
    relatedTags: ['nipple_slip', 'areolae', 'micro_bikini', 'cleavage'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'nipple_slip',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'One or both nipples accidentally or suggestively exposed outside a garment cup.',
    aliases: ['wardrobe_malfunction', 'nip_slip'],
    relatedTags: ['areola_slip', 'nipples', 'bikini', 'bra'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'wide_hips',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Curvaceous hourglass pelvic and hip silhouette.',
    aliases: ['curvy_hips', 'childbearing_hips', 'hourglass_figure'],
    relatedTags: ['thick_thighs', 'narrow_waist', 'curvy', 'ass'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'thick_thighs',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Plump, full upper legs with soft contour.',
    aliases: ['plump_thighs', 'thicc_thighs'],
    relatedTags: ['wide_hips', 'skindentation', 'thighhighs', 'zettai_ryouiki'],
    popularity: 'Core',
    postCountEst: '720K'
  },
  {
    tag: 'thigh_gap',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible space between the inner upper thighs when standing with feet close together.',
    aliases: ['space_between_thighs'],
    relatedTags: ['thighs', 'wide_hips', 'standing'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'narrow_waist',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Slender, cinched midsection accentuating bust and hip curves.',
    aliases: ['slim_waist', 'small_waist', 'hourglass_waist'],
    relatedTags: ['wide_hips', 'midriff', 'navel'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'plump',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Soft, fleshy, full-figured body type (pochama / chubby-curvy aesthetic).',
    aliases: ['voluptuous', 'soft_body', 'curvy_figure'],
    relatedTags: ['wide_hips', 'thick_thighs', 'large_breasts', 'stomach'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'toned',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Fit, athletic physique with subtle abdominal and limb muscle definition.',
    aliases: ['fit_body', 'athletic_build', 'toned_stomach'],
    relatedTags: ['abs', 'muscular_female', 'midriff', 'sportswear'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'abs',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Defined abdominal muscles and linea alba.',
    aliases: ['six_pack', 'abdominal_muscles'],
    relatedTags: ['toned', 'muscular_female', 'midriff', 'crop_top'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'ass',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Prominent buttocks contour visible in rear, side, or looking-back compositions.',
    aliases: ['butt', 'buttocks', 'booty', 'glutes'],
    relatedTags: ['huge_ass', 'ass_focus', 'from_behind', 'looking_back'],
    popularity: 'Core',
    postCountEst: '1.5M'
  },
  {
    tag: 'huge_ass',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Extraordinarily large, round, voluptuous buttocks.',
    aliases: ['big_butt', 'massive_ass'],
    relatedTags: ['ass', 'wide_hips', 'thick_thighs', 'ass_focus'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'cameltoe',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible labial contour outlined through tight panties, swimwear, or bodysuits.',
    aliases: ['crotch_contour'],
    relatedTags: ['taut_clothes', 'leotard', 'panties', 'highleg_swimsuit'],
    popularity: 'Core',
    postCountEst: '460K'
  },
  {
    tag: 'groin',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Pelvic V-line and inner hip creases framing the lower abdomen.',
    aliases: ['inguinal_crease', 'v-line', 'pelvic_lines'],
    relatedTags: ['hip_bones', 'highleg_bikini', 'highleg_leotard', 'navel'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'pubic_hair',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible hair in the pubic region.',
    aliases: ['female_pubic_hair', 'bush'],
    relatedTags: ['nude', 'pussy', 'groin'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'pussy',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Explicit female genitalia.',
    aliases: ['vulva', 'vagina', 'cleft_of_venus'],
    relatedTags: ['nude', 'bottomless', 'spread_legs', 'uncensored'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'navel',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Exposed belly button on a bare midriff or stomach.',
    aliases: ['belly_button', 'umbilicus'],
    relatedTags: ['midriff', 'stomach', 'crop_top', 'bikini'],
    popularity: 'Core',
    postCountEst: '2.4M'
  },
  {
    tag: 'armpits',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Exposed underarms, typically highlighted when arms are raised or laced behind the head.',
    aliases: ['underarms', 'waki'],
    relatedTags: ['arms_up', 'arms_behind_head', 'sleeveless', 'detached_sleeves'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'bare_back',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Uncovered upper and lower back showing shoulder blades and spinal groove.',
    aliases: ['exposed_back', 'back_muscles'],
    relatedTags: ['from_behind', 'looking_back', 'backless_dress', 'backless_outfit'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'bare_legs',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Completely unstockinged legs showing bare thighs, knees, and calves.',
    aliases: ['no_legwear', 'unclad_legs'],
    relatedTags: ['barefoot', 'thighs', 'miniskirt', 'bikini'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'barefoot',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Uncovered feet without shoes or socks.',
    aliases: ['naked_feet', 'no_shoes'],
    relatedTags: ['soles', 'toes', 'foot_focus', 'bare_legs'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'soles',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Underside of the feet facing the camera.',
    aliases: ['foot_soles', 'bottom_of_feet'],
    relatedTags: ['barefoot', 'toes', 'foot_focus', 'legs_up'],
    popularity: 'Core',
    postCountEst: '490K'
  },

  // Risqué & Sensual Facial Expressions
  {
    tag: 'ahegao',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Overwhelmed ecstatic facial expression with rolled-back or crossed eyes, heavy blush, and protruding tongue.',
    aliases: ['ecstasy_face', 'pleasure_face'],
    relatedTags: ['torogao', 'tongue_out', 'rolling_eyes', 'saliva', 'full-face_blush'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'torogao',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Soft, melty, dazed expression of bliss or infatuation with half-closed hazy eyes and a relaxed open mouth.',
    aliases: ['melted_face', 'dazed_bliss', 'lovestruck_expression'],
    relatedTags: ['half-closed_eyes', 'heart-shaped_pupils', 'blush', 'ahegao'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'seductive_smile',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Alluring, sultry smile paired with bedroom eyes.',
    aliases: ['sultry_smile', 'alluring_expression', 'flirty_smile'],
    relatedTags: ['half-closed_eyes', 'smug', 'parted_lips', 'biting_lip'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'biting_lip',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Teeth gently biting the lower lip in flirtation, anticipation, or restraint.',
    aliases: ['lip_bite'],
    relatedTags: ['seductive_smile', 'blush', 'looking_at_viewer'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'heavy_breathing',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Panting breath puffs, flushed cheeks, and parted mouth showing exertion or arousal.',
    aliases: ['panting', 'breath_cloud', 'out_of_breath'],
    relatedTags: ['sweat', 'blush', 'open_mouth', 'steaming_body'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'saliva',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Glistening saliva droplets or strands inside an open mouth or on the tongue.',
    aliases: ['spit', 'saliva_trail', 'drooling'],
    relatedTags: ['open_mouth', 'tongue_out', 'ahegao', 'heavy_breathing'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'sweat',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Glistening beads of perspiration across the face, neck, collarbone, and chest.',
    aliases: ['sweating', 'perspiration', 'sweaty_skin'],
    relatedTags: ['shiny_skin', 'heavy_breathing', 'wet', 'steaming_body'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },
  {
    tag: 'shiny_skin',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Glossy specular highlights across skin contours giving an oiled, wet, or dewy pin-up finish.',
    aliases: ['glossy_skin', 'oiled_skin', 'glistening_skin'],
    relatedTags: ['sweat', 'wet', 'large_breasts', 'thick_thighs'],
    popularity: 'Core',
    postCountEst: '520K',
    illustriousNote: 'Enhances skin shading volume and specular highlights in SDXL Illustrious.'
  },

  // ============================================================================
  // 03. CLOTHING — Swimwear, Lingerie, Bodysuits & Suggestive States
  // ============================================================================
  {
    tag: 'bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Two-piece swimsuit consisting of a bikini top and bikini bottom.',
    aliases: ['two-piece_swimsuit'],
    relatedTags: ['micro_bikini', 'string_bikini', 'side-tie_bikini', 'swimsuit', 'cleavage'],
    popularity: 'Core',
    postCountEst: '1.3M'
  },
  {
    tag: 'micro_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Ultra-minimal bikini with tiny triangular cups that barely cover the areolae and groin.',
    aliases: ['mini_bikini', 'tiny_bikini', 'skimpy_bikini'],
    relatedTags: ['bikini', 'string_bikini', 'side-tie_bikini', 'underboob', 'areola_slip'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'string_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Bikini fastened with thin tie cords around the neck, back, and hips.',
    aliases: ['tie_bikini'],
    relatedTags: ['side-tie_bikini', 'bikini', 'micro_bikini', 'front-tie_bikini'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'side-tie_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Bikini bottom with bow strings tied on both outer hips.',
    aliases: ['side-tie_bikini_bottom'],
    relatedTags: ['string_bikini', 'side-tie_panties', 'bikini'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'o-ring_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Bikini top or bottom linked at the center or hips by metallic O-rings.',
    aliases: ['ring_bikini'],
    relatedTags: ['bikini', 'o-ring', 'cleavage'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'slingshot_swimsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'V-shaped suspended one-piece swimsuit held by straps looping over the shoulders and down to the crotch.',
    aliases: ['v-kini', 'suspender_swimsuit'],
    relatedTags: ['micro_bikini', 'sideboob', 'highleg_swimsuit'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'one-piece_swimsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Single-garment swimsuit covering the torso.',
    aliases: ['maillot', 'one_piece_swimwear'],
    relatedTags: ['school_swimsuit', 'competition_swimsuit', 'highleg_swimsuit', 'swimsuit'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'school_swimsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Traditional navy-blue Japanese school swimsuit (sukumizu) in old-school, new-school, or competition cuts.',
    aliases: ['sukumizu', 'japanese_school_swimsuit'],
    relatedTags: ['one-piece_swimsuit', 'competition_swimsuit', 'taut_clothes'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'competition_swimsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Sleek, glossy, high-cut athletic racing swimsuit with contrasting side panels and open back.',
    aliases: ['racing_swimsuit', 'kyousui'],
    relatedTags: ['one-piece_swimsuit', 'highleg_swimsuit', 'shiny_clothes'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'highleg_swimsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Swimsuit with leg openings cut steeply above the hip bones to elongate the legs and expose the groin crease.',
    aliases: ['high-cut_swimsuit', 'highleg_bikini'],
    relatedTags: ['highleg', 'groin', 'wide_hips', 'one-piece_swimsuit'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'lingerie',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Intimate ornate underwear sets including lace bras, panties, garter belts, corsets, and babydolls.',
    aliases: ['intimate_apparel', 'sexy_underwear'],
    relatedTags: ['bra', 'panties', 'garter_belt', 'lace_trim', 'babydoll'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'bra',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Undergarment supporting the breasts.',
    aliases: ['brassiere'],
    relatedTags: ['panties', 'lingerie', 'lace_bra', 'sports_bra', 'strapless_bra'],
    popularity: 'Core',
    postCountEst: '740K'
  },
  {
    tag: 'panties',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Female lower undergarment.',
    aliases: ['underwear_bottom', 'knickers', 'pantsu'],
    relatedTags: ['bra', 'lingerie', 'striped_panties', 'side-tie_panties', 'thong', 'pantyshot'],
    popularity: 'Core',
    postCountEst: '1.9M'
  },
  {
    tag: 'striped_panties',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Classic anime horizontal-striped panties (shimapan), typically blue-and-white or pink-and-white.',
    aliases: ['shimapan', 'shima-pan'],
    relatedTags: ['panties', 'striped_thighhighs', 'pantyshot'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'side-tie_panties',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Panties secured with delicate ribbon bows on the left and right hips.',
    aliases: ['string_panties', 'tie-side_panties'],
    relatedTags: ['panties', 'lingerie', 'untied_panties'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'thong',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Minimalist underwear or swimwear bottom with a narrow rear strap leaving the buttocks bare.',
    aliases: ['g-string', 't-back'],
    relatedTags: ['panties', 'ass', 'from_behind', 'micro_panties'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'babydoll',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Short, loose, often sheer or lace-trimmed sleeveless nightgown or negligee.',
    aliases: ['negligee', 'sheer_nightgown', 'chemise'],
    relatedTags: ['lingerie', 'see-through', 'panties', 'on_bed'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'garter_belt',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Lingerie waist belt with suspended straps that clip onto the tops of thighhigh stockings.',
    aliases: ['suspender_belt'],
    relatedTags: ['garter_straps', 'thighhighs', 'lingerie', 'skindentation'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'leotard',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Skin-tight one-piece garment covering the torso and crotch while leaving the legs bare or stockinged.',
    aliases: ['highleg_leotard', 'stage_leotard'],
    relatedTags: ['playboy_bunny', 'highleg_leotard', 'thighhighs', 'pantyhose'],
    popularity: 'Core',
    postCountEst: '690K'
  },
  {
    tag: 'playboy_bunny',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Classic bunny girl costume featuring a strapless corset leotard, rabbit ears, bow tie, wrist cuffs, and sheer pantyhose.',
    aliases: ['bunny_suit', 'bunny_girl_outfit'],
    relatedTags: ['leotard', 'fake_rabbit_ears', 'black_pantyhose', 'wrist_cuffs', 'bowtie'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'reverse_bunny_suit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: ' inverted bunny girl outfit that covers the collar, shoulders, or arms while leaving the breasts and crotch exposed.',
    aliases: ['inverted_bunny_suit'],
    relatedTags: ['playboy_bunny', 'nipples', 'detached_collar', 'fake_rabbit_ears'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'bodysuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Form-fitting full-body or torso catsuit in latex, spandex, or sci-fi armor material.',
    aliases: ['catsuit', 'plugsuit', 'spandex_suit'],
    relatedTags: ['latex', 'skintight', 'shiny_clothes', 'cleavage_cutout'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'bodystocking',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Sheer nylon mesh or lace garment covering the torso, legs, and sometimes arms continuously.',
    aliases: ['sheer_bodysuit', 'nylon_bodystocking'],
    relatedTags: ['pantyhose', 'see-through', 'fishnets', 'leotard'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'virgin_killer_sweater',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Sleeveless halter-neck ribbed knit sweater dress with a completely open back and sides.',
    aliases: ['backless_halter_sweater'],
    relatedTags: ['ribbed_sweater', 'bare_back', 'sideboob', 'from_behind'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'naked_apron',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Wearing an apron directly over a bare body with no shirt or dress underneath.',
    aliases: ['apron_only', 'hadaka_apron'],
    relatedTags: ['apron', 'sideboob', 'bare_back', 'panties'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'naked_shirt',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Wearing an oversized button-up dress shirt with no pants or skirt (boyfriend shirt trope).',
    aliases: ['shirt_only', 'boyfriend_shirt_only'],
    relatedTags: ['collared_shirt', 'oversized_clothes', 'unbuttoned_shirt', 'bare_legs'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'naked_towel',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Body wrapped only in a bath towel (onsen / post-shower scene).',
    aliases: ['bath_towel_only', 'wrapped_in_towel'],
    relatedTags: ['wet_hair', 'sweat', 'cleavage', 'bare_shoulders'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'pasties',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Small adhesive heart, star, or cross patches covering only the nipples.',
    aliases: ['nipple_stickers', 'nipple_covers'],
    relatedTags: ['covered_nipples', 'topless', 'micro_bikini'],
    popularity: 'Common',
    postCountEst: '85K'
  },

  // Suggestive & Disheveled Clothing States
  {
    tag: 'nude',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Character wearing no main clothing.',
    aliases: ['naked', 'unclothed', 'nudity'],
    relatedTags: ['completely_nude', 'nipples', 'pussy', 'rating_explicit'],
    popularity: 'Core',
    postCountEst: '1.7M'
  },
  {
    tag: 'completely_nude',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Strictly zero clothing, shoes,socks, or accessories on the body.',
    aliases: ['fully_naked', 'stark_naked'],
    relatedTags: ['nude', 'barefoot', 'nipples'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'topless',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Upper body bare with breasts exposed while still wearing a skirt, pants, panties, or bikini bottom.',
    aliases: ['no_top', 'bare_breasts'],
    relatedTags: ['nipples', 'breasts', 'bottomless', 'nude'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'bottomless',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Wearing a shirt, sweater, or jacket on top with no skirt, pants, or panties on the lower body.',
    aliases: ['no_bottoms', 'no_pants'],
    relatedTags: ['no_panties', 'pussy', 'ass', 'topless'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'no_bra',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Wearing a shirt or dress without a bra underneath, often showing natural bust hang or nipple contour.',
    aliases: ['braless'],
    relatedTags: ['nipples_through_clothes', 'open_shirt', 'wet_shirt', 'sideboob'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'no_panties',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Wearing a skirt or dress without underwear underneath (nopan).',
    aliases: ['nopan', 'going_commando'],
    relatedTags: ['skirt_lift', 'upskirt', 'bottomless'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'nipples_through_clothes',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Nipple protrusions visibly outlined beneath tight or thin fabric.',
    aliases: ['pokies', 'erect_nipples_through_shirt'],
    relatedTags: ['no_bra', 'taut_shirt', 'wet_clothes', 'see-through'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'see-through',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Translucent gauze, chiffon, lace, or wet fabric revealing skin or underwear beneath.',
    aliases: ['sheer_clothes', 'translucent_clothing', 'transparent_clothes'],
    relatedTags: ['wet_clothes', 'babydoll', 'bodystocking', 'bra_visible_through_clothes'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'wet_clothes',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Water-soaked garments clinging tightly and translucently to the skin.',
    aliases: ['soaked_clothes', 'wet_shirt'],
    relatedTags: ['see-through', 'wet', 'rain', 'no_bra'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'taut_clothes',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Fabric stretched under tension across the bust, hips, or thighs.',
    aliases: ['tight_clothes', 'taut_shirt', 'stretched_fabric'],
    relatedTags: ['button_gap', 'large_breasts', 'skindentation', 'cameltoe'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'button_gap',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Straining dress shirt placket pulling apart between buttons to reveal cleavage or bra.',
    aliases: ['straining_buttons', 'shirt_gap'],
    relatedTags: ['collared_shirt', 'taut_clothes', 'large_breasts', 'cleavage'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'cleavage_cutout',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Keyhole, heart-shaped, or geometric window cut into the chest of a dress, sweater, or bodysuit.',
    aliases: ['boob_window', 'chest_cutout', 'keyhole_neckline'],
    relatedTags: ['cleavage', 'underboob_cutout', 'bodysuit', 'ribbed_sweater'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'hip_vent',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Cutouts or high slits along the sides of a skirt, dress, or bodysuit exposing the bare hip bones (showing no panties or side-ties).',
    aliases: ['hip_cutout', 'exposed_hips'],
    relatedTags: ['side_slit', 'pelvic_curtain', 'no_panties', 'china_dress'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'pelvic_curtain',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Long front and back fabric panels hanging from the waist with open sides exposing the hips and thighs.',
    aliases: ['loincloth_skirt', 'split_front_dress'],
    relatedTags: ['china_dress', 'hip_vent', 'side_slit', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'undressing',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Character in the act of removing their shirt, dress, bra, or panties.',
    aliases: ['taking_off_clothes', 'stripping', 'disrobing'],
    relatedTags: ['shirt_lift', 'unbuttoned_shirt', 'panties_around_one_leg', 'open_clothes'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'shirt_lift',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Pulling the hem of a shirt or sweater upward to expose the midriff, underboob, bra, or breasts.',
    aliases: ['lifting_shirt', 'sweater_lift'],
    relatedTags: ['clothes_lift', 'underboob', 'midriff', 'bra'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'skirt_lift',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Holding or lifting the hem of a skirt to reveal panties, thighhighs, or bare hips.',
    aliases: ['lifting_skirt', 'dress_lift'],
    relatedTags: ['pantyshot', 'upskirt', 'panties', 'pleated_skirt'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'panties_aside',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Crotch gusset of panties or swimsuit pulled to the side.',
    aliases: ['swimsuit_aside', 'leotard_aside'],
    relatedTags: ['panties', 'pussy', 'micro_bikini'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'torn_clothes',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Battle-damaged or shredded garments & stockings exposing skin beneath.',
    aliases: ['battle_damage', 'ripped_clothes', 'torn_thighhighs'],
    relatedTags: ['torn_pantyhose', 'torn_thighhighs', 'cleavage', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '240K'
  },

  // ============================================================================
  // 04. POSE & CAMERA — Sensual Framing, Focus Shots & Suggestive Poses
  // ============================================================================
  {
    tag: 'pantyshot',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Visible panties due to a low camera angle, wind, sitting posture, or skirt lift (chirari).',
    aliases: ['pantsu_shot', 'visible_panties'],
    relatedTags: ['upskirt', 'panties', 'from_below', 'skirt_lift'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'upskirt',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Low-angle camera looking directly up beneath a skirt or dress.',
    aliases: ['under_skirt_view'],
    relatedTags: ['from_below', 'pantyshot', 'panties', 'ass'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'downblouse',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'High-angle view looking down inside a loose collar or open shirt toward cleavage/bra.',
    aliases: ['down_shirt_view'],
    relatedTags: ['from_above', 'leaning_forward', 'cleavage', 'bra'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'ass_visible_through_thighs',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Front-facing view where the lower curve of the buttocks is visible between the inner thighs below the groin.',
    aliases: ['butt_from_front', 'underbutt_through_thighs'],
    relatedTags: ['thigh_gap', 'wide_hips', 'leaning_forward', 'ass'],
    popularity: 'Core',
    postCountEst: '290K',
    illustriousNote: 'Well-known Danbooru tag that strongly accentuates hip-to-thigh curve geometry.'
  },
  {
    tag: 'top-down_bottom-up',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Prone pose with chest and shoulders pressed low to the floor/bed while hips and buttocks are raised high (including Jack-O’ pose).',
    aliases: ['face_down_ass_up', 'jack-o_pose', 'hip_raise_prone'],
    relatedTags: ['all_fours', 'arched_back', 'ass_focus', 'looking_back'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'all_fours',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Positioned on hands and knees on a bed or floor.',
    aliases: ['on_hands_and_knees', 'crawling_pose'],
    relatedTags: ['kneeling', 'arched_back', 'hanging_breasts', 'top-down_bottom-up'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'arched_back',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Pronounced S-curve spine posture pushing both the chest forward and hips back.',
    aliases: ['lordosis', 'curved_spine'],
    relatedTags: ['leaning_forward', 'all_fours', 'top-down_bottom-up', 'ass'],
    popularity: 'Core',
    postCountEst: '310K',
    illustriousNote: 'Creates dramatic S-curve figure silhouettes in side and 3/4 views.'
  },
  {
    tag: 'spread_legs',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Sitting or lying with knees parted wide apart.',
    aliases: ['open_legs', 'parted_thighs'],
    relatedTags: ['sitting', 'on_back', 'm_legs', 'pantyshot'],
    popularity: 'Core',
    postCountEst: '780K'
  },
  {
    tag: 'm_legs',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Lying or sitting back with knees raised and spread wide in an M-shaped silhouette.',
    aliases: ['m-shaped_legs', 'm_kaikyaku'],
    relatedTags: ['spread_legs', 'on_back', 'from_below', 'soles'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'legs_up',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Lying on the back with one or both legs raised vertically in the air.',
    aliases: ['raised_legs', 'feet_in_air'],
    relatedTags: ['on_back', 'soles', 'thighhighs', 'barefoot'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'straddling',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Kneeling or sitting astride over the viewer (POV) or a chair/lap.',
    aliases: ['mounting', 'sitting_astride'],
    relatedTags: ['pov', 'kneeling', 'looking_down', 'from_below'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'breast_hold',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Cupping or supporting one or both breasts with the hands or forearms.',
    aliases: ['cupping_breasts', 'holding_own_breasts'],
    relatedTags: ['arm_under_breasts', 'large_breasts', 'cleavage', 'covering_breasts'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'arm_under_breasts',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'One or both forearms crossed horizontally right beneath the bust, lifting and emphasizing cleavage.',
    aliases: ['shelf_arms', 'arms_under_bust'],
    relatedTags: ['breast_hold', 'crossed_arms', 'large_breasts', 'cleavage'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'covering_breasts',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Modestly or bashfully using hands/arms to shield bare breasts from view (handbra).',
    aliases: ['handbra', 'covering_chest'],
    relatedTags: ['topless', 'nude', 'embarrassed', 'blush', 'covering_crotch'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'breast_press',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Breasts flattened or squished against a glass window, another character, or the character’s own arms.',
    aliases: ['boob_squish', 'glass_press'],
    relatedTags: ['breasts_on_table', 'large_breasts', 'window'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'breasts_on_table',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Resting heavy breasts onto the surface of a desk, table, or bar counter while seated.',
    aliases: ['bust_on_desk', 'table_rest_breasts'],
    relatedTags: ['breast_press', 'sitting', 'large_breasts', 'leaning_forward'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'ass_focus',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Compositional framing centered directly on the character’s buttocks and hips.',
    aliases: ['butt_focus', 'rear_focus'],
    relatedTags: ['ass', 'from_behind', 'looking_back', 'thong'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'breast_focus',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Compositional framing centered on the bust and cleavage.',
    aliases: ['chest_focus', 'bust_focus'],
    relatedTags: ['large_breasts', 'cleavage', 'close-up'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'thigh_focus',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Camera framing emphasizing plump thighs, zettai ryouiki, or garter straps.',
    aliases: ['leg_focus'],
    relatedTags: ['thick_thighs', 'zettai_ryouiki', 'skindentation', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'foot_focus',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Camera framing with feet, soles, or toes in the immediate foreground.',
    aliases: ['feet_focus', 'sole_focus'],
    relatedTags: ['barefoot', 'soles', 'foreshortening', 'pantyhose'],
    popularity: 'Core',
    postCountEst: '295K'
  }
];
