
import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon, Link, Alert,AlertIcon} from '@chakra-ui/core'
import { Badge } from "reactstrap";


export const MenuCard = (props) => {
  const property = {
    

    imageUrl: props.img,
    imageAlt: props.imgAlt,
    bintang: props.star,
    baths: 2,
    title: props.title,
    formattedPrice: props.price,
    reviewCount: props.review,
    rating: 4,
    link:props.link,

  };

  const birthday = new Date();
  const date1 = birthday.getDate();


  return (
    <Link
    
    href={property.link}
     
  >
    
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={2} backgroundColor="#F7FAFC" borderColor="A0AEC0" >
      <img src={property.imageUrl} alt={property.imageAlt}  />
     
      <Box p="6" >
      
     
        <Box 
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          
          
         // isTruncated
        >
          {property.title} <Icon name="check-circle" color="green.500" />
        </Box>

        
          
          <Box as="span" color="gray.600" fontSize="sm" >
         
            {property.formattedPrice}
          </Box>
          
        

        
        
      
    
      </Box>
      
    </Box>
    </Link>
  );
};

