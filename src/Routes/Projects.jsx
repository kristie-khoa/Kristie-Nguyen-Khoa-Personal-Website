import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../Components/ProjectItem";
import { projects } from "../data/projectData";
import "../StyleSheets/Projects.css";

function Projects() {
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

  const projectItems = projects.map((project, index) => {
    return (
      <motion.div className="projects-proj-item" variants={item} key={index}>
        <ProjectItem project={project} />
      </motion.div>
    );
  });

  return (
    // <div >
    <motion.div
      className="projects page"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="page-header unused" variants={item}>
        Projects
      </motion.h1>
      <motion.div className="projects-container" variants={item}>
        {projectItems}
      </motion.div>
      <motion.h2 className="page-subheader" variants={item}>
        Skills
      </motion.h2>
      <motion.p variants={item}>
        I just ended an 8 year adventure as a Senior Engineer at Google. My most
        recent team was Magenta making music and art with Machine Learning; I
        built the majority of the user-and-model interactions, such as these
        ones. Here's the publications I was on during that time. In 2020 I also
        did a 6 month fellowship with the Trevor project, where I lead a team
        that worked on classifying suicidal ideation posts on a social media
        platform. Prior to 2018, I worked on Polymer, and was a big advocate for
        Web Components in both the open source and standards communities. I
        maintained and owned one of the first (and at the time, largest!) suite
        of custom elements. During this time I was also a member of the Emoji
        subcommittee, which is a career high.
      </motion.p>
      <motion.div className="page-link-container" variants={item}>
        <Link to="/Kristie-Nguyen-Khoa-Personal-Website/contact">
          Get In Touch {"-->"}
        </Link>
      </motion.div>
    </motion.div>
    // </div>
  );
}

export default Projects;
