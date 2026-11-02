export type DomainId =
  | 'character'
  | 'clothing'
  | 'pose_camera'
  | 'art_meta'
  | 'environment';

export type PopularityTier = 'Core' | 'Common' | 'Specialized';

export interface BooruTag {
  /** Canonical booru tag with underscores, e.g. 'big_eyes', 'long_hair', 'dutch_angle' */
  tag: string;
  domain: DomainId;
  subcategory: string;
  description: string;
  aliases: string[];
  relatedTags: string[];
  popularity: PopularityTier;
  /** Approx Danbooru post frequency label for reference */
  postCountEst: string;
  /** Specific usage note for SDXL Illustrious models */
  illustriousNote?: string;
  isCustom?: boolean;
}

export interface DomainMetadata {
  id: DomainId;
  indexNumber: string;
  label: string;
  shortLabel: string;
  description: string;
  promptOrderPriority: number;
  subcategories: string[];
}

export interface PromptPreset {
  id: string;
  name: string;
  description: string;
  tags: string[];
  isBuiltIn?: boolean;
}

export interface PromptHistoryEntry {
  id: string;
  timestamp: string;
  tags: string[];
  actionLabel: string;
}

export interface RecentTagEntry {
  tag: string;
  timestamp: string;
}

export type TextSizePreset = 'sm' | 'md' | 'lg' | 'xl';
export type RowDensityPreset = 'compact' | 'comfortable' | 'spacious';

export interface LexiconDisplaySettings {
  /** Root UI & text scale percentage (85 to 130) */
  fontScalePercent: number;
  /** Tag & description text size preset */
  textSize: TextSizePreset;
  /** Vertical row & card padding density */
  rowDensity: RowDensityPreset;
  /** Number of columns in Grid mode on desktop (2, 3, or 4) */
  gridColumns: 2 | 3 | 4;
  /** Show inline descriptions in table/grid */
  showDescriptions: boolean;
  /** Show inline aliases in table/grid */
  showAliases: boolean;
  /** Show post count column/metadata */
  showPostCounts: boolean;
  /** Show Domain · Subcategory column in table */
  showDomainSubcategory: boolean;
  /** Escape literal parentheses in tags e.g. watercolor_\(medium\) for SD WebUI/ComfyUI */
  escapeParentheses: boolean;
  /** Append a trailing comma to copied prompts */
  trailingComma: boolean;
}

export interface BooruColorOption {
  prefix: string;
  label: string;
  hex: string;
}

export interface DetectedConflict {
  id: string;
  categoryLabel: string;
  tagA: string;
  tagB: string;
  reason: string;
}
