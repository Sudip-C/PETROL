import React from 'react'
import "../CSS/singleProd.css"
import Carousals from '../component/carousal'
import { TfiHeart} from "react-icons/tfi";
function SingleProductPage() {


  

let data=
  {
    
    "title": "1956-SP STRAIGHT FIT WOMAN BLUE MEDIUM WASHED JEANS",
    "image": ["https://diesel.gumlet.io/product/410291797001/665/410291797005_1.jpg?compress=true&q=70",
    "https://diesel.gumlet.io/product/410291797001/665/410291797005_2.jpg?compress=true&q=70",
  "https://diesel.gumlet.io/product/410291797001/665/410291797005_4.jpg?compress=true&q=70"],
    "description": "Regular style with a high waist and straight leg. Channeling a rock-n-roll vibe, its authentic influences include a straight-cut leg and button fly. It's crafted from inside-out fabric and features side bands along the length of the leg.",
    "color": "blue",
    "price": 22399,
    "category": "jeans",
    "gender":"woman",
    "id": "1"
   
   }

  //  const handleAddToCart=()=>{
  //   arr.push(data)
  //   localStorage.setItem("'addToCart",JSON.stringify(data))
  // }

  return (
    <div className='main'>
    <div className='picture'>
<Carousals pictures={data.image} height={"700px"}/>
    </div>
<div className='details'>
<h1>{data.title}</h1>
<h2>MRP ₹{data.price}</h2>
<p>Price inclusive of all taxes</p>
<h3>COLOR: {data.color.toUpperCase()}</h3>
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
  <button>ADD TO CART</button>
<TfiHeart />
</div>
<h3>DESCRIPTION</h3>
<p>{data.description}</p>
</div>
    </div>
  )
}

export default SingleProductPage