import React from 'react';

export default function DownloadCvModal({ isOpen, onClose, personalInfo }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0f172a] border border-slate-800 rounded-lg max-w-lg w-full p-5 sm:p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg p-1"
        >
          ✕
        </button>

        <h3 className="text-base sm:text-lg font-bold text-white mb-1">Download CV</h3>
        <p className="text-xs text-slate-400 mb-4">Choose your preferred format for export.</p>

        <div className="bg-slate-900/80 border border-slate-800 rounded p-3 sm:p-4 mb-6 text-xs text-slate-300 space-y-2 font-mono">
          <div className="font-bold text-white">{personalInfo.name}</div>
          <div className="text-emerald-400">{personalInfo.title}</div>
          <div className="break-all">{personalInfo.location} | {personalInfo.email}</div>
          Full-Stack Web Development Bootcamp Graduate (PLP Academy - 2024)
        </div>

        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
          <a
            href="/Kelly_Nkohla_CV.pdf"
            download
            className="w-full text-center bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold py-2.5 rounded text-xs transition-colors"
          >
            Download PDF
          </a>
          <button
            onClick={onClose}
            className="w-full border border-slate-700 hover:border-slate-500 text-slate-300 py-2.5 rounded text-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}