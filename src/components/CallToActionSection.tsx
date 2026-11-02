import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';

interface CallToActionSectionProps {
  onStartJourney: () => void;
  onSignIn: () => void;
  selectedCount?: number;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onStartJourney,
  onSignIn,
  selectedCount = 0,
}) => {
  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#245847] text-white p-6 sm:p-10 md:p-12 overflow-hidden shadow-sm">
        {/* Subtle geometric motif accent */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block" aria-hidden="true">
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#D8F36A" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M50 20L58 42L80 50L58 58L50 80L42 58L20 50L42 42Z" fill="#D8F36A" />
          </svg>
        </div>

        <div className="relative z-10 max-w-xl">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug mb-2 text-balance">
            You don't need all the answers to take the first step.
          </h2>

          <p className="text-xs sm:text-base text-[#F7F5EE]/80 leading-relaxed mb-6">
            Reflect on what feels true about your learning today. No scores, no marks, no pressure.
          </p>

          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
            <button
              type="button"
              onClick={onStartJourney}
              className="flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#245847] bg-[#D8F36A] hover:bg-[#cbf056] active:scale-[0.98] rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#245847] focus-visible:ring-[#D8F36A]"
            >
              <span>Start your journey</span>
              {selectedCount > 0 && (
                <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-[#245847] text-[#D8F36A] font-extrabold">
                  {selectedCount}
                </span>
              )}
              <ArrowRight className="w-4 h-4 text-[#245847]" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={onSignIn}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#F7F5EE] hover:text-white hover:bg-white/10 rounded-xl transition-colors whitespace-nowrap"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D8F36A]" aria-hidden="true" />
              <span>Sign in</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
