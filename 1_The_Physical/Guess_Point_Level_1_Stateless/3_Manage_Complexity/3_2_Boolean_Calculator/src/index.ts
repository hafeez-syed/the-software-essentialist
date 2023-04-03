enum MAP {
    'TRUE' = 'true',
    'FALSE' = 'false',
    'NOT' = '!',
    'AND' = '&&',
    'OR' = '||',
}

function BooleanCalculator() {

    function convert(input: string) {
        const exp = input.split(' ').map((word) => {
            return MAP[word as keyof typeof MAP]
        }).join('')

        return eval(exp)
    }
    
    return {
        convert,
    }
}

export default BooleanCalculator
