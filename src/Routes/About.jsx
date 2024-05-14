import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
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
    },
  };

  return (
    <div className="about page">
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.h1 className="page-header unused" variants={item}>
          About Me
        </motion.h1>
        <motion.h2 className="page-subheader" variants={item}>
          Who I am
        </motion.h2>
        <motion.p variants={item}>
          I began my journey into the world of web development about a year ago,
          when I decided to try my hand at creating a custom pricing calculator.
          I was in a tech sales role, looking+ to streamline my quote building
          process. What started as a goal to improve my sales process, had
          quickly turned into a curiosity and passion for turning ideas and
          concepts into functionality through code. Fast-forward to today, I've
          dedicated the past year to learning necessary development tools and
          skills, and buiilding profieciency through application across a
          variety of experiences.
        </motion.p>
        <br></br>
        <motion.p variants={item}>
          While my time in the coding space is relatively young, I've not only
          been able to work on my own educational/passion projects, but also had
          the priviledge of collaborating with startups and graphic designers to
          build software. My focus is on building functional, reactive, and
          user-friendly interfaces that not only look good, but are also built
          well beneath the surface.
        </motion.p>
        <br></br>
        <motion.p variants={item}>
          When I'm not at my desk, you'll usually find me going for a run, at
          the driving range trying to perfect my swing(still got a long way to
          go), or relaxing at home while youtube autoplays poker tournament in
          the background.
        </motion.p>
        <motion.h2 className="page-subheader" variants={item}>
          Experience
        </motion.h2>
      </motion.div>
      <div className="page-link-container">
        <Link
          to="/Kristie-Nguyen-Khoa-Personal-Website/projects"
          className="content-nav-link"
        >
          Check out some of my projects {"-->"}
        </Link>
      </div>
    </div>
  );
}

export default About;
