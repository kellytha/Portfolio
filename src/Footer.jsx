import React from "react";
import "./Footer.css"; // Make sure this CSS file exists

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Kelly Thabo Nkohla</h3>
          <p>
            Bringing creativity and technical excellence to every project. Connect with me to discuss your next idea!
          </p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/technical">Technical</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Me</h4>
          <p>Email: kellynkohla0@gmail.com</p>
          <p>Phone: +27 81 447 5851</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Kelly Thabo Nkohla. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
