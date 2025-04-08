import { Flex, Button, Box, Text } from "@chakra-ui/react";
import vids from "../assets/vid/The last of us.mp4";

const Home = () => {
  return (
    <Box position="relative">
      {/* Floating Text Section - Fixed to the Left */}
      <Box
        position="absolute"
        top={{ base: "35%", md: "45%" }}
        left={"5%"} // Fixed to the left
        transform="translateY(-50%)"
        zIndex="20"
        textAlign="left"
      >
        <Text
          fontSize={{ base: "2em", md: "4em", lg: "8em" }}
          fontWeight="bold"
          color="white"
          letterSpacing="wider"
        >
          The Last of Us
        </Text>
        <Text
          fontSize={{ base: "2em", md: "4em", lg: "5em" }}
          fontWeight="bold"
          color="#bd5735ff"
          letterSpacing="wider"
        >
          Remastered II
        </Text>
      </Box>

      {/* Video Section */}
      <Box className="Video" position="relative">
        <video
          src={vids}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto" }}
        ></video>
      </Box>

      {/* Buttons Section */}
      <Box
        className="Header"
        position="absolute"
        left={"5%"} // Fixed to the left
        top={["60%", "65%", "70%"]} // Adjusted for better placement
        transform="translateY(-50%)"
        zIndex="10"
        width={"80%"}
        textAlign="left"
      >
        <Flex gap={4} mt={4}>
          <Button
            color="black"
            fontWeight="bold"
            letterSpacing="2px"
            fontSize={["sm", "md", "lg"]}
            px={6}
            py={4}
            border="2px solid white"
            bg="white"
            _hover={{ bg: "black", color: "white", borderColor: "white" }}
            _active={{ transform: "scale(0.95)" }}
            textTransform="uppercase"
          >
            Watch Trailer
          </Button>
          <Button
            color="white"
            fontWeight="bold"
            letterSpacing="2px"
            fontSize={["sm", "md", "lg"]}
            px={6}
            py={4}
            border="2px solid white"
            bg="transparent"
            _hover={{ bg: "white", color: "black", borderColor: "white" }}
            _active={{ transform: "scale(0.95)" }}
            textTransform="uppercase"
          >
            Buy Now
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
