import React, { useState } from "react";
import banner from "../photos/minibanner.png"
import "../CSS/login.css"
import { Button} from '@chakra-ui/react'
import {

   Flex,
   FormControl,
   FormLabel,
   Heading,
   Input,
   Stack,
   useColorModeValue,
  
 } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

 function SignUp(){

const[userName,SetUserName]=useState("")
const[password,setPassword]=useState("")
const[message,setMessage]=useState("")
const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
createUserWithEmailAndPassword(auth,userName,password)
.then((credential)=>{
    console.log(credential)
    navigate("/")
}).catch((err)=>alert(err))
}



return(
   <div className="login-board">
<img src={banner}/>
<div className="button">
<Flex
        
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={3}
          w={'full'}
          maxW={'md'}
          bg="white"
         //  rounded={'xl'}
         //  boxShadow={'lg'}
          p={6}
         //  my={12}
          >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          SignUp for your account
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
              bg='red'
              color={'white'}
              _hover={{
                bg: 'black',
              }}
              onClick={handleSubmit}
              >
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Flex>
<p>By continuing , I agree to the <b>terms of use</b> & <b>Privacy policy</b></p>
</div>

   </div>
)
}
export default SignUp