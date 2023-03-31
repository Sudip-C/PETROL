
import React from 'react'
import { CheckIcon, QuestionIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

const ShippingPage = () => {
    return (
        <Stack direction={'column'} mt={'30px'} spacing={6} w={'70%'} >
            <Heading fontSize={'18px'}>
                SHIPPING ADDRESS
            </Heading>

            <Flex direction={'column'} p={'16px'} pl={'40px'} border={'1px solid gray'} bg={'#F9F5F2'} fontWeight={'bold'} >
                <Text fontSize={'15px'}>Gopi Vishwakarma, 8303167926</Text>
                <Text fontSize={'15px'}>Varanasi, UTTAR PRADESH, KachhwaRoad 221308</Text>
                <Text fontSize={'15px'}>Address Type: Home</Text>
            </Flex>

            <Box w={'100%'} border={'0.5px solid gray'} p={'8px'} pl='15px' _hover={{ cursor: 'pointer' }}>+ Add New Address</Box>
            <Button w={'120px'} borderRadius={'none'} bg={'blackAlpha.900'} colorScheme={'white'}>Next</Button>
        </Stack>
    )
}

export default ShippingPage

