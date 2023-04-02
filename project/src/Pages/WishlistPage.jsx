import React from 'react'
import { Button } from '@chakra-ui/react'
import WomenProductCard from "../component/WomenProductCard"
import styled from 'styled-components'
const wishList=[
  {
    "id": 61,
    "image": [
      "https://diesel.gumlet.io/product/410345358005/665/410345358005_1_3427.webp?compress=true&q=70",
      "https://diesel.gumlet.io/product/410345358005/665/410345358005_2_9479.webp?compress=true&q=70",
      "https://diesel.gumlet.io/product/410345358005/665/410345358005_3_3999.webp?compress=true&q=70"
    ],
    "price": "6,999.00",
    "line_throu": "9,999.00",
    "discount": "(30% Off)",
    "title": "1979 SLEENKER-J Skinny Kid Black jeans",
    "description": "Skinny style with a low waist and narrow leg from thigh to ankle, featuring a versatile design with a punk attitude.",
    "category": "jeans",
    "gender": "kids"
  },
  {
    "id": 62,
    "image": [
      "https://diesel.gumlet.io/product/410271531010/665/410271531010_1.jpg?compress=true&q=70",
      "https://diesel.gumlet.io/product/410271531010/665/410271531010_2.jpg?compress=true&q=70",
      "https://diesel.gumlet.io/product/410271531010/665/410271531010_3.jpg?compress=true&q=70"
    ],
    "price": "2,399.00",
    "line_throu": "3,339.00",
    "discount": "(40% Off)",
    "title": "T-Diego Regular Fit Boy White t-shirt",
    "description": "This t-shirt is crafted from cotton. It features a glossy PVC barbed wire graphic printed over the Diesel Denim Division logo.",
    "category": "t-shirt",
    "gender": "kids"
  },
  {
    "id": 63,
    "image": [
      "https://diesel.gumlet.io/product/410315475004/665/410315475004_1_8568.webp?compress=true&q=70",
      "https://diesel.gumlet.io/product/410315475004/665/410315475004_2_2840.webp?compress=true&q=70",
      "https://diesel.gumlet.io/product/410315475004/665/410315475004_1_8568.webp?compress=true&q=70"
    ],
    "price": "8,399.00",
    "line_throu": "11,999.00",
    "discount": "(30% Off)",
    "title": "Krooley Tapered Fit Boys Blue jeans",
    "description": "Tapered style with a drawstring waist and a roomy leg that narrows towards the ankle. The soft denim showcases a clean wash with a contemporary vibe.",
    "category": "jeans",
    "gender": "kids"
  }
]



function WishlistPage() {
  

  const handleSlice=(index)=>{
    wishList.splice(index, 1)
    console.log("done", index)
  }


  return (
    <div>
      <h1 style={{textAlign:"center"}}>Wishlist</h1>

    <DIV>
      {wishList.length>0 && wishList.map((item, index)=>{
        return (
          <WomenProductCard key={item.id} item={item} index={index} handleSlice={handleSlice}/>
        )
      })}
    </DIV>
    </div>
  )
}

export default WishlistPage

const DIV=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* gap: 10px; */
`
