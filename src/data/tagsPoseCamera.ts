import { BooruTag } from '../types/lexicon';

export const POSE_CAMERA_TAGS: BooruTag[] = [
  // Framing & Shot Size
  {
    tag: 'portrait',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Tight framing showing the head, neck, and tops of the shoulders.',
    aliases: ['head_and_shoulders', 'bust_portrait'],
    relatedTags: ['close-up', 'upper_body', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '520K'
  },
  {
    tag: 'close-up',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Intimate macro framing tightly focused on the face, eyes, or a specific subject detail.',
    aliases: ['extreme_close-up', 'face_close-up', 'macro_shot'],
    relatedTags: ['portrait', 'depth_of_field', 'big_eyes'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'upper_body',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Medium framing from the waist or hips up to the top of the head.',
    aliases: ['waist_up', 'medium_shot', 'bust_up'],
    relatedTags: ['cowboy_shot', 'portrait', 'solo'],
    popularity: 'Core',
    postCountEst: '2.7M',
    illustriousNote: 'Most reliable framing tag for high facial detail without sacrificing torso costume elements.'
  },
  {
    tag: 'cowboy_shot',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Three-quarter framing from mid-thigh or knee level up to the top of the head.',
    aliases: ['american_shot', 'thigh-up', 'knees_up', '3/4_shot'],
    relatedTags: ['upper_body', 'full_body', 'thighhighs', 'zettai_ryouiki'],
    popularity: 'Core',
    postCountEst: '1.9M',
    illustriousNote: 'Ideal framing in SDXL Illustrious to showcase full outfits and skirts while keeping faces crisp.'
  },
  {
    tag: 'full_body',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Complete figure visible from head to toe within the frame.',
    aliases: ['head_to_toe', 'full_figure', 'full_length_shot'],
    relatedTags: ['standing', 'shoes', 'wide_shot', 'cowboy_shot'],
    popularity: 'Core',
    postCountEst: '1.8M',
    illustriousNote: 'Include footwear tags (e.g., loafers, boots) alongside full_body to help anchor the lower frame.'
  },
  {
    tag: 'wide_shot',
    domain: 'pose_camera',
    subcategory: 'Framing & Shot Size',
    description: 'Expansive environmental framing where the character occupies a smaller portion of a grand landscape or room.',
    aliases: ['long_shot', 'establishing_shot', 'scenic_shot'],
    relatedTags: ['scenery', 'full_body', 'outdoors'],
    popularity: 'Core',
    postCountEst: '140K'
  },

  // Camera Angles & Perspective
  {
    tag: 'dutch_angle',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Camera tilted diagonally along its roll axis, creating a sloped horizon line and dynamic tension.',
    aliases: ['tilted_frame', 'canted_angle', 'diagonal_composition'],
    relatedTags: ['dynamic_angle', 'foreshortening', 'action'],
    popularity: 'Core',
    postCountEst: '280K',
    illustriousNote: 'One of the strongest tags in Illustrious for breaking stiff vertical portrait compositions.'
  },
  {
    tag: 'from_above',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'High-angle camera looking down at the subject from overhead.',
    aliases: ['high_angle', 'birds-eye_view', 'overhead_shot'],
    relatedTags: ['looking_up', 'sitting', 'lying', 'foreshortening'],
    popularity: 'Core',
    postCountEst: '690K',
    illustriousNote: 'Pair with looking_up so the character gazes back toward the high camera.'
  },
  {
    tag: 'from_below',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Low-angle camera looking upward at the subject, imparting stature, power, or dramatic scale.',
    aliases: ['low_angle', 'worms-eye_view'],
    relatedTags: ['looking_down', 'standing', 'foreshortening', 'sky'],
    popularity: 'Core',
    postCountEst: '620K',
    illustriousNote: 'Pair with looking_down so the subject looks down toward the viewer.'
  },
  {
    tag: 'from_side',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Camera positioned perpendicular to the subject, capturing their side silhouette or profile.',
    aliases: ['side_view', 'lateral_angle'],
    relatedTags: ['profile', 'looking_at_viewer', 'sideways_glance'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'from_behind',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Camera positioned behind the character showing their back, hair, or rear silhouette.',
    aliases: ['back_view', 'rear_view'],
    relatedTags: ['looking_back', 'back', 'long_hair'],
    popularity: 'Core',
    postCountEst: '710K',
    illustriousNote: 'Combine with looking_back if you still want the character’s face visible over their shoulder.'
  },
  {
    tag: 'profile',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Strict 90-degree side view of the character’s face showing nose and jawline contour.',
    aliases: ['side_profile', 'facial_profile'],
    relatedTags: ['from_side', 'looking_ahead'],
    popularity: 'Core',
    postCountEst: '295K'
  },
  {
    tag: 'foreshortening',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Extreme perspective distortion where a hand, weapon, or limb reaching toward the lens appears much larger.',
    aliases: ['perspective_distortion', 'forced_perspective', 'extreme_perspective'],
    relatedTags: ['reaching_towards_viewer', 'fisheye', 'dynamic_angle', 'dutch_angle'],
    popularity: 'Core',
    postCountEst: '235K'
  },
  {
    tag: 'fisheye',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'Ultra-wide hemispherical lens curvature bending straight background lines around the center.',
    aliases: ['fisheye_lens', 'barrel_distortion', 'ultra_wide_angle'],
    relatedTags: ['foreshortening', 'from_above', 'close-up'],
    popularity: 'Core',
    postCountEst: '85K'
  },
  {
    tag: 'pov',
    domain: 'pose_camera',
    subcategory: 'Camera Angles & Perspective',
    description: 'First-person point-of-view composition where the viewer is directly interacting with the subject in the scene.',
    aliases: ['first_person_view', 'point_of_view'],
    relatedTags: ['pov_hands', 'reaching_towards_viewer', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '340K'
  },

  // Full Body Poses & Stances
  {
    tag: 'standing',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Character upright on their feet.',
    aliases: ['standing_pose', 'upright'],
    relatedTags: ['full_body', 'contrapposto', 'standing_on_one_leg'],
    popularity: 'Core',
    postCountEst: '1.9M'
  },
  {
    tag: 'contrapposto',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Natural asymmetrical standing stance with weight shifted onto one foot, tilting hips and shoulders in opposite angles.',
    aliases: ['weight_shift_pose', 's-curve_stance'],
    relatedTags: ['standing', 'hand_on_hip', 'full_body'],
    popularity: 'Common',
    postCountEst: '45K',
    illustriousNote: 'Prevents rigid A-pose symmetry when generating standing full_body characters.'
  },
  {
    tag: 'sitting',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Character seated on a chair, ground, ledge, or bed.',
    aliases: ['seated', 'sitting_down'],
    relatedTags: ['crossed_legs', 'seiza', 'wariza', 'hugging_knees', 'on_chair'],
    popularity: 'Core',
    postCountEst: '1.8M'
  },
  {
    tag: 'crossed_legs',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'One leg draped elegantly over the other knee while seated.',
    aliases: ['legs_crossed'],
    relatedTags: ['sitting', 'on_chair', 'thighhighs'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'seiza',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Traditional formal Japanese kneeling posture with legs folded underneath the thighs and resting on the heels.',
    aliases: ['formal_kneeling', 'japanese_kneeling'],
    relatedTags: ['sitting', 'kneeling', 'tatami', 'japanese_clothes'],
    popularity: 'Core',
    postCountEst: '95K'
  },
  {
    tag: 'wariza',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'W-sitting posture on the floor where knees are together and lower legs splay outward to each side of the hips.',
    aliases: ['w-sitting', 'pelican_sit'],
    relatedTags: ['sitting', 'on_floor', 'indoors'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'hugging_knees',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Seated with knees drawn up to the chest and arms wrapped around the shins.',
    aliases: ['knees_to_chest', 'fetal_sit', 'taiiku_zuwari'],
    relatedTags: ['sitting', 'looking_at_viewer', 'solo'],
    popularity: 'Core',
    postCountEst: '140K'
  },
  {
    tag: 'kneeling',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Resting on one or both knees with thighs upright.',
    aliases: ['on_knees', 'one_knee'],
    relatedTags: ['seiza', 'sitting', 'all_fours'],
    popularity: 'Core',
    postCountEst: '340K'
  },
  {
    tag: 'squatting',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Crouched low on the feet with knees deeply bent (including slav squat or yankee squat).',
    aliases: ['crouching', 'heels_down_squat'],
    relatedTags: ['sitting', 'from_below', 'streetwear'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'lying',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Reclining horizontally on a bed, sofa, grass, or floor.',
    aliases: ['laying_down', 'reclining'],
    relatedTags: ['on_back', 'on_stomach', 'on_side', 'on_bed', 'from_above'],
    popularity: 'Core',
    postCountEst: '740K'
  },
  {
    tag: 'on_back',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Lying supine face-up on a surface, often shot from overhead.',
    aliases: ['supine', 'lying_on_back'],
    relatedTags: ['lying', 'from_above', 'spread_hair', 'on_bed'],
    popularity: 'Core',
    postCountEst: '420K'
  },
  {
    tag: 'on_stomach',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Lying prone on the belly, often with feet kicked up behind.',
    aliases: ['prone', 'lying_on_stomach'],
    relatedTags: ['lying', 'feet_up', 'chin_rest'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'leaning_forward',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Torso inclined forward toward the camera, creating engaging depth and perspective.',
    aliases: ['bent_forward', 'inclined_torso'],
    relatedTags: ['looking_at_viewer', 'arms_behind_back', 'foreshortening'],
    popularity: 'Core',
    postCountEst: '410K'
  },
  {
    tag: 'jumping',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Airborne mid-leap with floating hair and dynamic limb movement.',
    aliases: ['leaping', 'midair', 'airborne'],
    relatedTags: ['floating_hair', 'dynamic_pose', 'outstretched_arms'],
    popularity: 'Core',
    postCountEst: '185K'
  },
  {
    tag: 'fighting_stance',
    domain: 'pose_camera',
    subcategory: 'Body Poses & Stances',
    description: 'Combat-ready martial arts or weapon stance.',
    aliases: ['battle_pose', 'combat_stance', 'action_pose'],
    relatedTags: ['holding_weapon', 'sword', 'dutch_angle', 'clenched_hand'],
    popularity: 'Core',
    postCountEst: '145K'
  },

  // Hand Gestures & Arm Placement
  {
    tag: 'v',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Index and middle fingers raised in a V peace/victory gesture.',
    aliases: ['v_sign', 'peace_sign', 'victory_sign'],
    relatedTags: ['one_eye_closed', 'smile', 'double_v'],
    popularity: 'Core',
    postCountEst: '650K'
  },
  {
    tag: 'crossed_arms',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Arms folded across the chest in a confident, aloof, or defiant posture.',
    aliases: ['folded_arms', 'arms_crossed'],
    relatedTags: ['standing', 'smug', 'tsurime'],
    popularity: 'Core',
    postCountEst: '480K'
  },
  {
    tag: 'arms_behind_back',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Both arms clasped out of sight behind the lower back, often paired with leaning_forward.',
    aliases: ['hands_behind_back'],
    relatedTags: ['leaning_forward', 'standing', 'smile'],
    popularity: 'Core',
    postCountEst: '390K'
  },
  {
    tag: 'arms_behind_head',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Hands laced behind the back of the head with elbows flared outward in a relaxed or stretching pose.',
    aliases: ['hands_behind_head'],
    relatedTags: ['stretching', 'lying', 'armpits'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'hand_on_hip',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One hand resting on the waist or hip with the elbow bent outward.',
    aliases: ['akimbo', 'hand_on_waist'],
    relatedTags: ['hands_on_hips', 'standing', 'contrapposto'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'hand_on_own_chest',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One hand placed gently over the heart or sternum showing sincerity, relief, or emotion.',
    aliases: ['hand_over_heart', 'touching_chest'],
    relatedTags: ['clenched_hand', 'looking_at_viewer', 'light_smile'],
    popularity: 'Core',
    postCountEst: '360K'
  },
  {
    tag: 'hand_to_own_mouth',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Fingers or palm held near or covering the lips in laughter, gasping, or contemplation.',
    aliases: ['covering_mouth', 'giggling_hand'],
    relatedTags: ['finger_to_mouth', 'surprised', 'smug'],
    popularity: 'Core',
    postCountEst: '310K'
  },
  {
    tag: 'finger_to_mouth',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Index finger resting on the lower lip or chin in a curious, playful, or shushing pose.',
    aliases: ['shushing', 'thinking_pose', 'finger_on_lip'],
    relatedTags: ['hand_to_own_mouth', 'head_tilt', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '280K'
  },
  {
    tag: 'reaching_towards_viewer',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'One hand extended forward toward the camera lens inviting the viewer.',
    aliases: ['outstretched_hand', 'reaching_out'],
    relatedTags: ['foreshortening', 'pov', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '260K'
  },
  {
    tag: 'adjusting_hair',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Fingers tucking hair behind the ear or twirling a lock of hair.',
    aliases: ['hair_tuck', 'touching_hair', 'twirling_hair'],
    relatedTags: ['hand_in_own_hair', 'tying_hair', 'long_hair'],
    popularity: 'Core',
    postCountEst: '320K'
  },
  {
    tag: 'adjusting_glasses',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Pushing spectacles up the bridge of the nose or holding the frame rim.',
    aliases: ['touching_glasses', 'pushing_up_glasses'],
    relatedTags: ['glasses', 'smug', 'looking_at_viewer'],
    popularity: 'Core',
    postCountEst: '115K'
  },
  {
    tag: 'head_tilt',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Head inclined quizzically or cutely to one shoulder (classic Shaft head tilt).',
    aliases: ['tilted_head', 'curious_tilt'],
    relatedTags: ['looking_at_viewer', 'finger_to_mouth', 'smile'],
    popularity: 'Core',
    postCountEst: '640K'
  },
  {
    tag: 'salute',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: ' Crisp hand salute held to the brow or cap brim.',
    aliases: ['military_salute'],
    relatedTags: ['military_uniform', 'peaked_cap', 'one_eye_closed'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'heart_hands',
    domain: 'pose_camera',
    subcategory: 'Hands & Arm Gestures',
    description: 'Both hands curved together to form a heart silhouette (moe moe kyun gesture).',
    aliases: ['hand_heart', 'finger_heart'],
    relatedTags: ['maid', 'smile', 'heart'],
    popularity: 'Core',
    postCountEst: '110K'
  },

  // Lighting, Shadows & Optical Depth
  {
    tag: 'backlighting',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Primary light source positioned behind the subject, creating luminous rim highlights along hair and shoulders.',
    aliases: ['rim_lighting', 'contre-jour', 'backlit'],
    relatedTags: ['sunlight', 'lens_flare', 'light_rays', 'floating_hair'],
    popularity: 'Core',
    postCountEst: '410K',
    illustriousNote: 'Creates gorgeous translucent hair edge glow in SDXL Illustrious.'
  },
  {
    tag: 'dramatic_shadows',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'High-contrast, moody theatrical illumination with rich shadow falloff and directional highlights.',
    aliases: ['cinematic_lighting', 'dramatic_lighting', 'film_lighting'],
    relatedTags: ['backlighting', 'chiaroscuro', 'light_rays', 'depth_of_field'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'chiaroscuro',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Bold artistic interplay between deep dark shadows and bright directional light.',
    aliases: ['high_contrast_shadow', 'tenebrism'],
    relatedTags: ['shade', 'dark_theme', 'backlighting', 'sidelighting', 'dramatic_shadows'],
    popularity: 'Common',
    postCountEst: '75K'
  },
  {
    tag: 'sidelighting',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Light source hitting one side of the subject while leaving the opposite side in cool shadow.',
    aliases: ['split_lighting', 'rim_light_side'],
    relatedTags: ['backlighting', 'window', 'chiaroscuro'],
    popularity: 'Common',
    postCountEst: '95K'
  },
  {
    tag: 'dappled_sunlight',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Filtered pockets of sunlight and leaf shadows cast through tree canopies (komorebi).',
    aliases: ['komorebi', 'filtered_sunlight', 'tree_shade'],
    relatedTags: ['sunlight', 'shade', 'forest', 'nature'],
    popularity: 'Core',
    postCountEst: '165K'
  },
  {
    tag: 'light_rays',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Visible volumetric shafts of light (crepuscular or god rays) cutting through dust, mist, or windows.',
    aliases: ['god_rays', 'crepuscular_rays', 'volumetric_lighting', 'sunbeams'],
    relatedTags: ['sunlight', 'backlighting', 'window', 'light_particles'],
    popularity: 'Core',
    postCountEst: '230K'
  },
  {
    tag: 'lens_flare',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Optical camera streaks and hexagonal light blooms from a bright light source.',
    aliases: ['optical_flare', 'sun_flare'],
    relatedTags: ['backlighting', 'sunlight', 'sky', 'sunset'],
    popularity: 'Core',
    postCountEst: '195K'
  },
  {
    tag: 'depth_of_field',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Shallow aperture optical focus keeping the subject tack-sharp while softening the background or foreground.',
    aliases: ['shallow_depth_of_field', 'dof', 'blurred_background'],
    relatedTags: ['blurry_background', 'bokeh', 'blurry_foreground', 'close-up'],
    popularity: 'Core',
    postCountEst: '590K'
  },
  {
    tag: 'bokeh',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Soft circular out-of-focus light orbs shimmering in the background.',
    aliases: ['light_bokeh', 'out-of-focus_lights'],
    relatedTags: ['depth_of_field', 'blurry_background', 'city_lights', 'night'],
    popularity: 'Core',
    postCountEst: '175K'
  },
  {
    tag: 'chromatic_aberration',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Subtle red/cyan RGB color fringing along high-contrast edges for a polished modern digital anime post-processing look.',
    aliases: ['rgb_shift', 'color_fringing'],
    relatedTags: ['depth_of_field', 'lens_flare', 'glowing'],
    popularity: 'Core',
    postCountEst: '240K'
  },
  {
    tag: 'motion_blur',
    domain: 'pose_camera',
    subcategory: 'Lighting & Optical Effects',
    description: 'Directional streaking of fast-moving limbs, weapons, or passing scenery.',
    aliases: ['speed_blur', 'kinetic_blur'],
    relatedTags: ['fighting_stance', 'running', 'falling_petals'],
    popularity: 'Common',
    postCountEst: '130K'
  }
];
