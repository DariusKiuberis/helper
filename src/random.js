/**
 * Function returns random string or number.
 *
 * @param {string} type {string} - choose type (string, number or array)
 * @param {number} val1 {number} - min (for array: amount of arrays)
 * @param {number} val2 {number} - max (for array: nested arrays)
 */
const random = (type, val1, val2) => {
  if (!type) {
    return;
  }

  if (type === "number") {
    const newVal1 = val1 === undefined ? 1 : val1;
    const newVal2 = val2 === undefined ? 99 : val2;
    return Math.floor(Math.random() * (newVal2 - newVal1) + newVal1);
  }

  if (type === "string") {
    const newVal1 = val1 === undefined ? 5 : val1;
    let randomString = "";
    let randomAscii;
    for (let i = 0; i < newVal1; i += 1) {
      randomAscii = Math.floor(Math.random() * 25 + 97);
      randomString += String.fromCharCode(randomAscii);
    }
    return randomString;
  }

  if (type === "array") {
    const newVal1 = val1 === undefined ? 3 : val1;
    const newVal2 = val2 === undefined ? 3 : val2;
    let generatedArray = [];

    for (let outer = 0; outer < newVal1; outer++) {
      let innerArray = [];
      generatedArray.push(innerArray);
      for (let inner = 0; inner < newVal2; inner++) {
        let randomString = "";
        let randomAscii;
        for (let i = 0; i < 5; i += 1) {
          randomAscii = Math.floor(Math.random() * 25 + 97);
          randomString += String.fromCharCode(randomAscii);
        }

        innerArray.push([
          `${randomString}-` + 1,
          `${randomString}-` + 2,
          `${randomString}-` + 3,
        ]);
      }
    }

    return generatedArray;
  }

  return;
};

export default random;
