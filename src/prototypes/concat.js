const empty = require('../utils/empty')

const concat = (array1, array2) => {
  if (empty(array2)) return array1
  if (empty(array1)) return array2

  return array1.reduce((acc, cur, index) => {
    acc = [...array1, ...array2.slice(0, index + 1)]

    return acc
  }, [])
}

module.exports = concat
