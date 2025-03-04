import MainComponent from "./components/MainComponent";
import Story from "./components/Story";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Chapters from "./components/Chapters";
import { Box } from "@chakra-ui/react";
import { memo } from "react";
const App = () => {
  return (
    <Box>
      <Navigation />
      <MainComponent>
        <Home />
        <Story />
        <Map /> <Chapters />
      </MainComponent>
    </Box>
  );
};

export default memo(App);
