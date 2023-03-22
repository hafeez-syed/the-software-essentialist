const MIN_LIMIT = 1
const MAX_LIMIT = 100
const FIZZ = 3
const BUZZ = 5

function FizzBuzz(number: number): string | Error {
    if (number < MIN_LIMIT || number > MAX_LIMIT) {
        throw new Error('Number must be between 1 and 100')
    }

    if (number % FIZZ === 0 && number % BUZZ === 0) {
        return 'FizzBuzz'
    }

    if (number % FIZZ === 0) { 
        return 'Fizz'
    }

    if (number % BUZZ === 0) { 
        return 'Buzz'
    }

    return number.toString()
}

export default FizzBuzz
