
import React from 'react';
import { SKILL_MATRIX } from '../constants';

const SkillMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Skill Matrix</h2>
          <p className="text-slate-400">Technical expertise spanning hardware and high-level software engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_MATRIX.map((cat) => (
            <div key={cat.category} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-wide">{cat.category}</h3>
              <ul className="space-y-3">
                {cat.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillMatrix;
