import React, { useEffect, useState } from 'react'
import "../CSS/singleProd.css"
import Carousals from '../component/carousal'
import { TfiHeart} from "react-icons/tfi";
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function SingleProductPage() {
  const[Singledata,setSingleData]=useState('')
  const {id}=useParams()
  let arr=JSON.parse(localStorage.getItem('addToCart'))||[]
  let wishlist=JSON.parse(localStorage.getItem("addToWishlist"))||[]

  

let getData=()=>{
  axios.get(`https://waiting-brief-sort.glitch.me/product/${id}`)
  .then(res=>setSingleData(res.data))
}

  useEffect(()=>{
     getData()
  },[])

   const handleAddToCart=()=>{
    arr.push(Singledata)
    localStorage.setItem("addToCart",JSON.stringify(arr))
    alert("Product added to cart")
   }
 
   const addToWishlist=()=>{
    wishlist.push(Singledata)
    localStorage.setItem("addToWishlist",JSON.stringify(wishlist))
    alert("Product added to wishlist")
   }

  return (
    <div className='main' style={{paddingTop:'70px',minHeight:'900px'}}>
    <div className='picture'>
<Carousals pictures={Singledata?.image} height={"700px"}/>
    </div>
<div className='details'>
<h1>{Singledata.title}</h1>
<h2>MRP ₹{Singledata?.price}</h2>
<p>Price inclusive of all taxes</p>
<h3>COLOR: {Singledata?.color}</h3>
<div style={{borderRadius:"50%",backgroundColor:Singledata?.color,height:"30px",width:"30px"}}></div>
<h3>CHOOSE SIZE</h3>
<div className='button-group'>
  <button>28</button>
  <button>29</button>
  <button>30</button>
  <button>31</button>
  <button>32</button>
  <button>34</button>
  <button>36</button>
  <button>38</button>
  <button>39</button>
  <button>40</button>
</div>
<div className='check'>
  <div>checkout</div>
  <div>Check delivery</div>
</div>
<div className='addtocart'>
  <button onClick={handleAddToCart} >ADD TO CART</button>
<TfiHeart onClick={addToWishlist}/>
</div>
<h3>DESCRIPTION</h3>
<p>{Singledata?.description}</p>
</div>
    </div>
  )
}

export default SingleProductPage