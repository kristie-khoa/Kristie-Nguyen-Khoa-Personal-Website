import React, { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../../StyleSheets/NavBar.css";

export function NavListItem({
  location,
  navItem,
  navItemPath,
  animationVar,
  onClick,
}) {
  return (
    <motion.li className="nav-item" variants={animationVar}>
      <Link
        to={navItemPath}
        onClick={onClick}
        preventScrollReset={true}
        className={`nav-link ${location === navItemPath ? "active" : ""}`}
      >
        {navItem.toUpperCase()}
      </Link>
    </motion.li>
  );
}

export function NavBarHeader() {
  const location = useLocation().pathname;
  return (
    <nav className="nav-content">
      <ul className="nav-items">
        <NavListItem
          location={location}
          navItem={"home"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/"}
        />
        <NavListItem
          location={location}
          navItem={"projects"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/projects"}
        />
        <NavListItem
          location={location}
          navItem={"about"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/about"}
        />

        <NavListItem
          location={location}
          navItem={"contact"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/contact"}
        />
      </ul>
    </nav>
  );
}

export function NavBarDropDown({
  setIsDropDownOpen,
  isDropDownOpen,
  animationVarContainer,
  animationVarChild,
}) {
  const location = useLocation().pathname;

  return (
    <motion.div
      className="pop-up-overlay drop-down-menu-container blur-background"
      key={`${isDropDownOpen}`}
      variants={animationVarContainer}
    >
      <ul className="drop-down-nav-items">
        <NavListItem
          location={location}
          navItem={"home"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/"}
          animationVar={animationVarChild}
          onClick={() => setIsDropDownOpen(false)}
        />
        <NavListItem
          location={location}
          navItem={"projects"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/projects"}
          animationVar={animationVarChild}
          onClick={() => setIsDropDownOpen(false)}
        />
        <NavListItem
          location={location}
          navItem={"about"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/about"}
          animationVar={animationVarChild}
          onClick={() => setIsDropDownOpen(false)}
        />

        <NavListItem
          location={location}
          navItem={"contact"}
          navItemPath={"/Kristie-Nguyen-Khoa-Personal-Website/contact"}
          animationVar={animationVarChild}
          onClick={() => setIsDropDownOpen(false)}
        />
      </ul>
    </motion.div>
  );
}
