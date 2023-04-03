function BooleanCalculator() {
    let result = 0
    let operator = ''
    let firstNumber = 0
    let secondNumber = 0
    
    function calculate(firstNumber: number, secondNumber: number, operator: string) {
        switch (operator) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
        default:
            return 0
        }
    }
    
    function setFirstNumber(number: number) {
        firstNumber = number
    }
    
    function setSecondNumber(number: number) {
        secondNumber = number
    }
    
    function setOperator(op: string) {
        operator = op
    }
    
    function getResult() {
        result = calculate(firstNumber, secondNumber, operator)
        return result
    }

    function convert(input: string) {
        return JSON.parse(input.toLowerCase())
    }
    
    return {
        setFirstNumber,
        setSecondNumber,
        setOperator,
        getResult,
        convert,
    }
}

export default BooleanCalculator