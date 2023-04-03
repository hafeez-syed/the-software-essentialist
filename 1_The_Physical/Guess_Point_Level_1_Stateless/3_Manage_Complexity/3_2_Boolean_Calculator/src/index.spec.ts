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

    test('should read NOT string and return boolean', () => {
        expect(booleanCalculator.convert('NOT TRUE')).toBe(false)
        expect(booleanCalculator.convert('NOT FALSE')).toBe(true)
    })

    test('should read AND string and return boolean', () => {
        expect(booleanCalculator.convert('TRUE AND TRUE')).toBe(true)
        expect(booleanCalculator.convert('TRUE AND FALSE')).toBe(false)
        expect(booleanCalculator.convert('FALSE AND TRUE')).toBe(false)
        expect(booleanCalculator.convert('FALSE AND FALSE')).toBe(false)
    })

    test('should read OR string and return boolean', () => {
        expect(booleanCalculator.convert('TRUE OR TRUE')).toBe(true)
        expect(booleanCalculator.convert('TRUE OR FALSE')).toBe(true)
        expect(booleanCalculator.convert('FALSE OR TRUE')).toBe(true)
        expect(booleanCalculator.convert('FALSE OR FALSE')).toBe(false)
    })
})
