import React, { useReducer, useState } from 'react'
import { CheckIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, FormControl, FormErrorMessage, FormLabel, Grid, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { changePage } from '../../redux/cartReducer/action'
import {Link as RoutLink} from 'react-router-dom'


let initial = JSON.parse(localStorage.getItem('userAddress')) || {
    fname: '',
    lname: '',
    address: '',
    zipcode: '',
    state: '',
    city: '',
    phone: '',
    addressType: ''

}
let reducer = (state, { type, payload }) => {
    switch (type) {
        case 'fname':
            return { ...state, fname: payload }
        case 'lname':
            return { ...state, lname: payload }
        case 'address':
            return { ...state, address: payload }
        case 'zipcode':
            return { ...state, zipcode: payload }
        case 'state':
            return { ...state, state: payload }
        case 'city':
            return { ...state, city: payload }
        case 'phone':
            return { ...state, phone: payload }
        case 'email':
            return { ...state, email: payload }
        case 'addressType':
            return { ...state, addressType: payload }
        default:
            return state
    }
}
const NewAddressPage = () => {
    let [input, setInput] = useState('')
    let dispatch = useDispatch()
    let [states, setDispatch] = useReducer(reducer, initial)
    let { fname, lname, address, zipcode, state, city, phone, email } = states
    let submitData = (e) => {
        e.preventDefault()
        localStorage.setItem('userAddress', JSON.stringify(states))
        dispatch(changePage())
    }

    let isError = input === ''



    return (
        <form onSubmit={submitData}>
            <Stack direction={'column'} mt={'30px'} spacing={4} >
                <Heading fontSize={'18px'} pb={'10px'}>
                    SHIPPING ADDRESS
                </Heading>
                <Flex gap={'12px'}>


                    <Input
                        name={'fname'}
                        placeholder='First name'
                        focusBorderColor='black'
                        border="0.5px solid gray"
                        onChange={(e) => {
                            setInput(e.target.value)
                            setDispatch({ type: 'fname', payload: e.target.value })
                        }}
                    />


                    <Input
                        name={'lname'}
                        placeholder='Last name'
                        focusBorderColor='black'
                        border="0.5px solid gray"
                        onChange={(e) => {
                            setDispatch({ type: 'lname', payload: e.target.value })
                        }}
                    />
                </Flex>
                <Input
                    placeholder='Address'
                    focusBorderColor='black'
                    border="0.5px solid gray"
                    onChange={(e) => {

                        setDispatch({ type: 'address', payload: e.target.value })
                    }}
                />
                <Grid gridTemplateColumns={'repeat(3,1fr)'} gap="12px">
                    <Flex direction={'column'}>
                        <FormLabel fontSize={'16px'} pb={'12px'}>Zip Code</FormLabel>
                        <Input
                            focusBorderColor='black'
                            border="0.5px solid gray"
                            name={'zipcode'}
                            onChange={(e) => {

                                setDispatch({ type: 'zipcode', payload: e.target.value })
                            }}
                        />
                    </Flex>
                    <Flex direction={'column'}>
                        <FormLabel fontSize={'17px'} pb={'12px'}>State</FormLabel>
                        <Input
                            focusBorderColor='black'
                            border="0.5px solid gray"
                            name='state'
                            onChange={(e) => {
                                setDispatch({ type: 'state', payload: e.target.value })
                            }}
                        />
                    </Flex>
                    <Flex direction={'column'}>
                        <FormLabel fontSize={'17px'} pb={'12px'}>City</FormLabel>
                        <Input
                            placeholder='City'
                            focusBorderColor='black'
                            border="0.5px solid gray"
                            name='city'
                            onChange={(e) => {
                                setDispatch({ type: 'city', payload: e.target.value })
                            }}
                        />
                    </Flex>
                </Grid>
                <InputGroup >
                    <Input
                        type={'number'}
                        placeholder='Phone'
                        focusBorderColor='black'
                        border="0.5px solid gray"
                        mt={'13px'}
                        name={'phone'}
                        onChange={(e) => {
                            setDispatch({ type: 'phone', payload: e.target.value })
                        }}
                    />
                    <InputRightElement children={<QuestionIcon color='black.500' />} mt={'13px'} />
                </InputGroup>
                <Input
                    type={'email'}
                    placeholder="cristine@gmail.com"
                    focusBorderColor='black'
                    border="0.5px solid gray"
                    onChange={(e) => {
                        setDispatch({ type: 'email', payload: e.target.value })
                    }}
                />
                <Flex direction={'column'}>
                    <Text fontSize={'16px'} pb={'12px'}>Address Type</Text>
                    <RadioGroup>
                        <Stack direction='row' spacing={'50px'} onChange={(e) => setDispatch({ type: 'addressType', payload: e.target.value })}>
                            <Radio value='Home'>Home</Radio>
                            <Radio value='Office'>Office</Radio>
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex justify={'space-between'} align="center">
                    <RoutLink to='/cart'><Link textDecorationLine={'underline'}>&lt; Back</Link></RoutLink>
                    <Button bg={'blackAlpha.900'} colorScheme={'white'} borderRadius="none" type={'submit'}>Continue To Shipping</Button>
                </Flex>
            </Stack>
        </form>
    )
}

export default NewAddressPage




//     < FormControl isInvalid = { isError } >
//         <Input
//             name={'lname'}
//             placeholder='Last name'
//             focusBorderColor='black'
//             border="0.5px solid gray"
//             onChange={(e) => {
//                 setDispatch({ type: 'lname', payload: e.target.value })
//             }}
//         />
// {
//     !isError ? "" : (
//         <FormErrorMessage>Email is required.</FormErrorMessage>
//     )
// }
//                     </FormControl >