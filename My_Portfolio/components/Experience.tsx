
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Experience Timeline</h2>
          <p className="text-slate-400">Internships and industrial placements across prestigious organizations.</p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-all shadow-xl">
                <div className="flex flex-col mb-2">
                  <span className="text-xs font-mono text-blue-400 mb-1">{exp.period}</span>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-sm font-medium text-slate-300">{exp.role}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
