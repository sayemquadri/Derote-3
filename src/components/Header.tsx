import React from 'react';
import { ArrowRight, User } from 'lucide-react';

interface HeaderProps {
  onStartJourney: () => void;
  onSignIn: () => void;
  selectedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onStartJourney, onSignIn, selectedCount = 0 }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F7F5EE]/95 backdrop-blur-md border-b border-[#202923]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-13 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-1.5 sm:gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245847] rounded-lg shrink-0"
          aria-label="DeRote Homepage"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#245847] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
              <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" stroke="#D8F36A" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" fill="#D8F36A" />
              <path d="M16 8L20 4" stroke="#E78667" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-extrabold text-base sm:text-xl text-[#202923] tracking-tight">
              DeRote
            </span>
            <span className="hidden md:inline text-[11px] font-medium text-[#202923]/60 tracking-normal">
              Classes 8–12
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#202923]/80" aria-label="Main Navigation">
          <a href="#situations" className="hover:text-[#245847] transition-colors whitespace-nowrap py-1">
            Situations
          </a>
          <a href="#offerings" className="hover:text-[#245847] transition-colors whitespace-nowrap py-1">
            What We Offer
          </a>
        </nav>

        {/* Zone 3: Actions (Mobile optimized, no right edge clipping) */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={onSignIn}
            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-[#202923] hover:text-[#245847] hover:bg-[#202923]/5 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#245847]"
          >
            <User className="w-3.5 h-3.5 text-[#245847]" aria-hidden="true" />
            <span>Sign in</span>
          </button>

          <button
            type="button"
            onClick={onStartJourney}
            className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#245847] hover:bg-[#183e32] active:scale-[0.98] rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#245847]"
          >
            {/* Short label on mobile to prevent clipping, full label on sm+ */}
            <span className="sm:hidden">Start journey</span>
            <span className="hidden sm:inline">Start your journey</span>
            {selectedCount > 0 ? (
              <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-[11px] font-extrabold bg-[#D8F36A] text-[#245847] rounded-full shrink-0">
                {selectedCount}
              </span>
            ) : (
              <ArrowRight className="w-3.5 h-3.5 text-[#D8F36A] shrink-0" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
