import React from "react";
import { tabData } from "../utils/Tabdata";
const firstTab = tabData[1];
import { Box, Image, Text } from "@chakra-ui/react";
const Tlous4 = () => {
  return (
    <Box>
      {/* The Image */}
      <Image
        src={firstTab.banner}
        alt={firstTab.name}
        width={"100%"}
        height={"100%"}
        style={{
          objectFit: "cover", // Ensures the image covers the entire container
        }}
      />

      {/* Title on top of the image */}
      <Box
        style={{
          position: "absolute", // Overlay the text on top of the image
          top: "30%",
          left: "5%",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px", // Optional rounded corners
          textAlign: "left",
        }}
      >
        <Text
          as="h1"
          fontSize="5em"
          fontWeight="bold"
          letterSpacing={3}
          data-aos="fade-up"
        >
          {firstTab.title}
        </Text>
      </Box>
    </Box>
  );
};

export default Tlous4;
