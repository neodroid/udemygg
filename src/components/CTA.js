import { Link as ChakraLink, Button } from '@chakra-ui/core'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" variantColor="green">
        Home
      </Button>
    </ChakraLink>

    <ChakraLink
     
      isExternal
      href="https://wa.me/6281359098451?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20Udemy%20yang%20dijual"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid" variantColor="green">
        Beli
      </Button>
    </ChakraLink>
  </Container>
)
