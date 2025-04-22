import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
const Keyfeatures = () => {
  return (
    <Flex justifyContent="center" alignItems="center" py="5" bg="#121314ff">
      <Box className="title">
        <Text
          as="p"
          fontSize="0.9em"
          color="#54b2ffff"
          textAlign="center"
          letterSpacing={1}
        >
          keyfeatures
        </Text>
        <Text
          as="h1"
          fontSize="2em"
          color="white"
          textAlign="center"
          letterSpacing={1}
        >
          Why you should play The Last of Us Part II Remastered
        </Text>
        <Text as="p" fontSize="0.9em" color="white" letterSpacing={1}>
          Experience an array of technical enhancements that make The Last of Us
          Part II Remastered the definitive way to play Ellie and Abby&apos;s
          critically acclaimed story.
        </Text>
      </Box>
      <Box></Box>
      <Box></Box>
    </Flex>
  );
};

export default Keyfeatures;
