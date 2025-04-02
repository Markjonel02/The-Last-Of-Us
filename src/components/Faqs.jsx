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
import bg from "../assets/img/Banner/faqs bg.png"; // Ensure correct path

const faqs = [
  {
    question: "What order should I play the games in?",
    answer: "You can start with...",
  },
  {
    question: "What platforms is The Last of Us available for?",
    answer: "It's available on...",
  },
  {
    question: "What kind of game is The Last of Us? Is it a horror series?",
    answer: "It's an action-adventure...",
  },
  {
    question: "Is there multiplayer in The Last of Us?",
    answer: "Yes, there is a multiplayer mode...",
  },
];

const Faqs = () => {
  return (
    <Flex
      height="100vh"
      bg="black"
      direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
      overflow="hidden"
    >
      {/* Left Side - FAQs */}
      <Box
        flex={{ base: "1", md: "0.4" }}
        maxWidth={{ base: "100%", md: "500px" }}
        p={{ base: 6, md: 10 }}
        color="white"
        textAlign="left"
        zIndex="1" // Keeps FAQs above the image
      >
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={6}>
          FAQs
        </Text>
        <Accordion allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} border="none">
              <AccordionButton
                bg="gray.700"
                color="white"
                p={4}
                borderRadius="md"
                _hover={{ bg: "gray.600" }}
                _expanded={{ bg: "gray.500" }}
              >
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} bg="gray.800">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      {/* Right Side - Fixed Background Image */}
      <Box
        flex={{ base: "1", md: "0.6" }} // Image takes 60% on desktop
        minWidth="50%" // Prevents it from shrinking too much
        bgImage={`url(${bg})`}
        bgSize="cover" // Ensures full image visibility
        bgPosition="center" // Keeps image centered
        height="100vh" // Full height
        position="relative"
      />
    </Flex>
  );
};

export default Faqs;
