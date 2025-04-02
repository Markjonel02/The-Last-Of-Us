import { lazy, Suspense, memo } from "react";
import { Box, Text } from "@chakra-ui/react";

const MainComponent = lazy(() => import("./components/MainComponent"));
const Story = lazy(() => import("./components/Story"));
const Navigation = lazy(() => import("./components/Navigation"));
const Map = lazy(() => import("./components/Map"));
const Chapters = lazy(() => import("./components/Chapters"));
const Characters = lazy(() => import("./components/Characters"));
const Overview = lazy(() => import("./components/Overview"));
const Discover = lazy(() => import("./components/Discover"));
const Building = lazy(() => import("./components/Building"));
const Home = lazy(() => import("./components/Home"));
const LoadingPlaceholder = () => (
  <Box className="loading-container">
    <Box className="loading-shimmer">
      <Text
        as="h1"
        fontSize={{ base: "2em", md: "3em", xl: "9em" }}
        className="glowing-text"
      >
        the last of us
      </Text>
      <Text
        as="h4"
        textAlign="center"
        fontSize={{ base: "1em", md: "2em", xl: "4em" }}
        className="glowing-text"
      >
        Loading...
      </Text>
    </Box>
  </Box>
);

const App = () => {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Box>
        <Navigation />
        <MainComponent>
          <Overview />
          <Story />
          <Map />
          <Discover />
          <Home />
          <Characters />

          <Building />
        </MainComponent>
      </Box>
    </Suspense>
  );
};

export default memo(App);
