import React from "react";
import Logo from "../assets/Cyclone.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" width={36} />
          <h2><NavLink to="/">Strom Insight</NavLink></h2>
        </div>
        <ul className="nav-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/history">Record</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
