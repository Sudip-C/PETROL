import React from 'react'
import styled from 'styled-components'
import { Select ,Button} from '@chakra-ui/react'

export default function WomenProductCard({image, title, price, category}) {

   
 
   
  return (
    <DIV>
        <img src={image[0]} alt={title} />
        <p className='price'>₹ {price} </p>
        <h3>{title.slice(0,23)}...</h3>
        <p>{category}</p>
        <Select  placeholder='SELECT COLOR' w="100%" _focus={{outline:'none',border:'none'}} border={'none'} ouline='none'>
                <option  value='desc'>Price High To Low</option>
                <option   value='asc'>Price Low To High</option>
                <option value='option3'>Discount Low To High</option>
                <option value='alphaone'>New Arrival</option>
                <option value='alphaone'>Most Popular</option>
            </Select>
            <Select  placeholder='SELECT SIZE' w="100%" _focus={{outline:'none',border:'none'}} border={'none'} ouline='none'>
                <option  value='desc'>Price High To Low</option>
                <option   value='asc'>Price Low To High</option>
                <option value='option3'>Discount Low To High</option>
                <option value='alphaone'>New Arrival</option>
                <option value='alphaone'>Most Popular</option>
            </Select>
            <br/>
            <Button borderRadius="none" bg="white" border=".5px solid black"  _hover={{ bg: 'black' ,color:"white"}} w="100%">ADD TO BAG</Button>
            <Button bg="white" _hover={{ bg: 'white'}} marginTop={2} marginLeft="72%">X Remove</Button>

    </DIV>
    
  )
}


const DIV=styled.div`
    // box-shadow: rgba(188, 186, 186, 0.24) 0px 3px 8px;
    padding: 20px;
    
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