
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-600/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-400">Available for Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
            Bridging the gap between <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Hardware</span> and <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Software</span>.
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Computer Engineering graduate transitioned into a Software Engineer. 
            I bring the precision of embedded systems design to the scalability of modern full-stack web and mobile applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-white text-slate-950 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold border border-slate-800 hover:bg-slate-800 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
