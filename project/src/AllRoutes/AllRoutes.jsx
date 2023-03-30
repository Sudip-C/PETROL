import React from 'react'
import {Route, Routes, }from "react-router-dom"
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import HomePage from '../Pages/HomePage'
import Temp from '../tempo/Temp'


function AllRoutes() {
  return (
    <div>
        <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/temp' element={<Temp />} />
        </Routes>

    </div>
  )
}

export default AllRoutes