import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Agvysor</h3>
            <p className="footer-description">
              Empowering startups and SMEs with data-driven growth strategies 
              and leadership coaching.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span>@</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/business-development">Business Development</Link></li>
              <li><Link to="/services/pricing-strategy">Pricing Strategy</Link></li>
              <li><Link to="/services/leadership-coaching">Leadership Coaching</Link></li>
              <li><Link to="/services/partnerships">Partnerships</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>📍 123 Business Street<br />San Francisco, CA 94102</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 hello@agvysor.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Agvysor. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
