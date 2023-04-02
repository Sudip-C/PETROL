import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllData} from '../redux/Product/action'
import {Link} from "react-router-dom"
import { Button, Box, HStack, Flex } from '@chakra-ui/react'
import axios from 'axios'
import AdminSidebar from '../component/Admin/AdminSidebar'
import AdminNav from '../component/Admin/AdminNav'
import AdminBody from '../component/Admin/AdminBody'


 export default function AdminPage() {
const [page,setPage]=useState(1)

const dispatch=useDispatch()
const{product}=useSelector(store=>store.productReducer)

// const navigate=useNavigate()

const handleDelete=(id)=>{
  axios.delete(`https://waiting-brief-sort.glitch.me/product/${id}`)
  .then(()=>dispatch(getAllData))
}

useEffect(()=>{
  dispatch(getAllData)
 
},[page])
  
 

  return (
    <Box h='100vh' pos="relative" zIndex="1000" bg="white">
      <HStack w="100%" spacing="0px" h="100vh" >
        <Box w="30%" >
          <AdminSidebar />
        </Box>
        <Flex direction='column' w="100%" h="100vh" gap="50px" boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
          <AdminNav />
          <AdminBody />
        </Flex>
      </HStack>

    </Box>
  )
 }
