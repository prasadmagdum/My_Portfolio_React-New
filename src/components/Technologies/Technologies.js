import React, { useEffect, useState } from "react";
import "./Technologies.scss";
import { FaCode } from "react-icons/fa";

function Technologies() {
  const skills = [
    { name: "Python", value: 90},
    { name: "HTML", value:65},
    { name: "CSS", value: 70},
    { name: "JavaScript", value:75},
    { name: "React JS", value: 85 },
    { name: "Django", value: 75 },
    { name: "Java (Basic)", value: 60 },
    { name: "C & C++", value: 60 }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      <div className="page-icon">
        <FaCode />
      </div>

      <div
        className="progress-section"
        data-aos="fade-left"
        data-aos-once="true"
      >
        {skills.map((skill, index) => (
          <div className="task-progress" key={index}>
            <p>
              {skill.name}
              <span>{skill.value}%</span>
            </p>
            <div
              className={`progress-container ${isVisible ? "visible" : ""}`}
            >
              <progress
                className="progress progress1"
                max="100"
                value={isVisible ? skill.value : 0}
              ></progress>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
