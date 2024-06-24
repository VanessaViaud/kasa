import React from "react";
import logo from "../assets/LOGO.png";
import "../components/Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <ul className="header__navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__navbar-active" : "header__navbar-inactive"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header__navbar-active" : "header__navbar-inactive"
            }
          >
            A propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
