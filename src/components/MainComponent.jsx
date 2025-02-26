import { Box } from "@chakra-ui/react";

const MainComponent = ({ children }) => {
 
  return (
    <Box height="100vh">
      {children}
    </Box>
  );
};

export default MainComponent;
