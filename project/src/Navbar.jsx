import React from 'react'
import "./Navbar.css"
import { BsSearch } from "react-icons/bs";
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
        <img width="18%" src="https://dibackend.hostx1.de/logo-diesel.svg" alt="logo"/>
        <div className='icons'>
            <IconContext>
          <div>  <BsSearch /></div>
          <div> <VscAccount/></div> 
          <div> <VscAccount/></div> 
          <div> <VscAccount/></div> 
          <div> <VscAccount/></div> 
          </IconContext>
        </div>

    </div>
    </>
  )
}

export default Navbar