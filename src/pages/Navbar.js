// Frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">AD</Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">Tentang Saya</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Kontak</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
