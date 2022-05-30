import { ChangeEvent, useState } from "react";
import {
   Button,
   Checkbox,
   Icon,
   Table,
   Tbody,
   Th,
   Thead,
   Tr,
   useBreakpointValue
} from "@chakra-ui/react";

import { UserItem } from "./investimentosItem";
import { Iinvestimentos, investimentos } from "../../Investimentos/";

interface InvestimentosTableProps {
   investimentos: Iinvestimentos[];
}

export function UsersTable({investimentos}:InvestimentosTableProps) {

   const deleteUser = {};

   const [selectedUsersToDelete, setSelectedUsersToDelete] = useState<number[]>(
      []
   );
   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
   const isWideVersion = useBreakpointValue<boolean>({
      base: false,
      lg: true
   });

   function handleChangeSelectAllCheckbox(ev: ChangeEvent<HTMLInputElement>) {
      if (ev.target.checked) {
         setSelectedUsersToDelete([...investimentos.map(user => user.id)]);
      } else {
         setSelectedUsersToDelete([]);
      }
   }

   function handleChangeCheckbox(checked: boolean, id: number) {
      if (checked) {
         setSelectedUsersToDelete(prevValues => [...prevValues, id]);
      } else {
         setSelectedUsersToDelete(prevValues =>
            prevValues.filter(value => value !== id)
         );
      }
   }



   function isChecked(id: number) {
      return !!selectedUsersToDelete.find(user => user === id);
   }

   const allChecked = selectedUsersToDelete.length === investimentos.length;
   const isIndeterminate = selectedUsersToDelete.some(Number) && !allChecked;
   const isAnySelected = !!(selectedUsersToDelete.length > 0);

   return (
      <>
         <Table colorScheme="whiteAlpha">
            <Thead>
               <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" w="8">
                     <Checkbox
                        colorScheme="blue"
                        isChecked={allChecked}
                        isIndeterminate={isIndeterminate}
                        onChange={handleChangeSelectAllCheckbox}
                     />
                  </Th>
                  <Th>Nome</Th>
                  {isWideVersion && <Th>Captado</Th>}
                  {isWideVersion && <Th>Reservado</Th>}
                  {isWideVersion && <Th>Objetivo</Th>}
                  <Th width="8">
                     {isAnySelected && (
                        <Button
                           as="a"
                           size="sm"
                           fontSize="sm"
                           colorScheme="green"
                           cursor="pointer"
                           textTransform="none"
                           w="140px"
                           onClick={() => setIsDeleteModalOpen(true)}
                        >
                           Investir em todos
                        </Button>
                     )}
                  </Th>
               </Tr>
            </Thead>
            <Tbody>
               {investimentos.map(item => (
                  <UserItem
                     key={item.id}
                     user={item}
                     isChecked={isChecked}
                     onChangeCheckbox={handleChangeCheckbox}
                     onDelete={function (id: number): Promise<void> {
                        throw new Error("Function not implemented.");
                     }}
                  />
               ))}
            </Tbody>
         </Table>
      </>
   );
}
