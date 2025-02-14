import { Box, Flex, Text, Image } from "@chakra-ui/react";
import trees from "../assets/img/trees.jpg";
import bloodhand from "../assets/img/Horror hand.png";
import { useEffect, useState } from "react";

const Story = () => {
  const [angle, setAngle] = useState(0);
  const [bloodHandPosition, setBloodHandPosition] = useState({
    x: "50%",
    y: "50%",
    angle: 0,
  });

  useEffect(() => {
    const angleInterval = setInterval(() => {
      setAngle(Math.random() * 360);
    }, 1000);

    const bloodHandInterval = setInterval(() => {
      setBloodHandPosition({
        x: `${Math.random() * 80 + 10}%`, // Random position between 10% and 90%
        y: `${Math.random() * 80 + 10}%`,
        angle: Math.random() * 360,
      });
    }, 3000);

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

      {/* Content */}
      <Box position="relative" zIndex={2}>
        <Text
          fontSize={["2em", "4em", "5em"]}
          fontWeight="bold"
          color="#f2f2f2"
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
          is set in a post apocalyptic world where a fungal infection has
          devastated humanity, turning people into monstrous creatures. The
          story follows Joel, a hardened survivor who is tasked with smuggling a
          young girl named Ellie across the United States. Ellie is believed to
          be the key to finding a cure for the infection because she is immune.
          Throughout their journey, Joel and Ellie face numerous challenges and
          dangers, including hostile humans and infected creatures. As they
          travel together, they form a deep bond, and Joel begins to see Ellie
          as a surrogate daughter. The story is emotional and gripping,
          exploring themes of survival, trust, and the lengths people will go to
          protect their loved ones. The game has received critical acclaim for
          its storytelling, character development, and immersive gameplay.
        </Text>
      </Box>
    </Flex>
  );
};

export default Story;
