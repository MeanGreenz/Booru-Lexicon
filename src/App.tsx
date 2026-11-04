import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search,
  Copy,
  Check,
  Plus,
  Trash2,
  Star,
  Info,
  Sun,
  Moon,
  LayoutGrid,
  List,
  X,
  ArrowUpDown,
  History,
  SlidersHorizontal,
  RotateCcw,
  Type,
  AlertTriangle,
  Palette,
  Ban,
  ArrowRightLeft,
  Smile,
  Sparkles
} from 'lucide-react';
import {
  ALL_BOORU_TAGS,
  DOMAINS,
  DOMAIN_MAP,
  BUILT_IN_PROMPT_PRESETS,
  BUILT_IN_EXPRESSION_PRESETS,
  FACIAL_MIXER_ZONES,
  BUILT_IN_SPECIES_PRESETS,
  SPECIES_MIXER_ZONES
} from './data';
import {
  CANONICAL_BOORU_COLORS,
  isTagColorable,
  applyColorPrefixToTag,
  getBaseUncoloredTag,
  detectPromptConflicts
} from './data/conflictAndColorRules';
import {
  MODULAR_NEGATIVE_PACKS,
  BUILT_IN_NEGATIVE_PRESETS,
  detectPositiveNegativeOverlaps
} from './data/negativeLibrary';
import {
  BooruTag,
  DomainId,
  PopularityTier,
  PromptPreset,
  NegativePreset,
  ExpressionPreset,
  SpeciesPreset,
  PromptHistoryEntry,
  RecentTagEntry,
  LexiconDisplaySettings,
  TextSizePreset
} from './types/lexicon';

const STORAGE_KEYS = {
  PROMPT_TAGS: 'illustrious_lexicon_prompt_tags_v1',
  NEGATIVE_TAGS: 'illustrious_lexicon_negative_tags_v1',
  FAVORITES: 'illustrious_lexicon_favorites_v1',
  CUSTOM_TAGS: 'illustrious_lexicon_custom_tags_v1',
  SAVED_PRESETS: 'illustrious_lexicon_saved_presets_v1',
  SAVED_NEGATIVE_PRESETS: 'illustrious_lexicon_saved_neg_presets_v1',
  SAVED_EXPRESSION_PRESETS: 'illustrious_lexicon_saved_expr_presets_v1',
  SAVED_SPECIES_PRESETS: 'illustrious_lexicon_saved_species_presets_v1',
  AUTO_SORT: 'illustrious_lexicon_autosort_v1',
  THEME: 'illustrious_lexicon_theme_v1',
  HISTORY_CAP: 'illustrious_lexicon_history_cap_v1',
  PROMPT_HISTORY: 'illustrious_lexicon_prompt_history_v1',
  RECENT_TAGS: 'illustrious_lexicon_recent_tags_v1',
  DISPLAY_SETTINGS: 'illustrious_lexicon_display_settings_v1'
};

const DEFAULT_DISPLAY_SETTINGS: LexiconDisplaySettings = {
  fontScalePercent: 100,
  textSize: 'md',
  rowDensity: 'comfortable',
  gridColumns: 3,
  showDescriptions: true,
  showAliases: true,
  showPostCounts: true,
  showDomainSubcategory: true,
  escapeParentheses: false,
  trailingComma: false
};

const TEXT_SIZE_ORDER: TextSizePreset[] = ['sm', 'md', 'lg', 'xl'];

