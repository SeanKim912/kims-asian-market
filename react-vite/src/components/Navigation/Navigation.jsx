import React from 'react';
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <ul className="nav-container">
      <li className="logo-container">
        <NavLink to="/">
          <img src={require("./Kim's_logo.png")} />
        </NavLink>
      </li>

      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;
