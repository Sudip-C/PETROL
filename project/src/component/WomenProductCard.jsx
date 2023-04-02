import { Button } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Select } from '@chakra-ui/react'

export default function WomenProductCard({item, index, handleSlice}) {



    let arr=JSON.parse(localStorage.getItem('addToCart'))||[]

    const handleAddToCart=()=>{
        arr.push(item)
        localStorage.setItem("addToCart",JSON.stringify(arr))
        alert("Product added to cart")
    }
    
   
 
   
  return (
    <DIV>

    <img src={item.image[0]} alt={item.title} />
    <p className='price'>₹ {item.price} </p>
    <h3>{item.title.slice(0,23)}...</h3>
    <p>{item.category}</p>
    <Select  placeholder='SELECT COLOR' w="100%" _focus={{outline:'none',border:'none'}} border={'none'} ouline='none'>
            <option  value='desc'>Price High To Low</option>
            <option   value='asc'>Price Low To High</option>
            
        </Select>
        <Select  placeholder='SELECT SIZE' w="100%" _focus={{outline:'none',border:'none'}} border={'none'} ouline='none'>
            <option  value='desc'>Price High To Low</option>
            <option   value='asc'>Price Low To High</option>
           
        </Select>
        <br/>
        <Button  onClick={handleAddToCart} borderRadius="none" bg="white" border=".5px solid black"  _hover={{ bg: 'black' ,color:"white"}} w="100%">ADD TO BAG</Button>
        <Button bg="white" onClick={()=>handleSlice(index)} _hover={{ bg: 'white'}} marginTop={2} marginLeft="72%">X Remove</Button>



</DIV>
    
  )
}


const DIV=styled.div`
 
    padding: 20px;

    

    button{
       
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

   
`