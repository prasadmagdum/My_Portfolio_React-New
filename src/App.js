import "./App.scss";
import Header from "./components/Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
// import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Phonenav from "./components/Phonenav/Phonenav";
import { useContext } from "react";
import GlobalContext from "./components/Context/Creactecontext";
import Activity from "./components/Activity/Activity";


function App() {
  const location = useLocation();
  const {state}= useContext(GlobalContext)
  
  return (
    <div className="app-container">
      <div className="top-bg"></div>
      <div className="container">
        <Header />
        {state.toggle ? 
         <CSSTransition
         in={true}
         timeout={300} // Duration of the transition in milliseconds
         classNames="phone-navbar"
         unmountOnExit
       >
        <Phonenav />
        </CSSTransition>
        : null}
      
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            in={true}
            timeout={300}
            classNames="page"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/activity" element={<Activity />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}

export default App;
