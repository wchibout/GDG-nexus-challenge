import React from 'react';

interface GDGAlgiersLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const GDGAlgiersLogo: React.FC<GDGAlgiersLogoProps> = ({ 
  className = "h-14", 
  showSubtitle = true 
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <svg 
        viewBox="0 0 120 70" 
        className="h-12 w-auto shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="GDG Algiers Logo"
      >
        <path
          d="M32 10 L12 28 L19 35 L39 17 Z"
          fill="#4285F4"
        />
        <path
          d="M12 28 L32 46 L39 39 L19 21 Z"
          fill="#EA4335"
        />

        <ellipse cx="60" cy="14" rx="3.5" ry="5" fill="#EA4335" />
        <rect x="58.5" y="16" width="3" height="18" fill="#EA4335" />
        
        <path
          d="M59 18 C56 24 50 36 47 48 C46 51 49 52 52 50 C55 42 58 28 60 21 Z"
          fill="#EA4335"
        />
        <path
          d="M61 18 C64 24 70 36 73 48 C74 51 71 52 68 50 C65 42 62 28 60 21 Z"
          fill="#EA4335"
        />
        <path
          d="M45 51 C52 53 68 53 75 51 C76 53 74 55 60 55 C46 55 44 53 45 51 Z"
          fill="#EA4335"
        />

        <path
          d="M88 10 L108 28 L101 35 L81 17 Z"
          fill="#34A853"
        />
        <path
          d="M108 28 L88 46 L81 39 L101 21 Z"
          fill="#FBBC05"
        />
      </svg>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 font-bold text-xl sm:text-2xl tracking-tight leading-none text-[#202124]">
          <span>GDG</span>
          <span className="text-[#5F6368] font-medium">Algiers</span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] font-medium tracking-wide text-[#5F6368] mt-0.5">
            Google Developer Groups
          </span>
        )}
      </div>
    </div>
  );
};
