import { Box } from '@chakra-ui/react'
import React from 'react'
import NewAddressPage from './NewAddressPage'
import ShippingPage from './ShippingPage'

const AddressPage = () => {
    return (
        <Box  pr={{ base: '4', md: '8', lg: '20', }} position={'relative'} zIndex={'999'}>
            <NewAddressPage />
            {/* <ShippingPage /> */}
        </Box>
    )
}

export default AddressPage