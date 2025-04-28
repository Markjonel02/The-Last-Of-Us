import { useState } from "react";
import bg from "../assets/img/Banner/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp";
import {
  Radio,
  RadioGroup,
  Box,
  Flex,
  Icon,
  Text,
  Button,
  HStack,
  Stack,
  Grid,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import { FaStar, FaPlaystation } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pricingimg } from "../components/utils/Pricing";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import bg2 from "../assets/img/Banner/the-last-of-us-2.jpg";
import complete from "../assets/img/Banner/complete.png";

/*routes  */
import Noreturn from "../routes/Noreturn";
import Pc from "../routes/Pc";
import Keyfeatures from "./Keyfeatures";
import Upgrade from "./Upgrade";
import TlousLimited from "./TlousLimited";
import NightSeries from "./NightSeries";
const MotionBox = motion(Box);
const Pricing = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex
        bg={`url(${bg})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        width="100%"
        position="relative"
        direction="column"
        justify="flex-start"
        align="flex-start"
        px={{ base: 4, md: 8 }}
        py={{ base: 6, md: 10 }}
      >
        {/* Game Info */}
        <Box mb={6}>
          <Text
            color="white"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="semibold"
            letterSpacing={1}
            mb={2}
          >
            The Last of Us Part II Remastered
          </Text>
          <Text
            color="white"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="normal"
            letterSpacing={1}
            mb={2}
          >
            Sony Interactive Entertainment
          </Text>
          <HStack spacing={1} mb={2}>
            {[...Array(5)].map((_, index) => (
              <Icon key={index} as={FaStar} color="white" boxSize={3} />
            ))}
            <Text color="white" fontSize={{ base: "xs", md: "sm" }}>
              4.49 • 220.5K ratings
            </Text>
          </HStack>
        </Box>

        {/* Purchase Options */}
        <RadioGroup onChange={setSelectedValue} value={selectedValue} mb={6}>
          <Stack spacing={4}>
            <MotionBox
              animate={{
                backgroundColor: selectedValue === "full" ? "#2d2d2d" : "#000",
              }}
              transition={{ duration: 0.3 }}
              p={4}
              borderRadius="md"
              color="white"
              borderWidth={selectedValue === "full" ? "2px" : "1px"}
              borderColor={selectedValue === "full" ? "gray.600" : "gray.700"}
            >
              <Radio value="full">
                <Text fontSize={{ base: "md", md: "lg" }}>PHP: 2,770</Text>
              </Radio>
            </MotionBox>

            <MotionBox
              animate={{
                backgroundColor: selectedValue === "trial" ? "#2d2d2d" : "#000",
              }}
              transition={{ duration: 0.3 }}
              p={4}
              borderRadius="md"
              color="white"
              borderWidth={selectedValue === "trial" ? "2px" : "1px"}
              borderColor={selectedValue === "trial" ? "gray.600" : "gray.700"}
            >
              <Radio value="trial">
                <HStack align="start" spacing={3}>
                  <Box>
                    <Text fontSize={{ base: "md", md: "lg" }}>Game Trial</Text>
                    <HStack spacing={1} mt={1}>
                      <Icon as={FaPlaystation} color="yellow.400" />
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="yellow.400"
                      >
                        Subscribe to PlayStation Plus Premium to play a 2‑hour
                        trial
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
              </Radio>
            </MotionBox>
          </Stack>
        </RadioGroup>

        {/* Action Buttons */}
        <HStack spacing={4} mb={4} flexWrap="wrap">
          <Button
            colorScheme="red"
            fontWeight="normal"
            borderRadius="full"
            letterSpacing={1}
            px={{ base: 10, md: 20 }}
            size="lg"
            onClick={() =>
              window.open(
                "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
                "_blank"
              )
            }
          >
            Subscribe
          </Button>

          <Button
            onClick={() => setLiked(!liked)}
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: liked ? "red.500" : "gray.200" }}
            borderRadius="full"
            w="60px"
            h="60px"
            aria-label="Like button"
            fontSize="3xl"
          >
            <Icon
              as={liked ? AiFillHeart : AiOutlineHeart}
              color={liked ? "red" : "gray.500"}
            />
          </Button>
        </HStack>

        {/* Rating Note */}
        <Text
          color="white"
          fontSize={{ base: "xs", md: "sm" }}
          mt={2}
          letterSpacing={1}
        >
          Blood and Gore, Intense Violence, Nudity, Sexual Content, Strong
          Language, Use of Drugs
        </Text>

        {/* Feature Grid */}
        <Box mt={8} color="white" fontSize={{ base: "sm", md: "md" }}>
          <Text fontWeight="medium" mb={4}>
            Released 01‑19‑2024
          </Text>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={0}
            letterSpacing={1}
          >
            <Box>
              <Text>🌐 Offline play enabled</Text>
              <Text>👤 1 player</Text>
              <Text>🎮 Remote Play supported</Text>
              <Text>🕹 PS5 Version</Text>
            </Box>

            <Box letterSpacing={1}>
              <Text>
                🎧 Vibration function and trigger effect supported DualSense
                wireless controller
              </Text>
              <Text>📈 PS5 Pro Enhanced</Text>
              <Text>💡 Game Help supported</Text>
              <Text>☁️ Streaming supported only with Premium subscription</Text>
            </Box>
          </Grid>
        </Box>
      </Flex>

      <Box bg="black" w="100%" py={10}>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          modules={[Navigation]}
          breakpoints={{
            390: { slidesPerView: 1.5 },
            490: { slidesPerView: 2 },
            768: { slidesPerView: 3.5 },
            1024: {
              slidesPerView: 4.8,
            },
          }}
        >
          {Pricingimg.map((pricing, id) => (
            <SwiperSlide
              key={id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Image
                src={pricing.image}
                w={{ base: "300", md: "500" }}
                h="200px"
                objectFit="contain"
                borderRadius="md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        bg={`url(${bg2})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        minHeight="100vh"
        width="100%"
        position="relative"
      >
        {/* Overlay for dark effect */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.7)"
          zIndex="1"
        ></Box>

        {/* Responsive Content */}
        <Flex
          position="relative"
          zIndex="2"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          height="100%"
          px={{ base: 6, md: 20 }}
          py={20}
          gap={8}
        >
          {/* Left Content */}
          <Box color="white" fontSize="20px" textAlign="left" flex="1">
            <Text fontSize="0.7em" fontWeight="normal" color="#54b2ffff">
              What is The Last of Us Part II Remastered?
            </Text>
            <Text
              fontSize={{ base: "1em", md: "2em" }}
              whiteSpace="pre-line"
              width={{ base: "100%", md: "75%" }}
              fontWeight="normal"
              letterSpacing={1}
            >
              EXPERIENCE ELLIE AND ABBY&apos;S EMOTIONAL JOURNEYS, REMASTERED
              FOR PS5
            </Text>
          </Box>

          {/* Right Content */}
          <Box
            color="white"
            fontSize="20px"
            textAlign="right"
            flex="1"
            width="100%"
            py={20}
          >
            <Text
              fontSize="0.7em"
              fontWeight="normal"
              letterSpacing={1}
              textAlign={{ base: "left" }}
            >
              Play the winner of over 300 Game of the Year awards, remastered
              for the PlayStation®5 console. Relive or play for the first time
              Ellie and Abby&apos;s story, now with graphical enhancements, new
              gameplay modes like the roguelike survival experience No Return,
              full DualSense® wireless controller integration, and more.
              <Text mt={4}>
                Five years after their dangerous journey across the
                post&#x2010;pandemic United States, Ellie and Joel have settled
                down in Jackson, Wyoming. Living amongst a thriving community of
                survivors has allowed them peace and stability, despite the
                constant threat of the infected and other, more desperate
                survivors. When a violent event disrupts that peace, Ellie
                embarks on a relentless journey to carry out justice and find
                closure.
              </Text>
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        h="100%"
        width="100%"
        position="relative"
      >
        {/* Left Image Container */}
        <Box
          flex="1"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="black"
        >
          <Box
            backgroundImage={`url(${complete})`}
            backgroundSize="contain"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            borderRadius="16px"
            width={{ base: "300px", md: "500px" }}
            height={{ base: "300px", md: "500px" }}
            data-aos="fade-right"
            data-aos-delay="100"
            transition="transform 0.3s ease-in-out"
            _hover={{
              transform: "scale(1.02)",
            }}
          />
        </Box>

        {/* Right Text Container */}
        <Box
          flex="1"
          bg="black"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding="6"
        >
          <Text
            fontSize="0.7em"
            fontWeight="normal"
            mb="4"
            letterSpacing={1}
            color="#54b2ffff"
          >
            Two masterpieces, together at last.
          </Text>
          <Text
            fontSize={{ base: "1.5em", md: "2em" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            The Last of Us Complete
          </Text>
          <Text
            fontSize="0.9em"
            letterSpacing={1}
            mb="4"
            w="80%"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Go back to the beginning and experience the award&#x2010;winning
            games that inspired the TV show, as the definitive editions of these
            two iconic and emotional stories are brought together for the first
            time in one complete collection.
          </Text>
          <Text
            fontSize="0.9em"
            letterSpacing={1}
            mb="4"
            w="80%"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Whether this is your first time stepping into the world of The Last
            of Us or you&apos;re a player returning to the series since playing
            on PS4® or PS3®, enjoy a host of game&#x2010;changing graphical and
            gameplay improvements made possible by the PlayStation®5 console
            along with additional content released in Part I and Part II
            Remastered.
          </Text>
          <HStack spacing={4} data-aos="fade-up" data-aos-delay="100">
            <Button
              color="white"
              bg="#e24301"
              _hover={{ bg: "#c53b00" }}
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              fontWeight="normal"
              px={20}
              letterSpacing={1}
            >
              Add to Cart
            </Button>

            <Button
              onClick={() => setLiked(!liked)}
              color="white"
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: liked ? "red.500" : "gray.200" }}
              borderRadius="full"
              w="60px"
              h="60px"
              aria-label="Like button"
              fontSize="3xl"
            >
              <Icon
                as={liked ? AiFillHeart : AiOutlineHeart}
                color={liked ? "red" : "gray.500"}
              />
            </Button>
          </HStack>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
        <Text fontSize="3em" mb={4} textAlign="center">
          Buy The Last of Us Part II Remastered
        </Text>

        <Tabs variant="unstyled" w="100%" isFitted mx={5}>
          <TabList
            border="1px solid gray"
            borderRadius="10px"
            p={2}
            maxW="md"
            w="100%"
            mx="auto"
            mb={10}
          >
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                fontWeight="normal"
                borderRadius="10px"
                mx={3}
                _selected={{
                  bg: "black",
                  color: "white",
                }}
                _focus={{ boxShadow: "none" }}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>

          <TabPanels w="100%">
            {tabsData.map((tab, index) => (
              <TabPanel key={index} w="100%" p={0}>
                <Box w="100%">{tab.component}</Box>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
      <Keyfeatures />
      <Upgrade />
      <TlousLimited />
      <NightSeries />
    </>
  );
};

export default Pricing;

const tabsData = [
  {
    label: "Noreturn",
    component: <Noreturn />,
  },
  {
    label: "Pc",
    component: <Pc />,
  },
];
