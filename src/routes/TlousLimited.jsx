import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import imagebg from "../assets/img/Banner/the-last-of-us-dualsense-controller-background-desktop-01-en-03mar25.jpg";
import Ps5 from "../assets/img/Banner/Ps5.png";

const TlousLimited = () => {
  return (
    <Flex
      justifyContent="space-between"
      bgImage={`url(${imagebg})`} // Background image
      bgSize="cover"
      flexDirection={{ base: "column", md: "row" }}
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        className="Left"
        flexDirection="column"
        flex="1"
        color="white"
        p="1em 2em"
      >
        <Box className="image-up">
          <Image src="" />
        </Box>

        <Text fontSize="3em" mb={10}>
          DualSense® Wireless Controller – The Last of Us Limited Edition
        </Text>
        <Text fontSize="1.5em" letterSpacing={1}>
          Escape the Infected with this limited&#x2010;edition controller,
          featuring glossy trophy icons – from both installments of The Last of
          Us™ – printed across its surface.
        </Text>
      </Box>
      <Box className="Right" flex="1">
        <Box className="image-right">
          <Image src={Ps5} />
        </Box>
      </Box>
    </Flex>
  );
};

export default TlousLimited;
