import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
    const linkStyle = {
        textDecoration: 'none',
        listStyleType: 'none',
    };

    return (
        <div className="main-container"> 
        <div className="nav-container">
          <h3 className="app-title">Talking Trump</h3>
          <Link to="/" style={linkStyle}>
            <li className="nav-el">Home</li>
          </Link>
          <Link to="/calculator" style={linkStyle}>
            <li className="nav-el">Contact</li>
          </Link>
        </div>
          <p className="slogan">Make APIs Great Again</p>
        </div>  

    
      );
}