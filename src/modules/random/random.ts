/* eslint-disable no-console */

import arrayHandler from './handlers/arrayHandler/arrayHandler'
import numberHandler from './handlers/numberHandler/numberHandler'
import stringHandler from './handlers/stringHandler/stringHandler'

/**
 * Function returns random string or number.
 *
 * @param {string} type {string} - choose type (string, number or array)
 * @param {number} val1 {number} - min (for array: amount of arrays)
 * @param {number} val2 {number} - max (for array: nested arrays)
 */
const random = (type?: string, val1?: number, val2?: number): unknown => {
  if (!type && val1 && val2) {
    return undefined
  }

  if (type) {
    if (type === 'number') {
      return numberHandler(val1, val2)
    }

    if (type === 'string') {
      return stringHandler(val1)
    }

    if (type === 'array') {
      return arrayHandler(val1, val2)
    }
  }

  return
}

export default random

random({
  type: 'string',
  min: 3,
  max: 788
})

random().string()
