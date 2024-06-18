import ContactForm from "../Components/ContactForm";
import { motion } from "framer-motion";
import "../StyleSheets/Contact.css";

function Contact() {
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
    // <div className="contact page">
    <motion.div
      className="contact page"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="page-header unused" variants={item}>
        Contact
      </motion.h1>

      <motion.p variants={item}>
        Get in touch or shoot me an email directly at
        <a href="mailto:kristie.khoa@gmail.com">
          <b>kristie.khoa@gmail.com</b>
        </a>
      </motion.p>
      <motion.div variants={item} className="contact-form">
        <ContactForm />
      </motion.div>
    </motion.div>
    // </div>
  );
}

export default Contact;
