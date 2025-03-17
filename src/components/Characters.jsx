import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Infected } from "./utils/Infected";
import bg from "../assets/img/grunge border.png";
import "swiper/css/navigation";
const Characters = () => {
  return (
    <Flex
      justify="center"
      align="center"
      h="100vh"
      p={5}
      backgroundImage={`url(${bg})`}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      direction={{ base: "column", md: "row", sm: "column" }}
    >
      {/* Left Container */}
      <Box
        w="40%"
        borderRadius={12}
        color="white"
        display="flex"
        flexDirection="column"
        top={0}
        mr={4}
      >
        <Text
          as="h1"
          fontSize="7xl"
          mb={4}
          fontWeight={900}
          letterSpacing={3}
          color={"blackAlpha.900"}
        >
          Characters
        </Text>
        <Box className="Tab"></Box>
      </Box>

      {/* Right Side - Swiper */}
      <Box w="50%" display="flex" justifyContent="center">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true} // Ensures the active slide is in the center
          loop="true"
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {Infected.map((infected) => (
            <SwiperSlide
              key={infected.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                textAlign="center"
                color="white"
                w={400}
                h={600}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
                borderRadius={8}
              >
                <Image
                  src={infected.image}
                  alt={infected.Infectedname}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  zIndex={1}
                  position="absolute"
                  top={0}
                  left={0}
                  borderRadius={8}
                />
                {/* Reflection Effect */}
                <Image
                  src={infected.image}
                  alt={`${infected.Infectedname} Reflection`}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  transform="scaleY(1)"
                  opacity={0.3}
                  position="absolute"
                  bottom="-50%"
                  left={10}
                  zIndex={0}
                  top={0}
                />{" "}
              </Box>
              <Box
                position="absolute"
                bottom={2}
                left={0}
                right={0}
                textAlign="center"
                bg="rgba(0, 0, 0, 0.2)"
                p={2}
                borderRadius={8}
              >
                <Text fontSize="xl" color="white" letterSpacing={2} zIndex={12}>
                  {infected.Infectedname}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default Characters;
