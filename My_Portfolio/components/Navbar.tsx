
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Youssef Ali
        </a>
        <div className="hidden md:flex gap-8">
          {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
