import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Citrus, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <Citrus className="logo-icon" size={32} />
          <span className="gradient-text">OrangesWorld</span>
        </NavLink>
        
        <div className="nav-menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>About</NavLink>
          <NavLink to="/career" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Career</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>Contact Us</NavLink>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
