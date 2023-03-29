const sequence: number[] = [2, 4, 21, -8, 53, 40]

describe('stats calculator', () => {
    test('return the minimum value from the sequence', () => {
        const stats = new StatsCalculator(sequence)
        expect(stats.minimumValue()).toBe(-8)
    })
})