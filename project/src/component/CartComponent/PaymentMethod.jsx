import { Button } from '@chakra-ui/button'
import { useBoolean } from '@chakra-ui/hooks'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { backShippingPage } from '../../redux/cartReducer/action'
import {Navigate} from 'react-router-dom'
// import CashPayment from '../PaymentPopup/'


const PaymentMethod = () => {
let dispatch=useDispatch()
    let [isOpen, setBoolean] = useState(false)
    let [open, setOpen] = useState(false)

    let payOnline = () => {
        setBoolean(true)
        setOpen(false)
    }
    let payCash = () => {
        setBoolean(false)
        setOpen(true)
    }

    let button=()=>{
        dispatch(backShippingPage())
    }
    
    let placedOrder=()=>{
        alert('your order placed successfully...')
    }

    return (
        <Stack direction={'column'} mt={'30px'} spacing={6} w={{ base: '100%', md: '80%', lg: '70%' }} >
            <Heading fontSize={'18px'}>
                PAYMENT METHOD
            </Heading>

            <Flex
                direction={'column'}
                gap='20px'
                p={'20px'}
                border={'1px solid gray'}
                fontWeight={'bold'} >
                <Flex
                    borderRadius={'10px'}
                    onClick={payOnline}
                    p='20px'
                    border={'1px solid gray'}
                    pl={{ base: '5px', md: '50px' }} gap={{ base: '10px', md: '50px' }}
                    alignItems={'center'}>
                    <Image src={'https://dieselindia.com/_nuxt/img/prepaid.7a63e81.png'} />
                    <Text>PAY ONLINE WITH RAZORPAY</Text>
                </Flex>
                {/* <Button
                    w={'70%'}
                    display={isOpen ? 'block' : 'none'}
                    borderRadius={'none'} bg={'blackAlpha.900'}
                    colorScheme={'white'}>CONTINUE CHECKOUT</Button> */}
                    {/* <OnlinePayment /> */}
            </Flex>
            <Flex
                direction={'column'}
                gap='20px'
                p={'20px'}
                border={'1px solid gray'}
                fontWeight={'bold'} >
                <Flex
                    borderRadius={'10px'}
                    onClick={payCash}
                    p='20px'
                    border={'1px solid gray'}
                    pl={{ base: '5px', md: '50px' }}
                    gap={{ base: '10px', md: '50px' }}
                    alignItems={'center'}>
                    <Image src={'https://dieselindia.com/_nuxt/img/COD.c704a94.png'} />
                    <Text>CASH ON DELIVERY</Text>
                </Flex>
                {/* <Button
                // onClick={{<CashOrder />}}
                    w={'60%'}
                    display={open ? 'block' : 'none'}
                    borderRadius={'none'}
                    bg={'blackAlpha.900'}
                    colorScheme={'white'}>PLACE ORDER</Button> */}
                    {/* <CashPayment /> */}
            </Flex>
            <Link onClick={button} textDecorationLine={'underline'}>&lt; Back</Link>

         </Stack>
    )
}

export default PaymentMethod