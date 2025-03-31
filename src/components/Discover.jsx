import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { discoverData } from "./utils/Discoverdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import bg from "../assets/img/background Tlous.png";

const Discover = () => {
  return (
    <Box
      backgroundImage={`url(${bg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh"
      minH="100vh" // Ensures enough space for Swiper
    >
      {/* Title */}
      <Text
        fontSize={{ base: "4em", md: "em", lg: "6em" }}
        color="whiteAlpha.900"
        mb={6}
      >
        Discover the last of us
      </Text>

      {/* Swiper Section */}
      <Swiper
        modules={[FreeMode]}
        loop={true}
        speed={1200}
        grabCursor={true}
        centeredSlides={true}
        breakpoints={{
          400: { slidesPerView: 2, spaceBetween: 5 },
          760: { slidesPerView: 2.3, spaceBetween: 5 },
          1024: { slidesPerView: 3.1, spaceBetween: 5 },
          1114: { slidesPerView: 3.8, spaceBetween: 5 },
        }}
        style={{ width: "100%", paddingTop: "50px" }} // Adds space below title
      >
        {discoverData.map((disc, id) => (
          <SwiperSlide key={id}>
            <Box
              borderRadius="lg"
              overflow="hidden"
              maxW="lg"
              boxShadow="lg"
              p={3}
              color="white"
              transition="all 0.2s ease"
              _hover={{
                bg: "gray.900",
                transform: "translateY(-10px)",
                zIndex: 3,
                border: "1px solid gray",
              }}
            >
              <Image
                src={disc.image}
                alt={disc.title}
                borderRadius="md"
                h={{ base: "200px", md: "350px", lg: "350px" }}
                w={{ base: "300px", md: "400px", lg: "100%" }}
                objectFit="cover"
              />
              {/* Game Info */}
              <Box mt={4}>
                <Text fontSize="0.9em" color="#54b2ffff" letterSpacing={1}>
                  {disc.genre}
                </Text>

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="200"
                  mt={2}
                  letterSpacing={2}
                >
                  {disc.title}
                </Text>

                <Text fontSize="sm" mt={2}>
                  {disc.desc}
                </Text>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Discover;
