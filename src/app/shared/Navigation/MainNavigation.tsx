import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./MainNavigation.css";
import Input from "@/app/shared/FormElements/Input";
import Backdrop from "@/app/shared/UIElements/Backdrop";
import SideDrawer from "@/app/shared/Navigation/SideDrawer";
import NavLinks from "@/app/shared/Navigation/NavLinks";
import MainHeader from "@/app/shared/Navigation/MainHeader";
import Logo from "../../../../public/Logo.png";
export default function MainNavigation() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const inputHandler = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <img className="main-navigation__image" src={Logo.src} alt="logo" />
        <h1 className="main-navigation__title">
          <Link to="/">Chefify</Link>
        </h1>
        <div className="main-navigation__search">
          <input
            type="text"
            placeholder="What would you like to cook?"
            onChange={(event) => inputHandler(event.target.value)}
          />
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
