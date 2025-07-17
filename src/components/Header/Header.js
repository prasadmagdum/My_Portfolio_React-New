import React from "react";
import "./Header.scss";
import profile from "../../Static/Images/profile_prasad.jpg"; // Make sure your image path is correct
import { NavLink, useLocation } from "react-router-dom";
import Phonetoolbar from "../Phonetoolbar/Phonetoolbar";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Activity", link: "/activity" },
    // { name: "Projects", link: "/projects" },
    { name: "Technologies", link: "/technologies" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="header-container">
      <div className="upper-container">
        <div className="image">
          <NavLink to={'/'}>
          <img src={profile} alt="Prasad Magdum Profile" />
          </NavLink>
        </div>
        <div className="menu">
          {menuItems.map((item, index) => (
            <NavLink
              className={path === item.link.toLowerCase() ? "active" : ""}
              to={item.link}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="resume-btn">
          <NavLink
            to="https://drive.google.com/file/d/1wjBl1H-vYFyYGmCbQua6zGbzLHGDjkkj/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </NavLink>
        </div>
      </div>
      <Phonetoolbar />
      <div className="title-text">
        <h1>
          Prasad Magdum |{" "}
          {path === "/"
            ? "Fresher | Open to Opportunities "
            : path.split("/")[1].charAt(0).toUpperCase() +
              path.split("/")[1].slice(1)}
        </h1>
      </div>
    </div>
  );
}

export default Header;
