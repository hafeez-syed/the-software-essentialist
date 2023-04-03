function BooleanCalculator() {

    function convert(input: string) {
        return JSON.parse(input.toLowerCase())
    }
    
    return {
        convert,
    }
}

export default BooleanCalculator
