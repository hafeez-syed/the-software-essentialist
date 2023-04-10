enum MAP {
    'TRUE' = 'true',
    'FALSE' = 'false',
    'NOT' = '!',
    'AND' = '&&',
    'OR' = '||',
}

function BooleanCalculator() {

    function getExpressions(expressionString: string) {
        return expressionString.split(' ').map((word) => {
            return MAP[word as keyof typeof MAP]
        }).join('')
    }

    function removeParenthesis(expressionString: string) {
        return expressionString.substring(expressionString.indexOf('(')+1, expressionString.indexOf(')'))
    }

    function convert(input: string) {
        if (input.includes('(') && input.includes(')')) {
            const expressionWithParenthesis = input.substring(input.indexOf('('), input.indexOf(')')+1)
            const expressionWithoutParenthesis = eval(getExpressions(removeParenthesis(input)))
            const simplifiedExpression = input.replace(expressionWithParenthesis, expressionWithoutParenthesis)
            return eval(getExpressions(simplifiedExpression.toUpperCase()))
        }

        return eval(getExpressions(input))
    }
    
    return {
        convert,
    }
}

export default BooleanCalculator
