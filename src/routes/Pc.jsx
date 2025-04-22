import { Box, Text, Button, HStack, Image } from "@chakra-ui/react";
import banner from "../assets/img/Banner/playstation (2).png";

const Pc = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }} // Stack vertically on small screens, side-by-side on larger screens
      bg="black"
      w="100%"
      h="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="20px"
    >
      {/* Left Image Container */}
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        transition="transform 0.3s ease-in-out" // Smooth animation
        _hover={{
          transform: "scale(1.05)", // Slight zoom effect
          rotate: "20px",
        }}
      >
        <Image
          src={banner}
          w="100%"
          h="auto"
          maxWidth="400px"
          objectFit="cover"
          borderRadius="8px"
          data-aos="fade-right"
          data-aos-delay="100"
        />
      </Box>
      {/* Right Text Container - Moves to top on small screens */}
      <Box
        mt={5}
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        color="black"
      >
        <Text fontSize="1.8em" mb={2} color="white">
          Play The Last of Us Part II Remastered on PC
        </Text>
        <Text
          fontSize="0.8em"
          mb={2}
          color="white"
          width="70%"
          letterSpacing={1}
        >
          Experience the winner of over 300 Game of the Year awards, now on PC.
          Discover Ellie and Abby&apos;s story with graphical enhancements,
          gameplay modes like the roguelike survival experience No Return, full
          PlayStation® DualSense controller integration1 and more.
        </Text>
        {/* Purchase Options */}

        {/* Action Buttons */}
        <HStack spacing={4} mt={5} flexWrap="wrap">
          <Button
            colorScheme="red"
            fontWeight="normal"
            borderRadius="full"
            letterSpacing={1}
            px={{ base: 10, md: 15 }}
            size={{ base: "md", md: "lg" }}
            onClick={() =>
              window.open(
                "https://store.steampowered.com/app/2531310/",
                "_blank"
              )
            }
          >
            Purchase on Steam
          </Button>
          <Button
            colorScheme="red"
            fontWeight="normal"
            borderRadius="full"
            letterSpacing={1}
            px={{ base: 10, md: 15 }}
            size={{ base: "md", md: "lg" }}
            onClick={() =>
              window.open(
                "hhttps://store.epicgames.com/p/the-last-of-us-part-ii-remastered",
                "_blank"
              )
            }
          >
            Purchase on epic games
          </Button>
        </HStack>
        <Box mt={4}>
          <Text
            as="a"
            href="https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/the-last-of-us-part-ii-remastered-pc/"
            color="white"
            fontSize="0.8em"
            _hover={{ borderBottom: "1px solid white" }}
            letterSpacing={1}
          >
            Find out more about the last of us
          </Text>
          <Text color="whiteAlpha.800" fontSize="0.6em" letterSpacing={1}>
            1 Wired connection required to experience the full range of
            in&#x2010;game DualSense controller features
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Pc;
