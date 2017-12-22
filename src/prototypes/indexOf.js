const indexOf = (array, value) => {
  return array.reduce((acc, cur, index) => {
    if (value === cur && acc === -1) acc = index

    return acc
  }, -1)
}

module.exports = indexOf
