import React, { useState } from 'react';
import { X, Lock, Shield, ArrowRight, User } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToJourney: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onGoToJourney }) => {
  const [role, setRole] = useState<'student' | 'guardian' | 'school'>('student');
  const [demoId, setDemoId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202923]/50 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="signin-modal-title"
    >
      <div className="bg-[#F7F5EE] rounded-2xl max-w-md w-full shadow-2xl border border-[#202923]/10 overflow-hidden animate-in zoom-in-95 duration-150">
        <div className="bg-[#245847] text-white p-5 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8F36A] block mb-1">
              Phase 1 Prototype Access
            </span>
            <h2 id="signin-modal-title" className="font-display font-bold text-xl text-white">
              Sign in to DeRote
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Close sign in dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4">
          {submitted ? (
            <div className="text-center py-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#F1FCC9] text-[#245847] flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#202923]">
                Authentication In Development
              </h3>
              <p className="text-xs sm:text-sm text-[#202923]/75 leading-relaxed">
                As per Phase 1 development boundaries, live student accounts, OAuth, and databases are strictly reserved for Phase 2. You can explore all interactive self-discovery tools freely without signing in.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                    onGoToJourney();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs sm:text-sm font-bold text-[#245847] bg-[#D8F36A] hover:bg-[#cbe654] rounded-xl transition-colors"
                >
                  <span>Explore Self-Discovery Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Toggle */}
              <div>
                <label className="block text-xs font-semibold text-[#202923]/70 mb-1.5">
                  I am a:
                </label>
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-white rounded-lg border border-[#202923]/10">
                  {(['student', 'guardian', 'school'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-1.5 text-xs font-semibold rounded-md capitalize transition-colors ${
                        role === r
                          ? 'bg-[#245847] text-white shadow-xs'
                          : 'text-[#202923]/70 hover:text-[#202923]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="signin-id" className="block text-xs font-semibold text-[#202923]/80 mb-1">
                  {role === 'student' ? 'Student ID or Email' : role === 'guardian' ? 'Guardian Email' : 'School Access Code'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#202923]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="signin-id"
                    type="text"
                    value={demoId}
                    onChange={(e) => setDemoId(e.target.value)}
                    placeholder={role === 'student' ? 'e.g. arjun@school.edu or student_id' : 'name@email.com'}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white rounded-lg border border-[#202923]/15 focus:outline-none focus:ring-2 focus:ring-[#245847]"
                  />
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#FFF8EE] border border-[#E78667]/30 text-xs text-[#202923] flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#E78667] shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>Phase 1 Notice:</strong> No credentials are submitted to any server. Pressing Sign In demonstrates the login routing flow.
                </p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#202923]/70 hover:text-[#202923]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[#245847] hover:bg-[#183e32] rounded-lg transition-colors"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
