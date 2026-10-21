import React, { useState, useEffect, useRef } from 'react';
import { Search, X, CornerDownLeft, ArrowDown, ArrowUp, Check, Globe, Building2, Code2, Cpu } from 'lucide-react';
import { RegistryItem } from '../types';
import { searchItems, getHighlightedText } from '../searchEngine';
import { GDGAlgiersLogo } from './GDGAlgiersLogo';

interface SearchAutocompleteProps {
  items: RegistryItem[];
  selectedItem: RegistryItem | null;
  onSelectItem: (item: RegistryItem) => void;
  query: string;
  setQuery: (q: string) => void;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({
  items,
  selectedItem,
  onSelectItem,
  query,
  setQuery,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = searchItems(query, items);

  useEffect(() => {
    if (results.length > 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(-1);
    }
  }, [query]);

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current && listRef.current.children[activeIndex]) {
      const el = listRef.current.children[activeIndex] as HTMLElement;
      el.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (isOpen && activeIndex >= 0 && results[activeIndex]) {
        handleSelect(results[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleSelect = (item: RegistryItem) => {
    onSelectItem(item);
    setQuery(item.name);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setActiveIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Country & Territory':
        return <Globe className="w-4 h-4 text-[#4285F4]" />;
      case 'Tech Ecosystem':
        return <Building2 className="w-4 h-4 text-[#EA4335]" />;
      case 'Community Chapter':
        return <Code2 className="w-4 h-4 text-[#34A853]" />;
      case 'Research Lab':
        return <Cpu className="w-4 h-4 text-[#FBBC05]" />;
      default:
        return <Globe className="w-4 h-4 text-[#4285F4]" />;
    }
  };

  const naturalPresets = [
    { label: "land", target: "Iceland, Ireland", bg: "hover:border-[#4285F4] hover:text-[#4285F4]" },
    { label: "cote divoire", target: "Côte d'Ivoire", bg: "hover:border-[#34A853] hover:text-[#34A853]" },
    { label: "ethiopie", target: "Éthiopie", bg: "hover:border-[#EA4335] hover:text-[#EA4335]" },
    { label: "oconnor", target: "O'Connor Tech", bg: "hover:border-[#FBBC05] hover:text-[#B07200]" },
    { label: "curacao", target: "Curaçao", bg: "hover:border-[#4285F4] hover:text-[#4285F4]" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto" ref={containerRef}>
      <div className="text-center pt-6 pb-6 px-4">
        <div className="flex justify-center mb-4">
          <div className="p-3.5 bg-white rounded-2xl shadow-xs border border-slate-200/90">
            <GDGAlgiersLogo className="h-14 sm:h-16" showSubtitle={true} />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-2">
          <span>GDG </span>
          <span className="bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] bg-clip-text text-transparent">
            Nexus
          </span>
        </h1>

        <p className="text-sm font-medium text-slate-500 mb-3">
          Created by <span className="font-semibold text-slate-800">WAHB</span> for GDG Algiers
        </p>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Search global countries, developer chapters, and tech hubs. Easily matches mid-words and ignores accents or apostrophes.
        </p>
      </div>

      <div className="relative z-30 px-4">
        <div 
          className={`relative flex items-center rounded-2xl transition-all duration-200 bg-white border ${
            isOpen
              ? 'border-[#4285F4] ring-4 ring-[#4285F4]/15 shadow-xl'
              : 'border-slate-300 hover:border-slate-400 shadow-md hover:shadow-lg'
          }`}
        >
          <div className="pl-4 sm:pl-5 pr-2 flex items-center pointer-events-none">
            <Search className={`w-5 h-5 transition-colors ${isOpen ? 'text-[#4285F4]' : 'text-slate-400'}`} />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search countries, GDG chapters, tech hubs..."
            className="w-full py-4 px-2 bg-transparent text-slate-800 placeholder-slate-400 text-base sm:text-lg font-medium focus:outline-hidden"
            spellCheck="false"
            autoComplete="off"
            aria-label="Search entities"
          />

          <div className="pr-3 sm:pr-4 flex items-center gap-2">
            {query.length > 0 && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                title="Clear input"
                aria-label="Clear input"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <div className="hidden sm:flex items-center px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs font-mono border border-slate-200">
              <span>ESC</span>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-4 right-4 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in duration-150">
            <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 bg-slate-50/80">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-[#4285F4] tabular-nums">{results.length}</span>
                <span>{results.length === 1 ? 'result' : 'results'}</span>
                {query.trim().length > 0 && (
                  <span className="text-slate-400">for &quot;{query}&quot;</span>
                )}
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  <ArrowDown className="w-3 h-3" /> Navigate
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownLeft className="w-3 h-3" /> Select
                </span>
              </div>
            </div>

            {results.length > 0 ? (
              <ul 
                ref={listRef} 
                className="max-h-80 overflow-y-auto py-1 custom-scrollbar divide-y divide-slate-100"
                role="listbox"
              >
                {results.map((item, index) => {
                  const isActive = index === activeIndex;
                  const isCurrentSelection = selectedItem?.id === item.id;
                  const highlightedParts = getHighlightedText(item.name, query);

                  return (
                    <li
                      key={item.id}
                      role="option"
                      aria-selected={isActive}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className={`px-4 py-3 cursor-pointer transition-colors flex items-center justify-between gap-4 ${
                        isActive
                          ? 'bg-blue-50/90 text-blue-950'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="mt-0.5 p-1.5 rounded-lg bg-white border border-slate-200 shadow-xs shrink-0">
                          {getCategoryIcon(item.category)}
                        </div>

                        <div className="min-w-0">
                          <div className="font-semibold text-sm sm:text-base text-slate-800 flex items-center gap-2 flex-wrap">
                            <span>
                              {highlightedParts.map((part, pIdx) => (
                                <span
                                  key={pIdx}
                                  className={
                                    part.isMatch
                                      ? 'bg-[#FBBC05]/30 text-[#1A73E8] font-bold px-0.5 rounded underline decoration-[#4285F4] underline-offset-2'
                                      : ''
                                  }
                                >
                                  {part.text}
                                </span>
                              ))}
                            </span>

                            {item.code && (
                              <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                                {item.code}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                            <span>{item.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{item.region}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {isCurrentSelection && (
                          <span className="flex items-center gap-1 text-xs text-[#34A853] font-semibold">
                            <Check className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Active</span>
                          </span>
                        )}

                        {isActive && (
                          <div className="p-1 rounded bg-[#4285F4] text-white">
                            <CornerDownLeft className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="px-6 py-8 text-center text-slate-500">
                <p className="text-sm font-semibold text-slate-700 mb-1">No items found</p>
                <p className="text-xs text-slate-400">
                  Try typing &quot;land&quot;, &quot;cote&quot;, or &quot;ethiopie&quot;.
                </p>
              </div>
            )}

            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span>Tip: Press Enter to select or Esc to close</span>
              <span>{items.length} total entries</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 px-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
          <span className="font-medium text-slate-600">Try searching:</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {naturalPresets.map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setQuery(preset.label);
                setIsOpen(true);
                if (inputRef.current) inputRef.current.focus();
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 bg-white text-slate-700 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center gap-1.5 ${preset.bg}`}
            >
              <span className="font-semibold text-slate-900">&quot;{preset.label}&quot;</span>
              <span className="text-[11px] text-slate-400">({preset.target})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
