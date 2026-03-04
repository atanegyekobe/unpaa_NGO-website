import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NEWDA</h3>
            <p>
              {/* TODO: Replace with actual tagline */}
              Making a difference in communities around the world through sustainable development and social initiatives.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/impact">Impact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/get-involved">Donate</Link></li>
              <li><Link to="/get-involved">Volunteer</Link></li>
              <li><Link to="/get-involved">Partner</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <nav className="social-links" aria-label="Social media links">
              <a href="#" className="social-link" aria-label="Follow us on Facebook">
                <span aria-hidden="true">📘</span>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on Twitter">
                <span aria-hidden="true">🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on Instagram">
                <span aria-hidden="true">📷</span>
              </a>
              <a href="#" className="social-link" aria-label="Follow us on LinkedIn">
                <span aria-hidden="true">💼</span>
              </a>
            </nav>
            <p className="follow-text">Stay connected with our latest updates and stories</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NEWDA. All rights reserved.</p>
          <nav className="footer-links" aria-label="Legal and policy links">
            <a href="#" aria-label="Read our privacy policy">Privacy Policy</a>
            <span aria-hidden="true">•</span>
            <a href="#" aria-label="Read our terms of service">Terms of Service</a>
            <span aria-hidden="true">•</span>
            <a href="#" aria-label="View our transparency reports">Transparency</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
