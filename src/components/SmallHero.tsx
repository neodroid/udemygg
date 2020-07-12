import { Flex, Heading } from '@chakra-ui/core'

export const SmallHero = ({ title }) => (
    
  <Flex justifyContent="center" alignItems="center" height="90vh">
    <Heading fontSize="9vw" color="#FF6666">Udemy</Heading>
    <Heading fontSize="9vw">Murah</Heading>
    <Flex fontSize="2vw"> by LesMurah.com </Flex>
    {/* <Flex as="footer" py="8rem"  > */}

  </Flex>
)

SmallHero.defaultProps = {
  title: 'with-chakra-ui',
}
