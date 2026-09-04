import React, { useState } from 'react';

export default function Navbar({ onOpenCvModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="border-b border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="#" className="text-lg sm:text-xl font-bold tracking-wider text-white">
          KTN<span className="text-emerald-400">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          <button
            onClick={onOpenCvModal}
            className="border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400/10 px-4 py-2 rounded-md transition-all font-mono text-xs cursor-pointer"
          >
            Download CV
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-md focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0b0f19] px-4 pt-2 pb-6 space-y-4">
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 text-sm py-2 font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 text-sm py-2 font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 text-sm py-2 font-medium"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenCvModal();
            }}
            className="w-full border border-emerald-400/40 text-emerald-400 hover:bg-emerald-400/10 py-2.5 rounded-md text-xs font-mono text-center"
          >
            Download CV
          </button>
        </div>
      )}
    </nav>
  );
}