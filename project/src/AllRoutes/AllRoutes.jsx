import React from 'react'
import {Route,Routes, useSearchParams} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import KidPage from '../Pages/KidPage'
import AdminPage from '../Pages/AdminPage'
import MenPage from '../Pages/MenPage'
import WomenPage from '../Pages/WomenPage'
import ProductPage from '../Pages/ProductPage'
import WishlistPage from '../Pages/WishlistPage'
import SingleProductPage from '../Pages/SingleProductPage'
import AddProductPage from '../Pages/AddProductPage'
import EditProductPage from '../Pages/EditProductPage'
import AdminLogin from '../Pages/AdminLogin'
import Login from "../Pages/Login"
import PrivateRoute from '../AllRoutes/PrivateRoute';
import Account from '../Pages/Account'
import AddressBook from '../Pages/AddressBook'
import MyOrders from '../Pages/Myorders'
import CartPage from "../Pages/CartPage"
import CheckoutPage from '../Pages/CheckoutPage'
import SignUp from '../Pages/SignUp'




function AllRoutes() {


  return (
    <div>
        <Routes>

        <Route path="/account" element={<PrivateRoute><Account/></PrivateRoute>} />
        <Route path='/addressbook' element={<AddressBook/>}/>
        <Route path="myorders" element={<MyOrders/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/cart' element={<CartPage/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<HomePage/>} / >
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/kidsection' element={<KidPage/>}/>
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/mensection' element={<MenPage/>}/>
        <Route path='/womensection' element={<WomenPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/addProduct" element={<AddProductPage/>}/>
        <Route path='/product/:id/edit' element={<EditProductPage/>}/>
        <Route path='/product' element={<ProductPage />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
