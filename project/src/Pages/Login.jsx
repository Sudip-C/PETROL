import React, { useState } from "react";
import banner from "../photos/minibanner.png"
import "../CSS/login.css"
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { Authentication } from "../redux/AuthReducer/action";
// import { useNavigate } from "react-router-dom";

 function Login(){
 


const[userName,SetUserName]=useState("")
const[password,setPassword]=useState("")
 const navigate=useNavigate()
const location=useLocation()
const dispatch=useDispatch()

const handleSubmit=(e)=>{
e.preventDefault()
signInWithEmailAndPassword(auth,userName,password)
.then(()=>{dispatch(Authentication)
  navigate(location.state, {replace:true})
})
.catch(()=>{alert("No record found!! Signup instead")
navigate("/signup")})
SetUserName("")
setPassword("")
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
          Login to your account
          </Heading>
          
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-Email"
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
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
<p>Don't have acount <Link to="/signup"><b>Signup</b></Link></p>
{/* <p>By continuing , I agree to the <b>terms of use</b> & <b>Privacy policy</b></p> */}
</div>

   </div>
)
}
export default Login