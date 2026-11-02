import { BooruTag } from '../types/lexicon';

export const ART_META_TAGS: BooruTag[] = [
  // SDXL Illustrious Quality & Era Triggers
  {
    tag: 'masterpiece',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Top-tier aesthetic quality token that steers SDXL Illustrious toward high-scoring Danbooru artworks.',
    aliases: ['highest_quality', 'top_tier_art'],
    relatedTags: ['best_quality', 'very_awa', 'absurdres', 'newest'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Place at the very start of your positive prompt alongside best_quality.'
  },
  {
    tag: 'best_quality',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Primary SDXL Illustrious quality score modifier ensuring clean anatomy, crisp linework, and refined shading.',
    aliases: ['high_quality', 'amazing_quality'],
    relatedTags: ['masterpiece', 'very_awa', 'highres'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Standard Illustrious quality opener: masterpiece, best_quality, very_awa, newest, absurdres.'
  },
  {
    tag: 'very_awa',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Specialized aesthetic quality token recognized by Illustrious / NoobAI / Pony-derived SDXL fine-tunes for vivid polish.',
    aliases: ['aesthetic_boost'],
    relatedTags: ['masterpiece', 'best_quality', 'newest'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Boosts color vibrancy, eye clarity, and painterly lighting polish in Illustrious v0.1–v1.1+.'
  },
  {
    tag: 'newest',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru chronological era token (2021–2024+) that steers Illustrious toward modern digital anime rendering.',
    aliases: ['year_2023', 'year_2024', 'modern_era'],
    relatedTags: ['late', 'mid', 'masterpiece', 'best_quality'],
    popularity: 'Core',
    postCountEst: 'Meta',
    illustriousNote: 'Crucial in Illustrious! Using newest avoids older 2008-era flat anime proportions.'
  },
  {
    tag: 'late',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru chronological era token corresponding to ~2017–2020 illustration styles.',
    aliases: ['late_2010s_style'],
    relatedTags: ['newest', 'mid', 'early'],
    popularity: 'Common',
    postCountEst: 'Meta'
  },
  {
    tag: 'mid',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru chronological era token corresponding to ~2011–2016 classic moe/Kyoto Animation era aesthetics.',
    aliases: ['2010s_anime_style'],
    relatedTags: ['late', 'early', 'cel_shading'],
    popularity: 'Common',
    postCountEst: 'Meta'
  },
  {
    tag: 'early',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru chronological era token corresponding to pre-2010 vintage anime and visual novel illustrations.',
    aliases: ['2000s_anime_style', 'retro_2000s'],
    relatedTags: ['retro_artstyle', 'mid', 'cel_shading'],
    popularity: 'Specialized',
    postCountEst: 'Meta'
  },
  {
    tag: 'absurdres',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Danbooru meta tag for ultra-high-resolution canvas artwork (>3200x2400), prompting fine micro-details in hair and fabric.',
    aliases: ['ultra_highres', '4k_illustration'],
    relatedTags: ['highres', 'incredibly_absurdres', 'masterpiece'],
    popularity: 'Core',
    postCountEst: '1.4M',
    illustriousNote: 'Increases fine strand density in hair and intricate lace/jewelry textures.'
  },
  {
    tag: 'highres',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Standard high-resolution Danbooru meta tag ensuring clean, unpixelated linework.',
    aliases: ['high_resolution', 'hd_art'],
    relatedTags: ['absurdres', 'best_quality'],
    popularity: 'Core',
    postCountEst: '5.1M'
  },
  {
    tag: 'official_art',
    domain: 'art_meta',
    subcategory: 'Illustrious Quality & Era',
    description: 'Steers the composition toward polished studio promotional key visuals, gacha splash art, or light novel covers.',
    aliases: ['key_visual', 'promotional_art', 'studio_art'],
    relatedTags: ['anime_coloring', 'masterpiece', 'fine_art_parody'],
    popularity: 'Core',
    postCountEst: '480K'
  },

  // Shading, Rendering & Mediums
  {
    tag: 'anime_coloring',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Clean, authentic TV/movie anime cel-paint look with crisp shadow boundaries and specular hair bands.',
    aliases: ['anime_screencap_style', 'studio_anime_shading'],
    relatedTags: ['cel_shading', 'lineart', 'official_art'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'cel_shading',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Hard-edged shadow planes without soft airbrushed gradients.',
    aliases: ['hard_shading', 'flat_shading', 'toon_shading'],
    relatedTags: ['anime_coloring', 'flat_color', 'bold_lineart'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'soft_shading',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Smooth, blended gradient transitions across skin, hair, and clothing folds.',
    aliases: ['smooth_shading', 'airbrush_shading'],
    relatedTags: ['painterly', 'depth_of_field', 'newest'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'painterly',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Rich digital or traditional brushwork where visible strokes and color blending replace heavy black lineart.',
    aliases: ['painted_style', 'digital_painting', 'thick_coating'],
    relatedTags: ['impasto', 'no_lineart', 'oil_painting_(medium)'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'impasto',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Thick, textured, expressive paint strokes with rich relief and tactile color mixing.',
    aliases: ['thick_paint', 'textured_brushstrokes', 'atsunuri'],
    relatedTags: ['painterly', 'oil_painting_(medium)', 'no_lineart'],
    popularity: 'Core',
    postCountEst: '45K'
  },
  {
    tag: 'watercolor_(medium)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Translucent washes of pigment with soft wet-on-wet bleeding edges and visible cold-press paper grain.',
    aliases: ['watercolor', 'aquarelle', 'watercolour'],
    relatedTags: ['traditional_media', 'pastel_colors', 'paper_texture'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'oil_painting_(medium)',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Classical fine-art oil canvas look with rich color depth and brushwork.',
    aliases: ['oil_on_canvas', 'oil_paint'],
    relatedTags: ['impasto', 'painterly', 'chiaroscuro'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'sketch',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Expressive rough pencil or digital graphite drawing with construction lines and hatching.',
    aliases: ['pencil_sketch', 'rough_drawing', 'doodle'],
    relatedTags: ['lineart', 'monochrome', 'hatching_(texture)'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'lineart',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Clean inked contour lines with minimal or no color fill.',
    aliases: ['ink_drawing', 'clean_lines'],
    relatedTags: ['monochrome', 'bold_lineart', 'sketch'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'no_lineart',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Lineless illustration where forms are defined purely by color, light, and shadow shapes.',
    aliases: ['lineless', 'lineless_art'],
    relatedTags: ['painterly', 'impasto', 'flat_color'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'flat_color',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Graphic pop-art or vector-inspired color blocks with minimal interior shading.',
    aliases: ['solid_color_fill', 'minimalist_coloring'],
    relatedTags: ['cel_shading', 'no_lineart', 'high_contrast'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'retro_artstyle',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: '80s/90s vintage cel-animation aesthetic with warm film grain, classic eye highlights, and nostalgic color palettes.',
    aliases: ['90s_anime_style', '80s_anime_style', 'vintage_anime'],
    relatedTags: ['cel_shading', 'early', 'chromatic_aberration'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'pixel_art',
    domain: 'art_meta',
    subcategory: 'Shading, Lineart & Mediums',
    description: 'Crisp low-resolution grid sprite artwork with deliberate dithering and pixel clusters.',
    aliases: ['dot_art', '16-bit_sprite'],
    relatedTags: ['retro_artstyle', 'chibi'],
    popularity: 'Common',
    postCountEst: '115K'
  },

  // Color Palettes, Halftones & Visual Motifs
  {
    tag: 'monochrome',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Single-hue or black-and-white manga/illustration palette.',
    aliases: ['black_and_white', 'b&w'],
    relatedTags: ['greyscale', 'spot_color', 'screentones', 'lineart'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'greyscale',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Pure achromatic shades of black, grey, and white.',
    aliases: ['grayscale', 'achromatic'],
    relatedTags: ['monochrome', 'screentones', 'spot_color'],
    popularity: 'Core',
    postCountEst: '890K'
  },
  {
    tag: 'spot_color',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Monochrome or greyscale illustration where a single striking element (such as red eyes or a ribbon) is rendered in vivid color.',
    aliases: ['selective_color', 'color_splash'],
    relatedTags: ['monochrome', 'greyscale', 'high_contrast'],
    popularity: 'Core',
    postCountEst: '95K',
    illustriousNote: 'Pair monochrome, greyscale, spot_color with a single colored feature like red_eyes for dramatic manga covers.'
  },
  {
    tag: 'screentones',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Manga halftone dot patterns used for shading and texture.',
    aliases: ['halftone', 'manga_tones', 'dot_shading'],
    relatedTags: ['monochrome', 'greyscale', 'hatching_(texture)'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'pastel_colors',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Soft, desaturated, high-value palette of pale pinks, lavenders, mint, and cream.',
    aliases: ['soft_colors', 'pastel_palette'],
    relatedTags: ['watercolor_(medium)', 'dreamy', 'white_background'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'vibrant_colors',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Richly saturated, high-energy color harmony.',
    aliases: ['colorful', 'vivid_colors', 'saturated_colors'],
    relatedTags: ['colorful', 'high_contrast', 'glowing'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'high_contrast',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Stark separation between deep blacks and bright highlights.',
    aliases: ['bold_contrast'],
    relatedTags: ['chiaroscuro', 'flat_color', 'spot_color'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'glowing',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Luminous bioluminescent or magical bloom radiating from objects, eyes, or particles.',
    aliases: ['luminescent', 'neon_glow', 'bloom_effect'],
    relatedTags: ['glowing_eyes', 'floating_particles', 'magic', 'sparkles'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'sparkles',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Glittering four-point star glints and shimmering dust around the character.',
    aliases: ['glitter', 'shimmering', 'kirakira'],
    relatedTags: ['glowing', 'star-shaped_pupils', 'floating_particles'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'floating_particles',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Drifting motes of light, embers, dust, or snow suspended in the air.',
    aliases: ['light_particles', 'dust_motes', 'embers'],
    relatedTags: ['light_rays', 'glowing', 'falling_petals', 'bokeh'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'dutch_border',
    domain: 'art_meta',
    subcategory: 'Color, Tone & Visual Effects',
    description: 'Stylized white or colored geometric frame/border overlapping which the character breaks out of.',
    aliases: ['out_of_frame', 'pop_out_border', 'white_border'],
    relatedTags: ['white_border', 'foreshortening', 'official_art'],
    popularity: 'Common',
    postCountEst: '65K'
  }
];
