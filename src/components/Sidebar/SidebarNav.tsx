import { Stack } from "@chakra-ui/react";
import {
   RiDashboardLine,
   RiBarChartGroupedFill
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
   return (
      <Stack spacing="12" align="flex-start">
         <NavSection title="Geral">
            <NavLink title="Rendimentos" icon={RiBarChartGroupedFill} href="/income" />
            <NavLink title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
         </NavSection>
      </Stack>
   );
}
