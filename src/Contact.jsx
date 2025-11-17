import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../src/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="contact-links">
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

    </section>
  );
}

export default Contact;
