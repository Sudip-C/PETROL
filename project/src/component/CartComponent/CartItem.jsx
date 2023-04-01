import { CloseButton, Flex, Link, Select, useColorModeValue as mode, Stack, Image, Box, Text, HStack, Icon, Button, Divider, Tooltip } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'


const CartItem = (props) => {
  const { title, image, description, color, price, category, id , del } = props
  return (
    <Flex direction={{ base: 'column', md: 'row', }} justify="space-between" align="center" boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'} pb={'10px'} gap={{ base: 5, md: 1 }} >

      {/* left part of product item  */}
      <Flex direction="row" gap="5" width={{ base: '100%', md: '50%' }} alignItems={'center'} >
        <Image rounded="lg" width="90px" h={'110px'} src={image[0]} alt={title} draggable="false" loading="lazy"
          bg={'gray.500'} />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="bolder" textAlign={'left'} fontSize={'14px'}>{title}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
              Color: {color}
            </Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
              Size: 30
            </Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
              Item(s): 1
            </Text>
          </Stack>
        </Box>
      </Flex>

      {/* right part of product item  */}

      <Flex width={{ base: '100%', md: '50%' }} ml={'20px'}>
        <Flex w={'50%'} justify={'space-between'} alignItems={'center'}>
          <Tooltip hasArrow label='minimum quantity'   >
            <Button bg={'gray.500'} colorScheme={'white'} borderRadius={'none'}>-</Button>
          </Tooltip>
          <Text p={'5px'}>1</Text>
          <Tooltip hasArrow label='maximum quantity'  >
            <Button bg={'blackAlpha.900'} colorScheme={'white'} borderRadius={'none'}>+</Button>
          </Tooltip>
          <Button variant={'unstyled'} onClick={()=>del(id)}> <DeleteIcon boxSize={'5'} /></Button>
        </Flex>
        <Flex justify={'space-evenly'} w={'50%'} alignItems={'center'}>
          <Text fontSize={'18px'} fontWeight={'bolder'} color={'gray'} textDecoration={'line-through'}>{price * (Math.floor(Math.random() * 2) + 1)}</Text>
          <Text fontSize={'18px'} fontWeight={'bolder'}>₹{price}</Text>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default CartItem