
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
import NewAddressPage from '../CartComponent/NewAddressPage'
import {useNavigate} from 'react-router-dom'

function CashPayment() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
let navigate=useNavigate()
  return (
    <>

      <Button onClick={onOpen} >
        Add new product
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>

          <ModalBody>
            <Flex alignItems='center' justify="center" py="50px" bg="green" color="white">
              <Center><Heading color='white' fontWeight='bolder' fontSize="25px"> Your Order Placed Successfully...</Heading></Center>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex justify={'center'} w='100%'>
              {/* <Button colorScheme='red' mr={3} onClick={onClose}>
                cancel
              </Button> */}
              <Button colorScheme='white' bg="green" px="20px" onClick={()=>navigate('/')}>ok</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CashPayment