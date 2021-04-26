/* eslint-disable no-console */
import { isBrowser, isNode } from 'environ'
import browser from './logic/browser/browser'
import nodejs from './logic/nodejs/nodejs'

type Keys1 = 'bgGreen' | 'color' | 'bold'
type Value1 = number | string | boolean

type Keys = 'logConfig'
type Value = Partial<Record<Keys1, Value1>>

export const log = (config?: unknown, ...rest: Array<unknown>): unknown => {
  if (process.env.NODE_ENV === 'production') {
    return undefined
  }

  if (process.env.NODE_ENV === 'development') {
    // if empty log()
    if (rest.length === 0 && !config) {
      return console.log()
    }

    if (isBrowser()) {
      browser(config, rest)
    }

    if (isNode()) {
      nodejs(config, rest)
    }
  }

  // if unknown enviroment log nothing
  return undefined
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// log(55)

// log('only one param')
// log('first param', 'second param')

log(
  {
    logConfig: {
      bg: 'bgBlue',
      color: 'white',
      bold: true
    }
  },
  [1, 2, 3, [[{ mama: 22 }]], { lsll: 111 }],
  'eee',
  true,
  { obj: 33 }
)
