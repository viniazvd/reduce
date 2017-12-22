const some = require('../prototypes/some')

describe('some', () => {
  it('when is valid', () => {
    const fn = x => x < 4

    expect(some([1, 2, 3, 4, 5], fn)).toEqual(true)
  })

  it('when is invalid', () => {
    const fn = x => x > 6

    expect(some([1, 2, 3, 4, 5], fn)).toEqual(false)
  })
})
