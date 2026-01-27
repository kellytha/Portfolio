import "../src/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="flex justify-center bg-linear-to-r from-[#18181A] to-[#051024] shadow-md">
      <div className="flex-1 flex-wrap justify-center w-full p-6 gap-4 footer-container md:flex md:flex-wrap md:justify-center">
        <div>
          <h3 className="text-2xl font-bold mt-3 p-3">Kelly Thabo Nkohla</h3>
        </div>

        <div className="flex-1 justify-between p-3 m-3">
          <h4 className="flex justify-center wrap " >Quick Links</h4>
          <ul className="flex flex-col justify-center items-center gap-2">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/technical">Technical</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="flex-1 justify-between p-3 m-3">
          <h4 className="font-bold text-2xl flex justify-center">Contact Me</h4>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/kelly-thabo-nkohla-0bbb99335"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="mailto:kellynkohla0@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>

            <a
              href="https://github.com/kellytha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="https://wa.me/27817165893" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>

            <a href="tel:+27814475851">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>

        </div>
      </div>

      <div className="text-center mt-3 p-4 footer-bottom">
        &copy; {new Date().getFullYear()} Kelly Thabo Nkohla. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;
