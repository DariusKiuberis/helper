/* eslint-disable no-console */
import _ from 'lodash'
import chalk from 'chalk'

const isConfig = (arg: unknown): boolean => {
  if (_.isPlainObject(arg)) {
    return true
  }
  return false
}

const customStyling = (config: unknown) => {
  return `%c`
}
/**
 * lalal
 *
 * @param {...Array<unknown>} value
 * @return {*}  {void}
 */
const log = (...value: Array<unknown>): void => {
  if (process.env.NODE_ENV === 'production') {
    return undefined
  }
  if (value.length === 0) {
    return console.log(chalk.red('========================='))
  }

  const config = isConfig(value[0])

  if (!config) {
    return console.log('--->', value)
  }

  console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
}

export default log
