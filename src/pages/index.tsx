import { Box, Flex, Text, } from "@chakra-ui/react";
import { HeaderHome } from "../components/HeaderHome";
import { Sidebar } from "../components/Sidebar";

import Header from 'next/head';

export default function Home() {

   return (
      <>
         <Header>
            <title>Home</title>
         </Header>

         <Flex direction="column" h="100vh">
            <HeaderHome />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
               <Sidebar />
               <Box flex="1" borderRadius={8} bg="gray.800">
                  <Text m='10px'>
                     Para que o menu "Investimentos" apareça, é necessario que faça login.
                  </Text>
                  <Text m='10px'>
                     Uma vez que faça o login, ira armazenar o seu Token no navegador, assim sempre que entrar no site permanecerar logado
                  </Text>
                  <Text m='10px'>
                     Lembrando que para aparecer todos os investimentos é necessario que esteja logado
                  </Text>
                  <Text m='10px'>
                     Os dados no banco para fazer login:
                  </Text>
                  <Text fontWeight="bold" my='2px' mx="10px">
                     administrador@bridge.net
                  </Text>
                  <Text fontWeight="bold" my='2px' mx="10px">
                     admin
                  </Text>
               </Box>
            </Flex>
         </Flex>
      </>
   );
}
