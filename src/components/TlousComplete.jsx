import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import tlous from "../assets/img/Banner/tlous complete.png";

const TlousComplete = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      // Ensures the content takes up the full viewport height
      flexDirection={{ base: "column", md: "row" }} // Stacks vertically on small screens, side-by-side on larger screens
      textAlign={{ base: "center", md: "left" }} // Center text on small screens, align left on larger screens
      px={{ base: "4", md: "8" }} // Adds padding for better spacing
      m={3}
    >
      {/* Left content */}
      <Box w={{ base: "80%", md: "50%" }} mb={{ base: "4", md: "0" }}>
        <Image
          src={tlous}
          width={{ base: "100%", md: "500px" }}
          height={{ base: "auto", md: "500px" }}
          objectFit="contain"
        />
      </Box>

      {/* Right content */}
      <Box w={{ base: "80%", md: "50%" }} overflow={"hidden"}>
        <Text as="h6" color="red.500" fontSize="0.9em">
          Two masterpieces, together at last.
        </Text>
        <Text
          as="h1"
          fontSize={{ base: "1.5em", md: "2em", lg: "3em" }}
          fontWeight={600}
          letterSpacing={2}
          mb={{ base: 3, md: 4 }}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          The Last of Us Complete
        </Text>
        <Text
          fontSize={{ base: "0.9em", md: "1em" }}
          letterSpacing={1}
          noOfLines={{ base: 2, md: 1, lg: 5 }}
          mb={4}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Go back to the beginning and experience the award&#x2010;winning games
          that inspired the TV show, as the definitive editions of these two
          iconic and emotional stories are brought together for the first time
          in one complete collection.
          <br />
          Whether this is your first time stepping into the world of The Last of
          Us or you&apos;re a player returning to the series since playing on
          PS4® or PS3®, enjoy a host of game&#x2010;changing graphical and
          gameplay improvements made possible by the PlayStation®5 console along
          with additional content released in Part I and Part II Remastered.
        </Text>
        <Button
          variant="outline"
          colorScheme="black"
          letterSpacing={1}
          size={{ base: "sm", md: "md" }}
        >
          find out more
        </Button>
      </Box>
    </Flex>
  );
};

export default TlousComplete;
