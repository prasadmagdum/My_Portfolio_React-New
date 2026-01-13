import React from "react";
import "./Projects.scss";
import { MdWork } from "react-icons/md";
import Rentora from "../../Static/Images/Rentora.jpg";

function Projects() {
  const works = [
    {
      image: Rentora,
      title: "Rentora",
      desc: "Rentora is an online car rental platform that allows users to book cars easily.",
      link: "https://rentora-cars-jd2r.vercel.app/",
    },
  ];

  return (
    <div className="page-container">
      <div className="page-icon">
        <MdWork />
      </div>

      <div className="projects-container">
        {works.map((work, index) => (
          <div className="card" key={index}>
            <img src={work.image} alt={work.title} />

            <div className="overlay">
              <h3>{work.title}</h3>
              <p>{work.desc}</p>
              <a href={work.link} target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
