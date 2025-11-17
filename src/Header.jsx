import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header-nav">
      <h1 className="logo">Kelly Thabo Nkohla</h1>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/education" className="nav-link">Education</Link></li>
        <li><Link to="/experience" className="nav-link">Experience/Projects</Link></li>
        <li><Link to="/technical" className="nav-link">Technical</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
