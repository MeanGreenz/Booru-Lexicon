import { BooruTag } from '../types/lexicon';

export const CATEGORY_COMPLETION_TAGS: BooruTag[] = [
  // ============================================================================
  // 01. ART & META — Illustrious Quality & Era (Top-up)
  // ============================================================================
  {
    tag: 'rating_general',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Safe / general-audience rating meta-token steering Illustrious toward clean commercial illustration aesthetics.',
    aliases: ['rating_safe', 'general', 'sfw'],
    relatedTags: ['rating_sensitive', 'masterpiece', 'official_art'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Use for strictly SFW scenes or to steer anatomy and framing toward commercial promo art.'
  },
  {
    tag: 'incredibly_absurdres',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru meta tag for massive ultra-detailed canvases exceeding 10,000 pixels on an edge.',
    aliases: ['8k_illustration', 'ultra_absurdres'],
    relatedTags: ['absurdres', 'highres', 'masterpiece'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'year_2021',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru upload-year token capturing crisp early-2020s digital illustration rendering.',
    aliases: ['2021_style'],
    relatedTags: ['year_2022', 'year_2023', 'newest'],
    popularity: 'Core',
    postCountEst: '710K'
  },
  {
    tag: 'year_2020',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru upload-year token bridging late-2010s and modern 2020s anime coloring styles.',
    aliases: ['2020_style'],
    relatedTags: ['year_2021', 'late', 'newest'],
    popularity: 'Core',
    postCountEst: '690K'
  },

  // ============================================================================
  // 01. ART & META — Format & Page Layout (Expansion: 5 -> 22)
  // ============================================================================
  {
    tag: 'border',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Outer frame or margin surrounding the artwork on one or all sides.',
    aliases: ['frame_border', 'page_border'],
    relatedTags: ['white_border', 'black_border', 'letterboxed', 'out-of-frame'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'black_border',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Solid black margin framing the illustration like a theatrical still or dramatic print.',
    aliases: ['black_frame'],
    relatedTags: ['border', 'letterboxed', 'anime_screencap'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'letterboxed',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Cinematic horizontal black bars across the top and bottom edges of the canvas.',
    aliases: ['cinemascope_bars', 'widescreen_bars'],
    relatedTags: ['black_border', 'anime_screencap', 'fake_screenshot'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'character_sheet',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Production character design sheet showing turnaround poses, expressions, and outfit details.',
    aliases: ['settei', 'model_sheet'],
    relatedTags: ['reference_sheet', 'multiple_views', 'simple_background', 'full_body'],
    popularity: 'Common',
    postCountEst: '72K'
  },
  {
    tag: 'reference_sheet',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Annotated design reference featuring front/back views, color swatches, and accessory callouts.',
    aliases: ['ref_sheet', 'design_sheet'],
    relatedTags: ['character_sheet', 'multiple_views', 'white_background'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'split_screen',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Canvas divided cleanly into two or more simultaneous contrasting scenes or angles.',
    aliases: ['divided_panel', 'dual_panel'],
    relatedTags: ['comic', 'multiple_views', 'cut-in'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'speech_bubble',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Manga or comic dialogue balloon containing spoken text or symbols.',
    aliases: ['dialogue_bubble', 'word_balloon'],
    relatedTags: ['comic', '4koma', 'thought_bubble', 'sound_effects'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'thought_bubble',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Cloud-shaped comic bubble depicting internal monologue or imagination.',
    aliases: ['thought_balloon'],
    relatedTags: ['speech_bubble', 'comic', '4koma'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'sound_effects',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Stylized Japanese katakana/hiragana onomatopoeia drawn directly across a manga scene.',
    aliases: ['sfx_text', 'manga_sfx'],
    relatedTags: ['comic', 'speech_bubble', 'emphasis_lines', 'speed_lines'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'silent_comic',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Multi-panel comic sequence told purely through visuals and expressions without speech bubbles.',
    aliases: ['wordless_comic'],
    relatedTags: ['comic', '4koma', '2koma'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: '2koma',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Two-panel comic strip layout showing a before-and-after setup and punchline.',
    aliases: ['two_panel_comic'],
    relatedTags: ['comic', '4koma', 'silent_comic'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'fake_screenshot',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Original illustration styled to look like a TV anime frame or visual novel capture with subtitles/UI.',
    aliases: ['mock_screenshot'],
    relatedTags: ['anime_screencap', 'letterboxed', 'cel_shading'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'cover',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Book, doujinshi, manga volume, or album cover layout composition.',
    aliases: ['book_cover', 'album_cover'],
    relatedTags: ['magazine_cover', 'cover_page', 'official_art'],
    popularity: 'Common',
    postCountEst: '92K'
  },
  {
    tag: 'magazine_cover',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Fashion or anime magazine cover layout with masthead typography and headline callouts.',
    aliases: ['fashion_magazine_cover'],
    relatedTags: ['cover', 'official_art', 'cowboy_shot'],
    popularity: 'Common',
    postCountEst: '36K'
  },
  {
    tag: 'dakimakura_(medium)',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Tall vertical body-pillow layout depicting a full-body character lying on sheets from directly overhead.',
    aliases: ['body_pillow_layout', 'daki'],
    relatedTags: ['full_body', 'lying', 'on_bed', 'from_above'],
    popularity: 'Common',
    postCountEst: '98K'
  },
  {
    tag: 'inset',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Small secondary framed window overlaid on the main image showing a reaction close-up or detail.',
    aliases: ['picture_in_picture', 'detail_inset'],
    relatedTags: ['zoom_layer', 'split_screen', 'comic'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'zoom_layer',
    domain: 'art_meta',
    subcategory: 'Format & Page Layout',
    description: 'Foreground full-body character layered in front of a large cropped portrait backdrop of the same character.',
    aliases: ['portrait_backdrop_layer'],
    relatedTags: ['multiple_views', 'inset', 'official_art'],
    popularity: 'Common',
    postCountEst: '32K'
  },

  // ============================================================================
  // 04. FACE & EXPRESSIONS — Facial Hair (Expansion: 6 -> 16)
  // ============================================================================
  {
    tag: 'long_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Flowing full beard extending down past the chin and chest, classic for elders and wizards.',
    aliases: ['wizard_beard', 'flowing_beard'],
    relatedTags: ['beard', 'facial_hair', 'white_beard', 'mustache'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'white_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Snow-white beard associated with elderly mentors, kings, or Santa motifs.',
    aliases: ['snow_white_beard'],
    relatedTags: ['beard', 'long_beard', 'white_hair', 'facial_hair'],
    popularity: 'Common',
    postCountEst: '26K'
  },
  {
    tag: 'grey_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Salt-and-pepper or silver-grey beard conveying seasoned maturity.',
    aliases: ['gray_beard', 'silver_beard'],
    relatedTags: ['beard', 'grey_hair', 'facial_hair'],
    popularity: 'Specialized',
    postCountEst: '16K'
  },
  {
    tag: 'black_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Dark jet-black beard framing the jawline.',
    aliases: ['dark_beard'],
    relatedTags: ['beard', 'black_hair', 'facial_hair', 'mustache'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'brown_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Warm brown beard matching brown or chestnut hair.',
    aliases: ['chestnut_beard'],
    relatedTags: ['beard', 'brown_hair', 'facial_hair'],
    popularity: 'Specialized',
    postCountEst: '18K'
  },
  {
    tag: 'blonde_beard',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Golden or light blonde beard and jawline hair.',
    aliases: ['golden_beard'],
    relatedTags: ['beard', 'blonde_hair', 'facial_hair'],
    popularity: 'Specialized',
    postCountEst: '14K'
  },
  {
    tag: 'handlebar_mustache',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Distinctive mustache with long curled or upturned tips.',
    aliases: ['curled_mustache'],
    relatedTags: ['mustache', 'facial_hair', 'monocle'],
    popularity: 'Specialized',
    postCountEst: '15K'
  },
  {
    tag: 'soul_patch',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Small trimmed tuft of facial hair directly beneath the center of the lower lip.',
    aliases: ['chin_tuft'],
    relatedTags: ['facial_hair', 'goatee', 'stubble'],
    popularity: 'Specialized',
    postCountEst: '14K'
  },
  {
    tag: 'mutton_chops',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Thick flared sideburns extending down across the cheeks while leaving the chin shaved.',
    aliases: ['flared_sideburns'],
    relatedTags: ['sideburns', 'facial_hair', 'mustache'],
    popularity: 'Specialized',
    postCountEst: '12K'
  },
  {
    tag: 'fake_mustache',
    domain: 'face_expressions',
    subcategory: 'Facial Hair',
    description: 'Comedic stick-on or disguise mustache worn playfully by any character.',
    aliases: ['disguise_mustache'],
    relatedTags: ['mustache', 'glasses', 'smile'],
    popularity: 'Specialized',
    postCountEst: '16K'
  },

  // ============================================================================
  // 05. CLOTHING — Prints & Patterns (Expansion: 8 -> 24)
  // ============================================================================
  {
    tag: 'cow_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Black-and-white Holstein dairy cow spot pattern popular on bikinis, lingerie, and stockings.',
    aliases: ['holstein_print', 'cow_pattern'],
    relatedTags: ['animal_print', 'cow_girl', 'bikini', 'cowbell'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'leopard_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Bold spotted leopard rosette pattern iconic in gyaru fashion and bold lingerie.',
    aliases: ['cheetah_print', 'leopard_pattern'],
    relatedTags: ['animal_print', 'gyaru', 'bikini', 'lingerie'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'tiger_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Black-and-amber tiger stripe pattern on swimwear, oni outfits, or athletic wear.',
    aliases: ['tiger_stripes'],
    relatedTags: ['animal_print', 'oni', 'tiger_girl', 'bikini'],
    popularity: 'Specialized',
    postCountEst: '22K'
  },
  {
    tag: 'zebra_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'High-contrast black-and-white wavy zebra stripe fabric pattern.',
    aliases: ['zebra_stripes'],
    relatedTags: ['animal_print', 'striped'],
    popularity: 'Specialized',
    postCountEst: '14K'
  },
  {
    tag: 'camouflage',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Tactical military woodland, desert, or urban mottled camouflage fabric.',
    aliases: ['camo', 'camo_print'],
    relatedTags: ['military_uniform', 'jacket', 'pants'],
    popularity: 'Common',
    postCountEst: '58K'
  },
  {
    tag: 'gingham',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Fresh two-tone woven picnic check pattern commonly seen on sundresses and ribbons.',
    aliases: ['gingham_check'],
    relatedTags: ['checkered', 'plaid', 'sundress', 'apron'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'houndstooth',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Classic duotone broken-check woven textile pattern used on tailored coats and skirts.',
    aliases: ['pied_de_poule'],
    relatedTags: ['checkered', 'coat', 'blazer'],
    popularity: 'Specialized',
    postCountEst: '16K'
  },
  {
    tag: 'heart_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Repeating heart motifs printed across dresses, socks, panties, or pajamas.',
    aliases: ['heart_pattern'],
    relatedTags: ['heart', 'pajamas', 'panties', 'polka_dot'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'star_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Starry celestial pattern printed on skirts, magical girl outfits, or swimwear.',
    aliases: ['star_pattern'],
    relatedTags: ['magical_girl', 'witch_hat', 'starry_background'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'strawberry_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Cute red strawberry motifs printed on panties, aprons, or lolita dresses.',
    aliases: ['strawberry_pattern'],
    relatedTags: ['panties', 'gothic_lolita', 'apron'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'paw_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Animal paw-pad prints decorating hoodies, socks, gloves, or hair clips.',
    aliases: ['paw_pattern'],
    relatedTags: ['cat_girl', 'dog_girl', 'paw_pads'],
    popularity: 'Common',
    postCountEst: '56K'
  },
  {
    tag: 'skull_print',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Edgy punk or gothic skull emblems printed on t-shirts, chokers, or scarves.',
    aliases: ['skull_pattern'],
    relatedTags: ['t-shirt', 'gothic_lolita', 'choker'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'vertical_stripes',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Crisp top-to-bottom striped fabric used on shirts, gothic dresses, and stockings.',
    aliases: ['pinstripes'],
    relatedTags: ['striped', 'horizontal_stripes', 'dress_shirt'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'horizontal_stripes',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Classic side-to-side striped pattern iconic on thighhighs, panties, and sailor tops.',
    aliases: ['ring_stripes'],
    relatedTags: ['striped', 'striped_panties', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'gold_trim',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Ornate metallic gold edging and braid accenting regal uniforms, cloaks, or fantasy dresses.',
    aliases: ['golden_trim', 'gold_piping'],
    relatedTags: ['military_uniform', 'armor', 'cape', 'embroidery'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'embroidery',
    domain: 'clothing',
    subcategory: 'Prints & Patterns',
    description: 'Intricate stitched thread motifs adorning kimono sashes, fantasy robes, or luxury lingerie.',
    aliases: ['embroidered'],
    relatedTags: ['floral_print', 'gold_trim', 'kimono', 'lace'],
    popularity: 'Common',
    postCountEst: '48K'
  },

  // ============================================================================
  // 05. CLOTHING — Uniforms & Formal (Top-up: 16 -> 22)
  // ============================================================================
  {
    tag: 'tuxedo',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Black-tie formal evening suit with satin lapels and bowtie.',
    aliases: ['formal_tuxedo', 'dinner_jacket'],
    relatedTags: ['suit', 'bowtie', 'evening_gown', 'business_suit'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'police_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Tailored law-enforcement uniform with peaked cap, badge, necktie, and utility belt.',
    aliases: ['cop_uniform'],
    relatedTags: ['police', 'peaked_cap', 'handcuffs', 'necktie'],
    popularity: 'Common',
    postCountEst: '54K'
  },
  {
    tag: 'nurse_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'White or pastel hospital nurse dress paired with a starched nurse cap.',
    aliases: ['nurse_outfit'],
    relatedTags: ['nurse', 'nurse_cap', 'white_pantyhose'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'waitress_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Cafe or diner server uniform with waist apron, blouse, and pleated skirt.',
    aliases: ['diner_uniform', 'cafe_uniform'],
    relatedTags: ['waitress', 'apron', 'cafe', 'maid'],
    popularity: 'Common',
    postCountEst: '36K'
  },
  {
    tag: 'track_suit',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Athletic zip-up jersey jacket and matching striped track pants.',
    aliases: ['tracksuit', 'jersey_uniform'],
    relatedTags: ['track_jacket', 'gym_uniform', 'sneakers'],
    popularity: 'Common',
    postCountEst: '88K'
  },
  {
    tag: 'sailor_dress',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'One-piece dress featuring a classic nautical sailor collar and ribbon neckerchief.',
    aliases: ['sailor_one-piece'],
    relatedTags: ['sailor_collar', 'serafuku', 'dress', 'neckerchief'],
    popularity: 'Common',
    postCountEst: '72K'
  },

  // ============================================================================
  // 05. CLOTHING — Traditional & Fantasy (Top-up: 18 -> 24)
  // ============================================================================
  {
    tag: 'hanfu',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Flowing traditional Chinese cross-collar robes with wide sleeves and high waist sash.',
    aliases: ['chinese_traditional_robes'],
    relatedTags: ['china_dress', 'wide_sleeves', 'hair_ornament'],
    popularity: 'Common',
    postCountEst: '46K'
  },
  {
    tag: 'furisode',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Formal long-sleeved Japanese kimono with dramatic floor-sweeping sleeves and ornate floral patterns.',
    aliases: ['long-sleeved_kimono'],
    relatedTags: ['kimono', 'obi', 'wide_sleeves', 'floral_print'],
    popularity: 'Common',
    postCountEst: '62K'
  },
  {
    tag: 'dirndl',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Alpine Bavarian folk dress featuring a laced bodice, puffed white blouse, full skirt, and apron.',
    aliases: ['bavarian_dress', 'oktoberfest_dress'],
    relatedTags: ['apron', 'puffy_sleeves', 'corset', 'dress'],
    popularity: 'Common',
    postCountEst: '26K'
  },
  {
    tag: 'robe',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Long flowing mage, priestess, or ceremonial fantasy robe.',
    aliases: ['mage_robe', 'wizard_robe'],
    relatedTags: ['cloak', 'witch_hat', 'staff', 'hood'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'chainmail',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Interlocking metallic ring mesh armor worn beneath plate or over tunics.',
    aliases: ['mail_armor'],
    relatedTags: ['armor', 'plate_armor', 'knight', 'sword'],
    popularity: 'Common',
    postCountEst: '32K'
  },
  {
    tag: 'plate_armor',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Heavy articulated steel knight armor covering torso, pauldrons, and limbs.',
    aliases: ['full_plate', 'knight_armor'],
    relatedTags: ['armor', 'breastplate', 'shoulder_armor', 'gauntlets', 'knight'],
    popularity: 'Common',
    postCountEst: '42K'
  },

  // ============================================================================
  // 06. POSE & CAMERA — Framing & Shot Size (Expansion: 12 -> 24)
  // ============================================================================
  {
    tag: 'very_wide_shot',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Expansive establishing view where the character appears small against a sweeping landscape or cityscape.',
    aliases: ['extreme_wide_shot', 'establishing_shot'],
    relatedTags: ['wide_shot', 'scenery', 'outdoors', 'full_body'],
    popularity: 'Common',
    postCountEst: '92K'
  },
  {
    tag: 'out_of_frame',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Indicates part of a character or secondary subject extends beyond the cropped edges of the image canvas.',
    aliases: ['cropped_subject', 'partially_offscreen'],
    relatedTags: ['feet_out_of_frame', 'head_out_of_frame', 'cropped_legs'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'cropped_legs',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Framing cropped across the thighs or shins so the lower legs and feet extend past the bottom edge.',
    aliases: ['legs_cut_off'],
    relatedTags: ['cowboy_shot', 'feet_out_of_frame', 'out_of_frame'],
    popularity: 'Core',
    postCountEst: '120K'
  },
  {
    tag: 'cropped_torso',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Tight upper-chest framing cropped above the waist.',
    aliases: ['chest_crop'],
    relatedTags: ['upper_body', 'portrait', 'close-up'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'cropped_arms',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Narrow portrait framing where outstretched elbows or hands extend past the side edges.',
    aliases: ['arms_cut_off'],
    relatedTags: ['upper_body', 'portrait', 'out_of_frame'],
    popularity: 'Common',
    postCountEst: '98K'
  },
  {
    tag: 'cropped_shoulders',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Intimate headshot framing tightly cropped right at the shoulders.',
    aliases: ['shoulder_crop', 'headshot'],
    relatedTags: ['portrait', 'close-up', 'face_focus'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'eye_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Extreme close-up or compositional focal point highlighting detailed irises, pupils, and lashes.',
    aliases: ['eyes_focus', 'ocular_closeup'],
    relatedTags: ['close-up', 'face_focus', 'sparkling_eyes', 'symbol-shaped_pupils'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'hand_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Composition emphasizing expressive hand gestures, rings, nail polish, or held objects.',
    aliases: ['hands_focus'],
    relatedTags: ['outstretched_hand', 'holding_hands', 'nail_polish', 'foreshortening'],
    popularity: 'Common',
    postCountEst: '62K'
  },
  {
    tag: 'navel_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Midriff-centered framing emphasizing the waist, abs, navel, or belly piercing.',
    aliases: ['belly_focus', 'midriff_focus'],
    relatedTags: ['navel', 'midriff', 'narrow_waist', 'navel_piercing'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'armpit_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Composition drawing visual attention to raised arms and underarm contours.',
    aliases: ['underarm_focus'],
    relatedTags: ['armpits', 'arms_up', 'arms_behind_head', 'sleeveless'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'crotch_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Lower-torso framing centered on the pelvis, swimwear cut, panties, or hip lines.',
    aliases: ['groin_focus'],
    relatedTags: ['groin', 'hip_focus', 'thigh_focus', 'panties'],
    popularity: 'Common',
    postCountEst: '68K'
  },
  {
    tag: 'pussy_focus',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Explicit close-up composition centered directly on exposed female genitalia.',
    aliases: ['genital_focus'],
    relatedTags: ['pussy', 'spreading_own_pussy', 'spread_legs', 'rating_explicit'],
    popularity: 'Core',
    postCountEst: '110K'
  },

  // ============================================================================
  // 06. POSE & CAMERA — Camera Angles & Perspective (Expansion: 10 -> 20)
  // ============================================================================
  {
    tag: 'perspective',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Pronounced three-dimensional depth and dynamic foreshortened spatial scale.',
    aliases: ['dynamic_perspective', 'dramatic_perspective'],
    relatedTags: ['foreshortening', 'vanishing_point', 'dutch_angle', 'fisheye'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'vanishing_point',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Architectural corridors, streets, or tracks converging dramatically toward a focal horizon point.',
    aliases: ['one_point_perspective', 'linear_perspective'],
    relatedTags: ['perspective', 'street', 'cityscape', 'wide_shot'],
    popularity: 'Common',
    postCountEst: '54K'
  },
  {
    tag: 'pov_across_table',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'First-person date or cafe viewpoint seated directly across a table facing the character.',
    aliases: ['across_table_pov', 'date_pov'],
    relatedTags: ['pov', 'cafe', 'sitting', 'looking_at_viewer'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'pov_doorway',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'First-person viewpoint framed through an open door as a character greets or beckons the viewer.',
    aliases: ['doorway_pov'],
    relatedTags: ['pov', 'door', 'indoors', 'looking_at_viewer'],
    popularity: 'Common',
    postCountEst: '26K'
  },
  {
    tag: 'upside-down',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Inverted camera or upside-down character orientation with gravity-defying hair flow.',
    aliases: ['inverted_view'],
    relatedTags: ['dutch_angle', 'floating_hair', 'lying', 'dynamic_pose'],
    popularity: 'Common',
    postCountEst: '72K'
  },
  {
    tag: 'symmetry',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Mirrored left-right compositional balance ideal for regal portraits and stained-glass iconography.',
    aliases: ['symmetrical', 'symmetrical_composition'],
    relatedTags: ['straight-on', 'stained_glass', 'official_art'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'isometric',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Elevated 3/4 orthographic diorama angle showcasing rooms, miniature worlds, or tactical scenes.',
    aliases: ['isometric_view', 'diorama_angle'],
    relatedTags: ['from_above', 'indoors', 'bedroom', 'scenery'],
    popularity: 'Specialized',
    postCountEst: '24K'
  },
  {
    tag: 'atmospheric_perspective',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Distant background layers softening into hazy desaturated blues for epic environmental scale.',
    aliases: ['aerial_perspective', 'distance_haze'],
    relatedTags: ['scenery', 'very_wide_shot', 'fog', 'sky'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'horizon',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Visible sweeping sea or landscape horizon line anchoring wide scenic compositions.',
    aliases: ['horizon_line'],
    relatedTags: ['ocean', 'sky', 'sunset', 'wide_shot'],
    popularity: 'Common',
    postCountEst: '78K'
  },
  {
    tag: 'panorama',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Ultra-wide sweeping vista format showcasing vast skylines, valleys, or ensemble scenes.',
    aliases: ['panoramic_view'],
    relatedTags: ['very_wide_shot', 'scenery', 'horizon'],
    popularity: 'Specialized',
    postCountEst: '18K'
  },

  // ============================================================================
  // 06. POSE & CAMERA — Lighting & Optical Effects (Top-up: 18 -> 24)
  // ============================================================================
  {
    tag: 'cast_shadow',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Crisp projected shadow thrown by a character, foliage, or architecture onto a wall or floor.',
    aliases: ['projected_shadow', 'hard_shadow'],
    relatedTags: ['shadow', 'window_shadow', 'sunlight', 'dappled_sunlight'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'window_shadow',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Geometric sunlight panes or venetian-blind stripes projected across skin, clothes, or bedroom sheets.',
    aliases: ['blinds_shadow', 'window_light_pattern'],
    relatedTags: ['shadow', 'cast_shadow', 'window', 'sunlight', 'bedroom'],
    popularity: 'Specialized',
    postCountEst: '24K'
  },
  {
    tag: 'underlighting',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Theatrical upward illumination cast from below the face or body (campfire, phone screen, or eerie glow).',
    aliases: ['uplighting', 'bottom_lighting'],
    relatedTags: ['shadow', 'chiaroscuro', 'glowing', 'dark'],
    popularity: 'Common',
    postCountEst: '34K'
  },
  {
    tag: 'moonlight',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Cool silvery-blue nocturnal illumination cast by the moon across hair, water, and night scenes.',
    aliases: ['lunar_light'],
    relatedTags: ['full_moon', 'night_sky', 'backlighting', 'night'],
    popularity: 'Common',
    postCountEst: '92K'
  },
  {
    tag: 'neon_lights',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Vibrant magenta, cyan, and electric-blue urban neon reflections illuminating night streets and subjects.',
    aliases: ['neon_lighting', 'cyberpunk_lighting'],
    relatedTags: ['cyberpunk', 'city_lights', 'glowing', 'night'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'candlelight',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Warm flickering amber glow casting intimate soft shadows in gothic or boudoir interiors.',
    aliases: ['warm_candle_glow'],
    relatedTags: ['dark', 'shadow', 'chiaroscuro', 'indoors'],
    popularity: 'Common',
    postCountEst: '32K'
  },

  // ============================================================================
  // 07. ENVIRONMENT — Studio & Minimal Backgrounds (Expansion: 8 -> 24)
  // ============================================================================
  {
    tag: 'blue_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Clean solid or softly textured blue studio backdrop.',
    aliases: ['sky_blue_backdrop'],
    relatedTags: ['simple_background', 'colored_background', 'gradient_background'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'pink_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Sweet pastel or vibrant pink backdrop ideal for idol, gyaru, and pin-up illustrations.',
    aliases: ['pastel_pink_backdrop'],
    relatedTags: ['simple_background', 'colored_background', 'heart', 'pastel_colors'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'red_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Bold crimson or scarlet studio backdrop delivering dramatic graphic contrast.',
    aliases: ['crimson_backdrop'],
    relatedTags: ['simple_background', 'colored_background', 'high_contrast'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'yellow_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Bright energetic yellow pop-art backdrop.',
    aliases: ['amber_backdrop'],
    relatedTags: ['simple_background', 'colored_background', 'colorful'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'purple_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Moody violet or lavender backdrop suited for gothic, mystical, or succubus themes.',
    aliases: ['violet_backdrop'],
    relatedTags: ['simple_background', 'colored_background', 'dark'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'green_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Clean mint, emerald, or sage studio backdrop.',
    aliases: ['mint_backdrop'],
    relatedTags: ['simple_background', 'colored_background'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'orange_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Warm tangerine or sunset-orange graphic backdrop.',
    aliases: ['warm_orange_backdrop'],
    relatedTags: ['simple_background', 'colored_background'],
    popularity: 'Common',
    postCountEst: '98K'
  },
  {
    tag: 'brown_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Earthy sepia, cocoa, or parchment-toned neutral backdrop.',
    aliases: ['beige_background', 'tan_background'],
    relatedTags: ['simple_background', 'colored_background', 'sepia'],
    popularity: 'Common',
    postCountEst: '92K'
  },
  {
    tag: 'two-tone_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Graphic studio backdrop split cleanly into two contrasting color blocks.',
    aliases: ['split_color_background'],
    relatedTags: ['simple_background', 'colored_background', 'flat_color'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'striped_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Playful graphic vertical, horizontal, or diagonal striped backdrop.',
    aliases: ['stripe_backdrop'],
    relatedTags: ['simple_background', 'polka_dot_background', 'colored_background'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'polka_dot_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Cheerful spotted dot backdrop popular in idol and retro pop illustrations.',
    aliases: ['dotted_background'],
    relatedTags: ['simple_background', 'striped_background', 'polka_dot'],
    popularity: 'Common',
    postCountEst: '78K'
  },
  {
    tag: 'checkered_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Graphic checkerboard backdrop reminiscent of Alice in Wonderland or pop-punk aesthetics.',
    aliases: ['checkerboard_background'],
    relatedTags: ['simple_background', 'checkered', 'high_contrast'],
    popularity: 'Common',
    postCountEst: '68K'
  },
  {
    tag: 'starry_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Stylized twinkling star-field backdrop distinct from realistic outdoor night skies.',
    aliases: ['star_pattern_background'],
    relatedTags: ['simple_background', 'sparkle', 'star_print', 'magical_girl'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'patterned_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Ornamental wallpaper, damask, geometric, or motif-tiled graphic background.',
    aliases: ['pattern_background', 'wallpaper_background'],
    relatedTags: ['simple_background', 'floral_background', 'halftone_background'],
    popularity: 'Common',
    postCountEst: '85K'
  },
  {
    tag: 'transparent_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Clean cutout character presentation isolated with no background scenery (PNG cutout look).',
    aliases: ['cutout_background', 'no_background'],
    relatedTags: ['simple_background', 'white_background', 'character_sheet'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'abstract_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Artistic painterly splashes, light ribbons, or non-representational shapes behind the subject.',
    aliases: ['painterly_backdrop'],
    relatedTags: ['gradient_background', 'colorful', 'light_particles'],
    popularity: 'Common',
    postCountEst: '75K'
  }
];
