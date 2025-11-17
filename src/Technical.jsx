import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faPython,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faCogs } from "@fortawesome/free-solid-svg-icons";
import "../src/Technical.css";

function Technical() {
  return (
    <section className="technical">
      <h2>Technical Stack</h2>

      <div className="tech-category">
        <h3><FontAwesomeIcon icon={faHtml5} /> Frontend</h3>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
          <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faCogs} /> Responsive Design</li>
        </ul>
      </div>

      <div className="tech-category">
        <h3><FontAwesomeIcon icon={faNodeJs} /> Backend</h3>
        <ul>
          <li><FontAwesomeIcon icon={faNodeJs} /> Node.js (Express)</li>
          <li><FontAwesomeIcon icon={faPython} /> Python (Django)</li>
          <li><FontAwesomeIcon icon={faServer} /> RESTful APIs</li>
        </ul>
      </div>

      <div className="tech-category">
        <h3><FontAwesomeIcon icon={faDatabase} /> Databases</h3>
        <ul>
          <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
          <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
          <li><FontAwesomeIcon icon={faDatabase} /> SQLite</li>
        </ul>
      </div>

      <div className="tech-category">
        <h3><FontAwesomeIcon icon={faGit} /> Tools</h3>
        <ul>
          <li><FontAwesomeIcon icon={faGit} /> Git</li>
          <li><FontAwesomeIcon icon={faGithub} /> GitHub</li>
          <li><FontAwesomeIcon icon={faCogs} /> Render</li>
          <li><FontAwesomeIcon icon={faCogs} /> Netlify</li>
          <li><FontAwesomeIcon icon={faCogs} /> Postman</li>
        </ul>
      </div>
    </section>
  );
}

export default Technical;

