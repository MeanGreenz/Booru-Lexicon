import React, { useEffect } from 'react';
import {
  X,
  SlidersHorizontal,
  Moon,
  Sun,
  RotateCcw,
  Plus,
  Download,
  Terminal,
  Trash2,
  Check
} from 'lucide-react';
import { DOMAINS, DOMAIN_MAP } from '../data';
import { DomainId, LexiconDisplaySettings } from '../types/lexicon';

export type SettingsModalTab = 'display' | 'output' | 'custom' | 'export';

interface SettingsToolsModalProps {
  isOpen: boolean;
  activeTab: SettingsModalTab;
  onTabChange: (tab: SettingsModalTab) => void;
  onClose: () => void;
  // Theme & Display
  isDark: boolean;
  onSetIsDark: (dark: boolean) => void;
  displaySettings: LexiconDisplaySettings;
  onUpdateSetting: <K extends keyof LexiconDisplaySettings>(
    key: K,
    value: LexiconDisplaySettings[K]
  ) => void;
  onResetDisplaySettings: () => void;
  onSetViewMode: (mode: 'table' | 'grid') => void;
  // Output & History
  autoSortPrompt: boolean;
  onSetAutoSortPrompt: (val: boolean) => void;
  historyCap: number;
  onHistoryCapChange: (val: number) => void;
  recentTagsCount: number;
  promptHistoryCount: number;
  onClearTagHistory: () => void;
  onClearPromptHistory: () => void;
  // Custom Tag Creation
  customTagInput: string;
  onCustomTagInputChange: (val: string) => void;
  customDomainInput: DomainId;
  onCustomDomainInputChange: (domain: DomainId) => void;
  customSubcategoryInput: string;
  onCustomSubcategoryInputChange: (sub: string) => void;
  customDescInput: string;
  onCustomDescInputChange: (val: string) => void;
  customAliasesInput: string;
  onCustomAliasesInputChange: (val: string) => void;
  onCreateCustomTag: (e: React.FormEvent) => void;
  customTagsCount: number;
  onJumpToCustomTags: () => void;
  // CSV Export
  totalTagsCount: number;
  builtInTagsCount: number;
  filteredTagsCount: number;
  onExportCsv: (onlyFiltered: boolean) => void;
}

