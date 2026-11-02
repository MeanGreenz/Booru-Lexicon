import { BooruTag } from '../types/lexicon';

export const COMPREHENSIVE_POLISH_TAGS: BooruTag[] = [
  // ============================================================================
  // 01. ART & META — Missing Quality, Mediums & Visual Effects
  // ============================================================================
  {
    tag: 'official_art',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Polished studio promotional or key-visual illustration aesthetic.',
    aliases: ['official_style', 'key_visual_style'],
    relatedTags: ['masterpiece', 'best_quality', 'anime_coloring', 'newest'],
    popularity: 'Core',
    postCountEst: '480K',
    illustriousNote: 'Pushes composition and lineart toward clean commercial anime key visuals.'
  },
  {
    tag: 'anime_screencap',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'TV broadcast or theatrical anime frame aesthetic with cel shading and subtle compositing bloom.',
    aliases: ['screencap_style', 'tv_anime_style'],
    relatedTags: ['cel_shading', 'anime_coloring', 'depth_of_field', 'motion_blur'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'game_cg',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Visual novel or gacha game event CG illustration with rich lighting and full background.',
    aliases: ['event_cg', 'visual_novel_cg'],
    relatedTags: ['official_art', 'soft_shading', 'cinematic_lighting', 'pov'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'bold_lineart',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Thick, expressive outer contour lines with graphic comic or pop-anime impact.',
    aliases: ['thick_outlines', 'heavy_lineart', 'thick_lineart'],
    relatedTags: ['lineart', 'cel_shading', 'flat_color', 'high_contrast'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'hatching_(texture)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Parallel or cross-hatched ink/pencil lines used to build shadow and volume.',
    aliases: ['crosshatching', 'line_shading'],
    relatedTags: ['sketch', 'lineart', 'monochrome'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'marker_(medium)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Alcohol marker (Copic) illustration look with vibrant layered ink blending.',
    aliases: ['copic_marker', 'alcohol_marker'],
    relatedTags: ['watercolor_(medium)', 'sketch', 'vibrant_colors'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'sepia',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Warm vintage brown-and-cream monochromatic color grading.',
    aliases: ['sepia_tone', 'vintage_tint'],
    relatedTags: ['monochrome', 'retro_artstyle'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'dark_theme',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Low-key, moody dark color palette dominated by deep shadows and rich contrast.',
    aliases: ['low_key', 'dark_mood'],
    relatedTags: ['chiaroscuro', 'high_contrast', 'night', 'glowing'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'vignette',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Soft darkening around the outer edges of the frame to draw focus to the center subject.',
    aliases: ['dark_edges', 'edge_darkening'],
    relatedTags: ['cinematic_lighting', 'depth_of_field'],
    popularity: 'Core',
    postCountEst: '95K'
  },

  // ============================================================================
  // 02. CHARACTER — Subject, Archetypes, Anatomy, Skin, Hair, Eyes, Expressions
  // ============================================================================
  {
    tag: '3girls',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Three female characters in the scene.',
    aliases: ['three_girls', 'trio_of_girls'],
    relatedTags: ['multiple_girls', '2girls', 'yuri'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'multiple_boys',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Two or more male characters in the scene.',
    aliases: ['many_boys', 'group_of_boys'],
    relatedTags: ['2boys', '1boy', 'male_focus'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'mature_female',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Adult woman with mature facial structure and poised adult proportions.',
    aliases: ['adult_woman', 'onee-san', 'milf'],
    relatedTags: ['1girl', 'tall_female', 'large_breasts', 'wide_hips', 'office_lady'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'tall_female',
    domain: 'character',
    subcategory: 'Subject & Count',
    description: 'Statuesque female character with long legs and tall adult stature.',
    aliases: ['tall_girl', 'tall_woman', 'long_legs'],
    relatedTags: ['mature_female', 'bare_legs', 'high_heels', 'model_pose'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'tomboy',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Energetic, sporty, or boyish female character archetype, often with short hair or athletic wear.',
    aliases: ['boyish_girl', 'bokukko'],
    relatedTags: ['short_hair', 'toned', 'abs', 'track_jacket', 'grin'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'delinquent',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Rebellious Japanese yankee/sukeban school delinquent archetype.',
    aliases: ['sukeban', 'yankee', 'bad_girl'],
    relatedTags: ['serafuku', 'long_skirt', 'glaring', 'smug', 'squatting'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'yandere',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Obsessively devoted character archetype with intense, unhinged gaze and sweet-yet-menacing smile.',
    aliases: ['obsessive_love', 'yandere_trance'],
    relatedTags: ['empty_eyes', 'heart-shaped_pupils', 'evil_smile', 'shaded_face', 'crazy_eyes'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'kuudere',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Cool, aloof, stoic character archetype who rarely shows overt emotion.',
    aliases: ['stoic_girl', 'cool_beauty'],
    relatedTags: ['expressionless', 'half-closed_eyes', 'jitome', 'closed_mouth'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'bunny_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Kemonomimi rabbit girl or Playboy-style bunny girl archetype.',
    aliases: ['usagimimi_girl', 'rabbit_girl'],
    relatedTags: ['rabbit_ears', 'fake_rabbit_ears', 'playboy_bunny', 'leotard', 'pantyhose'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'cat_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Nekomimi feline humanoid girl with cat ears and tail.',
    aliases: ['nekomimi', 'neko_girl'],
    relatedTags: ['cat_ears', 'cat_tail', 'slit_pupils', 'fang', 'paw_pose'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'fox_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Kitsune fox-spirit girl with fox ears and one or more fluffy tails.',
    aliases: ['kitsune', 'kitsunemimi'],
    relatedTags: ['fox_ears', 'fox_tail', 'multiple_tails', 'miko', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'wolf_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Ookamimimi wolf girl with pointed canine ears and bushy tail.',
    aliases: ['ookamimimi', 'werewolf_girl'],
    relatedTags: ['animal_ears', 'tail', 'fangs', 'yellow_eyes'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'oni',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Japanese folklore ogre/demon archetype with forehead horns, fangs, and fierce beauty.',
    aliases: ['oni_girl', 'japanese_demon'],
    relatedTags: ['horns', 'fangs', 'japanese_clothes', 'sarashi', 'toned'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'mermaid',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Aquatic mythical woman with an iridescent scaled fish tail in place of legs.',
    aliases: ['ningyo', 'siren'],
    relatedTags: ['underwater', 'ocean', 'shell_bikini', 'long_hair', 'floating_hair'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'android',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Synthetic humanoid gynoid with doll-like joints or cybernetic seams.',
    aliases: ['gynoid', 'robot_girl', 'automaton'],
    relatedTags: ['mechanical_parts', 'doll_joints', 'headset', 'glowing_eyes'],
    popularity: 'Core',
    postCountEst: '130K'
  },
  {
    tag: 'curvy',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Pronounced hourglass body shape with full bust, cinched waist, and wide hips.',
    aliases: ['hourglass_figure', 'voluptuous'],
    relatedTags: ['wide_hips', 'narrow_waist', 'large_breasts', 'thick_thighs', 'plump'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'slender',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Lithe, slim, graceful body build.',
    aliases: ['slim', 'lithe', 'skinny'],
    relatedTags: ['narrow_waist', 'thigh_gap', 'collarbone', 'small_breasts'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'muscular_female',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visibly muscular female physique with sculpted abs, shoulders, biceps, and quads.',
    aliases: ['buff_girl', 'muscle_girl', 'fit_female'],
    relatedTags: ['abs', 'toned', 'biceps', 'pectorals', 'sweat'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'hip_bones',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Prominent anterior iliac crest bones framing the lower stomach and groin.',
    aliases: ['iliac_crest', 'pelvic_bones'],
    relatedTags: ['groin', 'narrow_waist', 'midriff', 'lowleg'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'inverted_nipples',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Nipples recessed inward into the areolae.',
    aliases: ['recessed_nipples'],
    relatedTags: ['nipples', 'areolae', 'puffy_nipples'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'erection',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Erect phallus (or tented bulge under clothing when paired with bulge).',
    aliases: ['hard_penis', 'erect'],
    relatedTags: ['penis', 'testicles', '1boy', 'futanari'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'testicles',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Visible male scrotum/testicles.',
    aliases: ['balls', 'scrotum'],
    relatedTags: ['penis', 'erection', '1boy', 'futanari'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'anus',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Explicitly visible anal anatomy in rear or top-down-bottom-up poses.',
    aliases: ['asshole', 'butthole'],
    relatedTags: ['ass', 'from_behind', 'all_fours', 'pussy', 'spread_legs'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'oily_skin',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Body glistens with massage oil, suntan lotion, or baby oil highlights.',
    aliases: ['oiled_body', 'suntan_oil'],
    relatedTags: ['shiny_skin', 'wet_skin', 'tanlines', 'bikini'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'beauty_mark',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'A small dark facial or body mole (under the eye, near the lip, or on the breast/thigh).',
    aliases: ['mole', 'facial_mole', 'mole_on_breast'],
    relatedTags: ['mole_under_eye', 'freckles', 'parted_lips'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'scar',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Healed battle scar across the eye, cheek, or torso.',
    aliases: ['facial_scar', 'scar_across_eye', 'body_scar'],
    relatedTags: ['eyepatch', 'toned', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'tattoo',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Decorative ink tattoo on the arm, shoulder, back, thigh, or lower abdomen.',
    aliases: ['body_tattoo', 'tribal_tattoo', 'irezumi'],
    relatedTags: ['womb_tattoo', 'bare_shoulders', 'bare_back', 'gyaru'],
    popularity: 'Core',
    postCountEst: '350K'
  },
  {
    tag: 'piercing',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Metal body or facial piercing (ear, navel, nipple, tongue, or lip).',
    aliases: ['body_piercing', 'ear_piercing'],
    relatedTags: ['navel_piercing', 'nipple_piercing', 'tongue_piercing', 'earrings'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'hickey',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Reddish love bite or kiss mark left on the neck, collarbone, inner thigh, or breast.',
    aliases: ['love_bite', 'bite_mark_on_neck'],
    relatedTags: ['kiss_mark', 'collarbone', 'neck', 'after_sex'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'single_braid',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair plaited into a single long braid draped over the back or shoulder.',
    aliases: ['one_braid', 'side_braid'],
    relatedTags: ['braid', 'twin_braids', 'hair_over_shoulder', 'long_hair'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'pixie_cut',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Very short cropped hairstyle framing the ears and nape of the neck.',
    aliases: ['very_short_hair', 'cropped_hair'],
    relatedTags: ['short_hair', 'tomboy', 'bob_cut'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'hair_up',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Long hair pinned or tied upward exposing the nape of the neck and shoulders.',
    aliases: ['updo', 'pinned_up_hair'],
    relatedTags: ['hair_bun', 'ponytail', 'nape', 'bare_shoulders'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'orange_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Vibrant tangerine, ginger, or copper-orange hair color.',
    aliases: ['ginger_hair', 'amber_hair', 'copper_hair'],
    relatedTags: ['red_hair', 'blonde_hair', 'green_eyes'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'aqua_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Cyan, turquoise, or teal-blue hair color (classic vocaloid / anime palette).',
    aliases: ['cyan_hair', 'teal_hair', 'turquoise_hair'],
    relatedTags: ['blue_hair', 'green_hair', 'twintails', 'aqua_eyes'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'grey_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Ash-grey, slate, or muted charcoal-silver hair.',
    aliases: ['gray_hair', 'ash_hair'],
    relatedTags: ['silver_hair', 'white_hair', 'black_hair'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'one_eye_covered',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'One eye obscured by long bangs, an eyepatch, or a hat brim.',
    aliases: ['peekaboo_bangs', 'hidden_eye'],
    relatedTags: ['hair_over_one_eye', 'eyepatch', 'swept_bangs'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'brown_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Warm chestnut, hazel, or dark brown irises.',
    aliases: ['hazel_eyes', 'chestnut_eyes'],
    relatedTags: ['brown_hair', 'black_hair', 'amber_eyes'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'black_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Deep obsidian-black irises with crisp white specular catchlights.',
    aliases: ['dark_eyes', 'obsidian_eyes'],
    relatedTags: ['black_hair', 'sanpaku', 'jitome'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'orange_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Fiery amber-orange or sunset-gold irises.',
    aliases: ['amber_eyes', 'copper_eyes'],
    relatedTags: ['yellow_eyes', 'red_eyes', 'glowing_eyes'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'wide-eyed',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyes opened unusually wide in shock, fear, manic excitement, or awe.',
    aliases: ['wide_eyes', 'staring_wide'],
    relatedTags: ['surprised', 'crazy_eyes', 'constricted_pupils', 'sanpaku'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'crazy_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Unhinged, manic gaze with wide sclera and tiny constricted pupils.',
    aliases: ['manic_eyes', 'insane_gaze', 'yandere_eyes'],
    relatedTags: ['wide-eyed', 'constricted_pupils', 'sanpaku', 'evil_smile', 'yandere'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'constricted_pupils',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Pinpoint small pupils conveying shock, terror, or manic bloodlust.',
    aliases: ['small_pupils', 'pinpoint_pupils'],
    relatedTags: ['wide-eyed', 'crazy_eyes', 'sanpaku', 'ringed_eyes'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'looking_to_the_side',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Eyes or head directed toward the left or right edge of the frame.',
    aliases: ['gaze_to_side'],
    relatedTags: ['looking_away', 'sideways_glance', 'profile'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'rolling_eyes',
    domain: 'character',
    subcategory: 'Eyes, Pupils & Gaze',
    description: 'Irises rolled upward under the upper eyelids in ecstasy, fainting, or exasperation.',
    aliases: ['eyes_rolled_back'],
    relatedTags: ['ahegao', 'torogao', 'tongue_out', 'orgasm'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'closed_mouth',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Lips pressed or resting gently together without showing teeth or tongue.',
    aliases: ['mouth_closed'],
    relatedTags: ['light_smile', 'expressionless', 'pout', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '2.9M'
  },
  {
    tag: 'annoyed',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Irritated, unimpressed, or exasperated expression with half-lidded eyes and slight frown.',
    aliases: ['irritated', 'unamused', 'displeased'],
    relatedTags: ['jitome', 'pout', 'angry', 'v-shaped_eyebrows'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'full-face_blush',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Deep crimson blush spreading across the entire bridge of the nose, cheeks, and ears.',
    aliases: ['heavy_blush', 'deep_blush'],
    relatedTags: ['blush', 'embarrassed', 'ahegao', 'torogao', 'heavy_breathing'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'tears',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Visible tear droplets brimming in the eyes or running down the cheeks from emotion or pleasure.',
    aliases: ['teardrops', 'crying_tears'],
    relatedTags: ['crying', 'tearing_up', 'wiping_tears', 'blush'],
    popularity: 'Core',
    postCountEst: '820K'
  },
  {
    tag: 'wiping_tears',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Brushing away tears from the corner of the eye with a finger, back of the hand, or sleeve.',
    aliases: ['rubbing_eyes'],
    relatedTags: ['tears', 'crying', 'tearing_up', 'sleeves_past_wrists'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'fangs',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Twin sharp canine teeth visible in vampires, demons, or beast-girls.',
    aliases: ['twin_fangs', 'vampire_fangs', 'sharp_teeth'],
    relatedTags: ['fang', 'open_mouth', 'vampire', 'oni', 'grin'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'tongue',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Visible tongue inside an open mouth or licking lips.',
    aliases: ['visible_tongue', 'long_tongue'],
    relatedTags: ['tongue_out', 'open_mouth', 'saliva', 'licking_lips'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'licking_lips',
    domain: 'character',
    subcategory: 'Facial Expressions',
    description: 'Tip of the tongue running seductively or hungrily along the upper or lower lip.',
    aliases: ['lip_lick'],
    relatedTags: ['tongue', 'tongue_out', 'seductive_smile', 'saliva'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'bat_wings',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Leathery webbed demon, vampire, or succubus wings sprouting from the back or lower waist.',
    aliases: ['demon_wings', 'succubus_wings', 'dragon_wings'],
    relatedTags: ['wings', 'succubus', 'demon_girl', 'demon_tail', 'horns'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'white_wings',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Pure white feathered angel or valkyrie wings.',
    aliases: ['angel_wings'],
    relatedTags: ['feathered_wings', 'wings', 'halo', 'angel', 'black_wings'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'black_wings',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Dark raven-black feathered fallen-angel or crow wings.',
    aliases: ['fallen_angel_wings', 'dark_wings'],
    relatedTags: ['feathered_wings', 'wings', 'white_wings', 'gothic_lolita'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'cat_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Slender, expressive feline tail curving behind a cat girl.',
    aliases: ['neko_tail', 'feline_tail'],
    relatedTags: ['cat_ears', 'cat_girl', 'tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'fox_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Large, bushy kitsune tail with a white tip.',
    aliases: ['kitsune_tail', 'fluffy_tail'],
    relatedTags: ['fox_ears', 'fox_girl', 'multiple_tails', 'tail'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'multiple_tails',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Two to nine fluffy tails fanning out behind a kitsune or nekomata.',
    aliases: ['nine_tails', 'twin_tails_(anatomy)', 'kyuubi'],
    relatedTags: ['fox_tail', 'fox_ears', 'fox_girl', 'tail'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'dragon_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Thick, scaled reptilian tail belonging to a dragon girl.',
    aliases: ['scaled_tail', 'reptile_tail'],
    relatedTags: ['dragon_girl', 'horns', 'tail', 'bat_wings'],
    popularity: 'Common',
    postCountEst: '85K'
  },

  // ============================================================================
  // 03. CLOTHING — Missing Uniforms, Traditional, Tops, Skirts, Lingerie, Gear
  // ============================================================================
  {
    tag: 'apron',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Frilled maid apron, kitchen pinafore, or café waist apron.',
    aliases: ['pinafore', 'waist_apron'],
    relatedTags: ['maid_apron', 'maid', 'naked_apron', 'frills'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'maid_apron',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'White lace-trimmed apron worn over a black or Victorian maid dress.',
    aliases: ['frilled_apron'],
    relatedTags: ['maid', 'maid_headdress', 'apron', 'frills'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'lab_coat',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'White scientist or doctor coat worn open over casual or formal attire.',
    aliases: ['doctor_coat', 'white_coat'],
    relatedTags: ['glasses', 'collared_shirt', 'necktie', 'nurse'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'evening_gown',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Floor-length formal dress with an elegant silhouette, often featuring a side slit or backless cut.',
    aliases: ['formal_gown', 'party_dress', 'ball_gown'],
    relatedTags: ['dress', 'side_slit', 'bare_back', 'elbow_gloves', 'high_heels'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'wedding_dress',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Ornate white bridal gown with lace, corset bodice, and veil.',
    aliases: ['bridal_gown', 'marriage_dress'],
    relatedTags: ['bride', 'veil', 'white_dress', 'bouquet', 'elbow_gloves'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'obi',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Wide decorative sash tied around the waist of a kimono or yukata.',
    aliases: ['kimono_sash'],
    relatedTags: ['kimono', 'yukata', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'breastplate',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Metallic cuirass armor covering the chest and torso.',
    aliases: ['chest_armor', 'cuirass'],
    relatedTags: ['armor', 'shoulder_armor', 'gauntlets', 'bikini_armor', 'sword'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'gauntlets',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Armored metal or leather bracers and gloves protecting the forearms and hands.',
    aliases: ['arm_armor', 'bracers'],
    relatedTags: ['armor', 'breastplate', 'shoulder_armor', 'gloves'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'bikini_armor',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'High-fantasy metallic or leather bikini-cut armor leaving the midriff and thighs bare.',
    aliases: ['skimpy_armor', 'fantasy_bikini_armor'],
    relatedTags: ['armor', 'bikini', 'shoulder_armor', 'gauntlets', 'sword'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'veil',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Sheer translucent fabric draped over the head or face (bridal, nun, or dancer style).',
    aliases: ['bridal_veil', 'face_veil'],
    relatedTags: ['bride', 'wedding_dress', 'nun', 'see-through'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'sweater',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Knitted pullover top in casual, cozy, or form-fitting styles.',
    aliases: ['pullover', 'knit_top'],
    relatedTags: ['ribbed_sweater', 'turtleneck_sweater', 'cardigan', 'virgin_killer_sweater'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'turtleneck_sweater',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Cozy or form-fitting knitted sweater with a high folded collar.',
    aliases: ['high-neck_sweater'],
    relatedTags: ['sweater', 'turtleneck', 'ribbed_sweater', 'sleeveless_turtleneck'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'sleeveless_turtleneck',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'High-necked top with cut-out shoulders exposing bare arms and armpits.',
    aliases: ['sleeveless_high_neck'],
    relatedTags: ['turtleneck', 'bare_shoulders', 'armpits', 'ribbed_sweater'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'tank_top',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Sleeveless athletic or casual top with shoulder straps.',
    aliases: ['singlet', 'wife_beater', 'camisole_top'],
    relatedTags: ['crop_top', 'bare_shoulders', 'armpits', 'short_shorts', 'toned'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 't-shirt',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Short-sleeved casual cotton shirt.',
    aliases: ['tee', 'graphic_tee'],
    relatedTags: ['shirt', 'short_shorts', 'wet_clothes', 'oversized_clothes'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'pencil_skirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Sleek, form-fitting straight-cut skirt hugging the hips and thighs (classic office lady / teacher attire).',
    aliases: ['tight_skirt', 'office_skirt'],
    relatedTags: ['office_lady', 'business_suit', 'pantyhose', 'collared_shirt', 'wide_hips'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'microskirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Extremely short skirt ending right at the upper thigh/hip crease.',
    aliases: ['ultra_miniskirt', 'micro_miniskirt'],
    relatedTags: ['miniskirt', 'pleated_skirt', 'pantyshot', 'upskirt', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'side_slit',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'High vertical cut along the side of a dress or skirt exposing the outer thigh and hip.',
    aliases: ['slit_dress', 'slit_skirt', 'high_slit'],
    relatedTags: ['china_dress', 'evening_gown', 'bare_legs', 'hip_vent', 'no_panties'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'white_dress',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Pure white sundress, formal gown, or ethereal fantasy dress.',
    aliases: ['white_one-piece_dress'],
    relatedTags: ['dress', 'sundress', 'wedding_dress', 'straw_hat', 'summer'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'black_dress',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Little black dress, gothic gown, or sleek evening dress.',
    aliases: ['dark_dress', 'gothic_dress'],
    relatedTags: ['dress', 'evening_gown', 'gothic_lolita', 'side_slit'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'jeans',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Denim trousers or skinny jeans.',
    aliases: ['denim_pants', 'blue_jeans'],
    relatedTags: ['short_shorts', 'crop_top', 't-shirt', 'belt'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'dolphin_shorts',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Retro athletic running shorts with contrast trim, rounded side slits, and high cut.',
    aliases: ['gym_shorts', 'running_shorts', 'booty_shorts'],
    relatedTags: ['short_shorts', 'gym_uniform', 'tank_top', 'thick_thighs'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'highleg_leotard',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'One-piece leotard with deep V-shaped leg openings rising above the hip bones.',
    aliases: ['high-cut_leotard'],
    relatedTags: ['leotard', 'playboy_bunny', 'groin', 'hip_bones', 'pantyhose'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'crotchless_panties',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Erotic lingerie panties with an open gusset.',
    aliases: ['open-crotch_panties', 'crotchless_underwear'],
    relatedTags: ['panties', 'lingerie', 'pussy', 'panties_aside'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'plugsuit',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Form-fitting sci-fi pilot bodysuit with glossy panels and armor accents.',
    aliases: ['pilot_suit', 'sci-fi_bodysuit'],
    relatedTags: ['bodysuit', 'skintight', 'shiny_clothes', 'latex'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'vibrator',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Handheld wand massager or insertable egg vibrator sex toy.',
    aliases: ['magic_wand', 'egg_vibrator', 'sex_toy'],
    relatedTags: ['masturbation', 'pussy_juice', 'thighs', 'panties_aside', 'dildo'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'dildo',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Phallic sex toy used in solo or partnered explicit scenes.',
    aliases: ['sex_toy_phallus'],
    relatedTags: ['vibrator', 'masturbation', 'pussy', 'sitting'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'butt_plug',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Jeweled or animal-tail anal plug.',
    aliases: ['anal_plug', 'tail_plug'],
    relatedTags: ['anus', 'from_behind', 'all_fours', 'cat_tail'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'nipple_clamps',
    domain: 'clothing',
    subcategory: 'Materials, Latex & Fetish Gear',
    description: 'Metal clips or chained clamps attached to the nipples.',
    aliases: ['breast_clamps', 'chained_clamps'],
    relatedTags: ['nipples', 'bondage', 'chains', 'large_breasts'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'open_clothes',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Shirt, blouse, or jacket worn unbuttoned or unzipped to expose the chest or bra.',
    aliases: ['open_shirt', 'unbuttoned_shirt', 'open_blouse'],
    relatedTags: ['collared_shirt', 'bra', 'cleavage', 'undressing', 'nipples'],
    popularity: 'Core',
    postCountEst: '690K'
  },
  {
    tag: 'shirt_tug',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Fingers gripping and pulling the hem or collar of a shirt.',
    aliases: ['pulling_shirt', 'hem_tug'],
    relatedTags: ['shirt_lift', 'undressing', 'oversized_clothes', 'embarrassed'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'one_breast_out',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Asymmetrical exposure where one breast is bare outside the top or bra while the other remains covered.',
    aliases: ['single_breast_out', 'half_topless'],
    relatedTags: ['nipple_slip', 'nipples', 'bra_pull', 'undressing'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'panties_under_pantyhose',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Panties visible beneath sheer nylon pantyhose or stockings.',
    aliases: ['visible_panties_through_tights'],
    relatedTags: ['pantyhose', 'black_pantyhose', 'panties', 'see-through'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'black_pantyhose',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Sheer or opaque black nylon tights covering the waist, thighs, and feet.',
    aliases: ['black_tights', 'sheer_black_pantyhose'],
    relatedTags: ['pantyhose', 'office_lady', 'pencil_skirt', 'panties_under_pantyhose', 'torn_pantyhose'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'white_pantyhose',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'White nylon tights common in ballet, nurse, or gothic lolita ensembles.',
    aliases: ['white_tights'],
    relatedTags: ['pantyhose', 'nurse', 'gothic_lolita', 'mary_janes'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'loose_socks',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Baggy, pleated white knit leg-warmers/socks worn slouched around the calves (iconic gyaru / kogal fashion).',
    aliases: ['gyaru_socks', 'slouch_socks'],
    relatedTags: ['gyaru', 'serafuku', 'loafers', 'miniskirt'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'boots',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Ankle, combat, or knee-high leather boots.',
    aliases: ['ankle_boots', 'knee_boots', 'combat_boots'],
    relatedTags: ['thigh_boots', 'high_heels', 'military_uniform'],
    popularity: 'Core',
    postCountEst: '980K'
  },
  {
    tag: 'sandals',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Open-toed summer, gladiator, or heeled sandals exposing the toes.',
    aliases: ['strapped_sandals', 'summer_sandals'],
    relatedTags: ['toes', 'bare_legs', 'sundress', 'bikini', 'beach'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'peaked_cap',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Structured military, police, or naval officer visor cap.',
    aliases: ['military_cap', 'officer_hat', 'visor_cap'],
    relatedTags: ['military_uniform', 'capelet', 'gloves'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'hair_ornament',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Decorative clips, pins, beads, or kanzashi worn in the hair.',
    aliases: ['hair_accessory', 'kanzashi', 'hairpin'],
    relatedTags: ['hairclip', 'hair_ribbon', 'hair_flower', 'hair_bow'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'eyewear_on_head',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Glasses, sunglasses, or goggles pushed up to rest atop the forehead or hair.',
    aliases: ['glasses_on_head', 'sunglasses_on_head'],
    relatedTags: ['glasses', 'sunglasses', 'glasses_off'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'bowtie',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Formal or school-uniform bow tied at the collar.',
    aliases: ['collar_bow', 'bow_tie'],
    relatedTags: ['collared_shirt', 'playboy_bunny', 'school_uniform', 'necktie'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'neckerchief',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Triangular or knotted cloth scarf tied beneath a sailor collar.',
    aliases: ['sailor_scarf', 'neck_kerchief'],
    relatedTags: ['sailor_collar', 'serafuku', 'school_uniform'],
    popularity: 'Core',
    postCountEst: '410K'
  },

  // ============================================================================
  // 04. POSE & CAMERA — Missing Framing, Angles, Poses, Couple, Sensual & Acts
  // ============================================================================
  {
    tag: 'extreme_close-up',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Macro-tight camera framing on a single facial feature (eyes, lips) or anatomical detail.',
    aliases: ['macro_shot', 'tight_close-up'],
    relatedTags: ['close-up', 'portrait', 'eyes_focus', 'depth_of_field'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'face_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Framing centered directly on the character’s facial expression and gaze.',
    aliases: ['headshot', 'facial_closeup'],
    relatedTags: ['portrait', 'close-up', 'looking_at_viewer', 'big_eyes'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'back_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Composition emphasizing the curve of the spine, shoulder blades, and bare back.',
    aliases: ['rear_back_shot'],
    relatedTags: ['bare_back', 'from_behind', 'looking_back', 'ass_focus'],
    popularity: 'Core',
    postCountEst: '120K'
  },
  {
    tag: 'hip_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Camera centered on the waist, hips, pelvis, and upper thighs.',
    aliases: ['pelvic_focus', 'waist_shot'],
    relatedTags: ['wide_hips', 'groin', 'thigh_focus', 'ass_focus', 'bikini'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'multiple_views',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Character design sheet or multi-angle showcase displaying front, side, and back views on one canvas.',
    aliases: ['character_sheet', 'reference_sheet', 'turnaround'],
    relatedTags: ['full_body', 'simple_background', 'standing', 'zoom_layer'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'pov_hands',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'First-person viewer’s hands reaching into the frame to touch, hold, or undress the character.',
    aliases: ['viewer_hands', 'first_person_hands'],
    relatedTags: ['pov', 'chin_grab', 'headpat', 'breast_grab', 'holding_hands'],
    popularity: 'Core',
    postCountEst: '210K',
    illustriousNote: 'Strong interactive POV trigger in SDXL Illustrious.'
  },
  {
    tag: 'pov_crotch',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'First-person perspective looking down toward the viewer’s lap or waist during an intimate scene.',
    aliases: ['first_person_lap_view'],
    relatedTags: ['pov', 'from_above', 'looking_up', 'fellatio', 'cowgirl_position'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'worm\'s-eye_view',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Extreme low-angle shot looking almost vertically upward from ground level.',
    aliases: ['extreme_from_below', 'ground_level_angle'],
    relatedTags: ['from_below', 'foreshortening', 'upskirt', 'tall_female'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'bird\'s-eye_view',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Extreme high-angle overhead shot looking straight down at the subject.',
    aliases: ['overhead_shot', 'top-down_view'],
    relatedTags: ['from_above', 'foreshortening', 'on_bed', 'lying'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'arms_up',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Both arms raised high overhead, stretching the torso and exposing the underarms.',
    aliases: ['raised_arms', 'hands_up'],
    relatedTags: ['armpits', 'arms_behind_head', 'stretching', 'tying_hair'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'stretching',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Full-body morning or athletic stretch arching the back and chest.',
    aliases: ['body_stretch', 'morning_stretch'],
    relatedTags: ['arms_up', 'arched_back', 'yawning', 'midriff'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'leaning_back',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Torso reclined backward supported by the hands or resting against a wall/bed.',
    aliases: ['reclining'],
    relatedTags: ['sitting', 'on_bed', 'spread_legs', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'one_leg_raised',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Standing or lying with one leg lifted high, showcasing leg flexibility or inner thigh.',
    aliases: ['leg_lift', 'standing_split'],
    relatedTags: ['standing', 'high_kick', 'bare_legs', 'pantyshot'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'piggyback',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character riding cheerfully on another character’s back with arms wrapped around their neck.',
    aliases: ['piggyback_ride'],
    relatedTags: ['hug_from_behind', '2girls', 'hetero', 'princess_carry'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'breast_grab',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'One character (or POV hands) cupping or squeezing another character’s breast.',
    aliases: ['groping', 'fondling_breasts'],
    relatedTags: ['breast_hold', 'hug_from_behind', 'pov_hands', 'large_breasts', 'blush'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'ass_grab',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Hands gripping and squeezing the buttocks.',
    aliases: ['grabbing_butt', 'butt_squeeze'],
    relatedTags: ['ass', 'huge_ass', 'skindentation', 'hug_from_behind', 'sex_from_behind'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'hair_grab',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Gripping a character’s hair or ponytail during combat or dominant intimacy.',
    aliases: ['pulling_hair', 'holding_ponytail'],
    relatedTags: ['doggystyle', 'sex_from_behind', 'arched_back', 'ponytail'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'leg_lock',
    domain: 'pose_camera',
    subcategory: 'Multi-Character & Couple Interactions',
    description: 'Wrapping both legs tightly around a partner’s waist to pull them close.',
    aliases: ['wrapped_legs', 'ankles_locked_around_waist'],
    relatedTags: ['missionary', 'sex', 'hugging', 'kissing'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'jack-o\'_challenge',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Iconic flexible pose with chest and face flat on the floor while hips and rear are raised high in the air.',
    aliases: ['jack-o_pose', 'crouching_face-down_ass-up'],
    relatedTags: ['top-down_bottom-up', 'arched_back', 'ass_focus', 'looking_back', 'all_fours'],
    popularity: 'Core',
    postCountEst: '95K',
    illustriousNote: 'Natively understood by SDXL Illustrious; pair with top-down_bottom-up and looking_back.'
  },
  {
    tag: 'presenting',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Character deliberately displaying their body, bust, or rear toward the viewer.',
    aliases: ['showing_off', 'presenting_ass', 'presenting_pussy'],
    relatedTags: ['spread_legs', 'all_fours', 'from_behind', 'lifting_own_clothes'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'spreading_own_pussy',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Using one or both hands to part the labia toward the viewer.',
    aliases: ['kupa', 'spreading_labia'],
    relatedTags: ['pussy', 'spread_legs', 'm_legs', 'presenting', 'pussy_juice'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'bound_wrists',
    domain: 'pose_camera',
    subcategory: 'Sensual & Suggestive Poses',
    description: 'Wrists tied together in front of the body, overhead, or behind the back with rope, ribbons, or cuffs.',
    aliases: ['tied_wrists', 'arms_tied_behind_back'],
    relatedTags: ['bondage', 'shibari', 'handcuffs', 'arms_behind_back'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'facesitting',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Sitting or straddling directly over a partner’s face.',
    aliases: ['sitting_on_face', 'queening'],
    relatedTags: ['straddling', 'cunnilingus', 'ass_focus', 'from_below', 'pov'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'sixty-nine',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Mutual simultaneous oral stimulation.',
    aliases: ['69_position'],
    relatedTags: ['fellatio', 'cunnilingus', 'sex', 'yuri', 'hetero'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'double_penetration',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Simultaneous vaginal and anal penetration in a threesome or group scene.',
    aliases: ['dp', 'spitroast'],
    relatedTags: ['threesome', '2boys', '1girl', 'sex', 'anal'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'anal',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Anal intercourse or penetration.',
    aliases: ['anal_sex'],
    relatedTags: ['anus', 'doggystyle', 'sex_from_behind', 'ass_focus', 'double_penetration'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'irrumatio',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Deep oral penetration (deepthroat) often accompanied by hands holding the head.',
    aliases: ['deepthroat', 'throatfuck'],
    relatedTags: ['fellatio', 'tears', 'saliva', 'hair_grab', 'pov'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'bukkake',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Heavy seminal fluid covering the face and upper body.',
    aliases: ['heavy_facial', 'covered_in_cum'],
    relatedTags: ['cum', 'facial', 'cum_on_body', 'ahegao'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'stomach_bulge',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Visible outward contour on the lower abdomen indicating deep internal penetration.',
    aliases: ['belly_bulge', 'abdominal_bulge'],
    relatedTags: ['sex', 'x-ray', 'mating_press', 'cum_in_pussy'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'paw_pose',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Both hands raised near the chest with fingers curled inward like cute cat or puppy paws.',
    aliases: ['cat_pose', 'nyan_pose', 'animal_paw_gesture'],
    relatedTags: ['cat_ears', 'cat_girl', 'fang', 'wink'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'covering_mouth',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One or both hands held over the mouth to stifle a laugh, gasp, or moan.',
    aliases: ['hand_over_mouth', 'stifling_gasp'],
    relatedTags: ['hand_to_own_mouth', 'blush', 'surprised', 'embarrassed'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'rim_lighting',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Bright contour highlight tracing the outer silhouette of hair, shoulders, and curves against a darker background.',
    aliases: ['edge_lighting', 'halo_lighting', 'contour_light'],
    relatedTags: ['backlighting', 'cinematic_lighting', 'chiaroscuro', 'dark_theme'],
    popularity: 'Core',
    postCountEst: '210K',
    illustriousNote: 'One of the best lighting tags in SDXL Illustrious for separating the character from the background.'
  },
  {
    tag: 'tyndall_effect',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Visible atmospheric shafts of sunlight or moonlight scattering through dust, mist, or foliage.',
    aliases: ['god_rays', 'crepuscular_rays', 'volumetric_lighting'],
    relatedTags: ['light_rays', 'dappled_sunlight', 'sunlight', 'window', 'forest'],
    popularity: 'Core',
    postCountEst: '130K'
  },
  {
    tag: 'speed_lines',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Graphic directional motion lines radiating or streaking across the frame for high-velocity action.',
    aliases: ['motion_lines', 'action_lines'],
    relatedTags: ['motion_blur', 'dynamic_pose', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '145K'
  },

  // ============================================================================
  // 05. ENVIRONMENT — Missing Studio Backdrops, Nature/Sky, Indoor & Props
  // ============================================================================
  {
    tag: 'black_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Solid pitch-black backdrop maximizing subject contrast and rim lighting.',
    aliases: ['dark_background', 'void_background'],
    relatedTags: ['simple_background', 'chiaroscuro', 'rim_lighting', 'glowing'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'colored_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Clean graphic solid or pastel color backdrop (pink, blue, yellow, or two-tone).',
    aliases: ['pink_background', 'blue_background', 'two-tone_background'],
    relatedTags: ['simple_background', 'gradient_background', 'halftone_background'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'floral_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Decorative shoujo-style backdrop framed by blooming flowers and petals.',
    aliases: ['flower_backdrop'],
    relatedTags: ['flower_field', 'falling_petals', 'sparkles', 'pastel_colors'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'sunlight',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Warm natural daylight illuminating the scene and casting crisp shadows.',
    aliases: ['daylight', 'sunbeams', 'sunny_day'],
    relatedTags: ['dappled_sunlight', 'light_rays', 'blue_sky', 'outdoors'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'golden_hour',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Warm amber-gold late-afternoon sunlight right before sunset.',
    aliases: ['magic_hour', 'evening_sunlight'],
    relatedTags: ['sunset', 'sunlight', 'backlighting', 'lens_flare'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'night',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Nocturnal scene lit by moonlight, stars, or artificial city lights.',
    aliases: ['nighttime', 'midnight'],
    relatedTags: ['night_sky', 'starry_sky', 'full_moon', 'city_lights'],
    popularity: 'Core',
    postCountEst: '1.2M'
  },
  {
    tag: 'cloud',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Fluffy cumulus or dramatic sky clouds.',
    aliases: ['clouds', 'cloudy_sky'],
    relatedTags: ['cumulonimbus_cloud', 'blue_sky', 'sunset', 'scenery'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'underwater',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Submerged aquatic scene with floating hair, air bubbles, and caustic light ripples.',
    aliases: ['submerged', 'beneath_water'],
    relatedTags: ['ocean', 'floating_hair', 'light_rays', 'bikini', 'mermaid'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'autumn_leaves',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Crimson and golden-orange Japanese maple (momiji) foliage.',
    aliases: ['maple_leaves', 'fall_foliage', 'momiji'],
    relatedTags: ['outdoors', 'forest', 'kimono', 'shrine'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'on_bed',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Subject sitting, lying, or kneeling atop a mattress with sheets and pillows.',
    aliases: ['in_bed', 'bed_sheet', 'mattress'],
    relatedTags: ['bedroom', 'pillow', 'lying', 'on_back', 'lingerie'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'onsen',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Traditional Japanese open-air rock hot spring bath with rising steam.',
    aliases: ['hot_spring', 'rotenburo'],
    relatedTags: ['naked_towel', 'wet_skin', 'steaming_body', 'nude', 'outdoors'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'bathroom',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Tiled bath or shower room with mirror, tub, droplets, and steam.',
    aliases: ['bathtub', 'shower_room'],
    relatedTags: ['wet_skin', 'wet_hair', 'nude', 'steaming_body', 'mirror'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'swimming_pool',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Clear blue-tiled school or resort swimming pool with water reflections.',
    aliases: ['poolside', 'pool'],
    relatedTags: ['bikini', 'school_swimsuit', 'competition_swimsuit', 'wet_skin', 'sunlight'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'locker_room',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'School clubroom or gym changing room lined with metal lockers and benches.',
    aliases: ['changing_room'],
    relatedTags: ['undressing', 'gym_uniform', 'school_swimsuit', 'bra', 'panties'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'cyberpunk_city',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Futuristic high-tech neon metropolis with holographic signage and rain-slicked streets.',
    aliases: ['neon_city', 'sci-fi_city'],
    relatedTags: ['city_lights', 'cityscape', 'night', 'rain', 'glowing'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'magic_circle',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Glowing geometric arcane sigil floating beneath or in front of a spellcaster.',
    aliases: ['arcane_sigil', 'spell_circle'],
    relatedTags: ['staff', 'witch', 'glowing', 'floating_particles'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'handgun',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Semi-automatic pistol or revolver held in combat or tactical poses.',
    aliases: ['pistol', 'revolver', 'firearm'],
    relatedTags: ['holding_weapon', 'rifle', 'military_uniform', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'scythe',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Large curved polearm blade associated with grim reapers, gothic heroines, and dark fantasy.',
    aliases: ['war_scythe', 'reaper_scythe'],
    relatedTags: ['holding_weapon', 'gothic_lolita', 'black_dress', 'dynamic_pose'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'parasol',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Frilled lace sun umbrella or traditional Japanese wagasa oil-paper umbrella.',
    aliases: ['sun_umbrella', 'wagasa', 'lace_parasol'],
    relatedTags: ['umbrella', 'gothic_lolita', 'kimono', 'sundress'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'mirror',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Full-length vanity or bathroom mirror showing a second angle of the character (e.g. front and back simultaneously).',
    aliases: ['mirror_selfie', 'looking_in_mirror'],
    relatedTags: ['reflection', 'smartphone', 'bedroom', 'bathroom'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'popsicle',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Frozen ice pop or ice cream bar held near the lips or licked.',
    aliases: ['ice_pop', 'ice_lolly'],
    relatedTags: ['tongue_out', 'saliva', 'summer', 'bikini'],
    popularity: 'Core',
    postCountEst: '115K'
  }
];
