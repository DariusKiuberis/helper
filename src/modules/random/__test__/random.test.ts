/* eslint-disable no-console */
import random from '../random'

describe('random()', () => {
  test('random("string", 11)', () => {
    expect(typeof random('string', 11)).toBe('string')
  })

  test('random("number", 10, 500)', () => {
    expect(typeof random('number', 10, 500)).toBe('number')
  })
})
