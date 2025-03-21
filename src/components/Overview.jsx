import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";

import tlou1 from "../assets/img/Thumbnails/the-last-of-us-part-i-keyart-01-en-18may22.webp";
import tlou2 from "../assets/img/Thumbnails/the-last-of-us-part-ii-thumbnail-02-en-16nov23.webp";
import tlou3 from "../assets/img/Thumbnails/TLOUTEST-HBO-Keyart-01-en-06dec22.webp";
import tlou4 from "../assets/img/Thumbnails/the-last-of-us-part-2-keyart-01-en-15nov22.webp";
const tlous = (id, name, image) => {
  id, name, image;
};

const tab = [
  tlous(1, "tlou1", tlou1),
  tlous(2, "tlou2", tlou2),
  tlous(3, "tlou3", tlou3),
  tlous(4, "tlou4", tlou4),
];
const Overview = () => {
  return (
    <Tabs>
      <TabPanels>
        <TabPanel>
          <Image
            src="https://via.placeholder.com/300"
            alt="Placeholder Image 1"
          />
        </TabPanel>
        <TabPanel>
          <Image
            src="https://via.placeholder.com/300"
            alt="Placeholder Image 2"
          />
        </TabPanel>
        <TabPanel>
          <Image
            src="https://via.placeholder.com/300"
            alt="Placeholder Image 3"
          />
        </TabPanel>
      </TabPanels>
      <TabList>
        <Tab>
          <Image src={tlou1} alt="tlou1" />
        </Tab>
        <Tab>Image 2</Tab>
        <Tab>Image 3</Tab>
      </TabList>
    </Tabs>
  );
};

export default Overview;
