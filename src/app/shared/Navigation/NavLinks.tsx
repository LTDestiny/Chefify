import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Modal from "@/app/shared/UIElements/Modal";
import { AuthContext } from "../context/auth-context";
import Auth from "@/app/user/pages/Auth";
import "./NavLinks.css";

export default function NavLinks() {
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} onCancel={closeModal}>
        <Auth onCancel={closeModal} />
      </Modal>

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
          <button className="login_btn" onClick={openModal}>
            Login
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
    </>
  );
}
