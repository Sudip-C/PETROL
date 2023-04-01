import React from 'react'
import "../CSS/account.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
function AddressBook() {
  const { logout } = useAuth0()

  return (
    <div className='container'>
    <div className="mainbody">
      <h1>My Account</h1>
      <div className='Account-box'>
     <Link to="/account"><div > Account Dashboard</div></Link> 
     <Link to="/addressbook"> <div  >My Address Book</div></Link>
     <Link to="/myorders"><div >My Orders</div></Link>
      <div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >Logout</div>

      </div>
    </div>
    <div className='UserAddress'>
<div >
  <h2>Shipping Address</h2>
</div>
<div >
 <h3><b>Name:</b>Sudip Chowdhury</h3>
 <h3><b>Mobile:</b>6291847283</h3>
 <h3><b>Address:</b>Kolkata,West Bengal</h3>
 <h3><b>Address type:</b>Home</h3>
</div>
<button >+ Add new address</button>

    </div>
    </div>
  )
}

export default AddressBook