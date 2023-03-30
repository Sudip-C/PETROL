
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CartItem from '../component/CartComponent/CartItem'
import CartOrderSummary from '../component/CartComponent/CartOrderSummary'
import { cartData } from '../component/CartComponent/Page'


const CartPage = () => {

  // let [cartData,setCartData]=useState([])
  // let get=()=>{
  //   fetch('https://waiting-brief-sort.glitch.me/mens')
  //   .then(res=>res.json()).then(res=>setCartData(res))
  // }
  // useEffect(()=>{
  //   get()
  // },[])

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl', }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '20', }}
      py={{ base: '6', md: '8', lg: '12', }} >

      <Heading fontSize="25px" fontWeight="bold" pb={'15px'} textAlign={'center'}>
        YOUR CART
      </Heading>
      <Stack
        direction={{ base: 'column', lg: 'row', }}
        align={{ lg: 'flex-start', }}
        spacing={{ base: '8', md: '8', }}>

        <Stack
          spacing={{ base: '8', md: '10', }}
          flex="2">


          {/* mapping the data which is coming from url */}
          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex align="center" flex="1" bg={'#F9F8F6'} p={'20px'} >
          <CartOrderSummary />
        </Flex>
      </Stack>
    </Box>
  )
}

export default CartPage










