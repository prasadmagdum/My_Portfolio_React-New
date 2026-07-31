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
        <p> Computer Science graduate specializing in AI & Machine Learning, seeking an entry-level developer role to apply hands-on 
            experience building REST APIs and full-stack web applications. Comfortable across backend, frontend, and full-stack work, 
            with strong CS fundamentals and an AI/ML foundation — eager to learn fast, ship reliable software, and grow into a 
            well-rounded engineer. </p>
        <p>
          I enjoy solving problems through code — hands-on across Python, Django, React.js, and Core Java, with a working knowledge of databases and API development, and a growing foundation in AI/ML.
        </p>
        <p>
         Outside of coding, you'll find me watching cricket, sketching, or traveling — all of which keep me creative.
        </p>
        
      </div>
    </div>
  );
}

export default Home;
