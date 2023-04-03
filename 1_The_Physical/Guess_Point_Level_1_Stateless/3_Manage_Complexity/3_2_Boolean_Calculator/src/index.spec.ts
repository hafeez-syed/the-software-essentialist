import BooleanCalculator from './index'
interface IBooleanCalculator {
    setFirstNumber: (number: number) => void
    setSecondNumber: (number: number) => void
    setOperator: (op: string) => void
    getResult: () => number
    convert: (input: string) => boolean
}

describe('boolean calculator', () => {
    let booleanCalculator: IBooleanCalculator
    beforeEach(() => {
        booleanCalculator = BooleanCalculator()
    })

    test('should read simple string and return boolean', () => {
        expect(booleanCalculator.convert('TRUE')).toBe(true)
        expect(booleanCalculator.convert('FALSE')).toBe(false)
    })
})
