import React from "react";
import "./Contact.scss";
import { IoMdContact } from "react-icons/io";
import { BsFillPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-icon">
        <IoMdContact />
      </div>
      <div className="contact-info">
        <h3>Get in touch</h3>
        <div className="item">
          <GrMail />
          <a href="mailto:prasadmagdum307@gmail.com">
            <span>prasadmagdum307@gmail.com</span>
          </a>
        </div>
        <div className="item">
          <BsFillPhoneFill />
          <a href="tel:8767963581">
            <span>+91 8767963581</span>
          </a>
        </div>
        <div className="item">
          <FaLocationArrow />
          <span>Radhanagari, District Kolhapur</span>
        </div>
        <div className="item">
          <span>Birthday: September 15</span>
        </div>
      </div>
      <div className="social-icons">
        <Link
          className="icon"
          to={"https://www.linkedin.com/in/pmagdum"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link
          className="icon"
          to={"https://github.com/prasadmagdum"}
          target="_blank"
        >
          <AiFillGithub />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
