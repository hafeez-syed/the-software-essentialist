
describe('password validator', () => {
    test('password length should be between 5 and 15', () => {
        const password = '12345678901234567890'
        const result = passwordValidator(password)
        expect(result).toBe(false)
        
    })

    test('password should have at least 1 digit', () => {
        const password = '12345678901234567890'
        const result = passwordValidator(password)
        expect(result).toBe(false)
        
    })

    test('password should have at least 1 uppercase letter', () => {
        const password = '12345678901234567890'
        const result = passwordValidator(password)
        expect(result).toBe(false)
        
    })
})

