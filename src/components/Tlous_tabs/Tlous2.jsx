import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { tabData } from "../utils/Tabdata";

const MotionBox = motion(Box);

const Tlous2 = ({ isActive }) => {
  const firstTab = tabData[1];

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
          top="10%"
          transform="translateY(-50%)"
          maxWidth="50%"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Title with 20 character wrapping */}
          <Text
            as="h1"
            fontSize="6em"
            fontWeight="bold"
            letterSpacing={2}
            whiteSpace="pre-line"
            lineHeight="1.2"
          >
            {firstTab.title.substring(0, 20)}
            {"\n"}
            <Text as="span" color="#bd5735ff">
              {/* Second part in red */}
              {firstTab.title.substring(20)}
            </Text>
          </Text>

          {/* Additional text below */}
          <Text as="p" fontSize="1.5em" fontWeight="medium" mt="10px">
            {firstTab.txt}
          </Text>
          <Button
            colorScheme="black" // Use Chakra's color scheme for styling
            variant="solid" // Button style (can be "outline", "ghost", etc.)
            size="lg" // Button size (sm, md, lg)
            mt={5}
            letterSpacing={2}
          >
            Find out more
          </Button>
        </MotionBox>
      )}
    </Box>
  );
};

export default Tlous2;
