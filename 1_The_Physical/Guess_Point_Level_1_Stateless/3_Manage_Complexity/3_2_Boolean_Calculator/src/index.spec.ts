import BooleanCalculator from './index'
interface IBooleanCalculator {
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
