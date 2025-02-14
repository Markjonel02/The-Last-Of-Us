import { Flex, Button, Box, Text } from "@chakra-ui/react";
import vids from "../assets/vid/The last of us.mp4";
const Home = () => {
  return (
    <>
      <Box
        className="Header"
        position="absolute"
        left={["5%", "10%", "1%"]}
        screen
        size
        top={["20%", "25%", "50%", "60%"]}
        transform="translateY(-50%)"
        zIndex="10"
        width={["80%", "60%", "80%"]}
        textAlign="left"
      >
        <Text
          color={"White"}
          letterSpacing="4px"
          fontWeight={900}
          fontSize={["1em", "2em", "5em", "11em"]} // Responsive font size
          opacity={0.8}
        >
          THE LAST OF US
        </Text>

        {/* Buttons Section */}
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

          {/* Buy Now Button */}
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

      <Box className="Video" position="relative">
        <video
          src={vids}
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto" }}
        ></video>
      </Box>
    </>
  );
};

export default Home;
