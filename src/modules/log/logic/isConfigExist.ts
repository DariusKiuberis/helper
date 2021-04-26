import _ from 'lodash'

// check if log() have config object
const isConfigExist = (config: any): boolean => {
  if (_.isPlainObject(config)) {
    const configValue = _.get(config, 'logConfig')

    if (_.isPlainObject(configValue)) {
      return true
    }
  }
  return false
}

export default isConfigExist
