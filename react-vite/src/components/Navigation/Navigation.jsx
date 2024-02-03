import React from 'react';
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
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

      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;
