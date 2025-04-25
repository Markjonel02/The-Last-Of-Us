import { Box, Image, Flex, Text } from "@chakra-ui/react";
import up from "../assets/img/Banner/the-last-of-us-part-ii-upgrader-image-block-01-31oct23$en.webp";
import rimage from "../assets/img/Banner/the-last-of-us-part-ii-upgrader-image-block-02-en-31oct23.webp";
import bg from "../assets/img/Banner/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp";
const Upgrade = () => {
  return (
    <Box
      bgImage={`url(${bg})`} // Background image
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="150vh" // Full-height coverage
      display="flex"
      flexDirection="column"
      alignItems="flex-start" // Left-align everything
      padding="60px"
    >
      <Text color="white" fontSize="3em">
        UPGRADE TO THE PS5 REMASTER
      </Text>
      {/* Top Image (Left-Aligned) */}
      <Box className="image" mb={20}>
        <Image src={up} alt="Generated Image" w="600px" h="auto" />
      </Box>

      {/* Two Columns */}
      <Flex mt={6} width="100%" maxW="800px" align="center" flexDirection="row">
        {/* Left Column (Text) */}
        <Box className="left" flex="1" textAlign="left" color="white">
          <Text fontSize="2em" fontWeight="normal">
            PS5 features include:
          </Text>
          <Text color="white">Exclusive roguelike survival mode</Text>
          <Text color="white">Lost levels</Text>
          <Text color="white">
            Full DualSense® Wireless controller integration
          </Text>
          <Text color="white">New outfits</Text>
          <Text color="white">Guitar free play</Text>
          <Text color="white">Graphical enhancements</Text>
        </Box>

        {/* Right Column (Image) */}
        <Box className="right" flex="1">
          <Image src={rimage} alt="Right Image" w="200px" h="auto" />
        </Box>
      </Flex>

      {/* Bottom Section (Now Left-Aligned) */}
      <Box className="center" mt={6} maxWidth={{ base: 400, md: 800 }}>
        <Text
          fontSize="0.7em"
          fontWeight="normal"
          color="white"
          letterSpacing={1}
        >
          Price shown in U.S. currency and may vary by country. Check PS Store
          at launch on January 19, 2024 for local pricing. The upgrade will be
          available starting at launch on January 19, 2024. Owners of PS4 disc
          copies must insert them into the PS5 every time they want to download
          or play the PS5 digital version. PS4 game disc owners who buy the PS5
          Digital Edition disc&#x2010;free console will not be able to get the
          PS5 version for the discounted price.
        </Text>
      </Box>
      <Flex justifyContent="center" alignItems="center"></Flex>
    </Box>
  );
};

export default Upgrade;
