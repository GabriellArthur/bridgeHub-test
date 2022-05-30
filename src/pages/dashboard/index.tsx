import { useState } from "react";
import {
   Box,
   Button,
   Flex,
   Heading,
   Icon,
   keyframes,
   Spinner,
   Text,
   Tooltip,
} from "@chakra-ui/react";

import { Header as HeaderComponent } from "../../components/Header";
import Header from 'next/head';
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { UsersTable } from "../../components/Tables/Investimentos";
import { useInvestimentos } from "../../services/hooks/useInvestimentos";
import { RiRefreshLine } from "react-icons/ri";

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
   const { data, refetch, isLoading, error, isFetching } = useInvestimentos(page);

   return (
      <>
         <Header>
            <title>Investimentos</title>
         </Header>

         <Box>
            <HeaderComponent />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
               <Sidebar />

               <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                  <Flex mb="8" justify="space-between" align="center">
                     <Heading size="lg" fontWeight="normal">
                        Investimentos
                        {!isLoading && isFetching && (
                           <Spinner size="sm" color="gray.500" ml="4" />
                        )}
                     </Heading>
                     <Tooltip label="Atualizar">
                        <Button
                           size="sm"
                           fontSize="sm"
                           bgColor="gray.700"
                           cursor="pointer"
                           onClick={() => refetch()}
                        >
                           <Icon
                              as={RiRefreshLine}
                              fontSize={20}
                              animation={
                                 !isLoading && isFetching
                                    ? `${spin} 1s infinite linear`
                                    : ""
                              }
                           />
                        </Button>
                     </Tooltip>
                  </Flex>
                  {isLoading ? (
                     <Flex justify="center">
                        <Spinner />
                     </Flex>
                  ) : error ? (
                     <Flex justify="center">
                        <Text>Falha ao obter dados dos investimentos.</Text>
                        <Text>{error.toString()}</Text>
                     </Flex>
                  ) : (
                     <>
                        <UsersTable investimentos={data.investments} />
                        <Pagination
                           registersPerPage={5}
                           onPageChange={setPage}
                           totalCountOfRegisters={data.totalCount}
                           currentPage={page}
                        />
                     </>
                  )}
               </Box>
            </Flex>
         </Box>
      </>
   );
}
