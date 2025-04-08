import { Box, Text } from "@chakra-ui/react";

import Tlous from "../assets/img/tlous Community.png";

const Community = () => {
  return (
    <Box
      backgroundImage={`url(${Tlous})`}
      backgroundSize="cover"
      backgroundPosition="center"
      w="100%"
      h="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      textAlign="left"
      color="white"
      px={12}
    >
      <Text
        fontSize={{ base: "3xl", md: "7xl" }}
        fontWeight="bold"
        letterSpacing={2}
      >
        The Last of Us Community
      </Text>
      <Text
        fontSize={{ base: "md", md: "0.9em" }}
        mt={4}
        maxW="600px"
        letterSpacing={2}
      >
        Inspired by the world of The Last of Us, learn how to cosplay as your
        favourite characters, download wallpapers, and explore more ways to
        celebrate The Last of Us universe.
      </Text>
    </Box>
  );
};

export default Community;
