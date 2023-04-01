class StatsCalculator {
    constructor(private sequence: number[]) {
        this.sequence = sequence
    }

    private sortNumbers(sequence: number[]): number[] {
        return sequence.sort((a, b) => a - b)
    }

    minimumValue(): number {
        console.log(this.sortNumbers(this.sequence))
        return this.sortNumbers(this.sequence)[0]
    }
}

export default StatsCalculator