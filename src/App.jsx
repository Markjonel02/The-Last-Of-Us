import { lazy, Suspense, memo, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import BacktoTop from "./components/BacktoTop";
import { Routes, Route } from "react-router-dom";

const Navigation = lazy(() => import("./components/Navigation"));

const Home = lazy(() => import("./components/Home"));
const Faq = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Footer"));
const Pricing = lazy(() => import("./routes/Pricing"));

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing style
    });
  }, []);
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
      <Footer />
      <BacktoTop />
    </Suspense>
  );
};

export default memo(App);
