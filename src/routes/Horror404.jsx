import React, { useEffect, useState } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import zombies from "../assets/img/Characters_img/Infected/Runners (1).png";
import bgoverlay from "../assets/img/imgoverlay/The Last Of Us HD Wallpaper and Background Image.jpg";
import overlay from "../assets/img/imgoverlay/smoke overlay.jpg";
import bgoverlay2 from "../assets/img/imgoverlay/smoke overlay.jpg";
const Horror404 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text scale & opacity
  const scale = Math.min(1 + scrollY / 300, 2);
  const baseOpacity = 0.9;
  const maxScale = 2;
  const opacity = Math.max(baseOpacity * (1 - (scale - 1) / (maxScale - 1)), 0);

  // Zombie transform logic
  const zombieStartX = 100; // percentage from the right
  const zombieEndX = 0; // final position
  const zombieTranslateX = Math.max(zombieStartX - scrollY / 10, zombieEndX); // clamp to 0%
  const zombieScale = Math.min(1 + scrollY / 800, 1.4); // slowly scale up

  return (
    <>
      <Box position="relative" w="100%" h="200vh" bg="black" overflow="hidden">
        {/* Background Image */}
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="150vh"
          backgroundImage={`url(${bgoverlay})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundAttachment="fixed"
          opacity={0.2}
          zIndex={1}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          backgroundImage={`url(${bgoverlay2})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundAttachment="fixed"
          opacity={0.2}
          zIndex={2}
        />

        {/* Sticky Text */}
        <Box
          position="fixed"
          top="50%"
          left="50%"
          zIndex={3}
          pointerEvents="none"
          style={{
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity,
            transition: "transform 0.2s ease-out, opacity 0.3s ease-out",
          }}
        >
          <Text
            fontSize={{ base: "4em", md: "4em", lg: "13em" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            404
          </Text>
          <Text
            fontSize={{ base: "2em", md: "4em" }}
            fontWeight="bold"
            color="white"
          >
            You&apos;re Lost in the Dark
          </Text>
        </Box>

        {/* Overlay */}
        <Image
          src={overlay}
          alt="overlay"
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          opacity={0.7}
          zIndex={2}
          pointerEvents="none"
          mixBlendMode="screen"
        />

        {/* Zombie */}
        <Image
          src={zombies}
          alt="zombie"
          position="absolute"
          bottom="0"
          right="0"
          transform={`translateX(-${zombieTranslateX}%) scale(${zombieScale})`}
          transition="transform 0.2s ease-out"
          boxSize="500px"
          objectFit="contain"
          zIndex={4}
          pointerEvents="none"
        />
        {/* Go Back Button */}
        {/* Go Back Text (big, left side, fades in) */}
        <Text
          position="absolute"
          bottom={0}
          left="5%"
          transform="translateY(-50%)"
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          color="white"
          cursor="pointer"
          zIndex={5}
          pointerEvents="auto"
          _hover={{
            color: "gray.300",
            transform: "translateY(-50%) scale(1.05)",
            transition: "all 0.3s ease",
          }}
          onClick={() => window.history.back()}
        >
          Go Back
        </Text>
      </Box>
    </>
  );
};

export default Horror404;
