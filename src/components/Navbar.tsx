import React from 'react';
import { RotateCcw } from 'lucide-react';
import { GDGAlgiersLogo } from './GDGAlgiersLogo';

interface NavbarProps {
  onResetSearch: () => void;
  activeItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onResetSearch, activeItemCount }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-6">
        <a 
          href="#home" 
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-hidden"
        >
          <GDGAlgiersLogo className="h-10 sm:h-11" showSubtitle={false} />
          
          <div className="h-7 w-px bg-slate-200 hidden sm:block" />
          
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#202124] flex items-center leading-none">
              <span className="text-[#4285F4]">GDG</span>
              <span className="ml-1 text-[#202124]">Nexus</span>
            </span>
            <span className="text-[11px] font-normal text-slate-500 mt-1">
              Created by <span className="font-semibold text-[#1A73E8]">WAHB</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#search-section" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Search
          </a>
          <a href="#inspector-section" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Selected Entity
          </a>
          <a href="#dataset-overview" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Directory ({activeItemCount})
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onResetSearch}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-600" />
            <span>Clear Input</span>
          </button>
        </div>
      </div>
    </header>
  );
};
