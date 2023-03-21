import { Palindrome } from './index'

describe('palindrome checker', () => {
    test('should return a string', () => {
        expect(typeof Palindrome('')).toBe('string')
    })

    test('should return a Palindrome of the word "wow"', () => {
        expect(Palindrome('wow')).toBe('wow')
    })

    test('should return a Palindrome of the word "Mom"', () => {
        expect(Palindrome('Mom')).toBe('mom')
    })

    test('should return a Palindrome of the word "racecar"', () => {
        expect(Palindrome('racecar')).toBe('racecar')
    })
})