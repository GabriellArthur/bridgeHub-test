import { ReactNode } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";

interface NavSectionProps {
   title: string;
   children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
   return (
      <Box>
         <Text
            fontWeight="bold"
            fontSize="small"
            textTransform="uppercase"
         >
            {title}
         </Text>
         <Stack spacing="4" mt="8" align="stretch">
            {children}
         </Stack>
      </Box>
   );
}
