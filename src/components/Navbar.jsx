import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="NEWDA Home">
          {/* TODO: Replace with actual logo */}
          <span className="logo-placeholder">NEWDA</span>
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
          <li><Link to="/programs" className="nav-link" onClick={closeMenu}>Programs</Link></li>
          <li><Link to="/impact" className="nav-link" onClick={closeMenu}>Impact</Link></li>
          <li><Link to="/blog" className="nav-link" onClick={closeMenu}>News</Link></li>
          <li><Link to="/get-involved" className="nav-link" onClick={closeMenu}>Get Involved</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
          <li><button className="donate-btn" aria-label="Donate to NEWDA">Donate Now</button></li>
        </ul>

        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
