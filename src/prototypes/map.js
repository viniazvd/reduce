const map = (array, fn) => {
  return array.reduce((acc, cur) => {
    if (fn(cur)) acc = [...acc, fn(cur)]

    return acc
  }, [])
}

module.exports = map