export function SettingsToolsModal({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
  isDark,
  onSetIsDark,
  displaySettings,
  onUpdateSetting,
  onResetDisplaySettings,
  onSetViewMode,
  autoSortPrompt,
  onSetAutoSortPrompt,
  historyCap,
  onHistoryCapChange,
  recentTagsCount,
  promptHistoryCount,
  onClearTagHistory,
  onClearPromptHistory,
  customTagInput,
  onCustomTagInputChange,
  customDomainInput,
  onCustomDomainInputChange,
  customSubcategoryInput,
  onCustomSubcategoryInputChange,
  customDescInput,
  onCustomDescInputChange,
  customAliasesInput,
  onCustomAliasesInputChange,
  onCreateCustomTag,
  customTagsCount,
  onJumpToCustomTags,
  totalTagsCount,
  builtInTagsCount,
  filteredTagsCount,
  onExportCsv
}: SettingsToolsModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const tabs: { id: SettingsModalTab; label: string; icon: React.ReactNode }[] = [
    {
      id: 'display',
      label: 'Display & Theme',
      icon: <SlidersHorizontal className="w-3.5 h-3.5" />
    },
    {
      id: 'output',
      label: 'Output & History',
      icon: <Terminal className="w-3.5 h-3.5" />
    },
    {
      id: 'custom',
      label: 'Custom Tag',
      icon: <Plus className="w-3.5 h-3.5" />
    },
    {
      id: 'export',
      label: 'CSV Export',
      icon: <Download className="w-3.5 h-3.5" />
    }
  ];

  const normalizedPreview = customTagInput
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_()!:'><-]/g, '');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Settings and Workspace Tools"
    >
      <div
        className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-xl bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/70 dark:bg-[#0B0F17]/70">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 font-display">
              Settings & Workspace Tools
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Typography, appearance, prompt formatting, custom Booru tags, and CSV exports
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Settings and Tools"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="px-5 pt-3 pb-0 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F1522]">
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onTabChange(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                      : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.id === 'custom' && customTagsCount > 0 && (
                    <span className="ml-0.5 font-mono tabular-nums text-[11px] opacity-75">
                      ({customTagsCount})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto flex-1">
          {/* TAB 1: DISPLAY & THEME */}
          {activeTab === 'display' && (
            <div className="space-y-5">
              {/* Theme Appearance */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Workspace Theme
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSetIsDark(true)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      isDark
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 text-slate-900 dark:text-slate-100'
                        : 'bg-slate-50 dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-xs font-semibold">
                      <Moon className="w-4 h-4 text-indigo-500" />
                      <span>Dark Slate</span>
                    </span>
                    {isDark && <Check className="w-4 h-4 text-indigo-500" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSetIsDark(false)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      !isDark
                        ? 'bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 text-slate-900 dark:text-slate-100'
                        : 'bg-slate-50 dark:bg-[#0B0F17] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 text-xs font-semibold">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>Light Paper</span>
                    </span>
                    {!isDark && <Check className="w-4 h-4 text-indigo-500" />}
                  </button>
                </div>
              </div>

              {/* Typography & Density Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Lexicon Text Size
                    </label>
                    <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg">
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
                          onClick={() => onUpdateSetting('textSize', opt.id)}
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
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        Global UI Font Scale
                      </span>
                      <span className="font-mono tabular-nums font-semibold text-indigo-600 dark:text-indigo-400">
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
                        onUpdateSetting('fontScalePercent', Number(e.target.value))
                      }
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Row & Card Density
                    </label>
                    <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg">
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
                          onClick={() => onUpdateSetting('rowDensity', opt.id)}
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
                  </div>

                  <div className="space-y-1.5">
                    <span className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Grid View Desktop Columns
                    </span>
                    <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg">
                      {([2, 3, 4] as const).map((cols) => (
                        <button
                          key={cols}
                          type="button"
                          onClick={() => {
                            onUpdateSetting('gridColumns', cols);
                            onSetViewMode('grid');
                          }}
                          className={`py-1.5 px-2 text-xs font-mono rounded transition-colors cursor-pointer ${
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
              </div>

              {/* Visible Row Metadata Checkboxes */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Visible Lexicon Columns & Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <span className="text-slate-700 dark:text-slate-300">
                      Show Definitions Inline
                    </span>
                    <input
                      type="checkbox"
                      checked={displaySettings.showDescriptions}
                      onChange={(e) => onUpdateSetting('showDescriptions', e.target.checked)}
                      className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <span className="text-slate-700 dark:text-slate-300">
                      Show Search Aliases Inline
                    </span>
                    <input
                      type="checkbox"
                      checked={displaySettings.showAliases}
                      onChange={(e) => onUpdateSetting('showAliases', e.target.checked)}
                      className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <span className="text-slate-700 dark:text-slate-300">
                      Show Post Frequency Counts
                    </span>
                    <input
                      type="checkbox"
                      checked={displaySettings.showPostCounts}
                      onChange={(e) => onUpdateSetting('showPostCounts', e.target.checked)}
                      className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <span className="text-slate-700 dark:text-slate-300">
                      Show Domain · Subcategory
                    </span>
                    <input
                      type="checkbox"
                      checked={displaySettings.showDomainSubcategory}
                      onChange={(e) =>
                        onUpdateSetting('showDomainSubcategory', e.target.checked)
                      }
                      className="accent-indigo-600 w-3.5 h-3.5 cursor-pointer"
                    />
                  </label>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end">
                <button
                  type="button"
                  onClick={onResetDisplaySettings}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Display Defaults</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: OUTPUT & HISTORY */}
          {activeTab === 'output' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Prompt Copy Formatting (A1111 / Forge / ComfyUI)
                </label>
                <div className="space-y-2 text-xs">
                  <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <div>
                      <span className="block font-medium text-slate-800 dark:text-slate-200">
                        Escape Tag Parentheses \( \)
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Converts tags like watercolor_(medium) into watercolor_\(medium\) on copy
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={displaySettings.escapeParentheses}
                      onChange={(e) => onUpdateSetting('escapeParentheses', e.target.checked)}
                      className="accent-indigo-600 w-4 h-4 cursor-pointer shrink-0 ml-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <div>
                      <span className="block font-medium text-slate-800 dark:text-slate-200">
                        Append Trailing Comma
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Adds a trailing ", " to copied prompt strings for instant chaining
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={displaySettings.trailingComma}
                      onChange={(e) => onUpdateSetting('trailingComma', e.target.checked)}
                      className="accent-indigo-600 w-4 h-4 cursor-pointer shrink-0 ml-4"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <div>
                      <span className="block font-medium text-slate-800 dark:text-slate-200">
                        Auto-Sort Positive Prompt by Illustrious Taxonomy
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Keeps quality tags first, followed by subject, anatomy, attire, pose, and lighting
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={autoSortPrompt}
                      onChange={(e) => onSetAutoSortPrompt(e.target.checked)}
                      className="accent-indigo-600 w-4 h-4 cursor-pointer shrink-0 ml-4"
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  History Capacity & Maintenance
                </label>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="block text-xs font-medium text-slate-800 dark:text-slate-200">
                      Maximum Stored History Items
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      Applies to both Recent Tag History and Saved Prompt Snapshots (1–200)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {[10, 25, 50, 100].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => onHistoryCapChange(preset)}
                        className={`px-2 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                          historyCap === preset
                            ? 'bg-indigo-600 text-white font-semibold'
                            : 'bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={historyCap}
                      onChange={(e) => onHistoryCapChange(Number(e.target.value))}
                      aria-label="History Cap Limit"
                      className="w-16 px-2 py-1 text-xs font-mono tabular-nums text-right bg-white dark:bg-[#0F1522] border border-slate-200 dark:border-slate-700 rounded text-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="text-xs">
                      <span className="block font-medium text-slate-800 dark:text-slate-200">
                        Recent Tags Stored
                      </span>
                      <span className="font-mono tabular-nums text-[11px] text-slate-500 dark:text-slate-400">
                        {recentTagsCount} / {historyCap} entries
                      </span>
                    </div>
                    <button
                      type="button"
                      disabled={recentTagsCount === 0}
                      onClick={onClearTagHistory}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 disabled:opacity-40 rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                    <div className="text-xs">
                      <span className="block font-medium text-slate-800 dark:text-slate-200">
                        Prompt Snapshots Stored
                      </span>
                      <span className="font-mono tabular-nums text-[11px] text-slate-500 dark:text-slate-400">
                        {promptHistoryCount} / {historyCap} entries
                      </span>
                    </div>
                    <button
                      type="button"
                      disabled={promptHistoryCount === 0}
                      onClick={onClearPromptHistory}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 disabled:opacity-40 rounded-md transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Clear</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ADD CUSTOM BOORU TAG */}
          {activeTab === 'custom' && (
            <form onSubmit={onCreateCustomTag} className="space-y-4">
              {customTagsCount > 0 && (
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-600 dark:text-slate-400">
                    You currently have{' '}
                    <strong className="font-mono text-slate-900 dark:text-slate-100">
                      {customTagsCount}
                    </strong>{' '}
                    saved custom {customTagsCount === 1 ? 'tag' : 'tags'} in local storage.
                  </span>
                  <button
                    type="button"
                    onClick={onJumpToCustomTags}
                    className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer whitespace-nowrap"
                  >
                    View Custom Tags →
                  </button>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Canonical Booru Tag (spaces automatically convert to _)
                  </label>
                  {normalizedPreview && (
                    <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                      → {normalizedPreview}
                    </span>
                  )}
                </div>
                <input
                  type="text"
                  required
                  value={customTagInput}
                  onChange={(e) => onCustomTagInputChange(e.target.value)}
                  placeholder="e.g. glowing_halo or cyber_visor"
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Domain
                  </label>
                  <select
                    value={customDomainInput}
                    onChange={(e) => {
                      const nextDomain = e.target.value as DomainId;
                      onCustomDomainInputChange(nextDomain);
                      onCustomSubcategoryInputChange(DOMAIN_MAP[nextDomain].subcategories[0]);
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
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subcategory
                  </label>
                  <select
                    value={customSubcategoryInput}
                    onChange={(e) => onCustomSubcategoryInputChange(e.target.value)}
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
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Visual Definition
                </label>
                <textarea
                  rows={2}
                  value={customDescInput}
                  onChange={(e) => onCustomDescInputChange(e.target.value)}
                  placeholder="Concise description of how this tag affects the illustration..."
                  className="w-full px-3 py-2 text-xs bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Aliases (comma-separated, optional)
                </label>
                <input
                  type="text"
                  value={customAliasesInput}
                  onChange={(e) => onCustomAliasesInputChange(e.target.value)}
                  placeholder="e.g. neon_visor, holo_glasses"
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Save & Add to Prompt</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: CSV EXPORT */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Export the Illustrious Lexicon database as an RFC-4180 UTF-8 CSV spreadsheet
                including canonical tags, taxonomy domain/subcategory, popularity tier, post
                estimates, definitions, aliases, and Illustrious notes.
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                    Total Lexicon
                  </span>
                  <span className="text-lg font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                    {totalTagsCount}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                    Built-In Canonical
                  </span>
                  <span className="text-lg font-bold font-mono tabular-nums text-slate-900 dark:text-slate-100">
                    {builtInTagsCount}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                    Active View Filter
                  </span>
                  <span className="text-lg font-bold font-mono tabular-nums text-indigo-600 dark:text-indigo-400">
                    {filteredTagsCount}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => onExportCsv(false)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Complete Lexicon CSV</span>
                  </span>
                  <span className="font-mono tabular-nums opacity-90">
                    {totalTagsCount} tags
                  </span>
                </button>

                <button
                  type="button"
                  disabled={filteredTagsCount === 0}
                  onClick={() => onExportCsv(true)}
                  className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-40 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download Currently Filtered View CSV</span>
                  </span>
                  <span className="font-mono tabular-nums opacity-80">
                    {filteredTagsCount} tags
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
