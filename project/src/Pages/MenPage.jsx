import React from 'react'
import {  Stack } from '@chakra-ui/react'
import MenFilterPage from '../component/menfilter'
import MenData from '../component/Mendata'
function MenPage() {
  return (
    <Stack direction={'column'} spacing={'20px'}>
        <MenFilterPage />
        <MenData />
    </Stack>
  )
}

export default MenPage