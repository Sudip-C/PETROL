import Lottie from "lottie-react";
import emptyCart from "../../photos/Empty Order.json"
import {
    Box,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RoutLink } from 'react-router-dom'

const EmptyCart = () => {
    return ( 
        <Box
        py="80px"
        minH={'700px'}
            maxW={{ base: '3xl', lg: '7xl', }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '20', }}
     >

            <Heading fontSize="25px" fontWeight="bolder" pb={'20px'} textAlign={'center'}>
                YOUR CART
            </Heading>
            <Box width={'200px'} margin="auto" >
            <Lottie animationData={emptyCart}  loop={true}/>
            </Box>
            <Flex mt={'20px'}
                direction={{ base: 'column', lg: 'row', }}
                alignItems={'center'}
                gap={{ base: '8', md: '8', }}>
                <Box
                    fontWeight={'medium'}
                    fontSize={{base:'20px',md:'27',lg:'30px'}}
                    bg={'#F9F2F6'}
                    p={'15px'}
                    textAlign={'center'}
                    w={{base:'100%',md:'80%',lg:'60%'}}>
                    YOUR SHOPPING CART IS EMPTY
                </Box>
                <RoutLink to='/'>
                    <Box
                        fontWeight={'bold'}
                        fontSize="15px"
                        p="10px"
                        border={'1px solid gray'}
                        pl="50px"
                        pr="50px"
                        _hover={{ cursor: 'pointer' }}>
                        BACK TO SHOPPING
                    </Box>
                </RoutLink>
            </Flex>
        </Box>
    )
}

export default EmptyCart