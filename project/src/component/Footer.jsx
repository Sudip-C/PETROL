import React from 'react'
import "../CSS/Footer.css"
import {BsInstagram,BsYoutube,BsFacebook} from "react-icons/bs";

function Footer() {
  return (
    <>
    <div className='home-bottom'>
<div className='black'>
  <h3>Sign up to never miss an update.</h3>
  <input className='input' placeholder='Enter your email address' type="email"/>
<div>
  <input type="radio" name="check"></input>
  <label>Men</label>
  <input type="radio" name="check"></input>
  <label>Women</label>
  </div>
  <p>By clicking Sign up you have read and agreed to our privacy policy</p>
  <button>Sign Up</button>
</div>
<div className='white'>
<h2>Connect with us on social media</h2>
<div className='socialMedia'>

<BsInstagram/><BsFacebook/><BsYoutube/>

</div>
</div>
</div>
    <div className='Footer'>
    <div className='footer'>

       
<select>
<option>HELP</option>
    <option>Order status</option>
    <option>Delivery</option>
    <option>Returns</option>
    <option>Contact us</option>
</select>
<select>
<option>COOKIE POLICY & TERMS</option>
    <option>Order status</option>
    <option>Delivery</option>
    <option>Returns</option>
    <option>Contact us</option>
</select>
<select>
<option>WORLD OF PETROL</option>
    <option>Order status</option>
    <option>Delivery</option>
    <option>Returns</option>
    <option>Contact us</option>
</select>

<select>
<option>STORE LOCATOR</option>
    
</select>
    


    </div>
    <p>Copyright ©️2021 Petrol Fashion India Reliance Pvt.Ltd</p>
    </div>
    </>
  )
}

export default Footer