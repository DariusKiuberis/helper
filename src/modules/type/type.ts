/**
 * Function that returns type of passed variable
 *
 * @param {*} prop {any} - prop
 */
export const type = (prop: any) => {
  return Object.prototype.toString.call(prop).slice(8, -1).toLowerCase()
}
