import elliedina from "../../assets/img/keyfeatures/elliedinahorse.png";
import abbylev from "../../assets/img/keyfeatures/abbywlev.png";
import joelguitar from "../../assets/img/keyfeatures/joelguitar.png";
import abbyice from "../../assets/img/keyfeatures/abbyice.png";
import { desc } from "framer-motion/client";

const KeyfeaturesData = (id, title, image, desc) => {
  return { id, title, image, desc };
};

export const featuresData = [
  KeyfeaturesData(
    1,
    "Native PS5 enhancements",
    elliedina,
    "Built for the PS5, The Last of Us Part II Remastered enhances the original PS4 game in ways not possible before. Visual performance now includes native 4K1 output in Fidelity Mode, 1440p upscaled to 4K in Performance Mode, and an Unlocked Framerate option for TVs that support VRR. The Last of Us Part II Remastered also includes improved load times to let you jump right back into the action. Descriptive Audio and Speech to Vibrations have also been added to The Last of Us Part II Remastered's suite of accessibility features."
  ),
  KeyfeaturesData(2, "No Return – A roguelike survival mode", abbylev, desc),
  KeyfeaturesData(3, "New ways to play", joelguitar, desc),
  KeyfeaturesData(
    4,
    "Graphical improvements and full DualSense® wireless controller support",
    abbyice,
    desc
  ),
];
