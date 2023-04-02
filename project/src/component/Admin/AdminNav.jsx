import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon , SearchIcon } from '@chakra-ui/icons';

export default function AdminNav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        
            <Box  bg={useColorModeValue('gray.100', 'gray.900')} px={4} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
                <Flex alignItems={'center'} justifyContent={'space-between'} h="60px">
                    <Box>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                color='gray.300'
                                fontSize='1.2em'
                                
                            />
                            <Input placeholder='search' />
                            <InputRightElement children={<SearchIcon  fontWeight="bolder" />} />
                        </InputGroup>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                  
                 
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        
    );
}