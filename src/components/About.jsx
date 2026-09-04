import React from 'react';

export default function About({ skills, experience }) {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="text-emerald-400 font-mono text-sm">01.</span>
        <h2 className="text-xl sm:text-2xl font-bold text-white">About Me & Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <p className="text-slate-400 leading-relaxed text-sm">
            I am a backend-focused developer specializing in building RESTful APIs, database architectures, and robust web applications[cite: 1]. I turn business logic into optimized backend solutions and collaborate closely with frontend engineers to ship full-stack web products[cite: 1].
          </p>

          <div className="bg-slate-900/50 border border-slate-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-white font-medium text-sm mb-3">Work Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="text-emerald-400 font-mono text-xs">{exp.role} @ {exp.company}{exp.liveUrl && ` - ${exp.liveUrl}`}</div>
                <div className="text-xs text-slate-400 mb-2">{exp.project}</div>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 sm:p-5 rounded-lg">
            <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((item, i) => (
                <span key={i} className="bg-slate-800/60 text-slate-300 text-xs px-2.5 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 p-4 sm:p-5 rounded-lg">
            <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((item, i) => (
                <span key={i} className="bg-slate-800/60 text-slate-300 text-xs px-2.5 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800/80 p-4 sm:p-5 rounded-lg">
            <h3 className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">Databases & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {skills.databasesDevOps.map((item, i) => (
                <span key={i} className="bg-slate-800/60 text-slate-300 text-xs px-2.5 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}