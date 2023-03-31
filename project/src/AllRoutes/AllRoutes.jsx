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
import Login from "../pages/Login"
import PrivateRoute from './PrivateRoute';
import Account from '../pages/Account'
import AddressBook from '../pages/AddressBook'
import MyOrders from '../pages/Myorders'

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/account" element={<Account/>} />
        <Route path='/addressbook' element={<AddressBook/>}/>
        <Route path="myorders" element={<MyOrders/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/cart' element={<PrivateRoute><CartPage/></PrivateRoute>} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/temp' element={<Temp />} />
        <Route path="/" element={<HomePage/>}  ></Route>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/kidsection' element={<KidPage/>}/>
        <Route path='/mensection' element={<MenPage/>}/>
        <Route path='/womensection' element={<WomenPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/addProduct" element={<AddProductPage/>}/>
        <Route path='/product/:id/edit' element={<EditProductPage/>}/>
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes