import { CloseButton, Flex, Link, Select, useColorModeValue as mode, Stack, Image, Box, Text, HStack, Icon, Button, Divider, Tooltip, Center } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import AdminEdit from './AdminEdit'
import AdminAdd from './AdminAdd'


const AdminProfile = () => {

    return (
        <Center>
            <Flex direction='column' borderRadius="15px" w='95%' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                <Flex w="100%" borderRadius="15px" mb="20px" justify='space-between'>
                    <Text p='10px' fontWeight="bolder">Admin Profile</Text>

                </Flex>
                <Flex>
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Flex>

            </Flex>
        </Center>
    )
}

export default AdminProfile