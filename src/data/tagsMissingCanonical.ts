import { BooruTag } from '../types/lexicon';

export const MISSING_CANONICAL_TAGS: BooruTag[] = [
  {
    "tag": "shirt",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Generic shirt. Parent of the specific shirt tags already in the lexicon.",
    "aliases": [
      "button-up_shirt"
    ],
    "relatedTags": [
      "white_shirt",
      "t-shirt",
      "collared_shirt",
      "dress_shirt",
      "open_shirt"
    ],
    "popularity": "Core",
    "postCountEst": "1.4M",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "white_shirt",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Plain white shirt, the usual school-uniform and dress-shirt base.",
    "aliases": [
      "white_blouse"
    ],
    "relatedTags": [
      "shirt",
      "dress_shirt",
      "school_uniform",
      "collared_shirt"
    ],
    "popularity": "Core",
    "postCountEst": "629K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "blouse",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Loose feminine button-front or pullover blouse, softer than a dress shirt.",
    "aliases": [
      "open_blouse"
    ],
    "relatedTags": [
      "shirt",
      "dress_shirt",
      "office_lady",
      "frills"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "open_blouse is an alias of open_shirt, not of blouse."
  },
  {
    "tag": "dress_shirt",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Formal button-front collared shirt, usually long-sleeved, worn with a suit or necktie.",
    "aliases": [
      "suit_shirt"
    ],
    "relatedTags": [
      "shirt",
      "white_shirt",
      "collared_shirt",
      "necktie",
      "business_suit"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "camisole",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Thin-strapped sleeveless undershirt or lingerie top.",
    "aliases": [
      "cami"
    ],
    "relatedTags": [
      "strapless",
      "underwear",
      "bra",
      "negligee"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "tube_top",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Strapless band of fabric around the chest, with no neckline straps or sleeves.",
    "aliases": [
      "boob_tube"
    ],
    "relatedTags": [
      "strapless",
      "bandeau",
      "crop_top",
      "midriff"
    ],
    "popularity": "Common",
    "postCountEst": "27K",
    "illustriousNote": "Implicates strapless. Count from a Danbooru tag index, not the Feb 2024 glossary."
  },
  {
    "tag": "halterneck",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Top or dress whose straps tie behind the neck, leaving the shoulders and back bare.",
    "aliases": [
      "halter_neck"
    ],
    "relatedTags": [
      "strapless",
      "bare_shoulders",
      "dress",
      "bikini"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "strapless",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Top, dress, or bustier with no shoulder straps and no neckline.",
    "aliases": [
      "strapless_top"
    ],
    "relatedTags": [
      "tube_top",
      "bare_shoulders",
      "dress",
      "strapless_bra"
    ],
    "popularity": "Core",
    "postCountEst": "249K",
    "illustriousNote": "Wiki count is over 249k. tube_top, strapless_dress, and strapless_bra implicate this."
  },
  {
    "tag": "open_shirt",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Shirt or blouse unbuttoned and left hanging open.",
    "aliases": [
      "open_blouse"
    ],
    "relatedTags": [
      "unbuttoned",
      "open_clothes",
      "shirt",
      "naked_shirt"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "open_blouse is an alias of this tag."
  },
  {
    "tag": "jacket",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Generic jacket. Parent of track jackets and shoulder-draped jackets.",
    "aliases": [
      "coat_jacket"
    ],
    "relatedTags": [
      "open_jacket",
      "track_jacket",
      "coat",
      "hood"
    ],
    "popularity": "Core",
    "postCountEst": "700K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "open_jacket",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Jacket worn open rather than zipped or buttoned shut.",
    "aliases": [
      "unzipped_jacket"
    ],
    "relatedTags": [
      "jacket",
      "open_clothes",
      "hoodie"
    ],
    "popularity": "Core",
    "postCountEst": "172K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "coat",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Long outer coat, heavier and longer than a jacket.",
    "aliases": [
      "overcoat"
    ],
    "relatedTags": [
      "jacket",
      "cloak",
      "scarf",
      "fur_trim"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "cloak",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Full cloak wrapped around the body, distinct from a short cape.",
    "aliases": [
      "hooded_cloak"
    ],
    "relatedTags": [
      "cape",
      "capelet",
      "hood",
      "armor"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hood",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "The hood itself, attached to a jacket, cloak, or sweatshirt.",
    "aliases": [
      "hooded"
    ],
    "relatedTags": [
      "hoodie",
      "hood_up",
      "hood_down",
      "animal_hood"
    ],
    "popularity": "Core",
    "postCountEst": "236K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "hood_up",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Hood pulled up over the head.",
    "aliases": [
      "hood_pulled_up"
    ],
    "relatedTags": [
      "hood",
      "hood_down",
      "hoodie"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "hood_down",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Hood resting down on the back instead of covering the head.",
    "aliases": [
      "hood_lowered"
    ],
    "relatedTags": [
      "hood",
      "hood_up",
      "hoodie"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "animal_hood",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Hood shaped like an animal head, with ears or a snout built into the fabric.",
    "aliases": [
      "bear_hood",
      "cat_hood"
    ],
    "relatedTags": [
      "hood",
      "animal_ears",
      "fake_animal_ears",
      "hoodie"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "fur_trim",
    "domain": "clothing",
    "subcategory": "Tops, Jackets & Sleeves",
    "description": "Fur edging on a collar, cuffs, hood, or hem. Not a furry body.",
    "aliases": [
      "fur_trimmed"
    ],
    "relatedTags": [
      "coat",
      "hood",
      "cape",
      "jacket"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "skirt",
    "domain": "clothing",
    "subcategory": "Dresses, Skirts & Bottoms",
    "description": "Generic skirt. Parent of pleated, mini, plaid, pencil, and micro skirts.",
    "aliases": [
      "skirts"
    ],
    "relatedTags": [
      "pleated_skirt",
      "miniskirt",
      "plaid_skirt",
      "pencil_skirt"
    ],
    "popularity": "Core",
    "postCountEst": "1.3M",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "socks",
    "domain": "clothing",
    "subcategory": "Legwear & Footwear",
    "description": "Generic socks. Parent of ankle, loose, and knee-high variants.",
    "aliases": [
      "ankle_socks"
    ],
    "relatedTags": [
      "loose_socks",
      "kneehighs",
      "thighhighs",
      "shoes"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "leggings",
    "domain": "clothing",
    "subcategory": "Legwear & Footwear",
    "description": "Tight full-length leggings, opaque and closer to pants than to pantyhose.",
    "aliases": [
      "yoga_pants"
    ],
    "relatedTags": [
      "pantyhose",
      "bike_shorts",
      "pants",
      "skintight"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "shoes",
    "domain": "clothing",
    "subcategory": "Legwear & Footwear",
    "description": "Generic shoes. Parent of loafers, sneakers, heels, and boots.",
    "aliases": [
      "footwear"
    ],
    "relatedTags": [
      "loafers",
      "sneakers",
      "high_heels",
      "boots",
      "barefoot"
    ],
    "popularity": "Core",
    "postCountEst": "344K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "swimsuit",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Generic swimsuit. Parent of bikini, school swimsuit, and one-piece tags.",
    "aliases": [
      "swimwear"
    ],
    "relatedTags": [
      "bikini",
      "school_swimsuit",
      "one-piece_swimsuit",
      "competition_swimsuit"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "underwear",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Generic underwear. Parent of bra and panties.",
    "aliases": [
      "undergarments"
    ],
    "relatedTags": [
      "bra",
      "panties",
      "lingerie",
      "no_bra",
      "no_panties"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "bikini_top",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "The top half of a bikini, separate from the bottom.",
    "aliases": [
      "bikini_bra"
    ],
    "relatedTags": [
      "bikini",
      "bikini_bottom",
      "strapless",
      "underboob"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "bikini_bottom",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "The bottom half of a bikini, separate from the top.",
    "aliases": [
      "bikini_panties"
    ],
    "relatedTags": [
      "bikini",
      "bikini_top",
      "side-tie_bikini_bottom",
      "thong"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "chemise",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Short loose lingerie slip, lighter than a babydoll.",
    "aliases": [
      "chemise_dress"
    ],
    "relatedTags": [
      "lingerie",
      "negligee",
      "babydoll",
      "see-through"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "negligee",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Sheer nightgown or lingerie robe worn over the body.",
    "aliases": [
      "nightie"
    ],
    "relatedTags": [
      "nightgown",
      "see-through",
      "lingerie",
      "chemise"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "nightgown",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Loose gown meant for sleeping, longer and plainer than a negligee.",
    "aliases": [
      "night_dress"
    ],
    "relatedTags": [
      "pajamas",
      "negligee",
      "see-through"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "pajamas",
    "domain": "clothing",
    "subcategory": "Swimwear, Lingerie & Bodysuits",
    "description": "Matched sleepwear set, usually a loose shirt with pants or shorts.",
    "aliases": [
      "pyjamas",
      "pajama"
    ],
    "relatedTags": [
      "nightgown",
      "hoodie",
      "shorts"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "pyjamas and pajama are aliases."
  },
  {
    "tag": "strap_slip",
    "domain": "clothing",
    "subcategory": "Suggestive & Disheveled State",
    "description": "A shoulder strap that has slipped down the upper arm.",
    "aliases": [
      "slipped_strap"
    ],
    "relatedTags": [
      "bra_strap",
      "camisole",
      "off_shoulder",
      "bare_shoulders"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "clothing_cutout",
    "domain": "clothing",
    "subcategory": "Suggestive & Disheveled State",
    "description": "Generic opening cut into a garment. Parent of cleavage and side cutouts.",
    "aliases": [
      "cutout"
    ],
    "relatedTags": [
      "cleavage_cutout",
      "shoulder_cutout",
      "back_cutout",
      "side_cutout"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "shoulder_cutout",
    "domain": "clothing",
    "subcategory": "Suggestive & Disheveled State",
    "description": "Opening over the shoulder cap of an otherwise sleeved garment.",
    "aliases": [
      "shoulder_window"
    ],
    "relatedTags": [
      "clothing_cutout",
      "bare_shoulders",
      "off_shoulder"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "back_cutout",
    "domain": "clothing",
    "subcategory": "Suggestive & Disheveled State",
    "description": "Opening exposing the upper or mid back.",
    "aliases": [
      "open_back"
    ],
    "relatedTags": [
      "clothing_cutout",
      "backless_outfit",
      "bare_back"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "plaid",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Tartan or plaid pattern on any garment. Parent of plaid_skirt.",
    "aliases": [
      "tartan"
    ],
    "relatedTags": [
      "plaid_skirt",
      "school_uniform",
      "striped"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "striped",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Stripe pattern on any garment. Parent of striped panties and thighhighs.",
    "aliases": [
      "stripes"
    ],
    "relatedTags": [
      "striped_panties",
      "thighhighs",
      "horizontal_stripes"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "polka_dot",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Regular dot print on clothing or fabric.",
    "aliases": [
      "polka_dots"
    ],
    "relatedTags": [
      "dress",
      "bikini",
      "skirt"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "argyle",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Diamond argyle knit pattern, usually on sweaters or socks.",
    "aliases": [
      "argyle_pattern"
    ],
    "relatedTags": [
      "sweater",
      "socks",
      "thighhighs"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "checkered",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Checkerboard print, distinct from tartan plaid.",
    "aliases": [
      "checkerboard",
      "gingham"
    ],
    "relatedTags": [
      "plaid",
      "skirt",
      "dress"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "lace",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Lace fabric itself, not just a lace trim edge.",
    "aliases": [
      "lace_fabric"
    ],
    "relatedTags": [
      "lace_trim",
      "see-through",
      "lingerie",
      "gloves"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "animal_print",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Leopard, zebra, or other animal print on clothing.",
    "aliases": [
      "leopard_print"
    ],
    "relatedTags": [
      "bikini",
      "dress",
      "skirt",
      "cow_print"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "floral_print",
    "domain": "clothing",
    "subcategory": "Prints & Patterns",
    "description": "Flower print on clothing, abstract or realistic.",
    "aliases": [
      "floral_pattern",
      "flower_print"
    ],
    "relatedTags": [
      "dress",
      "kimono",
      "skirt",
      "bikini"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hat",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Generic hat. Parent of witch hats, berets, caps, and straw hats.",
    "aliases": [
      "hats"
    ],
    "relatedTags": [
      "witch_hat",
      "beret",
      "straw_hat",
      "peaked_cap",
      "baseball_cap"
    ],
    "popularity": "Core",
    "postCountEst": "1.0M",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "baseball_cap",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Soft cap with a stiff forward bill, worn forward or backward.",
    "aliases": [
      "baseball_hat"
    ],
    "relatedTags": [
      "hat",
      "peaked_cap",
      "hoodie"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "santa_hat",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Red Santa hat with a white brim and pompon.",
    "aliases": [
      "santa_cap"
    ],
    "relatedTags": [
      "hat",
      "santa",
      "christmas"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "crown",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Metal royal crown, heavier than a tiara.",
    "aliases": [
      "royal_crown"
    ],
    "relatedTags": [
      "tiara",
      "princess",
      "jewelry",
      "gold_trim"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "tiara",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Light jeweled circlet or half-crown worn on the hair.",
    "aliases": [
      "diadem"
    ],
    "relatedTags": [
      "crown",
      "princess",
      "hair_ornament",
      "jewelry"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "mob_cap",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Frilled maid or maid-cafe cap sitting on the crown of the head.",
    "aliases": [
      "maid_cap"
    ],
    "relatedTags": [
      "maid",
      "maid_headdress",
      "frills"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "nurse_cap",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Small white nurse cap pinned to the hair.",
    "aliases": [
      "nurse_hat"
    ],
    "relatedTags": [
      "nurse",
      "white_dress"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "mask",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Generic face mask. Parent of surgical, fox, and masquerade masks.",
    "aliases": [
      "face_mask"
    ],
    "relatedTags": [
      "surgical_mask",
      "eyepatch"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "surgical_mask",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Pleated medical mask covering the nose and mouth.",
    "aliases": [
      "medical_mask"
    ],
    "relatedTags": [
      "mask",
      "nurse"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "goggles",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Protective goggles over the eyes or pushed onto the forehead.",
    "aliases": [
      "safety_goggles"
    ],
    "relatedTags": [
      "glasses",
      "eyewear_on_head",
      "science"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "monocle",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Single corrective lens worn over one eye.",
    "aliases": [
      "single_lens"
    ],
    "relatedTags": [
      "glasses",
      "formal"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "bow",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Generic bow. Parent of hair bows and bow ties. Not an archery bow.",
    "aliases": [
      "ribbon_bow"
    ],
    "relatedTags": [
      "hair_bow",
      "bowtie",
      "ribbon"
    ],
    "popularity": "Core",
    "postCountEst": "984K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded. Use bow_(weapon) for archery."
  },
  {
    "tag": "ribbon",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Generic ribbon. Parent of hair ribbons and thigh ribbons.",
    "aliases": [
      "ribbons"
    ],
    "relatedTags": [
      "hair_ribbon",
      "thigh_ribbon",
      "bow"
    ],
    "popularity": "Core",
    "postCountEst": "937K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "jewelry",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Generic jewelry. Parent of earrings, necklaces, bracelets, and rings.",
    "aliases": [
      "jewellery"
    ],
    "relatedTags": [
      "earrings",
      "necklace",
      "bracelet",
      "ring"
    ],
    "popularity": "Core",
    "postCountEst": "830K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "necklace",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Chain or cord necklace around the neck.",
    "aliases": [
      "neck_chain"
    ],
    "relatedTags": [
      "jewelry",
      "pendant",
      "choker",
      "cross_necklace"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "pendant",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Hanging charm or gem on a necklace.",
    "aliases": [
      "pendant_necklace"
    ],
    "relatedTags": [
      "necklace",
      "jewelry"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "cross_necklace",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Necklace with a cross pendant.",
    "aliases": [
      "crucifix"
    ],
    "relatedTags": [
      "necklace",
      "nun",
      "jewelry"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bracelet",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Band worn around the wrist, not a cuff or watch.",
    "aliases": [
      "bangle"
    ],
    "relatedTags": [
      "jewelry",
      "wrist_cuffs",
      "gloves"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "wrist_cuffs",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Wide cuffs at the wrists, including playboy-bunny cuffs.",
    "aliases": [
      "wrist_cuff"
    ],
    "relatedTags": [
      "bracelet",
      "playboy_bunny",
      "detached_sleeves"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bell",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Small bell on a collar, ribbon, or hair tie.",
    "aliases": [
      "jingle_bell"
    ],
    "relatedTags": [
      "collar",
      "cowbell",
      "hair_bell",
      "cat_ears"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "cowbell",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Large bell hanging from a collar, typical of cow-girl outfits.",
    "aliases": [
      "cow_bell"
    ],
    "relatedTags": [
      "bell",
      "collar",
      "cow_girl"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "ring",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Finger ring. Not a halo.",
    "aliases": [
      "finger_ring"
    ],
    "relatedTags": [
      "jewelry",
      "earrings"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hair_tubes",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Long hollow tubes binding twin tails, the Vocaloid-style hair accessory.",
    "aliases": [
      "hair_pipes"
    ],
    "relatedTags": [
      "twintails",
      "hair_ornament",
      "detached_sleeves"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "hair_rings",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Rings binding a section of hair, often on twin tails.",
    "aliases": [
      "hair_ring"
    ],
    "relatedTags": [
      "hair_ornament",
      "twintails",
      "hair_bobbles"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hair_bobbles",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Spherical hair ties, often on short twin tails.",
    "aliases": [
      "hair_baubles"
    ],
    "relatedTags": [
      "twintails",
      "hair_ornament",
      "hair_rings"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hair_bell",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Bell attached to the hair or a hair tie.",
    "aliases": [
      "hair_bells"
    ],
    "relatedTags": [
      "bell",
      "hair_ornament",
      "twintails"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "scrunchie",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Fabric-covered elastic hair tie, worn in the hair or on the wrist.",
    "aliases": [
      "hair_tie_scrunchie"
    ],
    "relatedTags": [
      "hair_scrunchie",
      "ponytail",
      "hair_ornament"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hair_scrunchie",
    "domain": "clothing",
    "subcategory": "Headwear, Eyewear & Accessories",
    "description": "Scrunchie actually fastening the hair, usually a ponytail or twin tails.",
    "aliases": [
      "scrunchie_in_hair"
    ],
    "relatedTags": [
      "scrunchie",
      "ponytail",
      "twintails",
      "hair_ornament"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Implicates scrunchie and hair_ornament."
  },
  {
    "tag": "nail_polish",
    "domain": "character",
    "subcategory": "Skin, Tanlines, Tattoos & Piercings",
    "description": "Painted fingernails or toenails.",
    "aliases": [
      "manicure",
      "nail_color"
    ],
    "relatedTags": [
      "fingernails",
      "long_fingernails",
      "gyaru"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "fingernails",
    "domain": "character",
    "subcategory": "Body Proportions & Anatomy",
    "description": "Visible fingernails. Parent of long and sharp nails.",
    "aliases": [
      "fingernail"
    ],
    "relatedTags": [
      "long_fingernails",
      "sharp_fingernails",
      "nail_polish"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "Parent of sharp_fingernails, already in the lexicon."
  },
  {
    "tag": "long_fingernails",
    "domain": "character",
    "subcategory": "Body Proportions & Anatomy",
    "description": "Fingernails extending past the fingertips.",
    "aliases": [
      "long_nails"
    ],
    "relatedTags": [
      "fingernails",
      "nail_polish",
      "sharp_fingernails"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "4girls",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Exactly four female characters in the frame.",
    "aliases": [
      "four_girls"
    ],
    "relatedTags": [
      "3girls",
      "5girls",
      "6+girls",
      "multiple_girls"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "5girls",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Exactly five female characters in the frame.",
    "aliases": [
      "five_girls"
    ],
    "relatedTags": [
      "4girls",
      "6+girls",
      "multiple_girls"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "6+girls",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Six or more female characters. Danbooru stops numbering here.",
    "aliases": [
      "7girls",
      "8girls",
      "9girls"
    ],
    "relatedTags": [
      "5girls",
      "multiple_girls"
    ],
    "popularity": "Core",
    "postCountEst": "108K",
    "illustriousNote": "Wiki count is over 108k. 7girls, 8girls, and 9girls alias to this."
  },
  {
    "tag": "3boys",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Exactly three male characters in the frame.",
    "aliases": [
      "three_boys"
    ],
    "relatedTags": [
      "2boys",
      "4boys",
      "multiple_boys"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "4boys",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Exactly four male characters in the frame.",
    "aliases": [
      "four_boys"
    ],
    "relatedTags": [
      "3boys",
      "6+boys",
      "multiple_boys"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "6+boys",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "Six or more male characters. Same bucket rule as 6+girls.",
    "aliases": [
      "7boys",
      "8boys"
    ],
    "relatedTags": [
      "4boys",
      "multiple_boys"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "no_humans",
    "domain": "character",
    "subcategory": "Subject & Count",
    "description": "No human characters in the frame. Use for scenery, objects, and non-human subjects.",
    "aliases": [
      "no_people"
    ],
    "relatedTags": [
      "scenery",
      "solo",
      "1girl"
    ],
    "popularity": "Core",
    "postCountEst": "113K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "twin_drills",
    "domain": "character",
    "subcategory": "Hair Length & Style",
    "description": "A matched pair of drill ringlets. drill_hair is the generic parent.",
    "aliases": [
      "twin_drill_hair",
      "odango_drills"
    ],
    "relatedTags": [
      "drill_hair",
      "twintails",
      "ojou"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "side_braid",
    "domain": "character",
    "subcategory": "Hair Length & Style",
    "description": "A single braid worn to one side, over the shoulder or behind the ear.",
    "aliases": [
      "side_plait"
    ],
    "relatedTags": [
      "braid",
      "single_braid",
      "long_hair"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hair_over_eyes",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Bangs covering both eyes, or the eyes generally, rather than only one.",
    "aliases": [
      "hair_over_eyes_bangs"
    ],
    "relatedTags": [
      "hair_over_one_eye",
      "covered_eyes",
      "blunt_bangs"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "covered_eyes",
    "domain": "face_expressions",
    "subcategory": "Eyebrows, Eye Shapes & Eyelids",
    "description": "Eyes hidden by hair, a blindfold, or a shadow, with the lids not necessarily closed.",
    "aliases": [
      "hidden_eyes"
    ],
    "relatedTags": [
      "hair_over_eyes",
      "blindfold",
      "one_eye_covered"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "eyes_visible_through_hair",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Eyes readable through a curtain of bangs instead of fully hidden.",
    "aliases": [
      "eyes_through_hair"
    ],
    "relatedTags": [
      "hair_over_eyes",
      "covered_eyes",
      "blunt_bangs"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "v-bangs",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Bangs parted into a V over the forehead.",
    "aliases": [
      "v_bangs"
    ],
    "relatedTags": [
      "parted_bangs",
      "blunt_bangs",
      "hair_intakes"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "diagonal_bangs",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Bangs cut on a diagonal, longer on one side.",
    "aliases": [
      "asymmetric_fringe"
    ],
    "relatedTags": [
      "swept_bangs",
      "asymmetrical_bangs"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "colored_bangs",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "The whole fringe is a different color from the hair behind it.",
    "aliases": [
      "dyed_bangs"
    ],
    "relatedTags": [
      "split-color_hair",
      "multicolored_hair",
      "blunt_bangs"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Not for a small streak inside the bangs. dyed_bangs is an alias."
  },
  {
    "tag": "curtained_hair",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Fringe that arches up and then falls as the bangs part to the side.",
    "aliases": [
      "ribbon_bangs"
    ],
    "relatedTags": [
      "parted_bangs",
      "hair_intakes",
      "sidelocks"
    ],
    "popularity": "Specialized",
    "postCountEst": "est.",
    "illustriousNote": "ribbon_bangs is an alias."
  },
  {
    "tag": "colored_tips",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Hair abruptly dyed a second color at the very ends.",
    "aliases": [
      "dip-dyed_hair",
      "frosted_tips"
    ],
    "relatedTags": [
      "gradient_hair",
      "multicolored_hair",
      "streaked_hair"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Use gradient_hair if the change is gradual. Implicates multicolored_hair."
  },
  {
    "tag": "light_blue_hair",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Pale sky-blue hair, lighter than standard blue_hair.",
    "aliases": [
      "pale_blue_hair"
    ],
    "relatedTags": [
      "blue_hair",
      "aqua_hair",
      "silver_hair"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "dark_blue_hair",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Navy or deep blue hair, darker than standard blue_hair.",
    "aliases": [
      "navy_blue_hair"
    ],
    "relatedTags": [
      "blue_hair",
      "black_hair"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "light_brown_hair",
    "domain": "character",
    "subcategory": "Bangs & Hair Color",
    "description": "Light chestnut or honey-brown hair, distinct from blonde.",
    "aliases": [
      "light_brunette"
    ],
    "relatedTags": [
      "brown_hair",
      "blonde_hair"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "grey_eyes",
    "domain": "face_expressions",
    "subcategory": "Pupils, Irises & Eye Colors",
    "description": "Grey irises. Overlaps black_eyes and white_eyes when the lighting is ambiguous.",
    "aliases": [
      "gray_eyes",
      "silver_eyes"
    ],
    "relatedTags": [
      "blue_eyes",
      "white_eyes",
      "black_eyes"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "gray_eyes and silver_eyes are aliases. Do not add them as separate rows."
  },
  {
    "tag": "white_eyes",
    "domain": "face_expressions",
    "subcategory": "Pupils, Irises & Eye Colors",
    "description": "White or blank-white irises. Not the same as empty_eyes, which is missing catchlights.",
    "aliases": [
      "blank_white_eyes"
    ],
    "relatedTags": [
      "empty_eyes",
      "grey_eyes",
      "glowing_eyes"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "extra_eyes",
    "domain": "face_expressions",
    "subcategory": "Pupils, Irises & Eye Colors",
    "description": "More than two eyes on the face or body. Not a single cyclops eye.",
    "aliases": [
      "multiple_eyes"
    ],
    "relatedTags": [
      "third_eye",
      "one-eyed",
      "cyclops"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "facial_hair",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Generic facial hair. Parent of beards, mustaches, and stubble.",
    "aliases": [
      "face_hair"
    ],
    "relatedTags": [
      "beard",
      "mustache",
      "stubble",
      "goatee"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "beard",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Hair on the chin and jaw.",
    "aliases": [
      "full_beard"
    ],
    "relatedTags": [
      "facial_hair",
      "mustache",
      "stubble",
      "1boy"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "mustache",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Hair along the upper lip.",
    "aliases": [
      "moustache"
    ],
    "relatedTags": [
      "facial_hair",
      "beard",
      "goatee"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Implicates facial_hair."
  },
  {
    "tag": "stubble",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Short unshaven growth on the jaw or lip.",
    "aliases": [
      "five_o'clock_shadow"
    ],
    "relatedTags": [
      "facial_hair",
      "beard",
      "mustache"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "goatee",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Chin beard with a disconnected mustache, or a chin-only tuft.",
    "aliases": [
      "chin_beard"
    ],
    "relatedTags": [
      "beard",
      "mustache",
      "facial_hair"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "sideburns",
    "domain": "face_expressions",
    "subcategory": "Facial Hair",
    "description": "Hair grown down the sides of the face in front of the ears.",
    "aliases": [
      "side_burns"
    ],
    "relatedTags": [
      "facial_hair",
      "beard"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "muscular",
    "domain": "character",
    "subcategory": "Body Proportions & Anatomy",
    "description": "Visible muscle mass on any gender. Broader than muscular_female.",
    "aliases": [
      "muscled"
    ],
    "relatedTags": [
      "muscular_female",
      "toned",
      "abs",
      "pectorals"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "pectorals",
    "domain": "character",
    "subcategory": "Body Proportions & Anatomy",
    "description": "Defined chest muscles, usually on a male or muscular torso.",
    "aliases": [
      "pecs"
    ],
    "relatedTags": [
      "muscular",
      "abs",
      "1boy",
      "bara"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bara",
    "domain": "character",
    "subcategory": "Body Proportions & Anatomy",
    "description": "Muscular adult male build and styling, often with facial hair.",
    "aliases": [
      "muscle_male"
    ],
    "relatedTags": [
      "muscular",
      "1boy",
      "beard",
      "pectorals"
    ],
    "popularity": "Specialized",
    "postCountEst": "est."
  },
  {
    "tag": "knight",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Armored medieval knight.",
    "aliases": [
      "knight_armor"
    ],
    "relatedTags": [
      "armor",
      "breastplate",
      "sword",
      "cape"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "princess",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Princess archetype, usually a gown, tiara, or crown.",
    "aliases": [
      "princess_dress"
    ],
    "relatedTags": [
      "tiara",
      "crown",
      "dress",
      "jewelry"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "samurai",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Japanese samurai, usually armor and a sword.",
    "aliases": [
      "bushi"
    ],
    "relatedTags": [
      "katana",
      "armor",
      "japanese_clothes",
      "hakama"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "waitress",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Cafe or restaurant server in an apron or uniform.",
    "aliases": [
      "server"
    ],
    "relatedTags": [
      "apron",
      "maid",
      "cafe"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "police",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Police officer. The person, not only the uniform.",
    "aliases": [
      "police_officer"
    ],
    "relatedTags": [
      "military_uniform",
      "peaked_cap"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "teacher",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Schoolteacher, often with a pointer, glasses, or a suit.",
    "aliases": [
      "sensei"
    ],
    "relatedTags": [
      "glasses",
      "office_lady",
      "classroom",
      "suit"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "santa",
    "domain": "character",
    "subcategory": "Archetypes & Occupations",
    "description": "Santa Claus costume or character.",
    "aliases": [
      "santa_claus"
    ],
    "relatedTags": [
      "santa_hat",
      "beard",
      "coat"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "^_^",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "Closed eyes drawn as an upward peak, almost always a smile.",
    "aliases": [
      "^^"
    ],
    "relatedTags": [
      "closed_eyes",
      "smile",
      ">_<"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "^^ is an alias. Implicates closed_eyes. Use >_< if the eyes are squeezed shut."
  },
  {
    "tag": ">_<",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "Eyes squeezed into a literal greater-than less-than shape. Joy, strain, or embarrassment.",
    "aliases": [
      "><"
    ],
    "relatedTags": [
      "closed_eyes",
      "embarrassed",
      "^_^"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "Canonical form. The existing >< row is an alias. Prefer this tag."
  },
  {
    "tag": ":o",
    "domain": "face_expressions",
    "subcategory": "Mouth, Lips, Teeth & Tongue",
    "description": "Small round open mouth, the :o surprise or gasp shape.",
    "aliases": [
      "small_open_mouth"
    ],
    "relatedTags": [
      "open_mouth",
      "surprised",
      "parted_lips"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": ";d",
    "domain": "face_expressions",
    "subcategory": "Mouth, Lips, Teeth & Tongue",
    "description": "Winking grin, one eye shut and the mouth in a :d shape.",
    "aliases": [
      "wink_grin"
    ],
    "relatedTags": [
      "one_eye_closed",
      "grin",
      ":d"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "nosebleed",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "Blood trailing from the nose, the comic shorthand for impact or arousal.",
    "aliases": [
      "nose_bleed"
    ],
    "relatedTags": [
      "blush",
      "surprised",
      "embarrassed"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "heart",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "A heart symbol in the scene, separate from heart-shaped pupils.",
    "aliases": [
      "heart_symbol"
    ],
    "relatedTags": [
      "spoken_heart",
      "heart-shaped_pupils",
      "heart_censor"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "musical_note",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "Floating eighth-note symbol, usually humming or a light mood.",
    "aliases": [
      "eighth_note"
    ],
    "relatedTags": [
      "singing",
      "smile",
      "spoken_heart"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "spoken_ellipsis",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "An ellipsis spoken in a speech or thought bubble, a loss for words.",
    "aliases": [
      "spoken_..."
    ],
    "relatedTags": [
      "...",
      "spoken_heart",
      "embarrassed"
    ],
    "popularity": "Specialized",
    "postCountEst": "est.",
    "illustriousNote": "Implicates the ... tag."
  },
  {
    "tag": "...",
    "domain": "face_expressions",
    "subcategory": "Blush, Tears, Sweat & Emotion Symbols",
    "description": "Ellipsis symbol, the parent of spoken_ellipsis.",
    "aliases": [
      "ellipsis"
    ],
    "relatedTags": [
      "spoken_ellipsis",
      "spoken_heart"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hand_up",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "One hand raised. Not the same as both arms raised.",
    "aliases": [
      "one_hand_up"
    ],
    "relatedTags": [
      "arm_up",
      "arms_up",
      "waving"
    ],
    "popularity": "Core",
    "postCountEst": "265K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "arm_up",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "One arm raised. arms_up is both arms.",
    "aliases": [
      "one_arm_up"
    ],
    "relatedTags": [
      "hand_up",
      "arms_up",
      "stretching"
    ],
    "popularity": "Core",
    "postCountEst": "168K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "own_hands_together",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "The character's own hands clasped or pressed together.",
    "aliases": [
      "hands_clasped"
    ],
    "relatedTags": [
      "interlocked_fingers",
      "praying"
    ],
    "popularity": "Common",
    "postCountEst": "62K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "hand_on_own_hip",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "One hand resting on the character's own hip.",
    "aliases": [
      "hand_on_hip"
    ],
    "relatedTags": [
      "hands_on_own_hips",
      "contrapposto"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "Canonical form. The existing hand_on_hip row is the older tagger spelling."
  },
  {
    "tag": "hands_on_own_hips",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "Both hands on the character's own hips, elbows out.",
    "aliases": [
      "hands_on_hips"
    ],
    "relatedTags": [
      "hand_on_own_hip",
      "hand_on_hip"
    ],
    "popularity": "Common",
    "postCountEst": "26K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "hand_in_pocket",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "One hand tucked into a pocket.",
    "aliases": [
      "single_hand_in_pocket"
    ],
    "relatedTags": [
      "hands_in_pockets",
      "pants",
      "jacket"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "hands_in_pockets",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "Both hands in pockets.",
    "aliases": [
      "both_hands_in_pockets"
    ],
    "relatedTags": [
      "hand_in_pocket",
      "pants",
      "jacket"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "thumbs_up",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "Thumb raised in approval.",
    "aliases": [
      "thumb_up"
    ],
    "relatedTags": [
      "smile",
      "v",
      "grin"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "double_v",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "Both hands making a V sign.",
    "aliases": [
      "double_peace"
    ],
    "relatedTags": [
      "v",
      "one_eye_closed"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "index_finger_raised",
    "domain": "pose_camera",
    "subcategory": "Hands & Arm Gestures",
    "description": "One index finger held up, a point or a 'wait' gesture.",
    "aliases": [
      "finger_raised"
    ],
    "relatedTags": [
      "pointing_at_viewer",
      "finger_to_mouth"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "flexing",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Bicep or arm flex.",
    "aliases": [
      "flex"
    ],
    "relatedTags": [
      "muscular",
      "arm_up",
      "biceps"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "shrugging",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Shoulders lifted in a shrug.",
    "aliases": [
      "shrug"
    ],
    "relatedTags": [
      "arms_up",
      "expressionless",
      "embarrassed"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bent_over",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Folded forward at the waist. Stronger than leaning_forward.",
    "aliases": [
      "bending_over"
    ],
    "relatedTags": [
      "leaning_forward",
      "from_behind",
      "all_fours"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "on_side",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Lying on the side. The posture tag paired with on_back and on_stomach.",
    "aliases": [
      "lying_on_side"
    ],
    "relatedTags": [
      "lying",
      "on_back",
      "on_stomach"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "Canonical posture tag. Prefer this over the existing lying_on_side row."
  },
  {
    "tag": "against_wall",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Back, hands, or body pressed to a wall.",
    "aliases": [
      "leaning_on_wall"
    ],
    "relatedTags": [
      "kabedon",
      "standing",
      "indoors"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "on_chair",
    "domain": "pose_camera",
    "subcategory": "Body Poses & Stances",
    "description": "Sitting on a chair, not the floor or a bed.",
    "aliases": [
      "sitting_on_chair"
    ],
    "relatedTags": [
      "sitting",
      "chair",
      "crossed_legs"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "facing_viewer",
    "domain": "pose_camera",
    "subcategory": "Facial Angles, Head Tilts & Gaze",
    "description": "Body or face turned toward the camera. The eyes can still look away.",
    "aliases": [
      "front_view"
    ],
    "relatedTags": [
      "looking_at_viewer",
      "straight-on",
      "from_behind"
    ],
    "popularity": "Core",
    "postCountEst": "46K",
    "illustriousNote": "Not a synonym of looking_at_viewer. Feb 2024 count, rounded."
  },
  {
    "tag": "head_out_of_frame",
    "domain": "pose_camera",
    "subcategory": "Framing & Shot Size",
    "description": "The head is cropped out of the frame. Useful for outfit and body shots.",
    "aliases": [
      "head_cropped"
    ],
    "relatedTags": [
      "upper_body",
      "cowboy_shot",
      "feet_out_of_frame"
    ],
    "popularity": "Common",
    "postCountEst": "18K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "blurry_background",
    "domain": "pose_camera",
    "subcategory": "Lighting & Optical Effects",
    "description": "Background thrown out of focus. More specific than depth_of_field alone.",
    "aliases": [
      "blurred_background"
    ],
    "relatedTags": [
      "depth_of_field",
      "bokeh",
      "simple_background"
    ],
    "popularity": "Core",
    "postCountEst": "104K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "emphasis_lines",
    "domain": "pose_camera",
    "subcategory": "Lighting & Optical Effects",
    "description": "Burst lines drawing focus to a spot. Not motion lines.",
    "aliases": [
      "focus_lines"
    ],
    "relatedTags": [
      "speed_lines",
      "sparkle",
      "surprised"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Do not use this as a substitute for speed_lines."
  },
  {
    "tag": "sparkle",
    "domain": "art_meta",
    "subcategory": "Color, Tone & Visual Effects",
    "description": "A short bright glint, usually star- or diamond-shaped.",
    "aliases": [
      "sparkles",
      "glitter"
    ],
    "relatedTags": [
      "light_particles",
      "glowing",
      "star-shaped_pupils"
    ],
    "popularity": "Core",
    "postCountEst": "est.",
    "illustriousNote": "Canonical form. The existing sparkles row is an alias. Prefer this tag."
  },
  {
    "tag": "comic",
    "domain": "art_meta",
    "subcategory": "Format & Page Layout",
    "description": "Comic or manga page layout, including panels and gutters.",
    "aliases": [
      "manga_page"
    ],
    "relatedTags": [
      "4koma",
      "speech_bubble",
      "monochrome"
    ],
    "popularity": "Core",
    "postCountEst": "475K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "4koma",
    "domain": "art_meta",
    "subcategory": "Format & Page Layout",
    "description": "Four-panel comic strip, read top to bottom.",
    "aliases": [
      "4-koma",
      "yonkooma"
    ],
    "relatedTags": [
      "comic",
      "monochrome"
    ],
    "popularity": "Common",
    "postCountEst": "93K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "censored",
    "domain": "art_meta",
    "subcategory": "Color, Tone & Visual Effects",
    "description": "Genitals, nipples, or other areas are censored. Parent of the censor styles.",
    "aliases": [
      "censor"
    ],
    "relatedTags": [
      "bar_censor",
      "mosaic_censoring",
      "heart_censor",
      "uncensored"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "bar_censor",
    "domain": "art_meta",
    "subcategory": "Color, Tone & Visual Effects",
    "description": "A solid bar covering the censored area.",
    "aliases": [
      "black_bar_censor"
    ],
    "relatedTags": [
      "censored",
      "convenient_censoring",
      "mosaic_censoring"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "mosaic_censoring",
    "domain": "art_meta",
    "subcategory": "Color, Tone & Visual Effects",
    "description": "Pixel mosaic censor.",
    "aliases": [
      "pixel_censor"
    ],
    "relatedTags": [
      "censored",
      "bar_censor"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "heart_censor",
    "domain": "art_meta",
    "subcategory": "Color, Tone & Visual Effects",
    "description": "A heart shape placed to censor the image.",
    "aliases": [
      "heart_censoring"
    ],
    "relatedTags": [
      "censored",
      "heart",
      "convenient_censoring"
    ],
    "popularity": "Specialized",
    "postCountEst": "est.",
    "illustriousNote": "Implicates censored and heart."
  },
  {
    "tag": "sky",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Visible sky. Pair with night instead of the deprecated night_sky tag.",
    "aliases": [
      "the_sky"
    ],
    "relatedTags": [
      "blue_sky",
      "night",
      "day",
      "cloud"
    ],
    "popularity": "Core",
    "postCountEst": "357K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded. night_sky is deprecated; use night + sky."
  },
  {
    "tag": "day",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Daytime. The counterpart of night.",
    "aliases": [
      "daytime"
    ],
    "relatedTags": [
      "sky",
      "blue_sky",
      "sunlight",
      "night"
    ],
    "popularity": "Core",
    "postCountEst": "295K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "sun",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "The sun visible in the sky.",
    "aliases": [
      "sun_disc"
    ],
    "relatedTags": [
      "sunrise",
      "sunset",
      "sunlight",
      "sky"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "sunrise",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Dawn sky, the counterpart of sunset.",
    "aliases": [
      "dawn"
    ],
    "relatedTags": [
      "sunset",
      "sun",
      "sky",
      "sunlight"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "cloudy_sky",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Overcast sky, not a single dramatic cloud.",
    "aliases": [
      "overcast"
    ],
    "relatedTags": [
      "cloud",
      "blue_sky",
      "cumulonimbus_cloud"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "moon",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "The moon, any phase. full_moon is the specific phase already in the lexicon.",
    "aliases": [
      "the_moon"
    ],
    "relatedTags": [
      "full_moon",
      "night",
      "sky",
      "starry_sky"
    ],
    "popularity": "Common",
    "postCountEst": "66K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "snowing",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Snow falling through the air. snow is snow already on the ground.",
    "aliases": [
      "falling_snow"
    ],
    "relatedTags": [
      "snow",
      "night",
      "sky"
    ],
    "popularity": "Common",
    "postCountEst": "22K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "petals",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Loose flower petals. Parent of falling_petals.",
    "aliases": [
      "flower_petals"
    ],
    "relatedTags": [
      "falling_petals",
      "flower",
      "cherry_blossoms"
    ],
    "popularity": "Core",
    "postCountEst": "112K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded. falling_petals implicates this."
  },
  {
    "tag": "tree",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "A tree in the scene.",
    "aliases": [
      "trees"
    ],
    "relatedTags": [
      "forest",
      "outdoors",
      "grass"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "grass",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Grass underfoot or in the background.",
    "aliases": [
      "lawn"
    ],
    "relatedTags": [
      "outdoors",
      "flower_field",
      "tree"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "water",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Visible water: a surface, splash, or body of water.",
    "aliases": [
      "water_surface"
    ],
    "relatedTags": [
      "ocean",
      "beach",
      "rain",
      "wet_skin"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "fog",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "Fog reducing visibility in the scene.",
    "aliases": [
      "mist"
    ],
    "relatedTags": [
      "outdoors",
      "forest",
      "night"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "lightning",
    "domain": "environment",
    "subcategory": "Nature, Sky & Weather",
    "description": "A lightning bolt.",
    "aliases": [
      "thunderbolt"
    ],
    "relatedTags": [
      "rain",
      "night",
      "cloud"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "flower",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "A flower in the scene or held in the hand. Not a hair ornament.",
    "aliases": [
      "blossom"
    ],
    "relatedTags": [
      "holding",
      "petals",
      "hair_flower",
      "bouquet"
    ],
    "popularity": "Core",
    "postCountEst": "512K",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "holding",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "The character is holding an object. Pair it with the object tag.",
    "aliases": [
      "holding_object"
    ],
    "relatedTags": [
      "holding_weapon",
      "flower",
      "bag",
      "food"
    ],
    "popularity": "Core",
    "postCountEst": "1.0M",
    "illustriousNote": "Feb 2024 Danbooru count, rounded."
  },
  {
    "tag": "weapon",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Generic weapon. Parent of swords, guns, and bows.",
    "aliases": [
      "weapons"
    ],
    "relatedTags": [
      "holding_weapon",
      "sword",
      "gun",
      "bow_(weapon)"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "gun",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Generic firearm. Parent of handgun.",
    "aliases": [
      "firearm"
    ],
    "relatedTags": [
      "handgun",
      "holding_weapon",
      "weapon"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "wand",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Thin magic wand, distinct from a staff.",
    "aliases": [
      "magic_wand"
    ],
    "relatedTags": [
      "magical_girl",
      "staff",
      "magic"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bow_(weapon)",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Archery bow. The parentheses keep it off the clothing bow tag.",
    "aliases": [
      "archery_bow"
    ],
    "relatedTags": [
      "weapon",
      "holding_weapon",
      "arrow"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Do not confuse with bow, the clothing accessory."
  },
  {
    "tag": "shield",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "A carried shield.",
    "aliases": [
      "buckler"
    ],
    "relatedTags": [
      "weapon",
      "armor",
      "knight"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "microphone",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Handheld or stand microphone.",
    "aliases": [
      "mic"
    ],
    "relatedTags": [
      "idol",
      "holding",
      "stage"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bag",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Generic carried bag. Parent of backpacks and handbags.",
    "aliases": [
      "handbag"
    ],
    "relatedTags": [
      "backpack",
      "holding",
      "school_uniform"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "backpack",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Backpack worn on the shoulders.",
    "aliases": [
      "rucksack"
    ],
    "relatedTags": [
      "bag",
      "school_uniform",
      "holding"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "food",
    "domain": "environment",
    "subcategory": "Props, Weapons & Objects",
    "description": "Generic food. Parent of specific snacks and meals.",
    "aliases": [
      "meal"
    ],
    "relatedTags": [
      "holding",
      "popsicle",
      "teacup"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "street",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A street or road.",
    "aliases": [
      "road"
    ],
    "relatedTags": [
      "outdoors",
      "cityscape",
      "building"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "building",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A building exterior.",
    "aliases": [
      "buildings"
    ],
    "relatedTags": [
      "cityscape",
      "indoors",
      "window"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "chair",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A chair as an object. on_chair is the pose.",
    "aliases": [
      "seat"
    ],
    "relatedTags": [
      "on_chair",
      "sitting",
      "desk"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bed",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A bed as an object. on_bed is the pose already in the lexicon.",
    "aliases": [
      "beds"
    ],
    "relatedTags": [
      "on_bed",
      "bedroom",
      "pillow"
    ],
    "popularity": "Core",
    "postCountEst": "est."
  },
  {
    "tag": "couch",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A sofa or couch.",
    "aliases": [
      "sofa"
    ],
    "relatedTags": [
      "sitting",
      "indoors",
      "bedroom"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "door",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A door in the scene.",
    "aliases": [
      "doors"
    ],
    "relatedTags": [
      "indoors",
      "window",
      "hallway"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "bathtub",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A bathtub, empty or filled.",
    "aliases": [
      "bath"
    ],
    "relatedTags": [
      "bathroom",
      "wet_skin",
      "showering"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "showering",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "The act of taking a shower.",
    "aliases": [
      "in_the_shower"
    ],
    "relatedTags": [
      "shower_(place)",
      "wet_hair",
      "wet_skin",
      "bathroom"
    ],
    "popularity": "Common",
    "postCountEst": "est.",
    "illustriousNote": "Bare shower is deprecated. Use this for the action."
  },
  {
    "tag": "shower_(place)",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "The shower stall itself, whether or not someone is using it.",
    "aliases": [
      "shower_stall"
    ],
    "relatedTags": [
      "showering",
      "bathroom",
      "bathtub"
    ],
    "popularity": "Specialized",
    "postCountEst": "est.",
    "illustriousNote": "Bare shower is deprecated. Use this for the place."
  },
  {
    "tag": "stage",
    "domain": "environment",
    "subcategory": "Indoor & Urban Architecture",
    "description": "A performance stage.",
    "aliases": [
      "concert_stage"
    ],
    "relatedTags": [
      "idol",
      "spotlight",
      "microphone"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  },
  {
    "tag": "spotlight",
    "domain": "pose_camera",
    "subcategory": "Lighting & Optical Effects",
    "description": "A hard focused beam of light on the subject.",
    "aliases": [
      "spot_light"
    ],
    "relatedTags": [
      "stage",
      "idol",
      "backlighting",
      "light_rays"
    ],
    "popularity": "Common",
    "postCountEst": "est."
  }
];
