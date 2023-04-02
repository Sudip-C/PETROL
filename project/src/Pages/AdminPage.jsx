import React, { useEffect, useState } from 'react'
import "../CSS/Admin.css"
import { useDispatch, useSelector } from 'react-redux'
import { getMenData, getWomenData } from '../redux/Product/action'
import { Button, Box, HStack, Flex } from '@chakra-ui/react'
import axios from 'axios'
import AdminSidebar from '../component/Admin/AdminSidebar'
import AdminNav from '../component/Admin/AdminNav'
import AdminBody from '../component/Admin/AdminBody'

function AdminPage() {
  // const handleDelete=(id)=>{
  //   axios.delete(`https://waiting-brief-sort.glitch.me/woman/${id}`)
  //   .then(()=>dispatch(getMenData))
  // }
  // useEffect(()=>{
  //   dispatch(getMenData)
  //   // dispatch(getWomenData)
  // },[page])

  return (
    <Box h='100vh' >
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

export default AdminPage




{/* <div className="prod-list">
{Menproduct?.map((el)=>{
  return <div key={el.id} className="prod-card" >
      <img src={el.image[0]} width="80%" alt={el.category}/>
        <div className='all'>
      <div className='Proddetails'>
      <h3>{el.title.slice(2,35)}</h3>
      <p>MRP :₹{el.price}</p>
      </div>
      <div className='buttons'>
      <Button colorScheme='green'size='sm'>Edit</Button>
      <Button colorScheme='red'size='sm' onClick={()=>handleDelete(el.id)} >Delete</Button>
      </div>
</div>
  </div>
})}

</div>
<div className='pagination'>
      <Button m={4} size='sm'isDisabled={page<=1} onClick={()=>setPage(page-1)} >PREV</Button>
      <Button m={4} isDisabled={true} size='sm'>{page}</Button>
      <Button m={4} size='sm' onClick={()=>setPage(page+1)}>NEXT</Button>
</div> */}