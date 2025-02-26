import React, { useState } from "react";
import { last_of_us } from "../components/utils/Data";
import {
  Box,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import bg from "../assets/img/white-concrete-wall-background-vintage-style-graphic-design-wallpaper_226189-2962.jpg";

const Chapters = () => {
  const mainComponentStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "fixed",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleOpen = (chapter) => {
    setSelectedChapter(chapter);
    onOpen();
  };

  return (
    <Flex style={mainComponentStyle}>
      <Box p={5} position="relative" zIndex={2}>
        <Text fontSize="5em" color="blackAlpha.800" textAlign="center">
          CHAPTERS
        </Text>

        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {last_of_us.map((chapter, index) => (
            <Box
              key={index}
              onClick={() => handleOpen(chapter)}
              cursor="pointer"
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              position="relative" // Ensure it respects the z-index
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Image
                src={chapter.place}
                alt={chapter.name}
                w="100%"
                h="200px"
                objectFit="cover"
                borderRadius="md"
                zIndex={2} // Ensure it's above the background images
              />
              <Text
                textAlign="center"
                fontWeight="bold"
                p={2}
                letterSpacing="1px"
                zIndex={2} // Ensure it's above the background images
              >
                <Text as="h1" fontSize={{ base: "1.3em" }}>
                  {chapter.name}
                </Text>
                <Text as="p" fontWeight="300" noOfLines={2}>
                  {chapter.desc.substring(0, 200)}...
                </Text>
              </Text>
            </Box>
          ))}
        </Grid>

        {selectedChapter && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedChapter.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Image
                  src={selectedChapter.place}
                  alt={selectedChapter.name}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                  borderRadius="md"
                  mb={4}
                />
                <Text>
                  Description of {selectedChapter.name} {selectedChapter.desc}.
                </Text>
                <Box mt={4}>
                  <iframe
                    width="100%"
                    height="300"
                    src="https://www.youtube.com/embed/sample_video_id" // Replace with actual video links
                    title={selectedChapter.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </Flex>
  );
};

export default Chapters;
