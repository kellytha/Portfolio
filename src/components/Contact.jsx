import React, { useState } from 'react';

export default function Contact({ personalInfo }) {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message queued! Thanks for getting in touch.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/60">
      <div className="text-emerald-400 font-mono text-xs mb-2">GET IN TOUCH</div>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Let's Work Together</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full bg-slate-900/60 border border-slate-800 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-slate-900/60 border border-slate-800 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Tell me about your project or inquiry..."
              className="w-full bg-slate-900/60 border border-slate-800 rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold py-3 rounded text-sm transition-colors cursor-pointer"
          >
            Send Message
          </button>
          {status && <p className="text-emerald-400 text-xs mt-2 font-mono">{status}</p>}
        </form>

        <div className="space-y-6 text-sm">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase mb-1">Email</div>
            <a href={`mailto:${personalInfo.email}`} className="text-white hover:underline break-all">
              {personalInfo.email}
            </a>
          </div>
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase mb-1">Location</div>
            <p className="text-slate-300">{personalInfo.location}</p>
          </div>
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase mb-1">GitHub</div>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-white hover:underline break-all">
              {personalInfo.github}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}