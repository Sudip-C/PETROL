import { Box, Flex, Input, Checkbox, Grid, Text, Heading, Center, HStack, Select } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

const FilterPage = () => {
    return (
        <Flex direction="column" gap="30px" pb="5px" bg='#F9F2F6' pt='20px' >
            <Center>
                <Flex direction="column" justify="center">
                    <Heading fontSize="25px">WOMEN</Heading>
                    <Heading textAlign="center"><ChevronDownIcon /></Heading>
                </Flex>
            </Center>
            <Flex direction="row" gap={'30px'}>

                <Flex justify="center" w="15%">
                    <Text fontSize="18px" fontWeight="bold">Filter By</Text>
                </Flex>
                <Grid templateColumns={'repeat(6,1fr)'} gap="30px">
                    <Menu border="1px solid red" w="200px">
                        <MenuButton rightIcon={<ChevronDownIcon />}
                           
                            px={4}
                            py={2}
                            bg="white"
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'>
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Category</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Jeanse</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Belt</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Shirt</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Pant</Checkbox></MenuItem>
                                <MenuItem><Checkbox>TShirt</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Shandle</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Sneaker</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Winter Jacket</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Sweter</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Top</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                            
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'>
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Color</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Size</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Length</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Febric</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Gender</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Sale</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Discount</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            w="200px"
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <HStack spacing="20px" justify="space-between" alignItems="center" ><Text>Product Type</Text><ChevronDownIcon /></HStack>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton rightIcon={<ChevronDownIcon />}
                
                            px={4}
                            bg="white"
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center" gap="30px"><Text>Pattern</Text><ChevronDownIcon /></Flex>
                        </MenuButton>
                        <MenuList>
                            <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                                <MenuItem><Checkbox>Checkbox</Checkbox></MenuItem>
                            </Grid>
                        </MenuList>
                    </Menu>
                </Grid>
            </Flex>
            <Flex justify="space-between" alignItems="center" pl="40px" pr="40px">
                <Text>Showing: Products</Text>
                <Select bg='white' placeholder='Select option' w="250px" _focus={{ outline: 'none', border: 'none' }} border={'none'} ouline='none'>
                    <option value='option1'>Price High To Low</option>
                    <option value='option2'>Price Low To High</option>
                    <option value='option3'>Discount Low To High</option>
                    <option value='alphaone'>New Arrival</option>
                    <option value='alphaone'>Most Popular</option>
                </Select>
            </Flex>

        </Flex>
    )
}
export default FilterPage;