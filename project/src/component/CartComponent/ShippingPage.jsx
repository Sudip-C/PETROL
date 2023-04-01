
import React from 'react'
import { CheckIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { addNewAddress, changePage, paymentPage } from '../../redux/cartReducer/action'

const ShippingPage = () => {
    
    let addressData=JSON.parse(localStorage.getItem('userAddress'))||{}
    let {fname,lname,phone,address,email,addressType,city,state,zipcode}=addressData


    let dispatch=useDispatch()
    let changeFn=()=>{
        dispatch(addNewAddress())
    }
    let button=()=>{
        dispatch(paymentPage())
    }
    return (
        <Stack direction={'column'} mt={'30px'} spacing={6} w={'70%'} >
            <Heading fontSize={'18px'}>
                SHIPPING ADDRESS
            </Heading>

            <Flex direction={'column'} p={'16px'} pl={'40px'} border={'1px solid gray'} bg={'#F9F5F2'} fontWeight={'bold'} >
                <Text fontSize={'15px'}>{fname} {lname}, {phone}</Text>
                <Text fontSize={'15px'}>{city}, {state}, {address} {zipcode}</Text>
                <Text fontSize={'15px'}>Address Type: {addressType}</Text>
            </Flex>

            <Box 
            w={'100%'} 
            border={'0.5px solid gray'} 
            p={'8px'} 
            pl='15px' 
            _hover={{ cursor: 'pointer' }}
            onClick={()=>changeFn()}
            >
            + Add New Address
            </Box>
            <Button onClick={button} w={'120px'} borderRadius={'none'} bg={'blackAlpha.900'} colorScheme={'white'}>Next</Button>
        </Stack>
    )
}

export default ShippingPage

