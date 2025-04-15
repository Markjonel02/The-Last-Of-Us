import React from "react";
import { Box, Text } from "@chakra-ui/react";
import video from "../assets/vid/yt1z.net - THE LAST OF US 2 Official Trailer (PS4) (1080p).mp4";

const Horror404 = () => {
  return (
    <Box position="relative" w="100%" h="100vh" bg="black" overflow="hidden">
      {/* Video shown only through the text mask */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
      >
        <Box
          position="relative"
          fontSize={{ base: "7xl", md: "9xl" }}
          fontWeight="bold"
          color="transparent"
          textAlign="center"
          lineHeight="1"
          style={{
            WebkitMaskImage: "text",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: "text",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          <Box
            as="video"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "brightness(0.4)", // darken the video
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: "-1",
            }}
          />
          404
        </Box>
      </Box>

      {/* Bottom Text */}
      <Text
        position="absolute"
        bottom="10"
        width="100%"
        textAlign="center"
        fontSize={{ base: "xl", md: "2xl" }}
        color="red.500"
        zIndex="2"
        fontWeight="bold"
      >
        Page Not Found
      </Text>
    </Box>
  );
};

export default Horror404;
