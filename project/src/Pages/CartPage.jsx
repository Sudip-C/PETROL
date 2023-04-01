
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
import EmptyCart from '../component/CartComponent/EmptyCart'
// import { cartData } from '../component/CartComponent/Page'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../redux/cartReducer/action'

const CartPage = () => {

  let arr = JSON.parse(localStorage.getItem('addToCart'))||[]
  let cartData = useSelector(store =>store.cartReducer.cartData)
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartData(arr))
  },[])
  let del = (id) => {
    cartData=cartData.filter((el)=>el.id!==id)
    localStorage.setItem('addToCart',JSON.stringify(cartData))
    let data=JSON.parse(localStorage.getItem('addToCart'))||[]
    dispatch(getCartData(data))
  }
  console.log(cartData)
  console.log(arr)
  return (
    cartData.length===0 ? <EmptyCart /> :
      <Box
      minH={'700px'}
        maxW={{ base: '3xl', lg: '7xl', }}
        mx="auto"
        px={{ base: '4', md: '8', lg: '20', }}
        py={{ base: '2', md: '3', lg: '4', }} >

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
              {cartData?.map((item) => (
                <CartItem key={item.id} {...item} del={del} />
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










