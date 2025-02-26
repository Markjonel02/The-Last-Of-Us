import { useState, createContext } from "react";
import { Box } from "@chakra-ui/react";
const sampleContext = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Box></Box>
    </>
  );
};

export default sampleContext;
