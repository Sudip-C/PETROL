import React from 'react'
import styled from 'styled-components'

export default function WomenProductCard({image, title, price, category}) {
    console.log(image)
  return (
    <DIV>
        <img src={image[0]} alt={title} />
        <h3>{title}</h3>
        <p>Price:- {price}</p>
        <p>Category:- {category}</p>
        <button>Add to Cart</button>
    </DIV>
  )
}


const DIV=styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    button{
        background-color: aqua;
        padding: 5px 10px;
        margin-top: 5px;
    }

    img{
        width: 100%;
        height: 400px;
    }
`