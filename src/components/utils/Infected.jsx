import runner2 from "../../assets/img/Characters_img/Infected/Runners (1).png";
import stalker from "../../assets/img/Characters_img/Infected/Stalker (2).png";
import clicker from "../../assets/img/Characters_img/Infected/Clicker.png";
import shamblers from "../../assets/img/Characters_img/Infected/shambler.png";
import bloaters from "../../assets/img/Characters_img/Infected/Bloater (2).png";
import ratking from "../../assets/img/Characters_img/Infected/rat king (2).png";

/* weapons gun  */
import pistol9mm from "../../assets/img/Weapons_img/9mm.png";
import bow from "../../assets/img/Weapons_img/bow.png";
import eldiado from "../../assets/img/Weapons_img/eldiablo.png";
import flamethrower from "../../assets/img/Weapons_img/flamethrower.png";
import shotgunpump from "../../assets/img/Weapons_img/pump shotgun.png";
import revolver from "../../assets/img/Weapons_img/revolver.png";
import rifle from "../../assets/img/Weapons_img/rifle.png";
import shorty from "../../assets/img/Weapons_img/shorty.png";

/* weapons melee  */
import nail from "../../assets/img/Weapons_img/Bomb/nailbomb.png";
import molotov from "../../assets/img/Weapons_img/Bomb/molotov.jpg";
import trapmine from "../../assets/img/Weapons_img/Bomb/trapmine.png";

const Infecties = (id, image, name, weaknessweapon) => ({
  id,
  image,
  Infectedname: name,
  weaknessweapon,
  desc: "The infected are humans who have been infected by the Cordyceps brain infection and subsequently mutated into horrific new forms. The resulting creatures are aggressive, and will attack any uninfected human and animals on sight. The infected are one of the main enemy types in The Last of Us, Left Behind, and The Last of Us Part II, the other being noninfected human enemies.",
  History: {
    GroupType: {
      Location: "World Wide",
    },
    enemies: "Survivor",
  },
});

export const Infected = [
  Infecties(1, runner2, "Runners", [
    { name: "pistol9mm", image: pistol9mm },
    { name: "bow", image: bow },
    { name: "eldiado", image: eldiado },
    { name: "flamethrower", image: flamethrower },
    { name: "shotgunpump", image: shotgunpump },
    { name: "revolver", image: revolver },
    { name: "rifle", image: rifle },
    { name: "shorty", image: shorty },
    { name: "trapmine", image: trapmine },
    { name: "nail", image: nail },
    { name: "molotov", image: molotov },
  ]),
  Infecties(2, stalker, "Stalker", [
    { name: "pistol9mm", image: pistol9mm },
    { name: "bow", image: bow },
    { name: "eldiado", image: eldiado },
    { name: "revolver", image: revolver },
    { name: "rifle", image: rifle },
    { name: "shorty", image: shorty },
    { name: "trapmine", image: trapmine },
    { name: "molotov", image: molotov },
  ]),
  Infecties(3, clicker, "Clicker", [
    { name: "pistol9mm", image: pistol9mm },
    { name: "bow", image: bow },
    { name: "eldiado", image: eldiado },
    { name: "flamethrower", image: flamethrower },
    { name: "shotgunpump", image: shotgunpump },
    { name: "revolver", image: revolver },
    { name: "rifle", image: rifle },
    { name: "shorty", image: shorty },
    { name: "molotov", image: molotov },
    { name: "trapmine", image: trapmine },
  ]),
  Infecties(4, shamblers, "Shamblers", [
    { name: "shotgunpump", image: shotgunpump },
    { name: "flamethrower", image: flamethrower },
    { name: "rifle", image: rifle },
    { name: "rifle", image: rifle },
    { name: "eldiado", image: eldiado },
    { name: "trapmine", image: trapmine },
  ]),
  Infecties(5, bloaters, "Bloaters", [
    { name: "molotov", image: molotov },
    { name: "flamethrower", image: flamethrower },
    { name: "rifle", image: rifle },
    { name: "eldiado", image: eldiado },
    { name: "shotgunpump", image: shotgunpump },
    { name: "trapmine", image: trapmine },
  ]),
  Infecties(6, ratking, "Ratking", [
    { name: "molotov", image: molotov },
    { name: "flamethrower", image: flamethrower },
    { name: "rifle", image: rifle },
    { name: "eldiado", image: eldiado },
    { name: "shotgunpump", image: shotgunpump },
    { name: "trapmine", image: trapmine },
  ]),
];
