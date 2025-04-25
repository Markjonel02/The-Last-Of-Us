import elliedina from "../../assets/img/keyfeatures/elliedinahorse.png";
import abbylev from "../../assets/img/keyfeatures/abbywlev.png";
import joelguitar from "../../assets/img/keyfeatures/joelguitar.png";
import abbyice from "../../assets/img/keyfeatures/abbyice.png";


const KeyfeaturesData = (id, title, image, desc) => {
  return { id, title, image, desc };
};

export const featuresData = [
  KeyfeaturesData(
    1,
    "Native PS5 enhancements",
    elliedina,
    "Built for the PS5, The Last of Us Part II Remastered enhances the original PS4 game in ways not possible before. Visual performance now includes native 4K1 output in Fidelity Mode, 1440p upscaled to 4K in Performance Mode, and an Unlocked Framerate option for TVs that support VRR. The Last of Us Part II Remastered also includes improved load times to let you jump right back into the action. Descriptive Audio and Speech to Vibrations have also been added to The Last of Us Part II Remastereds suite of accessibility features."
  ),
  KeyfeaturesData(
    2,
    "No Return – A roguelike survival mode",
    abbylev,
    "Built for the PS5, The Last of Us Part II Remastered enhances the original PS4 game in ways not possible before. Visual performance now includes native 4K1 output in Fidelity Mode, 1440p upscaled to 4K in Performance Mode, and an Unlocked Framerate option for TVs that support VRR. The Last of Us Part II Remastered also includes improved load times to let you jump right back into the action. Descriptive Audio and Speech to Vibrations have also been added to The Last of Us Part II Remastered suite of accessibility features."
  ),
  KeyfeaturesData(
    3,
    "New ways to play",
    joelguitar,
    "Delve deeper into this beloved adventure and learn how the original game was created. Lost Levels let you explore early-development versions of three new levels not seen in the original The Last of Us Part II: Sewers, Jackson Party and Boar Hunt. Enjoy hours of new developer commentary about The Last of Us Part II’s development as you experience the game."
  ),
  KeyfeaturesData(
    4,
    "Graphical improvements and full DualSense® wireless controller support",
    abbyice,
    "The beautiful yet dangerous world of The Last of Us Part II Remastered is brought to new life on the PS5. This version features increased texture resolution, increased Level-of-Detail distances, improved shadow quality, animation sampling rate, and more. The Last of Us Part II Remastered also makes full use of the DualSense wireless controllers haptic feedback and adaptive triggers to allow every weapon to feel distinct and convey an increased sense of presence in your surroundings as you explore the snowy mountains of Jackson and the rain-drenched city streets of Seattle."
  ),
];
