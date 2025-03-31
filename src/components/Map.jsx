import React from "react";
import Maps from "../assets/img/PineTools.com_Map.png";
import { Box, Image, Text, Flex } from "@chakra-ui/react";

const Map = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      h="100vh"
      backgroundColor={"#0f0f0fff"}
      position="relative" // Necessary for stacking layers
    >
      {/* Background layer */}
      <Box
        backgroundColor="black"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        zIndex={0} // Ensures it's the bottom-most layer
      />

      {/* Floating "MAPS" title */}
      <Box zIndex={1} mb={6}>
        <Text
          fontSize="8xl"
          letterSpacing={6}
          color="white"
          fontWeight="bold"
          textAlign="center"
        >
          MAPS
        </Text>
      </Box>

      {/* Floating map image */}
      <Box zIndex={1} borderRadius="lg" padding="10px">
        <Image
          src={Maps}
          width="800px"
          height={{ base: "400px", sm: "300px" }}
          alt="Last of Us Map"
          borderRadius="md"
          filter="invert(1)"
        />
      </Box>
    </Flex>
  );
};

export default Map;
