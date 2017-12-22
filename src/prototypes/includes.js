const includes = (array, value) => {
  return array.reduce((acc, cur) => {
    if (cur === value) acc = true

    return acc
  }, false)
}

module.exports = includes
