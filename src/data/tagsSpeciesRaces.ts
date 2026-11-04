import { BooruTag, DomainId, SpeciesPreset, SpeciesMixerZone } from '../types/lexicon';

/**
 * Migrates existing species, kemonomimi, fantasy race, monster girl, and
 * non-human trait tags into the dedicated `species_traits` domain, while
 * remapping remaining human/social archetypes to `Archetypes & Occupations`.
 */
export const SPECIES_AND_TRAITS_MIGRATION_MAP: Record<
  string,
  { domain: DomainId; subcategory: string }
> = {
  // Human/Social Archetypes & Occupations staying in 02. Character -> Archetypes & Occupations
  gyaru: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  ojou: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  witch: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  magical_girl: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  nun: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  nurse: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  office_lady: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  cheerleader: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  ninja: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  idol: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  race_queen: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  bride: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  tomboy: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  delinquent: { domain: 'character', subcategory: 'Archetypes & Occupations' },
  yandere: { domain: 'character', subcategory: 'Archetypes & Occupations' },

  // Migrated to 03. Species & Races -> Kemonomimi & Beastkin
  kemonomimi_mode: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  cat_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  fox_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  wolf_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  dog_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  rabbit_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  horse_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },
  cow_girl: { domain: 'species_traits', subcategory: 'Kemonomimi & Beastkin' },

  // Migrated to 03. Species & Races -> Fantasy Races & Demihumans
  elf: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  dark_elf: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  oni: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  vampire: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  succubus: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  demon_girl: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  angel: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  mermaid: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },
  android: { domain: 'species_traits', subcategory: 'Fantasy Races & Demihumans' },

  // Migrated to 03. Species & Races -> Monster Girls & Exotic Hybrids
  dragon_girl: { domain: 'species_traits', subcategory: 'Monster Girls & Exotic Hybrids' },
  lamia: { domain: 'species_traits', subcategory: 'Monster Girls & Exotic Hybrids' },
  slime_girl: { domain: 'species_traits', subcategory: 'Monster Girls & Exotic Hybrids' },

  // Migrated to 03. Species & Races -> Ears, Horns, Wings & Tails
  pointy_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  animal_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  cat_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  fox_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  dog_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  rabbit_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  horse_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  cow_ears: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  horns: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  cow_horns: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  halo: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  wings: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  feathered_wings: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  white_wings: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  black_wings: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  bat_wings: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  cat_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  fox_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  multiple_tails: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  dog_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  horse_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  demon_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },
  dragon_tail: { domain: 'species_traits', subcategory: 'Ears, Horns, Wings & Tails' },

  // Migrated to 03. Species & Races -> Exotic Skin, Scales & Racial Anatomy
  mechanical_parts: { domain: 'species_traits', subcategory: 'Exotic Skin, Scales & Racial Anatomy' }
};

