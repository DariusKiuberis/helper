import _ from 'lodash'
import colors from '../../../../../utils/styles/node/colors'

const red = '\x1b[41m'
const reset = '\x1b[0m'
const bold = '\x1b[1m'
const Underscore = '\x1b[4m'

const handleConfig = (config: any) => {
  let bgColor = ''
  // iterate through config
  _.forIn(config, (item, i) => {
    if (item.bg) {
      const col = item.bg

      // match color defined in logConfig
      _.forIn(colors, (value, key) => {
        if (col === key) {
          return (bgColor = value)
        }
      })
    }
  })
  //   console.log(`${bgColor}${bold}%s${reset}`, `${key} :`, value)
  return `${bgColor}${bold}%s${reset}`
}

export default handleConfig
