import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
   
  } from '@chakra-ui/react';
  import { useState } from 'react'
import {useNavigate} from "react-router-dom"
  
  export default function AdminLogin()  {
    const[userName,SetUserName]=useState("")
    const[password,setPassword]=useState("")
    const[message,setMessage]=useState("")
    const navigate=useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()
  if(userName==="admin"&&password==="admin"){
    setMessage("Login Successfull")
    navigate("/admin")
    
    SetUserName("")
    setPassword("")
    
    
  }else{
    setMessage("Login error!!")
  }
}




    return (
        <>

   

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Login as Admin
          </Heading>
          <Heading  lineHeight={1.1} fontSize={{ base: 'l', md: '2xl' }}>
         {message}
          </Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-username"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={(e)=>SetUserName(e.target.value)}
              value={userName}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleSubmit}
              >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      </>
    );
  }