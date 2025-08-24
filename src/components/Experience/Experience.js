import React from "react";
import "./Experience.scss";
import { MdWorkHistory } from "react-icons/md";

function Experience() {
  const experience = [
    {
      company: "Clever-Ground Technologies Pvt. Ltd.",
      title: "Backend Developer Intern",
      experience: { start: "Aug 2024", end: "Feb 2025" },
      location: "Pune, Maharashtra, India · Remote",
      description: [
        "Contributed to a Learning Management System (LMS) product by developing the Institute Space & Album Management module.",
        "Designed and implemented REST APIs using Django REST Framework with filtering, search, and pagination.",
        "Enabled role-based booking permissions and enhanced admin control through Django Admin Panel.",
        "Tested and validated APIs using Postman and Thunder Client for seamless integration.",
      ],
      skills: [
        "Django REST Framework",
        "Python",
        "MySQL",
        "Django Admin",
        "Postman",
        "Thunder Client",
      ],
    },
    {
      company: "Adhyayan Education Services Pvt. Ltd.",
      title: "Software Developer Intern",
      experience: { start: "May 2024", end: "May 2024" },
      location: "Pune, Maharashtra, India · Remote",
      description: [
        "Developed a mini user registration module with basic authentication and vault access.",
        "Implemented core backend logic using Java for handling user data securely.",
      ],
      skills: ["Java"],
    },
  ];

  return (
    <div className="page-container">
      <div className="page-icon">
        <MdWorkHistory />
      </div>
      <div className="experience-container">
        {experience.map((item, index) => (
          <div key={index} className="experience">
            <div className="wrapper">
              <div className="title">
                <h3>{item.company}</h3>
                <h4>{item.title}</h4>
              </div>
              <div className="duration">
                <span>
                  {item.experience.start} - {item.experience.end}
                </span>
              </div>
              <div className="location">
                <span>{item.location}</span>
              </div>
              <div className="description">
                <ul>
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="skills">
                <h4>Tech Stack:</h4>
                {item.skills.map((skill, i) => (
                  <span className="skill" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
