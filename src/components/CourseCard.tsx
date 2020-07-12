
import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon} from '@chakra-ui/core'
import { Badge } from "reactstrap";


export const CourseCard = (props) => {
  const property = {
    

    imageUrl: props.img,
    imageAlt: props.imgAlt,
    bintang: props.star,
    baths: 2,
    title: props.title,
    formattedPrice: props.price,
    reviewCount: props.review,
    rating: 4,

  };

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" m={2} >
      <img src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            Rp.25.000- hanya di @UdemyMurah.id
          </Badge>
          
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
         // isTruncated
        >
          {property.title}
        </Box>

        
          
          <Box as="span" color="gray.600" fontSize="sm">
            Harga Asli (USD) : ${property.formattedPrice}
          </Box>
          
        

        <Box d="flex" mt="2" alignItems="center">
          
          

          {/* <Box  color="orange.400" /> */}
          <Icon name="star" color="orange.400" />
          <Box as="span"  color="gray.600" fontSize="sm">
            {property.bintang} ( {property.reviewCount} reviews )
          </Box>
          
          
          
        </Box>
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
      </Box>
      
    </Box>
  );
};

//https://wa.me/6281359098451?text=Halo%20min!%20Saya%20tertarik%20dengan%20Course%20Udemy%20yang%20dijual
