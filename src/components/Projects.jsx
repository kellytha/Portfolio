import React from 'react';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex items-center gap-2 mb-8 sm:mb-10">
        <span className="text-emerald-400 font-mono text-sm">02.</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all rounded-lg p-5 sm:p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-emerald-400 font-mono text-[11px] mb-2">• FEATURED PROJECT</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-800/80 text-emerald-300/80 text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs px-4 py-2.5 sm:py-2 rounded transition-colors"
                >
                  View Live Site
                </a>
              )}
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-center border border-slate-700 hover:border-slate-500 text-white text-xs px-4 py-2.5 sm:py-2 rounded transition-colors"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}