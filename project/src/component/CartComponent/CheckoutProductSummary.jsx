import React from 'react'
import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, Heading, HStack, Image, Input, Link, Stack, Text, useColorModeValue as mode, VStack,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import photo1 from '../../photos/photo4.jpg'

const CheckoutProductSummary = () => {
  let checkoutData=useSelector(store=>store.cartReducer.cartData)
  let totalPrice=0
  checkoutData.forEach(el=>{
    totalPrice+=el.price
  })
  return (
    <Box>
      <Stack h={{base:'auto',md:'auto',lg:'55vh'}} pt={'70px'} overflow={'hidden'}>
        {

          checkoutData.map(el => (
            <Flex direction="row" gap="2" width={{ base: '100%', md: '100%' }} alignItems={'center'}>
              <Image rounded="lg" w="70px" h={'80px'} src={photo1} alt={el.title} draggable="false" loading="lazy"
                bg={'gray.500'}  />
              <Box pt="4">
                <Stack spacing="0.5">
                  <Text fontWeight="bolder" textAlign={'left'} color={'gray'} fontSize={'13px'}>{el.title}</Text>
                  <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
                     {el.color} / 30
                  </Text>
                </Stack>
              </Box>
              <Text>
                ₹{el.price}
              </Text>
            </Flex>
          ))
        }
      </Stack>



      <Stack spacing="5" rounded="lg" py={{base:'auto',md:'auto'}} width="full" bg='#F7FAF9' pb="10px" mb='0' h={{base:'auto',md:'auto',lg:'45vh'}}>
        <hr />
        <Flex gap={'15px'}>
          <Input bg={'white'} placeholder="Discount code" pl={'10px'} borderRadius='none' />
          <Button bg={'blackAlpha.900'} color={'white'} size='md' pl={'30px'} pr={'30px'} borderRadius="none">Apply</Button>
        </Flex>
        <hr />
        <Flex justify={'space-between'}>
          <Text>Subtotal</Text>
          <Text>₹ {totalPrice}</Text>
        </Flex>
        <hr />
        <Flex justify={'space-between'}>
          <Text>Total</Text>
          <Text fontSize={'18px'} fontWeight={'bold'}>₹ {totalPrice}</Text>
        </Flex>
        <hr />
        <Text fontSize={'13px'} textAlign={'left'} w={'85%'}>
          Cash on Delivery applicable only on orders below ₹10,000
        </Text>
        
      </Stack>
    </Box>
  )
}

export default CheckoutProductSummary