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
        <h3>Prasad Magdum</h3>
        <p>Code. Create. Contribute.</p>
        <p>
          | React JS • Django • Python • Basic Java • Basic HTML & CSS • C & C++ |
        </p>
        <p>Final Year CSE (AIML) Student | Open to Opportunities</p>
        <p>
          I’m a final-year Computer Engineering student who loves building
          practical tech solutions.
        </p>
        <p>
          I enjoy working with React JS, Django, Python, and Java to create
          useful web applications.
        </p>
        <p>
          During my internship, I gained hands-on experience with dashboards,
          APIs, and analytics tools.
        </p>
        <p>
          I’m always curious to learn and try out new technologies.
        </p>
      </div>
    </div>
  );
}

export default Home;
