import tlou4 from "../../assets/img/Thumbnails/the-last-of-us-part-i-keyart-01-en-18may22.webp";
import tlou2 from "../../assets/img/Thumbnails/the-last-of-us-part-ii-thumbnail-02-en-16nov23.webp";
import tlou3 from "../../assets/img/Thumbnails/TLOUTEST-HBO-Keyart-01-en-06dec22.webp";
import tlou5 from "../../assets/img/Thumbnails/the-last-of-us-part-2-keyart-01-en-15nov22.webp";
import tlou1 from "../../assets/img/Thumbnails/TLOU-Franchise-Hub-Keyart-01-en-06dec22.webp";

/* banner */
import tlous1 from "../../assets/img/Banner/The-Last-of-Us-hub-hero-banner.jpg";
import tlous2 from "../../assets/img/Banner/The-Last-of-Us-part-2-remastered-hub-hero-banner-desktop-01-en-27nov23.webp";
import tlous3 from "../../assets/img/Banner/TLOU-HBO-Banner-Desktop-01.jpg";
import tlous4 from "../../assets/img/Banner/The-Last-of-Us-Part-1-hub-hero-banner-desktop.webp";
import tlous5 from "../../assets/img/Banner/The-Last-of-Us-hub-hero-banner-desktop.webp";

const tlous = (id, name, image, title, txt, banner) => {
  return { id, name, image, title, txt, banner };
};

export const tabData = [
  tlous(
    1,
    "tlou1",
    tlou1,
    "THE LAST OF US",
    "WELCOME TO THE OFFICIAL SITE",
    tlous1
  ),
  tlous(
    2,
    "tlou2",
    tlou2,
    "THE LAST OF US PART II REMASTERED",
    "Experience the winner of over 300 games of the year awards remastered for PS5. Relive, or any play for the first time, ellie and abbys story with new gameplay modes, DualSense wireless controller integration, graphical enhancements and more. Available now.",
    tlous2
  ),
  tlous(
    3,
    "tlou3",
    tlou3,
    "THE LAST OF US",
    "Watch the exciting new trailer and see the critically acclaimed story brought to life like never before. Streaming on HBO Max.",
    tlous3
  ),
  tlous(
    4,
    "tlou4",
    tlou4,
    "The Last of us Part I",
    "Experience the emotional storytelling and unforgettable characters in The Last of us, Winner of over 200 Game of the year awards. now available on ps5 and pc",
    tlous4
  ),
  tlous(
    5,
    "tlou4",
    tlou5,
    "The last of us part II",
    "after their dangerous journey across the post pandemic United states, confront the devastating physical and emotional repercussions of ellies actions.",
    tlous5
  ),
];
