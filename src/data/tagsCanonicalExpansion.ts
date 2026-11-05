import { BooruTag } from '../types/lexicon';

/**
 * High-frequency canonical Danbooru & SDXL Illustrious tags added during the
 * Ground-Truth Tag Audit to ensure zero overlooked foundational tokens across all 6 domains.
 */
export const CANONICAL_EXPANSION_TAGS: BooruTag[] = [
  // ============================================================================
  // 01. ART & META — Chronological Year Triggers, Traditional Mediums & Borders
  // ============================================================================
  {
    tag: 'year_2024',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Explicit 2024 Danbooru chronological era token steering toward crisp modern anime lighting and eye rendering.',
    aliases: ['2024_style'],
    relatedTags: ['newest', 'masterpiece', 'best_quality', 'very_awa'],
    popularity: 'Core',
    postCountEst: '650K',
    illustriousNote: 'Can be paired with newest to lock in late-2024 SDXL Illustrious aesthetics.'
  },
  {
    tag: 'year_2023',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Explicit 2023 Danbooru chronological era token with polished modern digital anime shading.',
    aliases: ['2023_style'],
    relatedTags: ['newest', 'year_2024', 'masterpiece', 'best_quality'],
    popularity: 'Core',
    postCountEst: '820K'
  },
  {
    tag: 'year_2022',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Explicit 2022 Danbooru chronological era token.',
    aliases: ['2022_style'],
    relatedTags: ['newest', 'late', 'year_2023'],
    popularity: 'Core',
    postCountEst: '790K'
  },
  {
    tag: 'traditional_media',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Physical non-digital artwork rendered on paper or canvas with tactile pigment, ink, or graphite.',
    aliases: ['physical_media', 'analog_art', 'hand-drawn_media'],
    relatedTags: ['watercolor_(medium)', 'oil_painting_(medium)', 'marker_(medium)', 'graphite_(medium)', 'colored_pencil_(medium)'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'graphite_(medium)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Mechanical or wooden graphite pencil drawing with delicate tonal shading and paper grain.',
    aliases: ['pencil_medium', 'graphite_drawing'],
    relatedTags: ['sketch', 'traditional_media', 'hatching_(texture)', 'monochrome'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'colored_pencil_(medium)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Soft, layered wax or oil colored-pencil strokes over textured paper.',
    aliases: ['color_pencil', 'coloured_pencil'],
    relatedTags: ['traditional_media', 'sketch', 'pastel_colors', 'watercolor_(medium)'],
    popularity: 'Common',
    postCountEst: '110K'
  },
  {
    tag: 'white_border',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Clean white margin framing the illustration like an artbook print or polaroid.',
    aliases: ['white_frame', 'framed_border'],
    relatedTags: ['out-of-frame', 'official_art', 'simple_background'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'film_grain',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Subtle analog photographic noise and cinematic celluloid texture across the frame.',
    aliases: ['analog_grain', 'noise_texture'],
    relatedTags: ['retro_artstyle', 'chromatic_aberration', 'anime_screencap', 'vignette'],
    popularity: 'Common',
    postCountEst: '85K'
  },

  // ============================================================================
  // 02. CHARACTER — Kemonomimi, Hairstyles, Bangs & Anatomy
  // ============================================================================
  {
    tag: 'kemonomimi_mode',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Character sprouting animal ears and tail while otherwise retaining human proportions.',
    aliases: ['animal_ear_mode'],
    relatedTags: ['animal_ears', 'cat_girl', 'fox_girl', 'dog_girl', 'rabbit_girl'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'dog_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Inumimi canine girl with perky or floppy dog ears and wagging tail.',
    aliases: ['inumimi', 'canine_girl', 'puppy_girl'],
    relatedTags: ['dog_ears', 'dog_tail', 'animal_ears', 'collar', 'paw_pose'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'horse_girl',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Equine kemonomimi girl with upright horse ears and a long flowing horse tail (umamusume style).',
    aliases: ['umamusume_girl', 'equine_girl'],
    relatedTags: ['horse_ears', 'horse_tail', 'animal_ears', 'tail'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'lamia',
    domain: 'character',
    subcategory: 'Archetypes, Occupations & Species',
    description: 'Serpentine monster girl with a human upper body and a long coiled snake tail.',
    aliases: ['snake_girl', 'naga'],
    relatedTags: ['monster_girl', 'slit_pupils', 'forked_tongue', 'tail'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'petite',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Dainty, compact adult frame with delicate shoulders and slender limbs.',
    aliases: ['dainty_build', 'small_frame'],
    relatedTags: ['slender', 'small_breasts', 'narrow_waist', 'collarbone'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'veins',
    domain: 'character',
    subcategory: 'Body Proportions & Anatomy',
    description: 'Subtle anatomical veins visible beneath translucent skin on breasts, forearms, or muscular physique.',
    aliases: ['visible_veins', 'breast_veins'],
    relatedTags: ['pale_skin', 'huge_breasts', 'muscular_female', 'toned'],
    popularity: 'Common',
    postCountEst: '125K'
  },
  {
    tag: 'bandaid_on_face',
    domain: 'character',
    subcategory: 'Skin, Tanlines, Tattoos & Piercings',
    description: 'Adhesive bandage strip stuck across the bridge of the nose or cheek (sporty/tomboy/delinquent motif).',
    aliases: ['bandaid_on_nose', 'bandaid_on_cheek', 'facial_bandaid'],
    relatedTags: ['tomboy', 'delinquent', 'scar', 'bandages'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'low_ponytail',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Hair tied loosely at the nape of the neck rather than high on the crown.',
    aliases: ['nape_ponytail'],
    relatedTags: ['ponytail', 'side_ponytail', 'short_ponytail', 'long_hair'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'french_braid',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Intricate three-strand braid woven closely along the back or side of the scalp.',
    aliases: ['woven_braid'],
    relatedTags: ['braid', 'single_braid', 'crown_braid', 'hair_up'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'crown_braid',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Regal braid wrapped around the head like a halo or coronet.',
    aliases: ['halo_braid', 'braided_crown'],
    relatedTags: ['braid', 'french_braid', 'hair_up', 'ojou'],
    popularity: 'Core',
    postCountEst: '120K'
  },
  {
    tag: 'hair_flaps',
    domain: 'character',
    subcategory: 'Hair Length & Style',
    description: 'Perky, wing-like tufts of hair flaring outward at the temples or sides of the head.',
    aliases: ['ear-like_hair', 'hair_vents'],
    relatedTags: ['ahoge', 'sidelocks', 'medium_hair'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'two-tone_hair',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Hair divided into two distinct contrasting colors (split, tipped, or inner-layered).',
    aliases: ['bicolored_hair', 'dual-colored_hair'],
    relatedTags: ['multicolored_hair', 'colored_inner_hair', 'streaked_hair', 'gradient_hair'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'asymmetrical_bangs',
    domain: 'character',
    subcategory: 'Bangs & Hair Color',
    description: 'Fringe cut at an uneven diagonal or stepped length across the forehead.',
    aliases: ['uneven_bangs', 'diagonal_bangs'],
    relatedTags: ['swept_bangs', 'parted_bangs', 'hair_over_one_eye'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'dog_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Canine ears (perky or lop-eared) atop the head.',
    aliases: ['inu_ears', 'puppy_ears'],
    relatedTags: ['dog_girl', 'dog_tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'dog_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Fluffy or curled canine tail.',
    aliases: ['puppy_tail', 'wagging_tail'],
    relatedTags: ['dog_ears', 'dog_girl', 'tail'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'horse_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Long, mobile equine ears positioned at the crown of the head.',
    aliases: ['equine_ears', 'uma_ears'],
    relatedTags: ['horse_girl', 'horse_tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'horse_tail',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Long, silky equine tail reaching the calves.',
    aliases: ['equine_tail'],
    relatedTags: ['horse_ears', 'horse_girl', 'tail'],
    popularity: 'Core',
    postCountEst: '370K'
  },
  {
    tag: 'cow_ears',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Wide horizontal bovine ears, often pierced with a numbered livestock tag.',
    aliases: ['bovine_ears', 'cattle_ears'],
    relatedTags: ['cow_girl', 'cow_horns', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '150K'
  },
  {
    tag: 'cow_horns',
    domain: 'character',
    subcategory: 'Ears, Horns & Fantasy Traits',
    description: 'Short, curved ivory or dark bovine horns.',
    aliases: ['bovine_horns'],
    relatedTags: ['cow_girl', 'cow_ears', 'horns'],
    popularity: 'Core',
    postCountEst: '135K'
  },

  // ============================================================================
  // 03. FACE, EYES & EXPRESSIONS — Core Emotions & Canonical Emoticon Mouths
  // ============================================================================
  {
    tag: ':d',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Wide, cheerful D-shaped open-mouthed smile.',
    aliases: ['big_open_smile', 'd_mouth'],
    relatedTags: ['open_mouth', 'smile', 'happy', 'grin'],
    popularity: 'Core',
    postCountEst: '720K',
    illustriousNote: 'High-frequency canonical Danbooru tag for an upbeat open-mouth smile.'
  },
  {
    tag: ':p',
    domain: 'face_expressions',
    subcategory: 'Mouth, Lips, Teeth & Tongue',
    description: 'Playful blep or raspberry with the tip of the tongue sticking out the side of a closed mouth.',
    aliases: ['blep', 'akanbe', 'tehepero'],
    relatedTags: ['tongue_out', 'one_eye_closed', 'smug', 'closed_mouth'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'happy',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Radiant, joyful facial expression with bright eyes and an uplifted smile.',
    aliases: ['joyful', 'cheerful'],
    relatedTags: ['smile', ':d', 'grin', 'laughing', 'sparkling_eyes'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'sad',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Sorrowful, downcast expression with upturned inner brows and melancholic eyes.',
    aliases: ['sorrowful', 'melancholic', 'unhappy'],
    relatedTags: ['crying', 'tears', 'tearing_up', 'frown', 'sad_smile'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'worried',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Anxious, concerned, or pleading expression with upturned inner eyebrows.',
    aliases: ['anxious', 'concerned', 'troubled_expression'],
    relatedTags: ['sad', 'sweatdrop', 'embarrassed', 'tareme', 'wavy_mouth'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'frown',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Downturned mouth corners conveying displeasure, sadness, or pouting.',
    aliases: ['frowning', 'downturned_mouth'],
    relatedTags: ['angry', 'sad', 'pout', 'scowl', 'annoyed'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'trembling',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Subtle vibration lines indicating shivering from fear, crying, or overwhelming climax.',
    aliases: ['shivering', 'shaking', 'quivering'],
    relatedTags: ['scared', 'crying', 'orgasm', 'ahegao', 'tears'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'sleeping',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Peacefully asleep with closed eyes and relaxed breathing.',
    aliases: ['asleep', 'slumbering'],
    relatedTags: ['closed_eyes', 'sleepy', 'on_bed', 'pillow'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'breath',
    domain: 'face_expressions',
    subcategory: 'Blush, Tears, Sweat & Emotion Symbols',
    description: 'Visible puff or wisp of warm exhaled vapor near the mouth from cold air or heavy panting.',
    aliases: ['visible_breath', 'exhaling_vapor', 'hot_breath'],
    relatedTags: ['heavy_breathing', 'open_mouth', 'parted_lips', 'steaming_body'],
    popularity: 'Core',
    postCountEst: '290K'
  },

  // ============================================================================
  // 04. CLOTHING — Foundational Sleeve Lengths, Tops, Bottoms & Disheveled States
  // ============================================================================
  {
    tag: 'suit',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Tailored two-piece or three-piece formal suit with jacket, dress shirt, and trousers or skirt.',
    aliases: ['formal_suit', 'tailored_suit'],
    relatedTags: ['business_suit', 'blazer', 'collared_shirt', 'necktie', 'vest'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'vest',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Fitted waistcoat or formal vest worn over a collared dress shirt.',
    aliases: ['waistcoat'],
    relatedTags: ['suit', 'collared_shirt', 'necktie', 'bowtie', 'sweater_vest'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'long_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Full-length sleeves extending to the wrists.',
    aliases: ['full_sleeves'],
    relatedTags: ['sleeves_past_wrists', 'wide_sleeves', 'shirt', 'sweater'],
    popularity: 'Core',
    postCountEst: '3.4M'
  },
  {
    tag: 'short_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Sleeves ending above the elbow on shirts, blouses, or dresses.',
    aliases: ['half_sleeves'],
    relatedTags: ['t-shirt', 'puffy_short_sleeves', 'collared_shirt', 'serafuku'],
    popularity: 'Core',
    postCountEst: '2.1M'
  },
  {
    tag: 'sleeveless',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Garment cut without sleeves, exposing the shoulders and bare arms.',
    aliases: ['no_sleeves'],
    relatedTags: ['bare_arms', 'bare_shoulders', 'sleeveless_shirt', 'sleeveless_dress', 'tank_top'],
    popularity: 'Core',
    postCountEst: '1.6M'
  },
  {
    tag: 'bare_arms',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Uncovered upper and lower arms without sleeves or long gloves.',
    aliases: ['exposed_arms'],
    relatedTags: ['sleeveless', 'bare_shoulders', 'armpits', 'short_sleeves'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'sleeveless_shirt',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Button-up blouse or casual top tailored without sleeves.',
    aliases: ['sleeveless_blouse'],
    relatedTags: ['sleeveless', 'bare_arms', 'collared_shirt', 'armpits'],
    popularity: 'Core',
    postCountEst: '540K'
  },
  {
    tag: 'sweater_vest',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Sleeveless V-neck knitted vest worn over a school dress shirt.',
    aliases: ['knit_vest', 'school_vest'],
    relatedTags: ['school_uniform', 'collared_shirt', 'necktie', 'pleated_skirt'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'juliet_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Romantic sleeves puffed at the shoulder and fitted tightly along the forearm.',
    aliases: ['princess_sleeves'],
    relatedTags: ['puffy_sleeves', 'long_sleeves', 'dress', 'gothic_lolita'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'sleeveless_dress',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'One-piece dress cut without sleeves to highlight the shoulders and arms.',
    aliases: ['strap_dress'],
    relatedTags: ['dress', 'sundress', 'sleeveless', 'bare_shoulders', 'bare_arms'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'pants',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Full-length trousers, slacks, or casual pants.',
    aliases: ['trousers', 'slacks'],
    relatedTags: ['jeans', 'suit', 'belt', 'business_suit'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'denim_shorts',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Casual blue-jean shorts, often frayed or cut high on the thigh.',
    aliases: ['jean_shorts', 'jorts', 'daisy_dukes'],
    relatedTags: ['short_shorts', 'jeans', 'crop_top', 'navel'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'bike_shorts',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Skintight spandex athletic shorts hugging the hips and upper thighs.',
    aliases: ['spats', 'cycling_shorts', 'compression_shorts'],
    relatedTags: ['short_shorts', 'skintight', 'cameltoe', 'thick_thighs', 'sports_bra'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'buruma',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Classic Japanese high-cut blue or red school gym bloomers.',
    aliases: ['gym_bloomers', 'athletic_bloomers'],
    relatedTags: ['gym_uniform', 'short_shorts', 'thighs', 'sweat'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'overalls',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Denim or canvas bib-and-brace dungarees worn over a shirt or bare skin.',
    aliases: ['dungarees'],
    relatedTags: ['jeans', 'denim_shorts', 'naked_overalls'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'frilled_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Two-piece bikini adorned with ruffled frills along the cups and hip straps.',
    aliases: ['ruffled_bikini'],
    relatedTags: ['bikini', 'frills', 'side-tie_bikini'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'front-tie_bikini',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Bikini top fastened by a bow or knot directly between the breasts.',
    aliases: ['front-knot_bikini'],
    relatedTags: ['bikini', 'cleavage', 'side-tie_bikini'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'bandeau',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Strapless horizontal band bikini top or tube bra wrapping across the bust.',
    aliases: ['strapless_bikini_top', 'tube_bra'],
    relatedTags: ['bikini', 'bare_shoulders', 'strapless_bra', 'underboob'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'sports_bra',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Form-fitting athletic compression bra worn for workouts, running, or casual sporty attire.',
    aliases: ['athletic_bra', 'workout_bra'],
    relatedTags: ['bra', 'bike_shorts', 'midriff', 'toned', 'sweat'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'strapless_bra',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Underwire or bandeau bra without shoulder straps, leaving the shoulders and collarbones completely bare.',
    aliases: ['no-strap_bra'],
    relatedTags: ['bra', 'bandeau', 'bare_shoulders', 'cleavage', 'lingerie'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'frilled_bra',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Lingerie bra trimmed with delicate lace or ruffled frills along the cups.',
    aliases: ['lace_bra', 'ruffled_bra'],
    relatedTags: ['bra', 'lingerie', 'frills', 'lace_trim', 'panties'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'sarong',
    domain: 'clothing',
    subcategory: 'Swimwear, Lingerie & Bodysuits',
    description: 'Sheer or patterned beach wrap tied loosely around the hips over a bikini.',
    aliases: ['pareo', 'beach_wrap'],
    relatedTags: ['bikini', 'see-through', 'beach', 'side_slit'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'unbuttoned',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Shirt, blouse, or cardigan with buttons undone to reveal the chest, bra, or midriff.',
    aliases: ['undone_buttons', 'partially_unbuttoned'],
    relatedTags: ['open_clothes', 'collared_shirt', 'cleavage', 'bra', 'undressing'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'unzipped',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Jacket, bodysuit, hoodie, or skirt with its zipper pulled open.',
    aliases: ['open_zipper'],
    relatedTags: ['open_clothes', 'bodysuit', 'track_jacket', 'cleavage'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'clothes_pull',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Tugging or pulling on one’s own or another character’s garment.',
    aliases: ['pulling_clothes'],
    relatedTags: ['shirt_tug', 'skirt_tug', 'bikini_pull', 'undressing'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'bra_lift',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Bra pushed or lifted up above the breasts while remaining worn around the chest.',
    aliases: ['lifted_bra', 'bra_pushed_up'],
    relatedTags: ['bra', 'bra_pull', 'nipples', 'shirt_lift', 'breasts_out'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'bikini_pull',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Fingers hooking and pulling the strap or cup of a bikini top or bottom.',
    aliases: ['pulling_bikini'],
    relatedTags: ['bikini', 'bikini_aside', 'tanlines', 'teasing'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'bikini_aside',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Bikini cup or crotch gusset shifted aside to expose the nipple or genitals.',
    aliases: ['swimsuit_aside'],
    relatedTags: ['bikini', 'panties_aside', 'nipple_slip', 'pussy', 'sex'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'skirt_tug',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Hands holding down or pinching the hem of a short skirt.',
    aliases: ['holding_skirt_down'],
    relatedTags: ['skirt_lift', 'miniskirt', 'wind', 'embarrassed'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'wardrobe_malfunction',
    domain: 'clothing',
    subcategory: 'Suggestive & Disheveled State',
    description: 'Accidental slip, popped button, or snapped strap exposing skin or underwear.',
    aliases: ['popped_button', 'broken_strap'],
    relatedTags: ['tight_clothes', 'nipple_slip', 'huge_breasts', 'embarrassed'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'thigh_ribbon',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Decorative satin ribbon tied around the bare thigh or at the cuff of thighhighs.',
    aliases: ['leg_ribbon'],
    relatedTags: ['thigh_strap', 'thighhighs', 'garter_straps', 'skindentation'],
    popularity: 'Core',
    postCountEst: '210K'
  },

  // ============================================================================
  // 05. POSE & CAMERA — Framing, Stances, Gestures & Explicit Acts
  // ============================================================================
  {
    tag: 'lower_body',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Framing focused from the waist down, highlighting hips, skirt, thighs, and legwear.',
    aliases: ['waist_down_shot'],
    relatedTags: ['thigh_focus', 'ass_focus', 'hip_focus', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'feet_out_of_frame',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Nearly full-body framing cropped just above the ankles.',
    aliases: ['cropped_legs'],
    relatedTags: ['cowboy_shot', 'full_body', 'standing'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'knees_up',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Sitting with knees drawn up toward the chest.',
    aliases: ['hugging_knees', 'drawn-up_knees'],
    relatedTags: ['sitting', 'bare_legs', 'pantyshot', 'toes'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'knees_together_feet_apart',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Cute inward-angled leg stance or W-sitting posture with knees touching and feet splayed outward.',
    aliases: ['inward_knees', 'uchimata'],
    relatedTags: ['pigeon-toed', 'wariza', 'sitting', 'standing'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'pigeon-toed',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Toes pointed inward toward each other in a bashful or cute stance.',
    aliases: ['inward_toes'],
    relatedTags: ['knees_together_feet_apart', 'standing', 'embarrassed'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'walking',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Mid-stride walking posture bringing natural movement to hair and clothing.',
    aliases: ['strolling'],
    relatedTags: ['standing', 'outdoors', 'looking_back'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'running',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Energetic sprinting pose with windblown hair and dynamic limb angles.',
    aliases: ['sprinting', 'dashing'],
    relatedTags: ['dynamic_pose', 'motion_blur', 'floating_hair'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'outstretched_arm',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One arm extended straight outward or forward.',
    aliases: ['extended_arm'],
    relatedTags: ['reaching_towards_viewer', 'outstretched_hand', 'pointing_at_viewer'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'outstretched_hand',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Open palm extended toward the viewer or another character.',
    aliases: ['offering_hand'],
    relatedTags: ['reaching_towards_viewer', 'outstretched_arm', 'pov', 'foreshortening'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'pointing_at_viewer',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Index finger aimed directly at the camera lens.',
    aliases: ['pointing_forward'],
    relatedTags: ['looking_at_viewer', 'foreshortening', 'smug', 'outstretched_arm'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'prone_bone',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Rear-entry intercourse while the receiving partner lies flat on their stomach.',
    aliases: ['prone_from_behind', 'lying_from_behind'],
    relatedTags: ['sex_from_behind', 'doggystyle', 'on_stomach', 'ass_focus', 'arched_back'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'suspended_congress',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Standing intercourse where one partner is lifted off the ground.',
    aliases: ['carried_sex', 'standing_carry_sex'],
    relatedTags: ['sex', 'leg_lock', 'standing', 'hugging'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'spitroast',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Threesome position with simultaneous oral penetration at the front and vaginal/anal penetration from behind.',
    aliases: ['spit_roast'],
    relatedTags: ['threesome', '2boys', '1girl', 'fellatio', 'sex_from_behind'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'group_sex',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Explicit sexual encounter involving three or more participants.',
    aliases: ['orgy'],
    relatedTags: ['threesome', 'gangbang', 'multiple_boys', 'multiple_girls'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'gangbang',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'One central character surrounded by multiple partners in an explicit group scene.',
    aliases: ['multiple_partners'],
    relatedTags: ['group_sex', 'multiple_boys', '1girl', 'double_penetration', 'bukkake'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'cum_in_mouth',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Seminal fluid visible inside an open mouth or pooling on the tongue.',
    aliases: ['oral_creampie'],
    relatedTags: ['cum', 'cum_on_tongue', 'fellatio', 'open_mouth', 'tongue_out'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'cum_on_tongue',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Seminal fluid resting on an extended tongue displayed toward the viewer.',
    aliases: ['semen_on_tongue'],
    relatedTags: ['cum_in_mouth', 'tongue_out', 'cum', 'fellatio', 'ahegao'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'cum_on_breasts',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Seminal fluid splattered or dripping across the breasts and cleavage.',
    aliases: ['semen_on_breasts'],
    relatedTags: ['cum', 'cum_on_body', 'paizuri', 'large_breasts'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'cum_on_stomach',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Seminal fluid pooled across the navel and lower abdomen.',
    aliases: ['cum_on_belly'],
    relatedTags: ['cum', 'cum_on_body', 'navel', 'stomach'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'cum_drip',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Seminal fluid actively trickling or dripping from the body, lips, or genitals.',
    aliases: ['dripping_cum', 'overflow'],
    relatedTags: ['cum', 'cum_in_pussy', 'creampie', 'cum_string'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'cum_string',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Thin viscous strand of seminal fluid bridging between skin, lips, or fingers.',
    aliases: ['semen_string', 'cum_bridge'],
    relatedTags: ['cum', 'cum_drip', 'saliva_trail', 'fellatio'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'cross-section',
    domain: 'pose_camera',
    subcategory: 'Intimate & Explicit Acts',
    description: 'Anatomical cutaway inset showing internal penetration during explicit scenes.',
    aliases: ['internal_cutaway', 'anatomical_cross-section'],
    relatedTags: ['x-ray', 'sex', 'cum_in_pussy', 'stomach_bulge'],
    popularity: 'Core',
    postCountEst: '165K'
  }
];
