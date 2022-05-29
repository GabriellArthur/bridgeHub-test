import NextLink from "next/link";
import { useState } from "react";
import {
   Box,
   Button,
   Flex,
   Heading,
   Icon,
   keyframes,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UsersTable } from "../../components/Tables/Investimentos";

const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

export default function UserList() {
   const [page, setPage] = useState(1);

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">
                     Investimentos
                  </Heading>
               </Flex>

               <>
                  <UsersTable />
                  <Pagination
                     registersPerPage={10}
                     onPageChange={setPage}
                     totalCountOfRegisters={1000}
                     currentPage={page}
                  />
               </>
            </Box>
         </Flex>
      </Box>
   );
}
