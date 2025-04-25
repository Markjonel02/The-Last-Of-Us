import React from "react";
import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { featuresData } from "../components/utils/KeyfeaturesTab";
const Keyfeatures = () => {
  return (
    <Flex direction="column" alignItems="center" py="5" bg="#121314ff">
      <Box className="title" maxW="800px" mb="6" px="4">
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
          mb="4"
        >
          Why you should play The Last of Us Part II Remastered
        </Text>
        <Text
          as="p"
          fontSize="0.9em"
          color="whiteAlpha.700"
          letterSpacing={1}
          textAlign="center"
        >
          Experience an array of technical enhancements that make The Last of Us
          Part II Remastered the definitive way to play Ellie and Abby&apos;s
          critically acclaimed story.
        </Text>
      </Box>

      <Box className="cards" maxW="1000px" w="100%" px="6">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} gap={20}>
          {featuresData.map((data, index) => (
            <Box
              key={index}
              bg="#1e1f20"
              p="5"
              borderRadius="lg"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <Image
                src={data.image}
                alt={data.title}
                mb="3"
                data-aos="fade-up"
                data-aos-delay="100"
                borderRadius={10}
              />
              <Text
                fontWeight="normal"
                fontSize="1.1em"
                color="white"
                mb="2"
                letterSpacing={1}
              >
                {data.title}
              </Text>
              <Text
                fontSize="0.9em"
                color="whiteAlpha.700"
                textAlign="left"
                letterSpacing={1}
              >
                {data.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Keyfeatures;
