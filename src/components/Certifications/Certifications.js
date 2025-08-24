import React from "react";
// import { NavLink } from "react-router-dom";
import "./Certifications.scss";
import image_EC from "../../Static/Images/EC.jpg";
import image_PC from "../../Static/Images/PC.jpg";
import image_AC from "../../Static/Images/AC.jpg";
import image_RC from "../../Static/Images/RC.jpg";
import image_IC from "../../Static/Images/IC.jpg";
import image_JC from "../../Static/Images/JC.jpg";

const activityImages = [
  {
    src: image_EC,
    alt: "Extra Curricular Activity",
    caption: "Extra Curricular",
    pdf: "/certificates/EC.pdf",
  },
  {
    src: image_PC,
    alt: "Professional Certificate",
    caption: "Professional Certificate",
    pdf: "/certificates/PC.pdf",
  },
  {
    src: image_IC,
    alt: "Internship Certificate",
    caption: "Internship Certificate",
    pdf: "/certificates/IC.pdf",
  },
  {
    src: image_AC,
    alt: "Internship Certificate",
    caption: "Internship Certificate",
    pdf: "/certificates/AC.pdf",
  },
  {
    src: image_RC,
    alt: "React Certificate",
    caption: "React Certificate",
    pdf: "/certificates/RC.pdf",
  },
  {
    src: image_JC,
    alt: "Java Certificate",
    caption: "Java Certificate",
    pdf: "/certificates/JC.pdf",
  },
];

function Certifications() {
  return (
    <div className="page-container">
      <div className="projects-container">
        {activityImages.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="overlay">
              <h3>{item.caption}</h3>
              <a href={item.pdf} target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Certifications;
