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
    <section className=" p-0 mt-0 bg-linear-to-r from-[#0C0C0F] to-[#030A1C]  min-w-screen ">
      <h2 className="text-4xl p-4 m-4">Technical Stack</h2>

      <div className="flex flex-col justify-center bg-transparent p-8 border-2 mb-8  shadow-lg rounded-lg w-100 h-50">
        <h3 className="text-white text-2xl mb-2"><FontAwesomeIcon icon={faHtml5} /> Frontend</h3>
        <ul>
          <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
          <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
          <li><FontAwesomeIcon icon={faJs} /> JavaScript</li>
          <li><FontAwesomeIcon icon={faCogs} /> Responsive Design</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center bg-transparent p-8 border-2 mb-8 shadow-lg rounded-lg w-100 h-50">
        <h3 className="text-white text-2xl mb-2"><FontAwesomeIcon icon={faNodeJs} /> Backend</h3>
        <ul>
          <li><FontAwesomeIcon icon={faNodeJs} /> Node.js (Express)</li>
          <li><FontAwesomeIcon icon={faPython} /> Python (Django)</li>
          <li><FontAwesomeIcon icon={faServer} /> RESTful APIs</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center bg-transparent p-8 border-2 mb-8 shadow-lg rounded-lg w-100 h-50">
        <h3 className="text-white text-2xl mb-2"><FontAwesomeIcon icon={faDatabase} /> Databases</h3>
        <ul>
          <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
          <li><FontAwesomeIcon icon={faDatabase} /> PostgreSQL</li>
          <li><FontAwesomeIcon icon={faDatabase} /> SQLite</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center bg-transparent p-8 border-2 mb-8 shadow-lg rounded-lg w-100 h-50">
        <h3 className="text-white text-2xl mb-2"> Tools</h3>
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

