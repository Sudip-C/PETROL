import React from 'react'
import {  Stack } from '@chakra-ui/react'
import KidFilterPage from '../component/Kidfilter'
import KidData from '../component/KidData'
function MenPage() {
  return (
    <Stack direction={'column'} spacing={'20px'} >
        <KidFilterPage />
        <KidData />
    </Stack>
  )
}

export default MenPage