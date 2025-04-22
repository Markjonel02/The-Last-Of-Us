import { useState } from "react";
import {
  Radio,
  RadioGroup,
  Box,
  Icon,
  Text,
  Button,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import banner from "../assets/img/Banner/tlousmobile.png";
import { motion } from "framer-motion";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaPlaystation } from "react-icons/fa";
const MotionBox = motion(Box);
const Noreturn = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [liked, setLiked] = useState(false);
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
      {/* Right Text Container - Moves to top on small screens */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="black"
      >
        <Text fontSize="1.8em" mb={2} color="white">
          The Last of us 2 Remastered
        </Text>
        {/* Purchase Options */}
        <RadioGroup onChange={setSelectedValue} value={selectedValue} mb={6}>
          <Stack spacing={4}>
            <MotionBox
              animate={{
                backgroundColor: selectedValue === "full" ? "#2d2d2d" : "#000",
              }}
              transition={{ duration: 0.3 }}
              p={4}
              borderRadius="md"
              color="white"
              borderWidth={selectedValue === "full" ? "2px" : "1px"}
              borderColor={selectedValue === "full" ? "gray.600" : "gray.700"}
            >
              <Radio value="full">
                <Text fontSize={{ base: "md", md: "lg" }}>PHP: 2,770</Text>
              </Radio>
            </MotionBox>

            <MotionBox
              animate={{
                backgroundColor: selectedValue === "trial" ? "#2d2d2d" : "#000",
              }}
              transition={{ duration: 0.3 }}
              p={4}
              borderRadius="md"
              color="white"
              borderWidth={selectedValue === "trial" ? "2px" : "1px"}
              borderColor={selectedValue === "trial" ? "gray.600" : "gray.700"}
            >
              <Radio value="trial">
                <HStack align="start" spacing={3}>
                  <Box>
                    <Text fontSize={{ base: "md", md: "lg" }}>Game Trial</Text>
                    <HStack spacing={1} mt={1}>
                      <Icon as={FaPlaystation} color="yellow.400" />
                      <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="yellow.400"
                      >
                        Subscribe to PlayStation Plus Premium to play a 2‑hour
                        trial
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
              </Radio>
            </MotionBox>
          </Stack>
        </RadioGroup>
        {/* Action Buttons */}
        <HStack spacing={4} mb={4} flexWrap="wrap">
          <Button
            colorScheme="red"
            fontWeight="normal"
            borderRadius="full"
            letterSpacing={1}
            px={{ base: 10, md: 20 }}
            size="lg"
            onClick={() =>
              window.open(
                "https://www.playstation.com/en-us/games/the-last-of-us-part-ii-remastered/",
                "_blank"
              )
            }
          >
            Subscribe
          </Button>

          <Button
            onClick={() => setLiked(!liked)}
            color="white"
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: liked ? "red.500" : "gray.200" }}
            borderRadius="full"
            w="60px"
            h="60px"
            aria-label="Like button"
            fontSize="3xl"
          >
            <Icon
              as={liked ? AiFillHeart : AiOutlineHeart}
              color={liked ? "red" : "gray.500"}
            />
          </Button>
        </HStack>
      </Box>

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
    </Box>
  );
};

export default Noreturn;
