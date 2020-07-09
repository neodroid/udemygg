import { Flex, useColorMode, Box,Button } from "@chakra-ui/core";
import { Badge } from "reactstrap";

export const CourseCard = (props) => {
  const property = {
    

    imageUrl: props.img,
    imageAlt: props.imgAlt,
    beds: props.star,
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
            @UdemyMurah.id
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
            Real Price : $
          </Box>
          {property.formattedPrice}
        

        <Box d="flex" mt="2" alignItems="center">
          
          <Box>
            
          <Box as="span"  color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
          
          </Box>
          
        </Box>
        <Button width="100%" variant="solid" variantColor="green" >
        BUY
      </Button>
      </Box>
      
    </Box>
  );
};
