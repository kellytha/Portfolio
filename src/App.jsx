import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DownloadCvModal from './components/DownloadCvModal';
import { personalInfo, skills, projects, experience } from './data/portfolioData';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-300 antialiased selection:bg-emerald-400 selection:text-slate-900">
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />
      <Hero personalInfo={personalInfo} onOpenCvModal={() => setIsCvModalOpen(true)} />
      <About skills={skills} experience={experience} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
      
      <DownloadCvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        personalInfo={personalInfo}
      />
    </div>
  );
}