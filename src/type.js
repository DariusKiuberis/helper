/**
 * Function returns type of passed variable
 *
 * @param {*} prop {any} - prop
 */
const type = (prop) => {
  return Object.prototype.toString.call(prop).slice(8, -1).toLowerCase();
};

export default type;
