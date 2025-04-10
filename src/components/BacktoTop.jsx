import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position
  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
  };

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <Box
        as="button"
        onClick={scrollToTop}
        position="fixed"
        bottom="20px"
        right="20px"
        bg="white"
        color="black"
        p="10px"
        borderRadius="md"
        boxShadow="md"
        zIndex="1000"
        _hover={{ bg: "gray.100" }}
      >
        <ArrowUp />
      </Box>
    )
  );
};

export default BackToTop;
