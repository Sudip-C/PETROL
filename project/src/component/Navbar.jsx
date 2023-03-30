import React from 'react'
import "../CSS/Navbar.css"
import logo from "../photos/logo.png"
import { BsSearch,BsHandbag,BsQuestionCircle,BsHeart } from "react-icons/bs";
import {VscAccount} from "react-icons/vsc"
import { IconContext } from "react-icons";
import { Link as NavLink } from 'react-router-dom';



function Navbar() {
  return (
<>
    <div className='top-nav'>
        ADDITIONAL 10% OFFER
    </div>
    <div className='bottom-nav'>
        <div className='catagory'>
        <NavLink to="/mensection">  <h4>MAN</h4></NavLink> 
        <NavLink to="/womensection"> <h4>WOMAN</h4></NavLink> 
        <NavLink to="/kidsection">  <h4>KID</h4></NavLink> 
        <h4>SS'23</h4>
        <h4>LAST CHANCE</h4>
        </div>
       <NavLink to="/"><img  src={logo} alt="logo"/></NavLink>
        <div className='icons'>
            <IconContext.Provider value={{ size:"2em"}}>
          <div>  <BsSearch /></div>
          <div> <VscAccount/></div> 
          <div> <BsQuestionCircle/></div> 
          <NavLink to="/wishlist"> <div> <BsHeart/></div> </NavLink> 
          <NavLink to="/cart"> <div> <BsHandbag/></div></NavLink> 
          </IconContext.Provider>
        </div>

    </div>
    </>
  )
}

export default Navbar