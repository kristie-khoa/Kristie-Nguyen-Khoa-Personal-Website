import { Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header";
import { motion } from "framer-motion";

function Root() {
  const location = useLocation().pathname;
  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    if (theme == "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("data-theme", "light");
      setTheme("light");
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      // exit={{ y: 0 }}

      className="layout"
    >
      {/* <button onClick={toggleTheme}>Toggle</button> */}
      <div className="background-gradient">
        {/* <div className="background-mask"></div> */}
      </div>
      <motion.div
        className="layout-container"
        variants={container}
        // animate="visible"
      >
        <Header />

        <motion.div
          style={{ flexDirection: "column" }} //remove if seperate pages
          className="main-content"
          key={location}
          variants={item}
        >
          {/* <h1>Hello</h1> */}
          <Outlet />
          {/* <Home />
          <About />
          <Projects />
          <Contact /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Root;
