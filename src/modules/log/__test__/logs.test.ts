/* eslint-disable no-console */
import { log } from '../log'

describe('log()', () => {
  test('2 + 3 should be 5', () => {
    expect(2 + 3).toBe(5)
  })
  // test('log(2)', () => {
  //   expect(log(2)).toBe(5)
  // })
  // it('calls console.log with "hello"', () => {
  //   const consoleSpy = jest.spyOn(console, 'log')
  //   console.log('hello')
  //   // expect(log('hello')).toHaveBeenCalledWith('hello')
  //   expect(consoleSpy).toHaveBeenCalled()
  // })
})
