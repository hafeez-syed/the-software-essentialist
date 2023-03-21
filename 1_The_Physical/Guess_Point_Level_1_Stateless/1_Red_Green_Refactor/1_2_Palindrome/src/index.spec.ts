import { Palindrome } from './index'

describe('palindrome checker', () => {
    test('word "wow" is a Palindrome', () => {
        expect(Palindrome('wow')).toBe(true)
    })

    test('word "Mow" is a Palindrome', () => {
        expect(Palindrome('Mom')).toBe(true)
    })

    test('word "racecar" is a Palindrome', () => {
        expect(Palindrome('racecar')).toBe(true)
    })

    test('word "bill" is not a Palindrome', () => {
        expect(Palindrome('bill')).toBe(false)
    })

    test('word "greetings" is not a Palindrome', () => {
        expect(Palindrome('greetings')).toBe(false)
    })
})