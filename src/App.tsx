import React, { useState, useEffect } from 'react';
import { AmbientCursorLight } from './components/AmbientCursorLight';
import { Navbar } from './components/Navbar';
import { SearchAutocomplete } from './components/SearchAutocomplete';
import { ItemInspector } from './components/ItemInspector';
import { DatasetDirectory } from './components/DatasetDirectory';
import items from './data';
import { RegistryItem } from './types';

export default function App() {
  const [query, setQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<RegistryItem | null>(null);

  useEffect(() => {
    const defaultItem = items.find((i) => i.id === 'civ') || items[0];
    if (defaultItem) {
      setSelectedItem(defaultItem);
    }
  }, []);

  const handleSelectItem = (item: RegistryItem) => {
    setSelectedItem(item);
  };

  const handleResetSearch = () => {
    setQuery('');
  };

  const handleRunQuery = (searchQuery: string) => {
    setQuery(searchQuery);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#202124] flex flex-col font-sans selection:bg-[#4285F4]/20 selection:text-[#1A73E8]">
      <AmbientCursorLight />

      <Navbar 
        onResetSearch={handleResetSearch} 
        activeItemCount={items.length} 
      />

      <main className="relative z-10 flex-1 pb-16">
        <section id="search-section" className="pt-4 pb-4">
          <SearchAutocomplete
            items={items}
            selectedItem={selectedItem}
            onSelectItem={handleSelectItem}
            query={query}
            setQuery={setQuery}
          />
        </section>

        <ItemInspector
          item={selectedItem}
          onClear={() => setSelectedItem(null)}
          onQuickQuery={handleRunQuery}
        />

        <DatasetDirectory
          items={items}
          selectedItem={selectedItem}
          onSelectItem={handleSelectItem}
          onTestQuery={handleRunQuery}
        />
      </main>

      <footer className="relative z-10 border-t border-slate-200/90 bg-white py-8 px-4 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">GDG Nexus</span>
            <span aria-hidden="true">·</span>
            <span>Created by <strong className="font-semibold text-slate-900">WAHB</strong> for <strong className="font-semibold text-[#4285F4]">GDG Algiers</strong></span>
          </div>

          <div className="flex items-center gap-3 text-slate-500 font-medium">
            <span className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
            </span>
            <span>Google Developer Groups Community</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
