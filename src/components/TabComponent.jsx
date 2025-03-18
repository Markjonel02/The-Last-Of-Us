import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const CustomTabs = () => {
  return (
    <Tabs variant="unstyled" maxW="md" isFitted defaultIndex={0}>
      <TabList>
        <Tab
          border="2px solid white"
          color="white"
          _selected={{
            bg: "black",
            color: "white",
          }}
          _hover={{
            bg: "white",
            color: "black",
          }}
          padding="10px 20px"
        >
          INFECTERS
        </Tab>
        <Tab
          border="2px solid white"
          color="white"
          _selected={{
            bg: "white",
            color: "black",
          }}
          _hover={{
            bg: "white",
            color: "black",
          }}
          padding="10px 20px"
        >
          MAIN CHARACTERS
        </Tab>
        <Tab
          border="2px solid white"
          color="white"
          _selected={{
            bg: "black",
            color: "white",
          }}
          _hover={{
            bg: "white",
            color: "black",
          }}
          padding="10px 20px"
        >
          SECOND CHARACTERS
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Details about INFECTERS</p>
        </TabPanel>
        <TabPanel>
          <p>Details about MAIN CHARACTERS</p>
        </TabPanel>
        <TabPanel>
          <p>Details about SECOND CHARACTERS</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
