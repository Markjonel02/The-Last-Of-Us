import tlous1 from "../../assets/img/Discover/tlous-slider-1.png";
import tlous2 from "../../assets/img/Discover/tlous-slider-2.png";
import tlous3 from "../../assets/img/Discover/tlous-slider-3.png";
import tlous4 from "../../assets/img/Discover/tlous-slider-4.png";
import tlous5 from "../../assets/img/Discover/tlous-slider-5.png";
import tlous6 from "../../assets/img/Discover/tlous-slider-6.png";

// Correcting parameter order
const tlousdisc = (id, title, image, desc) => {
  return { id, title, image, genre: "action", desc };
};

export const discoverData = [
  tlousdisc(
    1,
    "The Last of Us Part I",
    tlous1,
    "Endure and Survive. Relive the beloved game that started it all, rebuilt for PlayStation 5 and now available on PC."
  ),
  tlousdisc(
    2,
    "The Last of Us: Left Behind",
    tlous2,
    "The Last of Us: Left Behind combines survival, loyalty, and love with intense gameplay in this critically acclaimed chapter."
  ),
  tlousdisc(
    3,
    "The Last of Us Part II",
    tlous3,
    "Confront the devastating physical and emotional repercussions of Ellie's actions."
  ),
  tlousdisc(
    4,
    "The Last of Us Remastered",
    tlous4,
    "Winner of over 200 Game of the Year awards, The Last of Us has been rebuilt for PlayStation 4."
  ),
  tlousdisc(
    5,
    "The Last of Us",
    tlous5,
    "Play as Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post apocalyptic United States."
  ),
  tlousdisc(
    6,
    "The Last of Us Part II Remastered",
    tlous6,
    "Experience Ellie and Abby's emotional journeys with new enhancements. Available now on PS5, arriving for PC on April 3, 2025."
  ),
];
