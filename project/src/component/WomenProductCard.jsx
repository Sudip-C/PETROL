import { Button } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'

export default function WomenProductCard({item, index, handleSlice}) {



    let arr=JSON.parse(localStorage.getItem('addToCart'))||[]
    let wishlist=JSON.parse(localStorage.getItem("addToWishlist"))||[]
    console.log(item)

    const handleAddToCart=()=>{
        arr.push(item)
        localStorage.setItem("addToCart",JSON.stringify(arr))
        alert("Product added to cart")
    }
    
   
 
   
  return (
    <DIV>
        <img src={item.image} alt={item.title} />
        <p className='price'>₹ {item.price} <span>₹ {item.price+1000}</span></p>
        <h3>{item.title.slice(1,23)}...</h3>
        <p>{item.category}</p>
        <div>
            <Button onClick={handleAddToCart}>Add to cart</Button>
            <Button onClick={()=>handleSlice(index)}>X Remove</Button>
        </div>
    </DIV>
  )
}


const DIV=styled.div`
    box-shadow: rgba(188, 186, 186, 0.24) 0px 3px 8px;
    padding: 20px;
    button{
        /* padding: 5px 10px; */
        margin-top: 5px;
    }
    .price{
        font-weight:bold;
    }
    span{
        color:grey;
        text-decoration:line-through;
    }

    img{
        width: 100%;
        height: 400px;
    }

    /* h3{ 
        width:70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    } */
`