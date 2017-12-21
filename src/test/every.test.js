const every = require('../prototypes/every')

describe('every', () => {
  it('when is valid', () => {
    const lessThan = x => x < 6

    expect(every([1, 2, 3, 4, 5], lessThan)).toEqual(true)
  })

  it('when is invalid', () => {
    const lessThan = x => x > 2

    expect(every([1, 2, 3, 4, 5], lessThan)).toEqual(false)
  })
})
