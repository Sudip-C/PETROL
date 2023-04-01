import React from 'react'
import "../CSS/account.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
function Account() {
  const { logout,user } = useAuth0()

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
    <div className='Details'>
<div className="profile">

  {/* <img src={user?.picture} width="35%" alt={user?.name} /> */}
  <MdAccountCircle/>

<div>
  <h1>MY Profile </h1>
  <h1>Profile Information</h1>
  <h4><b>NAME:</b>  {user?.name}</h4>
  <h4><b>E-MAIL:</b>  {user?.email}</h4>
  <button>Edit my profile</button>
</div>
</div>

<div className="address">

  {/* <img src={user?.picture} width="35%" alt={user?.name} /> */}
  <MdAccountCircle/>

<div>
  <h1>My Address Book</h1>
  <h4>NAME:  {user?.name}</h4>
  <button>View Address book</button>
</div>
</div>



    </div>
    </div>
  )
}

export default Account