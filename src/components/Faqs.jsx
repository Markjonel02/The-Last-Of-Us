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
  {
    question: "Is there DLC?",
    answer:
      "No, there is currently no DLC available for The Last of Us Part I or Part II. Left Behind, which was initially released as DLC for the original The Last of Us game in 2013, is included with Part I.",
  },
  {
    question: "how dificult is The Last of Us?",
    answer:
      "The Last of Us Part I and Part II offer a range of difficulty options for players depending on their preferences. Difficulty modes range from Very Light, with a focus on exploration and story, all the way up to our signature Grounded difficulty, for players that want a hyper realistic, intensely challenging experience.Our accessibility options also include a host of custom modifiers that allow players to customise to their playstyle and skill level.",
  },
];
const Faqs = () => {
  return (
    <Box bg="black" overflow="hidden" id="faq">
      {/* Mobile Top Background Image */}

      <Flex direction={{ base: "column", md: "row" }} minHeight="100vh">
        {/* FAQ Section (left on desktop, below on mobile) */}
        <Flex
          direction="column"
          px={{ base: 4, md: 8 }}
          py={10}
          flex={{ base: "0 0 auto", md: "0 0 40%" }}
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

        {/* Desktop Right Background Image */}
        <Box
          display={{ base: "block", md: "block" }}
          width={{ base: "100%", md: "100%" }}
          minHeight={{ base: "300px", md: "100vh" }}
          backgroundImage={`url(${bg})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundSize="contain"
        />
      </Flex>
    </Box>
  );
};

export default Faqs;
