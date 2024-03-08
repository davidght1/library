// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact="true" to="/" className="nav-link" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link" >
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
