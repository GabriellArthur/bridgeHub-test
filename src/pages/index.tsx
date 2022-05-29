import { Flex, } from "@chakra-ui/react";
import { HeaderHome } from "../components/HeaderHome";
import { SidebarHome } from "../components/SidebarHome";

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
               <SidebarHome />
            </Flex>
         </Flex>
      </>
   );
}
