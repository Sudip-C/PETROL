import React from 'react'
import {Route, Routes, }from "react-router-dom"




import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import HomePage from '../pages/HomePage'
import Temp from '../tempo/Temp'
import KidPage from '../pages/KidPage'
import AdminPage from '../pages/AdminPage'
import MenPage from '../pages/MenPage'
import WomenPage from '../pages/WomenPage'
import WishlistPage from '../pages/WishlistPage'
import SingleProductPage from '../pages/SingleProductPage'
import AddProductPage from '../pages/AddProductPage'
import EditProductPage from '../pages/EditProductPage'
import AdminLogin from '../pages/AdminLogin'
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