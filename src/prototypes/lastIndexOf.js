const lastIndexOf = (array, value) => {
  return array.reduce((acc, cur, index) => {
    if (value === cur) acc = index

    return acc
  }, -1)
}

module.exports = lastIndexOf
