import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    {name:"Activity", link: "/activity" },
    // { name: "Projects", link: "/projects" },
    { name: "Technologies", link: "/technologies" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="footer-container">
      <div className="menu">
        {menuItems.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="social-icons">
        <Link
          to={"https://www.linkedin.com/in/pmagdum"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link to={"https://github.com/prasadmagdum"} target="_blank">
          <AiFillGithub />
        </Link>
      </div>
      <div className="footer-text">
        <p>© {new Date().getFullYear()} Prasad Magdum. All rights reserved.</p>
        <p>
          This portfolio was made with <span style={{ color: "red" }}>❤️</span>{" "}
          using React JS.
        </p>
      </div>
    </div>
  );
}

export default Footer;
