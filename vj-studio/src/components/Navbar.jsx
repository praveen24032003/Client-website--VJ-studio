import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, Camera } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rentals', path: '/rentals' },
    { name: 'Sales', path: '/sales' },
    { name: 'Book Photoshoot', path: '/booking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Camera size={32} color="var(--primary)" />
          <span>VJ Studio</span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-menu">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            <span className="cart-badge">0</span>
          </Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
