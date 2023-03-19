import FizzBuzz from './fizzbuzz';

describe('FizzBuzz', () => {
    test('should only accept strings', () => {
        expect(typeof FizzBuzz(1)).toBe('string')
    })

    test('should throw an error when number range is not valid', () => {
        expect(() => FizzBuzz(0)).toThrow(Error)
        expect(() => FizzBuzz(0)).toThrow('Number must be between 1 and 100')
    })

    test('should return FizzBuzz', () => {
        expect(FizzBuzz(15)).toBe('FizzBuzz')
        expect(FizzBuzz(30)).toBe('FizzBuzz')
        expect(FizzBuzz(45)).toBe('FizzBuzz')
    })

    test('should return Fizz', () => {
        expect(FizzBuzz(3)).toBe('Fizz')
        expect(FizzBuzz(9)).toBe('Fizz')
        expect(FizzBuzz(27)).toBe('Fizz')
        expect(FizzBuzz(66)).toBe('Fizz')
    })

    test('should return Buzz', () => {
        expect(FizzBuzz(5)).toBe('Buzz')
        expect(FizzBuzz(55)).toBe('Buzz')
        expect(FizzBuzz(25)).toBe('Buzz')
        expect(FizzBuzz(65)).toBe('Buzz')
    })

    test('should return the same number as string', () => {
        expect(FizzBuzz(2)).toBe('2')
        expect(FizzBuzz(8)).toBe('8')
        expect(FizzBuzz(14)).toBe('14')
        expect(FizzBuzz(97)).toBe('97')
    })
})
