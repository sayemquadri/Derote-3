/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProblemCardsSection } from './components/ProblemCardsSection';
import { OfferingsSection } from './components/OfferingsSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { JourneyModal } from './components/JourneyModal';
import { SignInModal } from './components/SignInModal';
import { toggleResonance } from './data/situations';

export default function App() {
  const [selectedSituations, setSelectedSituations] = useState<string[]>([]);
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleToggleSituation = (id: string) => {
    setSelectedSituations(prev => toggleResonance(prev, id));
  };

  const handleStartJourney = () => {
    setIsJourneyModalOpen(true);
  };

  const handleStartJourneyWithSituations = (situations: string[]) => {
    setSelectedSituations(situations);
    setIsJourneyModalOpen(true);
  };

  const handleOpenSignIn = () => {
    setIsSignInModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F5EE] text-[#202923] flex flex-col font-sans selection:bg-[#D8F36A] selection:text-[#245847]">
      {/* 1. Compact Navigation Bar */}
      <Header
        onStartJourney={handleStartJourney}
        onSignIn={handleOpenSignIn}
        selectedCount={selectedSituations.length}
      />

      <main className="flex-1">
        {/* 2. Show Problems First: Relatable Student Situation Cards */}
        <ProblemCardsSection
          selectedSituations={selectedSituations}
          onToggleSituation={handleToggleSituation}
          onStartJourneyWithSituations={handleStartJourneyWithSituations}
        />

        {/* 3. What DeRote Offers: 4 Pillars */}
        <OfferingsSection />

        {/* 4. Final Call to Action */}
        <CallToActionSection
          onStartJourney={handleStartJourney}
          onSignIn={handleOpenSignIn}
          selectedCount={selectedSituations.length}
        />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* Modals for Phase 1 Prototype Interaction */}
      <JourneyModal
        isOpen={isJourneyModalOpen}
        onClose={() => setIsJourneyModalOpen(false)}
        selectedSituations={selectedSituations}
        onToggleSituation={handleToggleSituation}
      />

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
        onGoToJourney={() => {
          setIsSignInModalOpen(false);
          setIsJourneyModalOpen(true);
        }}
      />
    </div>
  );
}
