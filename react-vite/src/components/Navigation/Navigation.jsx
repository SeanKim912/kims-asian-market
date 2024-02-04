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
          <NavLink className='link'>
            ABOUT US
          </NavLink>
        </li>
        <li className='tab'>
          <NavLink className='link'>
            PRODUCTS
          </NavLink>
        </li>
        <li className='tab'>
          <NavLink className='link'>
            CONTACT US
          </NavLink>
        </li>
      </ul>
    </ul>
  );
}

export default Navigation;
