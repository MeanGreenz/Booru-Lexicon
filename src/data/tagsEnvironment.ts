import { BooruTag } from '../types/lexicon';

export const ENVIRONMENT_TAGS: BooruTag[] = [
  // Minimal & Studio Backgrounds
  {
    tag: 'simple_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Clean, uncluttered solid or subtle gradient background that isolates the character silhouette.',
    aliases: ['plain_background', 'solid_background', 'minimal_background'],
    relatedTags: ['white_background', 'grey_background', 'gradient_background', 'solo'],
    popularity: 'Core',
    postCountEst: '3.6M',
    illustriousNote: 'Use when creating character reference sheets, stickers, or outfit studies.'
  },
  {
    tag: 'white_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Pure studio-white backdrop behind the subject.',
    aliases: ['blank_white_background'],
    relatedTags: ['simple_background', 'full_body', 'standing'],
    popularity: 'Core',
    postCountEst: '2.9M'
  },
  {
    tag: 'grey_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Neutral mid-tone grey backdrop that preserves both light and dark hair edge readability.',
    aliases: ['gray_background', 'neutral_studio_backdrop'],
    relatedTags: ['simple_background', 'gradient_background'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'gradient_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Smooth two-tone color transition backdrop.',
    aliases: ['color_fade_background'],
    relatedTags: ['simple_background', 'abstract_background'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'halftone_background',
    domain: 'environment',
    subcategory: 'Studio & Minimal Backgrounds',
    description: 'Graphic pop-art or manga dot-pattern backdrop.',
    aliases: ['dotted_background', 'pop_art_background'],
    relatedTags: ['simple_background', 'screentones', 'flat_color'],
    popularity: 'Common',
    postCountEst: '125K'
  },

  // Outdoor, Nature & Sky
  {
    tag: 'outdoors',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Exterior open-air setting.',
    aliases: ['outside', 'exterior'],
    relatedTags: ['sky', 'day', 'nature', 'cloud', 'sunlight'],
    popularity: 'Core',
    postCountEst: '1.9M'
  },
  {
    tag: 'scenery',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Rich, detailed environmental backdrop with architectural or natural vistas.',
    aliases: ['detailed_background', 'landscape', 'environmental_art'],
    relatedTags: ['outdoors', 'wide_shot', 'cloud', 'cityscape'],
    popularity: 'Core',
    postCountEst: '1.1M',
    illustriousNote: 'Adding scenery strongly cues SDXL Illustrious to paint detailed backgrounds instead of blurry voids.'
  },
  {
    tag: 'blue_sky',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Clear azure daytime sky, often paired with towering Makoto Shinkai style cumulus clouds.',
    aliases: ['clear_sky', 'daytime_sky'],
    relatedTags: ['sky', 'cloud', 'day', 'cumulonimbus_cloud', 'sunlight'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'cumulonimbus_cloud',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Towering, sunlit summer anvil clouds against a vivid blue sky.',
    aliases: ['summer_clouds', 'towering_clouds', 'shinkai_clouds'],
    relatedTags: ['blue_sky', 'cloud', 'summer', 'scenery'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'sunset',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Golden-hour or twilight orange, amber, and violet sky with warm directional backlighting.',
    aliases: ['dusk', 'golden_hour', 'evening_sky', 'twilight'],
    relatedTags: ['orange_sky', 'backlighting', 'lens_flare', 'horizon'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'night_sky',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Dark nocturnal sky illuminated by stars, constellations, or the moon.',
    aliases: ['nocturnal_sky'],
    relatedTags: ['starry_sky', 'full_moon', 'night', 'moonlight'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'starry_sky',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Night sky glittering with dense starfields and the Milky Way.',
    aliases: ['stars_in_sky', 'milky_way', 'constellations'],
    relatedTags: ['night_sky', 'shooting_star', 'full_moon', 'scenery'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'full_moon',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Large luminous full moon hanging in the night sky.',
    aliases: ['lunar_disc', 'bright_moon'],
    relatedTags: ['moon', 'night_sky', 'moonlight', 'backlighting'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'cherry_blossoms',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Blooming pink sakura trees and drifting blossom petals.',
    aliases: ['sakura', 'sakura_blossoms'],
    relatedTags: ['falling_petals', 'petals', 'spring_(season)', 'tree'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'falling_petals',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Flower petals swirling through the air around the subject.',
    aliases: ['drifting_petals', 'flower_petals_falling'],
    relatedTags: ['cherry_blossoms', 'rose_petals', 'wind', 'depth_of_field'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'flower_field',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Expansive meadow carpeted in blooming wildflowers, sunflowers, or spider lilies.',
    aliases: ['meadow_of_flowers', 'floral_meadow'],
    relatedTags: ['flower', 'grass', 'outdoors', 'scenery'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'forest',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Woodland environment with tall tree trunks, canopy foliage, and dappled sunlight.',
    aliases: ['woods', 'woodland', 'grove'],
    relatedTags: ['tree', 'dappled_sunlight', 'nature', 'bamboo_forest'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'ocean',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Open sea or coastal water with waves and horizon line.',
    aliases: ['sea', 'seascape'],
    relatedTags: ['beach', 'water', 'horizon', 'waves', 'blue_sky'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'beach',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Sandy shoreline meeting the ocean.',
    aliases: ['seashore', 'sandy_beach', 'coastline'],
    relatedTags: ['ocean', 'sand', 'palm_tree', 'summer'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'rain',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Falling rain streaks, wet pavement reflections, and overcast atmosphere.',
    aliases: ['raining', 'raindrops', 'downpour'],
    relatedTags: ['umbrella', 'wet', 'puddle', 'cloudy_sky'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'snow',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Snow-covered winter landscape or falling snowflakes.',
    aliases: ['winter_snow', 'snowfall'],
    relatedTags: ['snowing', 'scarf', 'winter_clothes', 'cold'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'wind',
    domain: 'environment',
    subcategory: 'Nature, Sky & Weather',
    description: 'Breeze or gale sweeping hair, skirts, capes, and leaves across the frame.',
    aliases: ['windy', 'breeze', 'gust_of_wind'],
    relatedTags: ['floating_hair', 'falling_petals', 'cape'],
    popularity: 'Core',
    postCountEst: '340K'
  },

  // Urban, Indoor & Architectural Settings
  {
    tag: 'indoors',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Interior room, hall, or enclosed architectural setting.',
    aliases: ['inside', 'interior'],
    relatedTags: ['window', 'bedroom', 'classroom', 'cafe'],
    popularity: 'Core',
    postCountEst: '1.6M'
  },
  {
    tag: 'window',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Framed glass window admitting natural daylight, curtains, or exterior views.',
    aliases: ['windowpane', 'by_the_window'],
    relatedTags: ['curtains', 'light_rays', 'sunlight', 'indoors', 'stained_glass'],
    popularity: 'Core',
    postCountEst: '720K'
  },
  {
    tag: 'stained_glass',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Ornate multicolored gothic or cathedral stained-glass window casting prismatic light.',
    aliases: ['cathedral_window', 'rose_window'],
    relatedTags: ['window', 'church', 'light_rays', 'gothic_lolita'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'classroom',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Japanese schoolroom with wooden student desks, chalkboard, and large sunny windows.',
    aliases: ['schoolroom', 'lecture_room'],
    relatedTags: ['school_desk', 'chalkboard', 'school_uniform', 'window'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'bedroom',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Cozy personal room featuring a bed, pillows, desk, or plushies.',
    aliases: ['my_room', 'dorm_room'],
    relatedTags: ['bed', 'pillow', 'indoors', 'curtains'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'library',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Scholarly interior lined with tall wooden bookshelves and stacked volumes.',
    aliases: ['book_room', 'study_hall'],
    relatedTags: ['bookshelf', 'book', 'holding_book', 'indoors'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'cafe',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Coffee shop, patisserie, or bistro table setting with teacups and pastries.',
    aliases: ['coffee_shop', 'tea_house', 'patisserie'],
    relatedTags: ['teacup', 'table', 'cake', 'sitting'],
    popularity: 'Core',
    postCountEst: '130K'
  },
  {
    tag: 'cityscape',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Urban skyline with skyscrapers, streets, utility poles, or neon signs.',
    aliases: ['urban_skyline', 'city_background', 'metropolis'],
    relatedTags: ['city_lights', 'street', 'building', 'rooftop', 'power_lines'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'city_lights',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Illuminated nocturnal city windows, streetlamps, and glowing neon signage.',
    aliases: ['night_city', 'urban_lights'],
    relatedTags: ['cityscape', 'night', 'bokeh', 'neon_lights'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'rooftop',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Elevated building roof deck, often enclosed by a chain-link fence overlooking a city or sky.',
    aliases: ['school_rooftop', 'building_roof'],
    relatedTags: ['chain-link_fence', 'cityscape', 'blue_sky', 'sunset'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'shrine',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Traditional Japanese Shinto shrine complex with vermilion torii gates, stone lanterns, and wooden steps.',
    aliases: ['shinto_shrine', 'jinja'],
    relatedTags: ['torii', 'miko', 'paper_lantern', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'torii',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Iconic traditional vermilion Japanese gate marking the entrance to a sacred shrine.',
    aliases: ['shrine_gate', 'torii_gate'],
    relatedTags: ['shrine', 'miko', 'cherry_blossoms'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'ruins',
    domain: 'environment',
    subcategory: 'Indoor & Urban Architecture',
    description: 'Weathered ancient stone columns, overgrown arches, or post-apocalyptic structures.',
    aliases: ['ancient_ruins', 'abandoned_building'],
    relatedTags: ['rubble', 'overgrown', 'scenery', 'fantasy'],
    popularity: 'Common',
    postCountEst: '95K'
  },

  // Props, Weapons & Handheld Objects
  {
    tag: 'holding_weapon',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Character gripping a combat weapon such as a sword, katana, spear, bow, or firearm.',
    aliases: ['wielding_weapon', 'armed'],
    relatedTags: ['sword', 'katana', 'gun', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '780K'
  },
  {
    tag: 'katana',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Curved single-edged Japanese blade with tsuba handguard and scabbard (saya).',
    aliases: ['japanese_sword', 'samurai_sword'],
    relatedTags: ['sword', 'holding_sword', 'sheath', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'sword',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Double-edged knightly broadsword, rapier, or fantasy greatsword.',
    aliases: ['blade', 'broadsword', 'longsword'],
    relatedTags: ['holding_sword', 'katana', 'armor', 'fighting_stance'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'staff',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Magical wooden or ornate crystal caster staff.',
    aliases: ['magic_staff', 'wizard_staff', 'rod'],
    relatedTags: ['witch_hat', 'magic', 'glowing'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'umbrella',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Rain umbrella, transparent vinyl umbrella, or traditional Japanese wagasa/parasol.',
    aliases: ['parasol', 'wagasa', 'oil-paper_umbrella'],
    relatedTags: ['holding_umbrella', 'transparent_umbrella', 'rain', 'kimono'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'book',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Hardcover tome, grimoire, textbook, or novel.',
    aliases: ['tome', 'grimoire', 'novel'],
    relatedTags: ['holding_book', 'open_book', 'reading', 'library'],
    popularity: 'Core',
    postCountEst: '490K'
  },
  {
    tag: 'teacup',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Porcelain teacup and saucer held during tea time.',
    aliases: ['tea_cup', 'coffee_cup'],
    relatedTags: ['holding_cup', 'drinking', 'cafe', 'maid'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'smartphone',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Modern mobile phone held for texting or taking a mirror/POV selfie.',
    aliases: ['cellphone', 'mobile_phone', 'iphone'],
    relatedTags: ['holding_phone', 'selfie', 'modern'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'musical_instrument',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Electric guitar, acoustic guitar, violin, or piano.',
    aliases: ['instrument', 'guitar', 'violin'],
    relatedTags: ['guitar', 'violin', 'piano', 'headphones'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'stuffed_toy',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Plush animal or character doll hugged or resting nearby.',
    aliases: ['plushie', 'stuffed_animal', 'teddy_bear'],
    relatedTags: ['holding_stuffed_toy', 'hugging_object', 'bedroom'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'paper_lantern',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Glowing traditional red or warm-white chouchin festival lantern.',
    aliases: ['chouchin', 'festival_lantern'],
    relatedTags: ['shrine', 'yukata', 'night', 'glowing'],
    popularity: 'Common',
    postCountEst: '115K'
  },
  {
    tag: 'chains',
    domain: 'environment',
    subcategory: 'Props, Weapons & Objects',
    description: 'Metallic linked chains winding through the foreground or background for dark fantasy compositions.',
    aliases: ['metal_chains', 'iron_chains'],
    relatedTags: ['darkness', 'chiaroscuro', 'foreshortening'],
    popularity: 'Common',
    postCountEst: '165K'
  }
];
