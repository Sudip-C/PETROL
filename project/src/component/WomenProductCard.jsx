import React from 'react'
import styled from 'styled-components'

export default function WomenProductCard({image, title, price, category}) {

   
 
   
  return (
    <DIV>
        <img src={image[0]} alt={title} />
        <p className='price'>₹ {price} <span>₹ {price+1000}</span></p>
        <h3>{title.slice(1,23)}...</h3>

        <p>{category}</p>
    </DIV>
  )
}


const DIV=styled.div`
    box-shadow: rgba(188, 186, 186, 0.24) 0px 3px 8px;
    padding: 20px;
    button{
        background-color: aqua;
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