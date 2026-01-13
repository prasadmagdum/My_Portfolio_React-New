import React from "react";
import "./Projects.scss";
import { MdWork } from "react-icons/md";
import Rentora from "../../Static/Images/Rentora.jpg";
import chatapp from "../../Static/Images/chatapp.jpg";
import milk from "../../Static/Images/milk.jpg";

function Projects() {
  const works = [
    {
      title: "Rentora",
      image: Rentora,
      desc: "Rentora is an online car rental platform that allows users to book cars easily.",
      live: "https://rentora-cars-jd2r.vercel.app/",
      github: "https://github.com/prasadmagdum/rentora",
    },
    {
      title: "Chat App using Socket Programming (Python)",
       image:chatapp,
      desc: "A real-time chat application built using Python socket programming for client-server communication.",
      github:
        "https://github.com/prasadmagdum/-Chat_app_using_socket_programming_in_Python.git",
    },
    {
      title: "Milk Products Website",
       image:milk,
      desc: "A static website for showcasing milk and dairy products with a clean UI.",
      github:
        "https://github.com/prasadmagdum/Milk-Products-site.git",
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
            {work.image && <img src={work.image} alt={work.title} />}

            <div className="overlay">
              <h3>{work.title}</h3>
              <p>{work.desc}</p>

              <div className="project-links">
                {work.live && (
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Live Demo
                  </a>
                )}

                <a
                  href={work.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
