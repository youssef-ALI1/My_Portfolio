
import React from 'react';
import { CONTACT_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 text-center">
          {/* Decorative mesh */}
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's build something exceptional together.</h2>
            <p className="text-blue-100 text-lg mb-10 opacity-90">
              I'm always open to discussing new software development opportunities, hardware projects, or innovative engineering solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={CONTACT_LINKS.email} 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                Send an Email
              </a>
              <a 
                href={CONTACT_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-800 text-white rounded-xl font-bold border border-blue-400/30 hover:bg-blue-900 transition-all flex items-center justify-center gap-2"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span className="font-mono text-sm">sofa314</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
