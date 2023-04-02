import { CloseButton, Flex, Link, Select, useColorModeValue as mode, Stack, Image, Box, Text,calc, HStack, Icon, Button, Divider, Tooltip, Center } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import AdminEdit from './AdminEdit'
import AdminAdd from './AdminAdd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from '../../redux/Product/action'
import axios from 'axios'
import { useEffect } from 'react'


const AdminBody = () => {


     const dispatch=useDispatch()
    const{product}=useSelector(store=>store.productReducer)
    
    
    
    
    useEffect(()=>{
      dispatch(getAllData)
     
    },[])
      
    const handleDelete=(id)=>{
        axios.delete(`https://waiting-brief-sort.glitch.me/product/${id}`)
        .then(()=>dispatch(getAllData))
      }


    return (
        <Center>
            <Flex direction='column' borderRadius="15px" w='95%' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                <Flex w="100%" borderRadius="15px" mb="20px" justify='space-between'>
                    <Text p='10px' fontWeight="bolder">Product Details</Text>
                    <AdminAdd />
                </Flex>
                    <Box h="calc(100vh-130px)" overflow={'scroll'} >
                    {product?.map((el)=>{
                return  <Flex key={el.id} m="10px" boxShadow='rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px' borderRadius='15px' direction={{ base: 'column', md: 'row', }} justify="space-between" align="center" pb={'10px'} gap={{ base: 5, md: 1 }} p="20px" >

                {/* left part of product item  */}
                <Flex direction="row" gap="5" width={{ base: '100%', md: '60%' }} alignItems={'center'} >
                    <Image rounded="lg" src={el.image[0]} alt={el.id} width="70px" h={'80px'} draggable="false" loading="lazy"
                        bg={'gray.500'} />
                    <Box pt="4">
                        <Stack spacing="0.5">
                            <Text fontWeight="bolder" textAlign={'left'} fontSize={'14px'}>{el.title.slice(0,37)}</Text>
                            <Text color={mode('gray.600', 'gray.400')} fontSize="13px" textAlign={'left'} fontWeight="medium" >
                                Color:{el.color}
                            </Text>


                        </Stack>
                    </Box>
                    <Text fontWeight="bolder">Rs.{el.price}</Text>
                </Flex>

                {/* right part of product item  */}

                <Flex width={{ base: '100%', md: '100%', lg: "100%" }} mr="30px">
                    <Flex w={'100%'} gap="50px" alignItems={'center'} justify='end'>
                        <Button variant={'unstyled'} bg="red" px='40px' onClick={()=>handleDelete(el.id)} >Delete</Button>
                        <AdminEdit {...el} />
                       
                    </Flex>
                </Flex>
            </Flex>
               })}
                    </Box>
               
               

                {/* map end */}
            </Flex>
        </Center>
    )
}

export default AdminBody