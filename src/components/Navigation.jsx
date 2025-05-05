"use client";
import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom"; // Import Link from react-router-dom
import blood from "../assets/img/blood.png";

// Create Scroll Context
const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={isScrolling}>
      {children}
    </ScrollContext.Provider>
  );
};

export default function HoverNavbar() {
  return (
    <ScrollProvider>
      <NavBar />
    </ScrollProvider>
  );
}

const NavBar = () => {
  const isScrolling = useContext(ScrollContext);
  const displayText = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Flex
      h="full"
      w="full"
      p="4"
      alignItems="center"
      position="sticky"
      top="0"
      className="navs"
      zIndex="100"
      justifyContent="space-between"
      transition="background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out"
      backdropFilter={isScrolling ? "blur(10px)" : "none"}
      bgColor={!isScrolling ? "none" : "white"}
      boxShadow={isScrolling ? "0 4px 10px rgba(44, 14, 14, 0.1)" : "none"}
      sx={{
        backgroundImage: isScrolling ? "none" : `url(${blood})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        zIndex: 99,
      }}
    >
      {/* Logo */}
      <Box left="6">
        <Text
          color="#1c1a19ff"
          fontFamily="HeadlinerNo45"
          fontWeight={900}
          fontSize={["2xl", "3xl", "4xl", "5xl"]}
          letterSpacing="2px"
          textAlign="center"
          display={displayText}
        >
          THE LAST OF US
        </Text>
      </Box>

      {/* Desktop Navigation */}
      <Flex flex="1" justifyContent="center" display={["none", "flex"]}>
        <TabsElement />
      </Flex>

      {/* Mobile Burger Menu */}
      <Box display={["block", "none"]}>
        <MobileMenu />
      </Box>
    </Flex>
  );
};

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<FiMenu />}
        variant="unstyled"
        onClick={onOpen}
        color="black"
      />

      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" />
          <DrawerBody mt={10}>
            <Accordion allowToggle>
              {TABS.map((t) => (
                <AccordionItem key={t.id} border="none" color="white">
                  <AccordionButton _hover={{ bg: "gray.800" }}>
                    <Text
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize="lg"
                      letterSpacing="2px"
                      fontWeight={800}
                      fontFamily="HeadlinerNo45"
                    >
                      {t.title}
                    </Text>
                    <AccordionIcon color="white" />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <t.Component />
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const TabsElement = () => {
  const [hovered, setHovered] = useState(null);
  const [locked, setLocked] = useState(null);
  const [dir, setDir] = useState(null);

  const handleHover = (val) => {
    if (locked === null) {
      setHovered(val);
    }
  };

  const handleClick = (val) => {
    if (locked === val) {
      setLocked(null);
      setHovered(null);
    } else {
      setDir(locked > val ? "r" : "l");
      setLocked(val);
      setHovered(val);
    }
  };

  return (
    <Flex
      onMouseLeave={() => {
        if (locked === null) setHovered(null);
      }}
      position="relative"
      height="fit-content"
      alignItems="center"
      gap={6}
      direction="row"
    >
      <Flex gap={4} direction="row" align="center">
        {TABS.map((t) => (
          <Tab
            key={t.id}
            handleHover={handleHover}
            handleClick={handleClick}
            selected={hovered || locked}
            tab={t.id}
          >
            <Link to={t.path}>{t.title}</Link> {/* Use Link for navigation */}
          </Tab>
        ))}
      </Flex>

      <AnimatePresence>
        {(hovered || locked) && (
          <Content selected={hovered || locked} dir={dir} />
        )}
      </AnimatePresence>
    </Flex>
  );
};

const Tab = ({ children, tab, handleHover, handleClick, selected }) => {
  const isScrolling = useContext(ScrollContext);
  const isActive = selected === tab;

  return (
    <Button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleHover(tab)}
      onClick={() => handleClick(tab)}
      variant="none"
      role="group"
      as={Flex}
      alignItems="center"
      gap={1}
      borderRadius="full"
      px={3}
      py={1.5}
      fontSize="md"
      letterSpacing={2}
      transition="colors 0.3s, transform 0.2s"
      bg={isActive ? "#1c1a19ff" : "transparent"}
      color={isActive ? "white" : "black"}
      _hover={{
        bg: !isActive && !isScrolling ? "#1c1a19ff" : undefined,
        color: "gray.300",
      }}
    >
      <span>{children}</span>
      <FiChevronDown
        style={{
          transition: "transform 0.2s",
          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Button>
  );
};

const Content = ({ selected, dir }) => (
  <motion.div
    id="overlay-content"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    style={{
      position: "absolute",
      left: "0",
      top: "calc(100% + 24px)",
      width: "24rem",
      borderRadius: "lg",
      border: "1px solid gray.600",
      padding: "16px",
      zIndex: 1000,
      bg: "black",
    }}
  >
    {TABS.map(
      (t) =>
        selected === t.id && (
          <motion.div
            key={t.id}
            initial={{
              opacity: 0,
              x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ color: "white" }}
          >
            <t.Component />
          </motion.div>
        )
    )}
  </motion.div>
);

const TABS = [
  {
    title: "Games",
    path: "/",

    Component: () => (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="10px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
        p={4}
        backdropFilter="blur(10px)"
        letterSpacing={1}
      >
        {/* Left Section with 4 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/#overview"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Overview
          </a>
          <a
            href="/#story"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Story
          </a>
          <a
            href="/#discover"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Discover
          </a>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Character Overview
          </a>
        </Flex>

        {/* Right Section with 3 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/#building"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Building
          </a>
          <a
            href="/#community"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Community
          </a>
          <a
            href="/#faq"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            FAQ&apos;s
          </a>
        </Flex>
      </Flex>
    ),
  },
  {
    title: "Pricing",
    path: "/pricing", // Define path for Pricing
    Component: () => (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="10px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
        p={4}
        backdropFilter="blur(10px)"
        letterSpacing={1}
      >
        {/* Left Section with 4 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/pricing#pricing"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            The last of us II
          </a>
          <a
            href="/pricing#keyfeatures"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Keyfeatures
          </a>
          <a
            href="/pricing#upgrade"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            upgrade
          </a>
        </Flex>

        {/* Right Section with 3 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/pricing#nseries"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Night Series
          </a>
          <a
            href="/pricing#series"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Series
          </a>
        </Flex>
      </Flex>
    ),
  },

  {
    title: "Characters",
    path: "/", // Define path for Characters

    Component: () => (
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={4}
        bg="rgba(0, 0, 0, 0.8)"
        borderRadius="10px"
        boxShadow="0 4px 6px rgba(0, 0, 0, 0.2)"
        p={4}
        backdropFilter="blur(10px)"
        letterSpacing={1}
      >
        {/* Left Section with 4 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Joel miller
          </a>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Ellie Williams
          </a>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Andy Anderson
          </a>
        </Flex>

        {/* Right Section with 3 Links */}
        <Flex direction="column" flex="1" gap={2}>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Tommy Miller
          </a>
          <a
            href="/#Character"
            style={{
              color: "white",
              textDecoration: "none",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#d15a3dff")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Infected
          </a>
        </Flex>
      </Flex>
    ),
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
