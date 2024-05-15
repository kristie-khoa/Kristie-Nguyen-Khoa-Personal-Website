import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaRegWindowClose } from "react-icons/fa";

const ContactForm = () => {
  const dropDownContainer = {
    visible: {
      y: 0,
      opacity: 1,
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

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // setStateMessage("Thanks for reaching out!");
    setIsSubmitting(false);
    setIsPopUpOpen(true);

    // emailjs
    //   .sendForm("service_cv49wlm", "template_a56ubkh", form.current, {
    //     publicKey: "J8CYx211q5BHDlKbB",
    //   })
    //   .then(
    //     () => {
    //       setStateMessage("Message sent!");
    //       setIsSubmitting(false);
    //       setIsPopUpOpen(true);
    //       clearForm();
    //     },
    //     (error) => {
    //       setStateMessage("Something went wrong, please try again later");
    //       setIsSubmitting(false);
    //     }
    //   );
    const clearForm = () => e.target.reset();
    clearForm();
  };

  const successPopUp = (
    <div className="pop-up-overlay-container">
      <motion.div
        className="pop-up-overlay success-pop-up"
        variants={dropDownContainer}
      >
        <button className="exit-button" onClick={() => setIsPopUpOpen(false)}>
          <FaRegWindowClose size={20} />
        </button>
        <div className="success-pop-up-container">
          <motion.div animate={{ scale: 2 }}>
            <FaRegCheckCircle className="checkmark-icon" size={35} />
          </motion.div>

          <h3>Message Sent!</h3>
          <p>Thanks for reaching out!</p>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div
      className={`contact-form ${
        isPopUpOpen ? "pop-up-open blur-background" : ""
      }`}
    >
      {isPopUpOpen && successPopUp}
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-form-inputs">
          <div className="left">
            <p>Name:</p>
            <input type="text" name="user_name" placeholder="Name" />
            <p>Email:</p>
            <input type="email" name="user_email" placeholder="email" />
          </div>
          <div className="right">
            <p>Message:</p>
            <textarea name="message" placeholder="Message" />
          </div>
        </div>
        <div className="submit-container">
          <button
            className="submit-form-btn"
            type="submit"
            disabled={isSubmitting}
            // onClick={() => {
            //   setIsPopUpOpen(true);
            // }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
