import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css";

import logo from './kims_logo.png';

function Navigation() {
  return (
    <ul className="nav-container">
      <li className="logo-container">
        <NavLink to="/">
          <img src={logo} />
        </NavLink>
      </li>
      <ul className='tab-container'>
        <li className='tab'>
          <NavLink>
            About Us
          </NavLink>
        </li>
        <li className='tab'>
          <NavLink>
            Products
          </NavLink>
        </li>
        <li className='tab'>
          <NavLink>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </ul>
  );
}

export default Navigation;
