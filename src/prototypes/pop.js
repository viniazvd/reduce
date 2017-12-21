const empty = require('../utils/empty')

const pop = (array) => {
  if (empty(array)) return []

  return array.reduce((acc, cur, index) => {
    if (array[index + 1] === undefined) {
      acc = array.slice(0, index)
    }

    return acc
  })
}

module.exports = pop
