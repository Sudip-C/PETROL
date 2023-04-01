import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ProductData from '../component/PaymentPopup/ProductData'
import FilterPage from '../component/PaymentPopup/FilterPage'

const ProductPage = () => {
  return (
    <Stack direction={'column'} spacing={'20px'} pt="70px">
        <FilterPage />
        <ProductData />
    </Stack>
  )
}

export default ProductPage