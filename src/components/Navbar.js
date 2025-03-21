import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <div className="logo-circle"></div>
            <span>Portfolio</span>
          </div>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#academics" className="nav-link">Academics</a>
          <a href="#career" className="nav-link">Career</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <button 
            className={`mode-button ${darkMode ? 'dark' : 'light'}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 