import React from 'react';
import './Footer.css';
import repl from '../../assets/repl.png'
import instagram from '../../assets/instagram.jpg'
import linkedin from '../../assets/linkedin.jpg'
import github from '../../assets/github.png'
import x from '../../assets/x.jpg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Slogan */}
        <p className="footer-slogan">
        "Powered by Repl – Innovate, Code, Create."
        </p>

        {/* Logo */}
        <div className="footer-logo">
          <img 
            src={repl} 
            alt="REPL Logo" 
          />
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <a href="https://github.com/" className="social-link">
            <img src={github} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100090071691859&mibextid=ZbWKwL" className="social-link">
            <img src={x} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/repl_devs?igsh=MW9vNTQxZWloYmtlNA==" className="social-link">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/repl-devs/" className="social-link">
            <img src={linkedin} alt="GitHub" />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          Copyright © 2024 REPL DEVS Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;