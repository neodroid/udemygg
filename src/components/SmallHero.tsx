import { Flex, Heading } from '@chakra-ui/core'

export const SmallHero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="5vw">{title}</Heading>
  </Flex>
)

SmallHero.defaultProps = {
  title: 'with-chakra-ui',
}
