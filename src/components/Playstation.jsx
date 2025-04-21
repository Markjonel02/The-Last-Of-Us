import React from "react";
import pl from "../assets/img/Banner/playstation (1).png";
import bg from "../assets/img/Banner/Tlous banner.png";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const Playstation = () => {
  return (
    <>
      {/* Main Flex Container */}
      <Flex
        position="relative"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        direction="column"
      >
        {/* Background Image with Overlay */}
        <Box
          bg={`url(${bg})`}
          bgSize={{ base: "contain", md: "contain", lg: "cover" }}
          bgRepeat="no-repeat"
          bgPosition="cover"
          position="absolute"
          top={0}
          width="100%"
          height="500px"
          zIndex={-1}
        />

        {/* PlayStation Image Absolutely Positioned */}
        <Image
          src={pl}
          alt="PlayStation 5 and DualSense Controller"
          position="relative"
          top={{ base: "-30%", md: "0", lg: "20%" }}
          width={{ base: "100%", md: "70%" }}
          height="auto"
          data-aos="fade-up"
          data-aos-dleay="150"
          data-aos-anchor-placement="top-bottom"
        />
      </Flex>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        flexDirection="column"
        mb={20}
      >
        <Text
          fontSize={{ base: "2em", md: "2.3em" }}
          fontWeight="bold"
          letterSpacing={2}
          mb={5}
          data-aos="fade-up"
          data-aos-dleay="100"
        >
          Their story is your story on PlayStation®5
        </Text>
        <Text
          fontSize={{ base: "0.9em", md: "1em" }}
          color="blackAlpha.900"
          w="70%"
          textAlign={"left"}
          letterSpacing={1}
          data-aos="fade-up"
          data-aos-dleay="150"
        >
          Enhanced by PS5, Part I is rebuilt from the ground up with advanced
          visual fidelity, while Part II Remastered has increased texture
          resolution, increased Level&#x2010;of&#x2010;Detail distances,
          improved shadow quality and animation sampling rate. Both games make
          full use of the DualSense® wireless controller to make weapons feel
          distinct and convey an increased sense of presence in your
          surroundings.
        </Text>
      </Box>
    </>
  );
};

export default Playstation;
