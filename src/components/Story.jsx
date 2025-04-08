import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

import imgbg from "../assets/img/TLOUS BG.png";

const Story = () => {
  return (
    <Flex
      h="full"
      w="full"
      p="4"
      flexDirection="column"
      position="relative"
      backgroundImage={`url(${imgbg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflowX="hidden"
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.5)"
        top={0}
        left={0}
        zIndex={1}
      />

      {/* Content */}
      <Box position="relative" zIndex={2} left="12">
        <Text
          fontSize={["2em", "4em", "5em"]}
          fontWeight="bold"
          color="#f2f2f2"
          marginTop={10}
          letterSpacing={1}
        >
          Story
        </Text>
      </Box>

      <Box
        mt={4}
        p={4}
        opacity={0.8}
        borderRadius="md"
        w={{ base: "90%", md: "80%", xl: "50%" }}
        position="relative"
        left="10"
        zIndex={2}
        overflow="hidden"
      >
        <Text
          fontSize={{ base: "12px", lg: "md", xl: "1.3em" }}
          letterSpacing={2}
          color="#f2f2f2"
          whiteSpace={{ base: "normal", md: "wrap", xl: "normal" }}
          overflow={{ base: "hidden", md: "visible", xl: "visible" }}
        >
          <Box display={{ base: "block", md: "inline" }}>
            Winner of more than 500 Game of the Year awards, The Last of Us
            series is critically renowned for its emotional storytelling,
            unforgettable characters, and suspenseful action&#x2010;adventure
            gameplay.
          </Box>
          <br />
          <br />
          <Box display={{ base: "block", md: "block", xl: "inline" }}>
            Decades after the Cordyceps infection ravaged the United States,
            ruthless factions and Infected present a constant threat to
            survivors. Rugged smuggler Joel is tasked with escorting teenager
            Ellie to safety. Although Joel is traumatized by his past, their
            brutal cross&#x2010;country journey gives him something to fight
            for.
          </Box>
          <br />
          <br />
          <Box display={{ base: "block", md: "block", xl: "inline" }}>
            Five years later, Joel and Ellie settle in Jackson, Wyoming. When a
            harrowing incident rattles the community, Ellie embarks on a
            relentless journey for justice and closure. The dangers she
            encounters aren&apos;t her only obstacles; she must also grapple
            with the repercussions of her own actions. Play The Last of Us Part
            I, now available on PlayStation® 5 and for PC, and continue your
            journey with The Last of Us Part II Remastered on PS5® and PC on
            April 3.
          </Box>
        </Text>
      </Box>
    </Flex>
  );
};

export default Story;
