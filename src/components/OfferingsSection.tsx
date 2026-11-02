import React from 'react';
import { WHAT_DEROTE_OFFERS } from '../data/situations';
import { OfferingMotif } from './SituationMotifs';

export const OfferingsSection: React.FC = () => {
  return (
    <section id="offerings" className="py-10 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#202923]/8">
      {/* Section Header: Minimal & Clear */}
      <div className="max-w-xl mb-6 sm:mb-10">
        <h2 className="font-display font-extrabold text-xl sm:text-3xl text-[#202923] tracking-tight leading-tight">
          What DeRote offers
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#202923]/70 font-medium">
          A dedicated space to figure out who you are before deciding where you must go.
        </p>
      </div>

      {/* 4 Clean Visual Cards with Illustration, Short Heading & 1 Brief Sentence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {WHAT_DEROTE_OFFERS.map((offering) => (
          <div
            key={offering.id}
            className="derote-card flex flex-col bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#202923]/8 hover:border-[#245847]/30 shadow-xs"
          >
            <div className="mb-3">
              <OfferingMotif type={offering.motif} className="w-9 h-9 sm:w-10 sm:h-10" />
            </div>

            <h3 className="font-display font-bold text-base sm:text-lg text-[#202923] mb-1 leading-snug">
              {offering.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#202923]/70 leading-relaxed">
              {offering.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
