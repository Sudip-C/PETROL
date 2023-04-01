import { Box, useBoolean } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewAddressPage from './NewAddressPage'
import PaymentMethod from './PaymentMethod'
import ShippingPage from './ShippingPage'

const AddressPage = () => {
    
    let changePage=useSelector(store=>store.cartReducer.changePage)
    let paymentPage=useSelector(store=>store.cartReducer.paymentPage)

    return (
        <Box  pr={{ base: '4', md: '8', lg: '20', }} position={'relative'} zIndex={'999'}>
        {changePage ?paymentPage ?<PaymentMethod />:<ShippingPage />:<NewAddressPage />}
        {/* <ShippingPage /> */}
        </Box>
    )
}

export default AddressPage