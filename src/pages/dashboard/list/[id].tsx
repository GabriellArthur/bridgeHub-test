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
import { RiBarChartGroupedLine, RiCheckboxBlankLine, RiLineChartLine, RiMoneyDollarCircleLine, RiPantoneFill, RiUserLocationLine, RiFileTextLine, RiFileDownloadLine } from "react-icons/ri";

import { Header as HeaderComponent } from "../../../components/Header";
import Header from 'next/head';
import { Sidebar } from "../../../components/Sidebar";

import { investimentos } from "../../../components/Investimentos";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";
import { options } from '../../income'
const Chart = dynamic(() => import("react-apexcharts"), {
   ssr: false
});

const series1 = [{ name: "series1", data: [40, 60, 50, 70, 151, 80, 180] }];
const series2 = [{ name: "series2", data: [50, 60, 50, 30, 60, 70, 80] }];

interface IInvestimento {
   id: number;
}

export default function Investimento({ id }: IInvestimento) {
   const router = useRouter();
   id = Number(router.query.id) || 1;

   const toast = useToast();

   return (
      <>
         <Header>
            <title>{investimentos[id].name}</title>
         </Header>

         <Box>
            <HeaderComponent />

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
                  <Box
                     mt='1.3rem'
                     minW="200px"
                     minH="120px"
                     rounded="1rem"
                  >
                     <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
                        <Text fontSize="lg" mb="4">
                           Rendimentos da semana
                        </Text>
                        <Chart type="area" height={160} options={options} series={series1} />
                     </Box>

                     <Box mt="2px" p={["6", "8"]} bg="gray.800" borderRadius={8} mb={{
                        base: "4",
                        lg: 0
                     }}>
                        <Text fontSize="lg" mb="4">
                           Taxa de rendimento
                        </Text>
                        <Chart type="area" height={160} options={options} series={series2} />
                     </Box>
                  </Box>
                  <Box
                     mt='1.3rem'
                     pt='1.2rem'
                     bg="blue.800"
                     boxShadow="2xl"
                     minW="200px"
                     minH="120px"
                     rounded="1rem"
                  >
                     <HStack align="center" w="100%" justify="space-around">
                        <Box ml='2rem' bg="#3B5998" inline="block" p="13px" w="60px" rounded="full">
                           <RiFileTextLine fontSize="30px" />
                        </Box>
                        <Flex w="100%" ml='2rem'>
                           <VStack align="left" pl='0.5rem'>
                              <Text
                                 color="gray.400"
                                 fontWeight="bold"
                              >
                                 Descrição
                              </Text>
                              <Text m='0px'>A marca Bose é gastrobar do grupo BOSE&CO,sendo uma referência em bares e restaurantes trás uma grande oportunidade de investimento para os anos de 2020 a 2050</Text>
                           </VStack>
                        </Flex>
                     </HStack>
                  </Box>

                  <Box
                     mt='1.3rem'
                     pt='2rem'
                     bg="blue.800"
                     boxShadow="2xl"
                     minW="200px"
                     minH="120px"
                     rounded="1rem"
                  >
                     <HStack align="center" w="100%" justify="space-around">
                        <Box ml='2rem' bg="#3B5998" inline="block" p="13px" rounded="full">
                           <RiFileDownloadLine fontSize="30px" />
                        </Box>
                        <Flex w="100%" ml='2rem'>
                           <VStack align="left" pl='0.5rem'>
                              <Text
                                 color="gray.400"
                                 fontWeight="bold"
                              >
                                 Download
                              </Text>
                              <HStack align="">
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 1</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 2</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 3</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 4</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 5</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 6</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 7</Text>
                                 <Text color="blue.400" fontWeight="bold" m='0px'>Arquivo 8</Text>
                              </HStack>
                           </VStack>
                        </Flex>
                     </HStack>
                  </Box>
               </Box>
            </Flex >
         </Box >
      </>
   );
}