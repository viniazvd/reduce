const indexOf = require('../prototypes/indexOf')

describe('indexOf', () => {
  it('empty array', () => {
    expect(indexOf([], 3)).toEqual(-1)
  })

  it('find 2 in array', () => {
    expect(indexOf([1, 2, 3, 4, 5, 6], 2)).toEqual(1)
  })

  it('find 2 in array with tow numbers 2', () => {
    expect(indexOf([1, 2, 3, 4, 5, 6, 2], 2)).toEqual(1)
  })

  it('no founded value', () => {
    expect(indexOf([1, 2, 3, 4, 5, 6], 7)).toEqual(-1)
  })

  it('find correct index when the value isn\'t the index', () => {
    expect(indexOf([10, 11, 12, 13, 14], 12)).toEqual(2)
  })
})
