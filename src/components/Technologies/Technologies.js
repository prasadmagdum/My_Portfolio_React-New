import React from "react";
import "./Technologies.scss";
import { FaCode } from "react-icons/fa";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava
} from "react-icons/fa";
import { SiDjango, SiCplusplus } from "react-icons/si";

function Technologies() {
  const skills = [
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Java (Basic)", icon: <FaJava /> },
    { name: "C & C++", icon: <SiCplusplus /> },
  ];

  return (
    <div className="page-container">
      <div className="page-icon">
        <FaCode />
      </div>

      <div className="tech-grid">
        {skills.map((skill, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
