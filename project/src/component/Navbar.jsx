
import { BsSearch, BsHandbag, BsQuestionCircle, BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc"
import { IconContext } from "react-icons";
import logo from '../photos/logo.png'

//   <IconContext.Provider value={{ size:"2em"}}>
// <div>  <BsSearch /></div>
// <div> <VscAccount/></div> 
// <div> <BsQuestionCircle/></div> 
// <div> <BsHeart/></div> 
// <div> <BsHandbag/></div> 
// </IconContext.Provider>



import { Box, Flex, Text, IconButton, Stack, Collapse, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Image } from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Link as RoutLink } from 'react-router-dom'
import { FaUser, FaCartPlus } from 'react-icons/fa';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex bg={useColorModeValue('rgba(247, 31, 31, 0.9)', 'gray.800')} color={useColorModeValue('gray.600', 'white')} minH={'70px'} py={{ base: 2 }} px={{ base: 4 }} borderColor={useColorModeValue('gray.200', 'gray.900')} align={'center'} >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'flex', lg: 'none' }} alignItems={'center'} >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <RoutLink to="/"><Box  ml={{base:'10px',md:'20px'}} > <BsSearch color="white" /></Box></RoutLink>
        </Flex>
        {/* menus  */}
        <Flex justify={'space-between'} w={'100%'} alignItems="center">
          <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} justify="space-evenly" fontWeight="bolder" boxSizing="border-box" >
            <DesktopNav />
          </Flex>
          {/* logo */}
          <Flex  >
            <Box fontFamily={'heading'} >
              <RoutLink to='/'>
                <Image src={logo} w={{base:'130px',md:'200px'}}  ml={{base:'50px',md:'170px',lg:'-30px'}} />
              </RoutLink>
            </Box>
          </Flex>
          {/* right section  */}
          <Flex direction={'row'} mr={{base:'0px',md:'5px',lg:'30px'}} border={{base:'none', md:'1px solid white'}} spacing={1} alignItems={'center'} >
            <IconContext.Provider value={{ size: "20px" }} >
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}}> <VscAccount color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}} p={{base:'10px',md:'12px'}} display={{ base: 'none', md: 'none', lg: 'block' }}>  <BsSearch color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}} display={{ base: 'none', md: 'none', lg: 'block' }}> <BsQuestionCircle color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}}> <BsHeart color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}}> <BsHandbag color="white" /></Box>
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
            <Box p={2} color={linkColor} fontSize={14} display='flex' justifyContent="space-between" w="100%" fontWeight="bolder">
              <Link>MAN</Link>
              <Link pl={'30px'}>WOMAN</Link>
              <Link pl={'30px'}>KIDS</Link>
              <Link pl={'30px'}>SS'M</Link>
              <Link pl={'30px'}>LAST CHANCE</Link>



            </Box>
          </PopoverTrigger>


          {/* <PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} w="100%">
            <Stack w="100%">
              {/* <Box w="100%" h="200px" border='1px solid red'></Box> */}
          {/* <DesktopSubNav  />  */}
          {/* 
            </Stack>
          </PopoverContent> */}

        </Popover>
      </Box>

    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'flex' }}>

      <MobileNavItem />

    </Stack>
  );
};

const MobileNavItem = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle} w="100%" position={'relative'}>
      <Flex py={2} justify={'space-between'} align={'center'} _hover={{ textDecoration: 'none' }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
        </Text>
      </Flex>
      <Stack mt={100} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'} rowGap={'50px'} w="100%">
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%" >

          <Text>NEW ARRIVALS</Text>
          <Image src='https://images.dailyobjects.com/marche/icons/filter/collection-icon.jpg?tr=cm-pad_crop,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />

        </Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>CASES & SLEEVES</Text>
          <Image src='https://images.dailyobjects.com/marche/icons/sub-category/cases-sleeves-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' /></Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>ACCESSORIES</Text>
          <Image src='https://images.dailyobjects.com/marche/icons/sub-category/accessories-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />
        </Link>
        <Link color={'orange.500'} _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>SALE</Text>
          <Image src=' https://images.dailyobjects.com/marche/assets/images/app/android/icons/sale.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />
        </Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>BAGS & WALLETS</Text>
          <Image src='https://images.dailyobjects.com/marche/icons/sub-category/bags-wallets-main.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />
        </Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>HOME OFFICE</Text>
          <Image src='https://images.dailyobjects.com/marche/assets/images/app/android/icons/home-office.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />
        </Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">
          <Text>COLLECTIONS</Text>
          <Image src='https://images.dailyobjects.com/marche/icons/category/collection-menu-icon.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />
        </Link>
        <Link _hover={{ textDecoration: 'none' }} display='flex' justifyContent={'space-between'} alignItems={'center'} w="100%">

          <Text>GIFTING</Text>
          <Image src='https://images.dailyobjects.com/marche/assets/images/other/gifting-bundles-filter-on-gifting-page.png?tr=cm-pad_resize,v-2,w-160,h-160,dpr-1' w='100px' h="100px" borderRadius='50%' />

        </Link>



      </Stack>
      {/* </Collapse> */}
    </Stack>
  );
};