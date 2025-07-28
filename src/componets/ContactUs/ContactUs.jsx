import emailjs from "@emailjs/browser";
import React from "react";
import "./ContactUs.scss";

const SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const ConatctUs = ({ isDarkModeOn }) => {
  const formEl = React.useRef(null);

  function checkEmailAddress(email) {
    var EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return EMAIL_REGEX.test(email);
  }

  const sendEmail = () => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formEl.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log(
            "FAILED...",
            error.text
          );
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var isEmailValid = checkEmailAddress(e.target.elements.email.value);

    if (isEmailValid) {
      email.style.color = `rgb(255,255,255)`;
      sendEmail();
      e.target.elements.name.value = "";
      e.target.elements.email.value = "";
      e.target.elements.message.value = "";
    } else {
      email.style.color = `rgba(255,0,0,.5)`;
      email.focus();
    }
  };

  const RBG_BLACK_COLOR = `rgb(19,19,19)`;
  const RBG_WHITE_COLOR = `rgb(245,245,245)`;
  const RBGA_BLACK_COLOR = "rgba(19,19,19,.3)";
  const RBGA_WHITE_COLOR = "rgba(245,245,245,.3)";

  const textSelectionDisable = {
    WebkitUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none",
  };

  const contactFormCustomStyle = {
    borderRadius: "15px",
    border: `.5px solid ${isDarkModeOn ? RBGA_WHITE_COLOR : RBGA_BLACK_COLOR}`,
  };

  const constLabelCustomStyle = {
    display: "block",
    marginBottom: "0.5rem",
  };

  const inputCustomStyle = {
    color: `${isDarkModeOn ? RBG_WHITE_COLOR : RBG_BLACK_COLOR}`,
    border: `.5px solid ${isDarkModeOn ? RBGA_WHITE_COLOR : RBGA_BLACK_COLOR}`,
    borderRadius: "4px",
  };

  const submitCustomStyle = {
    backgroundColor: `${isDarkModeOn ? RBG_WHITE_COLOR : RBG_BLACK_COLOR}`,
    color: ` ${isDarkModeOn ? RBG_BLACK_COLOR : RBG_WHITE_COLOR}`,
    borderRadius: "4px",
  };

  return (
    <div className="contact-main">
      <div className="container">
        <p>Get in Touch</p>
        <h2>Contact Me</h2>

        <form
          className="contact-form"
          style={contactFormCustomStyle}
          onSubmit={handleSubmit}
          ref={formEl}
          id="form"
        >
          <label htmlFor="name">Name</label>
          <input
            style={inputCustomStyle}
            type="text"
            id="name"
            name="from_name"
            placeholder="Your Name"
          />
          <label style={constLabelCustomStyle} id="email-label" htmlFor="email">
            Email
          </label>
          <input
            style={inputCustomStyle}
            type="email"
            id="email"
            name="user_email"
            placeholder="email00@gmail.com"
          />
          <label style={constLabelCustomStyle} htmlFor="message">
            Message
          </label>
          <textarea
            style={{ ...inputCustomStyle, height: "8rem" }}
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <input style={submitCustomStyle} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ConatctUs;
