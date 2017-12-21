const empty = require('../utils/empty')

const every = (array, fn) => {
  if (empty(array)) return undefined

  return array.reduce((acc, cur) => {
    fn(cur) && acc !== false ? acc = true : acc = false

    return acc
  })
}

module.exports = every
