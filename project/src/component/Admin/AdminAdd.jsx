
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
import React, { useState } from 'react'
import NewAddressPage from '../CartComponent/NewAddressPage'
import {  getAllData, postData } from '../../redux/Product/action'
import { useDispatch } from 'react-redux'

function AdminAdd() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
    const init={
      title: "",
        image: "",
        description: "",
        color: "",
        price: 0,
        category: "",
        gender: ""
    }
    const dispatch=useDispatch()
    const [form,setForm]=useState(init)
    
    const handleChange=(e)=>{
      const {name,value}=e.target
      setForm(prev=>{
          return {
              ...prev,[name]:value
          }
      })
  }
    
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(postData(form)).then(()=>dispatch(getAllData))
    setForm(init)
    }

    const {title,category,image,price,gender,color,description}=form
    return (
      <>
       
        <Button  onClick={onOpen} >
          Add new product
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Center><ModalHeader w='100%'>Product</ModalHeader></Center>
            <ModalBody>
             <Flex direction={'column'} gap='8px'>
                <Flex direction={'column'}>
                    <label>title</label>
                    <Input onChange={handleChange} value={title} name="title"/>
                </Flex>
                <Flex direction={'column'}>
                    <label>Image</label>
                    <Input onChange={handleChange} value={image} name="image"/>
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>price</label>
                    <Input onChange={handleChange} value={price} name="price"/>
                </Flex>
                <Flex direction={'column'}>
                    <label>color</label>
                    <Input onChange={handleChange} value={color} name="color"/>
                </Flex>
                </Flex>
                <Flex direction={'column'}>
                    <label>description</label>
                    <Input onChange={handleChange} value={description} name="description"/>
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>category</label>
                    <Input onChange={handleChange} value={category} name="category"/>
                </Flex>
                <Flex direction={'column'}>
                    <label>gender</label>
                    <Input onChange={handleChange} value={gender} name="gender" />
                </Flex>
                </Flex>
             </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Flex justify={'space-between'} w='100%'>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                cancel
              </Button>
              <Button onClick={handleSubmit} colorScheme='white' bg="green">Add Product</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default AdminAdd