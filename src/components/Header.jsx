import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">Agvysor</span>
        </Link>

        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div className="nav-dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-menu">
              <Link to="/services/business-development" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>
                Business Development
              </Link>
              <Link to="/services/pricing-strategy" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>
                Pricing Strategy
              </Link>
              <Link to="/services/leadership-coaching" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>
                Leadership Coaching
              </Link>
              <Link to="/services/partnerships" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>
                Partnerships
              </Link>
            </div>
          </div>
          <Link to="/pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Pricing
          </Link>
          <Link to="/insights" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Insights
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="nav-link nav-cta" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
