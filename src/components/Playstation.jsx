import React from "react";
import pl from "../assets/img/Banner/playstation (1).png";
import bg from "../assets/img/Banner/Tlous banner.png";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Playstation = () => {
  return (
    <Flex
      position="relative"
      height="100vh" // Makes the section fill the viewport height
      justifyContent="center" // Centers content horizontally
      alignItems="center" // Centers content vertically
      overflow="hidden" // Prevents overflow of elements
    >
      {/* Background Image with Overlay */}
      <Box
        bg={`url(${bg})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="contain"
        position="absolute"
        top={0}
        width="100%"
        height="500px"
      />

      {/* PlayStation Image Absolutely Positioned */}
      <Image
        src={pl}
        alt="PlayStation 5 and DualSense Controller"
        position="absolute" // Makes the image positioned absolutely
        top={{ base: "20%", md: "48%" }} // Offset from the top
        left={{ base: "10%", md: "15%" }} // Offset from the left
        width={{ base: "40%", md: "70%" }} // Responsive size for the image
        height="auto"
        zIndex={1} // Ensures it appears above the background
      />

      {/* Descriptive Text */}
      <Box>
        <Text as="h1">BOBO</Text>
      </Box>
    </Flex>
  );
};

export default Playstation;
