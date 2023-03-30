import React from 'react'
import {Route, Routes, }from "react-router-dom"
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import HomePage from '../Pages/HomePage'

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />

        </Routes>

    </div>
  )
}

export default AllRoutes