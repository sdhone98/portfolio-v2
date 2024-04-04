import emailjs from "@emailjs/browser";
import React from "react";
import "./ContactUs.scss";

const ConatctUs = ({ isDarkModeOn }) => {
  const formEl = React.useRef(null);

  function checkEmailAddress(email) {
    var EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return EMAIL_REGEX.test(email);
  }

  const sendEmail = () => {
    emailjs
      .sendForm("service_rxh6xsa", "template_139ppx6", formEl.current, {
        publicKey: "9QwNboAmcPYZfe0jF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
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
    width: "100%",
    padding: "2rem",
    borderRadius: "15px",
    border: `.5px solid ${isDarkModeOn ? RBGA_WHITE_COLOR : RBGA_BLACK_COLOR}`,
    fontFamily: "Inter",
  };

  const constLabelCustomStyle = {
    display: "block",
    marginBottom: "0.5rem",
  };

  const inputCustomStyle = {
    width: "-webkit-fill-available",
    padding: "0.6rem",
    marginBottom: "1rem",
    color: `${isDarkModeOn ? RBG_WHITE_COLOR : RBG_BLACK_COLOR}`,
    fontFamily: "Inter",
    fontSize: "0.9rem",
    border: `.5px solid ${isDarkModeOn ? RBGA_WHITE_COLOR : RBGA_BLACK_COLOR}`,
    borderRadius: "4px",
    resize: "none",
    background: "transparent",
    outline: "none",
  };

  const submitCustomStyle = {
    width: "10%",
    minWidth: "4rem",
    marginTop: "1rem",
    backgroundColor: `${isDarkModeOn ? RBG_WHITE_COLOR : RBG_BLACK_COLOR}`,
    transition: "all 300ms ease",
    color: ` ${isDarkModeOn ? RBG_BLACK_COLOR : RBG_WHITE_COLOR}`,
    padding: "0.5rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Inter",
    fontWeight: "600",
  };

  return (
    <div
      className="contact-main"
      style={{
        ...textSelectionDisable,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          width: "50%",
          display: "flex",
          padding: "2rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            width: "fit-content",
            fontSize: "1rem",
            fontWeight: "300",
          }}
        >
          Get in Touch
        </p>
        <h2
          style={{
            width: "fit-content",
            fontSize: "3rem",
            marginBottom: "1rem",
            padding: "1rem 0",
          }}
        >
          Contact Me
        </h2>

        <form
          className="contact-form"
          style={contactFormCustomStyle}
          onSubmit={handleSubmit}
          ref={formEl}
          id="form"
        >
          <label style={constLabelCustomStyle} htmlFor="name">
            Name
          </label>
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
