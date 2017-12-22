const map = require('../prototypes/map')

describe('map', () => {
  it('empty array', () => {
    const multiply2 = x => x * 2

    expect(map([], multiply2)).toEqual([])
  })
})

describe('map', () => {
  it('multiply data by 2', () => {
    const multiply2 = x => x * 2

    expect(map([1, 2, 3], multiply2)).toEqual([2, 4, 6])
  })
})
