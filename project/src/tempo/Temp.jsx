import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Temp = () => {
    let [data,setData]=useState([])
   let arr=JSON.parse(localStorage.getItem('addToCart'))||[]
    let getData=()=>{
        fetch('https://waiting-brief-sort.glitch.me/woman')
        .then(res=>res.json()).then(res=>setData(res))
    }

    useEffect(()=>{
        getData()
    },[])
    // console.log(data)
    let add=(id)=>{
        fetch(`https://waiting-brief-sort.glitch.me/woman/${id}`)
        .then(res=>res.json()).then(res=>{
            arr.push(res)
            localStorage.setItem('addToCart',JSON.stringify(arr))})
    }
  return (
     <Box>
        <Box display={'grid'} gridTemplateColumns={'repeat(6,1fr)'}>
           {
            data.map(el=>(
                <Box key={el.id}>
                    <Image src={el.image[0]} w={'100%'} />
                    <Button onClick={()=>add(el.id)}>add to cart</Button>
                </Box>
            ))
           }
        </Box>
     </Box>
  )
}

export default Temp