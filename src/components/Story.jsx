import { Box, Flex, Text } from "@chakra-ui/react";
import bloodhand from "../assets/img/Horror hand.png";

const Story = () => {
  return (
    <>
      <Flex
        h="100vh"
        w="full"
        p="4"
        top={5}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        sx={{
          backgroundImage: `url(${bloodhand})`,

          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box>
          <Text
            fontSize={["2em", "4em", "5em"]}
            fontWeight="bold"
            color="#1c1a19ff"
          >
            Story
          </Text>
        </Box>

        <Box
          mt={4}
          p={4}
          bg="gray.800"
          opacity={0.8}
          borderRadius="md"
          w={["90%", "80%", "60%"]}
        >
          <Text
            fontSize={["md", "lg", "xl"]}
            letterSpacing={2}
            color="whiteAlpha.900"
          >
            The Last of Us is set in a post apocalyptic world where a fungal
            infection has devastated humanity, turning people into monstrous
            creatures. The story follows Joel, a hardened survivor who is tasked
            with smuggling a young girl named Ellie across the United States.
            Ellie is believed to be the key to finding a cure for the infection
            because she is immune. Throughout their journey, Joel and Ellie face
            numerous challenges and dangers, including hostile humans and
            infected creatures. As they travel together, they form a deep bond,
            and Joel begins to see Ellie as a surrogate daughter. The story is
            emotional and gripping, exploring themes of survival, trust, and the
            lengths people will go to protect their loved ones. The game has
            received critical acclaim for its storytelling, character
            development, and immersive gameplay.
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Story;
