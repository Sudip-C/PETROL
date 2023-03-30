import {
  Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, Heading, HStack, Input, Link, Stack, Text, useColorModeValue as mode, VStack,
} from '@chakra-ui/react'


const CartOrderSummary = () => {

  return (
    <Stack spacing="3" borderWidth="1px" rounded="lg" width="full" bg='#F7FAF9' pb="10px">
      <Flex>
        <Input variant={'unstyled'} bg={'gray.100'} placeholder="Apply Coupon" pl={'10px'} borderRadius='none' />
        <Button bg={'blackAlpha.900'} color={'white'} size='md' pl={'30px'} pr={'30px'} borderRadius="none">Apply</Button>
      </Flex>
      <Text fontSize={'13px'} textAlign={'left'} w={'85%'}>
        Shop for additional ₹3,006 to get additional 10% discount on your entire order. Use Code: EXTRA10
      </Text>
      <hr />
      {/* accordion here  */}
      <Accordion allowToggle pt={'10px'} pb="10px">
        <AccordionItem>

          <AccordionButton borderBottom={'1px solid lightGray'} >
            <Heading flex='1' textAlign='left' fontWeight="bolder" fontSize={'20px'}>
              Luxe Gift Card
            </Heading>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <VStack spacing={'30px'} pt='10px'>
              <Input variant={'unstyled'} placeholder='Enter Card Number' />
              <Input variant={'unstyled'} placeholder='Enter Pin' />
              <Button w={'100%'} bg={'blackAlpha.900'} colorScheme={'white'} borderRadius="none" border={'none'}>CHECK BALANCE</Button>
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <hr />
      {/* totol price  */}
      <Heading fontSize={'20px'}>
        Total: ₹14000
      </Heading>
      <Text fontSize={'13px'} textAlign={'left'} w={'85%'}>
        Cash on Delivery applicable only on orders below ₹10,000
      </Text>
      {/* checkout button  */}
      <Button bg={'blackAlpha.900'} colorScheme={"white"} size="lg" fontSize="md" borderRadius={'none'} >
        Checkout
      </Button>
      <Flex mt="6" fontWeight="semibold" justify={'center'}>
        <p>or</p>
        <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
      </Flex>
    </Stack>
  )
}


export default CartOrderSummary