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
import bg from "../assets/img/grunge border.png";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const Characters = () => {
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
  const maxLength = useBreakpointValue({ base: 300, md: 300, xl: 0 });
  return (
    <Flex
      justify="center"
      align="center"
      h={{ base: "ful", md: "100%" }}
      p={5}
      position={"relative"}
      direction={{ base: "column", md: "row", sm: "column" }}
      backgroundColor={"#0f0f0fff"}
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
        filter="invert(1)"
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
          fontSize={{ base: "5xl", md: "5xl", sm: "5xl", xl: "7xl" }} // Fixed font size for mobile
          mb={4}
          fontWeight={900}
          letterSpacing={3}
          zIndex={1}
        >
          Character
        </Text>
        <Box className="Tab">
          <Tabs variant="unstyled" maxW="md" isFitted defaultIndex={0}>
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
                      {(
                        selectedCharacter.desc || "No description available"
                      ).substring(0, 300)}
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
                                    bg="blackAlpha.500"
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
                w={{ base: "100%", md: 400 }}
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
                  src={char.image}
                  alt={char.charname}
                  objectFit={{ base: "cover", md: "100%" }}
                  width="100%"
                  height="100%"
                  zIndex={1}
                  position="absolute"
                  top={0}
                  left={0}
                  borderRadius={8}
                  filter="drop-shadow(0 10px 6px rgba(153, 149, 149, 0.25))"
                />
                {/*               Reflection Effect */}
                <Image
                  src={char.image}
                  alt={`${char.Infectedname} Reflection`}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  opacity={0.4}
                  position="absolute"
                  bottom="-50%"
                  left={55}
                  transform="scaleX(-1)"
                  zIndex={0}
                  top={0}
                />
              </Box>
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                textAlign="center"
                bg="blackAlpha.200" // Darkened background for better text visibility
                p={2}
                borderRadius={8}
              >
                <Text
                  fontSize="3xl"
                  color="white"
                  letterSpacing={2}
                  zIndex={12}
                >
                  {char.Infectedname || char.name}
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
