/* eslint-disable no-console */
import _ from 'lodash'
import isConfigExist from '../isConfigExist'
import handleConfig from './logic/handleConfig'

const nodejs = (config: any, rest: Array<unknown>): unknown => {
  const configExist = isConfigExist(config)

  // log({logConfig: {}}) with "logConfig"
  if (configExist) {
    return _.forEach(rest, (value, key) => {
      const buildLog = handleConfig(config, value, key)
      return buildLog
    })
  }

  // log(1) no "logConfig"
  if (!configExist && config && rest.length === 0) {
    //  console.log(`${BgRed}${bold}%s${reset}`, config)
    return console.log(config)
  }

  // log(1,2,3,4,5) and no "logConfig" so return with no styling
  if (!configExist && config && rest.length > 0) {
    console.log('0: ', config)
    return _.forEach(rest, (value, key) => {
      console.log(`${key + 1}:`, value)
    })
  }
}

export default nodejs
