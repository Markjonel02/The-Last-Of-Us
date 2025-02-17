import { Box, Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";
import trees from "../assets/img/trees.jpg";
import bloodhand from "../assets/img/Horror hand.png";
import { useEffect, useState } from "react";
import bloodstain from "../assets/img/bloodstain.png";

const Story = () => {
  const [angle, setAngle] = useState(0);
  const [bloodHandPosition, setBloodHandPosition] = useState({
    x: "50px",
    y: "50px",
    angle: 0,
  });
  const zIndexValue = useBreakpointValue({ base: 3, md: 10 });
  useEffect(() => {
    const imageSize = 200; // Assuming the blood hand image is 200px wide/tall

    const updateBloodHandPosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const maxX = viewportWidth - imageSize;
      const maxY = viewportHeight - imageSize;

      setBloodHandPosition({
        x: `${Math.random() * maxX}px`,
        y: `${Math.random() * maxY}px`,
        angle: Math.random() * 360,
      });
    };

    const angleInterval = setInterval(() => {
      setAngle(Math.random() * 360);
    }, 1000);

    const bloodHandInterval = setInterval(updateBloodHandPosition, 3000);

    updateBloodHandPosition(); // Set initial position

    return () => {
      clearInterval(angleInterval);
      clearInterval(bloodHandInterval);
    };
  }, []);

  return (
    <Flex
      h="100vh"
      w="full"
      p="4"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      position="relative"
      sx={{
        backgroundImage: `url(${trees})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
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

      {/* Blood Hand Image */}
      <Image
        src={bloodhand}
        position="absolute"
        width="200px"
        height="auto"
        top={bloodHandPosition.y}
        left={bloodHandPosition.x}
        transform={`rotate(${bloodHandPosition.angle}deg)`}
        transition="all 0.5s ease-in-out"
        zIndex={2}
      />

      <Image
        src={bloodstain}
        width="500px"
        height="auto"
        position="absolute"
        zIndex={zIndexValue}
        opacity={{ base: 0.6, md: 0.7 }}
      />
      {/* Content */}
      <Box position="relative" zIndex={2}>
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
        w={["90%", "80%", "60%"]}
        position="relative"
        zIndex={2}
      >
        <Text
          fontSize={["md", "lg", "xl"]}
          letterSpacing={2}
          color="whiteAlpha.900"
        >
          <Text as="span" backgroundColor="#FECE61" p={2} borderRadius={2}>
            The Last of Us
          </Text>{" "}
          is set in a post apocalyptic world where a fungal infection turns
          people into monstrous creatures. Joel, a survivor, must smuggle Ellie,
          a girl immune to the infection, across the U.S. They face many dangers
          and form a deep bond, with Joel seeing Ellie as a daughter. The story
          explores survival, trust, and protection and is acclaimed for its
          storytelling and character development.
        </Text>
      </Box>
    </Flex>
  );
};

export default Story;
