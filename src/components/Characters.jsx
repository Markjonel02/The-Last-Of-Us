import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper/modules";

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
      backgroundSize="cover" // Add this property
      backgroundRepeat="no-repeat"
      alignItems="center"
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={2.8}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation, Pagination]} // Ensure Navigation is used correctly
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box
            bg="tomato"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={12}
          >
            <Text color="white">Sample 1</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="red"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white">Sample 2</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="blue"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white">Sample 3</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="blue"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white">Sample 3</Text>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            bg="blue"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white">Sample 3</Text>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Characters;
