import { useState } from "react";
import bg from "../assets/img/Banner/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp";
import {
  Radio,
  RadioGroup,
  Box,
  Flex,
  Icon,
  Text,
  Button,
  HStack,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPlaystation } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const MotionBox = motion(Box);


const TLousRemasteredii = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex
        bg={`url(${bg})`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        height="100vh"
        width="100%"
        position="relative"
        flexDirection="column"
        justify="flex-start"
        align="flex-start"
        px={8}
        py={8}
      >
        <Box mb={4}>
          <Text
            color="white"
            fontSize={["2xl", "4em"]}
            fontWeight="normal"
            letterSpacing={1}
            mb={2}
          >
            The Last of Us Part II Remastered
          </Text>
          <Text
            color="white"
            fontSize="1em"
            fontWeight="normal"
            letterSpacing={1}
            mb={2}
          >
            sony interactive entertainment
          </Text>
          <Text color="white" fontSize="sm" letterSpacing={1} mb={2}>
            {[...Array(5)].map((_, index) => (
              <Icon key={index} as={FaStar} color="white" boxSize={3} mx={1} />
            ))}
            4.49 220.5K ratings
          </Text>
        </Box>

        <RadioGroup onChange={setSelectedValue} value={selectedValue} mb={2}>
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
              borderColor={selectedValue === "full" && "gray.600"}
            >
              <Radio value="full">
                <Text letterSpacing={1} fontSize={{ base: "1em", md: "1.3em" }}>
                  php: 2,770
                </Text>
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
              borderColor={selectedValue === "trial" && "gray.600"}
            >
              <Radio value="trial">
                <HStack align="start" spacing={3}>
                  <Box>
                    <Text
                      fontWeight="normal"
                      letterSpacing={1}
                      fontSize={{ base: "1em", md: "1.3em" }}
                    >
                      Game Trial
                    </Text>
                    <HStack spacing={1} mt={1}>
                      <Icon as={FaPlaystation} color="yellow.400" />
                      <Text fontSize="sm" color="yellow.400">
                        Subscribe to PlayStation Plus Premium to play a
                        2&#x2010;hour full game trial
                      </Text>
                    </HStack>
                  </Box>
                </HStack>
              </Radio>
            </MotionBox>
          </Stack>
        </RadioGroup>

        <HStack spacing={4}>
          <Button
            colorScheme="red"
            size="md"
            fontWeight="normal"
            borderRadius={30}
            letterSpacing={1}
            bg="#d63d00ff"
            px={20}
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
            borderColor="transparent"
            borderRadius="50%" // Full circle
            width="60px" // Ensure equal width and height
            height="60px" // Ensure equal width and height
            aria-label="Like button"
            fontSize="3xl"
          >
            <Icon
              as={liked ? AiFillHeart : AiOutlineHeart}
              color={liked ? "red" : "gray.500"} // Change heart outline color dynamically
            />
          </Button>
        </HStack>

        <Text color="white" fontSize="xs" mt={4} letterSpacing={1}>
          Blood and Gore, Intense Violence, Nudity, Sexual Content, Strong
          Language, Use of Drugs
        </Text>

        {/* Added info section from image */}
        <Box mt={6} color="white" fontSize="sm" letterSpacing={1}>
          <Text fontWeight="normal" mb={2}>
            Released 01&#x2010;19&#x2010;2024
          </Text>
          <Stack spacing={1}>
            <Text>🌐 Offline play enabled</Text>
            <Text>👤 1 player</Text>
            <Text>🎮 Remote Play supported</Text>
            <Text>🕹 PS5 Version</Text>
            <Text>
              🎧 Vibration function and trigger effect supported DualSense
              wireless controller
            </Text>
            <Text>📈 PS5 Pro Enhanced</Text>
            <Text>💡 Game Help supported</Text>
            <Text>
              ☁️ PS5 game streaming supported only with Premium subscription
            </Text>
          </Stack>
        </Box>
      </Flex>

    
    </>
  );
};

export default TLousRemasteredii;
