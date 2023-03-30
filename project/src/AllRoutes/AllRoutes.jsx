import React from 'react'
import {Route, Routes, }from "react-router-dom"
<<<<<<< HEAD
import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'
import HomePage from '../Pages/HomePage'
import Temp from '../tempo/Temp'


=======
import KidPage from '../pages/KidPage'
import HomePage from "../pages/HomePage"
import AdminPage from '../pages/AdminPage'
import MenPage from '../pages/MenPage'
import WomenPage from '../pages/WomenPage'
import CartPage from '../pages/CartPage'
import WishlistPage from '../pages/WishlistPage'
import SingleProductPage from '../pages/SingleProductPage'
import AddProductPage from '../pages/AddProductPage'
import EditProductPage from '../pages/EditProductPage'
import AdminLogin from '../pages/AdminLogin'
>>>>>>> fc44c24e573b99ba1b25602bd7b6709fd1d9c32e
function AllRoutes() {
  return (
    <div>
        <Routes>
<<<<<<< HEAD

        <Route path="/" element={<HomePage/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/temp' element={<Temp />} />
=======
        <Route path="/" element={<HomePage/>}  ></Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/kidsection' element={<KidPage/>}/>
        <Route path='/mensection' element={<MenPage/>}/>
        <Route path='/womensection' element={<WomenPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/addProduct/:id" element={<AddProductPage/>}/>
        <Route path='/product/:id/edit' element={<EditProductPage/>}/>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
>>>>>>> fc44c24e573b99ba1b25602bd7b6709fd1d9c32e
        </Routes>
    </div>
  )
}

export default AllRoutes