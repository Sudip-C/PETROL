import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";

 function PrivateRoute({children}){

    const [isAuthenticated,setisAunthenticated]=useState(null)

    const location=useLocation()
    useEffect(()=>{
  const listen=onAuthStateChanged(auth,(user)=>{
    if(user){
        setisAunthenticated(user)
    }else{
        setisAunthenticated(null)
    }
  });

  
    },[])
return(
    isAuthenticated?children:<Navigate to="/login" state={location.pathname} replace/>
)
}
export default PrivateRoute