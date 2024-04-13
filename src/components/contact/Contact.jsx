import React, { useRef } from "react";
import "./contact.css";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n8nlsck",
        "template_wfoe4cp",
        form.current,
        "v3iDp-EhrOOfUgh4u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="contact">
        <div className="container">
          <div className="row">
            {/* contant-left */}
            <div className="contact-left">
              <h1 className="sub-title">
                Contact<span>Me</span>
              </h1>
              <p>
                <EmailIcon />
                <span> panneerjiiva77@gmail.com</span>
              </p>
              <p>
                <LocalPhoneIcon />
                <span>8680905425</span>
              </p>
              <div className="social-icons">
                <a href="a">
                  <TwitterIcon
                    style={{
                      color: "white",
                      height: "2rem",
                      width: "2rem",
                    }}
                  />
                </a>
                <a href="a">
                  <LinkedInIcon
                    className="linkedIn"
                    style={{
                      color: "white",
                      height: "2rem",
                      width: "2rem",
                    }}
                  />
                </a>
              </div>
              <Button style={{ marginTop: "1rem" }} variant="contained">
                <a
                  style={{ color: "white" }}
                  href={require("../../assets/docs/Panneer_Resume.pdf")}
                  download={"Panneer_Resume.pdf"}
                >
                  Download Cv
                </a>
              </Button>
            </div>
            {/* contant-right */}
            <div className="contact-right">
              <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="your_name"
                  className="name"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  name="your_email"
                  className="email"
                  placeholder="Your Email"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  className="msg"
                ></textarea>
                <Button
                  variant="contained"
                  style={{ margin: "1rem" }}
                  type="submit"
                  value="Send"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
