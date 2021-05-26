/* eslint-disable no-console */
import _ from 'lodash'

const baseStyles = [
  'color: red',
  'background-color: green',
  'padding: 2px 4px',
  'border-radius: 2px'
].join(';')

const browser = (config: unknown, rest: Array<unknown>): unknown => {
  return _.forEach(rest, (value, key) => {
    console.log(`%c ${key}`, baseStyles, '', value)
  })
}

export default browser
