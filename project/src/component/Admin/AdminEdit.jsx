import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Center,
    Flex,
    Input,

  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import NewAddressPage from '../CartComponent/NewAddressPage'
import { useDispatch } from 'react-redux'
import { editData, getAllData } from '../../redux/Product/action'
import axios from 'axios'

function AdminEdit({id}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    const dispatch=useDispatch()
    // const {product}=useSelector(store=>store.productReducer)
    
    const[data,setData]=useState('')
    
    
    const handleChange=(e)=>{
      const {name,value}=e.target
      setData(prev=>{
          return{
              ...prev,[name]:value
          }
      })
      }
    
      const handleEdit =(e)=>{
        e.preventDefault()
        dispatch(editData(data,id))
        .then(()=>{dispatch(getAllData)
          alert("Data Edited")})
        }
        
    const singledata=(id)=>{
      axios.get(`https://waiting-brief-sort.glitch.me/product/${id}`)
      .then((res)=>setData(res.data))
    }
    
    useEffect(()=>{
      singledata(id)
    
    },[])



  
    return (
      <>
       
        <Button px="40px" onClick={onOpen} bg="orange.300" colorScheme='black'>
          Edit
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Center><ModalHeader w='100%'>Product</ModalHeader></Center>
            <ModalBody>
             <Flex direction={'column'} gap='8px'>
                <Flex direction={'column'}>
                    <label>title</label>
                    <Input onChange={handleChange} name="title" value={data.title} />
                </Flex>
                <Flex direction={'column'}>
                    <label>Image</label>
                    <Input onChange={handleChange} name="image" value={data.image} />
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>category</label>
                    <Input onChange={handleChange} name="category" value={data.category} />
                </Flex>
                <Flex direction={'column'}>
                    <label>color</label>
                    <Input onChange={handleChange} name="color" value={data.color} />
                </Flex>
                </Flex>
                <Flex direction={'column'}>
                    <label>description</label>
                    <Input onChange={handleChange} name="description" value={data.description} />
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>price</label>
                    <Input onChange={handleChange} name="price" value={data.price} />
                </Flex>
                <Flex direction={'column'}>
                    <label>gender</label>
                    <Input onChange={handleChange} name="gender" value={data.gender} />
                </Flex>
                </Flex>
             </Flex>
            </ModalBody>
  
            <ModalFooter>
            <Flex justify={'space-between'} w='100%'>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                cancel
              </Button>
              <Button onClick={handleEdit} colorScheme='white' bg="green">update</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AdminEdit