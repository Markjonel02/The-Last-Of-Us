import React from "react";
import pl from "../assets/img/Banner/playstation (1).png";
import bg from "../assets/img/Banner/Tlous banner.png";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const Playstation = () => {
  return (
    <>
      {/* Main Flex Container */}
      <Flex
        position="relative"
        height="100vh" // Makes the section fill the viewport height
        justifyContent="center" // Centers content horizontally
        alignItems="center" // Centers content vertically
        overflow="hidden" // Prevents overflow of elements
        direction="column" // Stacks content vertically
      >
        {/* Background Image with Overlay */}
        <Box
          bg={`url(${bg})`}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgPosition="cover"
          position="absolute"
          top={0}
          width="100%"
          height="500px"
          zIndex={-1} // Positions background behind content
        />

        {/* PlayStation Image Absolutely Positioned */}
        <Image
          src={pl}
          alt="PlayStation 5 and DualSense Controller"
          position="relative"
          top={{ base: "0", md: "20%" }} // Keeps image in default flow
          width={{ base: "40%", md: "70%" }} // Responsive size for the image
          height="auto"
          mb={4} // Adds spacing below the image
        />

        {/* Descriptive Text */}
      </Flex>

      {/* Second Box Below the PlayStation Section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text fontSize={{ base: "1em", md: "1.25em" }} color="blackAlpha.600">
          Explore the award-winning series and experience unforgettable moments
          with Joel and Ellie. Discover more on PlayStation!
        </Text>
      </Box>
    </>
  );
};

export default Playstation;
