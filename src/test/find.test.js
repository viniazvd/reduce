const find = require('../prototypes/find')

describe('find', () => {
  const find2 = x => x === 2
  const find7 = x => x === 7

  it('empty array', () => {
    expect(find([], find2)).toEqual(undefined)
  })

  it('multiply data by 2', () => {
    expect(find([1, 2, 3, 4, 5, 6], find2)).toEqual(2)
  })

  it('no founded value', () => {
    expect(find([1, 2, 3, 4, 5, 6], find7)).toEqual(undefined)
  })
})
