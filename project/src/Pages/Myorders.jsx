import React from 'react'
import "../CSS/account.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

function MyOrders() {
  const { logout } = useAuth0()
  return (
    <div className='container'>
    <div className="main">
      <h1>My Account</h1>
      <div className='box'>
     <Link to="/account"><div > Account Dashboard</div></Link> 
     <Link to="/addressbook"> <div  >My Address Book</div></Link>
     <Link to="/myorders"><div >My Orders</div></Link>
      <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</div>

      </div>
    </div>
    <div className='details'>
my name is sudip
    </div>
    </div>
  )
}

export default MyOrders