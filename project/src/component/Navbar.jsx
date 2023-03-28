import React from 'react'
import "../CSS/Navbar.css"
import logo from "../photos/logo.png"
import { BsSearch,BsHandbag,BsQuestionCircle,BsHeart } from "react-icons/bs";
import {VscAccount} from "react-icons/vsc"
import { IconContext } from "react-icons";
function Navbar() {
  return (
<>
    <div className='top-nav'>
        ADDITIONAL 10% OFFER
    </div>
    <div className='bottom-nav'>
        <div className='catagory'>
        <h4>MAN</h4>
        <h4>WOMAN</h4>
        <h4>KID</h4>
        <h4>SS'23</h4>
        <h4>LAST CHANCE</h4>
        </div>
        <img width="18%" src={logo} alt="logo"/>
        <div className='icons'>
            <IconContext.Provider value={{ size:"2em"}}>
          <div>  <BsSearch /></div>
          <div> <VscAccount/></div> 
          <div> <BsQuestionCircle/></div> 
          <div> <BsHeart/></div> 
          <div> <BsHandbag/></div> 
          </IconContext.Provider>
        </div>

    </div>
    </>
  )
}

export default Navbar