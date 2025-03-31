import tlous1 from "../../assets/img/Discover/tlous-slider-1.png";
import tlous2 from "../../assets/img/Discover/tlous-slider-2.png";
import tlous3 from "../../assets/img/Discover/tlous-slider-3.png";
import tlous4 from "../../assets/img/Discover/tlous-slider-4.png";
import tlous5 from "../../assets/img/Discover/tlous-slider-5.png";
import tlous6 from "../../assets/img/Discover/tlous-slider-6.png";
const tlousdisc = (id, title, image, genre, desc) => {
  return { id, title, image, genre: "action", desc };
};

export const discoverData = [
  tlousdisc(
    1,
    "the last of us part I",
    tlous1,
    "Endure and Survive, Relive the beloved game that started it all, rebuilt for the playstation@5 console, and now available on pc. "
  ),
  tlousdisc(
    2,
    "the last of us: left behind",
    tlous2,

    "The last of us: left behind combines themes survival, loyalty and love with tense survival action gameplay int this critically acclaimed chapter. "
  ),
  tlousdisc(
    3,
    "the last of us part II",
    tlous3,
    "confront the devastating physical and emotional repercussions of ellies action"
  ),
  tlousdisc(
    4,
    "the last of us Remastered",
    tlous4,
    "winner of over 200 game of the year awards, the last of us been rebuilt for the playstation@4 system."
  ),
  tlousdisc(
    5,
    "the last of us ",
    tlous5,
    "Play as joel, a smuggler tasked with escorting a teenage girl, ellie, accross a post apocalyptic united states"
  ),
  tlousdisc(
    6,
    "the last of us part II remastered ",
    tlous6,
    "experience ellie and abby emotional journeys with new visual and performance enhancements and insights into the creation of game. Available now on ps5, and arriving for pc on april 3 2025."
  ),
];
