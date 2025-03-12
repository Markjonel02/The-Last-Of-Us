import runner from "../../assets/img/Characters_img/Infected/The-Last-Of-Us-Background-Isolated-PNG.png";
import stalker from "../../assets/img/Characters_img/Infected/stalker.jpg";
import clicker from "../../assets/img/Characters_img/Infected/Clicker.jpg";
import shamblers from "../../assets/img/Characters_img/Infected/shamblers.png";
import bloaters from "../../assets/img/Characters_img/Infected/Bloater.png";
import ratking from "../../assets/img/Characters_img/Infected/rat king.png";

const Infecties = (id, image, name, desc) => ({
  id,
  image,
  Infectedname: name,
  desc,
  History: {
    GroupType: "Infected",
    Location: "World Wide",
  },
  enemies: "Survivor",
});

export const Infected = [
  Infecties(
    1,
    runner,
    "Runners",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
  Infecties(
    2,
    stalker,
    "Stalker",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
  Infecties(
    3,
    clicker,
    "Clicker",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
  Infecties(
    4,
    shamblers,
    "Shamblers",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
  Infecties(
    5,
    bloaters,
    "Bloaters",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
  Infecties(
    6,
    ratking,
    "Ratking",
    "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight.[2]The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being non-infected human enemies."
  ),
];
