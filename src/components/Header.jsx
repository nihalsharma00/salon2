import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <Link to="/" className="link">Home</Link>
      <Link to="/staff" className="link">Staff</Link>
      <Link to="/services" className="link">Services</Link>
      <Link to="/appointment" className="link">Appointment</Link>
    </nav>
  </header>
);

export default Header;
