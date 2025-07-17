import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import "./Phonenav.scss"
import GlobalContext from '../Context/Creactecontext';

function Phonenav() {
    const {state, dispatch} = useContext(GlobalContext)
    const menuItems = [
        { name: "Home", link: "/" },
        { name: "Experience", link: "/experience" },
        { name: "Activity" , link:"/activity"},
        // { name: "Projects", link: "/projects" },
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
          <NavLink to="https://drive.google.com/file/d/1_8bITUostQUEbOql53soq8_kT4MD0oon/view?usp=drive_link" target="_blank">
            Download Resume
          </NavLink>
        </div>
  </div>
  )
}

export default Phonenav