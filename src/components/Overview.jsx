import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { tabData } from "./utils/Tabdata";
import "swiper/css/free-mode";

import Tlous1 from "./Tlous_tabs/Tlous1";
import Tlous2 from "./Tlous_tabs/Tlous2";
import Tlous3 from "./Tlous_tabs/Tlous3";
import Tlous4 from "./Tlous_tabs/Tlous4";
import Tlous5 from "./Tlous_tabs/Tlous5";

const components = [Tlous1, Tlous2, Tlous3, Tlous4, Tlous5];

const Overview = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue" bg="#000000">
      {/* Tab Panels - Each panel corresponds to a specific component */}
      <TabPanels>
        {components.map((Component, index) => (
          <TabPanel
            key={index}
            style={{
              width: "100%",
              height: "100%", // Full viewport height
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: 0,
              position: "relative", // Set relative positioning for the container
            }}
          >
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
      {/* Tab Navigation */}
      <TabList overflow="hidden">
        <Swiper
          slidesPerView={5}
          grabCursor={true}
          modules={[FreeMode]}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumBounce: true,
            sticky: true,
          }}
          breakpoints={{
            480: { slidesPerView: 2.8, spaceBetween: 5 },
            760: { slidesPerView: 3, spaceBetween: 5 },
            1024: { slidesPerView: 3.8, spaceBetween: 5 },
            1114: { slidesPerView: 5, spaceBetween: 0 },
          }}
        >
          {tabData.map((tab, index) => (
            <SwiperSlide key={tab.id}>
              <Tab
                width={{ base: "220px", md: "280px", xl: "320px" }}
                height={{ base: "120px", md: "180px", xl: "180px" }}
                style={{ margin: "20px 0", borderRadius: "8px" }}
                className="tab-item"
              >
                <Image
                  src={tab.image}
                  alt={`Tab ${tab.id}`}
                  borderRadius="inherit"
                  w="100%"
                  h="100%"
                />
              </Tab>
            </SwiperSlide>
          ))}
        </Swiper>
      </TabList>
    </Tabs>
  );
};

export default Overview;
