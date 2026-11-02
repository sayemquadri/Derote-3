import React, { useState } from 'react';
import { X, Check, ArrowRight, Sparkles, BookOpen, Heart, Compass, Shield } from 'lucide-react';
import { STUDENT_SITUATIONS } from '../data/situations';

interface JourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSituations: string[];
  onToggleSituation: (id: string) => void;
}

export const JourneyModal: React.FC<JourneyModalProps> = ({
  isOpen,
  onClose,
  selectedSituations,
  onToggleSituation,
}) => {
  const [selectedClass, setSelectedClass] = useState<string>('10');
  const [demoStep, setDemoStep] = useState<number>(1);
  const [sampleAnswer, setSampleAnswer] = useState<string | null>(null);

  if (!isOpen) return null;

  const classes = [
    { value: '8', label: 'Class 8', note: 'Early curiosity & foundational habits' },
    { value: '9', label: 'Class 9', note: 'Transitioning to higher academic load' },
    { value: '10', label: 'Class 10', note: 'Board year & stream selection choices' },
    { value: '11', label: 'Class 11', note: 'Stream adjustment & competitive pressure' },
    { value: '12', label: 'Class 12', note: 'Final boards & college / career transition' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#202923]/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="journey-modal-title"
    >
      <div className="bg-[#F7F5EE] rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-2xl border border-[#202923]/10 overflow-hidden my-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-[#245847] text-white p-5 sm:p-6 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#183e32] text-[#D8F36A] text-[11px] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phase 1 Prototype Preview</span>
            </div>
            <h2 id="journey-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white">
              Start your self-discovery journey
            </h2>
            <p className="text-xs sm:text-sm text-[#F7F5EE]/80 mt-1">
              Select your class and see how DeRote structures your personalized reflection.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {demoStep === 1 ? (
            <>
              {/* Step 1: Grade Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#245847] mb-2">
                  1. Which class are you currently in?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {classes.map((cls) => (
                    <button
                      key={cls.value}
                      type="button"
                      onClick={() => setSelectedClass(cls.value)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedClass === cls.value
                          ? 'border-[#245847] bg-[#245847] text-white shadow-xs'
                          : 'border-[#202923]/10 bg-white text-[#202923] hover:border-[#245847]/40'
                      }`}
                    >
                      <div className="font-display font-bold text-sm sm:text-base tracking-normal">
                        {cls.label}
                      </div>
                      <div className={`text-[10px] mt-0.5 leading-tight ${selectedClass === cls.value ? 'text-[#D8F36A]' : 'text-[#202923]/50'}`}>
                        {cls.value === '10' || cls.value === '12' ? 'Board year' : 'Middle / Senior'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Selected Resonances */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#245847]">
                    2. Situations you resonated with ({selectedSituations.length} selected)
                  </label>
                  <span className="text-[11px] text-[#202923]/50">
                    Tap to add or remove
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {STUDENT_SITUATIONS.slice(0, 6).map((item) => {
                    const isSelected = selectedSituations.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onToggleSituation(item.id)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between gap-2 ${
                          isSelected
                            ? 'border-[#245847] bg-[#F1FCC9]/50 text-[#202923]'
                            : 'border-[#202923]/10 bg-white text-[#202923]/80 hover:border-[#202923]/25'
                        }`}
                      >
                        <span className="truncate">{item.heading}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#245847] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Journey Chapters Preview */}
              <div className="bg-white rounded-xl p-4 border border-[#202923]/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#202923]/60 block">
                  Upcoming Discovery Chapters for Class {selectedClass}
                </span>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#F7F5EE]">
                    <Sparkles className="w-4 h-4 text-[#245847] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#202923]">Strengths & Flow</p>
                      <p className="text-[11px] text-[#202923]/60">What engages you when nobody is grading you</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#F7F5EE]">
                    <BookOpen className="w-4 h-4 text-[#245847] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#202923]">Learning Friction</p>
                      <p className="text-[11px] text-[#202923]/60">Focus bottlenecks and environmental triggers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#F7F5EE]">
                    <Compass className="w-4 h-4 text-[#245847] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#202923]">Pathway Possibilities</p>
                      <p className="text-[11px] text-[#202923]/60">Broad interest maps beyond conventional paths</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#F7F5EE]">
                    <Heart className="w-4 h-4 text-[#E78667] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#202923]">Voice & Family Bridge</p>
                      <p className="text-[11px] text-[#202923]/60">Helping parents understand your real hopes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transparent Prototype Disclaimer */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF6EE] border border-[#E78667]/30 text-xs text-[#202923]">
                <Shield className="w-4 h-4 text-[#E78667] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Prototype Notice:</strong> In this first phase, DeRote is demonstrating the frontend visual identity and situation architecture. No real student records or personal data are collected or persisted.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#202923]/70 hover:text-[#202923]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => setDemoStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#245847] hover:bg-[#183e32] rounded-xl transition-colors"
                >
                  <span>Sample an interactive question</span>
                  <ArrowRight className="w-4 h-4 text-[#D8F36A]" />
                </button>
              </div>
            </>
          ) : (
            /* Interactive Sample Question Demo */
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#202923]/10">
                <span className="text-[11px] font-mono text-[#245847] font-semibold uppercase tracking-wider block mb-1">
                  Sample Discovery Prompt · Class {selectedClass}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#202923] mb-3 leading-snug">
                  "When you have free time to learn or create something without any exam pressure, what do you naturally gravitate toward?"
                </h3>

                <div className="space-y-2">
                  {[
                    "Making or building things (crafts, code, design, tinkering)",
                    "Figuring out how systems work (science, puzzles, nature, logic)",
                    "Telling stories, music, writing, or visual arts",
                    "Organizing people, discussions, or solving real-world community problems",
                    "Honestly, I feel so burnt out from exams that I haven't had energy to explore."
                  ].map((option, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSampleAnswer(option)}
                      className={`w-full p-3 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${
                        sampleAnswer === option
                          ? 'border-[#245847] bg-[#F1FCC9]/60 font-semibold text-[#202923]'
                          : 'border-[#202923]/10 bg-[#F7F5EE]/50 text-[#202923]/80 hover:border-[#245847]/40'
                      }`}
                    >
                      <span>{option}</span>
                      {sampleAnswer === option && <Check className="w-4 h-4 text-[#245847] shrink-0" />}
                    </button>
                  ))}
                </div>
              </div>

              {sampleAnswer && (
                <div className="p-4 rounded-xl bg-[#245847] text-white animate-in fade-in duration-200">
                  <p className="text-xs font-semibold text-[#D8F36A] uppercase tracking-wider mb-1">
                    Why this matters in DeRote
                  </p>
                  <p className="text-xs sm:text-sm text-[#F7F5EE]/90 leading-relaxed">
                    Rather than forcing you to pick an engineering, medical, or commerce stream right away, DeRote aggregates your natural curiosities and builds an empowering, non-judgmental map for you and your guardians.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setDemoStep(1)}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#202923]/70 hover:text-[#202923]"
                >
                  ← Back to selection
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#245847] hover:bg-[#183e32] rounded-xl transition-colors"
                >
                  Done with preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
