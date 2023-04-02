import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getAllData} from '../redux/Product/action'
import {Link} from "react-router-dom"
import { Button, Box, HStack, Flex } from '@chakra-ui/react'
import axios from 'axios'
import AdminSidebar from '../component/Admin/AdminSidebar'
import AdminNav from '../component/Admin/AdminNav'
import AdminBody from '../component/Admin/AdminBody'


function AdminPage() {


  return (
    <Box  h="100vh" zIndex={'1000'} bgColor={'white'} position={'relative'}>
      <HStack w="100%"  spacing="0px" h="100vh" >
        <Box w="30%" >
          <AdminSidebar />
        </Box>
        <Flex direction='column' overflow={'scroll'} w="100%" h="100%" gap="50px" boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
          <AdminNav />
          <AdminBody />
        </Flex>
      </HStack>

    </Box>
  )

}

export default AdminPage



