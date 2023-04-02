
import { BsSearch, BsHandbag, BsQuestionCircle, BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc"
import { IconContext } from "react-icons";
import logo from '../photos/logo.png'
import { Box, Flex, Text, IconButton, Stack, Collapse, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Image, Icon,  useColorMode, Button} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Navigate, Link as RoutLink, useNavigate, useSearchParams } from 'react-router-dom'
import { NAV_ITEMS } from "./NavComponent/DropdownItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';






export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sOpen, onToggle } = useDisclosure();

  let localData = useSelector(store => store.cartReducer.cartData)
  let cartCount = 0;
  localData.forEach(el => {
    cartCount++
  })

 
  return (
    <Box position={'fixed'} overflow={"hidden"} top="0" w='100%' zIndex={'999'} >
      <Flex bg={'#FF0000'} minH={'70px'}   >
        <Flex flex={{ base: 1, md: 'auto' }} display={{ base: 'flex', md: 'flex', lg: 'none' }} alignItems={'center'} >
          <IconButton
            onClick={onToggle}
            icon={
              sOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <RoutLink to="/"><Box ml={{ base: '10px', md: '20px' }} > <BsSearch color="white" /></Box></RoutLink>
        </Flex>
        {/* menus  */}
        <Flex justify={'space-between'} w={'100%'} alignItems="center">
          <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} justify="space-evenly" fontWeight="bolder" boxSizing="border-box" ml={{ base: '10px' }} >
            <DesktopNav />
          </Flex>
          {/* logo */}
          <Box fontFamily={'heading'} >
            <RoutLink to='/'>
              <Image src={logo}  w={{ base: '130px', md: '200px' }} ml={{ base: '70px', md: '190px', lg: '-30px' }} />
            </RoutLink>
          </Box>
          {/* right section  */}
          <Flex direction={'row'} mr={{ base: '0px', md: '5px', lg: '30px' }} border={{ base: 'none', md: '1px solid white' }} spacing={1} alignItems={'center'} >
            <IconContext.Provider value={{ size: "20px" }} >



              <RoutLink to= "/account" > <Box border={{ base: 'none', md: '1px solid white' }} p={{ base: '10px', md: '12px' }}> <VscAccount color="white" /></Box></RoutLink>

            {/* <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              
              <RoutLink to='/search'><Box border={{ base: 'none', md: '1px solid white' }} p={{ base: '10px', md: '12px' }} display={{ base: 'none', md: 'none', lg: 'block' }}>  <BsSearch color="white" /></Box></RoutLink>
              <RoutLink to='/temp'>  <Box border={{ base: 'none', md: '1px solid white' }} p={{ base: '10px', md: '12px' }} display={{ base: 'none', md: 'none', lg: 'block' }}> <BsQuestionCircle color="white" /></Box></RoutLink>
              <RoutLink to='/wishlist'><Box border={{ base: 'none', md: '1px solid white' }} p={{ base: '10px', md: '12px' }}> <BsHeart color="white" /></Box></RoutLink>
              <RoutLink to='/cart'><Flex boxSizing="border-box" direction={'row'} border={{ base: 'none', md: '1px solid white' }} p={{ base: '10px', md: '9.7px' }}> <BsHandbag color="white" /><Text color={'white'} >{cartCount}</Text></Flex></RoutLink>
              
            </IconContext.Provider>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');


  return (
    <Stack direction={'row'} spacing={4} w="100%">

      <Box w="100%">

        <Popover trigger={'hover'} placement={'bottom-start'} w="100%">
          <PopoverTrigger w="100%">

            <Flex p={2}  color={linkColor} fontSize={14} display='flex' justifyContent="space-between" w="100%" fontWeight="bolder" direction={'row'} gap={6} alignItems={'center'}>

              <Button bg="none" w="50px" _hover={{bg:"none"}} fontWeight="750" onClick={()=>{
                 navigate("/mensection") }}  >MAN</Button >
              <Button bg="none" w="50px" _hover={{bg:"none"}} fontWeight="750" onClick={()=>{
                navigate("/product")}} >WOMAN</Button>
              <Button bg="none" w="50px" _hover={{bg:"none"}} fontWeight="750"onClick={()=>{
                navigate("/kidsection")}} >KIDS</Button>
              <Link border={'1px solid white'} p={'5px'}>SS'M</Link>

        
              <Link>LAST CHANCE</Link>
            </Flex>
          </PopoverTrigger>
        </Popover>

      </Box>

    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'block', lg: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {


  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );


            }

   



