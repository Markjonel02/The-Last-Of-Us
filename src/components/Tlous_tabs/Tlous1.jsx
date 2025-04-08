import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { tabData } from "../utils/Tabdata";

const MotionBox = motion(Box);

const Tlous1 = ({ isActive }) => {
  const firstTab = tabData[0];

  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Background Image */}
      <Image
        src={firstTab.banner}
        alt={firstTab.name}
        width="100%"
        height="100%"
        objectFit="cover"
      />

      {/* Animated Title */}
      {isActive && (
        <MotionBox
          position="absolute"
          color="white"
          padding="10px 20px"
          borderRadius="8px"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Text
            as="h1"
            fontSize={{ base: "1em", md: "4em", lg: "7em", xl: "10em" }}
            fontWeight="bold"
            letterSpacing={3}
            textAlign="center"
          >
            {firstTab.title}
          </Text>
          <Text
            as="h1"
            fontSize={{ base: "1.9em", md: "3em" }}
            fontWeight="bold"
            letterSpacing={3}
            textAlign="center"
          >
            {firstTab.txt}
          </Text>
        </MotionBox>
      )}
      <Text>{firstTab.title}</Text>
    </Box>
  );
};

export default Tlous1;
