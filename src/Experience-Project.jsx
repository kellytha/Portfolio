import React from "react";
import "../src/Experienceproject.css";
import Ref from "../public/Refplacer.png";
import iLas from "../public/iLas.png";
import Rockchem from "../public/Rockchem.png";
import Chef from "../public/Chef Thato.png";

function Experienceproject() {
  return (
    <section className="experience-section">
      <h1>Experience / Projects</h1>

      <div className="project-card">
        <h2>Ref Allocator</h2>
        <p>
          A full-stack web app that automates referee assignments for sports tournaments.
        </p>
        <h3>Tech Stack: HTML, CSS, JavaScript, Node.js (Express), MySQL</h3>
        <h3>Functions:</h3>
        <ul>
          <li>Engineered a secure login system with role-based dashboards for managers and referees</li>
          <li>Designed a scheduling algorithm that prevents double-bookings</li>
          <li>Integrated a Paystack subscription feature for premium access ($5/month)</li>
          <li>Added a searchable referee rating and performance history system</li>
        </ul>
        <img src={ Ref } alt="Ref Allocator Screenshot" />
        <div className="project-links">
          <a href="https://ref-placer.onrender.com" target="_blank" rel="noopener noreferrer">View Website</a>
          <a href="https://github.com/kellytha/ref-placer.git" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>

      <div className="project-card">
        <h2>iLas Industries Inc</h2>
        <p>
          A client-facing website that showcases the company’s projects and allows clients to request a callback.
        </p>
        <h3>Tech Stack: HTML, CSS, JavaScript, Node.js, Express</h3>
        <img src={ iLas } alt="iLas Industries Screenshot" />
        <div className="project-links">
          <a href="https://github.com/kellytha/carpentry.git" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>

      <div className="project-card">
        <h2>RockChem</h2>
        <p>
          A client-facing website showcasing company projects and managing callback requests efficiently.
        </p>
        <h3>Tech Stack: React.js, CSS, JavaScript</h3>
        <img src={ Rockchem } alt="RockChem Screenshot" />
        <div className="project-links">
          <a href="https://github.com/kellytha/Rockchem.git" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>

      <div className="project-card">
        <h2>Chef Thato</h2>
        <p>A portfolio website for a chef, showcasing culinary work and services.</p>
        <h3>Tech Stack: React.js, CSS, JavaScript</h3>
        <img src={ Chef } alt="Chef Thato Screenshot" />
        <div className="project-links">
          <a href="https://chef-thato-website-kelly-nkohlas-projects.vercel.app/" target="_blank" rel="noopener noreferrer">View Website</a>
          <a href="https://github.com/kellytha/Chef-Thato-website.git" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>

      <div className="github-section">
        <h4>For more projects, visit my GitHub</h4>
        <a href="https://github.com/kellytha" target="_blank" rel="noopener noreferrer">
          <button className="github-btn">GitHub</button>
        </a>
      </div>
    </section>
  );
}

export default Experienceproject;
