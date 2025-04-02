import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { discoverData } from "./utils/Discoverdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
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
          320: { slidesPerView: 1, spaceBetween: 5 },
          480: { slidesPerView: 1.5, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2.5, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1200: { slidesPerView: 3.5, spaceBetween: 20 },
          1400: { slidesPerView: 4, spaceBetween: 25 },
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
                w="100%"
                h="350px" // Ensuring uniform height for all images
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

                <Text
                  fontSize="sm"
                  fontWeight={200}
                  letterSpacing={1}
                  mt={2}
                  noOfLines={2}
                >
                  {disc.desc || "No description available".substring(0, 20)}{" "}
                  {/* Fallback */}
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
