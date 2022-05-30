import { Stack } from "@chakra-ui/react";
import {
   RiDashboardLine,
   RiBarChartGroupedFill,
   RiHome2Line
} from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
   const { user, signOut } = useAuth();
   return (
      <Stack spacing="12" align="flex-start">
         <NavSection title="Geral">
            <NavLink title="Home" icon={RiHome2Line} href="/" />
            {user != undefined ?
               <>
                  <NavLink title="Rendimentos" icon={RiBarChartGroupedFill} href="/income" />
                  <NavLink title="Investimentos" icon={RiDashboardLine} href="/dashboard" />
               </>
               :
               <></>
            }
         </NavSection>
      </Stack>
   );
}
