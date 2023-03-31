
import { BsSearch, BsHandbag, BsQuestionCircle, BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc"
import { IconContext } from "react-icons";
import logo from '../photos/logo.png'
import { Box, Flex, Text, IconButton, Stack, Collapse, Link, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure, Image , Icon} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon,ChevronDownIcon } from '@chakra-ui/icons';
import { Link as RoutLink } from 'react-router-dom'
import { NAV_ITEMS } from "./NavComponent/DropdownItem";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const {  isAuthenticated } = useAuth0();

  return (
    <Box position={'sticky'} w='100%' zIndex={'999'} >
      <Flex bg={'rgba(247, 31, 31, 0.9)'} minH={'70px'}  >
        <Flex flex={{ base: 1, md: 'auto' }}  display={{ base: 'flex', md: 'flex', lg: 'none' }} alignItems={'center'} >
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
          <Flex display={{ base: 'none', md: 'none', lg: 'flex' }} justify="space-evenly" fontWeight="bolder" boxSizing="border-box" ml={{base:'10px'}} >
            <DesktopNav />
          </Flex>
          {/* logo */}     
            <Box fontFamily={'heading'} >
              <RoutLink to='/'>
                <Image src={logo} w={{base:'130px',md:'200px'}}  ml={{base:'70px',md:'190px',lg:'-30px'}} />
              </RoutLink>
            </Box>
          {/* right section  */}
          <Flex direction={'row'} mr={{base:'0px',md:'5px',lg:'30px'}} border={{base:'none', md:'1px solid white'}} spacing={1} alignItems={'center'} >
            <IconContext.Provider value={{ size: "20px" }} >
              <RoutLink to={isAuthenticated?"/account":"/login"}><Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}} > <VscAccount color="white" /></Box></RoutLink>
              <Box border={{base:'none', md:'1px solid white'}} p={{base:'10px',md:'12px'}} display={{ base: 'none', md: 'none', lg: 'block' }}>  <BsSearch color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}} display={{ base: 'none', md: 'none', lg: 'block' }}> <BsQuestionCircle color="white" /></Box>
              <Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}}> <BsHeart color="white" /></Box>
              <RoutLink to='/cart'><Box border={{base:'none', md:'1px solid white'}}  p={{base:'10px',md:'12px'}}> <BsHandbag color="white" /></Box></RoutLink>
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
            <Flex p={2} color={linkColor} fontSize={14} display='flex' justifyContent="space-between" w="100%" fontWeight="bolder" direction={'row'} gap={6} alignItems={'center'}>
              <Link>MAN</Link>
              <Link>WOMAN</Link>
              <Link>KIDS</Link>
              <Link border={'1px solid white'} p={'5px'}>SS'M</Link>
              <Link>LAST CHANCE</Link>
            </Flex>
          </PopoverTrigger>
          {/* <PopoverContent w={'100vw'}>
           <Box w={'100vw'} h={'400px'} bg="blackAlpha.600"></Box>
          </PopoverContent> */}
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
      display={{ md: 'block',lg:'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href })=> {
 

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
};