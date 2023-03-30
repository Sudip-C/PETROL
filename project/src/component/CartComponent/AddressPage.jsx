import { CheckIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AddressPage = () => {
    return (
        <Box  pr={{ base: '4', md: '8', lg: '20', }}>
           
            <Stack direction={'column'} mt={'30px'} spacing={4} >
                <Heading fontSize={'18px'} pb={'20px'}>
                    SHIPPING ADDRESS
                </Heading>
                <Flex gap={'12px'}>
                    <Input placeholder='First name' focusBorderColor='black' border="0.5px solid gray" />
                    <Input placeholder='Last name' focusBorderColor='black' border="0.5px solid gray" />
                </Flex>
                <Input placeholder='Address' focusBorderColor='black' border="0.5px solid gray" />
                <Grid gridTemplateColumns={'repeat(3,1fr)'} gap="12px">
                    <Flex direction={'column'}>
                        <Text fontSize={'16px'} pb={'12px'}>Zip Code</Text>
                        <Input focusBorderColor='black' border="0.5px solid gray" />
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'17px'} pb={'12px'}>State</Text>
                        <Input focusBorderColor='black' border="0.5px solid gray" />
                    </Flex>
                    <Flex direction={'column'}>
                        <Text fontSize={'17px'} pb={'12px'}>City</Text>
                        <Input placeholder='City' focusBorderColor='black' border="0.5px solid gray" />
                    </Flex>
                </Grid>
                <InputGroup >
                    <Input placeholder='Phone' focusBorderColor='black' border="0.5px solid gray" mt={'13px'} />
                    <InputRightElement children={<QuestionIcon color='black.500' />} mt={'13px'} />
                </InputGroup>
                <Input type={'email'} placeholder="cristine@gmail.com" focusBorderColor='black' border="0.5px solid gray" />
                <Flex direction={'column'}>
                    <Text fontSize={'16px'} pb={'12px'}>Address Type</Text>
                    <RadioGroup>
                        <Stack direction='row' spacing={'50px'}>
                            <Radio value='1'>Home</Radio>
                            <Radio value='2'>Office</Radio>               
                        </Stack>
                    </RadioGroup>
                </Flex>
                <Flex justify={'space-between'} align="center">
                    <Link textDecorationLine={'underline'}>&lt; Back</Link>
                    <Button bg={'blackAlpha.900'} colorScheme={'white'} borderRadius="none">Continue To Shipping</Button>
                </Flex>
            </Stack>
        </Box>
    )
}

export default AddressPage