const empty = require('../utils/empty')

const unshift = (array, ...value) => {
  if (empty(array)) return []

  return array.reduce((acc, cur, index) => {
    index === 0
      ? acc = [...value, cur]
      : acc = [...acc, cur]

    return acc
  }, [])
}

module.exports = unshift
