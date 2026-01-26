import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className=" flex  justify-between item-center p-5 bg-black shadow-md sticky top-0 z-10">
      <h1 className="text-linear-to-r from-[#0C0C0F] to-[#030A1C] ">KN</h1>

      {/* Desktop / hidden mobile menu */}
      <ul className={`nav-links flex gap-5 text-linear-to-r from-[#0C0C0F] to-[#030A1C] ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/education" className="nav-link" onClick={() => setMenuOpen(false)}>Education</Link></li>
        <li><Link to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>Experience/Projects</Link></li>
        <li><Link to="/technical" className="nav-link" onClick={() => setMenuOpen(false)}>Technical</Link></li>
      </ul>

      {/* Hamburger menu icon */}
      <div className="hamburger text-linear-to-r from-[#0C0C0F] to-[#030A1C] md:hidden" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Header;
