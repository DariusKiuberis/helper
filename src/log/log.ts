/* eslint-disable no-console */
import _ from 'lodash'
import { isBrowser, isNode } from 'environ'

import isConfigExist from './logic/isConfigExist'

export const log = (...value: Array<unknown>): unknown => {
  // if enviroment is production no console logs at all
  if (process.env.NODE_ENV === 'production') {
    return undefined
  }

  //   console.log(
  //     'is Browser:',
  //     isBrowser(),
  //     'is Node : ',
  //     isNode(),
  //     'ENVIRONMENT: ',
  //     process.env.NODE_ENV
  //   )

  if (process.env.NODE_ENV === 'development') {
    // console.log(' DEVELOPMENT log version 68', process.env.NODE_ENV)

    if (value.length === 0) {
      return console.log()
    }

    const configExist = isConfigExist(value[0])

    if (configExist) {
      return console.log(1111, value[0])
    }

    console.log(2222, value)
  }

  // if unknown enviroment log nothing
  return undefined
}

//TESTING log()

log(
  {
    logConfig: {
      color: 'red'
    }
  },
  'lalalal',
  333,
  'eee'
)

// const colorsArray = [
//   'Crimson',
//   'YellowGreen',
//   'Aqua',
//   'Pink',
//   'Yellow',
//   'AntiqueWhite',
//   'Aquamarine',
//   'NavajoWhite',
//   'MediumSlateBlue',
//   'Chocolate',
//   'Chartreuse',
//   'Coral',
//   'DarkCyan',
//   'DeepSkyBlue',
//   'DeepPink',
//   'Gainsboro',
//   'LightCoral',
//   'Olive',
//   'Plum',
//   'Teal',
//   'SlateGray',
//   'SteelBlue',
//   'Salmon',
//   'Sienna',
//   'Orange'
// ]

// const log = (...param) => {
//   // generate random number between 100 and 999, so it's always will be 3 digits number
//   const randomNumber = Math.floor(Math.random() * (999 - 100 + 1)) + 100
//   const randomColor =
//     colorsArray[Math.floor(Math.random() * colorsArray.length)]

//   console.log(
//     `%c ${randomNumber}       `,
//     `background:${randomColor}`,
//     ...param
//   )
//   console.log(
//     '.......................................................................'
//   )
// }

// export default log
