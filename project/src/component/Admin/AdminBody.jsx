import { CloseButton, Flex, Link, Select, useColorModeValue as mode, Stack, Image, Box, Text, HStack, Icon, Button, Divider, Tooltip, Center } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import AdminEdit from './AdminEdit'
import AdminAdd from './AdminAdd'


const AdminBody = () => {

    return (
        <Center>
            <Flex direction='column' borderRadius="15px" w='95%' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                <Flex w="100%" borderRadius="15px" mb="20px" justify='space-between'>
                    <Text p='10px' fontWeight="bolder">Product Details</Text>
                    <AdminAdd />
                </Flex>
                <Flex boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius='15px' direction={{ base: 'column', md: 'row', }} justify="space-between" align="center" pb={'10px'} gap={{ base: 5, md: 1 }} p="20px" >

                    {/* left part of product item  */}
                    <Flex direction="row" gap="5" width={{ base: '100%', md: '60%' }} alignItems={'center'} >
                        <Image rounded="lg" width="70px" h={'80px'} draggable="false" loading="lazy"
                            bg={'gray.500'} />
                        <Box pt="4">
                            <Stack spacing="0.5">
                                <Text fontWeight="bolder" textAlign={'left'} fontSize={'14px'}>This is good way to do this</Text>
                                <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
                                    Color: blue
                                </Text>


                            </Stack>
                        </Box>
                        <Text fontWeight="bolder">Rs.222334</Text>
                    </Flex>

                    {/* right part of product item  */}

                    <Flex width={{ base: '100%', md: '100%', lg: "100%" }} mr="30px">
                        <Flex w={'100%'} gap="50px" alignItems={'center'} justify='end'>
                            <Button variant={'unstyled'} bg="red" px='40px'>Delete</Button>
                            <AdminEdit />
                           
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    )
}

export default AdminBody