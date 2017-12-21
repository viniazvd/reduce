const empty = require('../utils/empty')

const find = (array, fn) => {
  if (empty(array)) return undefined

  return array.reduce((acc, cur, index) => {
    if (fn(cur) && acc === array[0]) acc = cur

    return acc !== array[0]
      ? acc
      : undefined
  })
}

module.exports = find
