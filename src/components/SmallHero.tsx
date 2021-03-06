import { Flex, Heading } from '@chakra-ui/core'
import { Container } from './Container'

export const SmallHero = ({ title }) => (
    
        <Flex justifyContent="center" alignItems="center" height="90vh">
      
      <Heading fontSize="9vw" color="#FF6666">Udemy</Heading>
      <Heading fontSize="9vw">Murah</Heading>
      
      {/* <Flex as="footer" py="8rem"  > */}
      <Flex fontSize="2vw"> by LesMurah.com </Flex>
    
    </Flex>
    
  
)

SmallHero.defaultProps = {
  title: 'with-chakra-ui',
}
