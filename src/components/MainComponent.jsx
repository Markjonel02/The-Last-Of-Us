import { Box } from "@chakra-ui/react";
const MainComponent = ({ children }) => {
  return (
    <Box height="100vh" bg={"purple.200"}>
      {children}
    </Box>
  );
};

export default MainComponent;
