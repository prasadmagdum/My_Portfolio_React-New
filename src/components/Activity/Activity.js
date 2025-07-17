import React from "react";
import { NavLink } from "react-router-dom";
import "./Activity.scss";
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
    pdf: "https://drive.google.com/file/d/1Ao9E7_BOplYd0RL9HLHoPygsX2ovYnxJ/view?usp=sharing",
  },
  {
    src: image_PC,
    alt: "Professional Certificate",
    caption: "Professional Certificate",
    pdf: "https://drive.google.com/file/d/12B_nRe14rDI7nnur-nZaiueMDGEJ-8Na/view?usp=sharing",
  },
  {
    src: image_IC,
    alt: "Internship Certificate",
    caption: "Internship Certificate",
    pdf: "https://drive.google.com/file/d/1n0BgwzWSdxQ0umcaKiwrSAxgRIfa4Rau/view?usp=sharing",
  },
  {
    src: image_AC,
    alt: "Internship Certificate",
    caption: "Internship Certificate",
    pdf: "https://drive.google.com/file/d/1fAZ4ILCQmDT3og-QF_ZTl2r6qoBan1GH/view?usp=sharing",
  },
  {
    src: image_RC,
    alt: "React Certificate",
    caption: "React Certificate",
    pdf: "https://drive.google.com/file/d/1PDMdRrLdT79OP6RtlcNr0wygU_y7U6s6/view?usp=sharing",
  },
  {
    src: image_JC,
    alt: "Java Certificate",
    caption: "Java Certificate",
    pdf: "https://drive.google.com/file/d/1fAZ4ILCQmDT3og-QF_ZTl2r6qoBan1GH/view?usp=sharing",
  },
];

function Activity() {
  return (
    <div className="page-container">
      <div className="projects-container">
        {activityImages.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt={item.alt} />
            <div className="overlay">
              <h3>{item.caption}</h3>
              <NavLink to={item.pdf} target="_blank" rel="noreferrer">
                View Certificate
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
