import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "../Logo";


import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";
import { RiMenuLine } from "react-icons/ri";
import { ButtonsNav } from './buttonsNav'

export function HeaderHome() {
   const { onOpen } = useSidebarDrawer();

   const isWideVersion = useBreakpointValue<boolean>({
      base: false,
      lg: true
   });

   return (
      <Flex
         as="header"
         w="100%"
         maxW={1480}
         h="20"
         mx="auto"
         mt="4"
         align="center"
         px="6"
      >
         {!isWideVersion && (
            <IconButton
               icon={<Icon as={RiMenuLine} />}
               variant="unstyled"
               onClick={onOpen}
               fontSize={24}
               mr={2}
               aria-label="Open navigation"
            />
         )}
         <Logo />

         <Flex align="center" ml="auto">
            <ButtonsNav />
         </Flex>
      </Flex>
   );
}
