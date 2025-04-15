import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Text,
  Flex,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Infected } from "./utils/Infected";
import { MainCharacters } from "./utils/MainCharacters";
import bg from "../assets/img/the-last-of-us-franchise-hub-background-block-desktop-03-en-15sep22.webp";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";

// Define the glow animation
const glowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;
const MotionImage = motion(Image);

const Characters = () => {
  const textLength = useBreakpointValue({
    base: 300,
    md: null,
    xl: 999999999999,
  });
  const [hoveredWeapon, setHoveredWeapon] = useState(null);
  const datasource = {
    // Fixed key to match handleChangeTab function
    infecters: Infected,
    mc: MainCharacters,
  };

  const [selectedTab, setSelectedTab] = useState("infecters");
  const [selectedCharacter, setSelectedCharacter] = useState(
    datasource["infecters"][0]
  );

  const handleChangeTab = (tabKey) => {
    setSelectedTab(tabKey);
    setSelectedCharacter(datasource[tabKey][0]); // Ensure correct dataset is selected
  };

  const selectedTabIndex = selectedTab === "infecters" ? 0 : 1; // Set index for Tabs

  return (
    <Flex
      justify="center"
      align="center"
      h={{ base: "ful", md: "100%" }}
      p={5}
      position={"relative"}
      direction={{ base: "column", md: "row", sm: "column" }}
      backgroundColor={"#0f0f0fff"}
      id="Character"
    >
      <Box
        backgroundImage={`url(${bg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        zIndex={0} // Ensures it's the bottom-most layer
      />
      {/* Left Container */}
      <Box
        w={{ base: "100%", md: "40%" }}
        borderRadius={12}
        color="white"
        display="flex"
        flexDirection="column"
        top={0}
      >
        <Text
          as="h1"
          fontSize={{ base: "5xl", md: "5xl", sm: "5xl", xl: "8xl" }} // Fixed font size for mobile
          mb={4}
          fontWeight={900}
          letterSpacing={3}
          zIndex={1}
          bgGradient="linear(to-r,rgb(255, 255, 255),rgb(153, 82, 82),rgb(216, 65, 65))" // Horror-themed gradient colors
          bgClip="text"
          animation={`${glowAnimation} 10s ease-in-out infinite`} // Slower and smoother animation
          css={{
            backgroundSize: "200% 200%", // Makes gradient smoother
          }}
        >
          meet the cast
        </Text>
        <Box className="Tab">
          <Tabs
            variant="unstyled"
            maxW="md"
            isFitted
            defaultIndex={selectedTabIndex} // Set the default index from the selectedTab state
            index={selectedTabIndex} // Bind to the selectedTab state
            onChange={(index) =>
              handleChangeTab(index === 0 ? "infecters" : "mc")
            }
          >
            <TabList>
              <Tab
                border="2px solid white"
                color="white"
                _selected={{
                  bg: "black",
                  color: "white",
                }}
                _hover={{
                  bg: "white",
                  color: "black",
                }}
                padding="10px 20px"
                onClick={() => handleChangeTab("infecters")}
              >
                INFECTERS
              </Tab>
              <Tab
                border="2px solid white"
                color="white"
                _selected={{
                  bg: "white",
                  color: "black",
                }}
                _hover={{
                  bg: "white",
                  color: "black",
                }}
                padding="10px 20px"
                onClick={() => handleChangeTab("mc")}
              >
                MAIN CHARACTERS
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Display actual character details instead of just text */}
                {selectedTab === "infecters" && selectedCharacter && (
                  <Box>
                    <Text fontSize="3xl" fontWeight="500" letterSpacing={3}>
                      {selectedCharacter.Infectedname}
                    </Text>
                    <Text
                      mt={2}
                      fontSize="sm"
                      fontWeight={400}
                      letterSpacing={3}
                      noOfLines={{ base: 2, md: 3, xl: 6 }} // Limit on mobile, full text on desktop
                    >
                      {selectedCharacter.desc?.substring(0, textLength) ||
                        "No description available"}
                    </Text>
                    <Box as="div" mt={4}>
                      <Text
                        fontSize="xl"
                        fontWeight="300"
                        mb={2}
                        letterSpacing={1}
                      >
                        Weapon Weaknesses:
                      </Text>

                      <Grid
                        templateColumns="repeat(auto-fit, minmax(20px, 1fr))"
                        gap={3}
                      >
                        {selectedCharacter.weaknessweapon.map(
                          (weapon, index) => (
                            <Box
                              key={index}
                              position="relative"
                              display="inline-block"
                            >
                              {/* Overlay for non-hovered images */}
                              {hoveredWeapon !== null &&
                                hoveredWeapon !== index && (
                                  <Box
                                    position="absolute"
                                    top={0}
                                    left={0}
                                    w="100%"
                                    h="100%"
                                    borderRadius="md"
                                    zIndex={1}
                                    pointerEvents="none" // Prevents blocking interaction
                                  />
                                )}
                              <Tooltip
                                letterSpacing={2}
                                fontWeight={400}
                                label={weapon.name}
                                aria-label="Image Tooltip"
                              >
                                <MotionImage
                                  src={weapon.image}
                                  alt={weapon.name}
                                  borderRadius="md"
                                  objectFit="cover"
                                  w="30px"
                                  h="30px"
                                  mb={2}
                                  whileHover={{ scale: 1.5 }} // Magnifies the image on hover
                                  transition={{ duration: 0.2 }} // Smooth transition effect
                                  onMouseEnter={() => setHoveredWeapon(index)}
                                  onMouseLeave={() => setHoveredWeapon(null)}
                                  position="relative"
                                  zIndex={2}
                                />
                              </Tooltip>
                            </Box>
                          )
                        )}
                      </Grid>
                    </Box>
                  </Box>
                )}
              </TabPanel>
              <TabPanel>
                {/* Display actual character details instead of just text */}
                {selectedTab === "mc" && selectedCharacter && (
                  <Box>
                    <Text fontSize="3xl" fontWeight="500" letterSpacing={3}>
                      {selectedCharacter.name}
                    </Text>
                    <Text
                      mt={2}
                      fontSize="sm"
                      fontWeight={400}
                      letterSpacing={3}
                      noOfLines={{ base: 2, md: 3, xl: 9 }}
                    >
                      {(
                        selectedCharacter.bio || "No description available"
                      ).substring(0, 300)}
                    </Text>
                  </Box>
                )}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>

      {/* Right Side - Swiper */}
      <Box
        w={{ base: "500px", md: "50%", sm: "400px" }}
        h={{ base: "600px", md: "auto" }}
        display="flex"
      >
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true} // Ensures the active slide is in the center
          loop="true"
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ display: "flex", justifyContent: "center" }}
          onSlideChange={(swiper) => {
            // Added onSlideChange handler to update selected character
            const newIndex = swiper.realIndex;
            setSelectedCharacter(datasource[selectedTab][newIndex]);
          }}
        >
          {datasource[selectedTab].map((char, index) => (
            <SwiperSlide
              key={char.id || index} // Added fallback for key
              onClick={() => setSelectedCharacter(char)}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                textAlign="center"
                color="white"
                w={{ base: "100%", md: "400px" }}
                h={{ base: "100vh", md: "100vh" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
                borderRadius={8}
              >
                <Image
                  src={char.image}
                  alt={char.charname}
                  objectFit="contain" // Changed to 'contain' so the image fits without cutting off
                  width="100%" // Adjust the width to scale it down
                  height="90%" // Adjust the height proportionally to maintain aspect ratio
                  zIndex={1}
                  bottom="50%"
                  position="absolute"
                  top="50%" // Adjust the top position to vertically center the image
                  left="50%" // Adjust the left position to horizontally center the image
                  transform="translate(-50%, -50%)" // Center the image both vertically and horizontally
                  borderRadius={8}
                  filter="drop-shadow(0 5px 6px rgba(153, 149, 149, 0.25))"
                />
                {/* Reflection Effect */}
                <Image
                  src={char.image}
                  alt={`${char.Infectedname} Reflection`}
                  objectFit="contain"
                  width="80%" // Same width as the main image
                  height="80%" // Same height as the main image
                  opacity={0.4}
                  position="absolute"
                  left="55%" // Horizontally center the reflection
                  transform="scaleX(-1) translateX(50%)" // Flip the reflection horizontally and center it
                  zIndex={0}
                  top={0}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Flex>
  );
};

export default Characters;
