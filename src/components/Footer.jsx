import {
  Box,
  Text,
  Link,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const TheLastOfUsFooter = () => {
  const bg = useColorModeValue("gray.900", "gray.800");
  const textColor = useColorModeValue("gray.300", "gray.400");
  const hoverColor = useColorModeValue("white", "white");

  return (
    <Box bg={bg} color={textColor} px={{ base: 6, md: 16 }} py={12}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        {/* Branding */}
        <Box>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="wide"
            color={hoverColor}
          >
            THE LAST OF US
          </Text>
          <Text mt={4} fontSize="sm">
            Survive and endure in a world reclaimed by nature and danger. Stay
            updated with news and content.
          </Text>
        </Box>

        {/* Navigation */}
        <VStack align="flex-start">
          <Text
            fontWeight="400"
            fontSize="lg"
            color={hoverColor}
            letterSpacing={2}
          >
            Explore
          </Text>
          <Link href="#" _hover={{ color: hoverColor }}>
            Home
          </Link>
          <Link href="#" _hover={{ color: hoverColor }}>
            Story
          </Link>
          <Link href="#" _hover={{ color: hoverColor }}>
            Characters
          </Link>
          <Link href="#" _hover={{ color: hoverColor }}>
            Gallery
          </Link>
        </VStack>

        {/* Support */}
        <VStack align="flex-start">
          <Text
            fontSize="lg"
            color={hoverColor}
            letterSpacing={2}
            fontWeight="400"
          >
            Support
          </Text>
          <Link href="#" _hover={{ color: hoverColor }}>
            Help Center
          </Link>
          <Link href="#" _hover={{ color: hoverColor }}>
            Community
          </Link>
          <Link href="#" _hover={{ color: hoverColor }}>
            Privacy Policy
          </Link>
        </VStack>

        {/* Social */}
        <Box>
          <Text
            fontWeight="400"
            fontSize="lg"
            mb={4}
            color={hoverColor}
            letterSpacing={2}
          >
            Connect
          </Text>
          <HStack spacing={4}>
            <Link href="#">
              <Facebook size={20} />
            </Link>
            <Link href="#">
              <Twitter size={20} />
            </Link>
            <Link href="#">
              <Instagram size={20} />
            </Link>
            <Link href="#">
              <Youtube size={20} />
            </Link>
          </HStack>
        </Box>
      </SimpleGrid>

      {/* Bottom */}
      <Divider my={10} borderColor="gray.700" />
      <Text textAlign="center" fontSize="md" color="whiteAlpha.900">
        &copy; {new Date().getFullYear()} Playstation Sony Interactive
        Entertainment. All rights reserved. <br />
        <a href="https://www.playstation.com/en-us/the-last-of-us/">
          PlayStation®
        </a>
      </Text>
    </Box>
  );
};

export default TheLastOfUsFooter;
