
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-xl">
              Deep dives into engineering challenges I've solved, ranging from AI diagnostics to embedded hardware simulations.
            </p>
          </div>
          <div className="h-px bg-slate-800 flex-grow mx-8 hidden md:block" />
          <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Selected Works</span>
        </div>

        <div className="grid grid-cols-1 gap-20">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-slate-900 border border-slate-800">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed italic">"{project.description}"</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
