import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaRegWindowClose } from "react-icons/fa";

const serviceKey = import.meta.env.VITE_API_EMAIL_SERVICE_KEY;
const templateKey = import.meta.env.VITE_API_EMAIL_TEMPLATE_KEY;
const emailKey = import.meta.env.VITE_API_EMAIL_KEY;

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
  const [formValueName, setFormValueName] = useState("");
  const [formValueEmail, setFormValueEmail] = useState("");
  const [formValueMessage, setFormValueMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(serviceKey, templateKey, form.current, {
        publicKey: emailKey,
      })
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setIsPopUpOpen(true);
          clearForm();
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
        }
      );
    const clearForm = () => {
      setFormValueName("");
      setFormValueEmail("");
      setFormValueMessage("");
      e.target.reset();
    };
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

          <h3>{stateMessage}</h3>
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
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              onChange={(e) => setFormValueName(e.target.value)}
              value={formValueName}
              required
            />
            <p>Email:</p>
            <input
              type="email"
              name="user_email"
              onChange={(e) => setFormValueEmail(e.target.value)}
              value={formValueEmail}
              placeholder="email"
              required
            />
          </div>
          <div className="right">
            <p>Message:</p>
            <textarea
              name="message"
              placeholder="Message"
              onChange={(e) => setFormValueMessage(e.target.value)}
              value={formValueMessage}
              required
            />
          </div>
        </div>
        <div className="submit-container">
          <button
            className="submit-form-btn"
            type="submit"
            disabled={
              (!formValueEmail && !formValueName && !formValueMessage) ||
              isSubmitting
            }
            onClick={() => {
              if (
                (!formValueEmail && !formValueName && !formValueMessage) ||
                isSubmitting
              ) {
                setIsPopUpOpen(true);
              }
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
