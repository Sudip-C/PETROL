
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
import React from 'react'

function CashOrderPlaced() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
  
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
                    <Input />
                </Flex>
                <Flex direction={'column'}>
                    <label>Image</label>
                    <Input />
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>price</label>
                    <Input />
                </Flex>
                <Flex direction={'column'}>
                    <label>color</label>
                    <Input />
                </Flex>
                </Flex>
                <Flex direction={'column'}>
                    <label>discription</label>
                    <Input />
                </Flex>
                <Flex gap='15px'>
                <Flex direction={'column'}>
                    <label>price</label>
                    <Input />
                </Flex>
                <Flex direction={'column'}>
                    <label>color</label>
                    <Input />
                </Flex>
                </Flex>
             </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Flex justify={'space-between'} w='100%'>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                cancel
              </Button>
              <Button colorScheme='white' bg="green">Add Product</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CashOrderPlaced