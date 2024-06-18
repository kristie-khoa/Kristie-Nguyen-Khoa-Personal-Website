import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../StyleSheets/About.css";
import { FaAngleRight } from "react-icons/fa";

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
          when I decided to try my hand at building a custom pricing calculator.
          I was previously in a tech sales role, looking to streamline my sales
          process, but more importantly, looking for an outlet for my curiosity
          to learn something new. This simple goal had quickly turned into a
          greater interst for turning ideas into functionality through code.
          Fast-forward to today, I've dedicated the past year to learning the
          lastest development tools, and building proficiancy through practice
          across a variety of diverse projects.
        </motion.p>
        <br></br>
        <motion.p variants={item}>
          While my time in the coding space is relatively young, I've not only
          been able to work on my own educational projects, but also had the
          priviledge of collaborating with experienced web developers to build
          software. My focus is on building functional, responsive, and
          user-friendly interfaces that not only look good, but are also built
          well beneath the surface.
        </motion.p>
        <br></br>
        <motion.p variants={item}>
          When I'm not at my desk, you'll usually find me outside on a run,
          playing pickleball with friends, or at the driving range trying to
          perfect my swing(still have a long way to go). Otherwise, I'm probably
          recharging at home, watching the latest netflix series, or reading a
          good book.
        </motion.p>
        {/* <motion.h2 className="page-subheader" variants={item}>

        </motion.h2> */}
      </motion.div>
      <div className="page-link-container">
        <Link
          to="/Kristie-Nguyen-Khoa-Personal-Website/contact"
          className="content-nav-link"
        >
          <span className="next-link">Get in touch</span>
          <span className="next-arr">
            <FaAngleRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default About;
