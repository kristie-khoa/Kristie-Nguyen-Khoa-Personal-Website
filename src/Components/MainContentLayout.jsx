import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MainContentLayout({ pageTitle }) {
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
    <div className="page page-about">
      <motion.div
        className="page-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="page-header" variants={item}>
          About
        </motion.h1>
        <motion.h2 className="page-subheader" variants={item}>
          Who I am
        </motion.h2>
        <motion.p variants={item}>
          I just ended an 8 year adventure as a Senior Engineer at Google. My
          most recent team was Magenta making music and art with Machine
          Learning; I built the majority of the user-and-model interactions,
          such as these ones. Here's the publications I was on during that time.
          In 2020 I also did a 6 month fellowship with the Trevor project, where
          I lead a team that worked on classifying suicidal ideation posts on a
          social media platform. Prior to 2018, I worked on Polymer, and was a
          big advocate for Web Components in both the open source and standards
          communities. I maintained and owned one of the first (and at the time,
          largest!) suite of custom elements. During this time I was also a
          member of the Emoji subcommittee, which is a career high.
        </motion.p>
      </motion.div>
      <div className="content-nav-link-container">
        <Link to="/projects" className="content-nav-link">
          Check out some of my projects {"-->"}
        </Link>
      </div>
    </div>
  );
}

export default MainContentLayout;
