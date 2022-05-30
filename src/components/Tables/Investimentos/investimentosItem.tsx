import NextLink from "next/link";
import { useState } from "react";
import {
   Box,
   Button,
   Checkbox,
   Flex,
   HStack,
   Link,
   Popover,
   PopoverBody,
   PopoverCloseButton,
   PopoverContent,
   PopoverHeader,
   PopoverTrigger,
   Td,
   Text,
   Tr,
   useBreakpointValue,
   VStack
} from "@chakra-ui/react";
import {
   RiLineChartLine,
   RiPantoneFill,
   RiBarChartGroupedLine,
   RiMoneyDollarCircleLine,
   RiUserLocationLine,
   RiCheckboxBlankLine
} from "react-icons/ri";

import { Iinvestimentos } from "../../Investimentos";


interface UserItemProps {
   user: Iinvestimentos;
   isChecked: (id: number) => boolean;
   onChangeCheckbox: (checked: boolean, id: number) => void;
   onDelete: (id: number) => Promise<void>;
}

export function UserItem({
   user,
   isChecked,
   onChangeCheckbox,
   onDelete
}: UserItemProps) {
   const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);
   const isWideVersion = useBreakpointValue<boolean>({
      base: false,
      lg: true
   });

   return (
      <Tr>
         <Td px={["4", "4", "6"]}>
            <Checkbox
               colorScheme="blue"
               isChecked={isChecked(user.id)}
               onChange={ev => onChangeCheckbox(ev.target.checked, user.id)}
            />
         </Td>
         <Td>
            <Box>
               <Popover onOpen={() => { }}>
                  <PopoverTrigger>
                     <Link color="blue.200">
                        <Text fontWeight="bold">{user.name}</Text>
                     </Link>
                  </PopoverTrigger>
                  <PopoverContent
                     bg="gray.900"
                     borderColor="transparent"
                     boxShadow="2xl"
                     minW="900px"
                     minH="400px"
                  >
                     <PopoverCloseButton />
                     <PopoverHeader border="0" pt='2rem'>
                        <Flex align="center" w="100%" justify="space-around">
                           <Text
                              textTransform="uppercase"
                              fontSize="35px"
                              fontWeight="bold"
                           >
                              {user.name}
                           </Text>
                           <HStack>
                              <NextLink key={user.id} href={`dashboard/list/${user.id}`}>
                                 <Button
                                    as="a"
                                    size="sm"
                                    fontSize="15px"
                                    colorScheme="blue"
                                    cursor="pointer"
                                    w="6rem"
                                    h='3rem'
                                 >
                                    Saber mais
                                 </Button>
                              </NextLink>
                           </HStack>
                        </Flex>
                     </PopoverHeader>
                     <PopoverBody border="0">
                        <HStack align="center" w="100%" justify="space-around" pt='1rem' >
                           <Flex w='100%' pl='2rem'>
                              <Text
                                 color="gray.400"
                                 fontWeight="bold"
                              >
                                 Alvo Minímo:
                              </Text>
                              <Text> R${user.alvo_minimo}</Text>
                           </Flex>
                           <Flex w="100%">
                              <Text
                                 color="gray.400"
                                 fontWeight="bold"
                              >
                                 Alvo Máximo:
                              </Text>
                              <Text> R${user.alvo_maximo}</Text>
                           </Flex>
                           <Flex w="50%">
                              <Text
                                 color="gray.400"
                                 fontWeight="bold"
                              >
                                 Valor mínimo:
                              </Text>
                              <Text> R${user.valor_minimo}</Text>
                           </Flex>
                        </HStack>
                        <VStack pb='2rem' pt='2rem' pl='2rem' fontSize="14px">
                           <Flex align="center" w="100%">
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiBarChartGroupedLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='1rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Rentabilidade alvo (TIR)
                                 </Text>
                                 <Text m='0px'>{user.rentabilidade_alvo}% ao ano</Text>
                              </VStack>
                           </Flex>
                           <Flex align="center" w="100%" pt='1rem'>
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiMoneyDollarCircleLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='1rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Pagamentos Projetados
                                 </Text>
                                 <Text m='0px'>{user.pagamentos_projetados}</Text>
                              </VStack>
                           </Flex>
                           <Flex align="center" w="100%" pt='1rem'>
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiPantoneFill fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='1rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Modalidade
                                 </Text>
                                 <Text m='0px'>{user.modalidade}</Text>
                              </VStack>
                           </Flex>
                           <Flex align="center" w="100%" pt='1rem'>
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiLineChartLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='1rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Participação
                                 </Text>
                                 <Text m='0px'>{user.participacao}%</Text>
                              </VStack>
                           </Flex>
                        </VStack>
                     </PopoverBody>
                     <Box
                        pt='2rem'
                        bg="blue.800"
                        boxShadow="2xl"
                        minW="200px"
                        minH="120px"
                     >
                        <HStack align="center" w="100%" justify="space-around">
                           <Flex w="40%" ml='2rem'>
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiCheckboxBlankLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='0.5rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Oportunidades
                                 </Text>
                                 <Text m='0px'>{user.oportunidade}</Text>
                              </VStack>
                           </Flex>
                           <Flex w="40%">
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiUserLocationLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='0.5rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"

                                 >
                                    Setor
                                 </Text>
                                 <Text m='0px'>{user.setor}</Text>
                              </VStack>
                           </Flex>
                           <Flex w="30%">
                              <Box bg="#3B5998" inline="block" p="10px" rounded="full">
                                 <RiMoneyDollarCircleLine fontSize="30px" />
                              </Box>
                              <VStack align="left" pl='0.5rem'>
                                 <Text
                                    color="gray.400"
                                    fontWeight="bold"
                                 >
                                    Valor Cota
                                 </Text>
                                 <Text m='0px'>R${user.valor_minimo}</Text>
                              </VStack>
                           </Flex>
                           <Flex w="15%">
                              <Box bg="#ffff" inline="block" p="15px" w="80px" rounded="full" border="green">
                                 <VStack >
                                    <Text color="black" fontWeight="bold" m='0px'>{user.participacao}%</Text>
                                    <Text
                                       color="black"
                                       fontWeight="bold"
                                    >
                                       Captado
                                    </Text>
                                 </VStack>
                              </Box>
                           </Flex>
                        </HStack>
                     </Box>
                  </PopoverContent>
               </Popover>
               <Text fontSize="sm" color="gray.300">
                  {user.descricacao}
               </Text>
            </Box>
         </Td>
         {isWideVersion && <Td>{user.captado}</Td>}
         {isWideVersion && <Td>{user.reservado}</Td>}
         {isWideVersion && <Td>{user.objetivo}MM</Td>}
         <Td>
            {isWideVersion && (
               <NextLink key={user.id} href={`dashboard/list/${user.id}`}>
                  <Button
                     as="a"
                     size="sm"
                     fontSize="sm"
                     colorScheme="blue"
                     cursor="pointer"
                     w="140px"
                  >
                     Saber mais
                  </Button>
               </NextLink>
            )}
         </Td>
      </Tr >
   );
}
