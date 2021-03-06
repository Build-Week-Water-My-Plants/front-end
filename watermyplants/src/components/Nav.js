import React from "react";
import { NavLink } from "react-router-dom";
import "../sass/nav.scss";

function Nav(props) {
  return (
    <nav>
      <NavLink to="/" activeClassName="activeNavButton" className="logoName">
        <img src="images/spa-solid.svg" alt="A lotus flower logo" />
        <h2>Water My Plants</h2>
      </NavLink>
      <ul className="nav-links" id="nav-links">
        <li>
          <NavLink to="/plantList" activeClassName="activeNavButton">
            Plants
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="activeNavButton">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink  to="/login" activeClassName="activeNavButton">
            Sign Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
