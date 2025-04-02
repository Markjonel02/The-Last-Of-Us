import ep1 from "../../assets/img/Building/ep1 fathers love.png";
import ep2 from "../../assets/img/Building/ep2 blooming terror.png";
import ep3 from "../../assets/img/Building/ep3 cruel world.png";
import ep4 from "../../assets/img/Building/ep4 ellie and joel.png";
import ep5 from "../../assets/img/Building/ep5 a surreal experience.png";

const tlousb = (id, title, img) => {
  return { id, title, img };
};

export const vidData = [
  tlousb(1, "The Fathers Love|Building the Last of us", ep1),
  tlousb(2, "Blooming Terror|Building the last of us", ep2),
  tlousb(3, "Cruel World|Building the last of us", ep3),
  tlousb(4, "ellie and joel|Building the last of us", ep4),
  tlousb(5, "a surreal experience|Building the last of us", ep5),
];
