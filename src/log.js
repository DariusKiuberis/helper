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

/**
 * Enhanced console.log
 *
 * @param {*} param {any} - put anything to log it
 */
const log = (...param) => {
  // generate random number between 100 and 999, so it's always will be 3 digits number
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  const randomColor =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];

  console.log(
    `%c ${randomNumber}       `,
    `background:${randomColor}`,
    ...param
  );
  console.log(
    "......................................................................."
  );
};

export default log;
