import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavBarDropDown, NavBarHeader } from "./NavBar";
import { HiBars3 } from "react-icons/hi2";
import Logo from "./Logo";
import "../../StyleSheets/Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dropDownContainer = {
    visible: {
      y: 0,
      opacity: 0.8,
      scale: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },

    hidden: {
      y: -20,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsHeaderSticky(window.scrollY > 70)
      );
    }
    return () => {
      window.removeEventListener("scroll", () =>
        setIsHeaderSticky(window.scrollY > 70)
      );
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setIsDropDownOpen(false);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isDropDownOpen ? "drop-down" : ""}`}>
      <AnimatePresence mode="wait">
        {isHeaderSticky ? (
          <motion.div
            className="stickyHeader"
            variants={container}
            key={`${isHeaderSticky}`}
            exit={{ opacity: 0 }}
          >
            <NavBarHeader />
          </motion.div>
        ) : (
          <motion.div
            className={`header-inner-container `}
            variants={container}
            key={`${isHeaderSticky}`}
            exit={{ opacity: 0 }}
          >
            <Logo blur={isDropDownOpen} />
            <NavBarHeader />
            <div className={`toggle-menu-btn ${isDropDownOpen ? "open" : ""}`}>
              <HiBars3
                className="toggle-menu-inner-container"
                onClick={() => {
                  setIsDropDownOpen(!isDropDownOpen);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isDropDownOpen && (
        <NavBarDropDown
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
          animationVarContainer={dropDownContainer}
          animationVarChild={item}
        />
      )}
    </header>
  );
}

export default Header;
