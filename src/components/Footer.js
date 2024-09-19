import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to={'/solutions'}>Solutions</Link>
        <Link to={'/pricing'}>Pricing</Link>
        <Link to={'/Contact'}>Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;