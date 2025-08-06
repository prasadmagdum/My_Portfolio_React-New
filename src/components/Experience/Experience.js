import React from "react";
import "./Experience.scss";
import { MdWorkHistory } from "react-icons/md";

function Experience() {
  const experience = [
    {
      title: "Back End Developer",
      description:
        "At CleverGround, I worked remotely as a Backend Developer intern. My focus was on modeling institute spaces and media albums for a space management system. I contributed by developing APIs using Django REST Framework and Django, ensuring robust and efficient backend services.",
      company: "CleverGround · Internship",
      skills: ["Django REST Framework", "Django" ,"React.js" ,"Python" ],
      experience: { start: "Aug 2024", end: "Feb 2025" },
      location: "Pune, Maharashtra, India · Remote",
    },
    {
      title: "Software Developer Intern",
      description:
        "At Adhyayan IT Training & Placement Institute, Pune, I worked remotely on the VaultAccess Manager Project and the Auto Registry Solution Project using Core Java. These projects focused on developing solutions for vehicle registration systems, enhancing my backend development skills in Java.",
      company: "Adhyayan IT Training & Placement Institute, Pune · Internship",
      skills: ["Core Java"],
      experience: { start: "May 2024", end: "May 2024" },
      location: "Remote",
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
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
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
                <p>{item.description}</p>
              </div>
              <div className="skills">
                <h4>Technologies Used :</h4>
                {item.skills.map((skill, index) => (
                  <span className="skill" key={index}>
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
