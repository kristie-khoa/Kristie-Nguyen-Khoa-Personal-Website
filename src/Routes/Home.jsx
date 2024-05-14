import React, { useState, useEffect } from "react";
import headshot from "/assets/headshot.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../StyleSheets/Home.css";

function Home() {
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
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="home page">
      <motion.div
        className="home-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.img className="home-headshot" variants={item} src={headshot} />

        <motion.div className="home-right" variants={item}>
          <motion.h2 className="home-pre-header" variants={item}>
            HEY THERE, I'M KRISTIE
          </motion.h2>
          <motion.h1 className="home-header" variants={item}>
            I make websites.
          </motion.h1>
          <motion.div className="home-content" variants={item}>
            <p>
              I like turning ideas into engaging, responsive, and user-intuitive
              digital experiences.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="page-link-container" variants={item}>
        <Link to="/Kristie-Nguyen-Khoa-Personal-Website/about">
          more about me {"-->"}
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
