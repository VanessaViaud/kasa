import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/App.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <ul className="header__navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "navbar-active" : null)}
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => (isActive ? "navbar-active" : null)}
        >
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;
