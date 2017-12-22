const empty = require('../utils/empty')

const push = (array, ...value) => {
  if (empty(array)) return array.concat(...value)

  return array.reduce((acc, cur, index) => {
    if (array.length === index + 1) acc = [...array, ...value]

    return acc
  }, [])
}

module.exports = push
