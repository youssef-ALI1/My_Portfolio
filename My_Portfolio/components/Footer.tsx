
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm">
          © {currentYear} Youssef Ali. Handcrafted with passion and precision.
        </div>
        <div className="flex gap-6 text-slate-400 text-sm">
          <a href="#hero" className="hover:text-white transition-colors underline decoration-slate-800 underline-offset-4">Top</a>
          <a href="#projects" className="hover:text-white transition-colors underline decoration-slate-800 underline-offset-4">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors underline decoration-slate-800 underline-offset-4">Experience</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
