import React, { useState } from 'react';
import { Database, Search, Globe, Building2, Code2, Cpu } from 'lucide-react';
import { RegistryItem } from '../types';

interface DatasetDirectoryProps {
  items: RegistryItem[];
  selectedItem: RegistryItem | null;
  onSelectItem: (item: RegistryItem) => void;
  onTestQuery: (name: string) => void;
}

export const DatasetDirectory: React.FC<DatasetDirectoryProps> = ({
  items,
  selectedItem,
  onSelectItem,
  onTestQuery,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'Country & Territory', 'Tech Ecosystem', 'Community Chapter', 'Research Lab'];

  const filteredItems = items.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Country & Territory':
        return <Globe className="w-3.5 h-3.5 text-[#4285F4]" />;
      case 'Tech Ecosystem':
        return <Building2 className="w-3.5 h-3.5 text-[#EA4335]" />;
      case 'Community Chapter':
        return <Code2 className="w-3.5 h-3.5 text-[#34A853]" />;
      case 'Research Lab':
        return <Cpu className="w-3.5 h-3.5 text-[#FBBC05]" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-[#4285F4]" />;
    }
  };

  return (
    <section id="dataset-overview" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="border-t border-slate-200/90 pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#4285F4]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">
                Directory of Entities (<span className="text-[#4285F4]">{items.length}</span>)
              </h2>
              <p className="text-xs text-slate-500">
                Browse all available entries across countries, tech ecosystems, and GDG chapters.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-white text-slate-900 shadow-2xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Entities' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredItems.map((item) => {
            const isSelected = selectedItem?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/70 border-[#4285F4] shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-slate-50 border border-slate-200">
                        {getCategoryIcon(item.category)}
                      </div>
                      <span className="font-bold text-slate-900 text-sm">
                        {item.name}
                      </span>
                    </div>

                    {item.code && (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                        {item.code}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.region}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    {item.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] text-slate-500 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTestQuery(item.name);
                    }}
                    className="px-2 py-1 text-slate-600 hover:text-[#4285F4] hover:bg-blue-50 rounded transition-colors flex items-center gap-1 cursor-pointer"
                    title={`Search for "${item.name}"`}
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-medium">Search</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
