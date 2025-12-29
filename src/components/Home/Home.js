import React from "react";
import "./Home.scss";
import profile from "../../Static/Images/profile_prasad.jpg"; 

function Home() {
  return (
    <div className="page-container">
      <div className="profile-img">
        <img src={profile} alt="profile" />
      </div>
      <div className="profile-info">
        <h3> Hi, I’m Prasad Magdum </h3>
        <p>a fresher Web developer with 6+ months of internship experience, where I worked on diverse projects including LMS, Donation Connect Platform, chat applications and E-Commerce Website </p>
        <p>
          I enjoy solving problems through code and have hands-on skills in React, Django, Python, and  Basic Java, along with experience in databases and API development.
        </p>
        <p>Currently, I’m focused on expanding my knowledge in development and exploring advanced technologies, Upskilling in Data Analysis , AIML</p>
        <p>
          I’m seeking opportunities to contribute to meaningful projects while continuously learning and growing as a developer
        </p>
        <p>
         Outside of coding, you can often find me watching cricket matches, drawing, sketching, or traveling — activities that keep me inspired and creative.
         </p>
        
      </div>
    </div>
  );
}

export default Home;
