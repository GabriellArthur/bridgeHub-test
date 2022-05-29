import NextLink from "next/link";
import {
   Box,
   Button,
   Checkbox,
   Flex,
   HStack,
   Input,
   Popover,
   PopoverBody,
   PopoverCloseButton,
   PopoverContent,
   PopoverHeader,
   PopoverTrigger,
   Text,
   useToast,
   VStack,
} from "@chakra-ui/react";
import { RiBarChartGroupedLine, RiCheckboxBlankLine, RiLineChartLine, RiMoneyDollarCircleLine, RiPantoneFill, RiUserLocationLine } from "react-icons/ri";

import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";

import { investimentos } from "../../../components/Investimentos";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";


export default function Investimento({ id }) {

   const toast = useToast();

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Box border="0" pt='2rem'>
                  <Flex align="center" w="100%" justify="space-around">
                     <Text
                        textTransform="uppercase"
                        fontSize="35px"
                        fontWeight="bold"
                     >
                        {investimentos[id].name}
                     </Text>
                     <Popover onOpen={() => { }}>
                        <PopoverTrigger>
                           <HStack>
                              <Button
                                 as="a"
                                 size="sm"
                                 fontSize="15px"
                                 colorScheme="blue"
                                 cursor="pointer"
                                 w="6rem"
                                 h='3rem'
                              >
                                 Investir
                              </Button>
                           </HStack>
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
                                    color="blue.600"
                                    fontSize="30px"
                                    fontWeight="bold"
                                 >
                                    Investimento
                                 </Text>
                              </Flex>
                           </PopoverHeader>
                           <PopoverBody border="0">
                              <Flex align="center" w="100%" pt='1rem' justify="space-around">
                                 <HStack align="left" pl='1rem'>
                                    <Text
                                       fontSize="20px"
                                    >
                                       Pronto para essa experiência,
                                    </Text>
                                    <Text m='0px' fontSize="20px" color="blue.600">Gabriel Arthur</Text>
                                    <Text fontSize="20px"> ?</Text>
                                 </HStack>
                              </Flex>

                              <Flex align="center" w="100%" pt='2rem'>
                                 <HStack align="left" pl='1rem'>
                                    <Text
                                       fontSize="18px"
                                    >
                                       O valor a ser investido deve ser múltiplo de
                                    </Text>
                                    <Text m='0px' fontSize="18px" color="blue.400">R$ {investimentos[id].valor_minimo}</Text>
                                 </HStack>
                              </Flex>
                              <Flex align="center" w="100%" pt='1rem'>
                                 <Input
                                    name="quantity"
                                    label="quantidade"
                                    type="quantity"
                                 />
                              </Flex>

                              <Flex align="center" w="100%" pt='2rem'>
                                 <HStack align="left" pl='1rem'>
                                    <Checkbox
                                       defaultChecked
                                       colorScheme="blue"
                                    />
                                    <Text fontSize="18px">
                                       Declaro que concordo com o
                                    </Text>
                                    <Text m='0px' fontSize="18px" color="blue.400">documento</Text>
                                    <Text fontSize="18px">
                                       de ciência de risco do investimento
                                    </Text>
                                 </HStack>
                              </Flex>

                              <Flex align="center" w="100%" justify="space-around">
                                 <NextLink href={`/dashboard`}>
                                    <Button
                                       type="submit"
                                       mt="10"
                                       colorScheme="blue"
                                       size="lg"
                                       onClick={() =>
                                          toast({
                                             title: "Parabéns, agora você é sócio desta empresa!",
                                             status: "success"
                                          })
                                       }
                                    >
                                       Investir
                                    </Button>
                                 </NextLink>
                              </Flex>
                           </PopoverBody>
                        </PopoverContent>
                     </Popover>
                  </Flex>
               </Box>
               <Box border="0">
                  <HStack align="center" w="100%" justify="space-around" pt='1rem' >
                     <Flex w='100%' pl='2rem'>
                        <Text
                           color="gray.400"
                           fontWeight="bold"
                        >
                           Alvo Minímo:
                        </Text>
                        <Text> R${investimentos[id].alvo_minimo}</Text>
                     </Flex>
                     <Flex w="100%">
                        <Text
                           color="gray.400"
                           fontWeight="bold"
                        >
                           Alvo Máximo:
                        </Text>
                        <Text> R${investimentos[id].alvo_maximo}</Text>
                     </Flex>
                     <Flex w="50%">
                        <Text
                           color="gray.400"
                           fontWeight="bold"
                        >
                           Valor mínimo:
                        </Text>
                        <Text> R${investimentos[id].valor_minimo}</Text>
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
                           <Text m='0px'>{investimentos[id].rentabilidade_alvo}% ao ano</Text>
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
                           <Text m='0px'>{investimentos[id].pagamentos_projetados}</Text>
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
                           <Text m='0px'>{investimentos[id].modalidade}</Text>
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
                           <Text m='0px'>{investimentos[id].participação}%</Text>
                        </VStack>
                     </Flex>
                  </VStack>
               </Box>
               <Box
                  pt='1.3rem'
                  bg="blue.800"
                  boxShadow="2xl"
                  minW="200px"
                  minH="120px"
                  rounded="1rem"
               >
                  <HStack align="center" w="100%" justify="space-around">
                     <Flex w="40%" ml='2rem'>
                        <Box bg="#3B5998" inline="block" p="13px" rounded="full">
                           <RiCheckboxBlankLine fontSize="30px" />
                        </Box>
                        <VStack align="left" pl='0.5rem'>
                           <Text
                              color="gray.400"
                              fontWeight="bold"
                           >
                              Oportunidades
                           </Text>
                           <Text m='0px'>{investimentos[id].oportunidade}</Text>
                        </VStack>
                     </Flex>
                     <Flex w="40%">
                        <Box bg="#3B5998" inline="block" p="13px" rounded="full">
                           <RiUserLocationLine fontSize="30px" />
                        </Box>
                        <VStack align="left" pl='0.5rem'>
                           <Text
                              color="gray.400"
                              fontWeight="bold"

                           >
                              Setor
                           </Text>
                           <Text m='0px'>{investimentos[id].setor}</Text>
                        </VStack>
                     </Flex>
                     <Flex w="30%">
                        <Box bg="#3B5998" inline="block" p="13px" rounded="full">
                           <RiMoneyDollarCircleLine fontSize="30px" />
                        </Box>
                        <VStack align="left" pl='0.5rem'>
                           <Text
                              color="gray.400"
                              fontWeight="bold"
                           >
                              Valor Cota
                           </Text>
                           <Text m='0px'>R${investimentos[id].valor_minimo}</Text>
                        </VStack>
                     </Flex>
                     <Flex w="15%">
                        <Box bg="#ffff" inline="block" p="10px" w="80px" rounded="full" border="green">
                           <VStack >
                              <Text color="black" fontWeight="bold" m='0px'>{investimentos[id].participação}%</Text>
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
            </Box>
         </Flex >
      </Box >
   );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
   const { query } = useRouter();

   const id = Number(query.id);
   return {
      props: {
         id,
      }
   }
}