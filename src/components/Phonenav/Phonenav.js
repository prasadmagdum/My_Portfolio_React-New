import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import "./Phonenav.scss"
import GlobalContext from '../Context/Creactecontext';

function Phonenav() {
    const {state, dispatch} = useContext(GlobalContext)
    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Experience", link: "/experience" },
        { name: "Certifications" , link:"/certifications"},
        { name: "Projects", link: "/projects" },
        { name: "Technologies", link: "/technologies" },
        { name: "Contact", link: "/contact" },
      ];
  return (
    <div id="desktop-menu" >
    <ul>
    { menuItems.map((menu,i)=>(
        <li
        
        key={i}
        onClick={()=> dispatch({type: "toggle", payload: !state.toggle})}
      >
        <NavLink to={menu.link}>
          <p>{ menu.name }</p></NavLink>
      </li>
    ))}
      
    </ul>
    <div className="resume-btn">
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Download Resume
        </a>
    </div>
  </div>
  )
}

export default Phonenav