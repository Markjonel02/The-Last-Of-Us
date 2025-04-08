import React from "react";
import {
  Box,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import bg from "../assets/img/Banner/faqs bg.png"; // Confirm the path

const faqs = [
  {
    question: "What order should I play the games in?",
    answer:
      "We recommend players start with The Last of Us Part I, followed by its included expansion, Left Behind, and then play The Last of Us Part II to experience the story from the very beginning. Players that play The Last of Us Part II first will be able to appreciate and enjoy the game as it was designed as a standalone, complete isolated story. Some narrative details, characters and themes will have a deeper meaning if players do start with The Last of Us Part I.",
  },
  {
    question: "What platforms is The Last of Us available for?",
    answer:
      "The Last of Us Part I is currently available for PS5 and for PC. The Last of Us Part II is available for PS4 and The Last of Us Part II Remastered is currently available for PS5.",
  },
  {
    question: "What kind of game is The Last of Us? Is it a horror series?",
    answer:
      "The Last of Us is a series of third person action adventure games that feature tense and dramatic action, gameplay, and other intense elements. Though some players may find these moments frightening, it is not a horror franchise.",
  },
  {
    question: "Is there multiplayer in The Last of Us?",
    answer:
      "No, The Last of Us Part I and Part II do not have multiplayer modes.",
  },
];

const Faqs = () => {
  return (
    <Box position="relative" minHeight="100vh" bg="black" overflow="hidden">
      {/* Right-side background image */}
      <Box
        position="absolute"
        top="0"
        right="0"
        width={{ base: "100%", md: "60%" }}
        height="100%"
        backgroundImage={`url(${bg})`}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="contain"
        zIndex="0"
        display={{ base: "none", sm: "block" }}
      />

      {/* FAQ Content */}
      <Flex
        direction="column"
        px={{ base: 4, md: 8 }}
        py={10}
        maxWidth={{ base: "100%", md: "40%" }}
        position="relative"
        zIndex="1"
        color="white"
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          letterSpacing={1}
          fontWeight="bold"
          mb={6}
        >
          FAQs
        </Text>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} border="none">
              <AccordionButton
                bg="gray.700"
                color="white"
                p={4}
                mb={2}
                borderRadius="md"
                _hover={{ bg: "gray.600" }}
                _expanded={{ bg: "gray.500" }}
              >
                <Box flex="1" textAlign="left" letterSpacing={2}>
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                bg="gray.800"
                fontSize="0.9em"
                fontWeight="400"
                letterSpacing={1}
              >
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Box>
  );
};

export default Faqs;
