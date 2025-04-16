import { lazy, Suspense, memo, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import BacktoTop from "./components/BacktoTop";
import { Routes, Route, Outlet } from "react-router-dom";
const Navigation = lazy(() => import("./components/Navigation"));
const Home = lazy(() => import("./components/Home"));
const Faq = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Footer"));
const Pricing = lazy(() => import("./routes/Pricing"));
const Nopage = lazy(() => import("./routes/Horror404"));
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles const

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
const Layout = () => (
  <>
    <Navigation />
    <Suspense fallback={<LoadingPlaceholder />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </Suspense>
    <Footer /> <BacktoTop />
  </>
);

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </Suspense>
  );
};
export default memo(App);
