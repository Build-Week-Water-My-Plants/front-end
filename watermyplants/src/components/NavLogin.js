import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/nav.scss";

function NavLogin(props) {
  return (
    <nav>
      <NavLink to="/" activeClassName="activeNavButton" className="logoName">
        <img src="images/spa-solid.svg" alt="A lotus flower logo" />
        <h2>Water My Plants</h2>
      </NavLink>
      <ul className="nav-links" id="nav-links">
        <li>
          <NavLink to="/login" activeClassName="activeNavButton">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="activeNavButton">
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLogin;
