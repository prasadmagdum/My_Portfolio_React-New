import React from "react";
import "./Technologies.scss";
import { FaCode } from "react-icons/fa";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaBrain
} from "react-icons/fa";

import {
  SiDjango,
  SiCplusplus,
  SiPostgresql,
  SiExpress,
  SiVisualstudiocode,
  SiPostman,
  SiTensorflow,
  SiKeras,
  SiScikitlearn
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Technologies() {
  const skills = [
    // Frontend & Backend
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Java (Basic)", icon: <FaJava /> },
    { name: "C & C++", icon: <SiCplusplus /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },

    // Tools
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Thunder Client", icon: <TbApi /> },

    // AI & ML
    { name: "Artificial Intelligence & Machine Learning", icon: <FaBrain /> },
    { name: "Generative AI & LLMs", icon: <FaBrain /> },


    // AI Frameworks
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Keras", icon: <SiKeras /> },
   
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