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

    test('phrase "Was It A Rat I Saw" is a Palindrome', () => {
        expect(Palindrome('Was It A Rat I Saw')).toBe(true)
    })

    test('phrase "Never Odd or Even" is a Palindrome', () => {
        expect(Palindrome('Never Odd or Even')).toBe(true)
    })
})