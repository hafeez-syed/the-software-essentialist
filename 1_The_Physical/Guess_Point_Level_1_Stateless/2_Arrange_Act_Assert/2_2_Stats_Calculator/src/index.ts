class StatsCalculator {
    constructor(private sequence: number[]) {
        this.sequence = sequence
    }

    private sortNumbers(sequence: number[]): number[] {
        return sequence.sort((a, b) => a - b)
    }

    minimumValue(): number {
        return this.sortNumbers(this.sequence)[0]
    }

    maximumValue(): number {
        return this.sortNumbers(this.sequence)[this.sequence.length - 1]
    }

    numberOfElements(): number {
        return this.sequence.length
    }

    averageValue(): number {
        const sum = this.sequence.reduce((a, b) => a + b, 0)
        return sum / this.sequence.length
    }
}

export default StatsCalculator