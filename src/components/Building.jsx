import React from "react";
import { vidData } from "./utils/Viddata";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "framer-motion/client";
import { Navigation } from "swiper/modules";

const Building = () => {
  return (
    <Box bg="black" p={4}>
      <Text
        color="white"
        fontSize={{ base: "2em", md: "5em" }}
        textAlign="center"
      >
        Building The last of us
      </Text>
      <Text
        color="white"
        textAlign="center"
        letterSpacing={1}
        fontSize={{ base: "1em", md: "1.5em" }}
        whiteSpace="pre-line"
        mb={20}
      >
        Go behind the scenes to discover how The Last of Us Part I was created,
        and learn how iconic scenes were adapted for the acclaimed
        live&#x2010;action HBO series.
      </Text>
      <Swiper
        speed={1200}
        slidesPerView={3.8}
        loop={true}
        grabCursor="pointer"
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          400: { slidesPerView: 1.3 },
          760: { slidesPerView: 2.7 },
          1024: { slidesPerView: 3.1 },
        }}
      >
        {vidData.map((data, id) => (
          <SwiperSlide key={id}>
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mb={20}
            >
              <Box width="100%" borderRadius="8px">
                <img
                  src={data.img}
                  alt={data.title}
                  width="100%"
                  height="100%"
                  style={{
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Text
                color="white"
                textAlign="center"
                letterSpacing={1}
                fontSize={{ base: "1em", md: "1.5em" }}
                fontWeight={200}
                whiteSpace="pre-line"
              >
                {data.title}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Building;
