import { Box, Grid, Image, Text ,Stack, Flex,  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ProductData = () => {
   
    let [data,setData]=useState([])
    let getData=()=>{
        fetch('https://waiting-brief-sort.glitch.me/woman')
        .then(res=>res.json()).then(res=>setData(res))
    }

    useEffect(()=>{
        getData()
    },[])
console.log(data)
  return (
    <Grid templateColumns={'repeat(4,1fr)'} minH={'600px'} gap="20px">
          {data.length>0&&data.map(el=>(
            <Stack direction="column" spacing="0px">
                <Image src={el.image} w='100%' h="400px"  bg="#F9F2F6"  />
                <Flex gap='5px' pl="10px">
                <Text fontWeight='bold'>₹{el.price}</Text>
                <Text textDecoration="line-through">₹{el.price}</Text>
                <Text color="gray">(40% off)</Text>
                </Flex>
                <Text pl='10px' fontSize="13px">{el.title.slice(0,40)}...</Text>
                <Text pl='10px'>{el.category}</Text>
            </Stack>
          ))}
    </Grid>
  )
}

export default ProductData