import emailjs from "@emailjs/browser";
import React from "react";
import "./ContactUs.scss";


const ConatctUs = () => {
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
    console.log("EMAIL CHECKER --> ", isEmailValid);

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
  return (
    <div className="contact-main">
      <div className="container">
        <p>Get in Touch</p>
        <h2>Contact Me</h2>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          ref={formEl}
          id="form"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Your Name"
          />
          <label id="email-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="email@gmail.com"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="message"
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default ConatctUs;
