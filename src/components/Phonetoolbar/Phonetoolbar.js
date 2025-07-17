import React,{useContext} from 'react'
import "./Phonetoolbar.scss"
import GlobalContext from '../Context/Creactecontext';

function Phonetoolbar() {
    const {state, dispatch} = useContext(GlobalContext);
    const menuState = state.toggle;
    const toggleMenu = ()=>{
        dispatch({type: "toggle", payload: !menuState})
    }
  return (
    <div id="menu-btn" onClick={toggleMenu} >
    <span className={"bar1"+ (menuState ? " animate" : "")} ></span>
    <span className={"bar2"+ (menuState ? " animate" : "")}></span>
  </div>
  )
}

export default Phonetoolbar