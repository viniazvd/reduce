const lastIndexOf = require('../prototypes/lastIndexOf')

describe('lastIndexOf', () => {
  it('empty array', () => {
    expect(lastIndexOf([], 3)).toEqual(-1)
  })

  it('find 2 in array', () => {
    expect(lastIndexOf([1, 2, 3, 4, 5, 6], 2)).toEqual(1)
  })

  it('find last index found', () => {
    expect(lastIndexOf([0, 2, 1, 2, 1, 2, 4, 2, 1], 2)).toEqual(7)
  })

  it('find last index found', () => {
    expect(lastIndexOf([0, 2, 1, 2, 1, 2, 4, 2, 1], 1)).toEqual(8)
  })

  it('no founded value', () => {
    expect(lastIndexOf([1, 2, 3, 4, 5, 6], 7)).toEqual(-1)
  })

  it('find correct index when the value isn\'t the index', () => {
    expect(lastIndexOf([10, 11, 12, 13, 14], 12)).toEqual(2)
  })
})
