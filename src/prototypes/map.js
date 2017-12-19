const map = (array, fn) => {
  return array.reduce((acc, cur) => {
    acc.push(fn(cur))
    return acc
  }, [])
}

module.exports = map
