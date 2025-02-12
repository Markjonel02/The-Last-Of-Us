"use client";
import { motion } from "framer-motion";
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
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";

export default function HoverNavbar() {
  const displayText = useBreakpointValue({ base: "none", md: "block" });
  return (
    <Flex
      h="full"
      w="full"
      p={["4", "4"]}
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="10"
      justifyContent="space-between"
      sx={{
        backdropFilter: "blur(1px) saturate(136%)",
        WebkitBackdropFilter: "blur(1px) saturate(136%)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",

        border: "1px solid rgba(0, 0, 0, 0.13)",
      }}
    >
      {/* Logo */}
      <Box left="6">
        <Text
          color="whiteAlpha.900"
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
}

const MobileMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        icon={<FiMenu />}
        variant="unstyled"
        onClick={onOpen}
        color="white"
      />

      <Drawer isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="gray.900">
          <DrawerCloseButton color="white" />
          <DrawerBody mt={10}>
            <Accordion allowToggle>
              {TABS.map((t) => (
                <AccordionItem key={t.id} border="none">
                  <AccordionButton _hover={{ bg: "gray.800" }}>
                    <Text
                      flex="1"
                      textAlign="left"
                      color="whiteAlpha.900"
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
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <Flex
      onMouseLeave={() => handleSetSelected(null)}
      position={"relative"}
      height={"fit-content"}
      alignItems="center"
      gap={6}
      direction="row"
    >
      <Flex gap={4} direction="row" align="center">
        {TABS.map((t) => (
          <Tab
            key={t.id}
            handleSetSelected={handleSetSelected}
            selected={selected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        ))}
      </Flex>

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </Flex>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <Button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      variant={"none"}
      role="group"
      as={Flex}
      alignItems="center"
      gap={1}
      borderRadius="full"
      px={3}
      py={1.5}
      fontSize="md"
      transition="colors 0.2s, transform 0.2s"
      bg={selected === tab ? "gray.800" : "transparent"}
      color={selected === tab ? "gray.100" : "gray.400"}
      _hover={{
        bg: selected !== tab ? "gray.700" : undefined,
        color: selected !== tab ? "gray.300" : undefined,
      }}
    >
      <span>{children}</span>
      <FiChevronDown
        style={{
          transition: "transform 0.2s",
          transform: selected === tab ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id={"overlay-content"}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      style={{
        position: "absolute",
        left: "0",
        top: "calc(100% + 24px)",
        width: "24rem",
        borderRadius: "lg",
        border: "1px solid",
        borderColor: "gray.600",
        padding: "16px",
        background: "gray.900",
      }}
    >
      {TABS.map((t) => (
        <Box overflow={"hidden"} key={t.id}>
          {selected === t.id && (
            <motion.div
              initial={{
                opacity: 0,
                x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{
                color: "white",
                fontFamily: "Helvetica Neue",
              }}
            >
              <t.Component />
            </motion.div>
          )}
        </Box>
      ))}
    </motion.div>
  );
};

const TABS = [
  {
    title: "Products",
    Component: () => (
      <Text fontFamily="HeadlinerNo45" letterSpacing="2px">
        Product Content
      </Text>
    ),
  },
  {
    title: "Pricing",
    Component: () => (
      <Text fontFamily="HeadlinerNo45" letterSpacing="2px">
        Pricing Content
      </Text>
    ),
  },

  {
    title: "Map",
    Component: () => (
      <Text fontFamily="HeadlinerNo45" letterSpacing="2px">
        Maps
      </Text>
    ),
  },

  {
    title: "Characters",
    Component: () => (
      <Text fontFamily="HeadlinerNo45" letterSpacing="2px">
        Characters
      </Text>
    ),
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
