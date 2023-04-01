import { Box, Grid, Image, Text ,Stack, Flex,  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { getProduct } from '../../redux/WomenProduct/action'

const ProductData = () => {
  const dispatch=useDispatch()
  const {women}=useSelector((store)=>store.womenReducer)
  const [searchParams]=useSearchParams()
  const location=useLocation()
  let obj={
    params:{
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
    }
 }

  useEffect(()=>{
      dispatch(getProduct(obj))
  },[location.search])
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