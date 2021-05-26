/* eslint-disable no-console */
import _ from 'lodash'
import colors from '../../../../../utils/styles/node/colors'
import generateRandomNumber from '../../generateRandomNumber'
import logObjects from './logObjects'

const reset = '\x1b[0m'

const handleConfig = (config: any, value: any, key: number) => {
  let bgColor = '\x1b[45m'
  let textColor = '\x1b[37m'
  let underscore = ''
  let bold = ''
  let blink = ''
  let keyNumber = ''
  let indent = 3

  _.forIn(config, (item) => {
    if (item.bgColor) {
      _.forIn(colors, (value, key) => {
        if (key === 'bg') {
          _.forIn(value, (v, k) => {
            if (item.bgColor === k) {
              return (bgColor = v)
            }
          })
        }
      })
    }

    if (item.textColor) {
      _.forIn(colors, (value, key) => {
        if (key === 'fg') {
          _.forIn(value, (v, k) => {
            if (item.textColor === k) {
              return (textColor = v)
            }
          })
        }
      })
    }

    if (item.underscore) {
      underscore = '\x1b[4m'
    }
    if (item.bold) {
      bold = '\x1b[1m'
    }

    if (item.blink) {
      blink = '\x1b[5m'
    }
    if (item.numbers && !item.numbersRandom) {
      const addOne = key + 1
      keyNumber = addOne.toString()
    }
    if (item.numbersRandom) {
      keyNumber = generateRandomNumber().toString()
    }

    if (item.indent) {
      indent = item.indent
    }
  })

  return console.log(
    `${bgColor}${textColor}${bold}${underscore}${blink}%s${reset}`,
    ` ${keyNumber} `,
    logObjects(value, indent)
  )
}

export default handleConfig
