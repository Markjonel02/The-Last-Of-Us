import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Navigation } from "swiper/modules";

const Characters = () => {
  return (
    <Flex justify="center" align="center" w="100%" padding={5} h="auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={2.8}
        onSlideChange={() => console.log("slide change")}
        modules={Navigation}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box
            bg="tomato"
            display="flex"
            alignItems="center"
            justifyContent="center"
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
