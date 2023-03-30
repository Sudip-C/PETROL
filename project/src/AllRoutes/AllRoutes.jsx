import React from 'react'
import {Route, Routes, }from "react-router-dom"
<<<<<<< HEAD
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import HomePage from '../Pages/HomePage'

=======
// import KidPage from '../pages/KidPage'
// import HomePage from "../pages/HomePage"
>>>>>>> 24abc791be49823a2988ea5712b768f5a2696bee
function AllRoutes() {
  return (
    <div>
        <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
=======
        {/* <Route path="/" element={<HomePage/>}  ></Route> */}
>>>>>>> 24abc791be49823a2988ea5712b768f5a2696bee

        </Routes>

    </div>
  )
}

export default AllRoutes