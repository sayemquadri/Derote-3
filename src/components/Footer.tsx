import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#202923] text-[#F7F5EE] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#202923]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-[#245847] flex items-center justify-center">
              <span className="text-[#D8F36A] font-extrabold text-xs">D</span>
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              DeRote
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#F7F5EE]/70 max-w-md leading-relaxed">
            A self-discovery and support platform helping students in Classes 8–12 understand their motivation, strengths, learning styles, and future directions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#F7F5EE]/60">
          <a href="#situations" className="hover:text-[#D8F36A] transition-colors">
            Situations
          </a>
          <a href="#offerings" className="hover:text-[#D8F36A] transition-colors">
            What We Offer
          </a>
          <span className="text-[#F7F5EE]/40" aria-hidden="true">|</span>
          <span>Classes 8–12 Support Initiative</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#F7F5EE]/50">
        <p>© {new Date().getFullYear()} DeRote. Independent student self-discovery initiative.</p>
        <p className="text-center sm:text-right">
          Phase 1 Interactive Frontend Prototype. No real student data is collected or persisted.
        </p>
      </div>
    </footer>
  );
};
