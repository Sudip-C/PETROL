import React from 'react'
import {Route, Routes, }from "react-router-dom"
import AddProductPage from '../Pages/AddProductPage'
import AdminLogin from '../Pages/AdminLogin'
import AdminPage from '../Pages/AdminPage'
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import EditProductPage from '../Pages/EditProductPage'
import HomePage from '../Pages/HomePage'
import KidPage from '../Pages/KidPage'
import MenPage from '../Pages/MenPage'
import SingleProductPage from '../Pages/SingleProductPage'
import WishlistPage from '../Pages/WishlistPage'
import WomenPage from '../Pages/WomenPage'
import Temp from '../tempo/Temp'

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage/>}  ></Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/temp' element={<Temp />} />
        <Route path='/kidsection' element={<KidPage/>}/>
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/mensection' element={<MenPage/>}/>
        <Route path='/womensection' element={<WomenPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/addProduct/" element={<AddProductPage/>}/>
        <Route path='/product/:id/edit' element={<EditProductPage/>}/>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes