import React from 'react'
import styled from 'styled-components'

export default function WomenProductCard({image, title, price, category}) {
   
  return (
    <DIV>
        <img src={image[0]} alt={title} />
        <h3>{title.slice(1,25)}...</h3>
        <p><b>{price}</b></p>
        <p>{category}</p>
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