const filter = require('../prototypes/filter')

describe('filter', () => {
  const isEqual2 = x => x === 2

  it('empty array', () => {
    expect(filter([], isEqual2)).toEqual([])
  })

  it('isEqual2', () => {
    expect(filter([1, 2, 3, 4], isEqual2)).toEqual([2])
  })
})
