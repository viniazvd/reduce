const empty = require('../utils/empty')

const fill = (array, value) => {
  if (empty(array)) return []

  return array.reduce((acc, cur) => {
    acc = [...acc, value]

    return acc
  }, [])
}

module.exports = fill
