import { Box, Flex, Text, Image } from "@chakra-ui/react";
import bg from "../assets/img/Banner/Tlous Banner3.png";
import b1 from "../assets/img/Banner/Tlous Banner2.png";

const Series = () => {
  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      px={{ base: 4, md: 8 }}
      height="500px" // Full viewport height
      flexDirection={{ base: "column", md: "row" }} // Column on small screens, row on larger screens
    >
      {/* Background Image with Blur and Dark Effect */}
      <Box
        bg={`url(${bg})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(6, 6, 6, 0.8)", // Dark overlay effect
          zIndex: -1,
        }}
      />

      {/* Left Content with Image */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w={{ base: "90%", md: "50%" }}
        textAlign="center"
        mb={{ base: 4, md: 0 }}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <Image
          src={b1}
          width={{ base: "80%", md: "80%" }}
          height="auto"
          objectFit="contain"
          alt="The Last of Us Banner"
          borderRadius="12px"
          transition="all ease 0.2s"
          sx={{
            _hover: {
              transform: "scale(1.05)",
              animationDelay: "0.2s",
            },
          }}
        />
      </Box>

      {/* Right Content with Text */}
      <Box
        w={{ base: "90%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }} // Center-aligns text on smaller screens
        color="white" // Ensures text is visible
      >
        <Text as="h6" fontSize="0.9em" color="red.500" letterSpacing={1}>
          Stream new episodes on Max
        </Text>
        <Text
          as="h1"
          fontSize={{ base: "1.5em", md: "2em" }}
          fontWeight="bold"
          letterSpacing={2}
          mb={4}
        >
          The Last of Us TV series &#x2010; Season 2
        </Text>
        <Text as="p" fontSize={{ base: "0.9em", md: "1em" }} letterSpacing={2}>
          Five years after the events of the Emmy Award&#x2010;winning first
          season, Joel and Ellie are drawn into conflict with each other and a
          world even more dangerous and unpredictable than the one they left
          behind.
        </Text>
      </Box>
    </Flex>
  );
};

export default Series;
