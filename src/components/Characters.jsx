import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";
import { Infected } from "./utils/Infected";
import bg from "../assets/img/grunge border.png";

const Characters = () => {
  return (
    <Flex
      justify="center"
      align="center"
      w="100%"
      height="100vh"
      padding={5}
      backgroundImage={`url(${bg})`}
      backgroundPosition="fixed"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      alignItems="center"
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={3} // Adjust as needed
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {Infected.map((infected) => (
          <SwiperSlide key={infected.id}>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={4}
              borderRadius={12}
              textAlign="center"
              color="white"
              boxShadow="lg"
              width="300px" // Set fixed width
              height="450px" // Set fixed height
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Image
                src={infected.image}
                alt={infected.Infectedname}
                borderRadius={8}
                objectFit="cover"
                width="100%" // Ensure images take full width
              />
              <Text fontSize="xl" fontWeight="bold" mt={3}>
                {infected.Infectedname}
              </Text>
              <Text fontSize="sm" px={2}>
                {infected.desc.substring(0, 100)}... {/* Limit text length */}
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default Characters;
