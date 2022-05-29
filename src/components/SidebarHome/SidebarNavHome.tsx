import { Stack } from "@chakra-ui/react";
import {
   RiContactsLine,
   RiDashboardLine,
   RiBarChartGroupedFill,
   RiTodoFill,
   RiCurrencyFill,
   RiMoreFill,
   RiMenu4Fill
} from "react-icons/ri";

import { NavLinkHome } from "./NavLinkHome";
import { NavSectionHome } from "./NavSectionHome";

export function SidebarNavHome() {
   return (
      <Stack spacing="12" align="flex-start">
         <NavSectionHome title="">
            <NavLinkHome title="Sobre nós" icon={RiTodoFill} href="/about" />
            <NavLinkHome title="Produtos" icon={RiDashboardLine} href="/products" />
            <NavLinkHome title="Investimentos" icon={RiBarChartGroupedFill} href="/income" />
            <NavLinkHome title="Investir" icon={RiCurrencyFill} href="/invest" />
            <NavLinkHome title="Captar" icon={RiContactsLine} href="/capture" />
            <NavLinkHome title="Conteúdos" icon={RiMenu4Fill} href="/contents" />
            <NavLinkHome title="Mais" icon={RiMoreFill} href="/most" />
         </NavSectionHome>
      </Stack>
   );
}
