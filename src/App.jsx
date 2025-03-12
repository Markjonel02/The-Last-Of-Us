import MainComponent from "./components/MainComponent";
import Story from "./components/Story";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Chapters from "./components/Chapters";
import { Box } from "@chakra-ui/react";
import { memo } from "react";
import Characters from "./components/Characters";

const App = () => {
  return (
    <Box>
      <Navigation />
      <MainComponent>
        <Box height="auto">
          <Home />
        </Box>

        <Box height="auto">
          <Story />
        </Box>
        <Box height="auto">
          <Map />
        </Box>
        <Box height="auto">
          <Chapters />
        </Box>
        <Box height="auto">
          <Characters />
        </Box>
      </MainComponent>
    </Box>
  );
};

export default memo(App);
