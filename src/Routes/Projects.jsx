import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "../Components/ProjectItem";
import { projects } from "../data/projectData";
import "../StyleSheets/Projects.css";
import { FaAngleRight } from "react-icons/fa";

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

  const skills = {
    languages: ["JavaScript", "TypeScript"],
    technologies: ["HTML", "CSS", "React.js", "Express.js"],
    databases: ["MongoDB"],
    other: [
      "Git",
      "Node.js",
      "EJS",
      "Bootstrap",
      "Framer Motion",
      "Material UI",
    ],
  };

  const languages = skills.languages.map((skill) => {
    return <div className="project-item-tag">{skill}</div>;
  });
  const technologies = skills.technologies.map((skill) => {
    return <div className="project-item-tag">{skill}</div>;
  });
  const databases = skills.databases.map((skill) => {
    return <div className="project-item-tag">{skill}</div>;
  });
  const other = skills.other.map((skill) => {
    return <div className="project-item-tag">{skill}</div>;
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
      <motion.p className="projects-skills" variants={item}>
        <ul>
          <li>
            <b>Languages:</b>
            <div className="project-tags">{languages}</div>
          </li>
          <li>
            <b>Web Technologies & Frameworks:</b>
            <div className="project-tags">{technologies}</div>
          </li>
          <li>
            <b>Databases:</b> <div className="project-tags">{databases}</div>
          </li>
          <li>
            <b>Other:</b> <div className="project-tags">{other}</div>
          </li>
        </ul>
      </motion.p>
      <motion.div className="page-link-container" variants={item}>
        <Link to="/Kristie-Nguyen-Khoa-Personal-Website/about">
          <span className="next-link">More about me</span>
          <span className="next-arr">
            <FaAngleRight />
          </span>
        </Link>
      </motion.div>
    </motion.div>
    // </div>
  );
}

export default Projects;
