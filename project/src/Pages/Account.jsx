import React from 'react'
import "../CSS/account.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
function Account() {
  const { logout,user } = useAuth0()

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
<div className="profile">
<div>
  <img src={user?.picture} width="35%" alt={user?.name} />
</div>
<div>
  <h1>MY Profile Information</h1>
  <h4>NAME:{user?.name}</h4>
  <h4>E-MAIL:{user?.email}</h4>
  
</div>
</div>

<div className="address">
<div>
  <img src={user?.picture} width="35%" alt={user?.name} />
</div>
<div>
  <h1>My Address Book</h1>
  <h4>NAME:{user?.name}</h4>
</div>
</div>



    </div>
    </div>
  )
}

export default Account