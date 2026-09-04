import React from 'react';

export default function Hero({ personalInfo, onOpenCvModal }) {
  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="inline-block bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[11px] sm:text-xs font-mono mb-4 sm:mb-6">
        • AVAILABLE FOR OPPORTUNITIES
      </div>
      
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
        Hi, I'm <span className="text-white">{personalInfo.name}.</span>
      </h1>
      
      <h2 className="text-lg sm:text-2xl font-semibold text-emerald-400 mb-4 sm:mb-6 font-mono">
        {personalInfo.title}
      </h2>
      
      <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
        {personalInfo.summary}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
        <a
          href="#projects"
          className="w-full sm:w-auto text-center bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold px-6 py-3 rounded-md transition-colors text-sm"
        >
          View Projects
        </a>
        <button
          onClick={onOpenCvModal}
          className="w-full sm:w-auto text-center border border-slate-700 hover:border-slate-500 text-white font-medium px-6 py-3 rounded-md transition-colors text-sm cursor-pointer"
        >
          Get CV
        </button>
      </div>

      <div className="grid grid-cols-3 max-w-md border-t border-slate-800/80 pt-6 sm:pt-8 gap-2 sm:gap-4">
        {personalInfo.stats.map((stat, idx) => (
          <div key={idx} className="text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">{stat.value}</div>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}