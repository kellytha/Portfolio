import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode, faCertificate } from "@fortawesome/free-solid-svg-icons";
import "./Education.css";
import PLP from "/PLP Academy.pdf";

function Education() {
  return (
    <section className="education-section">
      <h1>Education</h1>

      <div className="education-card">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Unisa</h2>
        <p>HC in Mathematics and Statistics (In Progress)</p>
        <ul>
          <li>Developing a strong foundation in analytical thinking and data-driven problem solving</li>
          <li>Applying statistical and mathematical logic to real-world software and algorithm design</li>
          <li>Using probability, regression, and data visualization tools for better technical insights</li>
        </ul>
      </div>

      <div className="education-card">
        <h2><FontAwesomeIcon icon={faLaptopCode} /> Power Learn Project (PLP Academy)</h2>
        <p>Full Stack Development (Bootcamp - 2024)</p>
        <p>Core Technologies: HTML, CSS, JavaScript, Node.js (Express), Python (Django)</p>
        <ul>
          <li>Built and deployed full-stack web applications integrating both frontend and backend logic</li>
          <li>Collaborated on open-source-style projects emphasizing clean architecture and teamwork</li>
        </ul>
        <a href={ PLP } className="certificate-btn"><FontAwesomeIcon icon={faCertificate} /> View Certificate</a>
      </div>

      <div className="education-card">
        <h2><FontAwesomeIcon icon={faLaptopCode} /> FreeCodeCamp</h2>
        <p>Responsive Web Design</p>
        <p>Core Technologies: HTML, CSS</p>
        <a href="https://www.freecodecamp.org/certification/fcc75d0c200-14dd-473e-84f6-ddd920b92925/responsive-web-design" className="certificate-btn"><FontAwesomeIcon icon={faCertificate} /> View Certificate</a>
      </div>
    </section>
  )
};

export default Education;
