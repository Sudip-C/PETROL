import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

 function PrivateRoute({children}){

  const {isAuth}=useSelector(store=>store.authReducer)
const location=useLocation()
return(
    isAuth?children:<Navigate to="/login" state={location.pathname} replace/>
)
}
export default PrivateRoute