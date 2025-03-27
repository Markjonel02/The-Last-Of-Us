import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Box,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { tabData } from "./utils/Tabdata";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import Tlous1 from "./Tlous_tabs/Tlous1";
import Tlous2 from "./Tlous_tabs/Tlous2";
import Tlous3 from "./Tlous_tabs/Tlous3";
import Tlous4 from "./Tlous_tabs/Tlous4";
import Tlous5 from "./Tlous_tabs/Tlous5";

const components = [Tlous1, Tlous2, Tlous3, Tlous4, Tlous5];

const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <Tabs
      variant="unstyled"
      bg="#000000"
      index={activeIndex}
      onChange={setActiveIndex}
    >
      <TabPanels>
        {components.map((Component, index) => (
          <TabPanel
            key={index}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              padding: 0,
              position: "relative",
            }}
          >
            <Component isActive={activeIndex === index} />
          </TabPanel>
        ))}
      </TabPanels>

      {/* Tab Navigation */}
      <TabList overflow="hidden" className="tab-list">
        <Swiper
          slidesPerView={5}
          grabCursor={true}
          spaceBetween={5}
          modules={[FreeMode]}
          freeMode={{ enabled: true, momentum: true }}
          breakpoints={{
            480: { slidesPerView: 2.8 },
            760: { slidesPerView: 3.5 },
            1024: { slidesPerView: 3.8 },
            1114: { slidesPerView: 5 },
          }}
        >
          {tabData.map((tab, index) => (
            <SwiperSlide key={tab.id}>
              <Tab
                width={{ base: "220px", md: "280px", l: "320px" }}
                height={{ base: "120px", md: "180px", l: "180px" }}
                className={`tab-item ${activeIndex === index ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                {hoverIndex !== null && hoverIndex !== index && (
                  <div className="tab-overlay"></div>
                )}
                <Image
                  src={tab.image}
                  alt={`Tab ${tab.id}`}
                  borderRadius="inherit"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  className={`tab-image ${
                    activeIndex === index ? "active" : ""
                  }`}
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
