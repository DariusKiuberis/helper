// const log = require("./src/log");

const colorsArray = [
  "Crimson",
  "YellowGreen",
  "Aqua",
  "Pink",
  "Yellow",
  "AntiqueWhite",
  "Aquamarine",
  "NavajoWhite",
  "MediumSlateBlue",
  "Chocolate",
  "Chartreuse",
  "Coral",
  "DarkCyan",
  "DeepSkyBlue",
  "DeepPink",
  "Gainsboro",
  "LightCoral",
  "Olive",
  "Plum",
  "Teal",
  "SlateGray",
  "SteelBlue",
  "Salmon",
  "Sienna",
  "Orange",
];
// generate random number between 100 and 999, so it's always will be 3 digits number
const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
const randomColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];

/**
 * Enhanced console.log. All params is optional
 *
 * @param {*} param {any} - put whatever you want
 * @param {*} comment {any} - write comment
 * @param {*} color {any} - add color your color
 */
const log = (param = "", color = randomColor, comment = randomNumber) => {
  return console.log(`%c ${comment}  --->  `, `background:${color}`, param);
};

module.export = log;
