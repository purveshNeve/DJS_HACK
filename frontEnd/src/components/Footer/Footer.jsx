import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#docs">Docs</a></li>
              <li><a href="#api">API</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#data-protection">Data Protection</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2026 HackathonOS</p>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer