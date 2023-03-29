import React from 'react'
import {Route, Routes, }from "react-router-dom"
// import KidPage from '../pages/KidPage'
import HomePage from "../Pages/HomePage"
import WomenPage from "../Pages/WomenPage"
function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage/>}  ></Route>
        <Route path='/women' element={<WomenPage/>}/>
        </Routes>

    </div>
  )
}

export default AllRoutes