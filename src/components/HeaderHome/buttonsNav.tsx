import { Button, HStack, Link } from "@chakra-ui/react";

export function ButtonsNav() {
   return (
      <HStack
         mx={["6", "8"]}
         pr={["6", "8"]}
         py="1"
         color="gray.300"
         borderColor="gray.700"
      >
         <Link href={'/login'}>
            <Button
               type="button"
               colorScheme="gray.900"
               size="lg"
            >
               Entrar
            </Button>
         </Link>
         <Link href={'/login'}>
            <Button
               type="button"
               colorScheme="blue"
               size="lg"
               href="/login"
            >
               Cadastrar-se
            </Button>
         </Link>
      </HStack>
   );
}
