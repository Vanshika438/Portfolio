import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Projects', 'Resume', 'Contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>Vanshika<span>Sharma</span></p>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((item) => (
          <a
            href={`#${item}`}
            key={item}
            className={activeSection === item ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
      <button
        className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

    </nav>
  );
};

export default Navbar;