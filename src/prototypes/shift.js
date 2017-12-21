const empty = require('../utils/empty')

const shift = (array) => {
  if (empty(array)) return undefined

  return array.reduce((acc, cur, index) => {
    if (index === 1) {
      acc = array.slice(1)
    }

    return acc
  })
}

module.exports = shift
