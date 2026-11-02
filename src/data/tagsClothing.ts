import { BooruTag } from '../types/lexicon';

export const CLOTHING_TAGS: BooruTag[] = [
  // Uniforms & Formal Sets
  {
    tag: 'school_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Japanese or Western academic uniform ensemble (serafuku, blazer, or gakuran).',
    aliases: ['student_uniform', 'academy_uniform'],
    relatedTags: ['serafuku', 'blazer', 'pleated_skirt', 'necktie', 'loafers'],
    popularity: 'Core',
    postCountEst: '1.6M'
  },
  {
    tag: 'serafuku',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Traditional Japanese sailor-style school uniform featuring a sailor collar, neckerchief, and pleated skirt.',
    aliases: ['sailor_uniform', 'sailor_suit', 'japanese_school_uniform'],
    relatedTags: ['sailor_collar', 'neckerchief', 'pleated_skirt', 'school_uniform'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'sailor_collar',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Wide square-backed nautical collar with stripes worn on serafuku or casual tops.',
    aliases: ['nautical_collar', 'middy_collar'],
    relatedTags: ['serafuku', 'neckerchief', 'school_uniform'],
    popularity: 'Core',
    postCountEst: '710K'
  },
  {
    tag: 'blazer',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Tailored suit-style jacket worn over a collared shirt as part of a modern school or office uniform.',
    aliases: ['school_blazer', 'suit_jacket'],
    relatedTags: ['school_uniform', 'collared_shirt', 'necktie', 'cardigan'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'maid',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Classic Victorian or Akihabara frilly maid costume with apron and headdress.',
    aliases: ['maid_uniform', 'maid_outfit', 'meido'],
    relatedTags: ['maid_headdress', 'maid_apron', 'frills', 'puffy_sleeves'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'maid_headdress',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Frilled white lace headband worn by maids.',
    aliases: ['maid_headband', 'frilled_headdress'],
    relatedTags: ['maid', 'maid_apron', 'frills'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'military_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Structured tactical or ceremonial officer uniform with epaulets, double-breasted coat, or peaked cap.',
    aliases: ['army_uniform', 'officer_uniform'],
    relatedTags: ['peaked_cap', 'epaulettes', 'capelet', 'boots'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'business_suit',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Formal office attire consisting of a tailored jacket, dress shirt, tie, and slacks or pencil skirt.',
    aliases: ['formal_suit', 'office_lady_suit', 'suit'],
    relatedTags: ['blazer', 'pencil_skirt', 'collared_shirt', 'necktie'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'gym_uniform',
    domain: 'clothing',
    subcategory: 'Uniforms & Formal',
    description: 'Japanese school physical education athletic uniform (taisoufuku) with ringer tee and track shorts or buruma.',
    aliases: ['taisoufuku', 'pe_uniform', 'athletic_uniform'],
    relatedTags: ['buruma', 'track_jacket', 'gym_shirt', 'sneakers'],
    popularity: 'Core',
    postCountEst: '175K'
  },

  // Traditional & Cultural Attire
  {
    tag: 'japanese_clothes',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Umbrella tag for traditional Japanese garments including kimono, yukata, hakama, and haori.',
    aliases: ['wafuku', 'traditional_japanese_attire'],
    relatedTags: ['kimono', 'yukata', 'hakama', 'haori', 'obi'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'kimono',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Formal traditional Japanese robe with wide furisode sleeves and decorative floral or geometric patterns.',
    aliases: ['furisode', 'silk_kimono'],
    relatedTags: ['japanese_clothes', 'obi', 'sash', 'floral_print', 'tabi'],
    popularity: 'Core',
    postCountEst: '690K'
  },
  {
    tag: 'yukata',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Lightweight summer cotton kimono often worn at fireworks festivals (matsuri).',
    aliases: ['summer_kimono', 'festival_yukata'],
    relatedTags: ['japanese_clothes', 'obi', 'uchiwa', 'fireworks'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'miko',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Shinto shrine maiden attire featuring a white kosode top, scarlet hakama trousers, and detached sleeves.',
    aliases: ['shrine_maiden', 'miko_outfit'],
    relatedTags: ['hakama', 'wide_sleeves', 'detached_sleeves', 'gohei'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'hakama',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Wide-legged pleated traditional Japanese trousers or long divided skirt worn over a kimono.',
    aliases: ['hakama_skirt', 'hakama_pants'],
    relatedTags: ['japanese_clothes', 'miko', 'haori'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'haori',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Traditional hip- or thigh-length open-front Japanese jacket worn over a kimono or uniform.',
    aliases: ['kimono_jacket', 'coat_haori'],
    relatedTags: ['japanese_clothes', 'kimono', 'open_clothes'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'china_dress',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Form-fitting Mandarin-collar qipao or cheongsam dress with side slits and decorative frog buttons.',
    aliases: ['cheongsam', 'qipao', 'mandarin_dress'],
    relatedTags: ['side_slit', 'double_bun', 'mandarin_collar', 'pelvic_curtain'],
    popularity: 'Core',
    postCountEst: '265K'
  },
  {
    tag: 'gothic_lolita',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Ornate Victorian/Rococo-inspired Harajuku fashion with bell-shaped petticoat skirt, lace frills, bows, and dark palette.',
    aliases: ['lolita_fashion', 'goth_loli'],
    relatedTags: ['frills', 'lace_trim', 'bonnet', 'mary_janes', 'puffy_sleeves'],
    popularity: 'Core',
    postCountEst: '155K'
  },
  {
    tag: 'armor',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Metallic or leather protective fantasy combat plating.',
    aliases: ['plate_armor', 'knight_armor', 'fantasy_armor'],
    relatedTags: ['shoulder_armor', 'breastplate', 'gauntlets', 'greaves', 'cape'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'shoulder_armor',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Articulated metal pauldrons protecting the shoulders.',
    aliases: ['pauldrons', 'spaulders'],
    relatedTags: ['armor', 'breastplate', 'gauntlets'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'witch_hat',
    domain: 'clothing',
    subcategory: 'Traditional & Fantasy',
    description: 'Wide-brimmed conical pointed hat worn by witches and mages.',
    aliases: ['wizard_hat', 'pointed_hat', 'mage_hat'],
    relatedTags: ['witch', 'cape', 'robe', 'staff'],
    popularity: 'Core',
    postCountEst: '230K'
  },

  // Tops, Outerwear & Sleeves
  {
    tag: 'collared_shirt',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Button-up dress shirt or blouse with a folded collar.',
    aliases: ['dress_shirt', 'button-up_shirt', 'blouse'],
    relatedTags: ['necktie', 'bowtie', 'blazer', 'vest'],
    popularity: 'Core',
    postCountEst: '1.1M'
  },
  {
    tag: 'hoodie',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Casual hooded sweatshirt or zip-up jacket with drawstrings.',
    aliases: ['hooded_sweatshirt', 'hooded_jacket'],
    relatedTags: ['hood_up', 'hood_down', 'oversized_clothes', 'streetwear'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'cardigan',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Knitted open-front or button-front sweater often worn over a school shirt.',
    aliases: ['knit_cardigan', 'school_cardigan'],
    relatedTags: ['sweater', 'school_uniform', 'collared_shirt'],
    popularity: 'Core',
    postCountEst: '235K'
  },
  {
    tag: 'ribbed_sweater',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Form-fitting knit sweater with vertical ribbed fabric texture.',
    aliases: ['vertical-striped_sweater', 'knit_sweater'],
    relatedTags: ['turtleneck_sweater', 'sweater', 'sleeveless_turtleneck'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'turtleneck',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'High close-fitting collar that folds over and covers the neck.',
    aliases: ['high_neck', 'polo_neck'],
    relatedTags: ['turtleneck_sweater', 'sleeveless_turtleneck', 'ribbed_sweater'],
    popularity: 'Core',
    postCountEst: '380K'
  },
  {
    tag: 'crop_top',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Short top cut above the waist to expose the midriff and navel.',
    aliases: ['midriff_top', 'cropped_shirt'],
    relatedTags: ['midriff', 'navel', 'short_shorts', ' jacket'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'off-shoulder',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Garment neckline designed or slipped down to leave one or both shoulders bare.',
    aliases: ['off_shoulder', 'bare_shoulders_top'],
    relatedTags: ['bare_shoulders', 'collarbone', 'single_off_shoulder'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'detached_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Separate sleeves worn on the arms leaving the shoulders and upper arms exposed (classic anime/fantasy trope).',
    aliases: ['separate_sleeves', 'arm_sleeves'],
    relatedTags: ['bare_shoulders', 'wide_sleeves', 'miko'],
    popularity: 'Core',
    postCountEst: '760K'
  },
  {
    tag: 'wide_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Broad, flared sleeves characteristic of kimono, miko robes, or wizard garments.',
    aliases: ['bell_sleeves', 'kimono_sleeves', 'furisode_sleeves'],
    relatedTags: ['kimono', 'detached_sleeves', 'long_sleeves'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'puffy_sleeves',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Gathered, voluminous balloon-shaped sleeves at the shoulder or cuff.',
    aliases: ['puff_sleeves', 'balloon_sleeves'],
    relatedTags: ['puffy_short_sleeves', 'frills', 'gothic_lolita', 'maid'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'sleeves_past_wrists',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Oversized long sleeves that cover part or all of the hands (moe sleeves).',
    aliases: ['moe_sleeves', 'oversized_sleeves'],
    relatedTags: ['sleeves_past_fingers', 'long_sleeves', 'oversized_clothes'],
    popularity: 'Core',
    postCountEst: '580K'
  },
  {
    tag: 'jacket_on_shoulders',
    domain: 'clothing',
    subcategory: 'Tops, Jackets & Sleeves',
    description: 'Coat or blazer draped cape-style over the shoulders without putting arms through the sleeves.',
    aliases: ['coat_on_shoulders', 'draped_jacket'],
    relatedTags: ['jacket', 'coat', 'military_uniform'],
    popularity: 'Core',
    postCountEst: '125K'
  },

  // Dresses, Skirts & Bottoms
  {
    tag: 'dress',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'One-piece garment combining bodice and skirt.',
    aliases: ['gown', 'frock'],
    relatedTags: ['white_dress', 'black_dress', 'sundress', 'frilled_dress'],
    popularity: 'Core',
    postCountEst: '1.9M'
  },
  {
    tag: 'sundress',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Light, airy sleeveless summer dress, often paired with a straw hat.',
    aliases: ['summer_dress'],
    relatedTags: ['white_dress', 'straw_hat', 'bare_shoulders'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'pleated_skirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Skirt with crisp vertical folds, standard in Japanese school uniforms and tennis outfits.',
    aliases: ['knife-pleat_skirt', 'uniform_skirt'],
    relatedTags: ['skirt', 'miniskirt', 'school_uniform', 'plaid_skirt'],
    popularity: 'Core',
    postCountEst: '920K'
  },
  {
    tag: 'miniskirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Short skirt with a hemline well above the knees.',
    aliases: ['short_skirt', 'mini_skirt'],
    relatedTags: ['pleated_skirt', 'thighhighs', 'zettai_ryouiki'],
    popularity: 'Core',
    postCountEst: '880K'
  },
  {
    tag: 'plaid_skirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Skirt patterned with intersecting tartan or checkered stripes.',
    aliases: ['tartan_skirt', 'checkered_skirt'],
    relatedTags: ['pleated_skirt', 'school_uniform', 'blazer'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'high-waist_skirt',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Skirt whose waistband sits high above the natural hips, often paired with suspenders or a tucked-in blouse.',
    aliases: ['high_waisted_skirt', 'corset_skirt'],
    relatedTags: ['suspenders', 'collared_shirt', 'pleated_skirt'],
    popularity: 'Common',
    postCountEst: '140K'
  },
  {
    tag: 'short_shorts',
    domain: 'clothing',
    subcategory: 'Dresses, Skirts & Bottoms',
    description: 'Tight or high-cut casual shorts exposing the full length of the thighs.',
    aliases: ['hotpants', 'daisy_dukes', 'booty_shorts'],
    relatedTags: ['denim_shorts', 'shorts', 'crop_top'],
    popularity: 'Core',
    postCountEst: '320K'
  },

  // Legwear & Footwear
  {
    tag: 'thighhighs',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Stockings or socks extending past the knees up to the mid- or upper-thigh.',
    aliases: ['thigh_high_socks', 'over-knee_socks', 'stockings'],
    relatedTags: ['black_thighhighs', 'white_thighhighs', 'striped_thighhighs', 'zettai_ryouiki'],
    popularity: 'Core',
    postCountEst: '1.8M'
  },
  {
    tag: 'zettai_ryouiki',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'The exposed segment of bare thigh skin visible between the hem of a miniskirt/shorts and the top of thighhigh socks.',
    aliases: ['absolute_territory', 'thigh_gap_stockings'],
    relatedTags: ['thighhighs', 'miniskirt', 'skindentation'],
    popularity: 'Core',
    postCountEst: '390K',
    illustriousNote: 'Well-trained tag in SDXL Illustrious that naturally frames upper-thigh spacing.'
  },
  {
    tag: 'skindentation',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Subtle elastic compression of soft thigh skin at the top cuff of thighhighs or garter straps.',
    aliases: ['thigh_squeeze', 'stocking_indentation'],
    relatedTags: ['thighhighs', 'zettai_ryouiki', 'garter_straps'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'kneehighs',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Socks reaching just below or right at the kneecap, standard with Japanese school uniforms.',
    aliases: ['knee_socks', 'high_socks'],
    relatedTags: ['school_uniform', 'loafers', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '370K'
  },
  {
    tag: 'pantyhose',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Sheer nylon tights covering the feet and legs continuously up to the waist.',
    aliases: ['tights', 'nylons', 'sheer_tights'],
    relatedTags: ['black_pantyhose', 'white_pantyhose', 'bodystocking'],
    popularity: 'Core',
    postCountEst: '620K'
  },
  {
    tag: 'bobby_socks',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Short ankle-length socks, often white or frilled.',
    aliases: ['ankle_socks', 'short_socks'],
    relatedTags: ['sneakers', 'mary_janes', 'loafers'],
    popularity: 'Common',
    postCountEst: '145K'
  },
  {
    tag: 'loafers',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Slip-on leather dress shoes worn with Japanese school uniforms.',
    aliases: ['school_shoes', 'penny_loafers'],
    relatedTags: ['school_uniform', 'kneehighs', 'mary_janes'],
    popularity: 'Core',
    postCountEst: '235K'
  },
  {
    tag: 'mary_janes',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Rounded closed-toe shoes with a strap fastened across the instep.',
    aliases: ['strap_shoes', 'doll_shoes'],
    relatedTags: ['gothic_lolita', 'thighhighs', 'bobby_socks'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'high_heels',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Footwear with an elevated narrow heel.',
    aliases: ['heels', 'stiletto_heels', 'pumps'],
    relatedTags: ['pantyhose', 'dress', 'heeled_boots'],
    popularity: 'Core',
    postCountEst: '610K'
  },
  {
    tag: 'thigh_boots',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Tall boots extending above the knee onto the thigh.',
    aliases: ['over-the-knee_boots', 'thighhigh_boots'],
    relatedTags: ['boots', 'knee_boots', 'high_heels'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'sneakers',
    domain: 'clothing',
    subcategory: 'Legwear & Footwear',
    description: 'Athletic trainers or casual canvas shoes.',
    aliases: ['trainers', 'running_shoes', 'tennis_shoes'],
    relatedTags: ['sportswear', 'hoodie', 'bobby_socks'],
    popularity: 'Core',
    postCountEst: '240K'
  },

  // Accessories, Headwear & Eyewear
  {
    tag: 'glasses',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Corrective eyeglasses or spectacles (megane).',
    aliases: ['eyeglasses', 'spectacles', 'megane'],
    relatedTags: ['semi-rimless_glasses', 'round_glasses', 'under-rim_glasses', 'adjusting_glasses'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'round_glasses',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Circular wire-frame or acetate spectacles.',
    aliases: ['circular_glasses'],
    relatedTags: ['glasses', 'sunglasses'],
    popularity: 'Common',
    postCountEst: '125K'
  },
  {
    tag: 'sunglasses',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Tinted dark eyewear worn on the face or rested on the head.',
    aliases: ['shades', 'tinted_glasses'],
    relatedTags: ['eyewear_on_head', 'glasses'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'hair_ribbon',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Decorative cloth ribbon tied into the hair or securing ponytails/twintails.',
    aliases: ['ribbon_in_hair'],
    relatedTags: ['hair_bow', 'twintails', 'ponytail'],
    popularity: 'Core',
    postCountEst: '980K'
  },
  {
    tag: 'hair_bow',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Bow-shaped ribbon ornament worn on the head.',
    aliases: ['bow_in_hair'],
    relatedTags: ['hair_ribbon', 'hairband', 'bowtie'],
    popularity: 'Core',
    postCountEst: '790K'
  },
  {
    tag: 'hairband',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Rigid Alice band or cloth headband worn across the crown of the head.',
    aliases: ['headband', 'alice_band'],
    relatedTags: ['hair_ornament', 'maid_headdress'],
    popularity: 'Core',
    postCountEst: '610K'
  },
  {
    tag: 'hairclip',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Decorative barrette or clip pinning back bangs or sidelocks.',
    aliases: ['barrette', 'hair_pin_clip'],
    relatedTags: ['hairpin', 'hair_ornament'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'hair_flower',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Blossom or floral ornament tucked into the hair.',
    aliases: ['flower_in_hair', 'floral_hairpin'],
    relatedTags: ['hair_ornament', 'flower', 'kimono'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'beret',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Soft round flat-crowned cap worn tilted to one side.',
    aliases: ['artist_hat', 'french_beret'],
    relatedTags: ['hat', 'peaked_cap', 'capelet'],
    popularity: 'Core',
    postCountEst: '215K'
  },
  {
    tag: 'straw_hat',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Woven sun hat worn in summer or pastoral scenes.',
    aliases: ['sun_hat', 'boater_hat'],
    relatedTags: ['sundress', 'summer', 'hat_ribbon'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'choker',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Close-fitting ribbon, velvet, or leather band worn around the neck.',
    aliases: ['neck_ribbon', 'neck_band'],
    relatedTags: ['black_choker', 'collar', 'necklace'],
    popularity: 'Core',
    postCountEst: '680K'
  },
  {
    tag: 'necktie',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Long tie knotted at the collar of a dress shirt.',
    aliases: ['tie'],
    relatedTags: ['collared_shirt', 'school_uniform', 'blazer'],
    popularity: 'Core',
    postCountEst: '790K'
  },
  {
    tag: 'scarf',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Warm knitted or cloth wrap worn around the neck.',
    aliases: ['muffler', 'winter_scarf'],
    relatedTags: ['red_scarf', 'winter_clothes', 'coat', 'snow'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'gloves',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Hand coverings in leather, lace, or cloth.',
    aliases: ['handwear'],
    relatedTags: ['white_gloves', 'black_gloves', 'fingerless_gloves', 'elbow_gloves'],
    popularity: 'Core',
    postCountEst: '1.4M'
  },
  {
    tag: 'fingerless_gloves',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Sporty or tactical gloves with open finger tips.',
    aliases: ['half-finger_gloves', 'driving_gloves'],
    relatedTags: ['gloves', 'black_gloves', 'wristbands'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'elbow_gloves',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Long formal or bridal opera gloves reaching the elbows or upper arms.',
    aliases: ['opera_gloves', 'long_gloves'],
    relatedTags: ['gloves', 'white_gloves', 'dress', 'bare_shoulders'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'headphones',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Over-ear audio headphones worn over the ears or around the neck.',
    aliases: ['headset', 'earphones'],
    relatedTags: ['headphones_around_neck', 'interlocked_fingers', 'music'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'earrings',
    domain: 'clothing',
    subcategory: 'Headwear, Eyewear & Accessories',
    description: 'Jewelry studs, hoops, or dangling pendants worn on the earlobes.',
    aliases: ['ear_jewelry', 'hoop_earrings'],
    relatedTags: ['jewelry', 'necklace', 'single_earring'],
    popularity: 'Core',
    postCountEst: '590K'
  }
];
