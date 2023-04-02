import { Box, Flex, Input, Checkbox, Grid, Text, Heading, Center, HStack , Select} from '@chakra-ui/react'
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
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const FilterPage = ({Page}) => {

    const [searchParams, setSearchParams] = useSearchParams()
    const initialOrder = searchParams.get("order")
    const initialParams = searchParams.getAll("category")
    const [order, setOrder] = useState(initialOrder || "")
    const [category, setCategory] = useState(initialParams || [])


    const handleChange = (e) => {
        let newCategory = [...category]
        const value = e.target.value
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value)
        }
        setCategory(newCategory)
    }

    const handleOrder = (e) => {
        setOrder(e.target.value)
    }

    useEffect(() => {
        let obj = {
            category,
        }
        order && (obj.order = order)
        setSearchParams(obj)
    }, [category, order])

    return (




        <Flex direction="column" gap="30px" pb="30px" pt="20px">

        <Center>
        <Flex direction="column" justify="center">
            <Heading fontSize="25px">{Page?.toUpperCase()}</Heading>
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
                        transition='all 0.1s'
                        borderRadius='md'
                        borderWidth='1px'>
                        <Flex justify="space-between" alignItems="center" gap="30px"><Text>Category</Text><ChevronDownIcon /></Flex>
                    </MenuButton>
                    <MenuList>
                        <Grid templateColumns={'repeat(3,1fr)'} colGap="20px" rowGap="10px">
                            <MenuItem><Checkbox onChange={handleChange}value={"jeans"} isChecked={category.includes("jeans")}>Jeanse</Checkbox></MenuItem>
                            <MenuItem><Checkbox onChange={handleChange}value={"belt"} isChecked={category.includes("belt")}>Belt</Checkbox></MenuItem>
                            <MenuItem><Checkbox onChange={handleChange}value={"shirt"} isChecked={category.includes("shirt")}>Shirt</Checkbox></MenuItem>
                            <MenuItem><Checkbox onChange={handleChange}value={"t-shirt"} isChecked={category.includes("t-shirt")}>TShirt</Checkbox></MenuItem>
                            <MenuItem><Checkbox onChange={handleChange}value={"shoes"} isChecked={category.includes("shoes")}>Sneaker</Checkbox></MenuItem>
                            <MenuItem><Checkbox onChange={handleChange}value={"jacket"} isChecked={category.includes("jacket")}>Winter Jacket</Checkbox></MenuItem>
                            <MenuItem><Checkbox>Sandals</Checkbox></MenuItem>
                            <MenuItem><Checkbox>Sweater</Checkbox></MenuItem>
                            <MenuItem><Checkbox>Top</Checkbox></MenuItem>
                            <MenuItem><Checkbox>Pant</Checkbox></MenuItem>
                        </Grid>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton rightIcon={<ChevronDownIcon />}
             
                        px={4}
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
                        py={2}
                        transition='all 0.1s'
                        borderRadius='md'
                        borderWidth='1px' >
                        
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

                            px={4}
                            py={2}
                            transition='all 0.1s'
                            borderRadius='md'
                            borderWidth='1px'
                        >
                            <Flex justify="space-between" alignItems="center"><Text>Product Type</Text><ChevronDownIcon /></Flex>
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
            <Flex justify="space-between" alignItems="center" pl="40px" pr="40px" >
                <Text>Showing: Products</Text>
                <Select onChange={handleOrder} placeholder='Select option' w="250px" _focus={{ outline: 'none', border: 'none' }} border={'none'} ouline='none'>
                    <option value='desc'>Price High To Low</option>
                    <option value='asc'>Price Low To High</option>
                    <option value='option3'>Discount Low To High</option>
                    <option value='alphaone'>New Arrival</option>
                    <option value='alphaone'>Most Popular</option>
                </Select>
            </Flex>

        </Flex>
    )
}
export default FilterPage;