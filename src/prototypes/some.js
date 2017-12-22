const empty = require('../utils/empty')

const some = (array, fn) => {
  if (empty(array)) return undefined

  return array.reduce((acc, cur) => {
    fn(cur) || acc !== true ? acc = true : acc = false

    return acc
  })
}

module.exports = some
