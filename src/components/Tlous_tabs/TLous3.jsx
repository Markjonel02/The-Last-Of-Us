import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { tabData } from "../utils/Tabdata";

const MotionBox = motion(Box);

const Tlous3 = ({ isActive }) => {
  const firstTab = tabData[2];

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
            fontSize={{ base: "2em", md: "3em", lg: "6em", xl: "8em" }}
            fontWeight="bold"
            letterSpacing={3}
            lineHeight="1.2"
          >
            {firstTab.title}
          </Text>

          {/* Additional text below */}
          <Text
            as="p"
            fontSize={{ base: "15px", md: "1em", lg: "1.5em" }}
            fontWeight="medium"
            mt="10px"
            letterSpacing={2}
            whiteSpace={{ base: "none", md: "none" }}
          >
            {firstTab.txt.substring(0, 97)}
            {"\n"}
            {firstTab.txt.substring(97)}
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

export default Tlous3;
