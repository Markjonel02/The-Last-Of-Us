import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import tlou4 from "../assets/img/Thumbnails/the-last-of-us-part-i-keyart-01-en-18may22.webp";
import tlou2 from "../assets/img/Thumbnails/the-last-of-us-part-ii-thumbnail-02-en-16nov23.webp";
import tlou3 from "../assets/img/Thumbnails/TLOUTEST-HBO-Keyart-01-en-06dec22.webp";
import tlou5 from "../assets/img/Thumbnails/the-last-of-us-part-2-keyart-01-en-15nov22.webp";
import tlou1 from "../assets/img/Thumbnails/TLOU-Franchise-Hub-Keyart-01-en-06dec22.webp";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";

const tlous = (id, name, image, title, txt, banner) => {
  return { id, name, image, title, txt, banner };
};
const tabData = [
  tlous(1, "tlou1", tlou1, "THE LAST OF US", "WELCOME TO THE OFFICIAL SITE"),
  tlous(
    2,
    "tlou2",
    tlou2,
    "THE LAST OF US PART II REMASTERED",
    "Experience the winner of over 300 games of the year awards remastered for PS5. Relive, or any play for the first time, ellie and abbys story with new gameplay modes, DualSense wireless controller integration, graphical enhancements and more. Available now."
  ),
  tlous(3, "tlou3", tlou3, "", ""),
  tlous(4, "tlou4", tlou4, "", ""),
  tlous(5, "tlou4", tlou5, "", ""),
];

const Overview = () => {
  const [active, SetActive] = useState("null");
  return (
    <Tabs>
      <TabPanels>
        {tabData.map((tab, index) => (
          <TabPanel key={index}>
            <Image
              src={tab.image || "https://via.placeholder.com/300"}
              alt={`Tab ${index + 1}`}
            />
          </TabPanel>
        ))}
      </TabPanels>
      <TabList>
        <Swiper
          slidesPerView={5}
          grabCursor="true"
          modules={[FreeMode]}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumBounce: true,
            momentumBounceRatio: 0.1,
            sticky: true,
          }}
          breakpoints={{
            // When window width is >= 768px

            480: {
              slidesPerView: 2.8,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3.8,
              spaceBetween: 5,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 5,
            },
            1114: {
              slidesPerView: 4.8,
            },
          }}
        >
          {tabData.map((tab, index) => (
            <SwiperSlide key={tab.id}>
              <Tab
                width={{ base: "220px", xl: "350px" }}
                height={{ base: "120px", xl: "180px" }}
                onClick={() => SetActive(tab.id)}
                style={{
                  margin: "20px 0",
                  borderRadius: "8px",
                  border: active === tab.id ? "2px solid #3498db " : "none", // Add border conditionally
                }}
              >
                <Image
                  src={tab.image}
                  alt={`Tab ${index + 1}`}
                  style={{
                    borderRadius: "inherit",
                    width: "100%",
                    height: "100%",
                  }}
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
