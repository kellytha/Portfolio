import React from 'react';

export default function Footer({ personalInfo }) {
  return (
    <footer className="border-t border-slate-800/80 py-8 px-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold text-white text-sm mb-1">KTN.</div>
          <div>Building scalable digital experiences, one line of code at a time.</div>
        </div>
        <div>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}