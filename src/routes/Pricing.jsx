import { Box, Button, Card, Image, Text, VStack } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Card maxW="sm" overflow="hidden" p="4">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
      />
      <VStack align="start" spacing="2" mt="4">
        <Text fontSize="lg" fontWeight="bold">
          Living room Sofa
        </Text>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque-inspired
          spaces.
        </Text>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          $450
        </Text>
      </VStack>
      <Box mt="4" display="flex" justifyContent="space-between" gap="2">
        <Button variant="solid" colorScheme="blue">
          Buy now
        </Button>
        <Button variant="ghost">Add to cart</Button>
      </Box>
    </Card>
  );
};

export default Pricing;