export const SPECIES_AND_TRAITS_TAGS: BooruTag[] = [
  // ============================================================================
  // 03. SPECIES & RACES — 1. Kemonomimi & Beastkin
  // ============================================================================
  {
    tag: 'cat_boy',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Male nekomimi character with feline ears and a cat tail.',
    aliases: ['nekomimi_boy', 'male_cat_ears'],
    relatedTags: ['cat_ears', 'cat_tail', '1boy', 'animal_ears', 'slit_pupils'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'fox_boy',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Male kitsune character with pointed fox ears and a bushy tail.',
    aliases: ['kitsune_boy', 'male_fox_ears'],
    relatedTags: ['fox_ears', 'fox_tail', '1boy', 'multiple_tails', 'japanese_clothes'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'wolf_boy',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Male ookamimimi wolf beastkin with canine ears, fangs, and wolf tail.',
    aliases: ['ookami_boy', 'werewolf_boy'],
    relatedTags: ['wolf_ears', 'wolf_tail', '1boy', 'fangs', 'claws'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'dog_boy',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Male inumimi character with perky or lop dog ears and a wagging tail.',
    aliases: ['inumimi_boy', 'puppy_boy'],
    relatedTags: ['dog_ears', 'dog_tail', '1boy', 'collar'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'rabbit_boy',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Male usagimimi character with long rabbit ears and cotton tail.',
    aliases: ['bunny_boy', 'usagimimi_boy'],
    relatedTags: ['rabbit_ears', 'rabbit_tail', '1boy'],
    popularity: 'Common',
    postCountEst: '32K'
  },
  {
    tag: 'mouse_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Nezumimimi rodent beastkin girl with large rounded mouse ears and a slender hairless tail.',
    aliases: ['nezumimimi', 'rat_girl'],
    relatedTags: ['mouse_ears', 'mouse_tail', 'animal_ears', 'whiskers'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'squirrel_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Kemonomimi girl with small rounded squirrel ears and an oversized, curled bushy tail.',
    aliases: ['risumimi'],
    relatedTags: ['squirrel_ears', 'squirrel_tail', 'animal_ears', 'tail'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'raccoon_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Beastkin girl with rounded raccoon ears and a thick ring-striped tail.',
    aliases: ['araiguma_girl'],
    relatedTags: ['raccoon_ears', 'raccoon_tail', 'tanuki', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'tanuki',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Japanese raccoon-dog spirit or beastkin with rounded ears, two-tone tail, and folklore leaf motif.',
    aliases: ['tanuki_girl', 'bake-danuki'],
    relatedTags: ['raccoon_ears', 'raccoon_tail', 'youkai', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'sheep_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Ovine kemonomimi girl with fluffy wool hair, horizontal sheep ears, and curled ram horns.',
    aliases: ['hitsujimimi', 'ram_girl'],
    relatedTags: ['sheep_ears', 'sheep_horns', 'curled_horns', 'wavy_hair', 'horizontal_pupils'],
    popularity: 'Core',
    postCountEst: '68K'
  },
  {
    tag: 'goat_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Caprine beastkin girl with swept-back goat horns, horizontal pupils, and droopy caprine ears.',
    aliases: ['yagimimi', 'caprine_girl'],
    relatedTags: ['goat_horns', 'goat_ears', 'horizontal_pupils', 'horns', 'hooves'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'deer_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Cervine beastkin girl with branching deer antlers, dappled doe ears, and a short white-flagged tail.',
    aliases: ['shikamimi', 'doe_girl'],
    relatedTags: ['antlers', 'deer_ears', 'deer_tail', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'bear_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Ursine kemonomimi girl with round bear ears on the crown of the head and a pom-pom bear tail.',
    aliases: ['kumamimi'],
    relatedTags: ['bear_ears', 'animal_ears', 'paw_pose', 'claws'],
    popularity: 'Common',
    postCountEst: '36K'
  },
  {
    tag: 'tiger_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Feline beastkin girl with striped tiger ears, a long striped tail, fangs, and fierce predator eyes.',
    aliases: ['toramimi', 'white_tiger_girl'],
    relatedTags: ['tiger_ears', 'tiger_tail', 'fangs', 'claws', 'slit_pupils'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'lion_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Leonine beastkin girl with rounded lion ears, voluminous mane-like hair, and a tufted lion tail.',
    aliases: ['shishimimi', 'lioness_girl'],
    relatedTags: ['lion_ears', 'lion_tail', 'fangs', 'claws'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'monkey_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Simian beastkin girl with monkey ears and a long prehensile monkey tail.',
    aliases: ['sarumimi'],
    relatedTags: ['monkey_ears', 'tail', 'fang'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'shark_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Aquatic predator demihuman with a thick cartilaginous shark tail and serrated shark teeth.',
    aliases: ['same_girl', 'shark_demihuman'],
    relatedTags: ['shark_tail', 'shark_teeth', 'fins', 'gills', 'swimsuit'],
    popularity: 'Core',
    postCountEst: '62K',
    illustriousNote: 'Pair shark_girl with shark_tail and shark_teeth for clean marine kemonomimi designs.'
  },
  {
    tag: 'bird_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Avian demihuman with head wings or feathered ears and tail feathers.',
    aliases: ['torimimi', 'owl_girl', 'crow_girl'],
    relatedTags: ['head_wings', 'feathered_wings', 'wing_ears', 'harpy', 'tengu'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'bat_girl',
    domain: 'species_traits',
    subcategory: 'Kemonomimi & Beastkin',
    description: 'Nocturnal chiropteran beastkin girl with large pointed bat ears, fangs, and leathery bat wings.',
    aliases: ['koumorimimi'],
    relatedTags: ['bat_wings', 'fangs', 'animal_ears', 'vampire'],
    popularity: 'Common',
    postCountEst: '28K'
  },

  // ============================================================================
  // 03. SPECIES & RACES — 2. Fantasy Races & Demihumans
  // ============================================================================
  {
    tag: 'blood_elf',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Arcane high-fantasy elf characterized by long upright pointy ears, eyebrows, and glowing green, gold, or crimson eyes.',
    aliases: ['sin_dorei', 'arcane_elf'],
    relatedTags: ['elf', 'long_pointy_ears', 'glowing_eyes', 'green_eyes', 'blonde_hair'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'half-elf',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Human-elf hybrid with subtly tapered pointed ears.',
    aliases: ['half_elf'],
    relatedTags: ['elf', 'pointy_ears'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'dwarf',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Stout, compact fantasy race with sturdy or voluptuous shortstack proportions, often paired with braids or smithing/armor motifs.',
    aliases: ['dwarf_girl', 'dwarven'],
    relatedTags: ['petite', 'curvy', 'braid', 'armor', 'horns'],
    popularity: 'Common',
    postCountEst: '35K',
    illustriousNote: 'For female dwarves or shortstack fantasy characters, combine dwarf with petite, curvy, and thick_thighs.'
  },
  {
    tag: 'goblin',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Mischievous green-skinned fantasy demihuman with long pointed ears, sharp teeth, and compact proportions.',
    aliases: ['goblin_girl', 'shortstack_goblin'],
    relatedTags: ['green_skin', 'pointy_ears', 'long_pointy_ears', 'fangs', 'shark_teeth', 'petite'],
    popularity: 'Core',
    postCountEst: '65K',
    illustriousNote: 'Pair goblin with green_skin, pointy_ears, and 1girl for goblin-girl designs.'
  },
  {
    tag: 'orc',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Powerful warrior fantasy race with lower jaw tusks, pointed ears, and muscular or green/grey-skinned build.',
    aliases: ['orc_girl', 'female_orc', 'orcess'],
    relatedTags: ['tusks', 'green_skin', 'pointy_ears', 'muscular_female', 'toned', 'fangs'],
    popularity: 'Core',
    postCountEst: '68K'
  },
  {
    tag: 'tengu',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Japanese crow or mountain-spirit youkai with black feathered wings, tokin hat, and feathered fan.',
    aliases: ['crow_tengu', 'karasu_tengu'],
    relatedTags: ['black_wings', 'feathered_wings', 'youkai', 'japanese_clothes', 'geta'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'youkai',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Supernatural beings, spirits, and folkloric demons from traditional Japanese mythology.',
    aliases: ['yokai', 'ayakashi'],
    relatedTags: ['oni', 'tengu', 'fox_girl', 'nekomata', 'yuki-onna', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'demon_boy',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Male demon or incubus featuring horns, bat wings, pointed ears, or a spade-tipped tail.',
    aliases: ['incubus', 'male_demon'],
    relatedTags: ['1boy', 'horns', 'demon_horns', 'bat_wings', 'demon_tail', 'pointy_ears'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'fallen_angel',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Celestial being cast into darkness, featuring raven-black feathered wings and a dark or shattered halo.',
    aliases: ['dark_angel'],
    relatedTags: ['angel', 'black_wings', 'feathered_wings', 'halo', 'broken_halo'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'valkyrie',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Norse celestial warrior maiden wearing winged headgear, silver armor, and white feathered wings.',
    aliases: ['shieldmaiden'],
    relatedTags: ['head_wings', 'feathered_wings', 'white_wings', 'armor', 'breastplate'],
    popularity: 'Common',
    postCountEst: '42K'
  },
  {
    tag: 'fairy',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Fae woodland sprite with translucent insect, butterfly, or gossamer fairy wings.',
    aliases: ['fae', 'pixie', 'sylph'],
    relatedTags: ['fairy_wings', 'butterfly_wings', 'insect_wings', 'pointy_ears', 'minigirl'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'centaur',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Mythological demihuman with a human upper torso joined seamlessly to a four-legged equine lower body.',
    aliases: ['centauress', 'centaur_girl'],
    relatedTags: ['horse_ears', 'horse_tail', 'hooves', 'monster_girl'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'minotaur',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Bovine labyrinth beast or horned bull demihuman with heavy horns, hooves, and nose ring.',
    aliases: ['minotaur_girl', 'bull_demihuman'],
    relatedTags: ['cow_horns', 'cow_ears', 'hooves', 'horns'],
    popularity: 'Specialized',
    postCountEst: '22K'
  },
  {
    tag: 'ghost',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Ethereal phantom or Japanese yuurei spirit, often accompanied by floating hitodama spirit flames or translucent skin.',
    aliases: ['yuurei', 'phantom', 'specter'],
    relatedTags: ['pale_skin', 'translucent_skin', 'floating_hair', 'glowing'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'jiangshi',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Chinese hopping vampire/zombie wearing Qing-dynasty robes with a paper talisman (ofuda) affixed to the forehead.',
    aliases: ['chinese_hopping_vampire', 'kyonshii'],
    relatedTags: ['zombie', 'pale_skin', 'colored_skin', 'blue_skin', 'outstretched_arm'],
    popularity: 'Core',
    postCountEst: '68K'
  },
  {
    tag: 'zombie',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Undead character with stitched, pale, blue, or green skin and bandages.',
    aliases: ['undead_girl', 'zombie_girl'],
    relatedTags: ['pale_skin', 'green_skin', 'blue_skin', 'bandages', 'scar'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'skeleton',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Undead skeletal warrior, lich, or bone motif.',
    aliases: ['undead_skeleton', 'lich'],
    relatedTags: ['glowing_eyes', 'dark_theme', 'scythe'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'dullahan',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Celtic headless fairy/knight demihuman carrying their own living head or featuring a detachable neck seam.',
    aliases: ['headless_girl', 'detached_head'],
    relatedTags: ['monster_girl', 'youkai', 'armor'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'mummy',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Ancient Egyptian undead wrapped in linen bandages.',
    aliases: ['mummy_girl'],
    relatedTags: ['bandages', 'dark_skin', 'gold_trim'],
    popularity: 'Specialized',
    postCountEst: '26K'
  },
  {
    tag: 'giantess',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Colossal female character towering over buildings, landscapes, or normal-sized characters.',
    aliases: ['giant_girl', 'macro_female'],
    relatedTags: ['from_below', 'tall_female', 'minigirl'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'minigirl',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Palm-sized miniature girl or fairy sitting on a hand, shoulder, or teacup.',
    aliases: ['tiny_girl', 'palm-sized_girl'],
    relatedTags: ['fairy', 'fairy_wings', 'giantess'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'alien',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Extraterrestrial humanoid featuring antennae, exotic colored skin, or black sclera.',
    aliases: ['alien_girl', 'extraterrestrial'],
    relatedTags: ['antennae', 'colored_skin', 'green_skin', 'blue_skin', 'black_sclera'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'cyborg',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Cybernetically augmented human with prosthetic mechanical limbs, neural ports, or glowing cyber-lines.',
    aliases: ['cybernetic_girl', 'augmented_human'],
    relatedTags: ['mechanical_parts', 'mechanical_arms', 'mechanical_legs', 'android', 'cyberpunk'],
    popularity: 'Core',
    postCountEst: '68K'
  },
  {
    tag: 'robot',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Fully mechanical humanoid or synthetic mecha unit.',
    aliases: ['humanoid_robot', 'mecha_girl'],
    relatedTags: ['android', 'mechanical_parts', 'doll_joints', 'mecha_musume'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'mecha_musume',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Anime girl fused with heavy military, naval, aviation, or mecha armor rigging and thrusters.',
    aliases: ['mech_girl', 'armored_mecha_girl', 'shipgirl_rigging'],
    relatedTags: ['mechanical_parts', 'mechanical_wings', 'mechanical_ears', 'armor', 'android'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'doll',
    domain: 'species_traits',
    subcategory: 'Fantasy Races & Demihumans',
    description: 'Ball-jointed porcelain or gothic bisque doll character with articulated limbs.',
    aliases: ['living_doll', 'bisque_doll', 'ball-jointed_doll'],
    relatedTags: ['doll_joints', 'gothic_lolita', 'frills', 'expressionless'],
    popularity: 'Core',
    postCountEst: '165K'
  },

  // ============================================================================
  // 03. SPECIES & RACES — 3. Monster Girls & Exotic Hybrids
  // ============================================================================
  {
    tag: 'monster_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Umbrella Danbooru tag for demihuman women with prominent non-human monstrous lower bodies, wings, scales, or appendages.',
    aliases: ['monmusu', 'demihuman_girl'],
    relatedTags: ['lamia', 'harpy', 'arachne', 'slime_girl', 'centaur', 'dragon_girl', 'alraune'],
    popularity: 'Core',
    postCountEst: '280K',
    illustriousNote: 'Include monster_girl alongside specific species tags (e.g. lamia, harpy, arachne) to strengthen non-human anatomy.'
  },
  {
    tag: 'monster_boy',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Male demihuman with monstrous claws, scales, horns, or hybrid anatomy.',
    aliases: ['demihuman_boy'],
    relatedTags: ['1boy', 'dragon_boy', 'demon_boy', 'horns', 'claws'],
    popularity: 'Common',
    postCountEst: '35K'
  },
  {
    tag: 'dragon_boy',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Male draconic demihuman with dragon horns, scaled tail, and slit pupils.',
    aliases: ['male_dragon_humanoid'],
    relatedTags: ['1boy', 'dragon_horns', 'dragon_tail', 'dragon_wings', 'scales'],
    popularity: 'Common',
    postCountEst: '30K'
  },
  {
    tag: 'snake_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Serpentine demihuman with snake scales, slit pupils, forked tongue, and snake tail.',
    aliases: ['hebimimi', 'serpent_girl'],
    relatedTags: ['lamia', 'snake_tail', 'scales', 'forked_tongue', 'slit_pupils'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'lizard_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Reptilian demihuman with scaled skin, lizard tail, and slit pupils.',
    aliases: ['reptile_girl', 'gecko_girl'],
    relatedTags: ['lizard_tail', 'scales', 'slit_pupils', 'monster_girl'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'harpy',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Avian monster girl with large feathered wings replacing or sprouting from the arms and raptorial bird talons for feet.',
    aliases: ['harpy_girl', 'avian_monster_girl'],
    relatedTags: ['monster_girl', 'winged_arms', 'feathered_wings', 'talons', 'plumage', 'bird_girl'],
    popularity: 'Core',
    postCountEst: '48K'
  },
  {
    tag: 'arachne',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Spider monster girl with a human upper torso joined to a giant eight-legged arachnid abdomen, often with multiple eyes.',
    aliases: ['spider_girl', 'jorougumo', 'drider'],
    relatedTags: ['monster_girl', 'extra_eyes', 'black_sclera', 'claws'],
    popularity: 'Common',
    postCountEst: '36K'
  },
  {
    tag: 'alraune',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Botanical flower-nymph monster girl nestled inside giant blooming petals and creeping vines.',
    aliases: ['flower_monster_girl', 'dryad_girl'],
    relatedTags: ['plant_girl', 'monster_girl', 'flower', 'vines', 'tentacles'],
    popularity: 'Specialized',
    postCountEst: '22K'
  },
  {
    tag: 'plant_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Chlorophyll-infused dryad or botanical girl with leaf hair, flower ornaments, and green/vine anatomy.',
    aliases: ['dryad', 'botanical_girl'],
    relatedTags: ['alraune', 'green_hair', 'green_skin', 'flower', 'monster_girl'],
    popularity: 'Common',
    postCountEst: '35K'
  },
  {
    tag: 'insect_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Entomological monster girl featuring insect antennae, translucent insect wings, and chitinous segments.',
    aliases: ['bug_girl', 'mantis_girl'],
    relatedTags: ['antennae', 'insect_wings', 'moth_girl', 'bee_girl', 'butterfly_girl', 'monster_girl'],
    popularity: 'Common',
    postCountEst: '38K'
  },
  {
    tag: 'moth_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Nocturnal lepidopteran monster girl with fluffy neck fur, feathered moth antennae, and patterned moth wings.',
    aliases: ['fluffy_moth_girl'],
    relatedTags: ['insect_girl', 'antennae', 'insect_wings', 'fur', 'monster_girl'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'bee_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Apian monster girl with yellow-and-black striped abdomen/attire, antennae, and translucent bee wings.',
    aliases: ['hornet_girl', 'queen_bee_girl'],
    relatedTags: ['insect_girl', 'antennae', 'insect_wings', 'monster_girl'],
    popularity: 'Specialized',
    postCountEst: '22K'
  },
  {
    tag: 'butterfly_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Graceful demihuman with vibrant monarch or swallowtail butterfly wings and antennae.',
    aliases: ['papillon_girl'],
    relatedTags: ['butterfly_wings', 'antennae', 'fairy', 'insect_girl'],
    popularity: 'Common',
    postCountEst: '26K'
  },
  {
    tag: 'octopus_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Cephalopod sea-witch or scylla monster girl with suckered octopus tentacles as a lower body or hair.',
    aliases: ['cecaelia', 'scylla', 'tako_girl'],
    relatedTags: ['tentacles', 'tentacle_hair', 'monster_girl', 'underwater'],
    popularity: 'Common',
    postCountEst: '28K'
  },
  {
    tag: 'squid_girl',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Marine cephalopod girl with squid-fin headgear or tentacle locks.',
    aliases: ['ika_girl'],
    relatedTags: ['tentacle_hair', 'octopus_girl', 'fins', 'underwater'],
    popularity: 'Common',
    postCountEst: '30K'
  },
  {
    tag: 'cyclops',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Mythological or monster-girl race featuring a single large central eye on the face.',
    aliases: ['cyclops_girl', 'monoeye'],
    relatedTags: ['one-eyed', 'monster_girl', 'big_eyes'],
    popularity: 'Common',
    postCountEst: '35K'
  },
  {
    tag: 'one-eyed',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Anatomically having a single central eye (distinct from covering one normal eye).',
    aliases: ['single_eye', 'mono-eye'],
    relatedTags: ['cyclops', 'monster_girl'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'third_eye',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Mystical vertical or horizontal third eye opened on the center of the forehead.',
    aliases: ['forehead_eye', 'extra_eyes'],
    relatedTags: ['youkai', 'oni', 'demon_girl', 'glowing_eyes'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'nekomata',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Two-tailed supernatural cat youkai from Japanese folklore.',
    aliases: ['bakeneko', 'twin-tailed_cat_girl'],
    relatedTags: ['cat_girl', 'cat_ears', 'cat_tail', 'multiple_tails', 'youkai'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'yuki-onna',
    domain: 'species_traits',
    subcategory: 'Monster Girls & Exotic Hybrids',
    description: 'Japanese snow spirit woman with frost-white skin, icy blue or white hair, and a winter kimono.',
    aliases: ['snow_woman', 'ice_spirit'],
    relatedTags: ['youkai', 'pale_skin', 'white_hair', 'kimono', 'snowing'],
    popularity: 'Common',
    postCountEst: '38K'
  },

  // ============================================================================
  // 03. SPECIES & RACES — 4. Anthro, Furry & Scalie
  // ============================================================================
  {
    tag: 'furry',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Primary Danbooru tag for anthropomorphic animal characters with full-body fur, animal snout/muzzle, and animal limbs.',
    aliases: ['kemono', 'anthropomorphic_animal'],
    relatedTags: ['furry_female', 'furry_male', 'anthro', 'fur', 'snout', 'animal_nose', 'digitigrade'],
    popularity: 'Core',
    postCountEst: '380K',
    illustriousNote: 'Combine furry + furry_female (or furry_male) + anthro + snout to switch SDXL Illustrious from kemonomimi into full anthro furry rendering.'
  },
  {
    tag: 'furry_female',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Female anthropomorphic furry character.',
    aliases: ['anthro_female', 'kemono_girl'],
    relatedTags: ['furry', 'anthro', '1girl', 'fur', 'snout', 'paw_pads'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'furry_male',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Male anthropomorphic furry character.',
    aliases: ['anthro_male', 'kemono_boy'],
    relatedTags: ['furry', 'anthro', '1boy', 'fur', 'snout', 'muscular'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'furry_futanari',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Hermaphroditic anthropomorphic furry character.',
    aliases: ['anthro_futanari', 'futa_furry'],
    relatedTags: ['furry', 'furry_female', 'futanari', 'animal_penis', 'knotted_penis'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'anthro',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Anthropomorphic bipedal animal body structure (bridged e621/Illustrious token reinforcing full furry/scalie proportions).',
    aliases: ['bipedal_animal', 'anthropomorphic'],
    relatedTags: ['furry', 'furry_female', 'furry_male', 'scalie', 'snout', 'digitigrade'],
    popularity: 'Core',
    postCountEst: '290K',
    illustriousNote: 'Essential in Illustrious/NoobAI checkpoints trained on mixed Danbooru + e621 datasets.'
  },
  {
    tag: 'semi-anthro',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Kemono-style flat-faced furry with full-body fur, animal nose, and digitigrade paws but softer anime facial proportions.',
    aliases: ['flat-faced_furry', 'kemono_style'],
    relatedTags: ['furry', 'animal_nose', 'fur', 'paw_pads', 'digitigrade'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'scalie',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Anthropomorphic reptilian or draconic character covered in scales with a reptilian snout and tail.',
    aliases: ['anthro_dragon', 'anthro_reptile', 'lizardfolk'],
    relatedTags: ['furry', 'anthro', 'scales', 'snout', 'dragon_horns', 'dragon_tail', 'slit_pupils'],
    popularity: 'Core',
    postCountEst: '55K'
  },
  {
    tag: 'feral',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Quadrupedal, non-bipedal animal or mythical beast anatomy.',
    aliases: ['quadruped_animal', 'non-anthro_beast'],
    relatedTags: ['furry', 'fur', 'claws', 'paw_pads'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'snout',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Protruding canine, vulpine, feline, equine, or draconic muzzle and jaws.',
    aliases: ['muzzle', 'animal_muzzle', 'animal_snout'],
    relatedTags: ['furry', 'anthro', 'scalie', 'animal_nose', 'whiskers', 'fangs'],
    popularity: 'Core',
    postCountEst: '165K',
    illustriousNote: 'Adding snout prevents the model from defaulting to a human anime nose/jaw on furry prompts.'
  },
  {
    tag: 'animal_nose',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Triangular feline/canine button nose or wet animal rhinarium.',
    aliases: ['cat_nose', 'dog_nose', 'boop_nose'],
    relatedTags: ['snout', 'furry', 'semi-anthro', 'whiskers'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'whiskers',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Tactile feline, rodent, or vulpine whisker bristles extending from the muzzle or cheeks.',
    aliases: ['cat_whiskers', 'whisker_markings'],
    relatedTags: ['animal_nose', 'snout', 'furry', 'cat_girl', 'mouse_girl'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Body covered in soft mammalian fur coat instead of bare human skin.',
    aliases: ['furry_body', 'body_fur', 'fluffy_coat'],
    relatedTags: ['furry', 'white_fur', 'black_fur', 'brown_fur', 'grey_fur', 'two-tone_fur', 'chest_tuft'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'white_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Snow-white or cream mammalian body fur.',
    aliases: ['snowy_fur'],
    relatedTags: ['fur', 'furry', 'two-tone_fur'],
    popularity: 'Core',
    postCountEst: '120K'
  },
  {
    tag: 'black_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Jet-black or charcoal mammalian body fur.',
    aliases: ['dark_fur'],
    relatedTags: ['fur', 'furry', 'two-tone_fur'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'brown_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Warm chestnut, tawny, or chocolate-brown body fur.',
    aliases: ['tan_fur', 'tawny_fur'],
    relatedTags: ['fur', 'furry', 'two-tone_fur'],
    popularity: 'Core',
    postCountEst: '90K'
  },
  {
    tag: 'grey_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Silver-grey or timber-wolf slate body fur.',
    aliases: ['gray_fur', 'silver_fur'],
    relatedTags: ['fur', 'furry', 'wolf_ears', 'wolf_tail'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'orange_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Vibrant fox-red, ginger, or tiger-orange body fur.',
    aliases: ['red_fur', 'ginger_fur'],
    relatedTags: ['fur', 'furry', 'fox_ears', 'fox_tail', 'striped_fur'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'two-tone_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Natural countershading fur pattern with a lighter belly/muzzle and darker dorsal coat.',
    aliases: ['countershaded_fur', 'bicolored_fur'],
    relatedTags: ['fur', 'furry', 'white_fur', 'chest_tuft'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'spotted_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Leopard, cheetah, hyena, or dalmatian rosette/spotted coat pattern.',
    aliases: ['leopard_spots_fur', 'rosette_fur'],
    relatedTags: ['fur', 'furry', 'animal_print'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'striped_fur',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Tiger or tabby-cat striped fur markings across the body and limbs.',
    aliases: ['tiger_stripes_fur', 'tabby_stripes'],
    relatedTags: ['fur', 'furry', 'tiger_girl', 'orange_fur'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'chest_tuft',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Fluffy tuft of fur on the sternum/chest or cheek ruffs.',
    aliases: ['neck_fluff', 'chest_fluff', 'cheek_tuft'],
    relatedTags: ['fur', 'furry', 'two-tone_fur'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'paw_pads',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Soft pink or dark fleshy toe beans on the undersides of animal hands or feet.',
    aliases: ['toe_beans', 'foot_pads'],
    relatedTags: ['animal_feet', 'animal_hands', 'furry', 'digitigrade', 'claws'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'animal_feet',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Furred or scaled lower-limb paws replacing human feet.',
    aliases: ['footpaws', 'furry_feet'],
    relatedTags: ['paw_pads', 'digitigrade', 'claws', 'animal_hands', 'furry'],
    popularity: 'Core',
    postCountEst: '160K'
  },
  {
    tag: 'animal_hands',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Furred handpaws with palm pads and claws.',
    aliases: ['handpaws', 'furry_hands', 'paws'],
    relatedTags: ['paw_pads', 'animal_feet', 'claws', 'paw_pose'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'digitigrade',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Animalistic hind-leg anatomy where the character walks on the toes with an elevated ankle/hock joint.',
    aliases: ['digitigrade_legs', 'beast_legs'],
    relatedTags: ['animal_feet', 'paw_pads', 'furry', 'anthro', 'hooves'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'hooves',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Ungulate cloven or equine hooves replacing feet (common on satyrs, goat/sheep/deer beastkin, andsuccubi).',
    aliases: ['cloven_hooves', 'equine_hooves'],
    relatedTags: ['digitigrade', 'goat_girl', 'sheep_girl', 'centaur', 'minotaur', 'demon_girl'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'claws',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Curved, sharp predatory claws extending from the fingers and toes.',
    aliases: ['sharp_claws', 'beast_claws'],
    relatedTags: ['sharp_fingernails', 'animal_hands', 'animal_feet', 'furry', 'dragon_girl', 'oni'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'talons',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Scaled avian bird-of-prey feet with grasping talons.',
    aliases: ['bird_feet', 'avian_talons'],
    relatedTags: ['harpy', 'bird_girl', 'claws', 'plumage'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'beak',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Avian or gryphon bill/beak on avian anthro characters.',
    aliases: ['avian_beak', 'bird_beak'],
    relatedTags: ['plumage', 'talons', 'feathered_wings', 'furry'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'plumage',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Body or limbs covered in layered avian feathers.',
    aliases: ['feathered_body', 'body_feathers'],
    relatedTags: ['harpy', 'bird_girl', 'feathered_wings', 'talons'],
    popularity: 'Common',
    postCountEst: '40K'
  },
  {
    tag: 'udder',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Bovine udder anatomy on lower abdomen in specialized cow-girl or furry scenes.',
    aliases: ['cow_udder'],
    relatedTags: ['cow_girl', 'furry_female', 'lactation'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'animal_penis',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Non-human mammalian or reptilian phallus morphology in explicit furry/monster scenes.',
    aliases: ['beast_penis', 'non-human_penis'],
    relatedTags: ['knotted_penis', 'equine_penis', 'barbed_penis', 'sheath', 'furry_male', 'furry_futanari'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'knotted_penis',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Canine/lupine phallus with a bulbous base knot.',
    aliases: ['canine_penis', 'knot'],
    relatedTags: ['animal_penis', 'sheath', 'furry_male', 'wolf_boy', 'dog_boy'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'equine_penis',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Flared equine phallus morphology.',
    aliases: ['horse_penis', 'flared_penis'],
    relatedTags: ['animal_penis', 'sheath', 'centaur', 'furry'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'barbed_penis',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Feline or draconic textured phallus.',
    aliases: ['feline_penis'],
    relatedTags: ['animal_penis', 'furry_male', 'cat_boy'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'sheath',
    domain: 'species_traits',
    subcategory: 'Anthro, Furry & Scalie',
    description: 'Anatomical genital sheath on male/futanari furry characters.',
    aliases: ['genital_sheath'],
    relatedTags: ['animal_penis', 'knotted_penis', 'equine_penis', 'furry_male'],
    popularity: 'Common',
    postCountEst: '45K'
  },

  // ============================================================================
  // 03. SPECIES & RACES — 5. Ears, Horns, Wings & Tails
  // ============================================================================
  {
    tag: 'long_pointy_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Dramatically elongated, blade-like elf, dark-elf, or goblin ears extending far out from the head.',
    aliases: ['very_long_pointy_ears', 'knifelike_elf_ears', 'deedlit_ears'],
    relatedTags: ['pointy_ears', 'elf', 'dark_elf', 'blood_elf', 'goblin'],
    popularity: 'Core',
    postCountEst: '240K',
    illustriousNote: 'Use long_pointy_ears when standard pointy_ears looks too short or subtle.'
  },
  {
    tag: 'fake_animal_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Cosplay headband or clip-on animal ears worn by a human character.',
    aliases: ['nekomimi_headband', 'animal_ear_headband'],
    relatedTags: ['animal_ears', 'fake_rabbit_ears', 'hairband'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'fake_rabbit_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Satin or plush bunny-ear headband worn with a playboy bunny leotard.',
    aliases: ['bunny_ear_headband'],
    relatedTags: ['rabbit_ears', 'playboy_bunny', 'fake_animal_ears', 'rabbit_girl'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'wolf_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Pointed, heavily furred canine wolf ears.',
    aliases: ['ookami_ears', 'lupine_ears'],
    relatedTags: ['wolf_girl', 'wolf_tail', 'animal_ears', 'animal_ear_fluff'],
    popularity: 'Core',
    postCountEst: '180K'
  },
  {
    tag: 'mouse_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Large, round saucer-shaped rodent ears.',
    aliases: ['rat_ears', 'rodent_ears'],
    relatedTags: ['mouse_girl', 'mouse_tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'sheep_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Soft, horizontally drooping ovine ears.',
    aliases: ['lamb_ears'],
    relatedTags: ['sheep_girl', 'sheep_horns', 'floppy_ears', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'goat_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Slender, outward-flaring or pendulous caprine ears.',
    aliases: ['caprine_ears'],
    relatedTags: ['goat_girl', 'goat_horns', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'deer_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Large, oval cervine doe ears with white inner fluff.',
    aliases: ['doe_ears', 'fawn_ears'],
    relatedTags: ['deer_girl', 'antlers', 'deer_tail', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'bear_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Rounded plush ursine ears set on the top sides of the head.',
    aliases: ['kuma_ears'],
    relatedTags: ['bear_girl', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'tiger_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Rounded feline ears with black-and-white or orange striped backing.',
    aliases: ['tora_ears'],
    relatedTags: ['tiger_girl', 'tiger_tail', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'lion_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Rounded tawny feline ears of a lion or lioness.',
    aliases: ['shishi_ears'],
    relatedTags: ['lion_girl', 'lion_tail', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '50K'
  },
  {
    tag: 'raccoon_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Rounded dark-rimmed raccoon or tanuki ears.',
    aliases: ['tanuki_ears'],
    relatedTags: ['raccoon_girl', 'tanuki', 'raccoon_tail', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'squirrel_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Tufted rodent squirrel ears.',
    aliases: ['risu_ears'],
    relatedTags: ['squirrel_girl', 'squirrel_tail', 'animal_ears'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'monkey_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Rounded simian ears set on the sides of the head.',
    aliases: ['simian_ears'],
    relatedTags: ['monkey_girl', 'animal_ears'],
    popularity: 'Specialized',
    postCountEst: '30K'
  },
  {
    tag: 'floppy_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Long, soft lop rabbit or hound ears that hang downward framing the cheeks.',
    aliases: ['lop_ears', 'droopy_animal_ears'],
    relatedTags: ['rabbit_ears', 'dog_ears', 'sheep_ears', 'animal_ears'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'animal_ear_fluff',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Soft tufts of inner fur protruding from inside cat, fox, or wolf ears.',
    aliases: ['ear_tufts', 'inner_ear_fluff'],
    relatedTags: ['animal_ears', 'cat_ears', 'fox_ears', 'wolf_ears'],
    popularity: 'Core',
    postCountEst: '290K'
  },
  {
    tag: 'fin_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Webbed aquatic fin-like ears characteristic of mermaids, sea dragons, and sirens.',
    aliases: ['ear_fins', 'webbed_ears'],
    relatedTags: ['mermaid', 'fins', 'head_fins', 'dragon_girl'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'wing_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Feathered ears shaped like small wings on the sides of the head.',
    aliases: ['feathered_ears'],
    relatedTags: ['head_wings', 'bird_girl', 'valkyrie', 'angel'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'mechanical_ears',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Robotic, cybernetic, or headset-like cat/bunny ear attachments on androids and mecha girls.',
    aliases: ['cyber_ears', 'robot_ears'],
    relatedTags: ['android', 'mecha_musume', 'mechanical_parts', 'headset'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'single_horn',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'A single horn protruding from the center or side of the forehead (classic oni or unicorn trait).',
    aliases: ['unicorn_horn', 'one_horn'],
    relatedTags: ['horns', 'oni', 'oni_horns', 'forehead'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'oni_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Short, sharp conical horns protruding from the forehead of a Japanese oni.',
    aliases: ['forehead_horns'],
    relatedTags: ['oni', 'horns', 'single_horn', 'fangs'],
    popularity: 'Core',
    postCountEst: '145K'
  },
  {
    tag: 'demon_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Dark, ridged, or swept-back demonic horns belonging to a succubus or demon.',
    aliases: ['succubus_horns'],
    relatedTags: ['horns', 'demon_girl', 'succubus', 'curled_horns'],
    popularity: 'Core',
    postCountEst: '220K'
  },
  {
    tag: 'dragon_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Thick, branching or swept-back draconic horns with bony ridges.',
    aliases: ['draconic_horns'],
    relatedTags: ['horns', 'dragon_girl', 'dragon_tail', 'dragon_wings', 'scalie'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'curled_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Spiral ram-style horns curling around the sides of the head and ears.',
    aliases: ['ram_horns', 'spiral_horns'],
    relatedTags: ['horns', 'sheep_horns', 'sheep_girl', 'demon_horns', 'succubus'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'sheep_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Ridged, coiled ovine horns framing the temples.',
    aliases: ['ovine_horns'],
    relatedTags: ['curled_horns', 'sheep_girl', 'sheep_ears', 'horns'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'goat_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Arched, backward-swept caprine horns.',
    aliases: ['caprine_horns', 'ibex_horns'],
    relatedTags: ['goat_girl', 'goat_ears', 'horns', 'demon_horns'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'antlers',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Branching stag, deer, reindeer, or eastern-dragon antlers.',
    aliases: ['deer_antlers', 'stag_antlers'],
    relatedTags: ['deer_girl', 'deer_ears', 'dragon_horns', 'horns'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'broken_horn',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'One horn snapped or battle-damaged shorter than the other.',
    aliases: ['snapped_horn', 'severed_horn'],
    relatedTags: ['horns', 'oni', 'demon_girl', 'scar'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'glowing_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Luminous neon, arcane, or molten-core horns.',
    aliases: ['neon_horns'],
    relatedTags: ['horns', 'glowing', 'demon_girl', 'dragon_girl'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'mechanical_horns',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Angular cybernetic or mecha-fin horns mounted on the head.',
    aliases: ['cyber_horns', 'mecha_horns'],
    relatedTags: ['horns', 'android', 'mecha_musume', 'mechanical_parts'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'mechanical_halo',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Geometric sci-fi or Blue Archive-style glowing holographic/mechanical halo floating above the head.',
    aliases: ['geometric_halo', 'sci-fi_halo'],
    relatedTags: ['halo', 'glowing', 'angel', 'android'],
    popularity: 'Common',
    postCountEst: '48K'
  },
  {
    tag: 'broken_halo',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Cracked, fragmented, or shattered halo floating above a fallen angel.',
    aliases: ['shattered_halo', 'cracked_halo'],
    relatedTags: ['halo', 'fallen_angel', 'black_wings'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'demon_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Dark membranous wings with clawed wing-thumbs belonging to a demon or succubus.',
    aliases: ['succubus_wings'],
    relatedTags: ['bat_wings', 'wings', 'demon_girl', 'succubus', 'low_wings'],
    popularity: 'Core',
    postCountEst: '190K'
  },
  {
    tag: 'dragon_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Large, scaled draconic wings with muscular wing-fingers.',
    aliases: ['wyvern_wings', 'draconic_wings'],
    relatedTags: ['bat_wings', 'wings', 'dragon_girl', 'dragon_tail', 'dragon_horns'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'fairy_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Iridescent, veined gossamer wings characteristic of fairies and pixies.',
    aliases: ['pixie_wings', 'fae_wings'],
    relatedTags: ['fairy', 'insect_wings', 'butterfly_wings', 'wings'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'insect_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Translucent, veined dragonfly, bee, or cicada wings.',
    aliases: ['translucent_wings', 'bug_wings'],
    relatedTags: ['fairy_wings', 'butterfly_wings', 'insect_girl', 'wings'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'butterfly_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Colorful patterned lepidopteran butterfly wings.',
    aliases: ['monarch_wings', 'swallowtail_wings'],
    relatedTags: ['butterfly_girl', 'fairy_wings', 'insect_wings', 'wings'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'low_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Wings sprouting from the lower back/hips rather than the shoulder blades (classic Morrigan/succubus placement).',
    aliases: ['hip_wings', 'waist_wings', 'lower_back_wings'],
    relatedTags: ['bat_wings', 'demon_wings', 'succubus', 'wings'],
    popularity: 'Core',
    postCountEst: '140K',
    illustriousNote: 'Iconic succubus trait in SDXL Illustrious; pair with bat_wings and succubus.'
  },
  {
    tag: 'mini_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Small, cute undersized wings that are decorative rather than full wingspan.',
    aliases: ['small_wings', 'chibi_wings'],
    relatedTags: ['wings', 'low_wings', 'bat_wings', 'feathered_wings'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'multiple_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Four, six, or more wings arranged in seraphim or archangel pairs.',
    aliases: ['six_wings', 'four_wings', 'seraph_wings'],
    relatedTags: ['wings', 'feathered_wings', 'angel', 'halo'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'single_wing',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'A single asymmetrical wing sprouting from one side of the back.',
    aliases: ['one-winged', 'asymmetrical_wing'],
    relatedTags: ['wings', 'black_wings', 'feathered_wings'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'detached_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Wings floating just behind the back without physically connecting to the skin.',
    aliases: ['floating_wings'],
    relatedTags: ['wings', 'energy_wings', 'mechanical_wings', 'angel'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'energy_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Wings composed of pure glowing light, fire, magic, or hard-light holograms.',
    aliases: ['light_wings', 'glowing_wings'],
    relatedTags: ['wings', 'glowing', 'detached_wings', 'mechanical_wings'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'mechanical_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Articulated metallic, robotic, or thruster-equipped wings.',
    aliases: ['mecha_wings', 'cyber_wings'],
    relatedTags: ['wings', 'mecha_musume', 'android', 'mechanical_parts'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'head_wings',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Small feathered or bat wings growing directly from the temples or sides of the head.',
    aliases: ['temple_wings', 'winged_head'],
    relatedTags: ['wing_ears', 'valkyrie', 'angel', 'succubus', 'bird_girl'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'winged_arms',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Arms that transition into or are lined with large flight feathers (harpy anatomy).',
    aliases: ['arm_wings', 'harpy_wings'],
    relatedTags: ['harpy', 'bird_girl', 'feathered_wings', 'plumage'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'wolf_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Thick, bushy canine wolf tail.',
    aliases: ['ookami_tail', 'lupine_tail'],
    relatedTags: ['wolf_girl', 'wolf_ears', 'tail'],
    popularity: 'Core',
    postCountEst: '135K'
  },
  {
    tag: 'rabbit_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Round, fluffy cotton-ball bunny tail at the base of the spine.',
    aliases: ['bunny_tail', 'cottontail'],
    relatedTags: ['rabbit_girl', 'rabbit_ears', 'playboy_bunny', 'tail'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'cow_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Slender bovine tail with a tufted brush tip.',
    aliases: ['bovine_tail'],
    relatedTags: ['cow_girl', 'cow_ears', 'cow_horns', 'tail'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'mouse_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Long, thin, pink or hairless rodent tail.',
    aliases: ['rat_tail_anatomy'],
    relatedTags: ['mouse_girl', 'mouse_ears', 'tail'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'squirrel_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Huge, fluffy, curled squirrel tail rising behind the back.',
    aliases: ['bushy_squirrel_tail'],
    relatedTags: ['squirrel_girl', 'squirrel_ears', 'tail'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'raccoon_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Thick, bushy tail patterned with alternating dark and light rings.',
    aliases: ['ringed_tail', 'tanuki_tail'],
    relatedTags: ['raccoon_girl', 'tanuki', 'raccoon_ears', 'tail'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'tiger_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Long feline tail with dark tiger stripes.',
    aliases: ['striped_feline_tail'],
    relatedTags: ['tiger_girl', 'tiger_ears', 'cat_tail', 'tail'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'lion_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Slender tawny tail ending in a dark fur tuft.',
    aliases: ['tufted_lion_tail'],
    relatedTags: ['lion_girl', 'lion_ears', 'tail'],
    popularity: 'Common',
    postCountEst: '40K'
  },
  {
    tag: 'deer_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Short, perky cervine doe tail with a white underside.',
    aliases: ['doe_tail'],
    relatedTags: ['deer_girl', 'deer_ears', 'antlers', 'tail'],
    popularity: 'Specialized',
    postCountEst: '30K'
  },
  {
    tag: 'spade_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Slender demon or succubus tail terminating in a pointed heart/spade tip.',
    aliases: ['arrow_tail', 'heart-tipped_tail'],
    relatedTags: ['demon_tail', 'succubus', 'demon_girl', 'tail'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'shark_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Thick, muscular cartilaginous shark tail with a vertical caudal fin.',
    aliases: ['caudal_shark_tail'],
    relatedTags: ['shark_girl', 'fins', 'shark_teeth', 'tail'],
    popularity: 'Core',
    postCountEst: '55K'
  },
  {
    tag: 'fish_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Scaled aquatic mermaid tail with a translucent caudal fluke.',
    aliases: ['mermaid_tail'],
    relatedTags: ['mermaid', 'scales', 'fins', 'underwater'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'snake_tail',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Long, coiling serpentine tail of a lamia or snake girl.',
    aliases: ['serpent_tail', 'lamia_tail'],
    relatedTags: ['lamia', 'snake_girl', 'scales', 'tail'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'tail_wagging',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Tail in cheerful side-to-side motion with subtle motion lines.',
    aliases: ['wagging_tail'],
    relatedTags: ['dog_tail', 'wolf_tail', 'cat_tail', 'happy'],
    popularity: 'Core',
    postCountEst: '65K'
  },
  {
    tag: 'tail_raised',
    domain: 'species_traits',
    subcategory: 'Ears, Horns, Wings & Tails',
    description: 'Tail lifted high or arched upward, often exposing the rear.',
    aliases: ['raised_tail'],
    relatedTags: ['tail', 'cat_tail', 'from_behind', 'ass_focus'],
    popularity: 'Core',
    postCountEst: '85K'
  },

  // ============================================================================
  // 03. SPECIES & RACES — 6. Exotic Skin, Scales & Racial Anatomy
  // ============================================================================
  {
    tag: 'colored_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Umbrella Danbooru tag required whenever generating non-human skin hues (blue, green, red, purple, grey, or pitch-black).',
    aliases: ['non-human_skin_color', 'fantasy_skin'],
    relatedTags: ['blue_skin', 'green_skin', 'red_skin', 'purple_skin', 'grey_skin', 'white_skin'],
    popularity: 'Core',
    postCountEst: '340K',
    illustriousNote: 'Always pair specific fantasy skin colors (like blue_skin or green_skin) with colored_skin so SDXL Illustrious commits fully to the hue.'
  },
  {
    tag: 'blue_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Azure, ice-blue, or deep navy skin tone (common on drow, demons, jiangshi, and aquatic races).',
    aliases: ['azure_skin', 'cyan_skin'],
    relatedTags: ['colored_skin', 'dark_elf', 'demon_girl', 'jiangshi', 'slime_girl'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'green_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Emerald, olive-green, or lime skin tone (essential for goblins, orcs, zombies, and plant girls).',
    aliases: ['emerald_skin'],
    relatedTags: ['colored_skin', 'goblin', 'orc', 'plant_girl', 'zombie', 'alien'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'red_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Crimson, scarlet, or hellfire-red skin tone (classic oni, demon, and tiefling coloration).',
    aliases: ['crimson_skin', 'demon_red_skin'],
    relatedTags: ['colored_skin', 'oni', 'demon_girl', 'succubus', 'horns'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'purple_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Lavender, violet, or dusk-purple skin tone (classic dark elf / drow, succubus, and corrupt fantasy coloration).',
    aliases: ['violet_skin', 'drow_purple_skin'],
    relatedTags: ['colored_skin', 'dark_elf', 'succubus', 'demon_girl'],
    popularity: 'Core',
    postCountEst: '110K'
  },
  {
    tag: 'grey_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Ashen, slate-grey, or stone-colored skin tone (common on dark elves, undead, vampires, and gargoyles).',
    aliases: ['gray_skin', 'ashen_skin'],
    relatedTags: ['colored_skin', 'dark_elf', 'vampire', 'zombie', 'demon_girl'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'white_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Chalk-white, porcelain, or alabaster non-human skin (distinct from natural pale_skin).',
    aliases: ['chalk_white_skin', 'alabaster_skin'],
    relatedTags: ['colored_skin', 'pale_skin', 'vampire', 'ghost', 'doll', 'oni'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'pink_skin',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Bubblegum or rose-pink non-human skin tone (common on slime girls, succubi, and aliens).',
    aliases: ['rose_skin'],
    relatedTags: ['colored_skin', 'slime_girl', 'succubus', 'alien'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'scales',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Iridescent draconic, reptilian, or piscine scales covering patches of skin or the entire body.',
    aliases: ['scaled_skin', 'dragon_scales', 'reptile_scales'],
    relatedTags: ['dragon_girl', 'lamia', 'mermaid', 'scalie', 'dragon_tail'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'fins',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Aquatic dorsal, forearm, calf, or hip fins on mermaids, shark girls, and sea dragons.',
    aliases: ['aquatic_fins', 'dorsal_fin'],
    relatedTags: ['fin_ears', 'head_fins', 'mermaid', 'shark_girl', 'fish_tail'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'head_fins',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Decorative webbed fins flaring from the sides or crown of the head.',
    aliases: ['cranial_fins'],
    relatedTags: ['fin_ears', 'fins', 'mermaid', 'dragon_girl'],
    popularity: 'Common',
    postCountEst: '55K'
  },
  {
    tag: 'gills',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Respiratory gill slits along the sides of the neck or ribs.',
    aliases: ['neck_gills', 'fish_gills'],
    relatedTags: ['shark_girl', 'mermaid', 'fins', 'underwater'],
    popularity: 'Specialized',
    postCountEst: '30K'
  },
  {
    tag: 'antennae',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Sensory insect, moth, bee, or alien feelers sprouting from the forehead or hair.',
    aliases: ['feeler_antennae', 'insect_antennae'],
    relatedTags: ['insect_girl', 'moth_girl', 'bee_girl', 'butterfly_girl', 'alien'],
    popularity: 'Core',
    postCountEst: '75K'
  },
  {
    tag: 'colored_sclera',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Whites of the eyes tinted a non-white color (black, red, yellow, or glowing).',
    aliases: ['tinted_sclera'],
    relatedTags: ['black_sclera', 'yellow_sclera', 'demon_girl', 'monster_girl', 'glowing_eyes'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'black_sclera',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Pitch-black eyeballs framing bright glowing or slit irises (demonic, abyssal, or alien trait).',
    aliases: ['dark_sclera', 'black_eyeballs'],
    relatedTags: ['colored_sclera', 'glowing_eyes', 'slit_pupils', 'demon_girl', 'oni', 'alien'],
    popularity: 'Core',
    postCountEst: '125K'
  },
  {
    tag: 'yellow_sclera',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Golden-yellow sclera common in feral predators, demons, and dragons.',
    aliases: ['amber_sclera'],
    relatedTags: ['colored_sclera', 'slit_pupils', 'red_eyes', 'dragon_girl'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'tusks',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Prominent lower canines protruding upward past the upper lip (signature orc and boar-kin trait).',
    aliases: ['orc_tusks', 'boar_tusks'],
    relatedTags: ['orc', 'oni', 'fangs', 'monster_girl'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'sharp_fingernails',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Long, tapered, claw-like fingernails on vampires, demons, succubi, and beastkin.',
    aliases: ['clawed_nails', 'pointed_nails'],
    relatedTags: ['claws', 'vampire', 'succubus', 'demon_girl', 'oni'],
    popularity: 'Core',
    postCountEst: '210K'
  },
  {
    tag: 'extra_arms',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Four or six arms sprouting from the shoulders/torso (asura, arachne, or insect-girl anatomy).',
    aliases: ['four_arms', 'multiple_arms'],
    relatedTags: ['arachne', 'insect_girl', 'monster_girl', 'youkai'],
    popularity: 'Common',
    postCountEst: '65K'
  },
  {
    tag: 'tentacle_hair',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Hair composed of living cephalopod tentacles or prehensile tendrils.',
    aliases: ['tendril_hair'],
    relatedTags: ['octopus_girl', 'squid_girl', 'monster_girl', 'slime_girl'],
    popularity: 'Common',
    postCountEst: '45K'
  },
  {
    tag: 'snake_hair',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Hair composed of living serpents (Medusa / gorgon mythology).',
    aliases: ['medusa_hair', 'gorgon_hair'],
    relatedTags: ['snake_girl', 'lamia', 'slit_pupils', 'monster_girl'],
    popularity: 'Specialized',
    postCountEst: '25K'
  },
  {
    tag: 'doll_joints',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Spherical ball-and-socket joints visible at the elbows, wrists, knees, and hips.',
    aliases: ['ball_joints', 'puppet_joints', 'mannequin_joints'],
    relatedTags: ['doll', 'android', 'robot', 'mechanical_parts'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'mechanical_arms',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Cybernetic or robotic prosthetic arms with exposed plating, hydraulics, or glowing seams.',
    aliases: ['cybernetic_arms', 'prosthetic_arms', 'robot_arms'],
    relatedTags: ['mechanical_parts', 'mechanical_legs', 'cyborg', 'android', 'mecha_musume'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'mechanical_legs',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Cybernetic, robotic, or thruster-equipped mechanical lower limbs.',
    aliases: ['cybernetic_legs', 'prosthetic_legs', 'robot_legs'],
    relatedTags: ['mechanical_parts', 'mechanical_arms', 'cyborg', 'android', 'mecha_musume'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'forehead_mark',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Mystical sigil, demonic crest, or divine mark emblazoned on the forehead.',
    aliases: ['forehead_sigil', 'demon_crest_forehead'],
    relatedTags: ['facial_mark', 'body_markings', 'oni', 'demon_girl', 'youkai'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'body_markings',
    domain: 'species_traits',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    description: 'Innate glowing, tribal, demonic, or runic patterns across the torso and limbs.',
    aliases: ['magic_markings', 'demon_markings', 'runic_skin_markings'],
    relatedTags: ['forehead_mark', 'tattoo', 'womb_tattoo', 'glowing', 'demon_girl'],
    popularity: 'Core',
    postCountEst: '135K'
  }
];

export const BUILT_IN_SPECIES_PRESETS: SpeciesPreset[] = [
  {
    id: 'spec_high_elf',
    name: 'High / Woodland Elf',
    lineage: 'Fantasy Race',
    description: 'Long blade-like elven ears, graceful slender frame, and flowing hair.',
    tags: ['elf', 'long_pointy_ears', 'slender', 'very_long_hair'],
    isBuiltIn: true
  },
  {
    id: 'spec_dark_elf_drow',
    name: 'Dark Elf / Drow',
    lineage: 'Fantasy Race',
    description: 'Dusky dark or purple skin, long pointed ears, silver-white hair, and glowing eyes.',
    tags: ['dark_elf', 'elf', 'dark_skin', 'long_pointy_ears', 'white_hair', 'red_eyes'],
    isBuiltIn: true
  },
  {
    id: 'spec_nekomimi_cat',
    name: 'Nekomimi Cat Girl',
    lineage: 'Kemonomimi',
    description: 'Feline ears with inner ear fluff, expressive cat tail, slit pupils, and cute fang.',
    tags: ['cat_girl', 'kemonomimi_mode', 'cat_ears', 'animal_ear_fluff', 'cat_tail', 'slit_pupils', 'fang'],
    isBuiltIn: true
  },
  {
    id: 'spec_kitsune_fox',
    name: 'Nine-Tails Kitsune',
    lineage: 'Kemonomimi / Youkai',
    description: 'Fluffy fox ears and multiple fanning kitsune tails.',
    tags: ['fox_girl', 'kemonomimi_mode', 'fox_ears', 'animal_ear_fluff', 'fox_tail', 'multiple_tails', 'youkai'],
    isBuiltIn: true
  },
  {
    id: 'spec_wolf_beastkin',
    name: 'Ookami Wolf Beastkin',
    lineage: 'Beastkin',
    description: 'Pointed wolf ears, bushy wolf tail, sharp fangs, and predatory claws.',
    tags: ['wolf_girl', 'kemonomimi_mode', 'wolf_ears', 'wolf_tail', 'fangs', 'claws'],
    isBuiltIn: true
  },
  {
    id: 'spec_succubus_demon',
    name: 'Succubus Demoness',
    lineage: 'Fiend / Demon',
    description: 'Curled demon horns, low hip-mounted bat wings, spade-tipped tail, and heart pupils.',
    tags: ['succubus', 'demon_girl', 'curled_horns', 'bat_wings', 'low_wings', 'demon_tail', 'spade_tail', 'heart-shaped_pupils'],
    isBuiltIn: true
  },
  {
    id: 'spec_oni_ogre',
    name: 'Crimson Oni Ogre',
    lineage: 'Youkai / Demon',
    description: 'Forehead oni horns, twin fangs, sharp fingernails, and toned physique.',
    tags: ['oni', 'oni_horns', 'horns', 'fangs', 'sharp_fingernails', 'toned'],
    isBuiltIn: true
  },
  {
    id: 'spec_dragon_girl',
    name: 'Dragonborn / Ryuujin',
    lineage: 'Draconic Hybrid',
    description: 'Swept-back dragon horns, scaled skin patches, leathery dragon wings, and thick dragon tail.',
    tags: ['dragon_girl', 'dragon_horns', 'dragon_wings', 'dragon_tail', 'scales', 'slit_pupils'],
    isBuiltIn: true
  },
  {
    id: 'spec_goblin_shortstack',
    name: 'Goblin Demihuman',
    lineage: 'Fantasy Demihuman',
    description: 'Emerald green skin, long pointed ears, sharp teeth, and compact curvy build.',
    tags: ['goblin', 'colored_skin', 'green_skin', 'long_pointy_ears', 'shark_teeth', 'petite', 'curvy'],
    isBuiltIn: true
  },
  {
    id: 'spec_lamia_serpent',
    name: 'Lamia Serpent Hybrid',
    lineage: 'Monster Girl',
    description: 'Coiling scaled snake lower body, slit pupils, and forked serpentine tongue.',
    tags: ['monster_girl', 'lamia', 'snake_tail', 'scales', 'slit_pupils', 'forked_tongue'],
    isBuiltIn: true
  },
  {
    id: 'spec_anthro_furry',
    name: 'Anthro Furry (Lupine / Vulpine)',
    lineage: 'Anthro / Furry',
    description: 'Full-body countershaded fur, canine snout, digitigrade legs, and pink paw pads.',
    tags: ['furry', 'furry_female', 'anthro', 'snout', 'animal_nose', 'fur', 'two-tone_fur', 'wolf_ears', 'wolf_tail', 'digitigrade', 'paw_pads'],
    isBuiltIn: true
  },
  {
    id: 'spec_cyber_gynoid',
    name: 'Cybernetic Android / Gynoid',
    lineage: 'Synthetic / Sci-Fi',
    description: 'Articulated doll joints, mechanical ears, cybernetic limbs, and glowing eyes.',
    tags: ['android', 'cyborg', 'doll_joints', 'mechanical_parts', 'mechanical_ears', 'mechanical_arms', 'glowing_eyes'],
    isBuiltIn: true
  }
];

export const SPECIES_MIXER_ZONES: SpeciesMixerZone[] = [
  {
    id: 'zone_species_lineage',
    label: '1. Base Race, Beastkin & Anthro',
    subcategory: 'Fantasy Races & Demihumans',
    quickTags: [
      'kemonomimi_mode',
      'cat_girl',
      'fox_girl',
      'wolf_girl',
      'dog_girl',
      'rabbit_girl',
      'cow_girl',
      'elf',
      'dark_elf',
      'dwarf',
      'goblin',
      'orc',
      'oni',
      'succubus',
      'vampire',
      'angel',
      'dragon_girl',
      'monster_girl',
      'lamia',
      'harpy',
      'slime_girl',
      'furry',
      'furry_female',
      'anthro',
      'scalie',
      'android'
    ]
  },
  {
    id: 'zone_ears_horns',
    label: '2. Ears, Horns & Halos',
    subcategory: 'Ears, Horns, Wings & Tails',
    quickTags: [
      'pointy_ears',
      'long_pointy_ears',
      'animal_ears',
      'cat_ears',
      'fox_ears',
      'wolf_ears',
      'dog_ears',
      'rabbit_ears',
      'horse_ears',
      'cow_ears',
      'sheep_ears',
      'floppy_ears',
      'animal_ear_fluff',
      'fin_ears',
      'mechanical_ears',
      'horns',
      'oni_horns',
      'demon_horns',
      'dragon_horns',
      'curled_horns',
      'cow_horns',
      'antlers',
      'halo',
      'mechanical_halo'
    ]
  },
  {
    id: 'zone_wings_tails',
    label: '3. Wings & Tails',
    subcategory: 'Ears, Horns, Wings & Tails',
    quickTags: [
      'wings',
      'feathered_wings',
      'white_wings',
      'black_wings',
      'bat_wings',
      'demon_wings',
      'dragon_wings',
      'fairy_wings',
      'low_wings',
      'mini_wings',
      'head_wings',
      'mechanical_wings',
      'tail',
      'cat_tail',
      'fox_tail',
      'multiple_tails',
      'wolf_tail',
      'dog_tail',
      'rabbit_tail',
      'demon_tail',
      'spade_tail',
      'dragon_tail',
      'shark_tail',
      'snake_tail'
    ]
  },
  {
    id: 'zone_exotic_anatomy',
    label: '4. Fur, Scales & Exotic Anatomy',
    subcategory: 'Exotic Skin, Scales & Racial Anatomy',
    quickTags: [
      'colored_skin',
      'blue_skin',
      'green_skin',
      'red_skin',
      'purple_skin',
      'grey_skin',
      'white_skin',
      'scales',
      'fins',
      'black_sclera',
      'tusks',
      'sharp_fingernails',
      'claws',
      'hooves',
      'digitigrade',
      'paw_pads',
      'snout',
      'animal_nose',
      'fur',
      'two-tone_fur',
      'doll_joints',
      'mechanical_parts',
      'body_markings'
    ]
  }
];
