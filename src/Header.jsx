import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="header-nav">
      <h1 className="logo">Kelly Thabo Nkohla</h1>

      {/* Desktop / hidden mobile menu */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/education" className="nav-link" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li><Link to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience/Projects</Link></li>
        <li><Link to="/technical" className="nav-link" onClick={() => setMenuOpen(false)}>Technical</Link></li>
      </ul>

      {/* Hamburger menu icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Header;
