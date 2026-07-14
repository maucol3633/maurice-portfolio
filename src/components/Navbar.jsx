import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <Link to="/" className="brand">
        <span className="brand-icon">MC</span>
        <div>
          <h2>Maurice Coles II</h2>
          <p>Web Developer</p>
        </div>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/design">Design</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/contact" className="hire-btn">
        Let's Talk →
      </Link>

    </header>
  );
}

export default Navbar;