import { Flex, Box, Text, Image, VStack } from "@chakra-ui/react";
import img from "../assets/img/Series/series 1.png";
import img2 from "../assets/img/Series/series 2.png";
import img3 from "../assets/img/Series/series3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const NightSeries = () => {
  return (
    <Box w="100%" h="100%" background="black" py={4}>
      <VStack textAlign="center" margin="2em 0">
        <Text
          fontSize={{ base: "1.5em", md: "2em" }}
          fontWeight="normal"
          letterSpacing={1}
          color="white"
        >
          THE LAST OF US PART II REMASTERED: GAME NIGHTS SERIES
        </Text>
        <Text color="whiteAlpha.800" letterSpacing={1} fontWeight="normal">
          Game Nights is a discussion series with special guests that unpacks
          the complex characters, breathtaking story and riveting gameplay of
          The Last of Us Part II Remastered experience.
        </Text>
      </VStack>
      <Flex
        className="text"
        justifyContent="center"
        alignItems="center"
        gap={5}
        p={4}
      >
        <Swiper
          spaceBetween={20}
          breakpoints={{
            390: {
              slidesPerView: 1,
            },
            490: { slidesPerView: 1 },
            768: { slidesPerView: 2.5 },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box className="ep1" color="white" letterSpacing={1}>
              <Image src={img} borderRadius={15} objectFit="cover" mb="8" />
              <Text fontSize="1.5em">Episode 1: </Text>
              <Text fontSize="0.9em" whiteSpace="pre-line" width="80%">
                Naughty Dog&apos;s Matthew Gallant reveals what&apos;s behind
                The Last of Us Part II Remastered.
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="ep2" color="white" letterSpacing={1}>
              <Image src={img2} borderRadius={15} objectFit="cover" mb="8" />
              <Text fontSize="1.5em">Episode 2: </Text>
              <Text fontSize="0.9em" whiteSpace="pre-line">
                Clinical Therapist Shani Tran breaks down the unforgettable
                characters from The Last of Us Part II Remastered.
              </Text>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box className="ep3" color="white" letterSpacing={1}>
              <Image src={img3} borderRadius={15} objectFit="cover" mb="8" />
              <Text fontSize="1.5em">Episode 3: </Text>
              <Text fontSize="0.9em" whiteSpace="pre-line">
                Gaming Analyst Andrea Rene explores the immersive cinematic
                quality and must&#x2010;play story of The Last of Us Part II
                Remastered.
              </Text>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Box>
  );
};

export default NightSeries;
