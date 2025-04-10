import { lazy, Suspense, memo } from "react";
import { Box, Text } from "@chakra-ui/react";
import BacktoTop from "./components/BacktoTop";
const MainComponent = lazy(() => import("./components/MainComponent"));
const Story = lazy(() => import("./components/Story"));
const Navigation = lazy(() => import("./components/Navigation"));
const Map = lazy(() => import("./components/Map"));
const Community = lazy(() => import("./components/Community"));
const Characters = lazy(() => import("./components/Characters"));
const Overview = lazy(() => import("./components/Overview"));
const Discover = lazy(() => import("./components/Discover"));
const Building = lazy(() => import("./components/Building"));
const Home = lazy(() => import("./components/Home"));
const Faq = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Footer"));

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
      <MainComponent>
        <header>
          <Navigation />
        </header>
        <Overview />
        <Story />
        <Map />
        <Discover />
        <Characters />
        <Home />
        <Building />
        <Community />
        <Faq /> <Footer />
        <BacktoTop />
      </MainComponent>
    </Suspense>
  );
};

export default memo(App);
