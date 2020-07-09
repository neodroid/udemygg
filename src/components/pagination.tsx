//import { Flex, useColorMode, Box,Button ,ChakraLink} from "@chakra-ui/core";
import { Flex, useColorMode, Box,Link as ChakraLink, Button } from '@chakra-ui/core'

import { Container } from './Container'

export const Pagination = () => (
  <Container
    flexDirection="row"
    //position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
      <Button  variant="outline" variantColor="green">
        Prev
      </Button>
    </ChakraLink>
    <Box>Page 1 / 3</Box>

    <ChakraLink
      isExternal
      href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
      flexGrow={3}
      mx={2}
    >
      <Button  variant="solid" variantColor="green">
        Next
      </Button>
    </ChakraLink>
  </Container>
)