export default function App() {
  // Theme state (default dark)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
  }, [isDark]);

  // Display & Typography Settings state
  const [displaySettings, setDisplaySettings] = useState<LexiconDisplaySettings>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.DISPLAY_SETTINGS);
      if (raw) {
        return { ...DEFAULT_DISPLAY_SETTINGS, ...JSON.parse(raw) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_DISPLAY_SETTINGS;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  // Sync display settings to localStorage & apply root font-size scale
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.DISPLAY_SETTINGS, JSON.stringify(displaySettings));
    const root = document.documentElement;
    root.style.fontSize = `${displaySettings.fontScalePercent}%`;
    return () => {
      root.style.fontSize = '';
    };
  }, [displaySettings]);

  const updateSetting = <K extends keyof LexiconDisplaySettings>(
    key: K,
    value: LexiconDisplaySettings[K]
  ) => {
    setDisplaySettings((prev) => ({ ...prev, [key]: value }));
  };

  const stepTextSize = (direction: -1 | 1) => {
    setDisplaySettings((prev) => {
      const currentIndex = TEXT_SIZE_ORDER.indexOf(prev.textSize);
      const nextIndex = Math.max(0, Math.min(TEXT_SIZE_ORDER.length - 1, currentIndex + direction));
      return { ...prev, textSize: TEXT_SIZE_ORDER[nextIndex] };
    });
  };

  // Dynamic typography & spacing classes derived from displaySettings
  const tagFontClasses = useMemo(() => {
    switch (displaySettings.textSize) {
      case 'sm':
        return 'text-xs';
      case 'md':
        return 'text-[13px]';
      case 'lg':
        return 'text-[15px]';
      case 'xl':
        return 'text-[17px]';
    }
  }, [displaySettings.textSize]);

  const descFontClasses = useMemo(() => {
    switch (displaySettings.textSize) {
      case 'sm':
        return 'text-[11px]';
      case 'md':
        return 'text-xs';
      case 'lg':
        return 'text-sm';
      case 'xl':
        return 'text-base';
    }
  }, [displaySettings.textSize]);

  const metaFontClasses = useMemo(() => {
    switch (displaySettings.textSize) {
      case 'sm':
        return 'text-[10px]';
      case 'md':
        return 'text-[11px]';
      case 'lg':
        return 'text-xs';
      case 'xl':
        return 'text-sm';
    }
  }, [displaySettings.textSize]);

  const tableCellPadding = useMemo(() => {
    switch (displaySettings.rowDensity) {
      case 'compact':
        return 'py-1.5';
      case 'comfortable':
        return 'py-2.5';
      case 'spacious':
        return 'py-4';
    }
  }, [displaySettings.rowDensity]);

  const gridCardPadding = useMemo(() => {
    switch (displaySettings.rowDensity) {
      case 'compact':
        return 'p-3 gap-2';
      case 'comfortable':
        return 'p-4 gap-3';
      case 'spacious':
        return 'p-5 gap-4';
    }
  }, [displaySettings.rowDensity]);

  const gridColsClass = useMemo(() => {
    switch (displaySettings.gridColumns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 2xl:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4';
    }
  }, [displaySettings.gridColumns]);

  // Custom user-created tags persisted in localStorage
  const [customTags, setCustomTags] = useState<BooruTag[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_TAGS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_TAGS, JSON.stringify(customTags));
  }, [customTags]);

  // Combined lexicon
  const allTags = useMemo(() => {
    const customSet = new Set(customTags.map((t) => t.tag));
    const filteredBuiltIn = ALL_BOORU_TAGS.filter((t) => !customSet.has(t.tag));
    return [...customTags, ...filteredBuiltIn];
  }, [customTags]);

  const tagMap = useMemo(() => {
    const map = new Map<string, BooruTag>();
    for (const item of allTags) {
      map.set(item.tag, item);
    }
    return map;
  }, [allTags]);

  // Navigation & filter state
  const [selectedDomain, setSelectedDomain] = useState<
    DomainId | 'all' | 'favorites' | 'history' | 'custom'
  >('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [popularityFilter, setPopularityFilter] = useState<PopularityTier | 'all'>('all');
  const [letterFilter, setLetterFilter] = useState<string>('all');
  const [sortMode, setSortMode] = useState<'canonical' | 'alphabetical'>('canonical');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Adjustable History Cap state (1 to 200 items, default 25)
  const [historyCap, setHistoryCap] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.HISTORY_CAP);
    const parsed = saved ? parseInt(saved, 10) : 25;
    return Number.isFinite(parsed) && parsed >= 1 ? Math.min(parsed, 200) : 25;
  });

  // Prompt History state
  const [promptHistory, setPromptHistory] = useState<PromptHistoryEntry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PROMPT_HISTORY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Recently used tags history state
  const [recentTagsHistory, setRecentTagsHistory] = useState<RecentTagEntry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT_TAGS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Enforce cap whenever historyCap changes
  useEffect(() => {
    const safeCap = Math.max(1, Math.min(200, historyCap));
    localStorage.setItem(STORAGE_KEYS.HISTORY_CAP, String(safeCap));
    setPromptHistory((prev) => (prev.length > safeCap ? prev.slice(0, safeCap) : prev));
    setRecentTagsHistory((prev) => (prev.length > safeCap ? prev.slice(0, safeCap) : prev));
  }, [historyCap]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROMPT_HISTORY, JSON.stringify(promptHistory));
  }, [promptHistory]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.RECENT_TAGS, JSON.stringify(recentTagsHistory));
  }, [recentTagsHistory]);

  // Helper to record a tag in Recent Tags History (bounded by historyCap)
  const recordTagHistory = (tagKey: string) => {
    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    setRecentTagsHistory((prev) => {
      const filtered = prev.filter((item) => item.tag !== tagKey);
      return [{ tag: tagKey, timestamp: now }, ...filtered].slice(0, historyCap);
    });
  };

  // Helper to record a prompt snapshot in Prompt History (bounded by historyCap)
  const recordPromptHistory = (tagsToRecord: string[], actionLabel: string) => {
    if (tagsToRecord.length === 0) return;
    const now = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    const joinedNew = tagsToRecord.join(', ');

    setPromptHistory((prev) => {
      if (prev.length > 0 && prev[0].tags.join(', ') === joinedNew) {
        const updatedTop: PromptHistoryEntry = {
          ...prev[0],
          timestamp: now,
          actionLabel
        };
        return [updatedTop, ...prev.slice(1)].slice(0, historyCap);
      }
      const entry: PromptHistoryEntry = {
        id: `hist_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
        timestamp: now,
        tags: [...tagsToRecord],
        actionLabel
      };
      return [entry, ...prev].slice(0, historyCap);
    });
  };

  // Prompt Composer state
  const [selectedPromptTags, setSelectedPromptTags] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PROMPT_TAGS);
      if (raw) return JSON.parse(raw);
    } catch {
      // ignore
    }
    return [
      'masterpiece',
      'best_quality',
      'very_awa',
      'newest',
      'absurdres',
      '1girl',
      'solo',
      'long_hair',
      'big_eyes',
      'looking_at_viewer'
    ];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROMPT_TAGS, JSON.stringify(selectedPromptTags));
  }, [selectedPromptTags]);

  const [autoSortPrompt, setAutoSortPrompt] = useState<boolean>(() => {
    const raw = localStorage.getItem(STORAGE_KEYS.AUTO_SORT);
    return raw ? raw === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.AUTO_SORT, String(autoSortPrompt));
  }, [autoSortPrompt]);

  // Active tag currently open in the inline Color Prefixer inside the Prompt Composer
  const [colorPickerTargetTag, setColorPickerTargetTag] = useState<string | null>(null);

  // Favorites state
  const [favoriteTags, setFavoriteTags] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return raw
        ? JSON.parse(raw)
        : [
            'masterpiece',
            'best_quality',
            'very_awa',
            'newest',
            'big_eyes',
            'dutch_angle',
            'cowboy_shot',
            'backlighting'
          ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favoriteTags));
  }, [favoriteTags]);

  // Quick input for adding a tag directly to Favorites
  const [quickFavInput, setQuickFavInput] = useState<string>('');

  // Saved user presets (Favorite Prompts)
  const [userPresets, setUserPresets] = useState<PromptPreset[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SAVED_PRESETS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SAVED_PRESETS, JSON.stringify(userPresets));
  }, [userPresets]);

  // Active Negative Prompt Builder state
  const [selectedNegativeTags, setSelectedNegativeTags] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.NEGATIVE_TAGS);
      if (raw) return JSON.parse(raw);
    } catch {
      // ignore
    }
    return [...BUILT_IN_NEGATIVE_PRESETS[0].tags];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NEGATIVE_TAGS, JSON.stringify(selectedNegativeTags));
  }, [selectedNegativeTags]);

  // Saved Custom Negative Presets state
  const [userNegativePresets, setUserNegativePresets] = useState<NegativePreset[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SAVED_NEGATIVE_PRESETS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.SAVED_NEGATIVE_PRESETS,
      JSON.stringify(userNegativePresets)
    );
  }, [userNegativePresets]);

  const [quickNegInput, setQuickNegInput] = useState<string>('');
  const [activeNegativePackId, setActiveNegativePackId] = useState<string>(
    MODULAR_NEGATIVE_PACKS[0].id
  );
  const [newNegPresetName, setNewNegPresetName] = useState<string>('');
  const [showSaveNegPresetInput, setShowSaveNegPresetInput] = useState<boolean>(false);

  // Tag Inspector state
  const [inspectedTagKey, setInspectedTagKey] = useState<string>('big_eyes');
  const inspectedTag = useMemo(() => {
    const direct = tagMap.get(inspectedTagKey);
    if (direct) return direct;
    // If inspecting a color-prefixed variant like 'black_bikini', fall back to base 'bikini' metadata with the prefixed tag name
    const { baseTag } = getBaseUncoloredTag(inspectedTagKey);
    const baseEntry = tagMap.get(baseTag);
    if (baseEntry) {
      return {
        ...baseEntry,
        tag: inspectedTagKey,
        description: `Color-modified variant (${inspectedTagKey}) of ${baseEntry.tag}: ${baseEntry.description}`
      };
    }
    return allTags[0];
  }, [tagMap, inspectedTagKey, allTags]);

  // Copy feedback states
  const [copiedPositive, setCopiedPositive] = useState(false);
  const [copiedActiveNegative, setCopiedActiveNegative] = useState(false);
  const [copiedNegativeId, setCopiedNegativeId] = useState<string | null>(null);
  const [copiedSingleTag, setCopiedSingleTag] = useState<string | null>(null);
  const [copiedHistoryId, setCopiedHistoryId] = useState<string | null>(null);

  // Right sidebar active tab
  const [composerSection, setComposerSection] = useState<
    'positive' | 'favorites' | 'history' | 'presets' | 'negative'
  >('positive');
  const [newPresetName, setNewPresetName] = useState('');
  const [showSavePresetInput, setShowSavePresetInput] = useState(false);

  // Custom Tag Modal state
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [customTagInput, setCustomTagInput] = useState('');
  const [customDomainInput, setCustomDomainInput] = useState<DomainId>('character');
  const [customSubcategoryInput, setCustomSubcategoryInput] = useState('Subject & Count');
  const [customDescInput, setCustomDescInput] = useState('');
  const [customAliasesInput, setCustomAliasesInput] = useState('');

  // Face & Expression Studio state
  const [expressionStudioTab, setExpressionStudioTab] = useState<'presets' | 'mixer'>('presets');
  const [isExpressionStudioExpanded, setIsExpressionStudioExpanded] = useState<boolean>(true);
  const [userExpressionPresets, setUserExpressionPresets] = useState<ExpressionPreset[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SAVED_EXPRESSION_PRESETS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [newExprPresetName, setNewExprPresetName] = useState<string>('');
  const [showSaveExprPresetInput, setShowSaveExprPresetInput] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.SAVED_EXPRESSION_PRESETS,
      JSON.stringify(userExpressionPresets)
    );
  }, [userExpressionPresets]);

  // Species, Race & Trait Studio state
  const [speciesStudioTab, setSpeciesStudioTab] = useState<'presets' | 'mixer'>('presets');
  const [isSpeciesStudioExpanded, setIsSpeciesStudioExpanded] = useState<boolean>(true);
  const [userSpeciesPresets, setUserSpeciesPresets] = useState<SpeciesPreset[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.SAVED_SPECIES_PRESETS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [newSpeciesPresetName, setNewSpeciesPresetName] = useState<string>('');
  const [showSaveSpeciesPresetInput, setShowSaveSpeciesPresetInput] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEYS.SAVED_SPECIES_PRESETS,
      JSON.stringify(userSpeciesPresets)
    );
  }, [userSpeciesPresets]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync subcategory when domain changes and scroll viewport to top
  const handleSelectDomain = (
    domain: DomainId | 'all' | 'favorites' | 'history' | 'custom'
  ) => {
    setSelectedDomain(domain);
    setSelectedSubcategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Available subcategories for current domain
  const availableSubcategories = useMemo(() => {
    if (
      selectedDomain === 'all' ||
      selectedDomain === 'favorites' ||
      selectedDomain === 'history' ||
      selectedDomain === 'custom'
    ) {
      return [];
    }
    return DOMAIN_MAP[selectedDomain]?.subcategories || [];
  }, [selectedDomain]);

  // Filtered and sorted lexicon tags
  const filteredTags = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    const underscoredQuery = rawQuery.replace(/\s+/g, '_');
    const spacedQuery = rawQuery.replace(/_/g, ' ');

    let sourceList: BooruTag[] = allTags;
    if (selectedDomain === 'history') {
      sourceList = recentTagsHistory
        .map((entry) => {
          const direct = tagMap.get(entry.tag);
          if (direct) return direct;
          const { baseTag } = getBaseUncoloredTag(entry.tag);
          const base = tagMap.get(baseTag);
          if (base) {
            return { ...base, tag: entry.tag };
          }
          return undefined;
        })
        .filter((item): item is BooruTag => Boolean(item));
    }

    const results = sourceList.filter((item) => {
      if (selectedDomain === 'favorites' && !favoriteTags.includes(item.tag)) {
        return false;
      }
      if (selectedDomain === 'custom' && !item.isCustom) {
        return false;
      }
      if (
        selectedDomain !== 'all' &&
        selectedDomain !== 'favorites' &&
        selectedDomain !== 'history' &&
        selectedDomain !== 'custom' &&
        item.domain !== selectedDomain
      ) {
        return false;
      }
      if (selectedSubcategory !== 'all' && item.subcategory !== selectedSubcategory) {
        return false;
      }
      if (popularityFilter !== 'all' && item.popularity !== popularityFilter) {
        return false;
      }
      if (letterFilter !== 'all') {
        if (letterFilter === '#') {
          if (!/^[0-9]/.test(item.tag)) return false;
        } else if (!item.tag.toLowerCase().startsWith(letterFilter.toLowerCase())) {
          return false;
        }
      }

      if (!rawQuery) return true;

      const tagLower = item.tag.toLowerCase();
      const tagSpaced = tagLower.replace(/_/g, ' ');
      const descLower = item.description.toLowerCase();
      const subcatLower = item.subcategory.toLowerCase();
      const aliasMatch = item.aliases.some((alias) => {
        const aLower = alias.toLowerCase();
        const aSpaced = aLower.replace(/_/g, ' ');
        return (
          aLower.includes(underscoredQuery) ||
          aLower.includes(rawQuery) ||
          aSpaced.includes(spacedQuery)
        );
      });

      return (
        tagLower.includes(underscoredQuery) ||
        tagLower.includes(rawQuery) ||
        tagSpaced.includes(spacedQuery) ||
        descLower.includes(rawQuery) ||
        descLower.includes(spacedQuery) ||
        subcatLower.includes(rawQuery) ||
        aliasMatch
      );
    });

    if (sortMode === 'alphabetical') {
      return [...results].sort((a, b) => a.tag.localeCompare(b.tag));
    }
    return results;
  }, [
    allTags,
    selectedDomain,
    selectedSubcategory,
    popularityFilter,
    letterFilter,
    searchQuery,
    sortMode,
    favoriteTags,
    recentTagsHistory,
    tagMap
  ]);

  // Domain counts for sidebar
  const domainCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: allTags.length,
      favorites: favoriteTags.length,
      history: recentTagsHistory.length,
      custom: customTags.length
    };
    for (const d of DOMAINS) {
      counts[d.id] = allTags.filter((t) => t.domain === d.id).length;
    }
    return counts;
  }, [allTags, favoriteTags, recentTagsHistory, customTags]);

  // Helper to resolve domain priority even for color-prefixed tags (e.g. black_bikini -> clothing)
  const getTagPriority = (tagKey: string): number => {
    const direct = tagMap.get(tagKey);
    if (direct) return DOMAIN_MAP[direct.domain]?.promptOrderPriority ?? 99;
    const { baseTag } = getBaseUncoloredTag(tagKey);
    const base = tagMap.get(baseTag);
    if (base) return DOMAIN_MAP[base.domain]?.promptOrderPriority ?? 99;
    return 99;
  };

  // Ordered prompt tags for SDXL Illustrious output
  const orderedPromptTags = useMemo(() => {
    if (!autoSortPrompt) return selectedPromptTags;
    return [...selectedPromptTags].sort((a, b) => getTagPriority(a) - getTagPriority(b));
  }, [selectedPromptTags, autoSortPrompt, tagMap]);

  // Detect any active conflicts or contradictions in the current prompt
  const activeConflicts = useMemo(() => {
    return detectPromptConflicts(selectedPromptTags);
  }, [selectedPromptTags]);

  // Set of tags currently involved in a conflict for fast highlighting
  const conflictingTagSet = useMemo(() => {
    const set = new Set<string>();
    for (const c of activeConflicts) {
      set.add(c.tagA);
      set.add(c.tagB);
    }
    return set;
  }, [activeConflicts]);

  // Detect overlaps or rating/guard contradictions between Positive and Negative prompts
  const positiveNegativeOverlaps = useMemo(() => {
    return detectPositiveNegativeOverlaps(selectedPromptTags, selectedNegativeTags);
  }, [selectedPromptTags, selectedNegativeTags]);

  // Format a single tag according to output parameters (e.g., escaping parentheses if enabled)
  const formatSingleTagForOutput = (rawTag: string) => {
    if (!displaySettings.escapeParentheses) return rawTag;
    return rawTag.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  };

  // Formatted prompt string (strictly canonical Booru underscore tags separated by comma + space)
  const formattedPromptString = useMemo(() => {
    if (orderedPromptTags.length === 0) return '';
    const joined = orderedPromptTags.map(formatSingleTagForOutput).join(', ');
    return displaySettings.trailingComma ? `${joined}, ` : joined;
  }, [orderedPromptTags, displaySettings.escapeParentheses, displaySettings.trailingComma]);

  // Formatted active negative prompt string
  const formattedNegativeString = useMemo(() => {
    if (selectedNegativeTags.length === 0) return '';
    const joined = selectedNegativeTags.map(formatSingleTagForOutput).join(', ');
    return displaySettings.trailingComma ? `${joined}, ` : joined;
  }, [selectedNegativeTags, displaySettings.escapeParentheses, displaySettings.trailingComma]);

  // Toggle tag in prompt composer + record in recent tag history when adding
  const toggleTagInPrompt = (tagKey: string) => {
    const isAdding = !selectedPromptTags.includes(tagKey);
    setSelectedPromptTags((prev) =>
      prev.includes(tagKey) ? prev.filter((t) => t !== tagKey) : [...prev, tagKey]
    );
    if (isAdding) {
      recordTagHistory(tagKey);
    }
    setInspectedTagKey(tagKey);
  };

  // Toggle tag in Active Negative Prompt
  const toggleTagInNegative = (tagKey: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedNegativeTags((prev) =>
      prev.includes(tagKey) ? prev.filter((t) => t !== tagKey) : [...prev, tagKey]
    );
  };

  // Move a tag between Positive and Negative prompts
  const handleMoveTagBetweenPrompts = (
    tagKey: string,
    direction: 'to_negative' | 'to_positive'
  ) => {
    if (direction === 'to_negative') {
      setSelectedPromptTags((prev) => prev.filter((t) => t !== tagKey));
      setSelectedNegativeTags((prev) => (prev.includes(tagKey) ? prev : [...prev, tagKey]));
    } else {
      setSelectedNegativeTags((prev) => prev.filter((t) => t !== tagKey));
      setSelectedPromptTags((prev) => (prev.includes(tagKey) ? prev : [...prev, tagKey]));
      recordTagHistory(tagKey);
    }
  };

  // Add one or more comma-separated tags to the Active Negative Prompt via manual input
  const handleQuickAddNegative = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = quickNegInput
      .split(',')
      .map((s) =>
        s
          .trim()
          .toLowerCase()
          .replace(/\s+/g, '_')
          .replace(/[^a-z0-9_()!'-]/g, '')
      )
      .filter(Boolean);
    if (parts.length === 0) return;

    setSelectedNegativeTags((prev) => {
      const merged = new Set([...prev, ...parts]);
      return Array.from(merged);
    });
    setQuickNegInput('');
  };

  // Toggle all tags in a modular negative pack
  const handleToggleNegativePack = (packTags: string[], allCurrentlyIncluded: boolean) => {
    if (allCurrentlyIncluded) {
      const packSet = new Set(packTags);
      setSelectedNegativeTags((prev) => prev.filter((t) => !packSet.has(t)));
    } else {
      setSelectedNegativeTags((prev) => {
        const merged = new Set([...prev, ...packTags]);
        return Array.from(merged);
      });
    }
  };

  // Copy active negative prompt
  const handleCopyActiveNegative = async () => {
    if (!formattedNegativeString) return;
    try {
      await navigator.clipboard.writeText(formattedNegativeString);
      setCopiedActiveNegative(true);
      setTimeout(() => setCopiedActiveNegative(false), 1800);
    } catch {
      // ignore
    }
  };

  // Save current active negative prompt as a custom negative preset
  const handleSaveNegativePreset = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newNegPresetName.trim();
    if (!trimmed || selectedNegativeTags.length === 0) return;
    const newPreset: NegativePreset = {
      id: `user_neg_preset_${Date.now()}`,
      name: trimmed,
      description: `${selectedNegativeTags.length} negative tags saved from Negative Builder.`,
      tags: [...selectedNegativeTags],
      isBuiltIn: false
    };
    setUserNegativePresets((prev) => [newPreset, ...prev]);
    setNewNegPresetName('');
    setShowSaveNegPresetInput(false);
  };

  const handleDeleteNegativePreset = (id: string) => {
    setUserNegativePresets((prev) => prev.filter((p) => p.id !== id));
  };

  // Apply a color prefix to a target tag (either replacing the uncolored/previous-colored tag in prompt or adding the new colored tag)
  const handleApplyColorPrefix = (sourceTag: string, colorPrefix: string) => {
    const coloredTag = applyColorPrefixToTag(sourceTag, colorPrefix);
    const { baseTag } = getBaseUncoloredTag(sourceTag);

    setSelectedPromptTags((prev) => {
      // If sourceTag or its uncolored baseTag is already in prompt, replace it in-place with coloredTag
      const hasSource = prev.includes(sourceTag);
      const hasBase = prev.includes(baseTag);
      if (hasSource) {
        return prev.map((t) => (t === sourceTag ? coloredTag : t));
      }
      if (hasBase) {
        return prev.map((t) => (t === baseTag ? coloredTag : t));
      }
      if (prev.includes(coloredTag)) {
        return prev;
      }
      return [...prev, coloredTag];
    });

    recordTagHistory(coloredTag);
    setInspectedTagKey(coloredTag);
    setColorPickerTargetTag(null);
  };

  // Strip color prefix back to uncolored base tag
  const handleResetTagColor = (sourceTag: string) => {
    const { baseTag } = getBaseUncoloredTag(sourceTag);
    setSelectedPromptTags((prev) => prev.map((t) => (t === sourceTag ? baseTag : t)));
    setInspectedTagKey(baseTag);
    setColorPickerTargetTag(null);
  };

  // Resolve a conflict by keeping `tagToKeep` and removing `tagToRemove`
  const handleResolveConflict = (tagToKeep: string, tagToRemove: string) => {
    setSelectedPromptTags((prev) => prev.filter((t) => t !== tagToRemove));
    setInspectedTagKey(tagToKeep);
  };

  // Toggle favorite tag (add or remove)
  const toggleFavorite = (tagKey: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setFavoriteTags((prev) =>
      prev.includes(tagKey) ? prev.filter((t) => t !== tagKey) : [tagKey, ...prev]
    );
  };

  // Add a tag to Favorites by name from the Favorites quick-add input
  const handleQuickAddFavorite = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = quickFavInput
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_()!-]/g, '');
    if (!normalized) return;

    if (!tagMap.has(normalized)) {
      const newCustom: BooruTag = {
        tag: normalized,
        domain: 'character',
        subcategory: 'Subject & Count',
        description: `User-favorited booru tag (${normalized}).`,
        aliases: [],
        relatedTags: ['best_quality', '1girl'],
        popularity: 'Specialized',
        postCountEst: 'Fav',
        isCustom: true
      };
      setCustomTags((prev) => [newCustom, ...prev]);
    }

    setFavoriteTags((prev) => (prev.includes(normalized) ? prev : [normalized, ...prev]));
    setQuickFavInput('');
  };

  // Copy active positive prompt & record to Prompt History
  const handleCopyPrompt = async () => {
    if (!formattedPromptString) return;
    try {
      await navigator.clipboard.writeText(formattedPromptString);
      setCopiedPositive(true);
      recordPromptHistory(orderedPromptTags, 'Copied Prompt');
      setTimeout(() => setCopiedPositive(false), 1800);
    } catch {
      recordPromptHistory(orderedPromptTags, 'Copied Prompt');
    }
  };

  // Copy single tag & record to Tag History
  const handleCopySingleTag = async (tagKey: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    recordTagHistory(tagKey);
    try {
      await navigator.clipboard.writeText(formatSingleTagForOutput(tagKey));
      setCopiedSingleTag(tagKey);
      setTimeout(() => setCopiedSingleTag(null), 1400);
    } catch {
      // ignore
    }
  };

  // Copy negative preset
  const handleCopyNegative = async (id: string, tags: string[]) => {
    try {
      const out = tags.map(formatSingleTagForOutput).join(', ');
      await navigator.clipboard.writeText(displaySettings.trailingComma ? `${out}, ` : out);
      setCopiedNegativeId(id);
      setTimeout(() => setCopiedNegativeId(null), 1800);
    } catch {
      // ignore
    }
  };

  // Copy history entry
  const handleCopyHistoryEntry = async (entry: PromptHistoryEntry) => {
    try {
      const out = entry.tags.map(formatSingleTagForOutput).join(', ');
      await navigator.clipboard.writeText(displaySettings.trailingComma ? `${out}, ` : out);
      setCopiedHistoryId(entry.id);
      setTimeout(() => setCopiedHistoryId(null), 1600);
    } catch {
      // ignore
    }
  };

  // Ensure Illustrious Quality Header tags are present
  const handleAddQualityHeader = () => {
    const headerTags = ['masterpiece', 'best_quality', 'very_awa', 'newest', 'absurdres'];
    setSelectedPromptTags((prev) => {
      const missing = headerTags.filter((t) => !prev.includes(t));
      return [...missing, ...prev];
    });
    headerTags.forEach((t) => recordTagHistory(t));
  };

  // Save current prompt as preset / favorite prompt
  const handleSavePreset = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newPresetName.trim();
    if (!trimmed || selectedPromptTags.length === 0) return;
    const newPreset: PromptPreset = {
      id: `user_preset_${Date.now()}`,
      name: trimmed,
      description: `${selectedPromptTags.length} booru tags saved from workspace.`,
      tags: [...orderedPromptTags],
      isBuiltIn: false
    };
    setUserPresets((prev) => [newPreset, ...prev]);
    recordPromptHistory(orderedPromptTags, `Saved "${trimmed}"`);
    setNewPresetName('');
    setShowSavePresetInput(false);
  };

  const handleDeletePreset = (id: string) => {
    setUserPresets((prev) => prev.filter((p) => p.id !== id));
  };

  // Active facial/expression tags currently in the positive prompt
  const activeFacialTags = useMemo(() => {
    return selectedPromptTags.filter((tagKey) => {
      const direct = tagMap.get(tagKey);
      if (direct?.domain === 'face_expressions') return true;
      const { baseTag } = getBaseUncoloredTag(tagKey);
      const base = tagMap.get(baseTag);
      return base?.domain === 'face_expressions';
    });
  }, [selectedPromptTags, tagMap]);

  // Apply or toggle a composite expression preset
  const handleToggleExpressionPreset = (preset: ExpressionPreset, replaceExistingFacial: boolean) => {
    const allAlreadyActive = preset.tags.every((t) => selectedPromptTags.includes(t));
    if (allAlreadyActive && !replaceExistingFacial) {
      const presetSet = new Set(preset.tags);
      setSelectedPromptTags((prev) => prev.filter((t) => !presetSet.has(t)));
      return;
    }

    setSelectedPromptTags((prev) => {
      const baseList = replaceExistingFacial
        ? prev.filter((tagKey) => {
            const direct = tagMap.get(tagKey);
            if (direct?.domain === 'face_expressions') return false;
            const { baseTag } = getBaseUncoloredTag(tagKey);
            const base = tagMap.get(baseTag);
            return base?.domain !== 'face_expressions';
          })
        : prev;
      const merged = new Set([...baseList, ...preset.tags]);
      return Array.from(merged);
    });
    preset.tags.forEach((t) => recordTagHistory(t));
    recordPromptHistory(
      Array.from(new Set([...selectedPromptTags, ...preset.tags])),
      `Expression: ${preset.name}`
    );
  };

  // Clear only facial/expression tags from the active prompt
  const handleClearFacialTags = () => {
    setSelectedPromptTags((prev) =>
      prev.filter((tagKey) => {
        const direct = tagMap.get(tagKey);
        if (direct?.domain === 'face_expressions') return false;
        const { baseTag } = getBaseUncoloredTag(tagKey);
        const base = tagMap.get(baseTag);
        return base?.domain !== 'face_expressions';
      })
    );
  };

  // Save current active facial tags as a custom expression preset
  const handleSaveExpressionPreset = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newExprPresetName.trim();
    if (!trimmed || activeFacialTags.length === 0) return;
    const newExpr: ExpressionPreset = {
      id: `user_expr_${Date.now()}`,
      name: trimmed,
      archetype: 'Custom Expression',
      description: `${activeFacialTags.length} facial tags saved from active prompt.`,
      tags: [...activeFacialTags],
      isBuiltIn: false
    };
    setUserExpressionPresets((prev) => [newExpr, ...prev]);
    setNewExprPresetName('');
    setShowSaveExprPresetInput(false);
  };

  const handleDeleteExpressionPreset = (id: string) => {
    setUserExpressionPresets((prev) => prev.filter((p) => p.id !== id));
  };

  // Active species/racial/trait tags currently in the positive prompt
  const activeSpeciesTags = useMemo(() => {
    return selectedPromptTags.filter((tagKey) => {
      const direct = tagMap.get(tagKey);
      if (direct?.domain === 'species_traits') return true;
      const { baseTag } = getBaseUncoloredTag(tagKey);
      const base = tagMap.get(baseTag);
      return base?.domain === 'species_traits';
    });
  }, [selectedPromptTags, tagMap]);

  // Apply or toggle a composite species/racial preset
  const handleToggleSpeciesPreset = (preset: SpeciesPreset, replaceExistingSpecies: boolean) => {
    const allAlreadyActive = preset.tags.every((t) => selectedPromptTags.includes(t));
    if (allAlreadyActive && !replaceExistingSpecies) {
      const presetSet = new Set(preset.tags);
      setSelectedPromptTags((prev) => prev.filter((t) => !presetSet.has(t)));
      return;
    }

    setSelectedPromptTags((prev) => {
      const baseList = replaceExistingSpecies
        ? prev.filter((tagKey) => {
            const direct = tagMap.get(tagKey);
            if (direct?.domain === 'species_traits') return false;
            const { baseTag } = getBaseUncoloredTag(tagKey);
            const base = tagMap.get(baseTag);
            return base?.domain !== 'species_traits';
          })
        : prev;
      const merged = new Set([...baseList, ...preset.tags]);
      return Array.from(merged);
    });
    preset.tags.forEach((t) => recordTagHistory(t));
    recordPromptHistory(
      Array.from(new Set([...selectedPromptTags, ...preset.tags])),
      `Species: ${preset.name}`
    );
  };

  // Clear only species/racial tags from the active prompt
  const handleClearSpeciesTags = () => {
    setSelectedPromptTags((prev) =>
      prev.filter((tagKey) => {
        const direct = tagMap.get(tagKey);
        if (direct?.domain === 'species_traits') return false;
        const { baseTag } = getBaseUncoloredTag(tagKey);
        const base = tagMap.get(baseTag);
        return base?.domain !== 'species_traits';
      })
    );
  };

  // Save current active species tags as a custom species preset
  const handleSaveSpeciesPreset = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newSpeciesPresetName.trim();
    if (!trimmed || activeSpeciesTags.length === 0) return;
    const newSpec: SpeciesPreset = {
      id: `user_species_${Date.now()}`,
      name: trimmed,
      lineage: 'Custom Lineage',
      description: `${activeSpeciesTags.length} species & trait tags saved from active prompt.`,
      tags: [...activeSpeciesTags],
      isBuiltIn: false
    };
    setUserSpeciesPresets((prev) => [newSpec, ...prev]);
    setNewSpeciesPresetName('');
    setShowSaveSpeciesPresetInput(false);
  };

  const handleDeleteSpeciesPreset = (id: string) => {
    setUserSpeciesPresets((prev) => prev.filter((p) => p.id !== id));
  };

  // Create custom booru tag (normalizing spaces to underscores)
  const handleCreateCustomTag = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedTag = customTagInput
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_()!:'><-]/g, '');

    if (!normalizedTag) return;

    const aliases = customAliasesInput
      .split(',')
      .map((s) => s.trim().toLowerCase().replace(/\s+/g, '_'))
      .filter(Boolean);

    const newTag: BooruTag = {
      tag: normalizedTag,
      domain: customDomainInput,
      subcategory: customSubcategoryInput || DOMAIN_MAP[customDomainInput].subcategories[0],
      description:
        customDescInput.trim() ||
        `Custom SDXL Illustrious booru tag (${normalizedTag}) added to local lexicon.`,
      aliases,
      relatedTags: ['1girl', 'solo', 'best_quality'],
      popularity: 'Specialized',
      postCountEst: 'Custom',
      isCustom: true
    };

    setCustomTags((prev) => [newTag, ...prev.filter((t) => t.tag !== normalizedTag)]);
    setSelectedPromptTags((prev) =>
      prev.includes(normalizedTag) ? prev : [...prev, normalizedTag]
    );
    recordTagHistory(normalizedTag);
    setInspectedTagKey(normalizedTag);
    setCustomTagInput('');
    setCustomDescInput('');
    setCustomAliasesInput('');
    setIsCustomModalOpen(false);
  };

  // Adjust History Cap handler (clamped 1..200)
  const handleHistoryCapChange = (val: number) => {
    if (!Number.isFinite(val)) return;
    const clamped = Math.max(1, Math.min(200, Math.round(val)));
    setHistoryCap(clamped);
  };

  const alphabet = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100">
      {/* Top Bar Contract: Strictly 3 zones separated by gap-8 */}
      <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleSelectDomain('all');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 font-display"
        >
          Illustrious Lexicon
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          {DOMAINS.map((domain) => {
            const isActive = selectedDomain === domain.id;
            return (
              <a
                key={domain.id}
                href={`#${domain.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectDomain(domain.id);
                }}
                className={`whitespace-nowrap shrink-0 transition-colors underline-offset-8 hover:text-slate-900 dark:hover:text-slate-100 hover:underline ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 underline font-semibold'
                    : ''
                }`}
              >
                {domain.shortLabel}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            onClick={handleCopyPrompt}
            disabled={selectedPromptTags.length === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {copiedPositive ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied {selectedPromptTags.length} Tags</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Prompt ({selectedPromptTags.length})</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main 3-Column Workspace Layout (1440px+ full-width desktop layout) */}
      <div className="flex-1 flex flex-col lg:flex-row max-w-[1920px] w-full mx-auto">
        {/* Left Taxonomy Sidebar (260px on desktop) */}
        <aside className="w-full lg:w-[260px] shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1522] p-4 flex flex-col justify-between gap-6">
          <div className="space-y-6">
            {/* Overview, Favorites & History Views */}
            <div>
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Index & Library
                </span>
                <span className="text-xs font-mono tabular-nums text-slate-400 dark:text-slate-500">
                  {allTags.length} tags
                </span>
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => handleSelectDomain('all')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedDomain === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <span className="whitespace-nowrap shrink-0">All Booru Tags</span>
                  <span className="font-mono tabular-nums opacity-80">{domainCounts.all}</span>
                </button>

                <button
                  onClick={() => handleSelectDomain('favorites')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedDomain === 'favorites'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                    <Star
                      className={`w-3.5 h-3.5 ${
                        selectedDomain === 'favorites' ? 'text-white' : 'text-amber-500'
                      }`}
                      fill="currentColor"
                    />
                    <span>Favorite Tags</span>
                  </span>
                  <span className="font-mono tabular-nums opacity-80">
                    {domainCounts.favorites}
                  </span>
                </button>

                <button
                  onClick={() => handleSelectDomain('history')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                    selectedDomain === 'history'
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
                    <History className="w-3.5 h-3.5 opacity-80" />
                    <span>Tag History</span>
                  </span>
                  <span className="font-mono tabular-nums opacity-80">
                    {domainCounts.history}/{historyCap}
                  </span>
                </button>

                {customTags.length > 0 && (
                  <button
                    onClick={() => handleSelectDomain('custom')}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedDomain === 'custom'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70'
                    }`}
                  >
                    <span className="whitespace-nowrap shrink-0">Custom Added Tags</span>
                    <span className="font-mono tabular-nums opacity-80">{domainCounts.custom}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Domain Hierarchy */}
            <div>
              <div className="px-2 mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Illustrious Domains
                </span>
              </div>
              <div className="space-y-1.5">
                {DOMAINS.map((domain) => {
                  const isDomainActive = selectedDomain === domain.id;
                  return (
                    <div key={domain.id} className="space-y-1">
                      <button
                        onClick={() => handleSelectDomain(domain.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                          isDomainActive
                            ? 'bg-slate-900 text-white dark:bg-slate-800 dark:text-white'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <span className="truncate text-left">
                          {domain.indexNumber}. {domain.shortLabel}
                        </span>
                        <span className="font-mono tabular-nums text-[11px] opacity-75 shrink-0 ml-2">
                          {domainCounts[domain.id]}
                        </span>
                      </button>

                      {/* Subcategory tree when domain is active */}
                      {isDomainActive && (
                        <div className="pl-4 pr-1 py-1 space-y-0.5 border-l border-slate-200 dark:border-slate-800 ml-3">
                          <button
                            onClick={() => setSelectedSubcategory('all')}
                            className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                              selectedSubcategory === 'all'
                                ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/70 dark:bg-indigo-950/40'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                          >
                            All {domain.shortLabel}
                          </button>
                          {domain.subcategories.map((sub) => {
                            const subCount = allTags.filter(
                              (t) => t.domain === domain.id && t.subcategory === sub
                            ).length;
                            return (
                              <button
                                key={sub}
                                onClick={() => setSelectedSubcategory(sub)}
                                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs transition-colors cursor-pointer ${
                                  selectedSubcategory === sub
                                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50/70 dark:bg-indigo-950/40'
                                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                                }`}
                              >
                                <span className="truncate">{sub}</span>
                                <span className="font-mono tabular-nums text-[11px] opacity-60 ml-1.5">
                                  {subCount}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Workspace Utilities at bottom of sidebar */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => setIsSettingsOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                isSettingsOpen
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Text & Display Settings</span>
              </span>
              <span className="font-mono text-[11px] opacity-80">
                {displaySettings.fontScalePercent}%
              </span>
            </button>

            <button
              onClick={() => {
                if (
                  selectedDomain !== 'all' &&
                  selectedDomain !== 'favorites' &&
                  selectedDomain !== 'history' &&
                  selectedDomain !== 'custom'
                ) {
                  setCustomDomainInput(selectedDomain);
                  setCustomSubcategoryInput(DOMAIN_MAP[selectedDomain].subcategories[0]);
                }
                setIsCustomModalOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Booru Tag</span>
            </button>

            <button
              onClick={() => setIsDark((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
            >
              <span className="whitespace-nowrap">Appearance</span>
              <span className="inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                {isDark ? (
                  <>
                    <Moon className="w-3.5 h-3.5" />
                    <span>Dark Slate</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5" />
                    <span>Light Paper</span>
                  </>
                )}
              </span>
            </button>
          </div>
        </aside>

        {/* Center Main Lexicon Viewport */}
        <main className="flex-1 min-w-0 flex flex-col bg-slate-50 dark:bg-[#0B0F17]">
          {/* Context Header & Search Toolbar */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E131F] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span>SDXL Illustrious Tag Reference</span>
                  <span aria-hidden="true">·</span>
                  <span>Canonical Underscore Syntax</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{filteredTags.length} matching entries</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">
                  {selectedDomain === 'all'
                    ? 'Complete Booru Tag Lexicon'
                    : selectedDomain === 'favorites'
                    ? 'Favorite Booru Tags'
                    : selectedDomain === 'history'
                    ? `Recently Used Tag History (Cap: ${historyCap})`
                    : selectedDomain === 'custom'
                    ? 'Custom User Tags'
                    : `${DOMAIN_MAP[selectedDomain].indexNumber}. ${DOMAIN_MAP[selectedDomain].label}`}
                </h1>
              </div>

              {/* Quick Text Size Controls, Display Settings Button, Sort & View Mode */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg">
                  <button
                    type="button"
                    onClick={() => stepTextSize(-1)}
                    disabled={displaySettings.textSize === 'sm'}
                    title="Decrease tag text size"
                    className="px-2 py-1 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-35 cursor-pointer"
                  >
                    A-
                  </button>
                  <span className="px-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase select-none">
                    {displaySettings.textSize}
                  </span>
                  <button
                    type="button"
                    onClick={() => stepTextSize(1)}
                    disabled={displaySettings.textSize === 'xl'}
                    title="Increase tag text size"
                    className="px-2 py-1 text-xs font-mono font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-35 cursor-pointer"
                  >
                    A+
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSettingsOpen
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Display Settings</span>
                </button>

                <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg">
                  <button
                    onClick={() => setSortMode('canonical')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      sortMode === 'canonical'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {selectedDomain === 'history' ? 'Recent Order' : 'Taxonomy Order'}
                  </button>
                  <button
                    onClick={() => setSortMode('alphabetical')}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      sortMode === 'alphabetical'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    A–Z Order
                  </button>
                </div>

                <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg">
                  <button
                    onClick={() => setViewMode('table')}
                    title="Compact Lexicon Table"
                    className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                      viewMode === 'table'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    title="Detailed Lexicon Grid"
                    className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                      viewMode === 'grid'
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Expandable Display, Text Size & Lexicon Parameters Panel */}
            {isSettingsOpen && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Type className="w-4 h-4 text-indigo-500" />
                    <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                      Text Size, Density & Output Parameters
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setDisplaySettings(DEFAULT_DISPLAY_SETTINGS)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Defaults</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSettingsOpen(false)}
                      className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Lexicon Text Size
                    </label>
                    <div className="grid grid-cols-4 gap-1 p-1 bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 rounded-lg">
                      {(
                        [
                          { id: 'sm', label: 'Small' },
                          { id: 'md', label: 'Default' },
                          { id: 'lg', label: 'Large' },
                          { id: 'xl', label: 'X-Large' }
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => updateSetting('textSize', opt.id)}
                          className={`py-1.5 px-2 text-xs font-medium rounded transition-colors cursor-pointer ${
                            displaySettings.textSize === opt.id
                              ? 'bg-indigo-600 text-white'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="pt-1 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 dark:text-slate-400">
                          Global UI Font Scale
                        </span>
                        <span className="font-mono tabular-nums font-semibold text-slate-800 dark:text-slate-200">
                          {displaySettings.fontScalePercent}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min={85}
                        max={130}
                        step={5}
                        value={displaySettings.fontScalePercent}
                        onChange={(e) =>
                          updateSetting('fontScalePercent', Number(e.target.value))
                        }
                        className="w-full accent-indigo-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Row & Card Density
                    </label>
                    <div className="grid grid-cols-3 gap-1 p-1 bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 rounded-lg">
                      {(
                        [
                          { id: 'compact', label: 'Compact' },
                          { id: 'comfortable', label: 'Normal' },
                          { id: 'spacious', label: 'Spacious' }
                        ] as const
                      ).map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => updateSetting('rowDensity', opt.id)}
                          className={`py-1.5 px-2 text-xs font-medium rounded transition-colors cursor-pointer ${
                            displaySettings.rowDensity === opt.id
                              ? 'bg-indigo-600 text-white'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="pt-1 space-y-1">
                      <span className="block text-xs text-slate-500 dark:text-slate-400">
                        Grid View Desktop Columns
                      </span>
                      <div className="grid grid-cols-3 gap-1 p-1 bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 rounded-lg">
                        {([2, 3, 4] as const).map((cols) => (
                          <button
                            key={cols}
                            type="button"
                            onClick={() => {
                              updateSetting('gridColumns', cols);
                              setViewMode('grid');
                            }}
                            className={`py-1 px-2 text-xs font-mono rounded transition-colors cursor-pointer ${
                              displaySettings.gridColumns === cols
                                ? 'bg-indigo-600 text-white font-semibold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                            }`}
                          >
                            {cols} Cols
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Visible Lexicon Details
                    </label>
                    <div className="space-y-1.5 text-xs">
                      <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 cursor-pointer">
                        <span className="text-slate-700 dark:text-slate-300">
                          Show Definitions Inline
                        </span>
                        <input
                          type="checkbox"
                          checked={displaySettings.showDescriptions}
                          onChange={(e) =>
                            updateSetting('showDescriptions', e.target.checked)
                          }
                          className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                      <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 cursor-pointer">
                        <span className="text-slate-700 dark:text-slate-300">
                          Show Search Aliases Inline
                        </span>
                        <input
                          type="checkbox"
                          checked={displaySettings.showAliases}
                          onChange={(e) => updateSetting('showAliases', e.target.checked)}
                          className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                      <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 cursor-pointer">
                        <span className="text-slate-700 dark:text-slate-300">
                          Show Post Frequency Counts
                        </span>
                        <input
                          type="checkbox"
                          checked={displaySettings.showPostCounts}
                          onChange={(e) => updateSetting('showPostCounts', e.target.checked)}
                          className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Prompt Output & History
                    </label>
                    <div className="space-y-1.5 text-xs">
                      <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 cursor-pointer">
                        <span
                          className="text-slate-700 dark:text-slate-300"
                          title="Escapes tags like watercolor_(medium) into watercolor_\(medium\) for A1111/ComfyUI"
                        >
                          Escape Tag Parentheses \( \)
                        </span>
                        <input
                          type="checkbox"
                          checked={displaySettings.escapeParentheses}
                          onChange={(e) =>
                            updateSetting('escapeParentheses', e.target.checked)
                          }
                          className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                      <label className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 cursor-pointer">
                        <span className="text-slate-700 dark:text-slate-300">
                          Append Trailing Comma
                        </span>
                        <input
                          type="checkbox"
                          checked={displaySettings.trailingComma}
                          onChange={(e) => updateSetting('trailingComma', e.target.checked)}
                          className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                        />
                      </label>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800">
                        <span className="text-slate-700 dark:text-slate-300">
                          History Cap Limit
                        </span>
                        <input
                          type="number"
                          min={1}
                          max={200}
                          value={historyCap}
                          onChange={(e) => handleHistoryCapChange(Number(e.target.value))}
                          className="w-16 px-2 py-0.5 text-xs font-mono tabular-nums text-right bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contextual Management Banner when inside Favorites or History view */}
            {selectedDomain === 'favorites' && (
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <form onSubmit={handleQuickAddFavorite} className="flex items-center gap-2 flex-1">
                  <input
                    type="text"
                    value={quickFavInput}
                    onChange={(e) => setQuickFavInput(e.target.value)}
                    placeholder="Add tag to Favorites (e.g. big_eyes, serafuku)..."
                    className="flex-1 max-w-sm px-3 py-1.5 text-xs font-mono bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    + Add to Favorites
                  </button>
                </form>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={favoriteTags.length === 0}
                    onClick={() => {
                      setSelectedPromptTags((prev) => {
                        const merged = new Set([...prev, ...favoriteTags]);
                        return Array.from(merged);
                      });
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 disabled:opacity-40 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Add All Favorites to Prompt
                  </button>
                  <button
                    type="button"
                    disabled={favoriteTags.length === 0}
                    onClick={() => setFavoriteTags([])}
                    className="px-3 py-1.5 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 disabled:opacity-40 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Clear Favorites
                  </button>
                </div>
              </div>
            )}

            {selectedDomain === 'history' && (
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Adjustable History Length Cap:
                  </span>
                  <div className="flex items-center gap-1">
                    {[10, 25, 50, 100].map((presetCap) => (
                      <button
                        key={presetCap}
                        type="button"
                        onClick={() => handleHistoryCapChange(presetCap)}
                        className={`px-2 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                          historyCap === presetCap
                            ? 'bg-indigo-600 text-white font-semibold'
                            : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {presetCap}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={historyCap}
                      onChange={(e) => handleHistoryCapChange(Number(e.target.value))}
                      aria-label="Custom History Cap"
                      className="w-16 px-2 py-1 text-xs font-mono tabular-nums bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 rounded text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                      max items ({recentTagsHistory.length}/{historyCap} stored)
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    disabled={recentTagsHistory.length === 0}
                    onClick={() => setRecentTagsHistory([])}
                    className="px-3 py-1.5 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 disabled:opacity-40 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Clear Tag History
                  </button>
                </div>
              </div>
            )}

            {/* Interactive Species, Race & Trait Studio (Composite Lineages + 4-Zone Racial Mixer) */}
            {selectedDomain === 'species_traits' && (
              <div className="rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/60 dark:bg-[#0F1522]/80">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                          Species, Race & Trait Studio
                        </h2>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                          · {activeSpeciesTags.length} species/trait tags active
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setSpeciesStudioTab('presets');
                          setIsSpeciesStudioExpanded(true);
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          speciesStudioTab === 'presets' && isSpeciesStudioExpanded
                            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        Composite Lineages ({BUILT_IN_SPECIES_PRESETS.length + userSpeciesPresets.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSpeciesStudioTab('mixer');
                          setIsSpeciesStudioExpanded(true);
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          speciesStudioTab === 'mixer' && isSpeciesStudioExpanded
                            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        4-Zone Trait Mixer
                      </button>
                    </div>

                    {activeSpeciesTags.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearSpeciesTags}
                        className="px-2.5 py-1 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Reset Species ({activeSpeciesTags.length})
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsSpeciesStudioExpanded((prev) => !prev)}
                      className="px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer whitespace-nowrap"
                    >
                      {isSpeciesStudioExpanded ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                </div>

                {isSpeciesStudioExpanded && (
                  <div className="p-4 space-y-4">
                    {speciesStudioTab === 'presets' ? (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Click any composite lineage to add or toggle its species, ear, horn, wing, tail, and fur/scale combination, or use <strong>Swap Species</strong> to replace your current racial traits cleanly.
                          </p>
                          {!showSaveSpeciesPresetInput ? (
                            <button
                              type="button"
                              disabled={activeSpeciesTags.length === 0}
                              onClick={() => setShowSaveSpeciesPresetInput(true)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 disabled:opacity-40 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Save Active Species as Preset</span>
                            </button>
                          ) : (
                            <form onSubmit={handleSaveSpeciesPreset} className="flex items-center gap-1.5">
                              <input
                                type="text"
                                value={newSpeciesPresetName}
                                onChange={(e) => setNewSpeciesPresetName(e.target.value)}
                                placeholder="Species preset name..."
                                className="px-2.5 py-1 text-xs bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                              />
                              <button
                                type="submit"
                                className="px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded cursor-pointer"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={() => setShowSaveSpeciesPresetInput(false)}
                                className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                              >
                                Cancel
                              </button>
                            </form>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2.5">
                          {[...userSpeciesPresets, ...BUILT_IN_SPECIES_PRESETS].map((preset) => {
                            const activeCount = preset.tags.filter((t) =>
                              selectedPromptTags.includes(t)
                            ).length;
                            const isFullyActive = activeCount === preset.tags.length;

                            return (
                              <div
                                key={preset.id}
                                className={`p-3 rounded-lg border transition-colors flex flex-col justify-between gap-2.5 ${
                                  isFullyActive
                                    ? 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-400 dark:border-indigo-600'
                                    : 'bg-white dark:bg-[#0F1522] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                      {preset.lineage}
                                    </span>
                                    <div className="flex items-center gap-1 shrink-0">
                                      <span className="text-[11px] font-mono tabular-nums text-slate-400 dark:text-slate-500">
                                        {activeCount}/{preset.tags.length}
                                      </span>
                                      {!preset.isBuiltIn && (
                                        <button
                                          type="button"
                                          onClick={() => handleDeleteSpeciesPreset(preset.id)}
                                          title="Delete custom species preset"
                                          className="text-slate-400 hover:text-rose-500 cursor-pointer p-0.5"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">
                                    {preset.name}
                                  </h3>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                                    {preset.description}
                                  </p>
                                  <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 truncate pt-0.5">
                                    {preset.tags.join(', ')}
                                  </p>
                                </div>

                                <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                                  <button
                                    type="button"
                                    onClick={() => handleToggleSpeciesPreset(preset, false)}
                                    className={`flex-1 py-1 px-2 text-[11px] font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                                      isFullyActive
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                  >
                                    {isFullyActive ? 'Active (Remove)' : '+ Add Lineage'}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleToggleSpeciesPreset(preset, true)}
                                    title="Replace all currently active species & trait tags with this lineage preset"
                                    className="py-1 px-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70 hover:bg-indigo-600 hover:text-white rounded transition-colors cursor-pointer whitespace-nowrap"
                                  >
                                    Swap Species
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* 4-Zone Species & Trait Mixer */
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                        {SPECIES_MIXER_ZONES.map((zone) => {
                          const isSubcatSelected = selectedSubcategory === zone.subcategory;
                          return (
                            <div
                              key={zone.id}
                              className="p-3 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">
                                    {zone.label}
                                  </h3>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setSelectedSubcategory(
                                        isSubcatSelected ? 'all' : zone.subcategory
                                      )
                                    }
                                    className={`text-[11px] font-medium cursor-pointer whitespace-nowrap ${
                                      isSubcatSelected
                                        ? 'text-indigo-600 dark:text-indigo-400 font-semibold underline'
                                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                                    }`}
                                  >
                                    {isSubcatSelected ? 'Showing Zone' : 'Filter Table →'}
                                  </button>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                  {zone.quickTags.map((tagKey) => {
                                    const isActive = selectedPromptTags.includes(tagKey);
                                    const isConflicting = conflictingTagSet.has(tagKey);
                                    return (
                                      <button
                                        key={tagKey}
                                        type="button"
                                        onClick={() => toggleTagInPrompt(tagKey)}
                                        className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer whitespace-nowrap ${
                                          isActive
                                            ? isConflicting
                                              ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-semibold'
                                              : 'bg-indigo-600 border-indigo-600 text-white font-semibold'
                                            : 'bg-slate-50 dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                                        }`}
                                      >
                                        {tagKey}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Interactive Face & Expression Studio (Composite Presets + 4-Zone Facial Mixer) */}
            {selectedDomain === 'face_expressions' && (
              <div className="rounded-xl bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white/60 dark:bg-[#0F1522]/80">
                  <div className="flex items-center gap-3">
                    <Smile className="w-4 h-4 text-indigo-500 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                          Face & Expression Studio
                        </h2>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                          · {activeFacialTags.length} facial tags active
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                      <button
                        type="button"
                        onClick={() => {
                          setExpressionStudioTab('presets');
                          setIsExpressionStudioExpanded(true);
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          expressionStudioTab === 'presets' && isExpressionStudioExpanded
                            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        Composite Presets ({BUILT_IN_EXPRESSION_PRESETS.length + userExpressionPresets.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setExpressionStudioTab('mixer');
                          setIsExpressionStudioExpanded(true);
                        }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          expressionStudioTab === 'mixer' && isExpressionStudioExpanded
                            ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        4-Zone Feature Mixer
                      </button>
                    </div>

                    {activeFacialTags.length > 0 && (
                      <button
                        type="button"
                        onClick={handleClearFacialTags}
                        className="px-2.5 py-1 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Reset Face ({activeFacialTags.length})
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsExpressionStudioExpanded((prev) => !prev)}
                      className="px-2.5 py-1 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer whitespace-nowrap"
                    >
                      {isExpressionStudioExpanded ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                </div>

                {isExpressionStudioExpanded && (
                  <div className="p-4 space-y-4">
                    {expressionStudioTab === 'presets' ? (
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Click any composite preset to add or toggle its eyebrow, eye, mouth, and blush combination, or use <strong>Swap Face</strong> to replace your current facial tags cleanly.
                          </p>
                          {!showSaveExprPresetInput ? (
                            <button
                              type="button"
                              disabled={activeFacialTags.length === 0}
                              onClick={() => setShowSaveExprPresetInput(true)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 disabled:opacity-40 rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Save Active Face as Preset</span>
                            </button>
                          ) : (
                            <form onSubmit={handleSaveExpressionPreset} className="flex items-center gap-1.5">
                              <input
                                type="text"
                                value={newExprPresetName}
                                onChange={(e) => setNewExprPresetName(e.target.value)}
                                placeholder="Expression preset name..."
                                className="px-2.5 py-1 text-xs bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                              />
                              <button
                                type="submit"
                                className="px-2.5 py-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded cursor-pointer"
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                onClick={() => setShowSaveExprPresetInput(false)}
                                className="px-2 py-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                              >
                                Cancel
                              </button>
                            </form>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2.5">
                          {[...userExpressionPresets, ...BUILT_IN_EXPRESSION_PRESETS].map((preset) => {
                            const activeCount = preset.tags.filter((t) =>
                              selectedPromptTags.includes(t)
                            ).length;
                            const isFullyActive = activeCount === preset.tags.length;

                            return (
                              <div
                                key={preset.id}
                                className={`p-3 rounded-lg border transition-colors flex flex-col justify-between gap-2.5 ${
                                  isFullyActive
                                    ? 'bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-400 dark:border-indigo-600'
                                    : 'bg-white dark:bg-[#0F1522] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                                }`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                                      {preset.archetype}
                                    </span>
                                    <div className="flex items-center gap-1 shrink-0">
                                      <span className="text-[11px] font-mono tabular-nums text-slate-400 dark:text-slate-500">
                                        {activeCount}/{preset.tags.length}
                                      </span>
                                      {!preset.isBuiltIn && (
                                        <button
                                          type="button"
                                          onClick={() => handleDeleteExpressionPreset(preset.id)}
                                          title="Delete custom expression preset"
                                          className="text-slate-400 hover:text-rose-500 cursor-pointer p-0.5"
                                        >
                                          <Trash2 className="w-3 h-3" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">
                                    {preset.name}
                                  </h3>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                                    {preset.description}
                                  </p>
                                  <p className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 truncate pt-0.5">
                                    {preset.tags.join(', ')}
                                  </p>
                                </div>

                                <div className="flex items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                                  <button
                                    type="button"
                                    onClick={() => handleToggleExpressionPreset(preset, false)}
                                    className={`flex-1 py-1 px-2 text-[11px] font-semibold rounded transition-colors cursor-pointer whitespace-nowrap ${
                                      isFullyActive
                                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                  >
                                    {isFullyActive ? 'Active (Remove)' : '+ Add Combo'}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleToggleExpressionPreset(preset, true)}
                                    title="Replace all currently active facial tags with this expression preset"
                                    className="py-1 px-2 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/70 hover:bg-indigo-600 hover:text-white rounded transition-colors cursor-pointer whitespace-nowrap"
                                  >
                                    Swap Face
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      /* 4-Zone Facial Feature Mixer */
                      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                        {FACIAL_MIXER_ZONES.map((zone) => {
                          const isSubcatSelected = selectedSubcategory === zone.subcategory;
                          return (
                            <div
                              key={zone.id}
                              className="p-3 rounded-lg bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 flex flex-col justify-between gap-3"
                            >
                              <div className="space-y-2">
                                <div className="flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                                  <h3 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">
                                    {zone.label}
                                  </h3>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setSelectedSubcategory(
                                        isSubcatSelected ? 'all' : zone.subcategory
                                      )
                                    }
                                    className={`text-[11px] font-medium cursor-pointer whitespace-nowrap ${
                                      isSubcatSelected
                                        ? 'text-indigo-600 dark:text-indigo-400 font-semibold underline'
                                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                                    }`}
                                  >
                                    {isSubcatSelected ? 'Showing Zone' : 'Filter Table →'}
                                  </button>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                  {zone.quickTags.map((tagKey) => {
                                    const isActive = selectedPromptTags.includes(tagKey);
                                    const isConflicting = conflictingTagSet.has(tagKey);
                                    return (
                                      <button
                                        key={tagKey}
                                        type="button"
                                        onClick={() => toggleTagInPrompt(tagKey)}
                                        className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer whitespace-nowrap ${
                                          isActive
                                            ? isConflicting
                                              ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-semibold'
                                              : 'bg-indigo-600 border-indigo-600 text-white font-semibold'
                                            : 'bg-slate-50 dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-400'
                                        }`}
                                      >
                                        {tagKey}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Search Input & Popularity Tier Filter Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search canonical tags (e.g. big_eyes, gyaru, latex, kabedon) or aliases (press / to focus)..."
                  className="w-full pl-10 pr-20 py-2.5 text-sm bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                />
                {searchQuery ? (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                  >
                    Clear
                  </button>
                ) : (
                  <span className="hidden sm:inline-block absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    Press /
                  </span>
                )}
              </div>

              {/* Popularity Tier Segmented Filter */}
              <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg shrink-0">
                {(['all', 'Core', 'Common', 'Specialized'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setPopularityFilter(tier)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      popularityFilter === tier
                        ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {tier === 'all' ? 'All Tiers' : tier}
                  </button>
                ))}
              </div>
            </div>

            {/* Subcategory Filter Buttons when inside a specific Domain */}
            {availableSubcategories.length > 0 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedSubcategory === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  All Subcategories
                </button>
                {availableSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedSubcategory === sub
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}

            {/* Alphabetical Quick Jump Bar */}
            <div className="flex items-center gap-1 overflow-x-auto pt-1">
              <button
                onClick={() => setLetterFilter('all')}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  letterFilter === 'all'
                    ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                ALL
              </button>
              {alphabet.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setLetterFilter(letter === letterFilter ? 'all' : letter)}
                  className={`w-6 h-6 flex items-center justify-center text-[11px] font-mono rounded transition-colors shrink-0 cursor-pointer ${
                    letterFilter === letter
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Lexicon Data Viewport */}
          <div className="flex-1 p-6">
            {filteredTags.length === 0 ? (
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0F1522] p-12 text-center max-w-lg mx-auto my-8">
                <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {selectedDomain === 'favorites'
                    ? 'Your Favorites list is empty'
                    : selectedDomain === 'history'
                    ? 'No recent tags in history yet'
                    : 'No matching booru tags found'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {selectedDomain === 'favorites'
                    ? 'Click the star icon next to any tag in the lexicon or use the input bar above to add tags to your Favorites.'
                    : selectedDomain === 'history'
                    ? 'As you add or copy tags in the lexicon, they will automatically appear here up to your configured history cap.'
                    : 'No entries matched your current search or filter criteria. You can reset your filters or add a new custom booru tag.'}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedDomain('all');
                      setSelectedSubcategory('all');
                      setPopularityFilter('all');
                      setLetterFilter('all');
                    }}
                    className="px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Browse All Tags
                  </button>
                  <button
                    onClick={() => {
                      setCustomTagInput(searchQuery.trim().replace(/\s+/g, '_'));
                      setIsCustomModalOpen(true);
                    }}
                    className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                  >
                    Create Custom Tag
                  </button>
                </div>
              </div>
            ) : viewMode === 'table' ? (
              /* High-Density Table View */
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-[#0F1522]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/70 dark:bg-slate-900/50">
                        <th className="py-2.5 pl-4 pr-2 w-10">Add</th>
                        <th className="py-2.5 px-3">Canonical Booru Tag</th>
                        {displaySettings.showDomainSubcategory && (
                          <th className="py-2.5 px-3 hidden xl:table-cell">
                            Domain · Subcategory
                          </th>
                        )}
                        {(displaySettings.showDescriptions || displaySettings.showAliases) && (
                          <th className="py-2.5 px-3">
                            {displaySettings.showDescriptions && displaySettings.showAliases
                              ? 'Definition & Common Aliases'
                              : displaySettings.showDescriptions
                              ? 'Definition'
                              : 'Common Aliases'}
                          </th>
                        )}
                        {displaySettings.showPostCounts && (
                          <th className="py-2.5 px-3 text-right hidden sm:table-cell">Posts</th>
                        )}
                        <th className="py-2.5 pl-2 pr-4 text-right w-32">Favorite & Tools</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/80">
                      {filteredTags.map((item) => {
                        const isSelected = selectedPromptTags.includes(item.tag);
                        const isNegated = selectedNegativeTags.includes(item.tag);
                        const isFav = favoriteTags.includes(item.tag);
                        const isInspected = inspectedTag?.tag === item.tag;
                        const canColor = isTagColorable(item.tag);
                        const domainMeta = DOMAIN_MAP[item.domain];

                        return (
                          <tr
                            key={item.tag}
                            onClick={() => toggleTagInPrompt(item.tag)}
                            className={`group transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-50/70 dark:bg-indigo-950/30 hover:bg-indigo-100/70 dark:hover:bg-indigo-950/50'
                                : isNegated
                                ? 'bg-rose-50/50 dark:bg-rose-950/20 hover:bg-rose-100/50 dark:hover:bg-rose-950/30'
                                : isInspected
                                ? 'bg-slate-100/70 dark:bg-slate-800/40'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/30'
                            }`}
                          >
                            {/* Prompt toggle button */}
                            <td className={`${tableCellPadding} pl-4 pr-2 align-middle`}>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleTagInPrompt(item.tag);
                                }}
                                aria-label={isSelected ? `Remove ${item.tag}` : `Add ${item.tag}`}
                                className={`w-6 h-6 rounded flex items-center justify-center transition-colors cursor-pointer ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white'
                                    : 'border border-slate-300 dark:border-slate-700 text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-500'
                                }`}
                              >
                                {isSelected ? (
                                  <Check className="w-3.5 h-3.5" />
                                ) : (
                                  <Plus className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </td>

                            {/* Canonical Tag String with underscores */}
                            <td className={`${tableCellPadding} px-3 align-middle whitespace-nowrap`}>
                              <span
                                className={`font-mono ${tagFontClasses} font-semibold ${
                                  isSelected
                                    ? 'text-indigo-600 dark:text-indigo-400'
                                    : isNegated
                                    ? 'text-rose-600 dark:text-rose-400 line-through'
                                    : 'text-slate-900 dark:text-slate-100'
                                }`}
                              >
                                {item.tag}
                              </span>
                            </td>

                            {/* Unboxed Metadata: Domain · Subcategory */}
                            {displaySettings.showDomainSubcategory && (
                              <td
                                className={`${tableCellPadding} px-3 align-middle hidden xl:table-cell whitespace-nowrap ${metaFontClasses} text-slate-500 dark:text-slate-400`}
                              >
                                <span>{domainMeta?.shortLabel}</span>
                                <span className="mx-1.5" aria-hidden="true">
                                  ·
                                </span>
                                <span>{item.subcategory}</span>
                              </td>
                            )}

                            {/* Description & unboxed aliases */}
                            {(displaySettings.showDescriptions || displaySettings.showAliases) && (
                              <td className={`${tableCellPadding} px-3 align-middle max-w-md`}>
                                {displaySettings.showDescriptions && (
                                  <p
                                    className={`${descFontClasses} text-slate-700 dark:text-slate-300 line-clamp-1`}
                                  >
                                    {item.description}
                                  </p>
                                )}
                                {displaySettings.showAliases && item.aliases.length > 0 && (
                                  <p
                                    className={`${metaFontClasses} text-slate-400 dark:text-slate-500 font-mono truncate mt-0.5`}
                                  >
                                    Aliases: {item.aliases.join(' · ')}
                                  </p>
                                )}
                              </td>
                            )}

                            {/* Tabular Post Count */}
                            {displaySettings.showPostCounts && (
                              <td
                                className={`${tableCellPadding} px-3 align-middle text-right hidden sm:table-cell whitespace-nowrap font-mono tabular-nums ${metaFontClasses} text-slate-500 dark:text-slate-400`}
                              >
                                {item.postCountEst}
                              </td>
                            )}

                            {/* Row Actions: Send to Negative, Color Prefixer Trigger, Favorite Star, Copy single tag, Inspect */}
                            <td
                              className={`${tableCellPadding} pl-2 pr-4 align-middle text-right whitespace-nowrap`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="inline-flex items-center justify-end gap-1">
                                <button
                                  type="button"
                                  onClick={(e) => toggleTagInNegative(item.tag, e)}
                                  title={
                                    isNegated
                                      ? `Remove "${item.tag}" from Negative Prompt`
                                      : `Send "${item.tag}" to Negative Prompt`
                                  }
                                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                                    isNegated
                                      ? 'text-rose-500 bg-rose-500/10 hover:bg-rose-500/20'
                                      : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                                  }`}
                                >
                                  <Ban className="w-3.5 h-3.5" />
                                </button>
                                {canColor && (
                                  <button
                                    type="button"
                                    onClick={() => setInspectedTagKey(item.tag)}
                                    title={`Open Color Prefixer for ${item.tag} in Inspector`}
                                    className="p-1.5 rounded text-slate-400 hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                  >
                                    <Palette className="w-3.5 h-3.5" />
                                  </button>
                                )}
                                <button
                                  type="button"
                                  onClick={(e) => toggleFavorite(item.tag, e)}
                                  title={
                                    isFav ? 'Remove from Favorites' : 'Add to Favorites'
                                  }
                                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                                    isFav
                                      ? 'text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                                      : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                                  }`}
                                >
                                  <Star
                                    className="w-3.5 h-3.5"
                                    fill={isFav ? 'currentColor' : 'none'}
                                  />
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => handleCopySingleTag(item.tag, e)}
                                  title={`Copy "${item.tag}"`}
                                  className="p-1.5 rounded text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                                >
                                  {copiedSingleTag === item.tag ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setInspectedTagKey(item.tag)}
                                  title="Inspect tag details & related tags"
                                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                                    isInspected
                                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60'
                                      : 'text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                                  }`}
                                >
                                  <Info className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* Detailed Grid View (Single-Elevation Cards, Zero-Pill Metadata) */
              <div className={`grid ${gridColsClass} gap-4`}>
                {filteredTags.map((item) => {
                  const isSelected = selectedPromptTags.includes(item.tag);
                  const isNegated = selectedNegativeTags.includes(item.tag);
                  const isFav = favoriteTags.includes(item.tag);
                  const canColor = isTagColorable(item.tag);
                  const domainMeta = DOMAIN_MAP[item.domain];

                  return (
                    <div
                      key={item.tag}
                      onClick={() => toggleTagInPrompt(item.tag)}
                      className={`${gridCardPadding} rounded-xl border transition-colors cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-indigo-50/50 dark:bg-indigo-950/25 border-indigo-500/60 dark:border-indigo-500/60'
                          : isNegated
                          ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-500/50 dark:border-rose-500/50'
                          : 'bg-white dark:bg-[#0F1522] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1.5">
                        {/* Unboxed Metadata Kicker */}
                        <div
                          className={`flex items-center justify-between gap-2 ${metaFontClasses} text-slate-500 dark:text-slate-400`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            {displaySettings.showDomainSubcategory && (
                              <>
                                <span>{domainMeta?.shortLabel}</span>
                                <span aria-hidden="true">·</span>
                                <span className="truncate">{item.subcategory}</span>
                              </>
                            )}
                            {displaySettings.showPostCounts && (
                              <>
                                {displaySettings.showDomainSubcategory && (
                                  <span aria-hidden="true">·</span>
                                )}
                                <span className="font-mono tabular-nums">
                                  {item.postCountEst}
                                </span>
                              </>
                            )}
                          </div>
                          <div
                            className="flex items-center gap-1 shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              type="button"
                              onClick={(e) => toggleTagInNegative(item.tag, e)}
                              title={
                                isNegated
                                  ? `Remove "${item.tag}" from Negative Prompt`
                                  : `Send "${item.tag}" to Negative Prompt`
                              }
                              className={`p-1 cursor-pointer ${
                                isNegated
                                  ? 'text-rose-500'
                                  : 'text-slate-400 hover:text-rose-500'
                              }`}
                            >
                              <Ban className="w-3.5 h-3.5" />
                            </button>
                            {canColor && (
                              <button
                                type="button"
                                onClick={() => setInspectedTagKey(item.tag)}
                                title={`Open Color Prefixer for ${item.tag}`}
                                className="p-1 text-slate-400 hover:text-indigo-500 cursor-pointer"
                              >
                                <Palette className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={(e) => toggleFavorite(item.tag, e)}
                              title={isFav ? 'Remove from Favorites' : 'Add to Favorites'}
                              className={`p-1 cursor-pointer ${
                                isFav
                                  ? 'text-amber-500'
                                  : 'text-slate-400 hover:text-amber-500'
                              }`}
                            >
                              <Star
                                className="w-3.5 h-3.5"
                                fill={isFav ? 'currentColor' : 'none'}
                              />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleCopySingleTag(item.tag, e)}
                              title={`Copy "${item.tag}"`}
                              className="p-1 text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
                            >
                              {copiedSingleTag === item.tag ? (
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => setInspectedTagKey(item.tag)}
                              className="p-1 text-slate-400 hover:text-indigo-500 cursor-pointer"
                            >
                              <Info className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Canonical Tag Header */}
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`font-mono ${tagFontClasses} font-semibold ${
                              isSelected
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : isNegated
                                ? 'text-rose-600 dark:text-rose-400 line-through'
                                : 'text-slate-900 dark:text-slate-100'
                            }`}
                          >
                            {item.tag}
                          </h3>
                          <span
                            className={`text-xs font-medium ${
                              isSelected
                                ? 'text-indigo-600 dark:text-indigo-400'
                                : isNegated
                                ? 'text-rose-500'
                                : 'text-slate-400 dark:text-slate-500'
                            }`}
                          >
                            {isSelected ? 'In Prompt ✓' : isNegated ? 'Negated ⊘' : '+ Add'}
                          </span>
                        </div>

                        {displaySettings.showDescriptions && (
                          <p
                            className={`${descFontClasses} text-slate-600 dark:text-slate-300 leading-relaxed`}
                          >
                            {item.description}
                          </p>
                        )}
                      </div>

                      {displaySettings.showAliases && item.aliases.length > 0 && (
                        <div
                          className={`pt-2 border-t border-slate-100 dark:border-slate-800/80 ${metaFontClasses} text-slate-400 dark:text-slate-500 font-mono truncate`}
                        >
                          Aliases: {item.aliases.join(' · ')}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>

        {/* Right Panel: Prompt Composer, Conflict Detector, Color Prefixer, Favorites, History & Inspector */}
        <aside className="w-full lg:w-[400px] shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1522] flex flex-col">
          {/* Upper Section: Prompt Composer Workspace */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">
                SDXL Illustrious Composer
              </h2>
              <span className="text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400">
                {selectedPromptTags.length} pos · {selectedNegativeTags.length} neg · {favoriteTags.length} ★
              </span>
            </div>

            {/* Mode Switcher Tabs: Prompt / Favorites / History / Presets / Negative */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/90 rounded-lg overflow-x-auto">
              <button
                onClick={() => setComposerSection('positive')}
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  composerSection === 'positive'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Prompt ({selectedPromptTags.length})
              </button>
              <button
                onClick={() => setComposerSection('favorites')}
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  composerSection === 'favorites'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Favorites ({favoriteTags.length})
              </button>
              <button
                onClick={() => setComposerSection('history')}
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  composerSection === 'history'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                History ({promptHistory.length})
              </button>
              <button
                onClick={() => setComposerSection('presets')}
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  composerSection === 'presets'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Presets
              </button>
              <button
                onClick={() => setComposerSection('negative')}
                className={`flex-1 py-1.5 px-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  composerSection === 'negative'
                    ? 'bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                Negative ({selectedNegativeTags.length})
              </button>
            </div>

            {/* Positive ↔ Negative Overlap & Contradiction Alert (Visible in both Positive and Negative tabs) */}
            {(composerSection === 'positive' || composerSection === 'negative') &&
              positiveNegativeOverlaps.length > 0 && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/40 space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-rose-600 dark:text-rose-400">
                    <span className="inline-flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {positiveNegativeOverlaps.length} Positive ↔ Negative{' '}
                        {positiveNegativeOverlaps.length === 1 ? 'Overlap' : 'Overlaps'}
                      </span>
                    </span>
                  </div>
                  <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                    {positiveNegativeOverlaps.map((ov) => (
                      <div
                        key={ov.id}
                        className="p-2 rounded bg-white/80 dark:bg-[#0B0F17]/80 border border-rose-500/20 text-[11px] space-y-1.5"
                      >
                        <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                          <span className="font-semibold text-rose-600 dark:text-rose-400">
                            {ov.type === 'exact' ? 'Duplicate Tag' : 'Guard Conflict'}
                          </span>
                          <span className="font-mono text-slate-500">
                            +{ov.positiveTag} / -{ov.negativeTag}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 leading-snug">
                          {ov.reason}
                        </p>
                        <div className="flex items-center gap-1.5 pt-0.5">
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedNegativeTags((prev) =>
                                prev.filter((t) => t !== ov.negativeTag)
                              )
                            }
                            className="px-2 py-0.5 font-mono text-[11px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 rounded transition-colors cursor-pointer"
                          >
                            Remove -{ov.negativeTag}
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedPromptTags((prev) =>
                                prev.filter((t) => t !== ov.positiveTag)
                              )
                            }
                            className="px-2 py-0.5 font-mono text-[11px] bg-slate-100 dark:bg-slate-800 hover:bg-rose-600 hover:text-white text-slate-700 dark:text-slate-200 rounded transition-colors cursor-pointer"
                          >
                            Remove +{ov.positiveTag}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            {/* TAB 1: Active Positive Prompt */}
            {composerSection === 'positive' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setAutoSortPrompt((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md font-medium transition-colors cursor-pointer ${
                      autoSortPrompt
                        ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <ArrowUpDown className="w-3.5 h-3.5" />
                    <span>Auto-Order: {autoSortPrompt ? 'On' : 'Off'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleAddQualityHeader}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Quality Header</span>
                  </button>
                </div>

                {/* Tag Conflict & Contradiction Warning Box */}
                {activeConflicts.length > 0 && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/40 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
                      <span className="inline-flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                        <span>
                          {activeConflicts.length} Tag{' '}
                          {activeConflicts.length === 1 ? 'Contradiction' : 'Contradictions'}{' '}
                          Detected
                        </span>
                      </span>
                    </div>
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                      {activeConflicts.map((conflict) => (
                        <div
                          key={conflict.id}
                          className="p-2 rounded bg-white/80 dark:bg-[#0B0F17]/80 border border-amber-500/20 text-[11px] space-y-1.5"
                        >
                          <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                            <span className="font-semibold text-amber-600 dark:text-amber-400">
                              {conflict.categoryLabel}
                            </span>
                            <span className="font-mono text-slate-500">
                              {conflict.tagA} ↔ {conflict.tagB}
                            </span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 leading-snug">
                            {conflict.reason}
                          </p>
                          <div className="flex items-center gap-1.5 pt-0.5">
                            <button
                              type="button"
                              onClick={() =>
                                handleResolveConflict(conflict.tagA, conflict.tagB)
                              }
                              className="px-2 py-0.5 font-mono text-[11px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 rounded transition-colors cursor-pointer"
                            >
                              Keep {conflict.tagA}
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                handleResolveConflict(conflict.tagB, conflict.tagA)
                              }
                              className="px-2 py-0.5 font-mono text-[11px] bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 rounded transition-colors cursor-pointer"
                            >
                              Keep {conflict.tagB}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Booru String Output Box */}
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800">
                  {orderedPromptTags.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-500 py-4 text-center">
                      Click any booru tag in the lexicon to assemble your SDXL Illustrious prompt.
                    </p>
                  ) : (
                    <p
                      className={`font-mono ${descFontClasses} text-slate-800 dark:text-slate-200 leading-relaxed break-words select-all`}
                    >
                      {formattedPromptString}
                    </p>
                  )}
                </div>

                {/* Inline Color Prefixer Popover when a colorable active prompt tag's palette icon is clicked */}
                {colorPickerTargetTag && (
                  <div className="p-2.5 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-500/40 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-300 font-mono">
                        Color Prefix for: {colorPickerTargetTag}
                      </span>
                      <button
                        type="button"
                        onClick={() => setColorPickerTargetTag(null)}
                        className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {CANONICAL_BOORU_COLORS.map((c) => (
                        <button
                          key={c.prefix}
                          type="button"
                          onClick={() =>
                            handleApplyColorPrefix(colorPickerTargetTag, c.prefix)
                          }
                          className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono bg-white dark:bg-[#0F1522] hover:bg-indigo-600 hover:text-white border border-slate-200 dark:border-slate-700 rounded transition-colors cursor-pointer"
                        >
                          <span
                            className="w-2 h-2 rounded-full border border-slate-400/40"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.label}</span>
                        </button>
                      ))}
                      {getBaseUncoloredTag(colorPickerTargetTag).colorPrefix && (
                        <button
                          type="button"
                          onClick={() => handleResetTagColor(colorPickerTargetTag)}
                          className="px-2 py-0.5 text-[11px] font-mono text-rose-500 hover:underline cursor-pointer"
                        >
                          Reset Color
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Interactive Selected Tag Buttons (Click to remove, Star to favorite, Palette to color) */}
                {orderedPromptTags.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-1.5">
                      <span>★ favorite · 🎨 color prefix · × remove</span>
                      <button
                        type="button"
                        onClick={() => {
                          recordPromptHistory(orderedPromptTags, 'Cleared Prompt');
                          setSelectedPromptTags([]);
                        }}
                        className="text-rose-500 hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Clear All</span>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-44 overflow-y-auto pr-1">
                      {orderedPromptTags.map((tagKey) => {
                        const isFav = favoriteTags.includes(tagKey);
                        const canColor = isTagColorable(tagKey);
                        const hasConflict = conflictingTagSet.has(tagKey);
                        return (
                          <div
                            key={tagKey}
                            className={`inline-flex items-center rounded overflow-hidden border ${
                              hasConflict
                                ? 'bg-amber-500/10 border-amber-500/50'
                                : 'bg-slate-100 dark:bg-slate-800/90 border-transparent'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={(e) => toggleFavorite(tagKey, e)}
                              title={isFav ? 'Remove from Favorites' : 'Add to Favorites'}
                              className={`pl-2 pr-1 py-1 transition-colors cursor-pointer ${
                                isFav
                                  ? 'text-amber-500'
                                  : 'text-slate-400 hover:text-amber-500'
                              }`}
                            >
                              <Star
                                className="w-3 h-3"
                                fill={isFav ? 'currentColor' : 'none'}
                              />
                            </button>
                            {canColor && (
                              <button
                                type="button"
                                onClick={() =>
                                  setColorPickerTargetTag((prev) =>
                                    prev === tagKey ? null : tagKey
                                  )
                                }
                                title={`Apply color prefix to ${tagKey}`}
                                className={`px-1 py-1 transition-colors cursor-pointer ${
                                  colorPickerTargetTag === tagKey
                                    ? 'text-indigo-500'
                                    : 'text-slate-400 hover:text-indigo-500'
                                }`}
                              >
                                <Palette className="w-3 h-3" />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => toggleTagInPrompt(tagKey)}
                              className="inline-flex items-center gap-1 pl-1 pr-2 py-1 text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer whitespace-nowrap"
                            >
                              <span>{tagKey}</span>
                              <X className="w-3 h-3 opacity-60" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Primary One-Click Copy, Log to History, & Save Preset Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopyPrompt}
                    disabled={orderedPromptTags.length === 0}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {copiedPositive ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Copied & Logged</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      recordPromptHistory(orderedPromptTags, 'Manual Snapshot');
                      setComposerSection('history');
                    }}
                    disabled={orderedPromptTags.length === 0}
                    title="Snapshot current prompt to History"
                    className="py-2.5 px-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Log History
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowSavePresetInput((prev) => !prev)}
                    disabled={orderedPromptTags.length === 0}
                    title="Save current prompt as preset"
                    className="py-2.5 px-2.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Save
                  </button>
                </div>

                {/* Inline Save Preset Form */}
                {showSavePresetInput && (
                  <form onSubmit={handleSavePreset} className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={newPresetName}
                      onChange={(e) => setNewPresetName(e.target.value)}
                      placeholder="Preset name (e.g. Cyberpunk Archer)..."
                      className="flex-1 px-3 py-1.5 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md cursor-pointer"
                    >
                      Save
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* TAB 2: Interactive Favorites System (Add & Remove Tags Easily) */}
            {composerSection === 'favorites' && (
              <div className="space-y-3">
                <form onSubmit={handleQuickAddFavorite} className="flex items-center gap-1.5">
                  <input
                    type="text"
                    value={quickFavInput}
                    onChange={(e) => setQuickFavInput(e.target.value)}
                    placeholder="Add booru tag to Favorites (e.g. big_eyes)..."
                    className="flex-1 px-2.5 py-1.5 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                  >
                    + Add
                  </button>
                </form>

                {favoriteTags.length === 0 ? (
                  <p className="text-xs text-slate-400 dark:text-slate-500 py-6 text-center">
                    No favorite tags saved yet. Click the ★ icon next to any tag or type one above to add it.
                  </p>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                      <span>Click tag to toggle in prompt · Click × to remove</span>
                      <button
                        type="button"
                        onClick={() => setFavoriteTags([])}
                        className="text-rose-500 hover:underline cursor-pointer"
                      >
                        Remove All
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 max-h-56 overflow-y-auto pr-1">
                      {favoriteTags.map((favTag) => {
                        const inPrompt = selectedPromptTags.includes(favTag);
                        return (
                          <div
                            key={favTag}
                            className={`inline-flex items-center rounded border transition-colors ${
                              inPrompt
                                ? 'bg-indigo-600/10 border-indigo-500/50 text-indigo-600 dark:text-indigo-400'
                                : 'bg-slate-50 dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleTagInPrompt(favTag)}
                              title={inPrompt ? 'Remove from active prompt' : 'Add to active prompt'}
                              className="px-2 py-1 text-xs font-mono hover:underline cursor-pointer whitespace-nowrap"
                            >
                              {favTag}
                            </button>
                            <button
                              type="button"
                              onClick={(e) => toggleFavorite(favTag, e)}
                              title={`Remove ${favTag} from Favorites`}
                              className="pr-1.5 pl-0.5 py-1 text-slate-400 hover:text-rose-500 cursor-pointer"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* TAB 3: History with Adjustable Length Cap */}
            {composerSection === 'history' && (
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <label
                      htmlFor="composer-history-cap"
                      className="text-xs font-semibold text-slate-700 dark:text-slate-200"
                    >
                      History Max Length Cap
                    </label>
                    <div className="flex items-center gap-1.5">
                      <input
                        id="composer-history-cap"
                        type="number"
                        min={1}
                        max={200}
                        value={historyCap}
                        onChange={(e) => handleHistoryCapChange(Number(e.target.value))}
                        className="w-14 px-2 py-0.5 text-xs font-mono tabular-nums text-right bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                      />
                      <span className="text-[11px] font-mono text-slate-400">items</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min={1}
                    max={100}
                    value={Math.min(100, historyCap)}
                    onChange={(e) => handleHistoryCapChange(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />

                  <div className="flex items-center justify-between gap-1 pt-0.5">
                    <div className="flex items-center gap-1">
                      {[5, 15, 25, 50, 100].map((capPreset) => (
                        <button
                          key={capPreset}
                          type="button"
                          onClick={() => handleHistoryCapChange(capPreset)}
                          className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                            historyCap === capPreset
                              ? 'bg-indigo-600 text-white font-semibold'
                              : 'bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                        >
                          {capPreset}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => recordPromptHistory(orderedPromptTags, 'Snapshot')}
                      disabled={orderedPromptTags.length === 0}
                      className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline disabled:opacity-40 cursor-pointer"
                    >
                      + Log Current
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono tabular-nums">
                      Prompt History ({promptHistory.length}/{historyCap})
                    </span>
                    {promptHistory.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setPromptHistory([])}
                        className="text-rose-500 hover:underline cursor-pointer"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {promptHistory.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-500 py-4 text-center">
                      Copied or snapshotted prompts will be stored here up to {historyCap} entries.
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                      {promptHistory.map((entry) => (
                        <div
                          key={entry.id}
                          className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B0F17]/60 space-y-1.5"
                        >
                          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1.5 font-mono tabular-nums">
                              <span>{entry.actionLabel}</span>
                              <span aria-hidden="true">·</span>
                              <span>{entry.timestamp}</span>
                              <span aria-hidden="true">·</span>
                              <span>{entry.tags.length} tags</span>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                setPromptHistory((prev) => prev.filter((h) => h.id !== entry.id))
                              }
                              title="Remove history entry"
                              className="text-slate-400 hover:text-rose-500 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <p className="font-mono text-[11px] text-slate-700 dark:text-slate-300 line-clamp-2">
                            {entry.tags.join(', ')}
                          </p>

                          <div className="flex items-center gap-1.5 pt-0.5">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedPromptTags(entry.tags);
                                setComposerSection('positive');
                              }}
                              className="px-2 py-1 text-[11px] font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded transition-colors cursor-pointer"
                            >
                              Restore
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopyHistoryEntry(entry)}
                              className="px-2 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer"
                            >
                              {copiedHistoryId === entry.id ? 'Copied!' : 'Copy'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono tabular-nums">
                      Recent Tags ({recentTagsHistory.length}/{historyCap})
                    </span>
                    {recentTagsHistory.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setRecentTagsHistory([])}
                        className="text-rose-500 hover:underline cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  {recentTagsHistory.length === 0 ? (
                    <p className="text-[11px] text-slate-400 dark:text-slate-500">
                      Recently clicked tags appear here.
                    </p>
                  ) : (
                    <div className="flex flex-wrap gap-1 max-h-24 overflow-y-auto pr-1">
                      {recentTagsHistory.map((item) => {
                        const isSelected = selectedPromptTags.includes(item.tag);
                        return (
                          <button
                            key={item.tag}
                            type="button"
                            onClick={() => toggleTagInPrompt(item.tag)}
                            className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors cursor-pointer ${
                              isSelected
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            {item.tag}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 4: Presets */}
            {composerSection === 'presets' && (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {[...userPresets, ...BUILT_IN_PROMPT_PRESETS].map((preset) => (
                  <div
                    key={preset.id}
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B0F17]/60 space-y-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {preset.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          {preset.description}
                        </p>
                      </div>
                      {!preset.isBuiltIn && (
                        <button
                          type="button"
                          onClick={() => handleDeletePreset(preset.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                          title="Delete saved preset"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                      {preset.tags.join(', ')}
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPromptTags(preset.tags);
                          recordPromptHistory(preset.tags, `Loaded ${preset.name}`);
                          setComposerSection('positive');
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded transition-colors cursor-pointer"
                      >
                        Load Preset
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPromptTags((prev) => {
                            const merged = new Set([...prev, ...preset.tags]);
                            return Array.from(merged);
                          });
                          setComposerSection('positive');
                        }}
                        className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer"
                      >
                        Append Tags
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 5: Interactive Negative Prompt Builder & Modular Negative Library */}
            {composerSection === 'negative' && (
              <div className="space-y-4">
                {/* 1. Active Negative Prompt Output & Quick Add Input */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      Active Negative Prompt ({selectedNegativeTags.length} tags)
                    </span>
                    {selectedNegativeTags.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setSelectedNegativeTags([])}
                        className="text-[11px] text-rose-500 hover:underline cursor-pointer inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Clear All</span>
                      </button>
                    )}
                  </div>

                  <form onSubmit={handleQuickAddNegative} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={quickNegInput}
                      onChange={(e) => setQuickNegInput(e.target.value)}
                      placeholder="Add negative tag(s) (e.g. 3d, glasses, censored)..."
                      className="flex-1 px-2.5 py-1.5 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                    >
                      + Exclude
                    </button>
                  </form>

                  {/* Live Formatted Negative String Output Box */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800">
                    {selectedNegativeTags.length === 0 ? (
                      <p className="text-xs text-slate-400 dark:text-slate-500 py-3 text-center">
                        Toggle tags from the modular negative packs below, load a preset, or click the ⊘ icon on any lexicon tag to build your negative prompt.
                      </p>
                    ) : (
                      <p
                        className={`font-mono ${descFontClasses} text-slate-800 dark:text-slate-200 leading-relaxed break-words select-all`}
                      >
                        {formattedNegativeString}
                      </p>
                    )}
                  </div>

                  {/* Interactive Active Negative Tokens */}
                  {selectedNegativeTags.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-1">
                        <span>⇄ move to positive · × remove from negative</span>
                      </div>
                      <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto pr-1">
                        {selectedNegativeTags.map((negTag) => {
                          const isExactOverlap = selectedPromptTags.includes(negTag);
                          return (
                            <div
                              key={negTag}
                              className={`inline-flex items-center rounded overflow-hidden border ${
                                isExactOverlap
                                  ? 'bg-rose-500/15 border-rose-500/60'
                                  : 'bg-slate-100 dark:bg-slate-800/90 border-transparent'
                              }`}
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  handleMoveTagBetweenPrompts(negTag, 'to_positive')
                                }
                                title={`Move "${negTag}" to Positive Prompt`}
                                className="pl-1.5 pr-1 py-0.5 text-slate-400 hover:text-indigo-500 transition-colors cursor-pointer"
                              >
                                <ArrowRightLeft className="w-2.5 h-2.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => toggleTagInNegative(negTag)}
                                title={`Remove "${negTag}" from Negative Prompt`}
                                className="inline-flex items-center gap-1 pl-0.5 pr-1.5 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-200 hover:text-rose-500 transition-colors cursor-pointer whitespace-nowrap"
                              >
                                <span>{negTag}</span>
                                <X className="w-2.5 h-2.5 opacity-60" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Copy Active Negative & Save Custom Negative Preset Buttons */}
                  <div className="flex items-center gap-2 pt-0.5">
                    <button
                      type="button"
                      onClick={handleCopyActiveNegative}
                      disabled={selectedNegativeTags.length === 0}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 disabled:opacity-40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {copiedActiveNegative ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied Negative ({selectedNegativeTags.length})</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Negative ({selectedNegativeTags.length})</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowSaveNegPresetInput((prev) => !prev)}
                      disabled={selectedNegativeTags.length === 0}
                      title="Save current negative prompt as custom preset"
                      className="py-2 px-3 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Save Preset
                    </button>
                  </div>

                  {showSaveNegPresetInput && (
                    <form onSubmit={handleSaveNegativePreset} className="flex items-center gap-2 pt-1">
                      <input
                        type="text"
                        value={newNegPresetName}
                        onChange={(e) => setNewNegPresetName(e.target.value)}
                        placeholder="Custom negative preset name..."
                        className="flex-1 px-2.5 py-1.5 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-700 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:border-rose-500"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-md cursor-pointer"
                      >
                        Save
                      </button>
                    </form>
                  )}
                </div>

                {/* 2. Modular Negative Tag Categories (7 Packs including SFW Guard & NSFW Guard) */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      Modular Negative Packs
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      Click pack or individual tags
                    </span>
                  </div>

                  {/* Pack Selector Strip */}
                  <div className="flex flex-wrap gap-1">
                    {MODULAR_NEGATIVE_PACKS.map((pack) => {
                      const isCurrentPack = activeNegativePackId === pack.id;
                      const activeCount = pack.tags.filter((t) =>
                        selectedNegativeTags.includes(t.tag)
                      ).length;
                      return (
                        <button
                          key={pack.id}
                          type="button"
                          onClick={() => setActiveNegativePackId(pack.id)}
                          className={`px-2 py-1 text-[11px] font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                            isCurrentPack
                              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                          }`}
                        >
                          <span>{pack.shortLabel}</span>
                          {activeCount > 0 && (
                            <span className="ml-1 font-mono opacity-80">
                              ({activeCount}/{pack.tags.length})
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Modular Pack Detail & Toggleable Tag Chips */}
                  {(() => {
                    const currentPack =
                      MODULAR_NEGATIVE_PACKS.find((p) => p.id === activeNegativePackId) ||
                      MODULAR_NEGATIVE_PACKS[0];
                    const packTagKeys = currentPack.tags.map((t) => t.tag);
                    const activeInPackCount = packTagKeys.filter((k) =>
                      selectedNegativeTags.includes(k)
                    ).length;
                    const allInPackActive =
                      packTagKeys.length > 0 && activeInPackCount === packTagKeys.length;

                    return (
                      <div className="p-3 rounded-lg bg-slate-50/80 dark:bg-[#0B0F17]/80 border border-slate-200 dark:border-slate-800 space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                              {currentPack.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                              {currentPack.description}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              handleToggleNegativePack(packTagKeys, allInPackActive)
                            }
                            className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-colors shrink-0 cursor-pointer whitespace-nowrap ${
                              allInPackActive
                                ? 'bg-rose-500/15 text-rose-500 hover:bg-rose-500/25'
                                : 'bg-indigo-600 text-white hover:bg-indigo-500'
                            }`}
                          >
                            {allInPackActive
                              ? 'Remove Pack'
                              : `+ Add Pack (${packTagKeys.length})`}
                          </button>
                        </div>

                        <div className="flex flex-wrap gap-1 max-h-40 overflow-y-auto pr-1">
                          {currentPack.tags.map((negItem) => {
                            const isNegActive = selectedNegativeTags.includes(negItem.tag);
                            return (
                              <button
                                key={negItem.tag}
                                type="button"
                                onClick={() => toggleTagInNegative(negItem.tag)}
                                title={negItem.description}
                                className={`inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded border transition-colors cursor-pointer whitespace-nowrap ${
                                  isNegActive
                                    ? 'bg-rose-600 border-rose-600 text-white font-semibold'
                                    : 'bg-white dark:bg-[#0F1522] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-rose-500/60'
                                }`}
                              >
                                <span>{negItem.tag}</span>
                                {isNegActive ? (
                                  <Check className="w-2.5 h-2.5" />
                                ) : (
                                  <Plus className="w-2.5 h-2.5 opacity-60" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* 3. Built-In & Custom Negative Presets (Including SFW Guard & NSFW Guard) */}
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      Negative Presets ({userNegativePresets.length + BUILT_IN_NEGATIVE_PRESETS.length})
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      Load, merge, or copy
                    </span>
                  </div>

                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {[...userNegativePresets, ...BUILT_IN_NEGATIVE_PRESETS].map((neg) => (
                      <div
                        key={neg.id}
                        className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-[#0B0F17]/60 space-y-1.5"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                              {neg.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                              {neg.description}
                            </p>
                          </div>
                          {!neg.isBuiltIn && (
                            <button
                              type="button"
                              onClick={() => handleDeleteNegativePreset(neg.id)}
                              title="Delete custom negative preset"
                              className="text-slate-400 hover:text-rose-500 p-1 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 select-all">
                          {neg.tags.join(', ')}
                        </p>

                        <div className="flex items-center gap-1.5 pt-0.5">
                          <button
                            type="button"
                            onClick={() => setSelectedNegativeTags([...neg.tags])}
                            className="px-2 py-1 text-[11px] font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded transition-colors cursor-pointer"
                          >
                            Load Preset
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedNegativeTags((prev) =>
                                Array.from(new Set([...prev, ...neg.tags]))
                              )
                            }
                            className="px-2 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer"
                          >
                            + Merge
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopyNegative(neg.id, neg.tags)}
                            className="ml-auto inline-flex items-center gap-1 px-2 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 rounded transition-colors cursor-pointer"
                          >
                            {copiedNegativeId === neg.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lower Section: Tag Inspector, Color Prefixer & Sibling Relationships */}
          {inspectedTag && (
            <div className="p-5 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Tag Inspector
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                    <span>{inspectedTag.popularity}</span>
                    <span aria-hidden="true">·</span>
                    <span>{inspectedTag.postCountEst} posts</span>
                  </div>
                </div>

                {/* Canonical Tag Title, Favorite Toggle, Negative Toggle & Primary Add/Remove Toggle */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold font-mono text-slate-900 dark:text-slate-100 break-all">
                      {inspectedTag.tag}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => toggleFavorite(inspectedTag.tag, e)}
                        title={
                          favoriteTags.includes(inspectedTag.tag)
                            ? 'Remove from Favorites'
                            : 'Add to Favorites'
                        }
                        className={`inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                          favoriteTags.includes(inspectedTag.tag)
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-500'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-500/50 hover:text-amber-500'
                        }`}
                      >
                        <Star
                          className="w-3.5 h-3.5"
                          fill={favoriteTags.includes(inspectedTag.tag) ? 'currentColor' : 'none'}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => toggleTagInNegative(inspectedTag.tag, e)}
                        title={
                          selectedNegativeTags.includes(inspectedTag.tag)
                            ? 'Remove from Negative Prompt'
                            : 'Add to Negative Prompt'
                        }
                        className={`inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          selectedNegativeTags.includes(inspectedTag.tag)
                            ? 'bg-rose-600 border-rose-600 text-white'
                            : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-rose-500/60 hover:text-rose-500'
                        }`}
                      >
                        <Ban className="w-3.5 h-3.5" />
                        <span>
                          {selectedNegativeTags.includes(inspectedTag.tag) ? 'Negated' : '- Neg'}
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleTagInPrompt(inspectedTag.tag)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          selectedPromptTags.includes(inspectedTag.tag)
                            ? 'bg-rose-500/10 text-rose-500 hover:bg-rose-500/20'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                        }`}
                      >
                        {selectedPromptTags.includes(inspectedTag.tag)
                          ? 'Remove'
                          : '+ Prompt'}
                      </button>
                    </div>
                  </div>

                  {/* Unboxed Taxonomy Path */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <span>{DOMAIN_MAP[inspectedTag.domain]?.shortLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{inspectedTag.subcategory}</span>
                  </div>
                </div>

                {/* Quick Color Modifier Prefixer inside Inspector when tag is colorable */}
                {isTagColorable(inspectedTag.tag) && (
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        <Palette className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Quick Color Modifier Prefixer</span>
                      </span>
                      {getBaseUncoloredTag(inspectedTag.tag).colorPrefix && (
                        <button
                          type="button"
                          onClick={() => handleResetTagColor(inspectedTag.tag)}
                          className="text-[11px] font-mono text-rose-500 hover:underline cursor-pointer"
                        >
                          Reset to {getBaseUncoloredTag(inspectedTag.tag).baseTag}
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {CANONICAL_BOORU_COLORS.map((c) => {
                        const targetColored = applyColorPrefixToTag(
                          inspectedTag.tag,
                          c.prefix
                        );
                        const isCurrentlyActive = selectedPromptTags.includes(targetColored);
                        return (
                          <button
                            key={c.prefix}
                            type="button"
                            onClick={() =>
                              handleApplyColorPrefix(inspectedTag.tag, c.prefix)
                            }
                            title={`Add or swap to ${targetColored}`}
                            className={`flex items-center gap-1.5 px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer truncate ${
                              isCurrentlyActive
                                ? 'bg-indigo-600 border-indigo-600 text-white font-semibold'
                                : 'bg-white dark:bg-[#0F1522] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500'
                            }`}
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full shrink-0 border border-slate-400/40"
                              style={{ backgroundColor: c.hex }}
                            />
                            <span className="truncate">{targetColored}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Full Wiki Definition */}
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                    Visual Definition
                  </span>
                  <p
                    className={`${descFontClasses} text-slate-700 dark:text-slate-300 leading-relaxed`}
                  >
                    {inspectedTag.description}
                  </p>
                </div>

                {/* SDXL Illustrious Specific Usage Tip */}
                {inspectedTag.illustriousNote && (
                  <div className="p-3 rounded-lg bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                      SDXL Illustrious Usage Note
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {inspectedTag.illustriousNote}
                    </p>
                  </div>
                )}

                {/* Unboxed Search Aliases */}
                {inspectedTag.aliases.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                      Recognized Search Aliases & Synonyms
                    </span>
                    <p className="text-xs font-mono text-slate-600 dark:text-slate-400">
                      {inspectedTag.aliases.join(' · ')}
                    </p>
                  </div>
                )}

                {/* Interactive Related / Co-Occurring Sibling Tags */}
                {inspectedTag.relatedTags.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 block">
                      Related & Co-Occurring Booru Tags (Click to toggle)
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {inspectedTag.relatedTags.map((rel) => {
                        const relSelected = selectedPromptTags.includes(rel);
                        const existsInLexicon = tagMap.has(rel);
                        return (
                          <button
                            key={rel}
                            type="button"
                            onClick={() => {
                              toggleTagInPrompt(rel);
                              if (existsInLexicon) {
                                setInspectedTagKey(rel);
                              }
                            }}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono rounded transition-colors cursor-pointer whitespace-nowrap ${
                              relSelected
                                ? 'bg-indigo-600 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            <span>{rel}</span>
                            {relSelected ? (
                              <Check className="w-3 h-3" />
                            ) : (
                              <Plus className="w-3 h-3 opacity-60" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span>Format: Canonical Danbooru (_)</span>
                <button
                  type="button"
                  onClick={(e) => handleCopySingleTag(inspectedTag.tag, e)}
                  className="font-mono text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  {copiedSingleTag === inspectedTag.tag
                    ? 'Copied tag!'
                    : `Copy "${formatSingleTagForOutput(inspectedTag.tag)}"`}
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Add Custom Booru Tag Modal */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 font-display">
                Add Custom Booru Tag
              </h2>
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateCustomTag} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Canonical Booru Tag (spaces automatically convert to _)
                </label>
                <input
                  type="text"
                  required
                  value={customTagInput}
                  onChange={(e) => setCustomTagInput(e.target.value)}
                  placeholder="e.g. glowing_halo or cyber_visor"
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Domain
                  </label>
                  <select
                    value={customDomainInput}
                    onChange={(e) => {
                      const nextDomain = e.target.value as DomainId;
                      setCustomDomainInput(nextDomain);
                      setCustomSubcategoryInput(DOMAIN_MAP[nextDomain].subcategories[0]);
                    }}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                  >
                    {DOMAINS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.shortLabel}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subcategory
                  </label>
                  <select
                    value={customSubcategoryInput}
                    onChange={(e) => setCustomSubcategoryInput(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                  >
                    {DOMAIN_MAP[customDomainInput].subcategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Visual Definition
                </label>
                <textarea
                  rows={2}
                  value={customDescInput}
                  onChange={(e) => setCustomDescInput(e.target.value)}
                  placeholder="Concise description of how this tag affects the illustration..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Aliases (comma-separated, optional)
                </label>
                <input
                  type="text"
                  value={customAliasesInput}
                  onChange={(e) => setCustomAliasesInput(e.target.value)}
                  placeholder="e.g. neon_visor, holo_glasses"
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCustomModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                >
                  Save & Add to Prompt
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
