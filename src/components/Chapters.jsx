/* import React, { useState } from "react";

 */
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
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Chapters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedChapter, setSelectedChapter] = useState(null);

  const handleOpen = (chapter) => {
    setSelectedChapter(chapter);
    onOpen();
  };

  return (
    <Box p={5}>
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
            _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
          >
            <Image
              src={chapter.place}
              alt={chapter.name}
              w="100%"
              h="200px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text
              textAlign="center"
              fontWeight="bold"
              p={2}
              letterSpacing="1px"
            >
              {chapter.name}
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
              <Text>Description of {selectedChapter.name} goes here.</Text>
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
  );
};

export default Chapters;
