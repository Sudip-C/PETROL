import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import ProductData from '../component/PaymentPopup/ProductData'
import FilterPage from '../component/PaymentPopup/FilterPage'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
  const[searchParams]=useSearchParams()
  const pageName=searchParams.get("gender")
  return (
    <Stack direction={'column'} spacing={'20px'} pt="70px">
        <FilterPage Page={pageName} />
        <ProductData />
    </Stack>
  )
}

export default ProductPage