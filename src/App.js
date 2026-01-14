import React, { useRef, useContext } from "react";
import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import Certifications from "./components/Certifications/Certifications";
import Phonenav from "./components/Phonenav/Phonenav";

import GlobalContext from "./components/Context/Creactecontext";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);
  const { state } = useContext(GlobalContext);

  return (
    <div className="app-container">
      <div className="top-bg"></div>

      <div className="container">
        <Header />

        {/* Phone Navigation */}
        {state.toggle && (
          <CSSTransition
            in={true}
            timeout={300}
            classNames="phone-navbar"
            unmountOnExit
          >
            <Phonenav />
          </CSSTransition>
        )}

        {/* Page Transitions */}
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="page"
            nodeRef={nodeRef}   // ✅ FIX
            unmountOnExit
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/technologies" element={<Technologies />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      <Footer />
    </div>
  );
}

export default App;
