const filter = (array, fn) => {
  return array.reduce((acc, cur) => {
    if (fn(cur)) acc = [...acc, cur]

    return acc
  }, [])
}

module.exports = filter
