import { Box, Grid, Image, Text ,Stack, Flex,  } from '@chakra-ui/react'
import axios from 'axios'
import React, {useState, useEffect } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const KidData = () => {
const [isLoading,setisLoading]=useState(false)
const[Kidproduct,setKidProduct]=useState([])
  const [searchParams]=useSearchParams()
  const location=useLocation()
  let obj={
    params:{
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
    }
 }
const getKidData=()=>{
    setisLoading(true)
axios.get(`https://waiting-brief-sort.glitch.me/product/?gender=kids`,obj)
.then((res)=>setKidProduct(res.data))
setisLoading(false)
}

  useEffect(()=>{
    getKidData()
  },[location.search])

  if(isLoading)return <h1 style={{textAlign:"center", fontSize:"50px" ,marginTop:"100px",marginBottom:"100px"}} >Loading...</h1>

return (
   
    <Grid templateColumns={'repeat(4,1fr)'} minH={'600px'} gap="20px">
          {Kidproduct.length>0&&Kidproduct.map(el=>(
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

export default KidData