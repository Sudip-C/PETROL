
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import React from 'react'
import { Link as RoutLink } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <Box
            maxW={{ base: '3xl', lg: '7xl', }}
            mx="auto"
            px={{ base: '4', md: '8', lg: '20', }}
            py={{ base: '2', md: '3', lg: '4', }} >

            <Heading fontSize="25px" fontWeight="bold" pb={'20px'} textAlign={'center'}>
                YOUR CART
            </Heading>
            <Flex
                direction={{ base: 'column', lg: 'row', }}
                alignItems={'center'}
                gap={{ base: '8', md: '8', }}>
                <Box
                    fontWeight={'medium'}
                    fontSize={'30px'}
                    bg={'#F9F8F6'}
                    p={'15px'}
                    textAlign={'center'}
                    w='60%'>
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