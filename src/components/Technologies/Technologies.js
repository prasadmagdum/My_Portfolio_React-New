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
  FaBrain,
  FaRobot,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiVisualstudiocode,
  SiPostman,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

function Technologies() {
  const skills = [
    // Frontend
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },

    // Backend
    { name: "Python", icon: <FaPython /> },
    { name: "Django REST Framework", icon: <SiDjango /> },
    { name: "Core Java", icon: <FaJava /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "REST APIs", icon: <TbApi /> },

    // Programming Concepts
    { name: "Object-Oriented Programming", icon: <FaCode /> },

    // Tools
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Thunder Client", icon: <TbApi /> },

    // AI & ML
    { name: "Artificial Intelligence", icon: <FaBrain /> },
    { name: "Machine Learning", icon: <FaBrain /> },
    { name: "Generative AI & LLMs", icon: <FaRobot /> },
    { name: "TensorFlow", icon: <SiTensorflow /> },
    { name: "Keras", icon: <SiKeras /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
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