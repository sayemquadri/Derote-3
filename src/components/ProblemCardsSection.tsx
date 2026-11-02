import React, { useState } from 'react';
import { STUDENT_SITUATIONS, SituationItem, calculateResonanceSummary } from '../data/situations';
import { EditorialIllustration } from './EditorialIllustrations';
import { ArrowRight, X, Sparkles, Check } from 'lucide-react';

interface ProblemCardsSectionProps {
  selectedSituations: string[];
  onToggleSituation: (id: string) => void;
  onStartJourneyWithSituations: (ids: string[]) => void;
}

export const ProblemCardsSection: React.FC<ProblemCardsSectionProps> = ({
  selectedSituations,
  onToggleSituation,
  onStartJourneyWithSituations,
}) => {
  const [activeItem, setActiveItem] = useState<SituationItem | null>(null);
  const resonance = calculateResonanceSummary(selectedSituations);

  const handleCardClick = (item: SituationItem) => {
    setActiveItem(item);
  };

  return (
    <section id="situations" className="pt-4 pb-12 sm:pt-8 sm:pb-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Concise Introduction */}
      <div className="mb-6 sm:mb-10 max-w-2xl">
        <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-[#202923] tracking-tight leading-tight">
          Not sure what's next? Start here.
        </h1>
        <p className="mt-1.5 text-sm sm:text-base text-[#202923]/75 font-medium">
          See yourself in any of these?
        </p>
      </div>

      {/* 2. Redesigned Editorial Problem Cards
          Hierarchy:
          A. Large illustration (~45-55% visual area) in rounded container
          B. Bold problem heading
          C. Relatable first-person statement
          D. Subtle divider with Category label (left) & 'Reflect →' (right)
          Grid: Spacious 3-column desktop layout (lg:grid-cols-3), responsive on mobile
      */}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
        {STUDENT_SITUATIONS.map((item) => {
          const isSelected = selectedSituations.includes(item.id);

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(item);
                }
              }}
              aria-label={`${item.heading}: ${item.firstPersonQuote}. Click to reflect.`}
              className={`derote-card group relative flex flex-col justify-between bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border cursor-pointer transition-all duration-200 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#245847] ${
                isSelected
                  ? 'border-[#245847] shadow-sm ring-2 ring-[#245847]/20 bg-[#FBFDF9]'
                  : 'border-[#202923]/10 hover:border-[#245847]/30 shadow-xs'
              }`}
            >
              <div>
                {/* A. Large Illustration (Occupies approx 45-55% of card visual area) */}
                <div className="relative w-full aspect-[16/10] min-h-[95px] sm:min-h-[170px] rounded-lg sm:rounded-xl overflow-hidden mb-2.5 sm:mb-4 border border-[#202923]/5 bg-[#F7F5EE]/60 transition-transform duration-200 group-hover:scale-[1.01]">
                  <EditorialIllustration name={item.illustration} className="w-full h-full object-cover" />

                  {/* Active selection badge */}
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-[#245847] text-[#D8F36A] w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shadow-xs">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                    </div>
                  )}
                </div>

                {/* B. Problem Heading */}
                <h2 className="font-display font-bold text-sm sm:text-xl text-[#202923] group-hover:text-[#245847] transition-colors leading-snug mb-1 sm:mb-1.5">
                  {item.heading}
                </h2>

                {/* C. Relatable First-Person Statement */}
                <p className="text-[11px] sm:text-sm text-[#202923]/75 leading-snug sm:leading-relaxed font-normal mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                  {item.firstPersonQuote}
                </p>
              </div>

              {/* D. Bottom Action Row: Subtle divider, Category label (left), Reflect → (right) */}
              <div className="pt-2 sm:pt-3 mt-auto border-t border-[#202923]/8 flex items-center justify-between text-[10px] sm:text-xs">
                <span className="text-[9px] sm:text-[11px] font-semibold text-[#245847]/80 uppercase tracking-wider truncate mr-1">
                  {item.category}
                </span>

                <span className="font-bold text-[#245847] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform shrink-0">
                  <span>Reflect</span>
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating or Inline Selection Feedback Bar */}
      {selectedSituations.length > 0 && (
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#245847] text-white shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D8F36A] flex items-center justify-center shrink-0 text-[#245847]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-sm sm:text-base text-white">
                {selectedSituations.length === 1
                  ? '1 situation selected for your reflection'
                  : `${selectedSituations.length} situations selected for your reflection`}
              </p>
              <p className="text-xs sm:text-sm text-[#F7F5EE]/80">
                {resonance.message}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onStartJourneyWithSituations(selectedSituations)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold bg-[#D8F36A] text-[#245847] hover:bg-[#c6e450] active:scale-[0.98] rounded-xl transition-colors whitespace-nowrap"
          >
            <span>Start self-discovery with these</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Lightweight Detail Panel / Modal (Requirement 6) */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202923]/45 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-panel-title"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 max-w-lg w-full shadow-2xl border border-[#202923]/10 overflow-hidden animate-in zoom-in-95 duration-150">
            {/* Header with illustration */}
            <div className="relative w-full aspect-[16/9] max-h-48 rounded-xl overflow-hidden mb-4 border border-[#202923]/5 bg-[#F7F5EE]">
              <EditorialIllustration name={activeItem.illustration} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 text-[#202923] hover:bg-white shadow-xs transition-colors"
                aria-label="Close reflection details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-[#245847] uppercase tracking-wider">
              <span>{activeItem.category}</span>
              <span aria-hidden="true">·</span>
              <span>Student Reflection</span>
            </div>

            <h3 id="detail-panel-title" className="font-display font-bold text-xl sm:text-2xl text-[#202923] mb-2 leading-snug">
              {activeItem.heading}
            </h3>

            <p className="text-sm font-medium text-[#202923]/80 italic mb-4">
              {activeItem.firstPersonQuote}
            </p>

            <div className="p-3.5 rounded-xl bg-[#F7F5EE] border border-[#202923]/8 mb-5">
              <p className="text-xs font-bold text-[#245847] uppercase tracking-wider mb-1">
                DeRote Perspective
              </p>
              <p className="text-xs sm:text-sm text-[#202923] leading-relaxed">
                {activeItem.reflectionDetail}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  onToggleSituation(activeItem.id);
                  setActiveItem(null);
                }}
                className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                  selectedSituations.includes(activeItem.id)
                    ? 'bg-[#202923]/10 text-[#202923] hover:bg-[#202923]/15'
                    : 'bg-[#245847] text-white hover:bg-[#183e32]'
                }`}
              >
                {selectedSituations.includes(activeItem.id) ? (
                  <>
                    <Check className="w-4 h-4 text-[#245847]" />
                    <span>Added to my reflection list</span>
                  </>
                ) : (
                  <span>I recognize this experience</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#202923]/70 hover:text-[#202923]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
