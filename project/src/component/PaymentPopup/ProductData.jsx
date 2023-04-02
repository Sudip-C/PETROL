import {  Grid, Image, Text ,Stack, Flex,  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from 'axios'


const ProductData = () => {

  // const dispatch=useDispatch()
  // const {product}=useSelector((store)=>store.productReducer)

const [isLoading,setIsLoading]=useState(false)
  const [women,setwomen]=useState([])
  const [searchParams]=useSearchParams()
  const location=useLocation()

const Gender=searchParams.get("gender")

  let obj={
    params:{
      
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order"),
        // gender:searchParams.get("gender")
    }
 }

const prodData=()=>{
  setIsLoading(true)
  axios.get(`https://waiting-brief-sort.glitch.me/product/?gender=${Gender}`,obj)
.then((res)=>setwomen(res.data))
setIsLoading(false)
}

useEffect(()=>{
  prodData()
},[location.search])

//  useEffect(()=>{
//       dispatch(getMenData(obj))
//   },[location.search])

if(isLoading){
  return <h1>...LOADING</h1>
}else
  return (
 
 
    <Grid templateColumns={'repeat(4,1fr)'} minH={'600px'} gap="20px">
          {women.length>0&&women.map(el=>(
            <Link to={`/product/${el.id}`} key={el.id} > 
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
            </Link>
          ))}
    </Grid>
   
  )
}

export default ProductData