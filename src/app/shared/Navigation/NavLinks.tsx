import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../context/auth-context";
import "./NavLinks.css";

export default function NavLinks() {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/search">What to cook</NavLink>
      </li>
      <li>
        <NavLink to="/recipes">Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/ingredients">Ingredients</NavLink>
      </li>
      <li>
        <NavLink to="/occasions">Occasions</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      {!auth.isLoggedIn && (
        <button className="login_btn">
          <NavLink to="/auth">Login</NavLink>
        </button>
      )}
      {auth.isLoggedIn && (
        <button className="login_btn">
          <button onClick={auth.logout}>LOGOUT</button>
        </button>
      )}
      <button className="subscribe_btn">
        <NavLink to="/subscribe">Subscribe</NavLink>
      </button>
    </ul>
  );
}
