import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { tabData } from "../utils/Tabdata";

const MotionBox = motion(Box);

const Tlous4 = ({ isActive }) => {
  const firstTab = tabData[3];

  return (
    <Box position="relative" width="100%" height="100%">
      {/* Background Image */}
      <Image
        src={firstTab.banner}
        alt={firstTab.name}
        width="100%"
        height="100%"
        objectFit="cover"
      />

      {isActive && (
        <MotionBox
          position="absolute"
          color="white"
          padding="20px"
          borderRadius="8px"
          left="5%"
          top={{ base: "5%", md: "30%" }}
          transform="translateY(-50%)"
          maxWidth="50%"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Additional text below */}
          <Text
            as="h1"
            fontSize={{ base: "1em", md: "2em", lg: "3em", xl: "5.8em" }}
            fontWeight="bold"
            letterSpacing={3}
            lineHeight={{ base: "none", md: 1.2 }}
            whiteSpace={{
              base: "none",
              md: "none",
              xl: "none",
              xxl: "pre-line",
            }}
          >
            {firstTab.title.substring(0, 15)}
            {"\n"}
            <Text as="span">
              {/* Second part in red */}
              {firstTab.title.substring(15)}
            </Text>
          </Text>

          {/* Additional text below */}
          <Text
            as="p"
            fontSize={{ base: "15px", md: "1em", lg: "1.5em" }}
            fontWeight="medium"
            mt="10px"
            letterSpacing={2}
            noOfLines={{ base: 1, md: 2, lg: 3 }}
            whiteSpace={{ base: "none", md: "none", xl: "none" }}
          >
            {firstTab.txt.substring(0, 97)}
            {"\n"}
            {firstTab.txt.substring(97)}
          </Text>
          <Button
            colorScheme="black" // Styling base color scheme
            variant="outline" // Style of the button
            size={{ base: "sm", md: "lg" }}
            mt={5} // Margin top
            letterSpacing={2} // Adjust letter spacing
            _hover={{
              bg: "white", // Background turns white on hover
              color: "black", // Text color turns black on hover
            }}
          >
            Find out more
          </Button>
        </MotionBox>
      )}
    </Box>
  );
};

export default Tlous4;
