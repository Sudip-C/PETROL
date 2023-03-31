import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import AddressPage from '../component/CartComponent/AddressPage'
import CheckoutProductSummary from '../component/CartComponent/CheckoutProductSummary'

const CheckoutPage = () => {
    return (
        <Box>

            <Stack direction={{ base: 'column-reverse', lg: 'row', }} align={{ lg: 'flex-start', }}>

                <Stack w={'70%'} mx="auto" pl={{ base: '4', md: '8', lg: '20', }}>
                    <Flex justify={'space-between'} borderBottom="1px solid gray" alignItems={'center'} p={'7px'}>
                        <Heading>
                            DIESEL
                        </Heading>
                        <Box>
                            <Link>Cart &gt; </Link>
                            <Link>Address &gt; </Link>
                            <Link>Checkout </Link>
                        </Box>
                    </Flex>
                    <AddressPage />
                </Stack>

                <Flex bg={'#F9F8F6'} w={'30%'} px={'10'} mx={'auto'}>
                    <Box h={'100vh'} w={'100%'}>
                        <CheckoutProductSummary />
                    </Box>
                </Flex>
            </Stack>
        </Box>
    )
}

export default CheckoutPage