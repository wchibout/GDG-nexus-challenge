import React, { useState } from 'react';
import { 
  Building2, 
  Globe, 
  Code2, 
  Cpu, 
  Copy, 
  Check, 
  X, 
  Hash, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { RegistryItem } from '../types';
import { normalizeText } from '../searchEngine';

interface ItemInspectorProps {
  item: RegistryItem | null;
  onClear: () => void;
  onQuickQuery: (str: string) => void;
}

export const ItemInspector: React.FC<ItemInspectorProps> = ({ item, onClear, onQuickQuery }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!item) {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 mt-8">
        <div className="border border-dashed border-slate-300 rounded-2xl p-8 text-center bg-white/70">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-3 text-[#4285F4]">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-slate-800 mb-1">
            Explore Details
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Select any entity from the search box above to view its region, description, and keywords.
          </p>
        </div>
      </div>
    );
  }

  const handleCopyName = () => {
    navigator.clipboard.writeText(item.name);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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

  const normalizedExample = normalizeText(item.name);

  return (
    <div id="inspector-section" className="w-full max-w-3xl mx-auto px-4 mt-8 animate-in fade-in duration-200">
      <div className="relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-6 sm:p-7">
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="w-1/4 bg-[#4285F4]" />
          <div className="w-1/4 bg-[#EA4335]" />
          <div className="w-1/4 bg-[#FBBC05]" />
          <div className="w-1/4 bg-[#34A853]" />
        </div>

        <div className="flex items-start justify-between gap-4 mb-4 pt-1">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              {getCategoryIcon(item.category)}
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>{item.category}</span>
                <span aria-hidden="true">·</span>
                <span>{item.region}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5 mt-0.5">
                <span>{item.name}</span>
                {item.code && (
                  <span className="text-xs font-mono font-medium text-[#1A73E8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    {item.code}
                  </span>
                )}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyName}
              className="px-3 py-1.5 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Copy name to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34A853]" />
                  <span className="text-[#34A853] font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Name</span>
                </>
              )}
            </button>

            <button
              onClick={onClear}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              title="Close card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
          {item.description}
        </p>

        <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/90 mb-5 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0" />
            <span>
              You can match this by typing <strong className="font-semibold text-slate-900">&quot;{normalizedExample}&quot;</strong> without worrying about accents or apostrophes.
            </span>
          </div>
          {item.testCase && (
            <span className="text-[11px] text-slate-500 italic">
              {item.testCase}
            </span>
          )}
        </div>

        <div>
          <span className="text-xs font-medium text-slate-500 block mb-2">
            Keywords:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onQuickQuery(tag)}
                className="px-2.5 py-1 text-xs text-slate-700 bg-white hover:bg-blue-50 hover:text-[#4285F4] hover:border-blue-200 border border-slate-200 rounded-md transition-colors flex items-center gap-1 cursor-pointer font-sans"
              >
                <Hash className="w-3 h-3 text-slate-400" />
                <span>{tag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
