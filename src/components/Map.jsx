import React from "react";
import Maps from "../assets/img/Map.jpg";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import grunge from "../assets/img/4-grunge-rectangale-frame-4.png";
const Map = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="Column"
        width="full"
        height="100vh"
        sx={{
          backgroundImage: `url(${grunge})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundColor: "rgba(249, 248, 248, 0.6)",
          boxShadow: "0 0 20px rgba(200, 200, 200, 0.5)",
        }}
      >
        <Box>
          <Text fontSize="5em" color="blackAlpha.800">
            MAPS{" "}
          </Text>
        </Box>
        <Image src={Maps} width="800px" height={"auto"} alt="Last of us map" />
      </Flex>
    </>
  );
};

export default Map;
