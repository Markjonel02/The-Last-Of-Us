import React from "react";
import { Box, Text, Center } from "@chakra-ui/react";

// Make sure to have a video file or URL you want to use
const Horror404 = () => {
  return (
    <Box position="relative" w="100%" h="100vh" bg="black" overflow="hidden">
      {/* Fullscreen Video Background */}
      <Box
        as="video"
        src="/your-horror-loop.mp4" // Replace with your video path or URL
        autoPlay
        loop
        muted
        playsInline
        objectFit="cover"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
      />

      {/* Masked 404 Text */}
      <Center
        h="100%"
        position="relative"
        zIndex="1"
        bgClip="text"
        fontSize={{ base: "6xl", md: "9xl" }}
        fontWeight="bold"
        textAlign="center"
        sx={{
          color: "transparent",
          backgroundImage: "url('/your-horror-loop.mp4')", // fallback in case video can't play
        }}
      >
        404
      </Center>

      {/* Bottom Text */}
      <Text
        position="absolute"
        bottom="10"
        width="100%"
        textAlign="center"
        fontSize={{ base: "xl", md: "2xl" }}
        color="red.500"
        zIndex="2"
      >
        Page Not Found
      </Text>
    </Box>
  );
};

export default Horror404;
