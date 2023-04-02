import React from 'react'
import "../CSS/account.css"
import { Link, useNavigate } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
function Account() {
  const navigate=useNavigate()
const userSignOut=()=>{
  signOut(auth)
  .then(()=>navigate("/"))
  .catch((err)=>alert(err))
}

  return (
    <div className='Container' >
    <div className="mainbody">
      <h1>My Account</h1>
      <div className='Account-box'>
     <Link to="/account"><div > Account Dashboard</div></Link> 
     <Link to="/addressbook"> <div  >My Address Book</div></Link>
     <Link to="/myorders"><div >My Orders</div></Link>
      <div onClick={userSignOut} >Logout</div>
      <Link to="/admin"><div>Admin</div></Link>
      </div>
    </div>
    <div className='Details'>
<div className="profile">

  {/* <img src={user?.picture} width="35%" alt={user?.name} /> */}
  <MdAccountCircle/>

<div>
  <h1>MY Profile </h1>
  <h1>Profile Information</h1>
  <h4><b>NAME:</b>  </h4>
  <h4><b>E-MAIL:</b>  </h4>
  <button>Edit my profile</button>
</div>
</div>

<div className="address">

  {/* <img src={user?.picture} width="35%" alt={user?.name} /> */}
  <MdAccountCircle/>

<div>
  <h1>My Address Book</h1>
  <h4>NAME:  </h4>
  <button>View Address book</button>
</div>
</div>



    </div>
    </div>
  )
}

export default Account