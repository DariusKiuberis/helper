import _ from 'lodash'

const logObjects = (rest: any, indent: number) => {
  if (_.isPlainObject(rest)) {
    return JSON.stringify(rest, null, indent)
  }
  if (_.isArray(rest)) {
    return JSON.stringify(rest, null, indent)
  }
  return rest
}

export default logObjects
