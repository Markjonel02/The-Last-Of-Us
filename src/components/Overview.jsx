import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { tabData } from "./utils/Tabdata";
import "swiper/css/free-mode";

const Overview = () => {
  const [active, setActive] = useState(tabData[0].id); // Set first tab as active by default

  return (
    <Tabs bg="#000000">
      <TabPanels>
        {tabData.map((tab, index) => (
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
            {/* The Image */}
            <Image
              src={tab.banner || "https://via.placeholder.com/300"}
              alt={`Tab ${index + 1}`}
              width={"100%"}
              height={"100%"}
              style={{
                objectFit: "cover", // Ensures the image covers the entire container
              }}
            />

            {/* Title on top of the image */}
            <Box
              style={{
                position: "absolute", // Overlay the text on top of the image
                top: "30%",
                left: "5%",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px", // Optional rounded corners
                textAlign: "left",
              }}
            >
              <Text
                as="h1"
                fontSize="5em"
                fontWeight="bold"
                letterSpacing={3}
                noOfLines={2}
                data-aos="fade-up"
              >
                {tab.title.substring(0, 20) || `Tab ${index + 1}`}
              </Text>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>

      {/* Swiper */}
      <Swiper
        slidesPerView={5}
        grabCursor={true}
        modules={[FreeMode]}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: true,
          momentumBounceRatio: 0.1,
          sticky: true,
        }}
        breakpoints={{
          480: { slidesPerView: 2.8, spaceBetween: 5 },
          760: { slidesPerView: 3, spaceBetween: 5 },
          1024: { slidesPerView: 3.8, spaceBetween: 5 },
          1114: { slidesPerView: 5, spaceBetween: 0 },
        }}
      >
        {tabData.map((tab) => (
          <SwiperSlide
            key={tab.id}
            className={active === tab.id ? "active" : ""}
          >
            <Tab
              width={{ base: "220px", md: "280px", l: "200px", xl: "320px" }}
              height={{ base: "120px", md: "180px", l: "120px", xl: "180px" }}
              onClick={() => setActive(tab.id)} // Set active tab on click
              style={{
                margin: "20px 0",
                borderRadius: "8px",
                border: active === tab.id ? "2px solid #3498db " : "none",
              }}
              className="tab-item"
            >
              <Image
                src={tab.image}
                alt={`Tab ${tab.id}`}
                style={{
                  borderRadius: "inherit",
                  padding: active === tab.id ? "0" : "10px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Tab>
          </SwiperSlide>
        ))}
      </Swiper>
    </Tabs>
  );
};

export default Overview;
