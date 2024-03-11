/// <reference types="vite/client" />

import kickSound from "../assets/Kick.mp3";
import kickNHatSound from "../assets/Kick-n-Hat.mp3";
import openHHSound from "../assets/Open-HH.mp3";
import closedHHSound from "../assets/Closed-HH.mp3";
import clapSound from "../assets/Clap.mp3";
import heater1Sound from "../assets/Heater-1.mp3";
import heater2Sound from "../assets/Heater-2.mp3";
import heater3Sound from "../assets/Heater-3.mp3";
import heater4Sound from "../assets/Heater-4.mp3";

export const KICK = {
  audio: new Audio(kickSound),
  key: "Z",
  name: "Kick",
};
export const KICKNHAT = {
  audio: new Audio(kickNHatSound),
  key: "X",
  name: "Kick-N-Hat",
};
export const OPENHH = {
  audio: new Audio(openHHSound),
  key: "C",
  name: "Open-HiHat",
};
export const CLOSEDHH = {
  audio: new Audio(closedHHSound),
  key: "W",
  name: "Closed-HiHat",
};
export const CLAP = {
  audio: new Audio(clapSound),
  key: "Q",
  name: "Clap",
};
export const HEATER1 = {
  audio: new Audio(heater1Sound),
  key: "E",
  name: "Heater 1",
};
export const HEATER2 = {
  audio: new Audio(heater2Sound),
  key: "A",
  name: "Heater 2",
};
export const HEATER3 = {
  audio: new Audio(heater3Sound),
  key: "S",
  name: "Heater 3",
};
export const HEATER4 = {
  audio: new Audio(heater4Sound),
  key: "D",
  name: "Heater 4",
};
