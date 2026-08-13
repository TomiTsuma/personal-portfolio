import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <div className="logo-icon">T</div>
          <span>Thomas</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/experience" className={isActive('/experience')} onClick={() => setIsOpen(false)}>Experience</Link>
          <Link to="/entrepreneurship" className={isActive('/entrepreneurship')} onClick={() => setIsOpen(false)}>Entrepreneurship</Link>
          <Link to="/research" className={isActive('/research')} onClick={() => setIsOpen(false)}>Research</Link>
          <Link to="/publications" className={isActive('/publications')} onClick={() => setIsOpen(false)}>Publications</Link>
          <Link to="/homelab" className={isActive('/homelab')} onClick={() => setIsOpen(false)}>Home Lab</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <i className="lni lni-menu"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
